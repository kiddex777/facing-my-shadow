import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Facing My Shadow | A Kinder, Braver You",
    template: "%s | Facing My Shadow",
  },
  description:
    "Honest conversations, practical tools, and thoughtful insights to help you understand yourself, heal old patterns, and create a more meaningful life.",
  keywords: [
    "shadow work",
    "self awareness",
    "personal growth",
    "healing",
    "inner child",
    "emotional patterns",
    "self sabotage",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#f7f5ef] text-[#202622]`}

      ><header className="border-b border-[#202622]/15 bg-[#f7f5ef]">
  <div className="mx-auto max-w-6xl px-6 py-4 md:py-6">

    {/* Logo + desktop navigation */}
    <div className="flex items-center justify-between">
      <Link
        href="/"
        className="font-serif text-2xl font-semibold tracking-tight !text-[#111511]"
      >
        Facing My Shadow
      </Link>

      <nav className="hidden items-center gap-8 text-sm text-[#4f5750] md:flex">
        <Link href="/" className="transition hover:text-[#202622]">
          Home
        </Link>
        <Link href="/journal" className="transition hover:text-[#202622]">
          Journal
        </Link>
        <Link href="/topics" className="transition hover:text-[#202622]">
          Topics
        </Link>
        <Link href="/about" className="transition hover:text-[#202622]">
          About
        </Link>
        <Link href="/contact" className="transition hover:text-[#202622]">
          Contact
        </Link>
        <Link
          href="/journal"
          className="border border-[#344137] bg-[#344137] px-5 py-2.5 text-xs text-white transition hover:bg-[#202622]"
        >
          Explore the Journal
        </Link>
      </nav>
    </div>

    {/* Mobile navigation */}
    <nav className="mt-4 flex items-center justify-center gap-5 border-t border-[#202622]/10 pt-4 text-sm text-[#4f5750] md:hidden">
      <Link href="/" className="whitespace-nowrap">
        Home
      </Link>
      <Link href="/journal" className="whitespace-nowrap">
        Journal
      </Link>
      <Link href="/topics" className="whitespace-nowrap">
        Topics
      </Link>
      <Link href="/about" className="whitespace-nowrap">
        About
      </Link>
      <Link href="/contact" className="whitespace-nowrap">
        Contact
      </Link>
    </nav>

  </div>
</header>
        {children}
      </body>
    </html>
  );
}