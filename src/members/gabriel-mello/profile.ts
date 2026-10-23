import type { Member } from "@/data/members";

/** Área exclusiva de Gabriel: edite livremente este arquivo. */
export const profile: Member = {
  slug: "gabriel-mello",
  name: "Gabriel de Oliveira Mello",
  firstName: "Gabriel",
  role: "Growth Engineer",
  bio: "Estudante de Desenvolvimento de Sistemas, desenvolvedor e pesquisador interessado em Inteligência Artificial, análise de dados e criação de soluções tecnológicas. Atua no desenvolvimento de aplicações web, integração de APIs e criação de produtos digitais, conectando tecnologia, pesquisa e inovação.",
  focus: [
    "Desenvolvimento Web",
    "Inteligência Artificial e Dados",
    "Pesquisa e Inovação",
    "Visão Computacional",
    "Marketing Digital",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/Gabriel-Mello-Dev",
      kind: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gabriel-de-oliveira-mello-dev-researcher/",
      kind: "linkedin",
    },
    {
      label: "Portfólio",
      href: "https://portfolio-gabrielmello-devresearcher.vercel.app/",
      kind: "portfolio",
    },
  ],
  sections: [
    {
      id: "pesquisa-e-inovacao",
      title: "Pesquisa e inovação",
      kind: "text",
      description:
        "Uma frente que conecta investigação aplicada, dados e construção de produtos digitais.",
      paragraphs: [
        "Seu trabalho conecta desenvolvimento web, inteligência artificial, análise de dados e visão computacional.",
        "Na Fragma Core, essa frente aparece na criação de aplicações, integração de APIs e produtos digitais que unem tecnologia, pesquisa e inovação.",
      ],
    },
    {
      id: "projetos-e-pesquisa",
      title: "Projetos e pesquisa",
      kind: "links",
      description:
        "Canais para acompanhar projetos, experimentos e trabalhos selecionados.",
      items: [
        {
          label: "Portfólio profissional",
          href: "https://portfolio-gabrielmello-devresearcher.vercel.app/",
          description: "Projetos, pesquisa e trabalhos selecionados.",
          kind: "link",
        },
        {
          label: "GitHub",
          href: "https://github.com/Gabriel-Mello-Dev",
          description: "Repositórios e experimentos de desenvolvimento.",
          kind: "link",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/gabriel-de-oliveira-mello-dev-researcher/",
          description: "Trajetória profissional e contato.",
          kind: "link",
        },
      ],
    },
  ],
};
