import { useState, useEffect } from "react";
import { MorphingText } from "../../components/ui/morphing-text";
import { motion, AnimatePresence } from "framer-motion";

 function Home() {
  const [clicks, setClicks] = useState(0);
  const [fragmented, setFragmented] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Easter egg: 3 cliques no logo → ativa modo fragmentado
  useEffect(() => {
    if (clicks >= 3) {
      setFragmented(true);
      setTimeout(() => setClicks(0), 5000);
    }
  }, [clicks]);

  // Efeito de brilho seguindo o cursor
  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#1C1C1C] to-[#0D0D0D] text-[#E7E0D8] rounded-md
       flex flex-col items-center justify-center px-6 relative overflow-hidden transition-all duration-500
       ${fragmented ? "animate-[glitch_1s_infinite]" : ""}`}
      onMouseMove={handleMouseMove}
    >
      {/* Fundo rachado dourado dinâmico */}
      <motion.div
        className="absolute inset-0 bg-[url('/imgs/gold-cracks.png')] bg-cover bg-center opacity-15"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Luz suave seguindo o cursor */}
      <div
        className="pointer-events-none absolute w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-3xl"
        style={{
          left: cursorPos.x - 128,
          top: cursorPos.y - 128,
          transition: "all 0.15s ease",
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-3xl text-center select-none">
        <motion.img
          src="/imgs/logo.png"
          alt="Fragma Core Logo"
          className="w-32 mx-auto mb-6 drop-shadow-[0_0_25px_rgba(212,175,55,0.3)] cursor-pointer"
          whileHover={{
            scale: 1.1,
            rotate: [0, -2, 2, 0],
            filter: "drop-shadow(0 0 20px #D4AF37)",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onClick={() => setClicks((prev) => prev + 1)}
        />

        {/* Texto principal com morphing */}
        <h1 className="text-5xl md:text-6xl font-semibold mb-2 tracking-wide">
          <MorphingText
            texts={["Fragma Core", "Arte em Código"]}
            className="text-[#D4AF37]"
          />
        </h1>

        {/* Slogan animado */}
        <p className="text-sm italic bg-gradient-to-r from-[#D4AF37] via-[#FFF7D1] to-[#D4AF37] 
        text-transparent bg-clip-text animate-shine mb-6">
          Onde imperfeições viram arte.
        </p>

        {/* Descrição */}
        <motion.p
          className="text-lg md:text-xl text-[#E7E0D8]/90 leading-relaxed font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Fragma Core é uma empresa de software que transforma fragmentos em soluções completas.
          Unimos tecnologia, design e propósito para criar experiências digitais únicas em{" "}
          <b>web</b>, <b>desktop</b> e <b>mobile</b>. <br />
          <br />
          Acreditamos que cada falha é uma oportunidade de reconstruir com mais beleza — como o
          ouro no <i>Kintsugi</i>. Nosso código é a arte que une o imperfeito ao extraordinário.
        </motion.p>
      </div>

      {/* Efeito visual quando modo fragmentado ativo */}
      <AnimatePresence>
        {fragmented && (
          <motion.div
            className="absolute inset-0 bg-[url('/imgs/fragment-overlay.png')] bg-cover opacity-25 mix-blend-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export {Home}