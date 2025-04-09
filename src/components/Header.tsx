import NewForm from "@/components/NewForm";
import Image from "next/image";
import Link from "next/link";

export default function Header({ className }: { className?: string }) {
  return (
    <header className={className}>
      <div className="flex justify-between gap-2 max-w-5xl w-full mx-auto px-8 h-full items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Notes logo" width={110} height={55} />
        </Link>
        <NewForm />
      </div>
    </header>
  );
}
