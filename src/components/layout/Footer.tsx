import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { members } from "@/data/members";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8 text-bone" />
            <span className="font-display text-lg font-semibold">{site.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-ash">{site.tagline}</p>
        </div>
        <nav aria-label="Rodapé" className="md:col-span-3">
          <h2 className="text-sm font-semibold text-bone">Navegação</h2>
          <ul className="mt-4 space-y-2 text-ash">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-kin">{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold text-bone">Time</h2>
          <ul className="mt-4 space-y-2 text-ash">
            {members.map((m) => (
              <li key={m.slug}>
                <Link href={`/${m.slug}`} className="hover:text-kin">{m.name}</Link>
              </li>
            ))}
          </ul>
          <a href={`mailto:${site.email}`} className="mt-6 inline-block text-bone underline decoration-kin underline-offset-4">
            {site.email}
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="wrap py-5 text-sm text-ash">© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
