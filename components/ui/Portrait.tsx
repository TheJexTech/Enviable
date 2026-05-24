import Image from "next/image";
import { cn } from "@/lib/utils";

type PortraitProps = {
  src?: string;
  alt?: string;
  name?: string;
  role?: string;
  priority?: boolean;
  showLabel?: boolean;
  brandTint?: boolean;
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
  brandTint = false,
  objectPosition = "50% 18%",
  className,
}: PortraitProps) {
  return (
    <div
      className={cn(
        "relative isolate aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-navy",
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

      {/* Recolor the photo's studio backdrop to brand blue, while a radial
          mask spares the subject in the centre so skin tones stay natural. */}
      {brandTint && (
        <>
          {/* Knock back the warm/orange cast by ~70% (semi-transparent fill
              keeps the blend intact instead of using opacity). */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-saturation"
            style={{ background: "rgba(128,128,128,0.7)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-color"
            style={{
              background:
                "linear-gradient(155deg, #2563EB 0%, #1d4ed8 48%, #38BDF8 100%)",
              WebkitMaskImage:
                "radial-gradient(72% 60% at 50% 40%, transparent 36%, rgba(0,0,0,0.65) 64%, black 82%)",
              maskImage:
                "radial-gradient(72% 60% at 50% 40%, transparent 36%, rgba(0,0,0,0.65) 64%, black 82%)",
            }}
          />
        </>
      )}

      {/* Readability gradient (kept subtle so true photo colors show) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />

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
