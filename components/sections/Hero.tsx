"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { companies, heroStats, site } from "@/lib/content";
import { Portrait } from "@/components/ui/Portrait";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

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

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy pt-28 sm:pt-32 lg:pt-40"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0d1b3d] to-navy" />
        <div className="absolute inset-0 bg-grid-navy bg-[size:46px_46px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-primary/30 blur-[120px]"
        />
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-sky-brand/20 blur-[130px]"
        />
      </div>

      <div className="container-px grid items-center gap-16 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="eyebrow-dark">
              <Sparkles className="h-3.5 w-3.5" />
              Founder &amp; Chairman · Enviable Group
            </span>
          </motion.div>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-[3.75rem]">
            {headlineLines.map((line, i) => (
              <motion.span key={line} variants={item} className="block">
                <span className={i === 2 ? "text-gradient-light" : undefined}>
                  {line}
                </span>
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-mist/80 sm:text-lg"
          >
            {site.name} is the Founder and Chairman of Enviable Group, a
            diversified business ecosystem spanning transportation, logistics,
            energy, mobility, and technology.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/about" className="btn-primary group">
              Discover the Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/business-investments" className="btn-ghost group">
              <Building2 className="h-4 w-4" />
              Business &amp; Investments
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={item}
            className="mt-14 grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-bold text-white sm:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </dt>
                <dd className="mt-1.5 text-xs leading-snug text-mist/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right: portrait + ecosystem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative">
            {/* Halo that blends the photo's warm backdrop into the brand blue */}
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2.75rem] opacity-80 blur-3xl"
              style={{
                background:
                  "linear-gradient(150deg, rgba(198,122,38,0.60) 0%, rgba(190,110,40,0.32) 28%, rgba(37,99,235,0.50) 62%, rgba(56,189,248,0.50) 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2.5rem] opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(68% 55% at 50% 82%, rgba(198,122,38,0.55), transparent 75%)",
              }}
            />
            <Portrait
              priority
              src="/images/ituma-portrait-hero.jpg"
              objectPosition="50% 28%"
              className="relative shadow-card-hover"
            />
          </div>

          <EcosystemOrbit />

          {/* Floating credential card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="absolute -bottom-6 -left-6 hidden glass rounded-2xl p-4 shadow-card sm:block"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-sky-brand">
              Ecosystem
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-white">
              {companies.length} Companies
            </p>
            <p className="text-xs text-mist/60">across 6 industries</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee of industries */}
      <div className="relative border-y border-white/10 bg-white/[0.02] py-5">
        <div className="mask-fade-edges overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
            {[...INDUSTRIES, ...INDUSTRIES].map((label, i) => (
              <span
                key={`${label}-${i}`}
                className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-mist/40"
              >
                {label}
                <span className="h-1 w-1 rounded-full bg-sky-brand/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const INDUSTRIES = [
  "Transportation",
  "Logistics",
  "Urban Mobility",
  "Oil & Gas",
  "Technology",
  "Leadership",
  "Innovation",
];

function EcosystemOrbit() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -right-4 -top-6 hidden h-32 w-32 sm:block"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="relative h-full w-full"
      >
        {companies.slice(0, 5).map((c, i) => {
          const angle = (i / 5) * Math.PI * 2;
          const r = 56;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          const Icon = c.icon;
          return (
            <motion.span
              key={c.name}
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/15 bg-navy/80 shadow-glow backdrop-blur"
            >
              <Icon className="h-4 w-4 text-sky-brand" />
            </motion.span>
          );
        })}
        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary to-sky-brand text-xs font-bold text-white shadow-glow">
          ENV
        </span>
      </motion.div>
    </div>
  );
}
