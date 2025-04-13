"use client";

import { NoteInterface } from "@/lib/notes";
import "./Note";
import React from "react";

export default function NoteReact(props: { note: NoteInterface }) {
  return React.createElement("note-web-component", { ...props });
}
