import { getAllNotes } from "@/lib/notes";
import NotesGrid from "@/components/NotesGrid";

// Using parallel route, so we can use the same layout
// for the edit note form and the notes grid
export default async function DefaultPage() {
  const notes = await getAllNotes();
  return <NotesGrid notes={notes} />;
}
