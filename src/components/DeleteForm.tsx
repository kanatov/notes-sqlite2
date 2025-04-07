"use client";
import { useEffect, useActionState } from "react";
import { useRouter } from "next/navigation";
import { deleteNoteAction } from "@/app/actions";

export default function DeleteForm({ id }: { id: number }) {
  const [state, formAction, isPending] = useActionState(deleteNoteAction, null);
  const router = useRouter();
  useEffect(() => {
    if (state?.data?.id) {
      router.push(`/${state?.data?.id}`);
    }
  }, [state, router]);

  return (
    <form action={formAction} className="relative z-10">
      <input type="hidden" name="id" value={id} />
      <button type="submit" disabled={isPending}>
        {isPending ? "Deleting..." : "Delete"}
      </button>
    </form>
  );
}
