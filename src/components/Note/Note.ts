import type React from "react";
import type { NoteInterface } from "@/lib/notes";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { getPreview } from "@/lib/text";
import { utcToAbsolute } from "@/lib/time";

// Handling Web Components inside Next.js using this article:
// https://github.com/lit/lit/tree/main/examples/nextjs-v15-app

@customElement("note-web-component")
export class NoteWebComponent extends LitElement {
  @property({ type: Object }) note: NoteInterface = {} as NoteInterface;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`<section
      class="relative group transition-all duration-300 ease-out"
    >
      <div
        class="relative w-full flex flex-col rounded-lg overflow-hidden transition-all duration-300 ease-out shadow-[0px_-6px_12px_rgba(0,0,0,0.02),0px_4px_10px_rgba(0,0,0,0.06)] border border-gray-300 group-hover:border-gray-400/60 group-hover:drop-shadow-2xl group-hover:drop-shadow-gray-800/15"
        @mouseover="${this.handleMouseOver}"
        @mouseleave="${this.handleMouseLeave}"
        style="transform: translateY(0px);"
      >
        <div
          class="p-8 pt-6 bg-gradient-to-b from-white to-white/60 group-hover:bg-white transition-all duration-300 ease-out"
        ><div
        class="flex flex-col flex-1 gap-4"><h3
        class="text-2xl truncate">${
          this.note?.title
        }</h3><p
        class="whitespace-break-spaces text-ellipsis overflow-hidden">${
          getPreview(this.note?.content)
        }</p></div></div><div
          class="flex justify-between items-center px-8 py-2 text-xs text-black/60 bg-light group-hover:bg-light border-t border-gray-200/60 transition-all duration-300 ease-out"
        ><p>${
          utcToAbsolute(this.note?.updated_at)
        }</p></div></div></section>`;
  }

  handleMouseOver(e: Event) {
    const target = e.currentTarget as HTMLElement;
    target.style.transform = `translateY(-${Math.random() * 0.2 + 0.1}rem)`;
  }

  handleMouseLeave(e: Event) {
    const target = e.currentTarget as HTMLElement;
    target.style.transform = `translateY(0)`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "note-web-component": NoteWebComponent;
  }
}

declare module "react" {
  interface IntrinsicElements {
    "note-web-component":
      | React.DetailedHTMLProps<
          React.HTMLAttributes<NoteWebComponent>,
          NoteWebComponent
        >
      | Partial<NoteWebComponent>;
  }
}
