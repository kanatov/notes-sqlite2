"use client";
import Link from "next/link";
import { NoteInterface } from "@/lib/notes";
import { getPreview } from "@/lib/text";
import { utcToAbsolute } from "@/lib/time";

export default function Notes({ note }: { note: NoteInterface }) {
  return (
    <section className="relative group transition-all duration-300 ease-out">
      <div
        className={`relative w-full flex flex-col rounded-lg overflow-hidden transition-all duration-300 ease-out shadow-[0px_-6px_12px_rgba(0,0,0,0.02),0px_4px_10px_rgba(0,0,0,0.06)] border border-gray-300 group-hover:border-gray-400/60 group-hover:drop-shadow-2xl group-hover:drop-shadow-gray-800/15`}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = `translateY(-${
            Math.random() * 0.2 + 0.1
          }rem)`)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <div className="p-8 pt-6 bg-gradient-to-b from-white to-white/60 group-hover:bg-white transition-all duration-300 ease-out">
          <Link
            href={`/${note.id}`}
            className="absolute top-0 left-0 w-full h-full"
          />
          <Link href={`/${note.id}`} className="flex flex-col flex-1 gap-4">
            <h3 className="text-2xl truncate">{note.title}</h3>
            <p className="whitespace-break-spaces text-ellipsis overflow-hidden">
              {getPreview(note.content)}
            </p>
          </Link>
        </div>
        <div className="flex justify-between items-center px-8 py-2 text-xs text-black/60 bg-light group-hover:bg-light border-t border-gray-200/60 transition-all duration-300 ease-out">
          <p>{utcToAbsolute(note.updated_at)}</p>
        </div>
      </div>
    </section>
  );
}
