import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ProjectMark } from "@/components/ui/ProjectMark";
import type { Project } from "@/data/projects";

export function FeaturedCase({ project }: { project: Project }) {
  const study = project.caseStudy;
  if (!study) return null;

  const sections = [
    { title: "Desenvolvimento", items: study.development },
    { title: "Marketing", items: study.marketing },
    { title: "SEO técnico e GEO", items: study.seoGeo },
  ];

  return (
    <article
      id={`case-${project.slug}`}
      aria-labelledby={`case-${project.slug}-title`}
      className="overflow-hidden border border-line bg-charcoal"
    >
      <div className="grid lg:grid-cols-12">
        <div className="p-7 md:p-9 lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs uppercase tracking-widest text-kin">
              Case em destaque
            </p>
            <span className="border border-kin/40 px-2 py-1 text-xs text-kin-soft">
              Marketing + Desenvolvimento
            </span>
          </div>

          <h4
            id={`case-${project.slug}-title`}
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-bone md:text-4xl"
          >
            {project.title}
          </h4>
          <p className="mt-2 text-sm text-ash">
            Ourinhos, SP · Oficina de motos, peças e acessórios
          </p>

          <p className="mt-5 leading-relaxed text-bone/85">{project.summary}</p>

          <div className="mt-6 border-t border-line pt-5">
            <p className="text-xs uppercase tracking-widest text-kin">
              Contexto
            </p>
            <p className="mt-2 text-sm leading-6 text-ash">{study.context}</p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.href && (
              <Button href={project.href}>Abrir site publicado</Button>
            )}
            <Button href="/#contato" variant="line">
              Conversar sobre um projeto assim
            </Button>
          </div>
        </div>

        <div className="relative min-h-[20rem] border-t border-line lg:col-span-5 lg:min-h-full lg:border-l lg:border-t-0">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt ?? `Imagem do projeto ${project.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          ) : (
            <ProjectMark seed={project.slug} />
          )}
          <div
            className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent"
            aria-hidden="true"
          />
          <p className="absolute bottom-5 left-5 right-5 text-xs uppercase tracking-widest text-bone/90">
            Captura real da landing page publicada
          </p>
        </div>
      </div>

      <div className="grid gap-8 border-t border-line p-7 md:grid-cols-2 md:p-9 lg:grid-cols-3">
        {sections.map((section) => (
          <section key={section.title}>
            <h5 className="font-display text-sm font-semibold uppercase tracking-widest text-kin">
              {section.title}
            </h5>
            <ul className="mt-4 space-y-2.5">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ash">
                  <span
                    className="mt-[0.7em] h-px w-2 flex-none bg-kin"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="grid gap-8 border-t border-line p-7 md:grid-cols-2 md:p-9">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-kin">
            Ferramentas e tecnologias
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.tools.map((tool) => (
              <span
                key={tool}
                className="border border-line px-2 py-1 text-xs text-ash"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-ash">
            Projeto da Fragma Core, sem atribuição individual.
          </p>
        </div>

        <div className="border border-line bg-obsidian/40 p-5">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-kin">
            Transparência do case
          </p>
          <p className="mt-3 text-sm text-bone/80">Escopo executado:</p>
          <ul className="mt-3 space-y-2">
            {study.implemented.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ash">
                <span
                  className="mt-[0.7em] h-px w-2 flex-none bg-kin"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          {study.notDisclosed.map((item) => (
            <p key={item} className="mt-4 text-xs leading-5 text-ash">
              {item}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
