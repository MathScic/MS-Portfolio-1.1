"use client";

import { motion } from "framer-motion";

export type Filter = { id: string; label: string };

export default function Filters({
  active,
  onChange,
  filters,
}: {
  active: string;
  onChange: (id: string) => void;
  filters: Filter[];
}) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
      <div className="relative flex gap-2 rounded-full bg-gray-100 p-1">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => onChange(f.id)}
            className={[
              "relative z-10 rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none",
              active === f.id ? "text-white" : "text-[#3A506B]",
            ].join(" ")}
          >
            {f.label}
            {active === f.id && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 -z-10 rounded-full bg-[#FF9966]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
