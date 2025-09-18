"use client";

import { useRouter } from "next/navigation";
import pricing from "../../../public/data/pricing.json";
import { motion } from "framer-motion";

type Offer = {
  id: string;
  title: string;
  price: string;
  features: string[];
};

export default function PricingPage() {
  const router = useRouter();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Nos Tarifs</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos offres adaptées à vos besoins. Chaque projet est
            unique, les tarifs peuvent varier selon vos attentes spécifiques.
          </p>
        </div>

        {/* Grid des offres */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(pricing as Offer[]).map((offer) => (
            <motion.article
              key={offer.id}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col border-2 border-transparent hover:border-gray-200 transition"
            >
              <h2 className="text-xl font-semibold mb-2">{offer.title}</h2>
              <p className="text-3xl font-bold mb-6">{offer.price}</p>

              <ul className="flex-1 space-y-3 mb-6">
                {offer.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-600">✔</span>
                    <span className="text-gray-700 leading-6">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push("/contact")}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition-colors"
              >
                Discuter de cette offre
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
