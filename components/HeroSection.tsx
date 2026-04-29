"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gold-500 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gold-600 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-gold-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Produit Premium Made in Algeria
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6"
        >
          Le miroir qui booste{" "}
          <span className="gold-text-gradient">votre visibilit&eacute;</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg lg:text-xl text-charcoal-300 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2"
        >
          Des miroirs personnalis&eacute;s avec le design exact de vos posts Instagram, TikTok et plus.
          Chaque selfie devient une publicit&eacute; gratuite pour votre business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
        >
          <Link
            href="#commande"
            className="w-full sm:w-auto gold-gradient text-charcoal-900 font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:opacity-90 transition-opacity text-base sm:text-lg shadow-lg shadow-gold-500/20 text-center"
          >
            Commander maintenant
          </Link>
          <Link
            href="#galerie"
            className="w-full sm:w-auto glass text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-white/10 transition-colors text-base sm:text-lg text-center"
          >
            Voir la galerie
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-16 text-charcoal-400"
        >
          <div className="text-center">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">58</p>
            <p className="text-xs sm:text-sm">Wilayas livr&eacute;es</p>
          </div>
          <div className="text-center">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">100%</p>
            <p className="text-xs sm:text-sm">Personnalisable</p>
          </div>
          <div className="text-center">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Premium</p>
            <p className="text-xs sm:text-sm">Qualit&eacute; garantie</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
