import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { InProgress } from "@/components/sections/InProgress";

export const metadata: Metadata = {
  title: "Business and Investments",
  description:
    "Explore the businesses and investments of Chukwuemeka Ituma and Enviable Group across transportation, logistics, energy, mobility, and technology.",
  alternates: { canonical: "/business-investments" },
};

export default function BusinessInvestmentsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Business and Investments"
        eyebrow="Business and Investments"
        title={
          <>
            A diversified group{" "}
            <span className="text-gradient-light">built to endure</span>.
          </>
        }
        subtitle="The companies and ventures that make up Enviable Group — spanning transportation, logistics, energy, mobility, and technology across Africa."
      />
      <InProgress
        icon={Building2}
        title="The portfolio is being assembled"
        description="This page will showcase each business and investment in the group. We're building it next — with the full story of how the companies connect and create value together."
        points={[
          "Enviable Transport Services, Logistics, and Tricycles",
          "Enviable Oil & Gas and the energy value chain",
          "Eatables App and the group's move into technology",
        ]}
      />
    </>
  );
}
