"use client";

import { motion } from "framer-motion";

export default function DeliverySection() {
  return (
    <section id="livraison" className="section-padding bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Livraison & Installation</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Partout en <span className="gold-text-gradient">Alg&eacute;rie</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-6 sm:p-8 rounded-2xl text-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full gold-gradient flex items-center justify-center text-charcoal-900 mb-4 sm:mb-6">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">Livraison nationale</h3>
            <p className="text-charcoal-400 text-sm sm:text-base leading-relaxed">
              Livraison disponible vers les <span className="text-gold-400 font-semibold">58 Wilayas</span> d&apos;Alg&eacute;rie.
              Votre miroir est exp&eacute;di&eacute; avec soin pour arriver en parfait &eacute;tat.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-6 sm:p-8 rounded-2xl text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 gold-gradient text-charcoal-900 text-[10px] sm:text-xs font-bold px-3 py-1 sm:px-4 sm:py-1 rounded-bl-lg">
              EXCLUSIF
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full gold-gradient flex items-center justify-center text-charcoal-900 mb-4 sm:mb-6">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">Installation incluse</h3>
            <p className="text-charcoal-400 text-sm sm:text-base leading-relaxed">
              Installation professionnelle incluse{" "}
              <span className="text-gold-400 font-semibold">exclusivement pour la Wilaya de Jijel</span>.
              Notre &eacute;quipe se d&eacute;place chez vous pour un r&eacute;sultat parfait.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
