"use server";

import { updateNote, deleteNoteById, addNote } from "@/lib/notes";
import { revalidatePath } from "next/cache";

interface FormActionState {
  success: boolean;
  data?: { id: number };
}

function readFormData(formData: FormData) {
  return {
    id: parseInt(formData.get("id") as string),
    title: formData.get("title") as string | null,
    content: formData.get("content") as string | null,
  };
}

export async function updateNoteAction(
  _prevState: FormActionState | null,
  formData: FormData
): Promise<FormActionState> {
  const { id, title, content } = readFormData(formData);
  if (!id || !title || !content) {
    return { success: false };
  }

  await updateNote({ id, title, content });
  revalidatePath("/");
  return { success: true };
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
    data: { id: note.id },
  };
}
