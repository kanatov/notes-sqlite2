"use client";
import Link from "next/link";
import { NoteInterface } from "@/lib/notes";
import { getPreview } from "@/lib/text";
import DeleteForm from "@/components/DeleteForm";
import { utcToAbsolute } from "@/lib/time";

function getColour(id: number) {
  const colours = [
    "to-orange-400/40 border-orange-900/20 shadow-orange-500/40",
    "to-blue-400/40 border-blue-900/20 shadow-blue-500/40",
    "to-indigo-400/40 border-indigo-900/20 shadow-indigo-500/40",
    "to-amber-400/40 border-amber-900/20 shadow-amber-500/40",
    "to-rose-400/40 border-rose-900/20 shadow-rose-500/40",
  ];
  return colours[id % colours.length];
}

function getRotation(id: number) {
  const rotations = [-5, -2.5, 0, 2.5, 5];
  return rotations[id % rotations.length];
}

export default function Notes({ note }: { note: NoteInterface }) {
  return (
    <section className="relative group">
      <div
        className={`relative w-full flex flex-col bg-gradient-to-b from-white bg-size-[100%_300%] bg-position-[center_center] group-hover:bg-position-[center_95%] group-hover:bg-size-[100%_130%] p-4 pb-2 rounded-md drop-shadow-md border transition-all duration-300 ease-out group-hover:px-5 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-lg/60 group-hover:drop-shadow-xl group-hover:w-[calc(100%+.5rem)] ${getColour(
          note.id
        )}`}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = `rotate(${
            Math.random() * 2 - 1
          }deg)`)
        }
        onMouseLeave={(e) => (e.currentTarget.style.transform = "rotate(0deg)")}
      >
        <Link
          href={`/${note.id}`}
          className="absolute top-0 left-0 w-full h-full"
        />
        <Link href={`/${note.id}`} className="flex-1 pb-3">
          <h3 className="font-bold">{note.title}</h3>
          <p className="whitespace-break-spaces text-ellipsis overflow-hidden">
            {getPreview(note.content)}
          </p>
        </Link>
        <div className="flex justify-between items-center pt-2 text-xs text-black/60">
          <p>{utcToAbsolute(note.updated_at)}</p>
        </div>
      </div>
    </section>
  );
}
