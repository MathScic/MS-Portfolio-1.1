"use client";

import Link from "next/link";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Apropos() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-6">
        {/* Titre de section */}
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-4xl font-bold text-[#3A506B] mb-12 text-center">
            À propos de moi
          </h2>
        </FadeInWhenVisible>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <FadeInWhenVisible delay={0.2}>
            <img
              src="/images/Dev.png"
              alt="À propos de moi"
              className="w-96 h-60 md:w-[80rem] md:h-[20rem] rounded-xl object-cover shadow-lg
                         transition-transform duration-500 hover:-translate-y-1"
            />
          </FadeInWhenVisible>

          {/* Texte */}
          <FadeInWhenVisible delay={0.3}>
            <div className="flex-1 text-left">
              <p className="text-gray-700 text-lg leading-relaxed">
                Passionné par le développement web, j&apos;aime concevoir des
                interfaces modernes et intuitives. Mon objectif est de
                transformer des idées en expériences interactives engageantes.
                Actuellement, je suis à la recherche d&apos;opportunités pour
                contribuer à des projets innovants.
              </p>

              {/* Bouton CV */}
              <div className="inline-block mt-8">
                <Link
                  href="/images/CV-Intégrateur-Web.pdf"
                  download="Mon_CV"
                  aria-label="Télécharger mon CV en PDF"
                  className="
                    text-lg rounded-full bg-[#FF722B] text-white px-6 py-3
                    shadow-md transition-all duration-300 ease-in-out
                    hover:bg-[#444] hover:shadow-lg hover:scale-105
                  "
                >
                  Télécharger le CV
                </Link>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
