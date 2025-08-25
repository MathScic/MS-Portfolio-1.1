"use client";

import Image from "next/image";
import FadeInWhenVisible from "./FadeInWhenVisible";
import items from "../../../public/data/timeline.json"; // ← import direct du JSON

type Item = {
  id: string;
  period: string;
  title: string;
  bullets: string[];
  icon?: string;
  image?: string;
  color?: string;
};

export default function TimeLine() {
  const data = items as Item[];

  return (
    <section id="timeline" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <FadeInWhenVisible>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A506B] text-center">
            Mon parcours
          </h2>
        </FadeInWhenVisible>

        <div className="relative mx-auto mt-12 grid gap-12">
          {/* ligne verticale desktop */}
          <span className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gray-200 md:block" />

          {data.map((item, idx) => {
            const leftSide = idx % 2 === 0;
            const dotColor = item.color || "#FF9966";

            return (
              <FadeInWhenVisible key={item.id} delay={idx * 0.08}>
                <article
                  className={[
                    "grid items-center gap-6 md:grid-cols-2",
                    leftSide ? "" : "md:[&>*:first-child]:order-2",
                  ].join(" ")}
                >
                  {/* Colonne texte */}
                  <div className="relative">
                    {/* période + icône */}
                    <div className="mb-2 flex items-center gap-3">
                      {item.icon && (
                        <Image
                          src={item.icon}
                          alt=""
                          width={60}
                          height={28}
                          className="opacity-90"
                        />
                      )}
                      <span className="text-sm font-semibold uppercase tracking-wide text-[#3A506B]">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-[#222]">
                      {item.title}
                    </h3>

                    <ul className="mt-3 space-y-1 text-[#222]/80">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-[#FF9966]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Colonne image */}
                  <div className="flex justify-center md:justify-start">
                    {item.image && (
                      <div className="overflow-hidden rounded-xl shadow-md">
                        <Image
                          src={item.image}
                          alt=""
                          width={350}
                          height={250}
                          className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                          priority={idx === 0}
                        />
                      </div>
                    )}
                  </div>
                </article>
              </FadeInWhenVisible>
            );
          })}
        </div>
      </div>
    </section>
  );
}
