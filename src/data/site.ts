export const site = {
  name: "Fragma Core",
  tagline: "Fragmentos que se unem. Códigos que se transformam.",
  description:
    "A Fragma Core une desenvolvimento web, software, inteligência artificial e marketing digital para criar produtos digitais funcionais e levar clientes até eles.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fragmacore.vercel.app",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "fragmacore@gmail.com",
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP ?? "").replace(/\D/g, ""),
};

export const nav = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Método", href: "/#metodo" },
  { label: "Time", href: "/#time" },
  { label: "Perguntas", href: "/#perguntas" },
];
