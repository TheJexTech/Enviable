"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { companies } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Ecosystem() {
  const [open, setOpen] = useState<string | null>(companies[0]?.name ?? null);

  return (
    <section id="ecosystem" className="section relative overflow-hidden bg-cloud">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="The Enviable Ecosystem"
          title={
            <>
              One vision, <span className="text-gradient">many engines</span> of
              growth
            </>
          }
          description="A diversified group of companies working in concert — each strong on its own, stronger together."
        />

        <Stagger className="mt-16 grid gap-6 lg:grid-cols-2">
          {companies.map((company, i) => {
            const Icon = company.icon;
            const isOpen = open === company.name;
            return (
              <StaggerItem
                key={company.name}
                className={cn(i === companies.length - 1 && "lg:col-span-2")}
              >
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "group relative h-full overflow-hidden rounded-3xl border bg-white p-7 shadow-soft transition-all duration-500 hover:shadow-card-hover",
                    isOpen ? "border-primary/40" : "border-mist",
                  )}
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-gradient-to-br from-primary/10 to-sky-brand/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-700 text-white shadow-glow">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-navy">
                          {company.name}
                        </h3>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                          {company.industry}
                        </p>
                      </div>
                    </div>
                    <span className="hidden rounded-full border border-mist px-3 py-1 text-xs font-semibold text-ink/50 sm:block">
                      {company.short}
                    </span>
                  </div>

                  <p className="relative mt-5 text-pretty leading-relaxed text-ink/70">
                    {company.description}
                  </p>

                  <div className="relative mt-5 flex items-start gap-2 rounded-xl bg-primary/5 px-4 py-3">
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-sky-brand" />
                    <p className="text-sm font-medium text-navy">
                      {company.impact}
                    </p>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="relative overflow-hidden"
                      >
                        <ul className="mt-5 grid gap-2 border-t border-mist pt-5 sm:grid-cols-2">
                          {company.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-sm text-ink/75"
                            >
                              <Check className="h-4 w-4 shrink-0 text-primary" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative mt-6 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : company.name)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-700"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? "Show less" : "Details"}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                    <a
                      href={company.website}
                      className="group/link inline-flex items-center gap-1 text-sm font-semibold text-ink/60 transition-colors hover:text-navy"
                    >
                      Visit website
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
