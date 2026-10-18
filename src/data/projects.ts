import type { MemberSlug } from "./members";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  status: "publicado" | "em-andamento";
  image?: string; // Caminho da imagem de capa
  href?: string;
  repo?: string;
  members: MemberSlug[];
};
/**
 * Projetos reais do grupo.
 * A ordem define a prioridade de apresentação na listagem.
 */
export const projects: Project[] = [
  {
    slug: "adaptapus",
    title: "Adaptapus",
    summary:
      "Plataforma educacional que utiliza IA para adaptar questões acadêmicas aos interesses dos estudantes.",
    role: "Desenvolvimento full stack, integração de IA e concepção da plataforma",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Socket.IO",
      "OpenRouter",
    ],
    status: "em-andamento",
    image: "/images/projects/adaptapus.png",
    href: "https://adaptapus.vercel.app/",
    repo: "https://github.com/Gabriel-Mello-Dev/Adaptapus",
    members: ["gabriel-mello", "francisco-felipe", "celso-fischer"],
  },
  {
    slug: "sleep-like-a-panda",
    title: "Sleep Like a Panda",
    summary:
      "Aplicação web interativa para gerenciamento do sono, alarmes e contagens regressivas.",
    role: "Desenvolvimento frontend e integração com API",
    stack: ["JavaScript", "React", "Vite", "Axios", "JSON Server"],
    status: "publicado",
    image: "/images/projects/sleep-like-a-panda.png",
    href: "https://sleep-like-a-panda.vercel.app/",
    repo: "https://github.com/Gabriel-Mello-Dev/Sleep-Like-a-Panda",
    members: ["gabriel-mello", "francisco-felipe", "celso-fischer"],
  },
];
