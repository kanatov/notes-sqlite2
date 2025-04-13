import { NoteInterface } from "@/lib/notes";
import NoteReact from "@/components/Note/NoteReact";
import { compareDesc } from "date-fns";
import Link from "next/link";

export default function NotesGrid({ notes }: { notes: NoteInterface[] }) {
  return (
    <ul className="gap-5 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] flex-1">
      {notes
        .sort((a, b) => compareDesc(a.updated_at, b.updated_at))
        .map((note) => (
          <li key={note.id}>
            <Link href={`/${note.id}`} className="block">
              <NoteReact note={note} />
            </Link>
          </li>
        ))}
    </ul>
  );
}
