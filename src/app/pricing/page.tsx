"use client";

import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import pricing from "../../../public/data/pricing.json";

type Offer = {
  id: string;
  title: string;
  price: string;
  features: string[];
};

// ---- Animations corrigées ----
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};
const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 24 },
  },
};
const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const cleanLabel = (s: string) =>
  s.replace(/^[^\p{Letter}\p{Number}]+/u, "").trim();

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

export default function PricingPage() {
  const router = useRouter();

  return (
    <motion.section
      className="py-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <h1 className="text-4xl font-bold mb-4">Nos Tarifs</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chaque projet est unique. Les tarifs indiqués sont{" "}
            <strong>à partir de</strong> et s’adaptent à vos besoins (contenu,
            design, fonctionnalités).
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {(pricing as Offer[]).map((offer) => (
            <motion.article
              key={offer.id}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.995 }}
              className="relative bg-white rounded-2xl shadow-md p-8 flex flex-col border-2 border-transparent hover:border-gray-200 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">{offer.title}</h2>
              <p className="text-3xl font-bold mb-6">{offer.price}</p>

              <motion.ul
                className="flex-1 space-y-3 mb-6"
                variants={listVariants}
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
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push(`/contact?offer=${offer.id}`)}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition-colors"
              >
                Discuter de cette offre
              </motion.button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
