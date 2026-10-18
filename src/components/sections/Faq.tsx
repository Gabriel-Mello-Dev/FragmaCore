import { SectionHead } from "@/components/ui/SectionHead";
import { faq } from "@/data/process";

export function Faq() {
  return (
    <section id="perguntas" aria-labelledby="faq-title" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4"><SectionHead id="faq-title" title="Dúvidas antes de começar" /></div>
        <div className="lg:col-span-8">
          {faq.map((f) => (
            <details key={f.q} className="group border-t border-line py-5 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="relative h-4 w-4 flex-none" aria-hidden="true">
                  <span className="absolute left-0 top-1/2 h-px w-4 bg-kin" />
                  <span className="absolute left-1/2 top-0 h-4 w-px bg-kin transition-transform duration-300 group-open:scale-y-0" />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-ash">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
