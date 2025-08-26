"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const headerHeight = 64; // h-16
    const banner = document.getElementById("banner");
    let ticking = false;

    const computeScrolled = () => {
      // Si pas de bannière, fallback simple
      if (!banner) {
        setScrolled(window.scrollY > headerHeight);
        return;
      }
      // On déclenche quand le BAS de la bannière passe SOUS le header
      const rect = banner.getBoundingClientRect();
      const passed = rect.bottom <= headerHeight;
      setScrolled(passed);
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        computeScrolled();
        ticking = false;
      });
    };

    // Observer la taille de la bannière (images/typos qui chargent après)
    let ro: ResizeObserver | null = null;
    if (banner && "ResizeObserver" in window) {
      ro = new ResizeObserver(onScrollOrResize);
      ro.observe(banner);
    }

    // Écoutes classiques
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    // iOS/Android : barres d’URL dynamiques
    const vv = (window as any).visualViewport as VisualViewport | undefined;
    if (vv) {
      vv.addEventListener(
        "scroll",
        onScrollOrResize as any,
        { passive: true } as any
      );
      vv.addEventListener("resize", onScrollOrResize as any);
    }

    // Init immédiat
    computeScrolled();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      ro?.disconnect();
      if (vv) {
        vv.removeEventListener("scroll", onScrollOrResize as any);
        vv.removeEventListener("resize", onScrollOrResize as any);
      }
    };
  }, []);

  const links = [
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
  ];

  // Transparent sur la bannière, puis blanc doux après
  const headerBg = scrolled
    ? "bg-white/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70"
    : "bg-transparent";

  return (
    <header
      className={`sticky top-0 z-[1000] transition-[background-color,box-shadow] duration-300 ${headerBg}`}
    >
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

        {/* Burger bouton */}
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
