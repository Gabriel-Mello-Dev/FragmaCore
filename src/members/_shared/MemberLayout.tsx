import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Seam } from "@/components/ui/Seam";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { members, type Member } from "@/data/members";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

/** Estrutura-base das páginas individuais. Use "extra" para seções próprias. */
export function MemberLayout({ member, extra }: { member: Member; extra?: ReactNode }) {
  const mine = projects.filter((p) => p.members.includes(member.slug));
  const others = members.filter((m) => m.slug !== member.slug);
  const style = { "--accent": member.accent ?? "#C8A04C" } as CSSProperties;

  return (
    <div style={style}>
      <section className="border-b border-line" aria-labelledby="membro-nome">
        <div className="wrap py-16 md:py-24">
          <Link href="/#time" className="text-sm text-ash hover:text-[color:var(--accent)]">Voltar para a Fragma Core</Link>
          <h1 id="membro-nome" className="mt-8 text-5xl font-semibold leading-none tracking-tight sm:text-7xl">{member.name}</h1>
          <p className="mt-4 text-xl text-[color:var(--accent)]">{member.role}</p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/80">{member.bio}</p>
          {member.focus.length > 0 && <p className="mt-6 text-ash">Foco: {member.focus.join(", ")}.</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${site.email}?subject=${encodeURIComponent(`Contato para ${member.name}`)}`}>Falar com {member.firstName}</Button>
            {member.links.map((l) => <Button key={l.href} href={l.href} variant="line">{l.label}</Button>)}
          </div>
        </div>
        <div className="wrap -mb-4"><Seam immediate /></div>
      </section>

      <section className="section" aria-labelledby="membro-projetos">
        <div className="wrap">
          <h2 id="membro-projetos" className="text-3xl font-semibold tracking-tight md:text-4xl">Projetos de {member.firstName}</h2>
          {mine.length ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{mine.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
          ) : (
            <p className="mt-6 max-w-md text-ash">Nenhum projeto publicado por aqui ainda. Eles aparecem automaticamente quando {member.firstName} é adicionado a um projeto em src/data/projects.ts.</p>
          )}
        </div>
      </section>

      {extra}

      <section className="border-t border-line bg-charcoal py-16" aria-label="Outros integrantes">
        <div className="wrap flex flex-wrap items-center justify-between gap-6">
          <p className="text-ash">Conheça também: {others.map((o, i) => (<span key={o.slug}>{i > 0 && ", "}<Link className="text-bone underline decoration-kin underline-offset-4 hover:text-kin-soft" href={`/${o.slug}`}>{o.name}</Link></span>))}</p>
          <Button href="/#contato" variant="line">Pedir um diagnóstico</Button>
        </div>
      </section>
    </div>
  );
}
