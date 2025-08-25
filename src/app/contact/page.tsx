// app/contact/page.tsx
"use client";

import FadeInWhenVisible from "../components/FadeInWhenVisible";
import ContactSection from "../components/ContactSection";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="bg-white">
      {/* HERO éditorial */}
      <div className="border-b border-gray-100 bg-gray-50/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <FadeInWhenVisible>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#FF9966] text-center">
              Contact
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.05}>
            <h1 className="mt-2 text-center text-4xl md:text-5xl font-bold tracking-tight text-[#3A506B]">
              Discutons de votre projet web
            </h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-[#222]/70">
              Conception & intégration d’interfaces (React/Next.js),
              performance, accessibilité, SEO technique et refontes. Décrivez
              votre besoin — je reviens vers vous rapidement.
            </p>
          </FadeInWhenVisible>

          {/* Infos rapides */}
        </div>
      </div>

      {/* Alternatives de contact (optionnelles) */}
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <FadeInWhenVisible>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              href="mailto:scicluna.mathieu@hotmail.fr"
              className="rounded-2xl border border-gray-100 bg-white p-4 text-center transition hover:shadow-sm"
            >
              <p className="text-sm font-semibold text-[#3A506B]">
                Email direct
              </p>
              <p className="mt-1 text-sm text-[#222]/70 break-all">
                scicluna.mathieu@hotmail.fr
              </p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ton-profil"
              target="_blank"
              className="rounded-2xl border border-gray-100 bg-white p-4 text-center transition hover:shadow-sm"
            >
              <p className="text-sm font-semibold text-[#3A506B]">LinkedIn</p>
              <p className="mt-1 text-sm text-[#222]/70">
                Échanges & opportunités
              </p>
            </Link>
            <Link
              href="https://github.com/ton-user"
              target="_blank"
              className="rounded-2xl border border-gray-100 bg-white p-4 text-center transition hover:shadow-sm"
            >
              <p className="text-sm font-semibold text-[#3A506B]">GitHub</p>
              <p className="mt-1 text-sm text-[#222]/70">
                Projets & code source
              </p>
            </Link>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Formulaire (ton composant animé) */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <ContactSection />
      </div>

      {/* Note légale / anti-spam (sobre) */}
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <FadeInWhenVisible>
          <p className="mx-auto max-w-3xl text-center text-sm text-[#222]/60">
            Vos informations ne sont utilisées que pour répondre à votre
            message. Aucun envoi automatique ou newsletter. Anti-spam actif.
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
