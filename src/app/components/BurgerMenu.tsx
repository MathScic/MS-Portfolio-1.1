"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

type NavLink = { href: string; label: string };

export default function BurgerMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}) {
  // Empêche le scroll quand menu ouvert
  useEffect(() => {
    const root = document.documentElement;
    if (open) root.classList.add("overflow-hidden");
    else root.classList.remove("overflow-hidden");
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <aside
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#444] 
        transition-transform duration-300 ease-out 
        ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        {/* Logo */}
        <div className="absolute top-6 left-6">
          <Image
            src="/images/logo.png"
            alt="Logo MS"
            width={80}
            height={50}
            priority
          />
        </div>

        {/* Bouton fermer */}
        <button
          aria-label="Fermer le menu"
          onClick={onClose}
          className="absolute top-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff9966] text-white hover:bg-primary transition-colors"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Liens centrés */}
        <nav className="flex flex-col items-center gap-8 text-2xl font-bold text-[#ff9966]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}

          {/* Lien Contact toujours présent */}
          <Link
            href="/contact"
            onClick={onClose}
            className="hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
      </aside>
    </>
  );
}
