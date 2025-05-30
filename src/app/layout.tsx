import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const main = Noto_Sans({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes app built with Next.js, TypeScript and SQLite",
};

export default function RootLayout({
  children,
  notesGrid,
}: Readonly<{
  children: React.ReactNode;
  notesGrid: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-light">
      <body
        className={`${main.variable} antialiased pt-16 bg-gradient-to-b from-gray-200/0 to-gray-200 from-50% to-100%  min-h-screen bg-fixed`}
      >
        <Header className="fixed inset-0 bottom-auto mx-auto bg-white border-b-1 border-gray-200 z-10 h-20 flex gap-6 items-center justify-between transition-all ease-in-out duration-200" />
        <main className="max-w-5xl px-8 mx-auto mt-12 pb-12 gap-8 flex items-stretch">
          {notesGrid}
          {children}
        </main>
      </body>
    </html>
  );
}
