import Link from "next/link";
import { ArrowRight, Sparkles, type LucideIcon } from "lucide-react";

type InProgressProps = {
  title: string;
  description: string;
  points?: string[];
  icon?: LucideIcon;
};

export function InProgress({
  title,
  description,
  points,
  icon: Icon = Sparkles,
}: InProgressProps) {
  return (
    <section className="section relative overflow-hidden bg-cloud">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-px relative">
        <div className="mx-auto max-w-2xl rounded-3xl border border-mist bg-white p-10 text-center shadow-soft sm:p-14">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-sky-brand text-white shadow-glow">
            <Icon className="h-7 w-7" />
          </span>

          <h2 className="mt-7 font-display text-2xl font-bold text-navy sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-ink/70">
            {description}
          </p>

          {points && points.length > 0 && (
            <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-mist bg-cloud px-4 py-3 text-sm text-ink/75"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary group">
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/" className="btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
