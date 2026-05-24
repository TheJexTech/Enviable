import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

const size = { width: 1200, height: 630 };

function portraitDataUri(): string | null {
  try {
    const file = join(
      process.cwd(),
      "public",
      "images",
      "ituma-portrait-primary.jpg",
    );
    const base64 = readFileSync(file).toString("base64");
    return `data:image/jpeg;base64,${base64}`;
  } catch {
    return null;
  }
}

export function GET() {
  const portrait = portraitDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #0F172A 0%, #1d3674 60%, #2563EB 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Text column */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "70px 60px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #2563EB, #38BDF8)",
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              CI
            </div>
            <div
              style={{
                fontSize: 22,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#38BDF8",
              }}
            >
              Enviable Group
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05 }}>
              {site.name}
            </div>
            <div style={{ fontSize: 30, color: "#CBD5E1", maxWidth: 560 }}>
              Building Businesses. Creating Opportunities. Driving Africa
              Forward.
            </div>
          </div>

          <div style={{ fontSize: 24, color: "#94A3B8" }}>
            Founder &amp; Chairman, Enviable Group of Companies
          </div>
        </div>

        {/* Portrait column */}
        {portrait && (
          <div
            style={{
              width: 440,
              height: "100%",
              display: "flex",
              position: "relative",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={portrait}
              alt=""
              width={440}
              height={630}
              style={{
                width: 440,
                height: 630,
                objectFit: "cover",
                objectPosition: "50% 15%",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0) 35%)",
              }}
            />
          </div>
        )}
      </div>
    ),
    { ...size },
  );
}
