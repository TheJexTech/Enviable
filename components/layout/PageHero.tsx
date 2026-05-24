import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  breadcrumb?: string;
};

export function PageHero({ eyebrow, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0d1b3d] to-navy" />
        <div className="absolute inset-0 bg-grid-navy bg-[size:46px_46px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-sky-brand/20 blur-[120px]" />
      </div>

      <div className="container-px">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs font-medium text-mist/50 animate-fade-up"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          {breadcrumb && (
            <>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-sky-brand">{breadcrumb}</span>
            </>
          )}
        </nav>

        <span className="eyebrow-dark mt-6 animate-fade-up">{eyebrow}</span>

        <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tightest text-white animate-fade-up sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-mist/75 animate-fade-up sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
