// app/projects/page.tsx
"use client";

import { Suspense } from "react";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Projects from "../components/Projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="bg-white">
      {/* HERO éditorial (différent de la home) */}
      <div className="border-b border-gray-100 bg-gray-50/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <FadeInWhenVisible>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#FF9966] text-center">
              Réalisations
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.05}>
            <h1 className="mt-2 text-center text-4xl md:text-5xl font-bold tracking-tight text-[#3A506B]">
              Une sélection de projets web
              <br className="hidden md:block" />
              conçus pour la performance et l’UX
            </h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-[#222]/70">
              Intégrations React/Next.js, Tailwind et animations Framer Motion.
              Chaque carte est cliquable pour découvrir le contexte, les technos
              et les liens (démo / code). Utilisez les filtres pour affiner
              l’affichage par stack.
            </p>
          </FadeInWhenVisible>
        </div>
      </div>

      {/* GRILLE + overlay (ton composant gère tout) */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Suspense>
          <Projects />
        </Suspense>
      </div>

      {/* CTA final */}
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <FadeInWhenVisible>
          <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
            <h3 className="text-2xl font-bold text-[#3A506B]">
              Un projet en tête ?
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-[#222]/70">
              Besoin d’une interface soignée, performante et maintenable&nbsp;?
              Je peux intervenir sur l’intégration, la refonte et l’optimisation
              de projets Next.js.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#FF9966] px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
