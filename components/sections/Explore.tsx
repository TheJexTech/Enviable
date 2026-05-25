"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Camera,
  Mail,
  User,
  type LucideIcon,
} from "lucide-react";

type Destination = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
  spotlight: string;
};

const destinations: Destination[] = [
  {
    label: "About Enviable",
    href: "/about",
    description:
      "The founder's story, journey, and the philosophy behind the build.",
    icon: User,
    spotlight: "rgba(37,99,235,0.20)",
  },
  {
    label: "Business & Investments",
    href: "/business-investments",
    description:
      "A diversified group across transport, logistics, energy, mobility, and technology.",
    icon: Building2,
    spotlight: "rgba(56,189,248,0.18)",
  },
  {
    label: "Lifestyle",
    href: "/lifestyle",
    description: "Presence, moments, and the world beyond the boardroom.",
    icon: Camera,
    spotlight: "rgba(56,189,248,0.18)",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Partnerships, media, speaking, and business inquiries.",
    icon: Mail,
    spotlight: "rgba(37,99,235,0.20)",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

export function Explore() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowOne = useTransform(scrollYProgress, [0, 1], ["-14%", "16%"]);
  const glowTwo = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden py-28 sm:py-36 lg:py-44"
    >
      {/* Ambient background — a seamless continuation of the hero */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#07142B] to-navy" />
        <div className="absolute inset-0 bg-grid-navy bg-[size:46px_46px] opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <motion.div
          aria-hidden
          style={reduceMotion ? undefined : { y: glowOne }}
          className="absolute -left-[12%] top-[12%] h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[150px]"
        />
        <motion.div
          aria-hidden
          style={reduceMotion ? undefined : { y: glowTwo }}
          className="absolute -right-[12%] bottom-[8%] h-[34rem] w-[34rem] rounded-full bg-sky-brand/10 blur-[150px]"
        />
      </div>

      {/* Soft seams blending into the sections above and below */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-navy to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy to-transparent" />

      <div className="container-px">
        {/* Heading */}
        <motion.div
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Explore
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-7 text-balance font-display text-4xl font-bold leading-[1.04] tracking-tightest text-white sm:text-5xl lg:text-[3.5rem]"
          >
            One vision,{" "}
            <span className="text-gradient-light">many directions.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-mist/65 sm:text-lg"
          >
            Discover the story, the businesses, and the world of Chukwuemeka
            Ituma — each a different lens on the same ambition.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 grid max-w-5xl gap-6 sm:mt-20 sm:grid-cols-2 lg:gap-8"
        >
          {destinations.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.href}
                variants={fadeUp}
                whileHover={reduceMotion ? undefined : { y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="h-full"
              >
                <Link
                  href={d.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_70px_-35px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-500 hover:border-primary/40 hover:bg-white/[0.06] hover:shadow-card-hover sm:p-10"
                >
                  {/* Hover spotlight */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(460px circle at 28% 0%, ${d.spotlight}, transparent 68%)`,
                    }}
                  />
                  {/* Top sheen */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  />

                  <div className="relative flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.12] to-white/0 text-sky-brand backdrop-blur transition-all duration-500 group-hover:border-primary/40 group-hover:text-white group-hover:shadow-glow">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-sm font-semibold tracking-tightest text-white/25">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="relative mt-8 font-display text-2xl font-semibold text-white">
                    {d.label}
                  </h3>
                  <p className="relative mt-3 flex-1 text-pretty leading-relaxed text-mist/60">
                    {d.description}
                  </p>

                  <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-brand">
                    Explore
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
