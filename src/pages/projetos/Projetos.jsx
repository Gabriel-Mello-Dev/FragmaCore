import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projetos = {
  "Sleep Like a Panda": {
    nome: "Sleep Like a Panda",
    descricao:
      "Experiência interativa voltada à redução de ansiedade no uso de telas, com foco em usabilidade e design envolvente.",
    tecnologias: ["React", "Axios", "API", "Vite"],
    equipe:
      "Gabriel de Oliveira Mello, Francisco Felipe da Silva e Celso Fischer Neto",
    link: "https://slp-sleep-like-a-panda.vercel.app/",
  },

  Adaptil: {
    nome: "Adaptil",
    descricao:
      "Plataforma de adaptação de conteúdos didáticos personalizados com uso de IA, focada nas necessidades individuais dos alunos.",
    tecnologias: ["Next.js", "React", "Tailwind", "IA"],
    equipe: "Gabriel de Oliveira Mello",
    link: "https://adaptil.vercel.app/",
  },
};

function Projetos() {
  const [selecionado, setSelecionado] = useState("Sleep Like a Panda");

  const projeto = projetos[selecionado];

  return (
<main className="min-h-full w-full bg-[#171717] text-[#E7E0D8] relative">      {" "}
      {/* Fundo */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#151515] to-[#0D0D0D]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>
<div className="relative z-10 w-full min-h-full px-6 py-10 md:px-10 md:py-12">        <div className="w-full max-w-6xl mx-auto space-y-10">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="text-center"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Portfólio
            </span>

            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-[#F0EBE5]">
              Projetos
            </h1>

            <p className="mt-4 text-sm md:text-base text-[#E7E0D8]/50">
              Conheça alguns dos projetos desenvolvidos pela Fragma Core.
            </p>
          </motion.div>

          {/* Seletor */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.1,
            }}
            className="flex justify-center"
          >
            <select
              value={selecionado}
              onChange={(e) => setSelecionado(e.target.value)}
              className="
                appearance-none
                w-full
                max-w-xs
                bg-[#111111]
                border border-[#D4AF37]/30
                text-[#E7E0D8]
                px-5
                py-3
                rounded-xl
                focus:outline-none
                focus:border-[#D4AF37]
                cursor-pointer
                transition-colors
              "
            >
              <option value="Sleep Like a Panda">Sleep Like a Panda</option>

              <option value="Adaptil">Adaptil</option>
            </select>
          </motion.div>

          {/* Projeto */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selecionado}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="
                bg-[#151515]
                border
                border-[#D4AF37]/25
                rounded-2xl
                p-7
                md:p-10
              "
            >
              {/* Nome */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-[0.18em] text-[#D4AF37]">
                  Projeto
                </span>

                <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-[#F0EBE5]">
                  {projeto.nome}
                </h2>
              </div>

              {/* Descrição */}
              <p className="max-w-3xl text-base md:text-lg leading-relaxed text-[#E7E0D8]/65">
                {projeto.descricao}
              </p>

              {/* Tecnologias */}
              <div className="flex flex-wrap gap-2 mt-7">
                {projeto.tecnologias.map((tecnologia) => (
                  <span
                    key={tecnologia}
                    className="
                      px-3
                      py-1.5
                      text-xs
                      border
                      border-[#E7E0D8]/10
                      rounded-md
                      text-[#E7E0D8]/55
                      bg-[#0D0D0D]/40
                    "
                  >
                    {tecnologia}
                  </span>
                ))}
              </div>

              {/* Equipe */}
              <div className="mt-8 pt-6 border-t border-[#E7E0D8]/10">
                <span className="text-xs uppercase tracking-[0.16em] text-[#E7E0D8]/35">
                  Desenvolvido por
                </span>

                <p className="mt-2 text-sm text-[#E7E0D8]/60">
                  {projeto.equipe}
                </p>
              </div>

              {/* Link */}
              <div className="mt-6">
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    text-[#D4AF37]
                    hover:text-[#F0EBE5]
                    transition-colors
                  "
                >
                  Acessar projeto
                  <span>↗</span>
                </a>
              </div>

              {/* Preview */}
              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.16em] text-[#E7E0D8]/30">
                    Preview
                  </span>

                  <span className="text-xs text-[#E7E0D8]/20">
                    Aplicação hospedada
                  </span>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#E7E0D8]/10 bg-white">
                  <iframe
                    src={projeto.link}
                    title={`Preview de ${projeto.nome}`}
                    loading="lazy"
                    className="w-full h-[450px] md:h-[550px] border-0"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

export { Projetos };
