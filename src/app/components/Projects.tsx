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

  // Fermer avec Echap
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && current) close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  // 🔒 Lock du scroll de la page quand le panel est ouvert (mobile + iOS safe)
  useEffect(() => {
    if (!current) return;

    const body = document.body;
    const scrollY = window.scrollY;

    // lock
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    // unlock + restore
    return () => {
      const top = body.style.top;
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      if (top) {
        const y = parseInt(top, 10) || 0;
        window.scrollTo(0, -y);
      }
    };
  }, [current]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3A506B] text-center">
          Projets
        </h2>

        <Filters active={filter} onChange={setFilterUrl} filters={FILTERS} />

        {/* GRID */}
        <div className="mt-12 grid gap-8">
          {filtered.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              onOpen={() => open(p.id)}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* OVERLAY */}
      <AnimatePresence>
        {current && (
          <>
            {/* Backdrop au-dessus du header */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1100]"
              onClick={close}
              onTouchMove={(e) => e.preventDefault()} // stop scroll sur iOS
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel scrollable, sans propagation */}
            <motion.div
              className="fixed right-0 top-0 h-full w-full md:w-[700px] bg-white z-[1101]
                         shadow-2xl overflow-y-auto overscroll-contain"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Détails du projet"
            >
              <ProjectPanel project={current} onClose={close} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
