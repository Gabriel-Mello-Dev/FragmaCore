import { Outlet, NavLink } from "react-router-dom";
import { Home, Code2, Cpu, Info } from "lucide-react";

function LayoutPadrao() {
  return (
    <div className="flex h-screen w-full bg-[#171717] text-[#F2EEE8] overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 bg-[#1D1D1D] border-r border-white/[0.08] flex-col">
        {/* Logo */}
        <div className="px-7 pt-8 pb-8">
          <div className="flex items-center gap-3">
            <img
              src="/imgs/logo.png"
              alt="Fragma Core"
              className="w-10 h-10 object-contain"
            />

            <div>
              <h1 className="text-base font-semibold tracking-wide text-[#F2EEE8]">
                Fragma Core
              </h1>

              <p className="text-xs text-[#A8A29A] mt-1">Desenvolvimento Web</p>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <nav className="px-4">
          <p className="px-3 mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8F8982]">
            Navegação
          </p>

          <div className="space-y-1">
            <NavItem
              icon={<Home size={18} strokeWidth={1.8} />}
              label="Início"
              link="/"
            />

            <NavItem
              icon={<Code2 size={18} strokeWidth={1.8} />}
              label="Projetos"
              link="/Projetos"
            />

            <NavItem
              icon={<Cpu size={18} strokeWidth={1.8} />}
              label="Tecnologias"
              link="/Tecnologias"
            />

            <NavItem
              icon={<Info size={18} strokeWidth={1.8} />}
              label="Sobre"
              link="/sobre"
            />
          </div>
        </nav>

        {/* Rodapé */}
        <div className="mt-auto px-7 py-6 border-t border-white/[0.06]">
          <p className="text-xs text-[#A8A29A]">Fragma Core</p>

          <p className="text-xs text-[#77716B] mt-1">
            © {new Date().getFullYear()}
          </p>
        </div>
      </aside>

      {/* Área principal */}
      <div className="flex flex-col flex-1 min-w-0 min-h-0">
        {/* Topbar */}
        <header className="h-16 shrink-0 bg-[#1A1A1A] border-b border-white/[0.08] flex items-center px-6 md:px-8">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-sm text-[#D2CDC6]">Fragmentos que se unem.</p>

              <p className="text-xs text-[#918B84] mt-1">
                Códigos que se transformam.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-[#918B84]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Fragma Core
            </div>
          </div>
        </header>

        {/* Conteúdo das páginas */}
        <main className="flex-1 min-h-0 min-w-0 overflow-y-auto bg-[#171717]">
          <Outlet />
        </main>
      </div>

      {/* Navegação mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1D1D1D] border-t border-white/[0.08]">
        <div className="grid grid-cols-4">
          <MobileNavItem icon={<Home size={18} />} label="Início" link="/" />

          <MobileNavItem
            icon={<Code2 size={18} />}
            label="Projetos"
            link="/Projetos"
          />

          <MobileNavItem
            icon={<Cpu size={18} />}
            label="Tecnologias"
            link="/Tecnologias"
          />

          <MobileNavItem
            icon={<Info size={18} />}
            label="Sobre"
            link="/sobre"
          />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ icon, label, link }) {
  return (
    <NavLink
      to={link}
      end={link === "/"}
      className={({ isActive }) =>
        `
        group
        flex
        items-center
        gap-3
        w-full
        px-3
        py-2.5
        rounded-md
        text-sm
        transition-colors
        duration-200
        ${
          isActive
            ? "bg-[#D4AF37]/12 text-[#F2EEE8]"
            : "text-[#B7B1AA] hover:bg-white/[0.05] hover:text-[#F2EEE8]"
        }
        `
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={
              isActive
                ? "text-[#D4AF37]"
                : "text-[#96908A] group-hover:text-[#D2CDC6]"
            }
          >
            {icon}
          </span>

          <span>{label}</span>

          {isActive && (
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          )}
        </>
      )}
    </NavLink>
  );
}

function MobileNavItem({ icon, label, link }) {
  return (
    <NavLink
      to={link}
      end={link === "/"}
      className={({ isActive }) =>
        `
        flex
        flex-col
        items-center
        justify-center
        gap-1.5
        py-3
        text-[11px]
        transition-colors
        ${isActive ? "text-[#D4AF37]" : "text-[#9C9690]"}
        `
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}

export { LayoutPadrao };
