import type { MetadataRoute } from "next";
import { members } from "@/data/members";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, priority: 1 }, ...members.map((m) => ({ url: `${site.url}/${m.slug}`, priority: 0.6 }))];
}
