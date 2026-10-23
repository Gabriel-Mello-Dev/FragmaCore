import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { KintsugiVeins } from "@/components/ui/KintsugiVeins";
import { site } from "@/data/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Fragma Core · Desenvolvimento web, IA e marketing digital",
    template: "%s",
  },
  icons: {
    icon: "/favicon.ico",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Fragma Core",

    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fragma Core",
    description: site.description,
  },
};
export const viewport: Viewport = {
  themeColor: "#0C0B0A",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <Link
          href="#conteudo"
          className="sr-only z-50 bg-kin px-4 py-2 text-obsidian focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Ir para o conteúdo
        </Link>

        <KintsugiVeins />

        <div className="relative z-10">
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
