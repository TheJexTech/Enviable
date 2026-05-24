import { aboutIntro, storyBlocks, site } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="section relative overflow-hidden bg-cloud">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-px">
        <SectionHeading
          align="left"
          eyebrow="About Chukwuemeka Ituma"
          title={
            <>
              A founder&apos;s story of vision,
              <br className="hidden sm:block" /> grit, and{" "}
              <span className="text-gradient">relentless building</span>.
            </>
          }
        />

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-4xl text-balance text-xl font-medium leading-relaxed text-navy sm:text-2xl">
            {aboutIntro}
          </p>
        </Reveal>

        {/* Story blocks */}
        <Stagger className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:gap-y-16">
          {storyBlocks.map((block, i) => (
            <StaggerItem key={block.kicker}>
              <article className="group relative flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-white font-display text-sm font-bold text-primary shadow-soft transition-colors group-hover:bg-primary group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < storyBlocks.length - 1 && (
                    <span className="mt-3 hidden w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent md:block" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {block.kicker}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-navy">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-ink/70">
                    {block.body}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Signature flourish */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-start gap-4 rounded-3xl border border-mist bg-white p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-2xl font-semibold text-navy">
                {site.name}
              </p>
              <p className="text-sm text-ink/60">{site.role}</p>
            </div>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-ink/70">
              &ldquo;Every business I build begins with a simple question — who
              does this help, and how far can it reach?&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
