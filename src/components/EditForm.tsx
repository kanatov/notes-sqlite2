"use client";
import React, { useEffect } from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { updateNoteAction } from "@/app/actions";
import { NoteInterface } from "@/lib/notes";
import { utcToAbsolute } from "@/lib/time";

export default function EditForm({ note }: { note: NoteInterface }) {
  const [state, formAction, pending] = useActionState(updateNoteAction, null);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/");
    }
  }, [state, router]);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {note.id !== null && <input type="hidden" name="id" value={note.id} />}
      <input
        name="title"
        placeholder="Title"
        className="w-full p-2 border"
        defaultValue={note.title}
      />
      <textarea
        name="content"
        placeholder="Content"
        className="w-full p-2 border"
        rows={10}
        defaultValue={note.content}
        required
      />
      <p>Last saved: {utcToAbsolute(note.updated_at)}</p>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={pending}
      >
        {pending ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
