"use client";
import { useActionState } from "react";
import { deleteNoteAction } from "@/app/actions";
import Form from "next/form";
import Button from "@/components/Button";

export default function DeleteForm({
  id,
  className,
}: {
  id: number;
  className?: string;
}) {
  const [state, formAction, isPending] = useActionState(deleteNoteAction, null);

  return (
    <Form action={formAction} className="relative z-10">
      <input type="hidden" name="id" value={id} />
      <Button
        type="submit"
        disabled={isPending}
        className={`px-3 py-1 -mr-2 hover:!bg-orange-800/30 ${className}`}
      >
        {isPending ? "Deleting..." : "Delete"}
      </Button>
    </Form>
  );
}
