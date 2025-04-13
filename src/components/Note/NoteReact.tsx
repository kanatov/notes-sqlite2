"use client";

import { NoteInterface } from "@/lib/notes";
import "./Note";

export default function NoteReact(props: { note: NoteInterface }) {
  return <note-web-component {...props} />;
}
