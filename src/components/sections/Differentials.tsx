import { SectionHead } from "@/components/ui/SectionHead";
import { differentials } from "@/data/process";

export function Differentials() {
  return (
    <section aria-labelledby="dif-title" className="section">
      <div className="wrap">
        <SectionHead id="dif-title" title="Por que trabalhar com um time pequeno que faz tudo" />
        <dl className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {differentials.map((d) => (
            <div key={d.title} className="border-t border-kin/50 pt-5">
              <dt className="text-xl font-semibold tracking-tight">{d.title}</dt>
              <dd className="mt-3 max-w-md leading-relaxed text-ash">{d.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
