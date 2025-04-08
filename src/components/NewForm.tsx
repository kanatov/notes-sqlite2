"use client";
import { useEffect, useActionState } from "react";
import { useRouter } from "next/navigation";
import { addNoteAction } from "@/app/actions";

export default function NewForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(addNoteAction, null);

  useEffect(() => {
    if (state?.success && state?.note) {
      router.push(`/${state.note.id}`);
    }
  }, [state, router]);

  return (
    <form action={formAction}>
      <button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create Note"}
      </button>
    </form>
  );
}
