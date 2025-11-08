import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="relative min-w-screen flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#1C1C1C] to-[#0D0D0D] text-[#E7E0D8] overflow-hidden">

      {/* Fundo com textura dourada sutil */}
      <div className="absolute inset-0 bg-[url('/imgs/gold-cracks.png')] bg-cover bg-center opacity-10 pointer-events-none" />

      {/* Espelho dourado */}
      <div className="relative z-10 flex flex-col items-center text-center p-8 bg-[#121212]/60 rounded-[2rem] border border-[#D4AF37]/30 shadow-[0_0_35px_rgba(212,175,55,0.25)] backdrop-blur-md max-w-md">
     <div className="relative w-48 h-48 mb-6">
  {/* Lasca de vidro quebrado */}
  <div
    className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/50 via-[#EAD18A]/20 to-transparent backdrop-blur-sm shadow-[0_0_25px_rgba(212,175,55,0.3)]"
    style={{
      clipPath:
        "polygon(20% 0%, 80% 5%, 100% 40%, 85% 80%, 60% 100%, 30% 95%, 0% 60%, 5% 25%)",
    }}
  />

  {/* Reflexo do espelho */}
  <div
    className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.3),transparent_70%)] mix-blend-screen"
    style={{
      clipPath:
        "polygon(20% 0%, 80% 5%, 100% 40%, 85% 80%, 60% 100%, 30% 95%, 0% 60%, 5% 25%)",
    }}
  />

  {/* Borda dourada fina */}
  <div
    className="absolute inset-0 border border-[#D4AF37]/60 shadow-[inset_0_0_12px_rgba(212,175,55,0.4)] animate-pulse"
    style={{
      clipPath:
        "polygon(20% 0%, 80% 5%, 100% 40%, 85% 80%, 60% 100%, 30% 95%, 0% 60%, 5% 25%)",
    }}
  />
</div>

        <h1 className="text-3xl md:text-4xl font-semibold text-[#D4AF37] mb-3">
          Fragmento não encontrado
        </h1>
        <p className="text-[#E7E0D8]/70 mb-6 max-w-sm">
          O fragmento que você procura parece ter se perdido entre as rachaduras do código.
        </p>

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 border border-[#D4AF37]/50 text-[#D4AF37] px-6 py-2 rounded-full font-medium transition-all duration-200"
        >
          <ArrowLeft size={18} />
          Voltar à Home
        </button>
      </div>

      {/* Reflexo dourado decorativo no fundo */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-[#D4AF37]/20 to-transparent blur-[120px]" />
    </div>
  );
}

export { Error };
