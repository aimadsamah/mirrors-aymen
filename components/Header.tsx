// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { href: "#accueil", label: "Accueil" },
//   { href: "#avantages", label: "Avantages" },
//   { href: "#galerie", label: "Galerie" },
//   { href: "#livraison", label: "Livraison" },
//   { href: "#commande", label: "Commander" },
//   { href: "#contact", label: "Contact" },
// ];

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => { document.body.style.overflow = ""; };
//   }, [isMobileMenuOpen]);

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "glass py-3" : "bg-transparent py-3 sm:py-5"
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//         <Link href="#accueil" className="flex items-center gap-2">
//           <span className="text-lg sm:text-xl lg:text-2xl font-bold gold-text-gradient truncate max-w-[180px] sm:max-w-none">
//             Mirrors by Aymen
//           </span>
//         </Link>

//         <div className="hidden lg:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="text-sm text-charcoal-300 hover:text-gold-400 transition-colors duration-200"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="lg:hidden p-2 text-charcoal-300 hover:text-gold-400 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
//           aria-label="Toggle menu"
//         >
//           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             {isMobileMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </nav>

//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 top-[56px] left-0 right-0 bottom-0 z-40 bg-charcoal-950/95 backdrop-blur-xl lg:hidden"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.3, delay: 0.1 }}
//               className="flex flex-col items-center justify-center h-full gap-2 px-6"
//             >
//               {navLinks.map((link, index) => (
//                 <motion.div
//                   key={link.href}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
//                   className="w-full"
//                 >
//                   <Link
//                     href={link.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="block text-center text-xl text-charcoal-200 hover:text-gold-400 transition-colors py-4 border-b border-charcoal-800/50 active:bg-charcoal-800/30 rounded-lg"
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.div>
//               ))}

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.4 }}
//                 className="mt-8"
//               >
//                 <Link
//                   href="#commande"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="gold-gradient text-charcoal-900 font-semibold px-8 py-3 rounded-full text-base shadow-lg shadow-gold-500/20 inline-block"
//                 >
//                   Commander maintenant
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#avantages", label: "Avantages" },
  { href: "#galerie", label: "Galerie" },
  { href: "#livraison", label: "Livraison" },
  { href: "#commande", label: "Commander" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      // Petit hack pour iOS
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled ? "glass py-3" : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="#accueil"
            className="flex items-center gap-2 relative z-[110]"
          >
            <span className="text-lg sm:text-xl lg:text-2xl font-bold gold-text-gradient truncate">
              Mirrors by Aymen
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-charcoal-300 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Button - Toujours au dessus */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal-300 hover:text-gold-400 transition-colors relative z-[110] min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay - Sorti du header pour éviter les problèmes de parenté */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-charcoal-950 lg:hidden"
            style={{ height: "100vh", height: "100dvh" }} // Support pour les navigateurs mobiles modernes
          >
            <div className="flex flex-col items-center justify-center h-full w-full px-6 gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="w-full max-w-xs"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center text-2xl text-white hover:text-gold-400 py-4 border-b border-charcoal-800/50"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="#commande"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="gold-gradient text-charcoal-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-gold-500/20 inline-block"
                >
                  Commander maintenant
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
