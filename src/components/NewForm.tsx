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
        className="py-2 px-4.5 bg-secondary text-white hover:bg-[#2a49e3]"
      >
        {isPending ? "Adding..." : "New note"}
      </Button>
    </Form>
  );
}
