import { milestones } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <section
      id="journey"
      className="section relative overflow-hidden bg-navy text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-navy bg-[size:46px_46px] opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-sky-brand/10 blur-[120px]" />

      <div className="container-px relative">
        <SectionHeading
          dark
          eyebrow="Entrepreneurial Journey"
          title={
            <>
              From a single venture to a{" "}
              <span className="text-gradient-light">business ecosystem</span>
            </>
          }
          description="A decade-plus of building, expanding, and diversifying — each milestone laying the groundwork for the next."
        />

        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* Center / left rail */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-sky-brand/60 via-primary/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-2">
            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal
                  key={m.year}
                  direction={left ? "right" : "left"}
                  className={cn(
                    "relative flex items-start gap-6 md:w-1/2",
                    left
                      ? "md:mr-auto md:flex-row-reverse md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12",
                  )}
                >
                  {/* Node */}
                  <span
                    className={cn(
                      "relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border md:absolute md:top-2",
                      left ? "md:-right-5" : "md:-left-5",
                      m.highlight
                        ? "border-sky-brand/50 bg-gradient-to-br from-primary to-sky-brand shadow-glow-sky"
                        : "border-white/20 bg-navy",
                    )}
                  >
                    <span
                      className={cn(
                        "h-2.5 w-2.5 rounded-full",
                        m.highlight ? "bg-white" : "bg-sky-brand",
                      )}
                    />
                    {m.highlight && (
                      <span className="absolute inset-0 animate-pulse-ring rounded-full border border-sky-brand/60" />
                    )}
                  </span>

                  {/* Card */}
                  <div
                    className={cn(
                      "flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07] md:my-3",
                      m.highlight && "ring-1 ring-sky-brand/20",
                    )}
                  >
                    <span className="font-display text-2xl font-bold text-gradient-light">
                      {m.year}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist/70">
                      {m.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
