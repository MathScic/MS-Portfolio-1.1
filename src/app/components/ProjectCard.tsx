"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type Project = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  category: string[];
  image: string;
  previewVideo?: string;
  year?: string;
  links?: { demo?: string; github?: string };
};

export default function ProjectCard({
  project,
  onOpen,
  index = 0,
}: {
  project: Project;
  onOpen: () => void;
  index?: number;
}) {
  const p = project;

  return (
    <motion.button
      onClick={onOpen}
      className="group relative overflow-hidden rounded-2xl text-left bg-white shadow-sm
                 border border-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3A506B]/30"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.06,
      }}
    >
      <div className="relative h-44">
        <Image
          fill
          src={p.image}
          alt={p.title}
          className="object-cover transition duration-500 group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={index === 0}
        />
        {/* Spotlight souris */}
        <span
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition
                         bg-[radial-gradient(200px_200px_at_var(--x)_var(--y),rgba(255,255,255,.35),transparent_60%)]"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const C= document.currentScript?.previousElementSibling?.parentElement?.parentElement;
              C&&C.addEventListener('pointermove',e=>{
                const s = C.querySelector('span');
                s?.style.setProperty('--x', e.offsetX+'px');
                s?.style.setProperty('--y', e.offsetY+'px');
              });
            `,
          }}
        />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-[#222]/60">
          {p.year && <span>{p.year}</span>}
          <span className="h-1 w-1 rounded-full bg-[#FF9966]" />
          <span>{p.stack.join(" · ")}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold text-[#222]">{p.title}</h3>
        <p className="mt-1 text-sm text-[#222]/80 line-clamp-2">{p.summary}</p>

        <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#FF9966]">
          Voir le projet
          <svg
            className="h-4 w-4 transition -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.button>
  );
}
