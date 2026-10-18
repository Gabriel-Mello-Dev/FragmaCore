import { SectionHead } from "@/components/ui/SectionHead";
import { TiltCard } from "@/components/ui/TiltCard";
import { services } from "@/data/services";
import { ServiceCTA } from "./ServiceCTA";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="section">
      <div className="wrap">
        <SectionHead id="servicos-title" title="Comece pelo problema. A tecnologia vem depois." intro="Organizamos o que fazemos pelo que você precisa resolver, não pelo nome da ferramenta." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <TiltCard key={s.id}>
              <article className="group relative h-full border border-line bg-charcoal p-7 transition-colors duration-300 hover:border-kin/60 md:p-8">
                <span className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-kin transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                <p className="text-sm italic text-kin">{s.need}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ash">{s.summary}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-bone/90">
                      <span className="mt-[0.7em] h-px w-2 flex-none bg-kin" aria-hidden="true" />
                      {o}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-line pt-4 text-sm text-ash">{s.includes.join(", ")}.</p>
                <ServiceCTA id={s.id} label="Conversar sobre isso" />
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
