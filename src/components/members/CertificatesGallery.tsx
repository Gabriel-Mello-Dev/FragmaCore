"use client";

import { useState } from "react";

type CertificateCategory = "Pesquisa" | "Tecnologia" | "Marketing";

type Certificate = {
  title: string;
  category: CertificateCategory;
  image: string;
  year?: string;
};

type CertificatesGalleryProps = {
  memberSlug: string;
};

const certificatesByMember: Record<string, Certificate[]> = {
  gabriel: [
    {
      title: "XXXVII Congresso de Iniciação Científica da UNESP",
      category: "Pesquisa",
      image: "pesquisa/unesp-2025.png",
      year: "2025",
    },
    {
      title: "XXXVIII Congresso de Iniciação Científica da UNESP",
      category: "Pesquisa",
      image: "pesquisa/unesp-2026.png",
      year: "2026",
    },
    {
      title:
        "Ministrei- Criando Uma Plataforma WEB Para Jogos Digitais: Visão de Usuário e Desenvolvedor",
      category: "Tecnologia",
      image: "tecnologia/dev-web.png",
      year: "2026",
    },
    {
      title: "Dominando React.js",
      category: "Tecnologia",
      image: "tecnologia/react.png",
    },

    {
      title: "Processos de teste de software",
      category: "Tecnologia",
      image: "tecnologia/processos-software.png",
      year: "2024",
    },
    {
      title:
        "Ministrei- Estratégias de Marketing e como Aplicá-las a Jogos Digitais",
      category: "Marketing",
      image: "marketing/estrategias-marketing.png",
      year: "2026",
    },
    {
      title: "Ministrei- Criação de Anúncios para Jogos Digitais",
      category: "Marketing",
      image: "marketing/anuncios-jogos.png",
      year: "2026",
    },

    {
      title: "Alavancagem de Produtos Digitais: da Teoria à Prática",
      category: "Marketing",
      image: "marketing/alavacagem-digital.png",
      year: "2026",
    },
  ],

  celso: [],
  francisco: [],
};

const categories: CertificateCategory[] = [
  "Pesquisa",
  "Tecnologia",
  "Marketing",
];

export function CertificatesGallery({ memberSlug }: CertificatesGalleryProps) {
  const [activeCategory, setActiveCategory] =
    useState<CertificateCategory>("Pesquisa");
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const certificates = certificatesByMember[memberSlug] ?? [];

  const filteredCertificates = certificates.filter(
    (certificate) => certificate.category === activeCategory,
  );

  const imagePath = (image: string) => `/Certificates/${memberSlug}/${image}`;

  return (
    <section id="certificados" className="space-y-6">
      <div>
        <p className="text-sm font-medium text-muted-foreground">
          Formação e trajetória
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Certificados e conquistas
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Certificados, formações e reconhecimentos organizados por área.
          Selecione uma categoria para visualizar os documentos.
        </p>
      </div>

      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Categorias de certificados"
      >
        {categories.map((category) => {
          const count = certificates.filter(
            (certificate) => certificate.category === category,
          ).length;

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                activeCategory === category
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:bg-muted"
              }`}
            >
              {category}
              <span className="ml-2 opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      {filteredCertificates.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCertificates.map((certificate) => (
            <button
              key={certificate.image}
              type="button"
              onClick={() => setSelectedCertificate(certificate)}
              className="group overflow-hidden rounded-xl border border-border text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Visualizar certificado: ${certificate.title}`}
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-muted/30 p-3">
                <img
                  src={imagePath(certificate.image)}
                  alt={`Certificado: ${certificate.title}`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>

              <div className="space-y-1 p-4">
                <h3 className="text-sm font-medium leading-5">
                  {certificate.title}
                </h3>
                {certificate.year && (
                  <p className="text-xs text-muted-foreground">
                    {certificate.year}
                  </p>
                )}
                <p className="pt-2 text-xs text-muted-foreground">
                  Clique para ampliar
                </p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border px-5 py-10 text-center">
          <p className="font-medium">Nenhum certificado cadastrado</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Adicione os arquivos desta categoria à pasta do integrante e
            cadastre-os na lista do componente.
          </p>
        </div>
      )}

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
          onClick={() => setSelectedCertificate(null)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setSelectedCertificate(null);
            }
          }}
        >
          <div
            className="relative flex max-h-[95vh] w-full max-w-5xl flex-col rounded-xl bg-background p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold">{selectedCertificate.title}</h3>
                {selectedCertificate.year && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {selectedCertificate.year}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="rounded-md border border-border px-3 py-2 text-sm hover:bg-muted"
                aria-label="Fechar certificado"
                autoFocus
              >
                Fechar
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto">
              <img
                src={imagePath(selectedCertificate.image)}
                alt={`Certificado: ${selectedCertificate.title}`}
                className="max-h-[78vh] max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
