import LinkNext from "next/link";

export default function Link({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <LinkNext
      href={href}
      className={`cursor-pointer hover:bg-gray-200 rounded-full transition-all ease-in-out duration-200 ${className}`}
    >
      {children}
    </LinkNext>
  );
}
