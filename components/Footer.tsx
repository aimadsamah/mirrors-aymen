import Link from "next/link";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-800 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold gold-text-gradient mb-3 sm:mb-4">Mirrors by Aymen</h3>
            <p className="text-charcoal-400 text-xs sm:text-sm leading-relaxed">
              Des miroirs personnalis&eacute;s premium qui transforment chaque selfie en publicit&eacute; gratuite
              pour votre business.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Liens rapides</h4>
            <div className="space-y-1.5 sm:space-y-2">
              <Link href="#accueil" className="block text-charcoal-400 hover:text-gold-400 transition-colors text-xs sm:text-sm">
                Accueil
              </Link>
              <Link href="#galerie" className="block text-charcoal-400 hover:text-gold-400 transition-colors text-xs sm:text-sm">
                Galerie
              </Link>
              <Link href="#commande" className="block text-charcoal-400 hover:text-gold-400 transition-colors text-xs sm:text-sm">
                Commander
              </Link>
              <Link href="#contact" className="block text-charcoal-400 hover:text-gold-400 transition-colors text-xs sm:text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Nous contacter</h4>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-charcoal-400">
              <p>Bas&eacute; &agrave; Jijel, Alg&eacute;rie</p>
              <p>{socialLinks.phone}</p>
              <div className="flex flex-wrap gap-3 pt-1 sm:pt-2">
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-gold-400 transition-colors">
                  WhatsApp
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-gold-400 transition-colors">
                  Instagram
                </a>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-gold-400 transition-colors">
                  Facebook
                </a>
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-gold-400 transition-colors">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-charcoal-500 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Mirrors by Aymen. Tous droits r&eacute;serv&eacute;s.</p>
        </div>
      </div>
    </footer>
  );
}
