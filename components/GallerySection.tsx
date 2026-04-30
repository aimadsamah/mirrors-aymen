"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Importation du composant Image

const galleryItems = [
  {
    id: 1,
    label: "Miroir Instagram",
    description: "Restaurant Alger",
    image: "/images/gallery/mirror.jpg", // Chemin vers public/images/gallery/...
  },
  {
    id: 2,
    label: "Miroir TikTok",
    description: "Salon de coiffure Oran",
    image: "/images/gallery/mirror.jpg",
  },
  {
    id: 3,
    label: "Miroir Instagram",
    description: "Boutique Sétif",
    image: "/images/gallery/mirror.jpg",
  },
  {
    id: 4,
    label: "Miroir Facebook",
    description: "Café Constantine",
    image: "/images/gallery/mirror.jpg",
  },
  {
    id: 5,
    label: "Miroir TikTok",
    description: "Fitness Club Blida",
    image: "/images/gallery/mirror.jpg",
  },
  {
    id: 6,
    label: "Miroir Personnalisé",
    description: "Hôtel Annaba",
    image: "/images/gallery/mirror.jpg",
  },
];

export default function GallerySection() {
  return (
    <section id="galerie" className="section-padding bg-charcoal-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Notre vitrine
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Nos <span className="gold-text-gradient">réalisations</span>
          </h2>
          <p className="text-charcoal-400 max-w-2xl mx-auto text-sm sm:text-base">
            Découvrez nos créations personnalisées pour des clients satisfaits à
            travers l&apos;Algérie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass aspect-square bg-charcoal-800"
            >
              {/* Utilisation de Next/Image pour le rendu de la photo */}
              <Image
                src={item.image}
                alt={item.label}
                width={500}
                height={500}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay Gradient pour la lisibilité du texte */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-60 sm:opacity-0 sm:group-hover:opacity-80 transition-opacity duration-300" />

              {/* Contenu textuel */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-base sm:text-lg">
                  {item.label}
                </h3>
                <p className="text-gold-400 text-xs sm:text-sm font-medium">
                  {item.description}
                </p>
              </div>

              {/* Badge "Zoom" ou "Voir" au survol */}
              <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-[10px] uppercase tracking-tighter text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Aperçu
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
