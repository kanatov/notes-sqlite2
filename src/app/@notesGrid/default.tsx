import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

export default async function DefaultPage() {
  const notes = await getAllNotes();
  return (
    <section>
      <h2 className="">All the notes</h2>
      <Link href="/new">New note</Link>
      <ul className="gap-4 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {notes.map((note) => (
          <li key={note.id} className="p-4 rounded shadow flex flex-col gap-2">
            <Link href={`/${note.id}`}>
              <h3 className="font-bold">{note.title}</h3>
              <p>{note.updated_at}</p>
            </Link>
            <p className="whitespace-break-spaces text-ellipsis overflow-hidden">
              {note.content.slice(0, 128)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
