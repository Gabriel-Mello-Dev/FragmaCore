import { SectionHead } from "@/components/ui/SectionHead";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="section border-y border-line bg-charcoal/40">
      <div className="wrap">
        <SectionHead id="projetos-title" title="Trabalho que você pode abrir e conferir" intro="Mostramos projetos reais, com links e tecnologias. Sem números inventados e sem clientes que não possamos citar." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
          <div className="flex min-h-[18rem] flex-col justify-center border border-dashed border-line p-7 text-ash">
            <p className="font-display text-xl text-bone">O próximo case entra aqui.</p>
            <p className="mt-2">Novos projetos são adicionados conforme forem publicados. Tem uma ideia para o primeiro da lista?</p>
            <a href="#contato" className="mt-4 text-sm font-semibold text-kin underline decoration-kin/40 underline-offset-4 hover:text-kin-soft">Falar com o time</a>
          </div>
        </div>
      </div>
    </section>
  );
}
