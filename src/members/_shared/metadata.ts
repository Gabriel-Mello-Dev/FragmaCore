import type { Metadata } from "next";
import type { Member } from "@/data/members";

export function memberMetadata(m: Member): Metadata {
  return {
    title: `${m.name} · Fragma Core`,
    description: `${m.name}, ${m.role.toLowerCase()} na Fragma Core. ${m.bio}`,
    alternates: { canonical: `/${m.slug}` },
  };
}
