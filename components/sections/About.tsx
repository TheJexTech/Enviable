import Image from "next/image";
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

        {/* Editorial intro + portrait */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="text-balance text-xl font-medium leading-relaxed text-navy sm:text-2xl">
                {aboutIntro}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-3xl border border-mist bg-white p-7 shadow-soft">
                <p className="text-pretty leading-relaxed text-ink/70">
                  &ldquo;Every business I build begins with a simple question —
                  who does this help, and how far can it reach?&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-4 border-t border-mist pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-sky-brand text-sm font-bold text-white">
                    CI
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-navy">
                      {site.name}
                    </p>
                    <p className="text-sm text-ink/60">{site.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.1}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 via-transparent to-sky-brand/25 blur-2xl" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-navy shadow-card">
                <Image
                  src="/images/ituma-portrait-secondary.jpg"
                  alt="Chukwuemeka Ituma, entrepreneur and Founder of Enviable Group"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 15%" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/15" />
              </div>

              <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-mist bg-white p-4 shadow-card sm:block">
                <p className="font-display text-2xl font-bold text-gradient">
                  12+
                </p>
                <p className="text-xs text-ink/60">Years building</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Story blocks */}
        <Stagger className="mt-20 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:gap-y-16">
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
      </div>
    </section>
  );
}
