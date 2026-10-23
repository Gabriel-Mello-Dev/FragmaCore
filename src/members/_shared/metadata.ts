import type { Metadata } from "next";
import type { Member } from "@/data/members";
import { site } from "@/data/site";

export function memberMetadata(member: Member): Metadata {
  const title = `${member.name} · Fragma Core`;
  const roleLine =
    member.role === "Integrante da Fragma Core"
      ? member.role
      : `${member.role} na Fragma Core`;
  const description = `${member.name}. ${roleLine}. ${member.bio}`;

  return {
    title,
    description,
    alternates: { canonical: `/${member.slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/${member.slug}`,
      siteName: site.name,
      locale: "pt_BR",
      type: "profile",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${member.name} · Fragma Core`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
