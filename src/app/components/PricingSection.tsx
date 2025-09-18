"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import pricing from "../../../public/data/pricing.json";

type Offer = {
  id: string;
  title: string;
  price: string;
  features: string[];
};

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 24 },
  },
};
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

// Nettoie les emojis/symboles en début de phrase (✅ 🚀 etc.)
const cleanLabel = (s: string) =>
  s.replace(/^[^\p{Letter}\p{Number}]+/u, "").trim();

// Icône check (SVG) – accessible et cohérent visuellement
function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-5 w-5 mt-0.5 flex-none"
      fill="currentColor"
    >
      <path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.3a1 1 0 0 1-1.42.004L3.29 9.51a1 1 0 1 1 1.42-1.408l3.106 3.135 6.494-6.587a1 1 0 0 1 1.394-.36z" />
    </svg>
  );
}

export default function PricingSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  return (
    <motion.section
      className="py-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2 className="text-3xl font-bold mb-4">Mes Offres</motion.h2>
        <motion.p className="text-gray-600 mb-12">
          Des solutions simples, rapides et adaptées à vos besoins.
        </motion.p>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
        >
          {(pricing as Offer[]).map((offer) => (
            <motion.article
              key={offer.id}
              variants={cardVariants}
              onClick={() => setSelected(offer.id)}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="relative cursor-pointer bg-white rounded-2xl shadow-md p-8 flex flex-col border-2 border-transparent transition-colors"
              aria-pressed={selected === offer.id}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && setSelected(offer.id)
              }
            >
              {/* Halo/bordure animée quand sélectionné */}
              <AnimatePresence>
                {selected === offer.id && (
                  <motion.div
                    layoutId="pricing-outline"
                    className="absolute inset-0 rounded-2xl border-2 border-blue-500 shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ pointerEvents: "none" }}
                  />
                )}
              </AnimatePresence>

              <div className="relative text-left">
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-4xl font-bold mb-6">{offer.price}</p>

                {/* LISTE ALIGNEE : icône fixe à gauche, texte fluide à droite */}
                <motion.ul
                  className="flex-1 space-y-3 mb-6"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {offer.features.map((raw, i) => {
                    const label = cleanLabel(raw);
                    return (
                      <motion.li
                        key={i}
                        variants={itemVariants}
                        className="flex items-start gap-3"
                      >
                        <span className="text-green-600">
                          <CheckIcon />
                        </span>
                        <span className="text-gray-700 leading-6">{label}</span>
                      </motion.li>
                    );
                  })}
                </motion.ul>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push("/price");
                  }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition-colors"
                >
                  Choisir cette offre
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
