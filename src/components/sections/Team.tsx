import Link from "next/link";
import { SectionHead } from "@/components/ui/SectionHead";
import { TiltCard } from "@/components/ui/TiltCard";
import { members } from "@/data/members";

export function Team() {
  return (
    <section id="time" aria-labelledby="time-title" className="section border-y border-line bg-charcoal/40">
      <div className="wrap">
        <SectionHead id="time-title" title="As pessoas por trás do código" intro="Cada integrante tem sua própria página, com projetos e formas de contato." />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {members.map((m) => (
            <li key={m.slug}>
              <TiltCard className="h-full">
                <Link href={`/${m.slug}`} className="group flex h-full flex-col border border-line bg-charcoal p-7 transition-colors duration-300 hover:border-kin/60">
                  <span className="flex h-14 w-14 items-center justify-center border border-kin/60 font-display text-xl font-semibold text-kin [clip-path:polygon(0_0,100%_0,100%_70%,70%_100%,0_100%)]" aria-hidden="true">
                    {m.firstName[0]}
                    {m.name.split(" ")[1]?.[0]}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{m.name}</h3>
                  <p className="mt-1 text-ash">{m.role}</p>
                  <p className="mt-4 flex-1 text-sm text-ash">{m.focus.join(", ")}</p>
                  <span className="mt-6 text-sm font-semibold text-kin underline decoration-kin/40 underline-offset-4 group-hover:text-kin-soft">Ver página de {m.firstName}</span>
                </Link>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
