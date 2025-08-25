"use client";

import Link from "next/link";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Banner() {
  return (
    <section
      id="banner"
      className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-[#FF722B] to-white"
    >
      {/* Image */}
      <FadeInWhenVisible delay={0.1}>
        <img
          src="/images/profil.png"
          alt="Illustration développeur"
          className="w-200 h-140 rounded-full  mb-6"
        />
      </FadeInWhenVisible>

      {/* Titre */}
      <FadeInWhenVisible delay={0.2}>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#222]">
          Bienvenue sur mon Portfolio,{" "}
          <span className="text-[#FF722B]">Scicluna</span>
        </h1>
      </FadeInWhenVisible>

      {/* Sous-texte → forcé noir */}
      <FadeInWhenVisible delay={0.3}>
        <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg !text-[#222] leading-relaxed">
          Passionné par le développement et la création web. <br />
          Je tente de donner vie à vos projets.
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
    </section>
  );
}
