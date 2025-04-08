"use client";
import React, { useEffect, useState, useRef } from "react";
import { useActionState } from "react";
import { updateNoteAction } from "@/app/actions";
import { NoteInterface } from "@/lib/notes";
import { utcToRelative } from "@/lib/time";
import { debouncer } from "@/lib/forms";
import Form from "next/form";
import DeleteForm from "@/components/DeleteForm";

export default function EditForm({ note }: { note: NoteInterface }) {
  const [state, formAction, isPending] = useActionState(updateNoteAction, null);
  const [timestamp, setTimestamp] = useState(
    `Last saved: ${utcToRelative(note.updated_at)}`
  );
  const formRef = useRef<HTMLFormElement>(null);

  const debounce = debouncer(() => {
    formRef.current?.requestSubmit();
  }, 500);
  const handleChange = () => {
    debounce();
  };

  const updateTimestamp = () => {
    if (state?.success === false) {
      setTimestamp("Both title and content are required");
    } else if (state?.note) {
      setTimestamp(`Last saved: ${utcToRelative(state?.note?.updated_at)}`);
    }
  };

  useEffect(() => {
    updateTimestamp();
    const interval = setInterval(() => updateTimestamp(), 60000);
    return () => {
      clearInterval(interval);
    };
  }, [state]);

  return (
    <section className="flex flex-col flex-1 pb-3 bg-white rounded-lg shadow border border-gray-300 w-[500px] overflow-hidden">
      <Form
        action={formAction}
        ref={formRef}
        className="flex flex-col justify-between"
      >
        {note.id !== null && <input type="hidden" name="id" value={note.id} />}
        <input
          name="title"
          placeholder="Title"
          className="w-full p-4 font-bold border-0 outline-none"
          defaultValue={note.title}
          onChange={handleChange}
        />
        <textarea
          className="w-full p-4 border-0 outline-none resize-none"
          name="content"
          placeholder="Content"
          rows={10}
          defaultValue={note.content}
          onChange={handleChange}
        />
      </Form>
      <div className="flex justify-between border-t-gray-300 border-t-1 pt-3 mt-4 mx-4">
        <p>{isPending ? "Saving..." : timestamp}</p>
        <DeleteForm id={note.id} />
      </div>
    </section>
  );
}
