import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the office of Chukwuemeka Ituma for partnerships, media requests, business opportunities, and speaking engagements.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Contact"
        title={
          <>
            Let&apos;s start a <span className="text-gradient-light">conversation</span>
          </>
        }
        subtitle="Whether it's a partnership, media request, or speaking invitation — the office of Chukwuemeka Ituma is ready to connect."
      />
      <Contact showHeading={false} />
    </>
  );
}
