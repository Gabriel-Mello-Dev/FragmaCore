import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Seam } from "@/components/ui/Seam";
import { ProjectCard } from "@/components/sections/ProjectCard";
import {
  memberInitials,
  members,
  type Member,
} from "@/data/members";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { ProfileNav, type ProfileNavItem } from "./ProfileNav";
import { ProfileSections } from "./ProfileSections";

/** Estrutura-base das páginas individuais. Use "extra" para seções próprias. */
export function MemberLayout({
  member,
  extra,
}: {
  member: Member;
  extra?: ReactNode;
}) {
  const mine = projects.filter((project) =>
    project.members.includes(member.slug),
  );
  const others = members.filter((item) => item.slug !== member.slug);
  const style = { "--accent": member.accent ?? "#C8A04C" } as CSSProperties;
  const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Contato para ${member.name}`,
  )}`;
  const sectionItems: ProfileNavItem[] = (member.sections ?? []).map(
    (section) => ({ id: section.id, label: section.title }),
  );
  const navItems: ProfileNavItem[] = [
    { id: "visao-geral", label: "Visão geral" },
    { id: "projetos", label: "Projetos" },
    ...sectionItems,
    { id: "contato", label: "Contato" },
  ];
  const otherGrid =
    others.length >= 3
      ? "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      : "mt-8 grid gap-4 md:grid-cols-2";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    url: `${site.url}/${member.slug}`,
    worksFor: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    sameAs: member.links
      .filter((link) => /^https?:\/\//.test(link.href))
      .map((link) => link.href),
  };

  return (
    <div style={style}>
      <header
        id="visao-geral"
        aria-labelledby="membro-nome"
        className="scroll-mt-12 border-b border-line"
      >
        <div className="wrap py-10 md:py-16">
          <nav aria-label="Trilha de navegação" className="text-sm text-ash">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-kin-soft">
                  Fragma Core
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#time" className="hover:text-kin-soft">
                  Time
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span aria-current="page" className="text-bone">
                  {member.name}
                </span>
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <span
                  className="flex h-20 w-20 shrink-0 items-center justify-center border font-display text-2xl font-semibold [clip-path:polygon(0_0,100%_0,100%_70%,70%_100%,0_100%)]"
                  style={{
                    color: "var(--accent)",
                    borderColor: "var(--accent)",
                  }}
                  aria-hidden="true"
                >
                  {memberInitials(member)}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[color:var(--accent)]">
                    Perfil do time
                  </p>
                  <h1
                    id="membro-nome"
                    className="mt-2 font-display text-4xl font-semibold leading-none tracking-tight sm:text-6xl"
                  >
                    {member.name}
                  </h1>
                  <p className="mt-3 text-xl text-[color:var(--accent)]">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-bone/80">
                {member.bio}
              </p>

              {member.focus.length > 0 && (
                <ul
                  className="mt-6 flex flex-wrap gap-2"
                  aria-label="Focos de atuação"
                >
                  {member.focus.map((item) => (
                    <li
                      key={item}
                      className="border border-line px-2.5 py-1 text-xs text-ash"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={emailHref}>Falar com {member.firstName}</Button>
                {member.links.map((link) => (
                  <Button key={link.href} href={link.href} variant="line">
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>

            <aside
              className="lg:col-span-4"
              aria-labelledby="perfis-time-title"
            >
              <div className="border border-line bg-charcoal p-5">
                <div className="flex items-center justify-between gap-3">
                  <p
                    id="perfis-time-title"
                    className="text-xs uppercase tracking-widest text-kin"
                  >
                    Time Fragma Core
                  </p>
                  <span className="text-xs text-ash">
                    {members.length} perfis
                  </span>
                </div>
                <ul className="mt-4 space-y-1">
                  {members.map((item) => {
                    const current = item.slug === member.slug;

                    return (
                      <li key={item.slug}>
                        <Link
                          href={`/${item.slug}`}
                          aria-current={current ? "page" : undefined}
                          style={
                            current
                              ? { borderColor: "var(--accent)" }
                              : undefined
                          }
                          className={`flex items-center gap-3 border px-3 py-2.5 transition-colors ${
                            current
                              ? "bg-obsidian/50"
                              : "border-transparent hover:border-line hover:bg-obsidian/40"
                          }`}
                        >
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center border border-line font-display text-xs font-semibold text-bone"
                            aria-hidden="true"
                          >
                            {memberInitials(item)}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-semibold text-bone">
                              {item.name}
                            </span>
                            <span className="block truncate text-xs text-ash">
                              {item.role}
                            </span>
                          </span>
                          <span className="text-xs text-ash">
                            {current ? "Atual" : "Abrir"}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
        <div className="wrap -mb-4">
          <Seam />
        </div>
      </header>

      <ProfileNav items={navItems} />

      <div className="wrap py-16 md:py-24">
        <section
          id="projetos"
          aria-labelledby="membro-projetos"
          className="scroll-mt-12"
        >
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-kin">
                Projetos
              </p>
              <h2
                id="membro-projetos"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl"
              >
                Projetos de {member.firstName}
              </h2>
            </div>
            {mine.length > 0 && (
              <p className="text-sm text-ash">
                {mine.length} {mine.length === 1 ? "projeto" : "projetos"}
              </p>
            )}
          </div>

          {mine.length ? (
            <div
              className={`mt-8 grid gap-6 md:grid-cols-2 ${
                mine.length >= 3 ? "lg:grid-cols-3" : ""
              }`}
            >
              {mine.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="mt-8 border border-dashed border-line p-7 text-ash">
              <p className="font-display text-xl text-bone">
                Projetos publicados em breve.
              </p>
              <p className="mt-2 max-w-xl text-sm leading-6">
                Os trabalhos de {member.firstName} aparecem aqui automaticamente
                quando forem publicados. Enquanto isso, conheça as outras áreas
                do perfil ou fale diretamente com o time.
              </p>
            </div>
          )}
        </section>

        <ProfileSections sections={member.sections} />

        {extra && <div className="mt-14">{extra}</div>}

        <section
          id="contato"
          aria-labelledby="contato-title"
          className="mt-16 scroll-mt-12 border border-line bg-charcoal p-7 md:p-9"
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-widest text-kin">
                Contato
              </p>
              <h2
                id="contato-title"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl"
              >
                Falar com {member.firstName}
              </h2>
              <p className="mt-3 text-sm leading-6 text-ash">
                Para projetos, pesquisa, colaboração ou uma conversa sobre
                tecnologia e produto digital.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={emailHref}>Enviar e-mail</Button>
              {member.links.slice(0, 2).map((link) => (
                <Button key={link.href} href={link.href} variant="line">
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
          <p className="mt-5 text-sm text-ash">
            Prefere falar com o time?{" "}
            <Link
              href="/#contato"
              className="text-kin underline decoration-kin/40 underline-offset-4 hover:text-kin-soft"
            >
              Pedir um diagnóstico
            </Link>
            .
          </p>
        </section>
      </div>

      <section
        className="border-t border-line bg-charcoal"
        aria-labelledby="outros-perfis-title"
      >
        <div className="wrap py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-kin">Time</p>
              <h2
                id="outros-perfis-title"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl"
              >
                Outros perfis
              </h2>
            </div>
            <Link
              href="/#time"
              className="text-sm font-semibold text-kin underline decoration-kin/40 underline-offset-4 hover:text-kin-soft"
            >
              Ver time completo
            </Link>
          </div>

          <ul className={otherGrid}>
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/${item.slug}`}
                  className="group flex h-full items-center gap-4 border border-line bg-obsidian p-4 transition-colors hover:border-kin/60"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-kin/50 font-display text-sm font-semibold text-kin"
                    aria-hidden="true"
                  >
                    {memberInitials(item)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-base font-semibold text-bone group-hover:text-kin-soft">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-sm text-ash">
                      {item.role}
                    </span>
                  </span>
                  <span className="ml-auto text-kin" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </div>
  );
}
