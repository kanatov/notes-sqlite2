export default function Button({
  children,
  className,
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      className={`cursor-pointer rounded-md transition-all ease-in-out duration-200 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
