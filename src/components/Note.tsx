"use client";
import Link from "next/link";
import { NoteInterface } from "@/lib/notes";
import DeleteForm from "@/components/DeleteForm";
import { utcToAbsolute } from "@/lib/time";
export default function Notes({ note }: { note: NoteInterface }) {
  return (
    <section className="flex flex-col justify-between bg-white p-4 rounded-lg shadow border border-gray-300">
      <Link href={`/${note.id}`} className="flex-1 pb-3">
        <h3 className="font-bold">{note.title}</h3>
        <p className="whitespace-break-spaces text-ellipsis overflow-hidden">
          {note.content.slice(0, 128)}
        </p>
      </Link>
      <div className="flex justify-between border-t-gray-300 border-t-1 pt-2">
        <p>{utcToAbsolute(note.updated_at)}</p>
        <DeleteForm id={note.id} />
      </div>
    </section>
  );
}
