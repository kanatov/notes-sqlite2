import Link from "next/link";

export default function NotFound() {
  return (
    <section className="border-2 m-8 p-8 text-center w-full flex flex-col gap-4 items-center">
      <h1>404</h1>
      <p>Note not found</p>
      <Link href="/" className="flex-0 w-fit">
        Browse all notes
      </Link>
    </section>
  );
}
