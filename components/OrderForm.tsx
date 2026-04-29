"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { wilayas, mirrorTypes } from "@/lib/data";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function OrderForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    wilaya: "",
    mirrorType: "",
    username: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.wilaya ||
      !formData.mirrorType ||
      !formData.username
    ) {
      setStatus("error");
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }

    const templateParams = {
      from_name: formData.fullName,
      phone: formData.phone,
      wilaya: formData.wilaya,
      mirror_type: formData.mirrorType,
      username: formData.username,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({
        fullName: "",
        phone: "",
        wilaya: "",
        mirrorType: "",
        username: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage(
        "Une erreur est survenue. Veuillez réessayer ou nous contacter via WhatsApp.",
      );
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 sm:py-3 rounded-xl bg-charcoal-800/50 border border-charcoal-700 text-white placeholder-charcoal-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors text-base sm:text-sm";

  return (
    <section id="commande" className="section-padding bg-charcoal-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Passer commande
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Commandez votre <span className="gold-text-gradient">miroir</span>
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-sm sm:text-base">
            Remplissez le formulaire ci-dessous et nous vous contacterons pour
            finaliser votre commande.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass p-5 sm:p-8 lg:p-10 rounded-2xl space-y-4 sm:space-y-6"
          >
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-charcoal-300 mb-1.5 sm:mb-2"
              >
                Nom complet *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Votre nom complet"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-charcoal-300 mb-1.5 sm:mb-2"
              >
                Numéro de téléphone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0XXX XXX XXX"
                inputMode="tel"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="wilaya"
                className="block text-sm font-medium text-charcoal-300 mb-1.5 sm:mb-2"
              >
                Wilaya *
              </label>
              <select
                id="wilaya"
                name="wilaya"
                value={formData.wilaya}
                onChange={handleChange}
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Sélectionnez votre wilaya
                </option>
                {wilayas.map((w) => (
                  <option key={w.id} value={`${w.code} - ${w.name}`}>
                    {w.code} - {w.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="mirrorType"
                className="block text-sm font-medium text-charcoal-300 mb-1.5 sm:mb-2"
              >
                Type de miroir *
              </label>
              <select
                id="mirrorType"
                name="mirrorType"
                value={formData.mirrorType}
                onChange={handleChange}
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Sélectionnez un type
                </option>
                {mirrorTypes.map((m) => (
                  <option key={m.id} value={m.label}>
                    {m.icon} {m.label} - {m.description}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-charcoal-300 mb-1.5 sm:mb-2"
              >
                Nom d&apos;utilisateur &agrave; afficher *
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="@votre_nom_utilisateur"
                className={inputClass}
              />
            </div>

            {status === "error" && errorMessage && (
              <div className="p-3 sm:p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm">
                {errorMessage}
              </div>
            )}

            {status === "success" && (
              <div className="p-3 sm:p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs sm:text-sm">
                Votre commande a été envoyée avec succ&egrave;s ! Nous vous
                contacterons bient&ocirc;t.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full gold-gradient text-charcoal-900 font-semibold py-3.5 sm:py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg shadow-lg shadow-gold-500/20 min-h-[48px] active:scale-[0.98] transition-transform"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Envoi en cours...
                </span>
              ) : (
                "Envoyer la commande"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
