import Link from "next/link";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link
        href="/"
        draggable={false}
        className="fixed z-20 inset-0 !bg-gray-900/80 flex items-center justify-center select-none animate-fade-in"
      />

      <dialog
        className="fixed inset-4 m-auto w-auto h-auto sm:inset-0 sm:aspect-[3/4] sm:h-[90vh] sm:min-h-[30rem] sm:max-h-[50rem] z-30 bg-transparent animate-fade-in-spin"
        open
      >
        {children}
      </dialog>
    </>
  );
}
