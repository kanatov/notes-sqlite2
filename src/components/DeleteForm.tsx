"use client";
import { useActionState, useEffect } from "react";
import { deleteNoteAction } from "@/app/actions";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  useEffect(() => {
    if (state?.success) {
      router.push("/");
    }
  }, [state, router]);

  return (
    <Form action={formAction} className="relative z-10">
      <input type="hidden" name="id" value={id} />
      <Button
        type="submit"
        disabled={isPending}
        className={`px-3 py-1 -mr-2 ${className}`}
      >
        {isPending ? "Deleting..." : "Delete"}
      </Button>
    </Form>
  );
}
