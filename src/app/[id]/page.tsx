import EditForm from "@/components/EditForm";
import { getNote } from "@/lib/notes";
import { redirect } from "next/navigation";
import Modal from "@/components/Modal";
export default async function EditNotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = await getNote(id);
  if (!note) {
    redirect("/");
  }

  return (
    <Modal>
      <EditForm note={note} />
    </Modal>
  );
}
