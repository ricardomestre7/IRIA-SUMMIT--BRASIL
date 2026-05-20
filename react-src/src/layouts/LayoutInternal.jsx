import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, ShieldAlert, Calendar, Mic, Handshake, 
  HeartPulse, Award, Share2, Target, DollarSign, Settings, LogOut, Cpu
} from 'lucide-react';

export default function LayoutInternal() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Participantes", path: "/participantes", icon: Users },
    { label: "Credenciamento", path: "/credenciamento", icon: ShieldAlert },
    { label: "Agenda", path: "/agenda-interna", icon: Calendar },
    { label: "Oradores", path: "/oradores-admin", icon: Mic },
    { label: "Parceiros", path: "/parceiros-admin", icon: Handshake },
    { label: "Mapeamento Lumina", path: "/lumina-exames", icon: HeartPulse },
    { label: "Certificados", path: "/certificados", icon: Award },
    { label: "Networking", path: "/networking", icon: Share2 },
    { label: "Leads", path: "/leads", icon: Target },
    { label: "Financeiro", path: "/financeiro", icon: DollarSign },
    { label: "Admin", path: "/admin", icon: Settings },
  ];

  const formattedTime = currentTime.toISOString().replace('T', ' ').substring(0, 19);

  return (
    <div className="internal-layout-container">
      {/* Sidebar */}
      <aside className="internal-sidebar">
        {/* Sidebar Header */}
        <div className="h-20 flex items-center px-6 border-b border-[#00E5FF]/10 gap-3">
          <Cpu className="text-[#00E5FF] w-6 h-6 animate-pulse" />
          <div className="text-left leading-none">
            <span className="font-header font-bold tracking-widest text-[#00E5FF] text-xs">IRIA CORE</span>
            <span className="block text-[8px] text-gray-500 uppercase tracking-widest mt-0.5">MISSION CONTROL</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-grow py-6 px-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded text-sm transition-all no-underline ${
                  isActive 
                    ? 'bg-[#764DF0]/10 border-l-2 border-[#00E5FF] text-white font-medium shadow-[0_0_15px_rgba(0,229,255,0.05)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#00E5FF]' : 'text-gray-400'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-[#00E5FF]/10">
          <div className="bg-[#101435]/40 border border-white/5 rounded p-3 text-[10px] text-gray-500 font-digital leading-relaxed mb-3">
            <div>HOST: CWB-BRA-01</div>
            <div>STATUS: ONLINE</div>
            <div>CYNTREON LINK: ACTIVE</div>
          </div>
          <button 
            onClick={() => navigate('/login')}
            className="flex items-center justify-center gap-2 w-full py-2 border border-[#ff1744]/20 hover:border-[#ff1744] bg-[#ff1744]/5 hover:bg-[#ff1744]/15 rounded text-xs font-semibold text-gray-300 hover:text-white transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sair do Sistema</span>
          </button>
        </div>
      </aside>

      {/* Main Panel */}
      <div className="internal-main-content">
        {/* Top Operational Status Bar */}
        <header className="internal-top-bar">
          <div className="flex items-center gap-4">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-digital text-gray-400 tracking-wider">
              NODE ACTIVE <span className="text-[#00E5FF]">// SYS-UP: 100%</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* Clock */}
            <div className="hidden md:flex items-center gap-2 font-digital text-xs text-gray-400">
              <span>SERVER_TIME:</span>
              <span className="text-white">{formattedTime}</span>
            </div>

            {/* Profile User Info */}
            <div className="flex items-center gap-3 border-l border-white/10 pl-6">
              <div className="text-right leading-none">
                <span className="text-xs text-white block font-medium">Ricardo Pereira</span>
                <span className="text-[9px] text-[#00E5FF] font-digital uppercase block tracking-wider mt-0.5">SysAdmin</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-[#00E5FF]/30 flex items-center justify-center bg-[#101435] text-xs text-[#00E5FF] font-bold">
                RP
              </div>
            </div>
          </div>
        </header>

        {/* View Component Outlet */}
        <main className="internal-view-panel">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
