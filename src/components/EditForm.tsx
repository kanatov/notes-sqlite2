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

function getColour(id: number) {
  const colours = [
    "to-orange-200 border-orange-900/40 shadow-orange-900",
    "to-blue-200 border-blue-900/40 shadow-blue-900",
    "to-indigo-200 border-indigo-900/40 shadow-indigo-900",
    "to-amber-200 border-amber-900/40 shadow-amber-900",
    "to-rose-200 border-rose-900/40 shadow-rose-900",
  ];
  return colours[id % colours.length];
}

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

  useEffect(() => {
    const updateTimestamp = () => {
      if (state?.success === false) {
        setTimestamp("Both title and content are required");
      } else if (state?.note) {
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
    <section
      className={`h-full flex flex-col flex-1 bg-gradient-to-b from-white bg-size-[100%_300%] bg-position-[center_center] p-4 pb-2 rounded-lg drop-shadow-lg border ease-out ${getColour(
        note.id
      )}`}
    >
      <Link href="/" className="absolute top-2 right-4 text-2xl">
        &times;
      </Link>
      <Form
        action={formAction}
        ref={formRef}
        className="flex flex-col justify-stretch flex-1"
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
          className="flex-1 w-full h-full p-4 border-0 outline-none resize-none"
          name="content"
          placeholder="Content"
          rows={10}
          defaultValue={note.content}
          onChange={handleChange}
        />
      </Form>
      <div className="flex flex-col sm:flex-row justify-between border-t-gray-900/10 border-t-2 pb-1 pt-3 mt-4 mx-4">
        <p className="!leading-[2]">{isPending ? "Saving..." : timestamp}</p>
        <DeleteForm id={note.id} className="!bg-orange-700/20" />
      </div>
    </section>
  );
}
