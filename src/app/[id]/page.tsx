import Link from "next/link";

export default async function DefaultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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
