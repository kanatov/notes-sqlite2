import Link from "next/link";
import { getNote } from "@/lib/notes";

export default async function DefaultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let note = {
    title: "New note",
    content: "New note content",
    updated_at: new Date().toLocaleDateString(),
  };
  if (id === "new") {
    // new note
  } else {
    const existingNote = await getNote(id);
    if (existingNote) {
      note = existingNote;
    }
    return (
      <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center">
        <dialog className="bg-white m-0 relative" open>
          <form method="dialog">
            <h3>{note.title}</h3>
            <p>{note.updated_at}</p>
            <p className="whitespace-break-spaces">{note.content}</p>
            <Link href="/" aria-label="Close">
              Close
            </Link>
          </form>
        </dialog>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center">
      <dialog className="bg-white m-0 relative" open>
        <p>Note ID: {id}</p>
        <form method="dialog">
          <button>Save</button>
          <Link href="/" aria-label="Close">
            Close
          </Link>
        </form>
      </dialog>
    </div>
  );
}
