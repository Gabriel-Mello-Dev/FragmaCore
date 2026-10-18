import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden border border-line bg-charcoal transition-colors duration-300 hover:border-kin/50">
      <div className="relative aspect-video overflow-hidden bg-charcoal/70">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Imagem do projeto ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-ash">
            Imagem não disponível
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-kin">
          {project.status === "publicado" ? "Publicado" : "Em desenvolvimento"}
        </p>

        <h3 className="mt-3 font-display text-xl text-bone">
          {project.title}
        </h3>

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

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="text-kin underline decoration-kin/40 underline-offset-4 hover:text-kin-soft"
            >
              Ver projeto
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
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