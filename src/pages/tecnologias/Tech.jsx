import { motion } from "framer-motion";

function Tech() {
  const techs = [
    {
      name: "Next.js",
      icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
      desc: "Framework React para aplicações web modernas, rápidas e escaláveis.",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript/3178C6",
      desc: "Tipagem estática para criar aplicações mais seguras e organizadas.",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      desc: "Linguagem fundamental para experiências interativas na web.",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      desc: "Framework CSS para construir interfaces responsivas e consistentes.",
    },
    {
      name: "React",
      icon: "https://cdn.simpleicons.org/react/61DAFB",
      desc: "Biblioteca para construção de interfaces web componentizadas.",
    },
    {
      name: "Vite",
      icon: "https://cdn.simpleicons.org/vite/646CFF",
      desc: "Ferramenta de desenvolvimento rápida para projetos frontend modernos.",
    },
  ];

  return (
    <main className="min-h-full bg-[#171717] text-[#F2EEE8]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">

        {/* Cabeçalho */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
            Stack
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-[#F2EEE8]">
            Tecnologias
          </h1>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-[#B8B2AB]">
            Ferramentas que utilizamos para transformar ideias em
            experiências web funcionais, acessíveis e consistentes.
          </p>
        </motion.header>

        {/* Tecnologias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techs.map((tech, index) => (
            <motion.article
              key={tech.name}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              whileHover={{
                y: -3,
              }}
              className="
                group
                bg-[#1D1D1D]
                border
                border-white/[0.08]
                rounded-xl
                p-6
                transition-colors
                duration-200
                hover:border-[#D4AF37]/35
              "
            >
              {/* Logo */}
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <img
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  className="max-w-11 max-h-11 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Nome */}
              <h2 className="text-lg font-semibold text-[#F2EEE8]">
                {tech.name}
              </h2>

              {/* Descrição */}
              <p className="mt-3 text-sm leading-6 text-[#A8A29A]">
                {tech.desc}
              </p>

              {/* Indicador */}
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#77716B] group-hover:text-[#D4AF37] transition-colors">
                  Desenvolvimento Web
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Rodapé da seção */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="mt-16 pt-6 border-t border-white/[0.08]"
        >
          <p className="text-sm text-[#77716B]">
            Uma stack escolhida para priorizar desempenho, manutenção e
            experiência do usuário.
          </p>
        </motion.div>

      </div>
    </main>
  );
}

export { Tech };