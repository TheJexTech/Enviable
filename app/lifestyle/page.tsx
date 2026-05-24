import type { Metadata } from "next";
import { Camera } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { InProgress } from "@/components/sections/InProgress";

export const metadata: Metadata = {
  title: "Lifestyle",
  description:
    "A visual glimpse into the world of Chukwuemeka Ituma — moments, presence, and the life beyond the boardroom.",
  alternates: { canonical: "/lifestyle" },
};

export default function LifestylePage() {
  return (
    <>
      <PageHero
        breadcrumb="Lifestyle"
        eyebrow="Lifestyle"
        title={
          <>
            The world{" "}
            <span className="text-gradient-light">beyond the boardroom</span>.
          </>
        }
        subtitle="Moments, presence, and personality — a visual glimpse into the life and style of Chukwuemeka Ituma."
      />
      <InProgress
        icon={Camera}
        title="The gallery is being curated"
        description="This page will be photo-led — a curated set of images capturing presence, moments, and lifestyle. We're adding the pictures next."
        points={[
          "A curated photo gallery with a refined, editorial layout",
          "Moments from appearances, events, and everyday life",
          "Imagery that brings personality and presence to the brand",
        ]}
      />
    </>
  );
}
