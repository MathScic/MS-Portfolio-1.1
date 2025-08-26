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
  // Empêche le scroll de la page quand le menu est ouvert
  useEffect(() => {
    const root = document.documentElement;
    if (open) root.classList.add("overflow-hidden");
    else root.classList.remove("overflow-hidden");
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      {/* Backdrop au-dessus de la page, en dessous du panneau */}
      <div
        className={`fixed inset-0 z-[998] bg-black/60 transition-opacity duration-300
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panneau plein écran (couvre tout, pas de transparence) */}
      <aside
        className={`fixed inset-0 z-[999] flex flex-col bg-[#2d2d2d] text-[#ff9966]
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        {/* Barre haute */}
        <div className="relative flex items-center justify-between px-6 h-16 border-b border-white/10">
          {/* Logo cliquable = accueil */}
          <Link href="/" onClick={onClose} aria-label="Aller à l’accueil">
            <Image
              src="/images/logo.png"
              alt="Logo MS"
              width={90}
              height={54}
              priority
              className="cursor-pointer"
            />
          </Link>

          {/* Bouton fermer */}
          <button
            aria-label="Fermer le menu"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff9966] text-white hover:bg-[#ff884d] transition"
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
        </div>

        {/* Liens centraux */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-8 text-2xl font-bold">
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
