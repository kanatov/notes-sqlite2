import Link from "@/components/Link";
import NewForm from "@/components/NewForm";
import Image from "next/image";

export default function Header({ className }: { className?: string }) {
  return (
    <header className={className}>
      <Image src="/logo.svg" alt="Notes logo" width={60} height={30} />
      <NewForm />
    </header>
  );
}
