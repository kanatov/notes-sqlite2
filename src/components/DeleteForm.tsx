"use client";
import { useEffect, useActionState } from "react";
import { useRouter } from "next/navigation";
import { deleteNoteAction } from "@/app/actions";
import { Note } from "@/lib/notes";

export function DeleteForm({ note }: { note: Note }) {
  const [state, formAction, isPending] = useActionState(deleteNoteAction, null);
  const router = useRouter();
  useEffect(() => {
    if (state?.data?.id) {
      router.push(`/${state?.data?.id}`);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={note.id} />
      <button type="submit" disabled={isPending}>
        {isPending ? "Deleting..." : "Delete Note"}
      </button>
    </form>
  );
}
