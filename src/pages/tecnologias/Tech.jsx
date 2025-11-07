import { Code2, Monitor, Smartphone, Zap, FileCode2 } from "lucide-react"
 function Tech() {
  const techs = [
    {
      name: "React",
      icon: <Monitor size={28} />,
      desc: "Biblioteca moderna para interfaces dinâmicas e reativas em web apps.",
      color: "text-[#61DAFB]",
    },
    {
      name: "React Native",
      icon: <Smartphone size={28} />,
      desc: "Desenvolvimento nativo com a mesma base de código para iOS e Android.",
      color: "text-[#00D8FF]",
    },
    {
      name: "Electron",
      icon: <Zap size={28} />,
      desc: "Aplicativos desktop poderosos com tecnologias web.",
      color: "text-[#9FE2BF]",
    },
    {
      name: "JavaScript",
      icon: <Code2 size={28} />,
      desc: "A linguagem base que dá vida ao frontend moderno.",
      color: "text-[#F7DF1E]",
    },
    {
      name: "TypeScript",
      icon: <FileCode2 size={28} />,
      desc: "Segurança e clareza no código com tipagem estática.",
      color: "text-[#3178C6]",
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fundo rachado dourado */}
      <div className="absolute inset-0 bg-[url('/imgs/gold-cracks.png')] bg-cover bg-center opacity-10 pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-5xl mx-auto py-16 px-8">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#D4AF37] mb-10 text-center drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          Tecnologias
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="bg-[#121212]/80 border border-[#D4AF37]/20 rounded-2xl p-6 backdrop-blur-sm hover:border-[#D4AF37]/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`${tech.color}`}>{tech.icon}</span>
                <h2 className="text-2xl font-semibold text-[#E7E0D8]">{tech.name}</h2>
              </div>
              <p className="text-[#C8A951]/80 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export {Tech}