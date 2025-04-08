"use client";
import { useEffect, useActionState } from "react";
import { useRouter } from "next/navigation";
import { addNoteAction } from "@/app/actions";
import Form from "next/form";
import Button from "@/components/Button";

export default function NewForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(addNoteAction, null);

  useEffect(() => {
    if (state?.success && state?.note) {
      router.push(`/${state.note.id}`);
    }
  }, [state, router]);

  return (
    <Form action={formAction}>
      <Button
        type="submit"
        disabled={isPending}
        className="py-2 px-4 bg-gradient-to-b from-orange-300/20 to-orange-400/30 shadow-orange-500/40 hover:!bg-orange-600/20"
      >
        {isPending ? "Adding..." : "New note"}
      </Button>
    </Form>
  );
}
