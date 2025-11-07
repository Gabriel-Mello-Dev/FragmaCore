import { Outlet, useNavigate } from "react-router-dom"
import { Home, Code2, Cpu, Layers, Info } from "lucide-react"
import { NavLink } from "react-router-dom";




function LayoutPadrao() {

const navigate= useNavigate();

  return (
    <div className="flex h-screen bg-gradient-to-b from-[#1C1C1C] to-[#0D0D0D] text-[#E7E0D8] relative overflow-hidden">
      {/* Fundo rachado dourado */}
      <div className="absolute inset-0 bg-[url('/imgs/gold-cracks.png')] bg-cover bg-center opacity-10 pointer-events-none" />

      {/* Sidebar */}
      <aside className="relative z-10 w-64 bg-[#0E0E0E]/80 border-r border-[#D4AF37]/30 flex flex-col items-center py-8">
        <img
          src="/imgs/logo.png"
          alt="Fragma Core Logo"
          className="w-16 mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
        />

        <h2 className="text-xl font-semibold text-[#D4AF37] mb-8">
          Fragma Core
        </h2>

        <nav className="flex flex-col gap-4 w-full px-6">
          <NavItem icon={<Home size={18} />} label="Início" link="/" />
          <NavItem icon={<Code2 size={18} />} label="Projetos" link="Projetos"  />
          <NavItem icon={<Cpu size={18} />} label="Tecnologias" link="Tecnologias" />
          <NavItem icon={<Layers size={18} />} label="Soluções" />
          <NavItem icon={<Info size={18} />} label="Sobre" />
        </nav>

        <div className="mt-auto text-xs text-[#C8A951]/70">
          © {new Date().getFullYear()} Fragma Core
        </div>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex flex-col flex-1 relative z-10">
        {/* Topbar */}
        <header className="bg-[#121212]/80 border-b border-[#D4AF37]/30 py-4 px-8 flex justify-between items-center shadow-sm backdrop-blur-md">
          <div>
            <h1 className="text-[#D4AF37] font-semibold text-lg">Fragma Core</h1>
            <p className="text-sm italic text-[#C8A951]">
              Fragmentos que se unem, códigos que brilham como ouro.
            </p>
          </div>
        </header>

        {/* Conteúdo dinâmico (Outlet do React Router) */}
        <main className="flex-1 overflow-y-auto p-8 min-w-screen" >
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function NavItem({ icon, label, link }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link)}
      className="flex items-center gap-3 text-[#E7E0D8]/80 hover:text-[#D4AF37] transition-all
      duration-200 py-2 px-3 rounded-lg hover:bg-[#D4AF37]/10 w-full text-left"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export { LayoutPadrao }
