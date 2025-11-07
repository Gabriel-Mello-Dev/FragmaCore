import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {MorphingText} from '../../components/ui/morphing-text'
const projetos = {
  "Equipe Inteira": {
    nome: "🐼 SLP - Sleep Like a Panda",
    slogan: "“Durma melhor, viva de forma mais inteligente, acorde revigorado.”",
    descricao: `
      O SLP - Sleep Like a Panda é uma aplicação web criada para ajudar
      usuários a controlarem melhor seus horários de sono, com alarmes
      interativos, relógio em tempo real e uma interface moderna feita em React.
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
    nome: "Projetos de Gabriel Mello",
    descricao: "Projetos individuais em desenvolvimento...",
  },
  "Francisco Silva": {
    nome: "Projetos de Francisco Silva",
    descricao: "Projetos individuais em desenvolvimento...",
  },
  "Celso Fischer": {
    nome: "Projetos de Celso Fischer",
    descricao: "Projetos individuais em desenvolvimento...",
  },
};

 function Projetos() {
  const [selecionado, setSelecionado] = useState("Equipe Inteira");
  const projeto = projetos[selecionado];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] via-[#151515] to-[#1E1E1E] p-8 text-[#E7E0D8] relative overflow-hidden">
      {/* Efeito decorativo de fundo rachado dourado */}
      <div className="absolute inset-0 opacity-10 bg-[url('/imgs/texture-cracked-gold.png')] bg-cover bg-center pointer-events-none" />

      <div className="relative max-w-5xl mx-auto space-y-10">
    <MorphingText texts={["Projetos", "Fragma", "Core"]} className="text-yellow-400" />


        {/* Select estilizado */}
        <div className="flex justify-center">
          <select
            value={selecionado}
            onChange={(e) => setSelecionado(e.target.value)}
            className="bg-[#1B1B1B]/60 border border-[#D4AF37]/40 text-[#E7E0D8]
             px-6 py-3 rounded-xl focus:ring-2 focus:ring-[#D4AF37]/50
             backdrop-blur-md cursor-pointer text-lg shadow-[0_0_10px_rgba(212,175,55,0.2)]"
          >
            <option>Gabriel Mello</option>
            <option>Francisco Silva</option>
            <option>Celso Fischer</option>
            <option>Equipe Inteira</option>
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