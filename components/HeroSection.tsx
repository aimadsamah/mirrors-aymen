"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden pt-20 sm:pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),_transparent_18%),linear-gradient(135deg,#070b16_0%,#111827_45%,#030712_100%)]" />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-[-10%] top-10 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-8%] h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200 shadow-lg shadow-amber-500/10">
              Miroirs premium • Made in Algeria
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Des miroirs qui rendent votre activité{" "}
              <span className="gold-text-gradient">immédiatement visible</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-slate-200/90 sm:text-lg lg:mx-0 lg:text-xl">
              Design viral, finition haut de gamme et personnalisation totale
              pour boutiques, salons, hôtels et entreprises qui veulent créer un
              effet wow dès le premier regard.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {["Instagram", "TikTok", "Boutique", "Salon"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">
              <Link
                href="#commande"
                className="rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 px-6 py-3.5 text-center text-base font-semibold text-slate-900 shadow-xl shadow-amber-500/25 transition hover:scale-[1.02] hover:shadow-amber-400/35 sm:px-8"
              >
                Commander maintenant
              </Link>
              <Link
                href="#galerie"
                className="rounded-full border border-white/10 bg-white/6 px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:px-8"
              >
                Voir la galerie
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-10">
              {[
                ["58", "Wilayas livrées"],
                ["100%", "Personnalisable"],
                ["24/7", "Impact marketing"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/6 p-4 shadow-xl shadow-black/20 backdrop-blur-md"
                >
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto w-full max-w-xl"
          >
            <div className="rounded-[32px] border border-white/10 bg-white/8 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-5">
              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#111827_0%,#1f2937_45%,#111827_100%)] p-3 sm:p-4">
                <div className="relative overflow-hidden rounded-[24px] border border-amber-400/20 bg-black/30">
                  <Image
                    src="/mirror.jpg"
                    alt="Miroir publicitaire premium Mirrors by Aymen"
                    width={900}
                    height={1100}
                    priority
                    className="h-[420px] w-full object-cover sm:h-[520px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-100 shadow-lg shadow-black/25">
                    Nouveau design
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-white shadow-xl shadow-black/30 backdrop-blur-md">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-amber-200">
                        Visibilité
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        Votre marque en avant
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-white shadow-xl shadow-black/30 backdrop-blur-md">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-amber-200">
                        Style
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        Miroirs ultra modernes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-5 w-5 text-slate-200/80 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
