export type Service = {
  id: string;
  need: string;
  title: string;
  summary: string;
  outcomes: string[];
  includes: string[];
};

export const services: Service[] = [
  {
    id: "web",
    need: "Preciso de um site ou sistema que funcione",
    title: "Desenvolvimento web e software",
    summary:
      "Sites institucionais, landing pages, aplicações web e sistemas sob medida, construídos com Next.js, React e TypeScript.",
    outcomes: [
      "Páginas rápidas, acessíveis e prontas para o Google",
      "Código organizado, que outro desenvolvedor consegue manter",
      "Estrutura pensada para transformar visitas em contatos",
    ],
    includes: ["Sites e landing pages", "Aplicações web", "Painéis e sistemas internos", "Integrações com APIs"],
  },
  {
    id: "growth",
    need: "Quero que mais clientes me encontrem",
    title: "Marketing digital e tráfego pago",
    summary:
      "Campanhas, páginas de captação e acompanhamento de resultados feitos pela mesma equipe que desenvolve o site.",
    outcomes: [
      "Anúncios e página falando a mesma língua",
      "Dados de origem de cada contato, para decidir onde investir",
      "Ajustes frequentes com base no que realmente aconteceu",
    ],
    includes: ["Gestão de tráfego pago", "Estratégia de aquisição de clientes", "Páginas de captação", "Mensuração e relatórios"],
  },

];
