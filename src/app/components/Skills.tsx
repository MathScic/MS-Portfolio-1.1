"use client";

import { useState } from "react";
import Image from "next/image";
import skills from "../../../public/data/skills.json";
import FadeInWhenVisible from "./FadeInWhenVisible";

type Skill = {
  id: number;
  name: string;
  icon: string;
  color: string;
  description: string;
};

export default function Skills() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold text-[#222] mb-12">Compétences</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(skills as Skill[]).map((s) => {
            const isOpen = openId === s.id;
            const btnId = `skill-${s.id}`;
            const regionId = `desc-${s.id}`;

            // Teinte claire de la couleur (avec transparence)
            const tint = s.color.length === 7 ? `${s.color}20` : s.color;

            return (
              <FadeInWhenVisible key={s.id} delay={0.2 * s.id}>
                <li className="col-span-1">
                  <div
                    className="group rounded-2xl p-5 shadow-md
                               transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]
                               bg-[var(--skillTint)] hover:bg-[var(--skill)] hover:-translate-y-1 hover:shadow-lg"
                    style={
                      {
                        "--skill": s.color,
                        "--skillTint": tint,
                      } as React.CSSProperties
                    }
                  >
                    {/* En-tête cliquable */}
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : s.id)}
                      aria-expanded={isOpen}
                      aria-controls={regionId}
                      aria-label={`Voir détails sur ${s.name}`}
                      id={btnId}
                      className="w-full flex items-center justify-between gap-4 text-left
                                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3A506B]/40 rounded-xl
                                 hover:cursor-pointer transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="grid place-items-center h-12 w-12 rounded-full bg-white/80">
                          <Image
                            src={s.icon}
                            alt={s.name}
                            width={28}
                            height={28}
                            className="object-contain transition group-hover:brightness-0"
                          />
                        </span>
                        <span
                          className="text-lg font-semibold transition-colors
                                     text-[var(--skill)] group-hover:text-white"
                        >
                          {s.name}
                        </span>
                      </div>

                      {/* Flèche (rotation plus smooth) */}
                      <svg
                        className={`h-5 w-5 flex-shrink-0
                                    transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                                    ${isOpen ? "rotate-180" : ""}
                                    text-[var(--skill)] group-hover:text-white`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {/* Panneau (plus smooth + plus de place) */}
                    <div
                      id={regionId}
                      role="region"
                      aria-labelledby={btnId}
                      className={`overflow-hidden
                                  transition-[max-height,opacity,margin] duration-600
                                  ease-[cubic-bezier(.22,1,.36,1)]
                                  will-change-[max-height,opacity]
                                  ${
                                    isOpen
                                      ? "max-h-64 opacity-100 mt-3"
                                      : "max-h-0 opacity-0 mt-0"
                                  }`}
                    >
                      <p
                        className="text-sm leading-relaxed transition-colors
                                   text-[color:var(--skill)] group-hover:text-white/95"
                      >
                        {s.description}
                      </p>
                    </div>
                  </div>
                </li>
              </FadeInWhenVisible>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
