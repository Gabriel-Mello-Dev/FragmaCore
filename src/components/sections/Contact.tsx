"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Seam } from "@/components/ui/Seam";
import { services } from "@/data/services";
import { site } from "@/data/site";

const field = "mt-2 w-full border border-line bg-obsidian px-4 py-3 text-bone placeholder:text-ash/60 focus:border-kin focus:outline-none";

export function Contact() {
  const [interest, setInterest] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const on = (e: Event) => setInterest((e as CustomEvent<string>).detail);
    window.addEventListener("fc:service", on);
    return () => window.removeEventListener("fc:service", on);
  }, []);

  function compose(form: HTMLFormElement) {
    const d = new FormData(form);
    const label = services.find((s) => s.id === d.get("interesse"))?.title ?? "Outro assunto";
    const text = `Nome: ${d.get("nome")}\nContato: ${d.get("contato")}\nInteresse: ${label}\n\n${d.get("mensagem")}`;
    return { text, nome: String(d.get("nome")) };
  }

  function send(channel: "email" | "whatsapp", form: HTMLFormElement | null) {
    if (!form || !form.reportValidity()) return;
    const { text, nome } = compose(form);
    if (channel === "whatsapp") {
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
      setStatus("Abrindo o WhatsApp com a sua mensagem.");
    } else {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Contato pelo site, ${nome}`)}&body=${encodeURIComponent(text)}`;
      setStatus("Abrindo o seu aplicativo de e-mail com a mensagem pronta.");
    }
  }

  return (
    <section id="contato" aria-labelledby="contato-title" className="section border-t border-line bg-charcoal">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="contato-title" className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">Conte o que você precisa. Respondemos com um caminho.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ash">Descreva o projeto ou o problema em poucas linhas. Voltamos com perguntas e, se fizer sentido, uma proposta por escrito.</p>
          <ul className="mt-8 space-y-3 text-bone/90">
            <li>
              E-mail: <a className="underline decoration-kin underline-offset-4 hover:text-kin-soft" href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {site.whatsapp && (
              <li>
                WhatsApp: <a className="underline decoration-kin underline-offset-4 hover:text-kin-soft" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">falar agora</a>
              </li>
            )}
          </ul>
          <Seam className="mt-10 max-w-xs" />
        </div>

        <form className="lg:col-span-7" onSubmit={(e) => { e.preventDefault(); send("email", e.currentTarget); }}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-ash">Seu nome
              <input name="nome" required autoComplete="name" className={field} />
            </label>
            <label className="block text-sm text-ash">E-mail ou WhatsApp
              <input name="contato" required autoComplete="email" className={field} />
            </label>
          </div>
          <label className="mt-5 block text-sm text-ash">O que você precisa?
            <select name="interesse" value={interest} onChange={(e) => setInterest(e.target.value)} className={field}>
              <option value="">Ainda não sei, quero conversar</option>
              {services.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
            </select>
          </label>
          <label className="mt-5 block text-sm text-ash">Mensagem
            <textarea name="mensagem" required rows={5} className={field} placeholder="Qual é o projeto, o prazo e o que você espera alcançar?" />
          </label>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button type="submit">Enviar por e-mail</Button>
            {site.whatsapp && (
              <Button variant="line" onClick={() => send("whatsapp", document.querySelector<HTMLFormElement>("#contato form"))}>Enviar por WhatsApp</Button>
            )}
          </div>
          <p role="status" className="mt-4 min-h-6 text-sm text-kin-soft">{status}</p>
        </form>
      </div>
    </section>
  );
}
