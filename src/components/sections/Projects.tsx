import { SectionHead } from "@/components/ui/SectionHead";
import { projects } from "@/data/projects";
import { ProjectsExplorer } from "./ProjectsExplorer";

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="section border-y border-line bg-charcoal/40"
    >
      <div className="wrap">
        <SectionHead
          id="projetos-title"
          title="Trabalho que você pode abrir e conferir"
          intro="Projetos reais, separados entre desenvolvimento e marketing. Sem números inventados e sem clientes que não possamos citar."
        />
        <ProjectsExplorer projects={projects} />
      </div>
    </section>
  );
}
