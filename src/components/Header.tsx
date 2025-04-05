import Link from "next/link";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10 p-2">
      <Link href="/">Notes app</Link>
    </header>
  );
}
