export type MemberSlug = "gabriel-mello" | "francisco-felipe" | "celso-fischer";

export type Member = {
  slug: MemberSlug;
  name: string;
  firstName: string;
  role: string;
  bio: string;
  focus: string[];
  links: { label: string; href: string }[];
  /** Cor de acento da página individual (padrão: ouro). */
  accent?: string;
};

/**
 * Perfis dos integrantes. Cada integrante edita o seu próprio arquivo em
 * src/members/<slug>/profile.ts; este arquivo apenas reúne os três.
 */
import { profile as gabriel } from "@/members/gabriel-mello/profile";
import { profile as francisco } from "@/members/francisco-felipe/profile";
import { profile as celso } from "@/members/celso-fischer/profile";

export const members: Member[] = [gabriel, francisco, celso];

export function getMember(slug: MemberSlug): Member {
  const m = members.find((x) => x.slug === slug);
  if (!m) throw new Error(`Integrante não encontrado: ${slug}`);
  return m;
}
