import type { Metadata } from "next";
import { User } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { InProgress } from "@/components/sections/InProgress";

export const metadata: Metadata = {
  title: "About Enviable",
  description:
    "The story of Chukwuemeka Ituma — founder and chairman of Enviable Group — his journey, leadership philosophy, and vision for African enterprise.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About Enviable"
        eyebrow="About Enviable"
        title={
          <>
            A founder&apos;s story of vision,{" "}
            <span className="text-gradient-light">grit, and relentless building</span>.
          </>
        }
        subtitle="From humble beginnings to the helm of a diversified business group — the journey, the principles, and the people behind Enviable."
      />
      <InProgress
        icon={User}
        title="The full story is being crafted"
        description="This is where the founder's journey will live. We're building it next — a complete picture of the path, the milestones, and the philosophy that shaped Enviable."
        points={[
          "The founder's journey, from first venture to diversified group",
          "Key milestones and the leadership philosophy behind them",
          "The vision for building African enterprise with global standards",
        ]}
      />
    </>
  );
}
