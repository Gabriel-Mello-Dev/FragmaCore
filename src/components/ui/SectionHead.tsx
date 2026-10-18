import { cn } from "@/lib/cn";

export function SectionHead({ id, title, intro, light = false }: { id?: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <h2 id={id} className={cn("text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl", light ? "text-obsidian" : "text-bone")}>
        {title}
      </h2>
      {intro && <p className={cn("mt-5 max-w-xl text-lg leading-relaxed", light ? "text-obsidian/70" : "text-ash")}>{intro}</p>}
    </div>
  );
}
