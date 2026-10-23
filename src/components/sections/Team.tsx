import Link from "next/link";
import { SectionHead } from "@/components/ui/SectionHead";
import { TiltCard } from "@/components/ui/TiltCard";
import { memberInitials, members } from "@/data/members";

export function Team() {
  return (
    <section
      id="time"
      aria-labelledby="time-title"
      className="section border-y border-line bg-charcoal/40"
    >
      <div className="wrap">
        <SectionHead
          id="time-title"
          title="As pessoas por trás do código"
          intro="Cada integrante tem um perfil próprio, com projetos, trajetória e canais de contato. Abra um card para conhecer."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {members.map((member, index) => (
            <li key={member.slug}>
              <TiltCard className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden border border-line bg-charcoal p-7 transition-colors duration-300 focus-within:border-kin/70 hover:border-kin/60">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    className="pointer-events-none absolute right-5 top-5 h-12 w-12 text-kin opacity-30 transition-opacity duration-300 group-hover:opacity-70"
                    aria-hidden="true"
                  >
                    <path
                      d="M48 0 32 16l6 9-10 11"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    <path
                      d="M32 16 26 7"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="flex h-14 w-14 items-center justify-center border border-kin/60 font-display text-xl font-semibold text-kin [clip-path:polygon(0_0,100%_0,100%_70%,70%_100%,0_100%)]"
                      aria-hidden="true"
                    >
                      {memberInitials(member)}
                    </span>
                    <span className="text-xs tabular-nums text-ash">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-bone">
                    <Link
                      href={`/${member.slug}`}
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {member.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-ash">{member.role}</p>

                  {member.focus.length > 0 && (
                    <ul
                      className="mt-4 flex flex-wrap gap-2"
                      aria-label={`Focos de ${member.firstName}`}
                    >
                      {member.focus.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="border border-line px-2 py-1 text-xs text-ash"
                        >
                          {item}
                        </li>
                      ))}
                      {member.focus.length > 3 && (
                        <li className="px-1 py-1 text-xs text-ash">
                          +{member.focus.length - 3}
                        </li>
                      )}
                    </ul>
                  )}

                  <span
                    className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-kin underline decoration-kin/40 underline-offset-4 group-hover:text-kin-soft"
                    aria-hidden="true"
                  >
                    Ver perfil de {member.firstName}
                    <span aria-hidden="true">→</span>
                  </span>
                </article>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
