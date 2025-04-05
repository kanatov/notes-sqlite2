import Link from "next/link";
export default function DefaultPage() {
  return (
    <section>
      <h2 className="">All the notes</h2>
      <Link href="/new">New note</Link>
    </section>
  );
}
