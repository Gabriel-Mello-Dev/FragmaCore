import type { MemberSlug } from "./members";

export type ProjectCategory = "desenvolvimento" | "marketing";

export type CaseStudy = {
  context: string;
  development: string[];
  marketing: string[];
  seoGeo: string[];
  tools: string[];
  implemented: string[];
  notDisclosed: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  status: "publicado" | "em-andamento";
  category: ProjectCategory;
  image?: string; // Caminho da imagem de capa
  imageAlt?: string;
  imagePosition?: "center" | "top";
  href?: string;
  repo?: string;
  featured?: boolean;
  caseStudy?: CaseStudy;
  members: MemberSlug[];
};

export const categoryLabels: Record<ProjectCategory, string> = {
  desenvolvimento: "Desenvolvimento",
  marketing: "Marketing",
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
    category: "desenvolvimento",
    image: "/images/projects/adaptapus.png",
    imageAlt: "Imagem do projeto Adaptapus",
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
    category: "desenvolvimento",
    image: "/images/projects/sleep-like-a-panda.png",
    imageAlt: "Imagem do projeto Sleep Like a Panda",
    href: "https://sleep-like-a-panda.vercel.app/",
    repo: "https://github.com/Gabriel-Mello-Dev/Sleep-Like-a-Panda",
    members: ["gabriel-mello", "francisco-felipe", "celso-fischer"],
  },
  {
    slug: "silvio-motos",
    title: "Silvio Motos",
    summary:
      "Landing page de conversão e estrutura de presença digital para uma oficina de motos em Ourinhos, com campanhas no Google Ads, SEO técnico e práticas de GEO.",
    role: "Desenvolvimento da landing page, direcionamento para WhatsApp, campanhas e SEO/GEO",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Google Ads",
      "Google Tag Manager",
      "SEO técnico",
      "GEO",
      "WhatsApp",
    ],
    status: "publicado",
    category: "marketing",
    image: "/images/projects/silvio-motos-print.jpg",
    imageAlt: "Captura de tela da landing page da Silvio Motos em Ourinhos",
    imagePosition: "top",
    href: "https://silviomotos.vercel.app/",
    featured: true,
    members: [],
    caseStudy: {
      context:
        "A Silvio Motos é uma oficina especializada em motocicletas em Ourinhos, com revisão, manutenção, lubrificação, peças e acessórios. O trabalho partiu da necessidade de transformar a presença digital em um caminho claro para o contato direto pelo WhatsApp.",
      development: [
        "Landing page responsiva em Next.js, com serviços, localização, diferenciais e chamadas para ação.",
        "Direcionamento dinâmico para o WhatsApp, com mensagens prontas e CTAs distribuídos ao longo da página.",
        "Integração com Google Maps para rota e com o Instagram da oficina.",
        "Uso do next/image, carregamento lazy e ajustes de experiência mobile.",
      ],
      marketing: [
        "Planejamento, configuração e gerenciamento de campanhas no Google Ads.",
        "Estruturação da presença digital e organização dos canais de contato.",
        "Conteúdo orientado às dúvidas e necessidades de quem usa a moto no dia a dia.",
        "Página e anúncios pensados como um único caminho de aquisição.",
      ],
      seoGeo: [
        "Metadados de título e descrição, canonical e Open Graph.",
        "Dados estruturados de WebSite e AutoRepair.",
        "Estrutura de indexação com sitemap e robots.txt.",
        "Organização semântica do conteúdo e práticas de GEO para facilitar a leitura por buscadores e sistemas de IA.",
        "Sem promessa de posicionamento ou recomendação por mecanismos de busca.",
      ],
      tools: [
        "Next.js",
        "Tailwind CSS",
        "Google Ads",
        "Google Tag Manager",
        "WhatsApp",
        "Google Maps",
        "Instagram",
      ],
      implemented: [
        "Landing page publicada",
        "Direcionamento para WhatsApp",
        "Campanhas no Google Ads",
        "SEO técnico e fundamentos de GEO",
        "Otimizações de mobile e performance",
      ],
      notDisclosed: [
        "Métricas de tráfego, conversão, vendas, faturamento e ROI não foram incluídas por falta de dados verificáveis neste portfólio.",
        "Não há promessa ou garantia de posicionamento em mecanismos de busca ou sistemas de IA.",
      ],
    },
  },
];

export function projectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => project.category === category);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
