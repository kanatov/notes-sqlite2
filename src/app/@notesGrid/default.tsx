import { getAllNotes } from "@/lib/notes";
import NotesGrid from "@/components/NotesGrid";

// Using parallel route, so we can use the same layout
// for the edit note form and the notes grid
export default async function DefaultPage() {
  const notes = await getAllNotes();
  return notes.length ? (
    <NotesGrid notes={notes} />
  ) : (
    <section className="absolute inset-0 flex items-center justify-center gap-1 ">
      <h3>
        Go ahead and make a <span className="font-bol">new note</span> :)
      </h3>
    </section>
  );
}
