import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MorphingText } from "../../components/ui/morphing-text";

function Home() {
  const [clicks, setClicks] = useState(0);
  const [fragmented, setFragmented] = useState(false);

  const handleLogoClick = () => {
    const nextClicks = clicks + 1;
    setClicks(nextClicks);

    if (nextClicks >= 3) {
      setFragmented(true);
      setClicks(0);

      setTimeout(() => {
        setFragmented(false);
      }, 3500);
    }
  };

  return (
    <main className="min-h-screen bg-[#171717] text-[#F2EEE8] overflow-hidden">
      <div className="relative min-h-screen flex flex-col">

        {/* Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1D1D1D] via-[#171717] to-[#151515]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="relative z-10 w-full px-6 py-6 md:px-10 md:py-8"
        >
          <div className="mx-auto max-w-6xl flex items-center justify-between">

            <div className="flex items-center gap-3">
              <img
                src="/imgs/logo.png"
                alt="Fragma Core"
                className="w-8 h-8 object-contain"
              />

              <span className="text-sm font-medium tracking-[0.18em] uppercase text-[#F2EEE8]">
                Fragma Core
              </span>
            </div>

            <span className="hidden sm:block text-xs tracking-[0.18em] uppercase text-[#A8A29A]">
              Desenvolvimento Web
            </span>

          </div>
        </motion.header>

        {/* Main */}
        <section className="relative z-10 flex-1 px-6 pt-20 pb-32 md:px-10 md:pt-28 md:pb-40">
          <div className="mx-auto w-full max-w-6xl">

            {/* Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">

              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                }}
                className="flex flex-col items-start"
              >
                <button
                  type="button"
                  onClick={handleLogoClick}
                  aria-label="Logo da Fragma Core"
                  className="group mb-8 cursor-pointer"
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center border border-[#D4AF37]/30 rounded-full transition-colors duration-300 group-hover:border-[#D4AF37]/60">
                    <img
                      src="/imgs/logo.png"
                      alt=""
                      className="w-14 md:w-16 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </button>

                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                    Desenvolvimento Web
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-[#F0EBE5]">
                  <MorphingText
                    texts={[
                      "Arte em Código",
                      "Fragma Core",
                    ]}
                    className="text-left text-[#F0EBE5]"
                  />
                </h1>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.12,
                  ease: "easeOut",
                }}
                className="max-w-2xl"
              >
        

                <div className="h-px w-full bg-white/[0.08] mb-7" />

                <p className="text-base md:text-lg leading-[1.8] text-[#D2CDC6] font-light">
                  A Fragma Core transforma fragmentos em soluções completas.
                  Unimos desenvolvimento web, design e propósito para criar
                  experiências digitais funcionais, intuitivas e marcantes.
                </p>

                <p className="mt-5 text-base md:text-lg leading-[1.8] text-[#A8A29A] font-light">
                  Criamos aplicações e experiências para a web, buscando
                  transformar problemas reais em produtos digitais melhores.
                </p>

                {/* Web */}
                <div className="mt-9">
                  <div className="border border-white/[0.08] bg-[#1D1D1D] px-5 py-5 transition-colors duration-300 hover:border-[#D4AF37]/40">
                    <span className="text-xs uppercase tracking-[0.16em] text-[#D4AF37]">
                      Especialidade
                    </span>

                    <p className="mt-2 text-sm text-[#D2CDC6]">
                      Desenvolvimento de aplicações web
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Espaço intencional entre Hero e Filosofia */}
            <div className="h-32 md:h-48" />

            {/* Filosofia */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.55,
                ease: "easeOut",
              }}
              className="pt-8 border-t border-white/[0.08]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-5 md:gap-12">

                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  Nossa filosofia
                </span>

                <p className="max-w-3xl text-sm md:text-base leading-7 text-[#A8A29A]">
                  Assim como no{" "}
                  <i className="text-[#D2CDC6]">Kintsugi</i>, acreditamos
                  que aquilo que foi quebrado não precisa ser escondido.
                  Pode ser reconstruído, aprimorado e transformado em parte
                  essencial daquilo que se tornou.
                </p>

              </div>
            </motion.section>

          </div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
          }}
          className="relative z-10 px-6 py-6 md:px-10 border-t border-white/[0.06]"
        >
          <div className="mx-auto max-w-6xl flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">

            <span className="text-xs text-[#918B84]">
              Fragma Core
            </span>

            <span className="text-xs text-[#918B84]">
              Desenvolvimento Web
            </span>

          </div>
        </motion.footer>

        {/* Easter Egg */}
        <AnimatePresence>
          {fragmented && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-[#171717]/95"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-center px-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
                  Fragmento encontrado
                </p>

                <p className="text-2xl md:text-4xl font-medium text-[#F2EEE8]">
                  Até o erro faz parte da obra.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}

export { Home };