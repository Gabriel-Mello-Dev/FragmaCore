import { SectionHead } from "@/components/ui/SectionHead";
import { steps } from "@/data/process";

export function Method() {
  return (
    <section id="metodo" aria-labelledby="metodo-title" className="section bg-bone text-obsidian">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead id="metodo-title" light title="Do primeiro contato ao projeto no ar" intro="Cinco etapas, cada uma com um resultado que você consegue verificar." />
        </div>
        <ol className="relative lg:col-span-8">
          <span className="absolute bottom-3 left-[0.95rem] top-3 w-px bg-obsidian/25" aria-hidden="true" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-6 pb-10 last:pb-0">
              <span className="z-10 flex h-8 w-8 flex-none rotate-45 items-center justify-center border border-kin-deep bg-bone" aria-hidden="true">
                <span className="-rotate-45 text-sm font-semibold text-kin-deep">{i + 1}</span>
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 max-w-lg leading-relaxed text-obsidian/70">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
