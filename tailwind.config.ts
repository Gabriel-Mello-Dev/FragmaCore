import type { Config } from "tailwindcss";

/**
 * Paleta Fragma Core
 * obsidian  – fundo principal (preto quente)
 * charcoal  – superfícies elevadas
 * line      – divisórias e bordas
 * bone      – texto principal / seções claras
 * ash       – texto secundário
 * kin       – ouro de reparo (acento principal)
 * verdi     – verdigris, complemento frio do ouro (acento secundário, uso raro)
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0C0B0A",
        charcoal: "#161513",
        line: "#2A2722",
        bone: "#EDE8DC",
        ash: "#9A9486",
        kin: { DEFAULT: "#C8A04C", soft: "#E3C887", deep: "#7A5A1C" },
        verdi: { DEFAULT: "#3E8E84", deep: "#1F4F4A" },
        lacquer: "#B2442F",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
