"use client";

import FadeInWhenVisible from "./FadeInWhenVisible";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-6">
        {/* Titre de section */}
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-4xl font-bold text-[#3A506B] mb-4 text-center">
            Me contacter
          </h2>
        </FadeInWhenVisible>

        {/* Sous-texte (même style que À propos) */}
        <FadeInWhenVisible delay={0.15}>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-2xl mx-auto">
            Une idée, un projet, une question&nbsp;? Je vous réponds rapidement.
          </p>
        </FadeInWhenVisible>

        {/* Formulaire */}
        <FadeInWhenVisible delay={0.25}>
          <div className="mt-10">
            <ContactForm />
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
