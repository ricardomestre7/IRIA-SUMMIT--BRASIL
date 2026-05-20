import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, Ticket } from 'lucide-react';

export default function LayoutPublic() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Início", path: "/" },
    { label: "O Projeto", path: "/projeto" },
    { label: "Fases do Ciclo", path: "/fases" },
    { label: "Programa", path: "/programa" },
    { label: "Oradores", path: "/oradores" },
    { label: "Parceiros", path: "/parceiros" },
    { label: "Institucional", path: "/institucional" },
    { label: "Press", path: "/press" },
    { label: "FAQs", path: "/faqs" },
    { label: "Bilhetes", path: "/bilhetes" },
    { label: "Entrar", path: "/login" }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0a0b16' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 transition-all border-b border-white/5 bg-[#0a0b16]/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-3 no-underline">
                <div className="bg-[#101435] border border-[#00E5FF]/20 rounded p-1.5 w-12 h-12 flex items-center justify-center">
                  <img src="/assets/images/logo-iria-modern.png" alt="Logo IRIA" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="text-left leading-none">
                  <span className="font-bold tracking-widest text-[#00E5FF] text-sm font-header">IRIA</span>
                  <span className="block text-white text-[10px] tracking-wider uppercase font-header">Summit Brasil</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded text-sm font-medium tracking-wide transition-colors no-underline ${
                    location.pathname === item.path
                      ? 'text-[#00E5FF] font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/bilhetes"
                className="no-underline border border-white/10 px-4 py-2 rounded text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-white/5"
              >
                Bilhetes
              </Link>
              <Link
                to="/dashboard"
                className="no-underline px-4 py-2 rounded text-xs font-bold tracking-wider text-black uppercase transition-all"
                style={{
                  background: 'linear-gradient(135deg, #00E5FF, #764DF0)',
                  boxShadow: '0 0 12px rgba(0, 229, 255, 0.4)'
                }}
              >
                Área Interna
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-white/5 bg-[#0a0b16]/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded text-base font-medium no-underline ${
                    location.pathname === item.path ? 'text-[#00E5FF] bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-2 px-3">
                <Link
                  to="/bilhetes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="no-underline text-center border border-white/10 px-4 py-2.5 rounded text-sm font-bold tracking-wider text-white uppercase"
                >
                  Bilhetes
                </Link>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="no-underline text-center px-4 py-2.5 rounded text-sm font-bold tracking-wider text-black uppercase"
                  style={{ background: 'linear-gradient(135deg, #00E5FF, #764DF0)' }}
                >
                  Área Interna
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#07080f] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-center items-center gap-3">
            <img src="/assets/images/logo-iria-modern.png" alt="Logo IRIA" className="w-8 h-8 object-contain opacity-50" />
            <span className="text-gray-500 text-sm">© 2026 CylinderMargin LDA. Todos os direitos reservados.</span>
          </div>
          <div className="mt-4 sm:mt-0 flex justify-center gap-6 text-gray-500 text-xs">
            <span>Família de Patentes: PPP-IA1 a PPP-IA5</span>
            <span>Cyntreon Ecosystem</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
