"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";

const contactInfo = [
  {
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Localisation",
    value: "Jijel, Algérie",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Téléphone",
    value: socialLinks.phone,
    href: `tel:${socialLinks.phone.replace(/\s/g, "")}`,
  },
];

const socialPlatforms = [
  {
    name: "WhatsApp",
    href: socialLinks.whatsapp,
    color: "hover:bg-green-600",
    icon: "W",
  },
  {
    name: "Instagram",
    href: socialLinks.instagram,
    color: "hover:bg-pink-600",
    icon: "I",
  },
  {
    name: "Facebook",
    href: socialLinks.facebook,
    color: "hover:bg-blue-600",
    icon: "F",
  },
  {
    name: "TikTok",
    href: socialLinks.tiktok,
    color: "hover:bg-charcoal-600",
    icon: "T",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Contactez-nous
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Restons en <span className="gold-text-gradient">contact</span>
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-sm sm:text-base">
            Une question ? Une demande personnalis&eacute;e ?
            N&apos;h&eacute;sitez pas &agrave; nous contacter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gold-gradient flex items-center justify-center text-charcoal-900 flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-charcoal-400 text-xs sm:text-sm">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white font-medium hover:text-gold-400 transition-colors text-sm sm:text-base"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm sm:text-base">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-2 sm:pt-4">
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
                Suivez-nous
              </h3>
              <div className="flex gap-3 flex-wrap">
                {socialPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass flex items-center justify-center text-white font-bold text-sm sm:text-base min-w-[44px] ${platform.color} transition-colors`}
                    aria-label={platform.name}
                  >
                    {platform.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-5 sm:p-8 rounded-2xl"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
              Horaires de contact
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-2 sm:py-3 border-b border-charcoal-800">
                <span className="text-charcoal-400 text-xs sm:text-sm">
                  Samedi - Jeudi
                </span>
                <span className="text-white font-medium text-xs sm:text-sm">
                  09h00 - 19h00
                </span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3 border-b border-charcoal-800">
                <span className="text-charcoal-400 text-xs sm:text-sm">
                  Vendredi
                </span>
                <span className="text-white font-medium text-xs sm:text-sm">
                  14h00 - 19h00
                </span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3">
                <span className="text-charcoal-400 text-xs sm:text-sm">
                  R&eacute;ponse WhatsApp
                </span>
                <span className="text-gold-400 font-medium text-xs sm:text-sm">
                  Rapide
                </span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-xl bg-gold-500/10 border border-gold-500/20">
              <p className="text-gold-400 text-xs sm:text-sm text-center font-medium">
                Contactez-nous sur WhatsApp pour une r&eacute;ponse rapide !
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
