export default function Button({
  children,
  className,
  type = "button",
  disabled = false,
  onClick = () => {},
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`cursor-pointer select-none rounded-md transition-all ease-in-out duration-200 ${className}`}
      disabled={disabled}
      draggable={false}
    >
      {children}
    </button>
  );
}
