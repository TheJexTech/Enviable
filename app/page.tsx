import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Camera,
  Mail,
  User,
  type LucideIcon,
} from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

type Destination = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

const destinations: Destination[] = [
  {
    label: "About Enviable",
    href: "/about",
    description:
      "The founder's story, journey, and the philosophy behind the build.",
    icon: User,
  },
  {
    label: "Business and Investments",
    href: "/business-investments",
    description:
      "A diversified group across transport, logistics, energy, mobility, and technology.",
    icon: Building2,
  },
  {
    label: "Lifestyle",
    href: "/lifestyle",
    description: "Presence, moments, and the world beyond the boardroom.",
    icon: Camera,
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Partnerships, media, speaking, and business inquiries.",
    icon: Mail,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExploreSection />
      <CtaBand />
    </>
  );
}

function ExploreSection() {
  return (
    <section className="section relative overflow-hidden bg-cloud">
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-px relative">
        <SectionHeading
          align="left"
          eyebrow="Explore"
          title={
            <>
              One vision,{" "}
              <span className="text-gradient">many directions</span>.
            </>
          }
          description="Discover the story, the businesses, and the world of Chukwuemeka Ituma."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
          {destinations.map((d) => {
            const Icon = d.icon;
            return (
              <StaggerItem key={d.href}>
                <Link
                  href={d.href}
                  className="group flex h-full items-start gap-5 rounded-3xl border border-mist bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-navy">
                        {d.label}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-ink/65">
                      {d.description}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0d1b3d] to-navy" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-sky-brand/20 blur-[120px]" />
      </div>

      <div className="container-px py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            Building businesses.{" "}
            <span className="text-gradient-light">
              Creating opportunities.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-mist/75 sm:text-lg">
            For partnerships, investments, media, and speaking engagements — the
            office of Chukwuemeka Ituma is ready to connect.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary group">
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/business-investments" className="btn-ghost">
              <Building2 className="h-4 w-4" />
              Business &amp; Investments
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
