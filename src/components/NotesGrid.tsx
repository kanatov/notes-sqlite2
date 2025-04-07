import Link from "next/link";
import { Note } from "@/lib/notes";
import { DeleteForm } from "@/components/DeleteForm";

export function NotesGrid({ notes }: { notes: Note[] }) {
  return (
    <ul className="gap-4 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
      {notes.map((note) => (
        <li key={note.id} className="p-4 rounded shadow flex flex-col gap-2">
          <Link href={`/${note.id}`}>
            <h3 className="font-bold">{note.title}</h3>
            <p>{note.updated_at}</p>
            <p className="whitespace-break-spaces text-ellipsis overflow-hidden">
              {note.content.slice(0, 128)}
            </p>
          </Link>
          <DeleteForm note={note} />
        </li>
      ))}
    </ul>
  );
}
