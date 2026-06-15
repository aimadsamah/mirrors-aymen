"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Solidité exceptionnelle",
    description:
      "Dos en matériau solide et durable. Nos miroirs sont con&ccedil;us pour durer dans le temps avec une qualité premium.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Design esthétique unique",
    description:
      "Chaque miroir est une pi&egrave;ce unique reproduisant fid&egrave;lement l&apos;interface de vos réseaux sociaux préférés.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Marketing viral",
    description:
      "Chaque selfie devant votre miroir devient une publicité gratuite. Boostez votre visibilité sur les réseaux.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Personnalisation totale",
    description:
      "Nom d&apos;utilisateur, type de plateforme, dimensions... Tout est adapté &agrave; votre image de marque.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="avantages" className="section-padding bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Pourquoi nous choisir
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            L&apos;excellence au service de{" "}
            <span className="gold-text-gradient">votre image</span>
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-sm sm:text-base">
            Nos miroirs ne sont pas de simples accessoires. Ce sont de
            véritables outils marketing qui travaillent pour votre business
            24h/24.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-5 sm:p-6 rounded-2xl hover:bg-white/5 transition-colors group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl gold-gradient flex items-center justify-center text-charcoal-900 mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-charcoal-400 text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
