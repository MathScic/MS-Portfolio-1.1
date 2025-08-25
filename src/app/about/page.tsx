// app/about/page.tsx
"use client";

import Link from "next/link";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import TimeLine from "../components/TimeLine"; // ta timeline déjà créée
import Skills from "../components/Skills"; // ta section skills (version compacte si tu veux)

export default function AboutPage() {
  return (
    <section className="bg-white">
      {/* HERO — différent de la home, plus éditorial */}
      <div className="border-b border-gray-100 bg-gray-50/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <FadeInWhenVisible>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#FF9966] text-center">
              À propos
            </p>
            <h1 className="mt-2 text-center text-4xl md:text-5xl font-bold tracking-tight text-[#3A506B]">
              Je conçois et intègre des interfaces rapides,
              <br className="hidden md:block" />
              accessibles et prêtes pour la production.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-[#222]/70">
              Spécialisé en React/Next.js & Tailwind, j’accorde une attention
              particulière à la performance, l’accessibilité, le SEO technique
              et les micro-animations (Framer Motion). Mon objectif :
              transformer une maquette en produit fiable, maintenable, et
              déployé sur Vercel.
            </p>
          </FadeInWhenVisible>

          {/* Highlights rapides */}
          <FadeInWhenVisible delay={0.1}>
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-5">
                <h3 className="text-sm font-semibold text-[#3A506B]">
                  Ce que j’apporte
                </h3>
                <ul className="mt-3 space-y-2 text-[#222]/80">
                  <li>• Intégration pixel-perfect (React/Next.js, Tailwind)</li>
                  <li>
                    • Performance & accessibilité mesurables (Lighthouse/a11y)
                  </li>
                  <li>• SEO technique & bonnes pratiques</li>
                  <li>• Déploiements fiables (Vercel)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-5">
                <h3 className="text-sm font-semibold text-[#3A506B]">
                  Façon de travailler
                </h3>
                <ul className="mt-3 space-y-2 text-[#222]/80">
                  <li>• Composants réutilisables & code propre</li>
                  <li>• Animations sobres et utiles (Framer Motion)</li>
                  <li>• Collaboration transparente & itérative</li>
                  <li>• Priorité à l’expérience utilisateur</li>
                </ul>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* CTA léger */}
          <FadeInWhenVisible delay={0.15}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/#contact"
                className="rounded-full bg-[#FF9966] px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Discuter d’un projet
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      {/* COMPÉTENCES — version compacte (ou utilise ton composant tel quel) */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <FadeInWhenVisible>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A506B] text-center">
            Compétences clés
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[#222]/70">
            React, Next.js, Tailwind, Framer Motion, bonnes pratiques
            d’accessibilité, optimisation & SEO technique.
          </p>
        </FadeInWhenVisible>

        {/* Si tu préfères un résumé visuel, tu peux insérer un petit grid de badges ici.
            Sinon, réutilise ton composant Skills complet : */}
        <div className="mt-10">
          <Skills />
        </div>
      </div>

      {/* TIMELINE — épurée (comme tu l’as voulu) */}
      <div className="bg-gray-50/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3A506B] text-center">
              Parcours
            </h2>
          </FadeInWhenVisible>
          <div className="mt-10">
            <TimeLine />
          </div>
        </div>
      </div>

      {/* CTA final — contact */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <FadeInWhenVisible>
          <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
            <h3 className="text-2xl font-bold text-[#3A506B]">
              Travaillons ensemble
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-[#222]/70">
              Besoin d’une interface soignée, performante et maintenable ? Je
              peux intervenir sur des intégrations, refontes, et optimisations
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
