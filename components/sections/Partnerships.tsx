import { ArrowRight } from "lucide-react";
import { opportunities } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Partnerships() {
  return (
    <section className="section relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-navy bg-[size:46px_46px] opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />

      <div className="container-px relative">
        <SectionHeading
          dark
          eyebrow="Partnerships & Opportunities"
          title={
            <>
              Let&apos;s build the next chapter{" "}
              <span className="text-gradient-light">together</span>
            </>
          }
          description="Engage with a proven operator and a growing pan-African ecosystem across multiple high-impact sectors."
        />

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((o) => {
            const Icon = o.icon;
            return (
              <StaggerItem key={o.title}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:border-sky-brand/30 hover:bg-white/[0.07]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-sky-brand text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-mist/70">
                    {o.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* CTA banner */}
        <Reveal delay={0.1}>
          <div className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-primary-700 via-primary to-primary-600 p-10 shadow-card sm:p-14">
            <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-sky-brand/30 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h3 className="text-balance font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Ready to explore a partnership or investment?
                </h3>
                <p className="mt-3 text-pretty text-white/80">
                  Reach out to discuss collaborations, joint ventures, advisory
                  engagements, or speaking invitations.
                </p>
              </div>
              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
