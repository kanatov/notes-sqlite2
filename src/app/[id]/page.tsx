import EditForm from "@/components/EditForm";
import { getNote } from "@/lib/notes";
import { notFound } from "next/navigation";

export default async function EditNotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = await getNote(id);
  if (!note) {
    notFound();
  }

  return (
    <div className="fixed z-20 inset-0 bg-[#000000A0] flex items-center justify-center">
      <dialog className="bg-white m-0 relative w-[500px] p-4" open>
        <h2 className="text-lg font-bold mb-4">Edit Note</h2>
        <EditForm note={note} />
      </dialog>
    </div>
  );
}
