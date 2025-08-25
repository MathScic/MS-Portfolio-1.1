"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      className="
        w-full
        bg-[#ff9966] text-white
        md:bg-[#f2f4f7] md:text-[#222]
      "
    >
      {/* Zone 3 colonnes (1 colonne en mobile) */}
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Colonne 1 : logo + nav */}
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo MS"
              width={100}
              height={60}
            />
          </Link>
          <nav className="flex flex-col gap-2 text-lg font-semibold">
            <Link href="#about" className="hover:opacity-80">
              À propos
            </Link>
            <Link href="#projects" className="hover:opacity-80">
              Projets
            </Link>
            <Link href="#contact" className="hover:opacity-80">
              Contact
            </Link>
          </nav>
        </div>

        {/* Colonne 2 : légal */}
        <div className="space-y-3">
          <h3 className="text-base font-bold">Légal</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/politique-de-confidentialite"
                className="hover:opacity-80"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:opacity-80">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : réseaux */}
        <div className="space-y-3">
          <h3 className="text-base font-bold">Réseaux</h3>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="p-2 rounded-full hover:opacity-80"
            >
              <FaLinkedin className="text-2xl" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              aria-label="GitHub"
              className="p-2 rounded-full hover:opacity-80"
            >
              <FaGithub className="text-2xl" />
            </Link>
            <Link
              href="mailto:scicluna.mathieu@hotmail.fr"
              aria-label="Email"
              className="p-2 rounded-full hover:opacity-80"
            >
              <MdEmail className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Barre séparatrice (discrète en desktop, ton sur ton en mobile) */}
      <div className="h-px w-full bg-white/30 md:bg-[#e0e0e0]" />

      {/* Bas de page : © */}
      <div className="mx-auto max-w-6xl px-6 py-4 text-sm flex items-center justify-center">
        <span className="inline-flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-xs">
            ©
          </span>
          Créé par Mathieu Scicluna — 2025
        </span>
      </div>
    </footer>
  );
}
