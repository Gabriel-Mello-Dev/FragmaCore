export type MemberSlug = "gabriel-mello" | "francisco-felipe" | "celso-fischer";

export type MemberLink = {
  label: string;
  href: string;
  kind?: "github" | "linkedin" | "portfolio" | "email" | "document" | "video" | "image" | "other";
};

/** Blocos reutilizáveis que cada integrante pode combinar e ordenar livremente. */
export type ProfileSectionBase = {
  /** Âncora única, em minúsculas e com hífens. Ex.: "formacao-e-cursos". */
  id: string;
  title: string;
  description?: string;
};

export type ProfileTextSection = ProfileSectionBase & {
  kind: "text";
  paragraphs: string[];
};

export type ProfileTimelineItem = {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  tags?: string[];
  href?: string;
  linkLabel?: string;
};

export type ProfileTimelineSection = ProfileSectionBase & {
  kind: "timeline";
  items: ProfileTimelineItem[];
};

export type ProfileCardItem = {
  title: string;
  meta?: string;
  description?: string;
  tags?: string[];
  href?: string;
  linkLabel?: string;
};

export type ProfileCardsSection = ProfileSectionBase & {
  kind: "cards";
  items: ProfileCardItem[];
};

export type ProfileLinkKind = "link" | "document" | "video" | "image" | "certificate";

export type ProfileLinkItem = {
  label: string;
  href: string;
  description?: string;
  kind?: ProfileLinkKind;
};

export type ProfileLinksSection = ProfileSectionBase & {
  kind: "links";
  items: ProfileLinkItem[];
};

export type ProfileGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  href?: string;
};

export type ProfileGallerySection = ProfileSectionBase & {
  kind: "gallery";
  items: ProfileGalleryItem[];
};

export type ProfileSection =
  | ProfileTextSection
  | ProfileTimelineSection
  | ProfileCardsSection
  | ProfileLinksSection
  | ProfileGallerySection;

export type Member = {
  slug: MemberSlug;
  name: string;
  firstName: string;
  role: string;
  bio: string;
  focus: string[];
  links: MemberLink[];
  /** Cor de acento da página individual (padrão: ouro). */
  accent?: string;
  /**
   * Seções exclusivas deste integrante. A ordem do array é a ordem exibida.
   * Cada pessoa pode usar quantas seções quiser, de qualquer tipo.
   */
  sections?: ProfileSection[];
};

/**
 * Perfis dos integrantes. Cada integrante edita o seu próprio arquivo em
 * src/members/<slug>/profile.ts; este arquivo apenas reúne os três.
 */
import { profile as gabriel } from "@/members/gabriel-mello/profile";
import { profile as francisco } from "@/members/francisco-felipe/profile";
import { profile as celso } from "@/members/celso-fischer/profile";

export const members: Member[] = [gabriel, francisco, celso];

const reservedSectionIds = new Set(["visao-geral", "projetos", "contato"]);

function validateMember(member: Member) {
  const seen = new Set<string>();

  for (const section of member.sections ?? []) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(section.id)) {
      throw new Error(
        `Seção inválida em ${member.slug}: use um id em minúsculas, com hífens. Recebido: "${section.id}".`,
      );
    }
    if (reservedSectionIds.has(section.id) || seen.has(section.id)) {
      throw new Error(
        `Seção duplicada ou reservada em ${member.slug}: "${section.id}".`,
      );
    }
    if (!section.title.trim()) {
      throw new Error(`Seção sem título em ${member.slug}: "${section.id}".`);
    }
    seen.add(section.id);
  }
}

members.forEach(validateMember);

export function getMember(slug: MemberSlug): Member {
  const member = members.find((item) => item.slug === slug);
  if (!member) throw new Error(`Integrante não encontrado: ${slug}`);
  return member;
}

export function memberInitials(member: Member) {
  return member.name
    .split(/\s+/)
    .filter(Boolean)
    .filter((part) => !/^(de|da|do|das|dos|e)$/i.test(part))
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
