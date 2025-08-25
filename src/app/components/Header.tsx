"use client";

import Link from "next/link";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex h-16 items-center justify-between px-4 md:mx-20 lg:mx-90">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <img src="/images/logo.png" alt="Logo MS" width={100} height={60} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-12">
          <Link
            href="/about"
            className="px-2 py-1 text-lg font-semibold text-[#222] hover:opacity-80"
          >
            À propos
          </Link>
          <Link
            href="/projects"
            className="px-2 py-1 text-lg font-semibold text-[#222] hover:opacity-80"
          >
            Projets
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-2 text-lg font-semibold rounded-full 
                       bg-[#FF722B] text-white hover:bg-[#222] hover:text-[#ff9966] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Burger Menu */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
        >
          <svg
            className="text-[#222]"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      <BurgerMenu open={open} onClose={() => setOpen(false)} links={links} />
    </header>
  );
}
