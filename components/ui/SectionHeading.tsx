import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center"
          ? "mx-auto max-w-3xl items-center text-center"
          : "items-start text-left",
        className,
      )}
    >
      <Reveal>
        <span className={dark ? "eyebrow-dark" : "eyebrow"}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "text-balance text-3xl font-bold leading-[1.08] sm:text-4xl lg:text-5xl",
            dark ? "text-white" : "text-navy",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
              dark ? "text-mist/80" : "text-ink/70",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
