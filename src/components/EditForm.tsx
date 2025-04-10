"use client";
import React, { useEffect, useState, useRef } from "react";
import { useActionState } from "react";
import { updateNoteAction } from "@/app/actions";
import { NoteInterface } from "@/lib/notes";
import { utcToRelative } from "@/lib/time";
import { debouncer } from "@/lib/forms";
import Link from "@/components/Link";
import Form from "next/form";
import DeleteForm from "@/components/DeleteForm";

export default function EditForm({ note }: { note: NoteInterface }) {
  const [state, formAction, isPending] = useActionState(updateNoteAction, null);
  const [timestamp, setTimestamp] = useState(
    `Last saved: ${utcToRelative(note.updated_at)}`
  );
  const [formState, setFormState] = useState({
    title: note.title,
    content: note.content,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const debouncedRef = useRef<() => void>(
    debouncer(() => {
      formRef.current?.requestSubmit();
    }, 500)
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    debouncedRef.current?.();
  };

  useEffect(() => {
    const updateTimestamp = () => {
      if (state?.note) {
        setTimestamp(`Last saved: ${utcToRelative(state?.note?.updated_at)}`);
      }
    };
    updateTimestamp();
    const interval = setInterval(() => updateTimestamp(), 60000);
    return () => {
      clearInterval(interval);
    };
  }, [state]);

  return (
    <section className={`h-full flex flex-col flex-1 drop-shadow-lg`}>
      <div
        className={`h-full flex flex-col flex-1 bg-gradient-to-b from-white to-light p-4 pb-2 border border-b-0 border-blue-950/90 rounded-lg rounded-b-none`}
      >
        <Link
          href="/"
          className="absolute top-2 right-2 text-4xl font-light hover:bg-secondary/10 rounded-sm leading-normal flex justify-center items-center w-10 h-10"
        >
          &times;
        </Link>
        <Form
          action={formAction}
          ref={formRef}
          className="flex flex-col justify-stretch flex-1"
        >
          {note.id !== null && (
            <input type="hidden" name="id" value={note.id} />
          )}
          <input
            name="title"
            placeholder="Title"
            className="w-full p-4 border-0 outline-none text-2xl"
            value={formState.title}
            onChange={handleChange}
            maxLength={25}
          />
          <textarea
            className="flex-1 w-full h-full p-4 border-0 outline-none resize-none"
            name="content"
            placeholder="Content"
            rows={10}
            value={formState.content}
            onChange={handleChange}
            autoFocus
          />
        </Form>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-2 text-xs text-white/70 bg-secondary border border-blue-950 transition-all duration-300 ease-out rounded-lg rounded-t-none">
        <p className="!leading-[2]">{isPending ? "Saving..." : timestamp}</p>
        <DeleteForm
          id={note.id}
          className="text-white hover:text-white hover:bg-red-500/70 px-4 py-2"
        />
      </div>
    </section>
  );
}
