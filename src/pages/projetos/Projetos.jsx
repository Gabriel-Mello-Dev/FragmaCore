import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {MorphingText} from '../../components/ui/morphing-text'
const projetos = {
  "Equipe Inteira": {
    nome: "🐼 SLP - Sleep Like a Panda",
    slogan: "“Durma melhor, viva de forma mais inteligente, acorde revigorado.”",
    descricao: `
      O SLP - Sleep Like a Panda é uma aplicação web criada para ajudar
      usuários a controlarem melhor seus horários de sono, com alarmes interativos,
      relógio em tempo real e uma interface moderna feita em React.
      O projeto foi desenvolvido com React, Vite, JavaScript, ESLint,
      Axios, Markdown e JSON, oferecendo uma experiência leve,
      fluida e de fácil manutenção.
    `,
    features: [
      "Controle de alarmes e horários personalizados",
      "Relógio em tempo real sincronizado",
      "Interface moderna e modular",
      "Configurações otimizadas com Vite + ESLint",
    ],
    equipe:
      "Gabriel de Oliveira Mello • Francisco Felipe da Silva • Celso Fischer Neto",
    link: "https://slp-sleep-like-a-panda.vercel.app/",
  },

  "Gabriel Mello": {
    nome: "📂 HostDocs — Documentos & Certificados",
    slogan: "“Centralize, organize e acesse seus documentos com facilidade.”",
    descricao: `
      O HostDocs é um sistema web desenvolvido para armazenar e
      gerenciar documentos, relatórios e certificados de cursos de forma prática,
      segura e acessível. Criado com foco em estudantes e profissionais que desejam
      manter seu portfólio sempre organizado, o HostDocs oferece uma interface
      limpa, moderna e intuitiva.
      
      Desenvolvido utilizando PHP para o back-end e integração com
      banco de dados  MySQL , o sistema garante performance e
      segurança. No front-end, o projeto utiliza Tailwind CSS
      para uma experiência visual moderna e responsiva.
    `,
    features: [
      "Upload e armazenamento seguro de documentos",
      "Organização por categorias e tipos de arquivo",
      "Busca rápida e filtragem dinâmica",
      "Layout responsivo com Tailwind CSS",
      "Banco de dados estruturado em MySQL",
    ],
    equipe: "Gabriel de Oliveira Mello",
    link: "https://hostdocs.byethost17.com",
  },

  "Francisco Silva": {
    nome: "Projetos de Francisco Silva",
    descricao: "Projetos individuais em desenvolvimento...",
  },

  "Celso Fischer": {
    nome: "📂 HostDocs — Documentos & Certificados",
    slogan: "“Centralize, organize e acesse seus documentos com facilidade.”",
    descricao: `
      O HostDocs é uma plataforma desenvolvida para facilitar o
      armazenamento e acesso de documentos, certificados e relatórios acadêmicos
      de forma simples e segura. Seu design limpo e intuitivo permite que o usuário
      gerencie seu portfólio digital com rapidez e praticidade.
      
      Construído com PHP e MySQL, o sistema
      possui uma arquitetura sólida e eficiente. A camada visual foi criada com
      Tailwind CSS, garantindo uma interface moderna, adaptável
      e leve.
    `,
    features: [
      "Gerenciamento completo de documentos pessoais e acadêmicos",
      "Sistema de autenticação e controle de acesso",
      "Visual moderno e minimalista com Tailwind CSS",
      "Integração com banco de dados MySQL",
      "Hospedagem otimizada e gratuita",
    ],
    equipe: "Celso Fischer Neto",
    link: "https://hostdocs.byethost17.com",
  },
};


 function Projetos() {
  const [selecionado, setSelecionado] = useState("Equipe Inteira");
  const projeto = projetos[selecionado];

  return (
    <div className="min-h-screen p-8 text-[#E7E0D8] relative overflow-hidden">
      {/* Efeito decorativo de fundo rachado dourado */}
      <div className="absolute inset-0 opacity-10 bg-[url('/imgs/texture-cracked-gold.png')] bg-cover bg-center pointer-events-none" />

      <div className="relative max-w-5xl mx-auto space-y-10">
    <MorphingText texts={["Projetos", "Fragma", "Core"]} className="text-yellow-400" />


        {/* Select estilizado */}
        <div className="flex justify-center">
         <select
  value={selecionado}
  onChange={(e) => setSelecionado(e.target.value)}
  className="
    relative w-full max-w-xs 
    appearance-none 
    bg-gradient-to-br from-[#111]/90 to-[#1B1B1B]/90 
    border border-[#D4AF37]/40
    text-[#F5E6C4] font-semibold tracking-wide
    px-6 py-3 rounded-2xl
    focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60
    cursor-pointer
    shadow-[0_0_20px_rgba(212,175,55,0.15)]
    backdrop-blur-md transition-all duration-300
    hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:border-[#D4AF37]/80
    [text-shadow:_0_0_8px_rgba(212,175,55,0.3)]
  "
  style={{
    fontFamily: '"Cinzel Decorative", serif',
    backgroundImage:
      'linear-gradient(145deg, rgba(30,30,30,0.95), rgba(10,10,10,0.9))',
  }}
>
  <option className="bg-[#0F0F0F] text-[#D4AF37]/90 font-medium">
    Equipe Inteira
  </option>

  <option className="bg-[#0F0F0F] text-[#E7E0D8]">Francisco Silva</option>
  <option className="bg-[#0F0F0F] text-[#E7E0D8]">Celso Fischer</option>
  <option className="bg-[#0F0F0F] text-[#E7E0D8]"> Gabriel Mello</option>
</select>

        </div>

        {/* Conteúdo do projeto */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selecionado}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1B1B1B]/40 border border-[#D4AF37]/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(212,175,55,0.15)] backdrop-blur-md"
          >
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-3 flex items-center gap-2">
              {projeto.nome}
            </h2>

            {projeto.slogan && (
              <p className="italic text-[#E7E0D8]/80 mb-4">{projeto.slogan}</p>
            )}

            <p className="text-[#E7E0D8]/70 leading-relaxed whitespace-pre-line">
              {projeto.descricao}
            </p>

            {projeto.features && (
              <ul className="mt-4 list-disc list-inside text-[#E7E0D8]/70 text-sm grid md:grid-cols-2 gap-x-6">
                {projeto.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            )}

            {projeto.equipe && (
              <p className="mt-5 text-sm text-[#E7E0D8]/60">
                👥 Desenvolvido por: <br /> {projeto.equipe}
              </p>
            )}

            {projeto.link && (
              <div className="mt-6">
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] underline hover:text-[#E7E0D8] text-sm transition-colors"
                >
                  🌐 Acessar projeto hospedado
                </a>
              </div>
            )}

            {/* Preview via iframe */}
            {projeto.link && (
              <div className="mt-6 overflow-hidden rounded-xl border border-[#D4AF37]/30 shadow-inner shadow-[#D4AF37]/10 hover:scale-[1.01] transition-transform duration-300">
                <iframe
                  src={projeto.link}
                  title="SLP Sleep Like a Panda Preview"
                  className="w-full h-[500px] rounded-xl border-0"
                ></iframe>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export {Projetos}