"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Filters, { Filter } from "./Filters";
import ProjectCard, { Project } from "./ProjectCard";
import ProjectPanel from "./ProjectPanel";
import data from "../../../public/data/project.json";

const FILTERS: Filter[] = [
  { id: "all", label: "All" },
  { id: "react", label: "React" },
  { id: "nextjs", label: "Next.js" },
  { id: "tailwind", label: "Tailwind" },
];

export default function Projects() {
  const projects = data as Project[];

  // --- filtre via URL ?filter=...
  const search = useSearchParams();
  const router = useRouter();
  const initialFilter = search.get("filter") ?? "all";
  const [filter, setFilter] = useState<string>(initialFilter);

  useEffect(() => {
    setFilter(search.get("filter") ?? "all");
  }, [search]);

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category?.includes(filter));
  }, [projects, filter]);

  function setFilterUrl(next: string) {
    router.push(`?filter=${next}`, { scroll: false });
  }

  // --- overlay via URL ?project=slug
  const openIdFromUrl = search.get("project");
  const [openId, setOpenId] = useState<string | null>(openIdFromUrl);
  useEffect(() => setOpenId(openIdFromUrl), [openIdFromUrl]);
  const current = useMemo(
    () => filtered.find((p) => p.id === openId) ?? null,
    [filtered, openId]
  );

  function open(slug: string) {
    router.push(`?filter=${filter}&project=${slug}`, { scroll: false });
  }
  function close() {
    router.push(`?filter=${filter}`, { scroll: false });
  }

  // --- layout: une seule card => largeur bornée + centrée
  const isSingle = filtered.length === 1;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3A506B] text-center">
          Projets
        </h2>

        <Filters active={filter} onChange={setFilterUrl} filters={FILTERS} />

        {/* EMPTY STATE (si aucun projet ne matche) */}
        {filtered.length === 0 && (
          <p className="mt-12 text-center text-[#222]/70">
            Aucun projet pour ce filtre.
          </p>
        )}

        {/* GRID */}
        <div
          className={
            isSingle
              ? // 1 seul projet : on centre et on borne la largeur de la card
                "mt-12 grid place-items-center gap-8"
              : // plusieurs projets : grille responsive habituelle
                "mt-12 grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]"
          }
        >
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={
                isSingle ? "w-full max-w-[360px] sm:max-w-[420px]" : ""
              }
            >
              <ProjectCard project={p} onOpen={() => open(p.id)} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* OVERLAY */}
      <AnimatePresence>
        {current && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            {/* Panel */}
            <motion.div
              className="fixed right-0 top-0 h-full w-full md:w-[700px] bg-white z-50 shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectPanel project={current} onClose={close} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
