"use client";

import { useState } from "react";
import {
  categoryLabels,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { FeaturedCase } from "./FeaturedCase";
import { ProjectCard } from "./ProjectCard";

type Filter = "todos" | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "desenvolvimento", label: categoryLabels.desenvolvimento },
  { id: "marketing", label: categoryLabels.marketing },
];

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("todos");

  const development = projects.filter(
    (project) => project.category === "desenvolvimento",
  );
  const marketing = projects.filter(
    (project) => project.category === "marketing",
  );
  const featured = marketing.find((project) => project.featured) ?? marketing[0];
  const otherMarketing = marketing.filter(
    (project) => project.slug !== featured?.slug,
  );

  const count = (id: Filter) => {
    if (id === "todos") return projects.length;
    return id === "desenvolvimento" ? development.length : marketing.length;
  };

  const developmentGrid =
    development.length >= 3
      ? "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      : "mt-8 grid gap-6 md:grid-cols-2";

  const visibleCount = filter === "todos" ? projects.length : count(filter);
  const statusText = `Mostrando ${visibleCount} ${
    visibleCount === 1 ? "projeto" : "projetos"
  }${filter === "todos" ? "" : ` em ${categoryLabels[filter]}`}.`;

  return (
    <>
      <div
        className="mt-10 flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Filtrar projetos por área"
      >
        {filters.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              aria-controls={
                item.id === "todos"
                  ? "projetos-desenvolvimento projetos-marketing"
                  : `projetos-${item.id}`
              }
              onClick={() => setFilter(item.id)}
              className={`inline-flex min-h-11 items-center gap-2 border px-4 py-2 text-sm transition-colors duration-200 ${
                active
                  ? "border-kin bg-kin text-obsidian"
                  : "border-line text-bone hover:border-kin/60 hover:text-kin-soft"
              }`}
            >
              {item.label}
              <span className="text-xs opacity-70">{count(item.id)}</span>
            </button>
          );
        })}
      </div>


      <p className="sr-only" role="status" aria-live="polite">
        {statusText}
      </p>

      <div className="mt-12 space-y-16">
        <section
          id="projetos-desenvolvimento"
          aria-labelledby="projetos-desenvolvimento-title"
          className={filter === "marketing" ? "hidden" : undefined}
        >
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-kin">
                01 · Desenvolvimento
              </p>
              <h3
                id="projetos-desenvolvimento-title"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl"
              >
                Sistemas, aplicações web e IA
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-ash">
              Produtos digitais construídos com código, dados e integrações.
            </p>
          </div>

          <div className={developmentGrid}>
            {development.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                headingLevel="h4"
              />
            ))}
          </div>
        </section>

        <section
          id="projetos-marketing"
          aria-labelledby="projetos-marketing-title"
          className={filter === "desenvolvimento" ? "hidden" : undefined}
        >
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-kin">
                02 · Marketing
              </p>
              <h3
                id="projetos-marketing-title"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl"
              >
                Presença digital, campanhas e conversão
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-ash">
              Estratégia, aquisição de clientes, SEO e otimização da jornada até o contato.
            </p>
          </div>

          {featured && (
            <div className="mt-8">
              <FeaturedCase project={featured} />
            </div>
          )}

          {otherMarketing.length > 0 && (
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherMarketing.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  headingLevel="h4"
                />
              ))}
            </div>
          )}
        </section>

        <div className="flex min-h-[14rem] flex-col justify-center border border-dashed border-line p-7 text-ash">
          <p className="font-display text-xl text-bone">O próximo case entra aqui.</p>
          <p className="mt-2">
            Novos projetos são adicionados conforme forem publicados. Tem uma ideia
            para o próximo?
          </p>
          <a
            href="#contato"
            className="mt-4 text-sm font-semibold text-kin underline decoration-kin/40 underline-offset-4 hover:text-kin-soft"
          >
            Falar com o time
          </a>
        </div>
      </div>
    </>
  );
}
