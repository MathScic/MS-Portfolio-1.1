"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    if (ok !== null || err) {
      const t = setTimeout(() => {
        setOk(null);
        setErr("");
      }, 4000);
      return () => clearTimeout(t);
    }
  }, [ok, err]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErr("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (!payload.name || !payload.email || !payload.message) {
      setLoading(false);
      setOk(false);
      setErr("Merci de remplir tous les champs.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok)
        throw new Error(json.error || "Impossible d'envoyer le message.");
      setOk(true);
      form.reset();
    } catch (e) {
      const errorMsg =
        e instanceof Error ? e.message : "Erreur lors de l'envoi.";
      setOk(false);
      setErr(errorMsg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      className="mx-auto mb-20 max-w-2xl rounded-2xl bg-white p-6 shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Anti-bot (honeypot) */}
      <input
        type="text"
        name="honeypot"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <motion.div
          className="md:col-span-1"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <label className="block text-sm font-medium text-[#222]">Nom</label>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none
                       focus:ring-2 focus:ring-[#3A506B]/30"
            placeholder="Votre nom"
          />
        </motion.div>

        <motion.div
          className="md:col-span-1"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <label className="block text-sm font-medium text-[#222]">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none
                       focus:ring-2 focus:ring-[#3A506B]/30"
            placeholder="vous@exemple.com"
          />
        </motion.div>
      </div>

      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <label className="block text-sm font-medium text-[#222]">Message</label>
        <textarea
          name="message"
          required
          rows={6}
          className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none
                     focus:ring-2 focus:ring-[#3A506B]/30"
          placeholder="Décrivez brièvement votre besoin…"
        />
      </motion.div>

      {ok === true && (
        <motion.p
          className="mt-3 text-sm text-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
        >
          Merci ! Votre message a bien été envoyé.
        </motion.p>
      )}
      {ok === false && (
        <motion.p
          className="mt-3 text-sm text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
        >
          {err || "Échec de l’envoi. Réessayez."}
        </motion.p>
      )}

      <div className="mt-6 flex justify-center">
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className="inline-flex items-center rounded-full bg-[#FF9966] px-6 py-3 font-semibold text-white
                     transition hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Envoi en cours…" : "Envoyer"}
        </motion.button>
      </div>
    </motion.form>
  );
}
