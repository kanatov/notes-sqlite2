"use server";

import {
  updateNote,
  deleteNoteById,
  addNote,
  NoteInterface,
} from "@/lib/notes";
import { revalidatePath } from "next/cache";

interface FormActionState {
  success: boolean;
  note?: NoteInterface;
}

function readFormData(formData: FormData) {
  return {
    id: parseInt(formData.get("id") as string),
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };
}

export async function updateNoteAction(
  _prevState: FormActionState | null,
  formData: FormData
): Promise<FormActionState> {
  const { id, title, content } = readFormData(formData);
  if (!id) {
    return { success: false };
  }

  const note = await updateNote({ id, title, content });
  revalidatePath(`/${id}`);
  return { success: true, note };
}

export async function deleteNoteAction(
  _prevState: FormActionState | null,
  formData: FormData
): Promise<FormActionState> {
  const { id } = readFormData(formData);
  if (!id) {
    return { success: false };
  }

  await deleteNoteById(id);
  revalidatePath("/");
  return { success: true };
}

export async function addNoteAction(
  _prevState: FormActionState | null
): Promise<FormActionState> {
  const note = await addNote();
  if (!note) {
    return { success: false };
  }
  revalidatePath("/");
  return {
    success: true,
    note,
  };
}
