"use client";
import { useEffect, useActionState } from "react";
import { useRouter } from "next/navigation";
import { addNoteAction } from "@/app/actions";

export function NewForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(addNoteAction, null);

  useEffect(() => {
    if (state?.success) {
      router.push(`/${state?.data?.id}`);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create Note"}
      </button>
    </form>
  );
}
