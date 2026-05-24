"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryItem } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { cn } from "@/lib/utils";

const spanClass: Record<GalleryItem["span"], string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  square: "",
};

export function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((g) => g.category === filter),
    [filter],
  );

  const activeIndex =
    active === null ? -1 : filtered.findIndex((g) => g.id === active);
  const activeItem = activeIndex >= 0 ? filtered[activeIndex] : null;

  const step = (dir: 1 | -1) => {
    if (activeIndex < 0) return;
    const next = (activeIndex + dir + filtered.length) % filtered.length;
    setActive(filtered[next].id);
  };

  return (
    <section className="section relative overflow-hidden bg-cloud">
      <div className="container-px">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Moments of <span className="text-gradient">leadership</span> and
              impact
            </>
          }
          description="Corporate events, public appearances, operations, and community projects — a visual record of the work."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                filter === cat
                  ? "border-primary bg-primary text-white shadow-glow"
                  : "border-mist bg-white text-ink/70 hover:border-primary/40 hover:text-primary",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                layout
                type="button"
                onClick={() => setActive(item.id)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  spanClass[item.span],
                )}
              >
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: item.objectPosition ?? "center" }}
                  />
                ) : (
                  <VisualPlaceholder
                    seed={item.id}
                    label={undefined}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 text-left">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-brand">
                      {item.category}
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 translate-y-2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Expand className="h-4 w-4" />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <motion.div
              key={activeItem.id}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 shadow-card-hover"
            >
              <div
                className={cn(
                  "relative bg-navy",
                  activeItem.src
                    ? activeItem.span === "tall"
                      ? "aspect-[4/5]"
                      : "aspect-[16/10]"
                    : "aspect-[16/10]",
                )}
              >
                {activeItem.src ? (
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title}
                    fill
                    sizes="(max-width: 768px) 92vw, 768px"
                    className="object-contain"
                  />
                ) : (
                  <VisualPlaceholder
                    seed={activeItem.id}
                    label={activeItem.title}
                    caption={activeItem.category}
                  />
                )}
              </div>
              <div className="flex items-center justify-between bg-navy p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-brand">
                    {activeItem.category}
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {activeItem.title}
                  </p>
                </div>
                <p className="text-sm text-mist/50">
                  {activeIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
