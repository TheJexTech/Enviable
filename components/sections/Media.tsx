import { ArrowUpRight } from "lucide-react";
import { mediaItems } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Media() {
  return (
    <section
      id="media"
      className="section relative overflow-hidden border-y border-mist bg-white"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Media & Recognition"
          title={
            <>
              Featured, recognised, and{" "}
              <span className="text-gradient">invited to lead</span>
            </>
          }
          description="Interviews, press features, podcasts, awards, and speaking engagements spotlighting the journey and the vision."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <a
                  href="#"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-mist bg-cloud shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative h-44 overflow-hidden">
                    <VisualPlaceholder
                      seed={i}
                      icon={Icon}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-navy/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                      {item.type}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold leading-snug text-navy">
                      {item.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between pt-5">
                      <div className="text-sm">
                        <p className="font-medium text-primary">
                          {item.outlet}
                        </p>
                        <p className="text-ink/50">{item.date}</p>
                      </div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-mist text-ink/50 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
