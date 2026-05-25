import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Explore } from "@/components/sections/Explore";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Explore />
      <CtaBand />
    </>
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
