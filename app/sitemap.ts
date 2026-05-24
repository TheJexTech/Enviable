import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.9 },
    { path: "/business-investments", priority: 0.9 },
    { path: "/lifestyle", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${site.url}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
