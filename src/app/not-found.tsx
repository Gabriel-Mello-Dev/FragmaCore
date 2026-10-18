import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="wrap py-28">
      <h1 className="text-5xl font-semibold tracking-tight">Página não encontrada</h1>
      <p className="mt-5 max-w-md text-ash">O endereço pode ter mudado ou nunca ter existido. Volte para o início e continue de lá.</p>
      <div className="mt-8"><Button href="/">Voltar ao início</Button></div>
    </section>
  );
}
