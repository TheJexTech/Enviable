import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const runtime = "edge";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0F172A 0%, #1d3674 55%, #2563EB 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #2563EB, #38BDF8)",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            CI
          </div>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#38BDF8",
            }}
          >
            Enviable Group
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 34, color: "#CBD5E1", maxWidth: 880 }}>
            Building Businesses. Creating Opportunities. Driving Africa Forward.
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#94A3B8" }}>
          Founder &amp; Chairman, Enviable Group of Companies
        </div>
      </div>
    ),
    { ...size },
  );
}
