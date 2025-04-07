import { getAllNotes } from "@/lib/notes";
import { NotesGrid } from "@/components/NotesGrid";
import { NewForm } from "@/components/NewForm";

export default async function DefaultPage() {
  const notes = await getAllNotes();
  return (
    <section>
      <h2>All the notes</h2>
      <NewForm />
      <NotesGrid notes={notes} />
    </section>
  );
}
