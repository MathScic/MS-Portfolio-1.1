"use client";

import Link from "next/link";
import FadeInWhenVisible from "./FadeInWhenVisible";
import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <section
      id="banner"
      className="relative py-20 px-6 bg-gradient-to-b from-[#FF722B] to-white"
    >
      {/* conteneur centré */}
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Image centrée */}
        <FadeInWhenVisible delay={0.1}>
          <img
            src="/images/profil.png"
            alt="Illustration développeur"
            className="block mx-auto w-60 h-60 sm:w-48 sm:h-48 md:w-80 md:h-80 rounded-full mb-6 object-cover"
          />
        </FadeInWhenVisible>

        {/* Titre + typewriter (même taille) */}
        <FadeInWhenVisible delay={0.2}>
          <h1 className="font-bold text-[#222] text-3xl xs:text-4xl sm:text-5xl md:text-6xl">
            Bienvenue sur mon Portfolio,
            <span
              className="block min-h-[1.2em]
                         text-3xl xs:text-4xl sm:text-5xl md:text-6xl
                         text-[#FF722B] whitespace-nowrap"
              aria-live="polite"
            >
              <Typewriter
                onInit={(tw) => {
                  tw.typeString("Scicluna Mathieu")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Développeur Frontend")
                    .pauseFor(1200)
                    .deleteAll()
                    .start();
                }}
                options={{ loop: true, delay: 75, deleteSpeed: 40 }}
              />
            </span>
          </h1>
        </FadeInWhenVisible>

        {/* Sous-texte */}
        <FadeInWhenVisible delay={0.3}>
          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg text-[#222] leading-relaxed">
            Passionné par le développement et la création web. <br />
            Je donne vie à vos projets.
          </p>
        </FadeInWhenVisible>

        {/* Boutons */}
        <FadeInWhenVisible delay={0.4}>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#about"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-full 
                         bg-[#FF722B] text-white hover:bg-[#222] hover:text-[#FF9966] transition-colors"
            >
              À propos de moi
            </Link>
            <Link
              href="/images/CV.pdf"
              download="Mon_CV"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-full 
                         bg-[#222] text-white hover:bg-[#FF722B] hover:text-white transition-colors"
            >
              Télécharger le CV
            </Link>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
