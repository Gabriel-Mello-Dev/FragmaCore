import React from "react";
import { motion } from "framer-motion";

function Sobre() {
  const membros = [
    {
      nome: "Celso Fischer Neto",
      img: "/imgs/pfpCelso.jpeg",
      cargo: "Desenvolvedor Front End",
      desc: "Atuação no desenvolvimento de aplicações e na construção de soluções para projetos da equipe.",
    },
    {
      nome: "Francisco Felipe da Silva",
      img: "/imgs/pfpFrancisco.jpeg",
      cargo: "Desenvolvedor de Banco de Dados",
      desc: "Atuação no desenvolvimento e na construção das experiências digitais dos projetos.",
    },
    {
      nome: "Gabriel de Oliveira Mello",
      img: "/imgs/pfpGabriel.jpg",
      cargo: "Desenvolvedor Back End",
      desc: "Atuação no desenvolvimento de sistemas, integrações, APIs e soluções para aplicações web.",
    },
  ];

  return (
    <main className="min-h-full bg-[#171717] text-[#F2EEE8]">

      <div className="relative">

        {/* Hero */}
        <section className="px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
          <div className="max-w-6xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="max-w-4xl"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Sobre nós
              </span>

              <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-[#F2EEE8]">
                Pessoas por trás
                <br />
                <span className="text-[#D4AF37]">
                  do código.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base md:text-lg leading-8 text-[#B8B2AB]">
                A Fragma Core é um grupo de desenvolvimento formado por
                estudantes do Ensino Médio Integrado ao Técnico da ETEC
                Jacinto Ferreira de Sá, em Ourinhos, São Paulo.
              </p>
            </motion.div>

          </div>
        </section>

        {/* Informações */}
        <section className="border-y border-white/[0.08] bg-[#1A1A1A]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">

            <InfoBlock
              title="Quem somos"
              text="Uma equipe formada por estudantes interessados em tecnologia, desenvolvimento e criação de produtos digitais."
            />

            <InfoBlock
              title="O que fazemos"
              text="Desenvolvemos aplicações web, explorando desenvolvimento de interfaces, sistemas, APIs e integrações."
            />

            <InfoBlock
              title="Como trabalhamos"
              text="Aprendemos na prática, colaboramos nos projetos e buscamos transformar ideias em soluções funcionais."
            />

          </div>
        </section>

        {/* O que fazemos */}
        <section className="px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-20">

              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  Nosso trabalho
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl"
              >
                <p className="text-xl md:text-2xl leading-relaxed text-[#D2CDC6]">
                  Unimos{" "}
                  <span className="text-[#F2EEE8]">
                    tecnologia
                  </span>
                  ,{" "}
                  <span className="text-[#F2EEE8]">
                    design
                  </span>{" "}
                  e{" "}
                  <span className="text-[#F2EEE8]">
                    criatividade
                  </span>{" "}
                  para transformar ideias em experiências para a web.
                </p>

                <p className="mt-6 text-base leading-8 text-[#A8A29A]">
                  Nosso foco atual está no desenvolvimento web, criando
                  interfaces, aplicações e sistemas que priorizam
                  usabilidade, organização e uma boa experiência para quem
                  utiliza cada produto.
                </p>
              </motion.div>

            </div>

          </div>
        </section>

        {/* Equipe */}
        <section className="px-6 py-20 md:px-10 md:py-28 border-t border-white/[0.08]">
          <div className="max-w-6xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Equipe
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#F2EEE8]">
                Quem faz a Fragma Core
              </h2>

              <p className="mt-4 max-w-2xl text-sm md:text-base leading-7 text-[#918B84]">
                Três estudantes, diferentes experiências e um objetivo em
                comum: aprender e construir através da tecnologia.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]">

              {membros.map((membro, index) => (
                <motion.article
                  key={membro.nome}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group bg-[#1D1D1D] p-7 md:p-8"
                >

                  {/* Foto */}
                  <div className="relative mb-7 overflow-hidden aspect-square bg-[#252525]">
                    <img
                      src={membro.img}
                      alt={`Foto de ${membro.nome}`}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-[1.03]
                      "
                    />
                  </div>

                  {/* Cargo */}
                  <span className="text-xs uppercase tracking-[0.15em] text-[#D4AF37]">
                    {membro.cargo}
                  </span>

                  {/* Nome */}
                  <h3 className="mt-3 text-xl font-medium text-[#F2EEE8]">
                    {membro.nome}
                  </h3>

                  {/* Descrição */}
                  <p className="mt-4 text-sm leading-6 text-[#A8A29A]">
                    {membro.desc}
                  </p>

                </motion.article>
              ))}

            </div>

          </div>
        </section>

        {/* Formação */}
        <section className="px-6 py-20 md:px-10 md:py-24 border-t border-white/[0.08]">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-20">

              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Formação
              </span>

              <div className="max-w-3xl">

                <h2 className="text-2xl md:text-3xl font-semibold text-[#F2EEE8]">
                  Aprender construindo
                </h2>

                <p className="mt-5 text-base leading-8 text-[#A8A29A]">
                  A Fragma Core surgiu dentro do ambiente acadêmico como
                  uma forma de colocar em prática os conhecimentos adquiridos
                  durante a formação técnica em Desenvolvimento de Sistemas.
                </p>

                <p className="mt-5 text-base leading-8 text-[#A8A29A]">
                  Os projetos funcionam como espaço para experimentar
                  tecnologias, resolver problemas e desenvolver experiência
                  real com desenvolvimento de software.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* Filosofia */}
        <section className="px-6 py-20 md:px-10 md:py-28 border-t border-white/[0.08]">
          <div className="max-w-6xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Nossa filosofia
              </span>

              <blockquote className="mt-7 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-[#F2EEE8]">
                “Fragmentos que se unem,
                <span className="text-[#D4AF37]">
                  {" "}
                  códigos que se transformam.
                </span>
                ”
              </blockquote>

              <p className="mt-8 max-w-2xl text-sm md:text-base leading-7 text-[#A8A29A]">
                O conceito da Fragma Core nasce da ideia de que grandes
                soluções podem surgir de pequenos fragmentos. Código,
                criatividade, aprendizado e colaboração formam o núcleo
                daquilo que construímos.
              </p>
            </motion.div>

          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-7 md:px-10 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

            <span className="text-xs text-[#918B84]">
              Fragma Core
            </span>

            <span className="text-xs text-[#918B84]">
              Ourinhos, São Paulo
            </span>

          </div>
        </footer>

      </div>
    </main>
  );
}

function InfoBlock({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        p-7
        md:p-8
        border-b
        md:border-b-0
        md:border-r
        last:border-r-0
        border-white/[0.08]
      "
    >
      <span className="text-xs uppercase tracking-[0.15em] text-[#D4AF37]">
        {title}
      </span>

      <p className="mt-4 text-sm leading-6 text-[#A8A29A]">
        {text}
      </p>
    </motion.div>
  );
}

export { Sobre };