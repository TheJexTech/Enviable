import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const gradients = [
  "from-primary-700 via-primary-600 to-sky-brand",
  "from-navy via-primary-800 to-primary-500",
  "from-primary-600 via-primary-500 to-sky-brand",
  "from-primary-900 via-navy to-primary-700",
  "from-sky-brand/80 via-primary-500 to-primary-800",
];

/**
 * Designed image placeholder used across gallery and media sections.
 * Deterministic gradient per `seed` so layouts stay visually varied.
 */
export function VisualPlaceholder({
  label,
  caption,
  seed = 0,
  icon: Icon = ImageIcon,
  className,
}: {
  label?: string;
  caption?: string;
  seed?: number;
  icon?: LucideIcon;
  className?: string;
}) {
  const gradient = gradients[seed % gradients.length];

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-gradient-to-br",
        gradient,
        className,
      )}
      role="img"
      aria-label={label ?? "Image placeholder"}
    >
      <div className="absolute inset-0 bg-grid-navy bg-[size:28px_28px] opacity-20" />
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-navy/30 blur-2xl" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/10 backdrop-blur">
          <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
        </span>
        {label && (
          <span className="text-sm font-semibold text-white">{label}</span>
        )}
        {caption && (
          <span className="text-xs text-white/60">{caption}</span>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
}
