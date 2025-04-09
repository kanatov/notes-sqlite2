import { NoteInterface } from "@/lib/notes";
import Note from "@/components/Note";
import { compareDesc } from "date-fns";

export default function NotesGrid({ notes }: { notes: NoteInterface[] }) {
  return (
    <ul className="gap-5 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] flex-1">
      {notes
        .sort((a, b) => compareDesc(a.updated_at, b.updated_at))
        .map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
    </ul>
  );
}
