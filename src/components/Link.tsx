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
      draggable={false}
      href={href}
      className={`cursor-pointer select-none transition-all ease-in-out duration-200 hover:text-secondary ${className}`}
    >
      {children}
    </LinkNext>
  );
}
