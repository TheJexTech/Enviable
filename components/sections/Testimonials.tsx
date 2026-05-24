import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by partners,{" "}
              <span className="text-gradient">peers, and teams</span>
            </>
          }
          description="What collaborators, industry leaders, clients, and team members say about working with Chukwuemeka Ituma."
        />

        <Stagger className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem key={t.name + t.title}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-mist bg-cloud p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
                <Quote className="h-9 w-9 text-primary/30" />
                <blockquote className="mt-5 flex-1 text-pretty text-lg leading-relaxed text-navy">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-mist pt-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-sky-brand text-sm font-bold text-white">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="font-semibold text-navy">{t.name}</p>
                    <p className="text-sm text-ink/60">{t.title}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
