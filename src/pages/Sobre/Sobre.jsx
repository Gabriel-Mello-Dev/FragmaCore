import React from "react";

function Sobre() {
  const membros = [
    {
      nome: "Celso Fischer Neto",
      img: "/imgs/celso.jpg",
      desc: "(Descrição será adicionada em breve...)",
    },
    {
      nome: "Francisco Felipe da Silva",
      img: "/imgs/francisco.jpg",
      desc: "(Descrição será adicionada em breve...)",
    },
    {
      nome: "Gabriel de Oliveira Mello",
      img: "/imgs/pfpGabriel.jpg",
      desc: "Desenvolvedor Back End",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F0E0D] text-[#E7E0D8] py-16 px-8 md:px-20 bg-[url('/imgs/gold-texture-dark.jpg')] bg-cover bg-center">
      {/* Introdução */}
      <section className="max-w-4xl mx-auto text-center space-y-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
          Sobre a Fragma Core
        </h1>
        <p className="text-lg text-[#E7E0D8]/80 leading-relaxed">
          A <strong>Fragma Core</strong> é um grupo de desenvolvimento formado por
          estudantes do <strong>Ensino Médio Integrado ao Técnico</strong>, na{" "}
          <strong>ETEC Jacinto Ferreira de Sá</strong> — Ourinhos/SP.
        </p>
        <p className="text-[#E7E0D8]/70 leading-relaxed">
          Unimos <strong>tecnologia, design</strong> e <strong>criatividade</strong> para
          transformar ideias em soluções digitais. Cada projeto é um aprendizado,
          cada desafio, uma nova linha de código que nos aproxima do futuro.
        </p>
      </section>

      {/* Membros */}
      <section className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl font-semibold text-[#D4AF37] text-center mb-10">
          Equipe Fragma Core
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {membros.map((membro) => (
            <div
              key={membro.nome}
              className="flex flex-col items-center text-center bg-[#1B1B1B]/60 p-8 rounded-2xl border border-[#D4AF37]/30 shadow-lg hover:shadow-[#D4AF37]/30 transition-all"
            >
              <img
                src={membro.img}
                alt={membro.nome}
                className="w-36 h-36 rounded-full object-cover border-4 border-[#D4AF37]/60 shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">
                {membro.nome}
              </h3>
              <p className="text-[#E7E0D8]/70 italic text-sm">{membro.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Encerramento */}
      <section className="max-w-4xl mx-auto text-center mt-20">
        <p className="text-[#E7E0D8]/70 text-sm italic">
          “Fragmentos que se unem, códigos que brilham como ouro.”  
        </p>
        <p className="text-[#D4AF37] font-medium mt-1">— Fragma Core</p>
      </section>
    </div>
  );
}

export { Sobre };
