"use client";
import { useActionState } from "react";
import { deleteNoteAction } from "@/app/actions";
import Form from "next/form";

export default function DeleteForm({ id }: { id: number }) {
  const [state, formAction, isPending] = useActionState(deleteNoteAction, null);

  return (
    <Form action={formAction} className="relative z-10">
      <input type="hidden" name="id" value={id} />
      <button type="submit" disabled={isPending}>
        {isPending ? "Deleting..." : "Delete"}
      </button>
    </Form>
  );
}
