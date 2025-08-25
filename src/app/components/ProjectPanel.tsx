"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "./ProjectCard";

export default function ProjectPanel({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const p = project;

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl md:text-3xl font-bold text-[#222]">
          {p.title}
        </h3>
        <button
          onClick={onClose}
          className="rounded-full border border-gray-200 w-10 h-10 grid place-items-center
                     hover:bg-gray-100 transition"
          aria-label="Fermer"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* Image standardisée 16:9 */}
      <div className="mt-6 overflow-hidden rounded-xl bg-gray-50 border">
        <div className="relative aspect-video w-full">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
            priority
          />
        </div>
      </div>

      {/* À propos */}
      <h4 className="mt-6 text-lg font-semibold text-[#222]">À propos</h4>
      <p className="mt-2 text-[#222]/80">
        {/* Utilise p.about si tu l’ajoutes dans le JSON, sinon fallback sur summary */}
        {(p as { about?: string }).about ?? p.summary}
      </p>

      {/* Technologies */}
      <h4 className="mt-6 text-lg font-semibold text-[#222]">
        Technologies utilisées
      </h4>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="text-xs px-2.5 py-1 rounded-full bg-[#FF9966] text-white"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Website (lien texte) */}
      <h4 className="mt-6 text-lg font-semibold text-[#222]">Website</h4>
      {p.links?.demo ? (
        <a
          href={p.links.demo}
          target="_blank"
          rel="noreferrer"
          className="text-[#3A506B] underline break-all"
        >
          {p.links.demo}
        </a>
      ) : (
        <span className="text-[#222]/60">Non disponible</span>
      )}

      {/* Boutons */}
      <div className="mt-8 flex flex-wrap gap-3">
        {p.links?.github && (
          <Link
            className="inline-flex items-center rounded-full px-5 py-2.5 font-semibold border border-[#3A506B] text-[#3A506B] hover:bg-[#3A506B] hover:text-white transition"
            href={p.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
        )}
        {p.links?.demo && (
          <Link
            className="inline-flex items-center rounded-full px-5 py-2.5 font-semibold bg-[#FF9966] text-white hover:opacity-90 transition"
            href={p.links.demo}
            target="_blank"
            rel="noreferrer"
          >
            Voir le site
          </Link>
        )}
      </div>
    </div>
  );
}
