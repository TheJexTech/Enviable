"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Play } from "lucide-react";
import { site } from "@/lib/content";

const headlineLines = [
  "Building Businesses.",
  "Creating Opportunities.",
  "Driving Africa Forward.",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const portraitMask =
  "radial-gradient(82% 84% at 50% 38%, #000 46%, rgba(0,0,0,0.45) 74%, transparent 100%)";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Immersive brand-blue gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-navy" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 95% at 76% 14%, #2f6bf0 0%, #1f57d6 26%, #1d3c90 52%, #0F172A 84%)",
          }}
        />
        <div className="absolute inset-0 bg-grid-navy bg-[size:46px_46px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-sky-brand/10 blur-[130px]"
        />
      </div>

      {/* Giant faint wordmark behind the portrait */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 right-[-1%] select-none font-display text-[26vw] font-extrabold leading-none tracking-tightest text-white/[0.05] lg:text-[15rem]"
      >
        ITUMA
      </span>

      <div className="container-px relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 pb-10 lg:pb-24"
        >
          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-[3.85rem]"
          >
            {headlineLines.map((line, i) => (
              <span key={line} className="block">
                <span className={i === 2 ? "text-gradient-light" : undefined}>
                  {line}
                </span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-md text-pretty text-base leading-relaxed text-mist/75 sm:text-lg"
          >
            {site.name} is the Founder and Chairman of Enviable Group — a
            diversified business ecosystem spanning transportation, logistics,
            energy, mobility, and technology.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-4 rounded-full border border-white/15 bg-white/10 py-2 pl-6 pr-2 backdrop-blur-xl transition-colors hover:bg-white/15"
            >
              <span className="text-sm font-semibold text-white">
                See the Story
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-sky-brand text-white shadow-glow transition-transform group-hover:scale-105">
                <Play className="h-4 w-4 translate-x-px fill-current" />
              </span>
            </Link>
            <Link href="/business-investments" className="btn-ghost group">
              <Building2 className="h-4 w-4" />
              Business &amp; Investments
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: portrait blended into the background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-0 flex justify-center lg:justify-end"
        >
          <div
            className="relative isolate h-[24rem] w-full max-w-sm sm:h-[32rem] lg:h-[42rem] lg:max-w-none"
            style={{ WebkitMaskImage: portraitMask, maskImage: portraitMask }}
          >
            <Image
              src="/images/ituma-portrait-hero.jpg"
              alt="Chukwuemeka Ituma, Founder and Chairman of Enviable Group"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 48vw"
              className="object-cover"
              style={{ objectPosition: "50% 18%" }}
            />
            {/* Knock back the warm cast ~70% */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-saturation"
              style={{ background: "rgba(128,128,128,0.7)" }}
            />
            {/* Recolor the studio backdrop to brand blue so it melts into the
                gradient, while a radial mask spares the subject. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-color"
              style={{
                background:
                  "linear-gradient(155deg, #2563EB 0%, #1d4ed8 48%, #38BDF8 100%)",
                WebkitMaskImage:
                  "radial-gradient(70% 58% at 50% 36%, transparent 30%, rgba(0,0,0,0.7) 60%, black 80%)",
                maskImage:
                  "radial-gradient(70% 58% at 50% 36%, transparent 30%, rgba(0,0,0,0.7) 60%, black 80%)",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Geometric accent shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-28 left-10 hidden flex-col gap-2.5 sm:flex"
      >
        <span className="h-0 w-0 border-b-[30px] border-l-[20px] border-b-white/10 border-l-transparent" />
        <span className="h-0 w-0 border-b-[20px] border-l-[13px] border-b-white/[0.06] border-l-transparent" />
      </div>

      {/* Oversized name across the base */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-2 left-1/2 w-full -translate-x-1/2 translate-y-1/3 select-none whitespace-nowrap text-center font-display text-[13vw] font-extrabold leading-none tracking-tightest text-white/[0.045]"
      >
        CHUKWUEMEKA ITUMA
      </span>
    </section>
  );
}
