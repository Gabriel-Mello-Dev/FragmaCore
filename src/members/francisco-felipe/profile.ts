import type { Member } from "@/data/members";

/** Área exclusiva de Francisco: edite livremente este arquivo. */
export const profile: Member = {
  slug: "francisco-felipe",
  name: "Francisco Felipe",
  firstName: "Francisco",
  role: "Integrante da Fragma Core",
  bio: "Atua no desenvolvimento dos projetos da Fragma Core, com foco em desenvolvimento web e soluções digitais.",
  focus: ["Desenvolvimento web", "Soluções digitais"],
  links: [],
  // accent: "#C8A04C", // opcional: cor de acento da sua página
  sections: [
    {
      id: "atuacao",
      title: "Atuação na Fragma Core",
      kind: "text",
      paragraphs: [
        "Atua no desenvolvimento dos projetos da Fragma Core, com foco em desenvolvimento web e soluções digitais.",
      ],
    },
  ],
};
