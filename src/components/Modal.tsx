import Link from "next/link";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link
        href="/"
        draggable={false}
        className="fixed z-20 inset-0 bg-[#000000A0] flex items-center justify-center select-none"
      />
      <dialog className="fixed inset-0 m-auto z-30 bg-transparent" open>
        {children}
      </dialog>
    </>
  );
}
