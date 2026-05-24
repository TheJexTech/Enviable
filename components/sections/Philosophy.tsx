import { Quote } from "lucide-react";
import { leadQuote, principles, site } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="section relative overflow-hidden bg-cloud"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-sky-brand/5 blur-3xl" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Leadership Philosophy"
          title={
            <>
              How a <span className="text-gradient">visionary</span> leads and
              builds
            </>
          }
        />

        {/* Feature quote */}
        <Reveal delay={0.1}>
          <figure className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy via-primary-900 to-primary-700 p-10 text-white shadow-card sm:p-16">
            <div className="pointer-events-none absolute inset-0 bg-grid-navy bg-[size:36px_36px] opacity-20" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-sky-brand/30 blur-3xl" />
            <Quote className="relative h-12 w-12 text-sky-brand/70" />
            <blockquote className="relative mt-6 text-balance font-display text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
              &ldquo;{leadQuote}&rdquo;
            </blockquote>
            <figcaption className="relative mt-8 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-sky-brand text-sm font-bold">
                CI
              </span>
              <div>
                <p className="font-semibold text-white">{site.name}</p>
                <p className="text-sm text-mist/70">{site.role}</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>

        {/* Principles */}
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title}>
                <div className="group h-full rounded-3xl border border-mist bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-ink/70">
                    {p.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
