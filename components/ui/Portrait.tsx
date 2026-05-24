import Image from "next/image";
import { cn } from "@/lib/utils";

type PortraitProps = {
  src?: string;
  alt?: string;
  name?: string;
  role?: string;
  priority?: boolean;
  showLabel?: boolean;
  objectPosition?: string;
  className?: string;
};

/**
 * Premium portrait frame rendering professional photography of
 * Chukwuemeka Ituma with an executive label treatment.
 */
export function Portrait({
  src = "/images/ituma-portrait-primary.jpg",
  alt = "Chukwuemeka Ituma, Founder and Chairman of Enviable Group",
  name = "Chukwuemeka Ituma",
  role = "Founder & Chairman",
  priority = false,
  showLabel = true,
  objectPosition = "50% 18%",
  className,
}: PortraitProps) {
  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-navy",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 90vw, 45vw"
        className="object-cover"
        style={{ objectPosition }}
      />

      {/* Brand tint + readability gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-navy/15" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-primary/30 via-transparent to-sky-brand/20" />

      {showLabel && (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div>
            <p className="font-display text-lg font-semibold text-white drop-shadow">
              {name}
            </p>
            <p className="text-sm text-mist/80">{role}</p>
          </div>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sky-brand backdrop-blur">
            Enviable Group
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/15" />
    </div>
  );
}
