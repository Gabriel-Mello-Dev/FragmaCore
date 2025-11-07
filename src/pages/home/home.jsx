
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C1C1C] to-[#0D0D0D] text-[#E7E0D8] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Textura rachada dourada (efeito de fundo sutil) */}
      <div className="absolute inset-0 bg-[url('/imgs/gold-cracks.png')] bg-cover bg-center opacity-15 pointer-events-none" />
      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-3xl text-center">
        <img
          src="/imgs/logo.png"
          alt="Fragma Core Logo"
          className="w-32 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        />

        <h1 className="text-5xl md:text-6xl font-semibold mb-4 tracking-wide text-[#D4AF37]">
          Fragma Core
        </h1>

        <p className="text-xl md:text-2xl italic text-[#C8A951] leading-snug mb-8">
          Fragmentos que se unem, <br />
          códigos que brilham como ouro.
        </p>

        <p className="text-lg md:text-xl text-[#E7E0D8]/90 leading-relaxed font-light">
          Fragma Core é uma empresa de software que transforma fragmentos em soluções completas.
          Unimos tecnologia, design e propósito para criar experiências digitais únicas em <b>web</b>,
          <b> desktop</b> e <b>mobile</b>. <br /><br />
          Acreditamos que cada falha é uma oportunidade de reconstruir com mais beleza — como o ouro no
          <i> Kintsugi</i>. Nosso código é a arte que une o imperfeito ao extraordinário.
        </p>
      </div>
    </div>
  )
}

export  {Home}
