import { Button } from "@/components/ui/Button";
import { Seam } from "@/components/ui/Seam";
import { HeroVisual } from "@/components/three/HeroVisual";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative border-b border-line">
      <div className="wrap grid items-center gap-10 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="intro text-sm text-ash" style={{ "--d": "0s" } as React.CSSProperties}>
            Desenvolvimento web, IA e tráfego pago
          </p>
          <h1 id="hero-title" className="intro mt-5 text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl" style={{ "--d": ".1s" } as React.CSSProperties}>
            Fragmentos que se unem.
            <br />
            Códigos que se transformam.
          </h1>
          <p className="intro mt-7 max-w-xl text-lg leading-relaxed text-bone/80" style={{ "--d": ".25s" } as React.CSSProperties}>
            Criamos sites, sistemas e automações, e levamos clientes até eles com marketing digital. Uma equipe só, do código ao anúncio.
          </p>
          <div className="intro mt-9 flex flex-wrap gap-3" style={{ "--d": ".4s" } as React.CSSProperties}>
            <Button href="/#contato">Pedir um diagnóstico</Button>
            <Button href="/#projetos" variant="line">Ver projetos</Button>
          </div>
          <p className="intro mt-5 text-sm text-ash" style={{ "--d": ".5s" } as React.CSSProperties}>
            Primeiro contato sem compromisso. Resposta em {site.whatsapp ? "WhatsApp ou e-mail" : "e-mail"}.
          </p>
        </div>
        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
      <div className="wrap -mb-4">
        <Seam immediate />
      </div>
    </section>
  );
}
