import { impactStats } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Impact() {
  return (
    <section
      id="impact"
      className="section relative overflow-hidden bg-gradient-to-b from-navy via-[#0c1a3a] to-navy text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-navy bg-[size:46px_46px] opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-80 w-80 translate-x-1/2 rounded-full bg-sky-brand/15 blur-[120px]" />

      <div className="container-px relative">
        <SectionHeading
          dark
          eyebrow="Impact & Achievements"
          title={
            <>
              Measurable impact across{" "}
              <span className="text-gradient-light">people and industries</span>
            </>
          }
          description="The numbers behind the mission — opportunity created, communities served, and value built to last."
        />

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={stat.label}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:border-sky-brand/30 hover:bg-white/[0.07]">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-primary/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-sky-brand transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-base font-semibold text-white">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-mist/60">
                    {stat.note}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <p className="mt-10 text-center text-xs text-mist/40">
          Figures shown are representative placeholders and will be updated with
          verified data.
        </p>
      </div>
    </section>
  );
}
