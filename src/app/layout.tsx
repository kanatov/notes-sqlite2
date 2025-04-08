import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const main = Poppins({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <html lang="en">
      <body
        className={`${main.variable} antialiased pt-16 bg-no-repeat bg-gradient-to-b from-white to-sky-100 min-h-screen bg-fixed`}
      >
        <Header className="fixed inset-0 top-4 bottom-auto mx-auto bg-white shadow-sm drop-shadow-xl border-b-1 border-gray-200 z-10 p-2 pl-5 w-fit flex gap-6 rounded-full items-center transition-all ease-in-out duration-200 hover:p-2.5 hover:pl-5.5 hover:top-3.5" />
        <main className="max-w-4xl mx-auto mt-6 pb-12">
          {children}
          {notesGrid}
        </main>
      </body>
    </html>
  );
}
