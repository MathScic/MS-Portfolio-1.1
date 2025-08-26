"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/about", label: "À propos" },
    { href: "/projects", label: "Projets" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-[0_1px_10px_rgba(0,0,0,0.03)]">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Accueil — MS Portfolio"
          className="flex items-center"
        >
          <Image
            src="/images/logo.png"
            alt="MS"
            width={120}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/about"
            className="px-2 py-1 text-[15px] font-semibold text-[#222] hover:opacity-80"
          >
            À propos
          </Link>
          <Link
            href="/projects"
            className="px-2 py-1 text-[15px] font-semibold text-[#222] hover:opacity-80"
          >
            Projets
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#FF722B] px-6 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-[#222] hover:text-[#FF9966]"
          >
            Contact
          </Link>
        </div>

        {/* Burger mobile */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            className="text-[#222]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </nav>

      {/* Panneau mobile */}
      <BurgerMenu open={open} onClose={() => setOpen(false)} links={links} />
    </header>
  );
}
