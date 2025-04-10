import Header from "@/components/Header";

// Using parallel route, so we can use the same layout
// for the edit note form and the notes grid
export default function DefaultPage() {
  return (
    <Header className="fixed inset-0 bottom-auto mx-auto bg-white border-b-1 border-gray-200 z-10 h-20 flex gap-6 items-center justify-between transition-all ease-in-out duration-200" />
  );
}
