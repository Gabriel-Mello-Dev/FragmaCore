import { motion } from "framer-motion"
import { Code2, Monitor, Smartphone, Zap, FileCode2, Wind } from "lucide-react"

function Tech() {
  const techs = [
    {
      name: "React",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
      desc: "Biblioteca moderna para interfaces dinâmicas e reativas em web apps.",
      color: "#61DAFB",
      animation: { rotate: 360 },
    },
    {
      name: "React Native",
      icon: "https://images.seeklogo.com/logo-png/41/2/react-native-logo-png_seeklogo-410644.png",
      desc: "Desenvolvimento nativo com a mesma base de código para iOS e Android.",
      color: "#00D8FF",
      animation: { rotate: [0, 10, -10, 0] },
    },
    {
      name: "Electron",
      icon: "https://iconlogovector.com/uploads/images/2024/04/lg-6623b70b896ab-Electron-Electronjs.webp",
      desc: "Aplicativos desktop poderosos com tecnologias web.",
      color: "#9FE2BF",
      animation: { scale: [1, 1.2, 1] },
    },
    {
      name: "JavaScript",
      icon: "https://skillforge.com/wp-content/uploads/2020/10/javascript.png",
      desc: "A linguagem base que dá vida ao frontend moderno.",
      color: "#F7DF1E",
      animation: { y: [0, -5, 0] },
    },
    {
      name: "TypeScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png",
      desc: "Segurança e clareza no código com tipagem estática.",
      color: "#3178C6",
      animation: { rotate: [-5, 5, 0] },
    },
    {
      name: "Tailwind CSS",
      icon: "https://miro.medium.com/1*JEHLmWo6_SrpHPiP4AimIw.png",
      desc: "Estilização rápida e moderna para layouts responsivos e elegantes.",
      color: "#38BDF8",
      animation: { scale: [1, 1.1, 1] },
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0D0D0D] to-[#1C1C1C] text-[#E7E0D8]">
      {/* Fundo rachado dourado */}
      <div className="absolute inset-0 bg-[url('/imgs/gold-cracks.png')] bg-cover bg-center opacity-10 pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto py-20 px-8">
        <h1 className="text-5xl md:text-6xl font-semibold text-[#D4AF37] mb-14 text-center tracking-wide drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
          Tecnologias
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="group relative bg-[#121212]/70 border border-[#D4AF37]/20 rounded-3xl p-8 backdrop-blur-md shadow-lg hover:border-[#D4AF37]/60 transition-all duration-300 overflow-hidden"
            >
              {/* Brilho suave no hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

              {/* Ícone animado */}
              <motion.img
                src={tech.icon}
                alt={tech.name}
                className="w-14 h-14 mx-auto mb-6 drop-shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                whileHover={tech.animation}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ color: tech.color }}
              />

              {/* Nome */}
              <h2
                className="text-2xl font-semibold text-center mb-3 tracking-wide"
                style={{ color: tech.color }}
              >
                {tech.name}
              </h2>

              {/* Descrição */}
              <p className="text-[#E7E0D8]/80 text-center leading-relaxed font-light">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Tech }
