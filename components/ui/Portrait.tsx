import { cn } from "@/lib/utils";

/**
 * Premium portrait placeholder. Swap the inner block for a real <Image>
 * when professional photography is available — the framing/ratio stays.
 */
export function Portrait({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]",
        className,
      )}
      role="img"
      aria-label="Portrait of Chukwuemeka Ituma, Founder and Chairman of Enviable Group"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary-900 to-primary-700" />
      {/* Glow accents */}
      <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-sky-brand/30 blur-3xl" />
      <div className="absolute -right-8 bottom-0 h-56 w-56 rounded-full bg-primary/40 blur-3xl" />
      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-navy bg-[size:32px_32px] opacity-30" />

      {/* Silhouette monogram */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
          <span className="font-display text-4xl font-bold text-white">CI</span>
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-brand">
            Portrait
          </p>
          <p className="mt-1 text-[0.7rem] text-white/50">
            Professional photo placeholder
          </p>
        </div>
      </div>

      {/* Bottom label bar */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-navy/40 p-5 backdrop-blur-md">
        <p className="font-display text-lg font-semibold text-white">
          Chukwuemeka Ituma
        </p>
        <p className="text-sm text-mist/70">Founder &amp; Chairman</p>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
    </div>
  );
}
