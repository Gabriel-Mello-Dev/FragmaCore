import Image from "next/image";
import { categoryLabels, type Project } from "@/data/projects";
import { ProjectMark } from "@/components/ui/ProjectMark";

type ProjectCardProps = {
  project: Project;
  headingLevel?: "h3" | "h4";
};

export function ProjectCard({ project, headingLevel = "h3" }: ProjectCardProps) {
  const Heading = headingLevel;

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-line bg-charcoal transition-colors duration-300 hover:border-kin/50">
      <div className="relative aspect-video overflow-hidden bg-charcoal/70">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `Imagem do projeto ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
              project.imagePosition === "top" ? "object-top" : "object-center"
            }`}
          />
        ) : (
          <div className="relative h-full">
            <ProjectMark seed={project.slug} />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-obsidian/80 to-transparent p-5">
              <span className="text-xs uppercase tracking-widest text-kin">
                {categoryLabels[project.category]}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs uppercase tracking-widest text-kin">
            {categoryLabels[project.category]}
          </p>
          <p className="text-xs text-ash">
            {project.status === "publicado" ? "Publicado" : "Em desenvolvimento"}
          </p>
        </div>

        <Heading className="mt-3 font-display text-xl text-bone">
          {project.title}
        </Heading>

        <p className="mt-3 text-sm leading-6 text-ash">
          {project.summary}
        </p>

        <p className="mt-4 text-sm text-bone/80">
          {project.role}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span
              key={technology}
              className="border border-line px-2 py-1 text-xs text-ash"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm font-semibold">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-kin underline decoration-kin/40 underline-offset-4 hover:text-kin-soft"
            >
              Ver projeto
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone underline decoration-line underline-offset-4 hover:text-kin"
            >
              Código-fonte
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
