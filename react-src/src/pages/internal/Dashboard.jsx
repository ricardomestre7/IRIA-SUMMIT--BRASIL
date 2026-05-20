import React from 'react';
import { 
  Users, ShieldCheck, HeartPulse, Award, Target, DollarSign, 
  Terminal as TerminalIcon, AlertCircle, RefreshCw, Cpu
} from 'lucide-react';
import { useRealtimeFeed } from '../../hooks/useRealtimeFeed';
import { PLATFORM_METRICS } from '../../data/mockData';

export default function Dashboard() {
  const logs = useRealtimeFeed();
  const [metrics, setMetrics] = React.useState(PLATFORM_METRICS);

  // Auto-scroll terminal log to bottom when logs change
  const terminalEndRef = React.useRef(null);
  React.useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Adjust mock metrics dynamically to match simulated operations
  React.useEffect(() => {
    const lastLog = logs[logs.length - 1];
    if (!lastLog) return;
    
    if (lastLog.type === 'CHECKIN') {
      setMetrics(prev => ({
        ...prev,
        totalRegistered: prev.totalRegistered, // stays constant
        checkinPercentage: parseFloat((prev.checkinPercentage + 0.1).toFixed(1))
      }));
    } else if (lastLog.type === 'LUMINA') {
      setMetrics(prev => ({
        ...prev,
        luminaExamsCompleted: prev.luminaExamsCompleted + 1
      }));
    } else if (lastLog.type === 'CERTIFICATE') {
      setMetrics(prev => ({
        ...prev,
        certificatesIssued: prev.certificatesIssued + 1
      }));
    }
  }, [logs]);

  const cards = [
    { label: "Inscritos Totais", value: metrics.totalRegistered, unit: "participantes", icon: Users, color: "var(--theme-purple)" },
    { label: "Check-Ins Concluídos", value: `${metrics.checkinPercentage}%`, unit: "credenciados", icon: ShieldCheck, color: "var(--theme-orange)" },
    { label: "Mapeamentos Lumina", value: metrics.luminaExamsCompleted, unit: "sinalizações", icon: HeartPulse, color: "var(--theme-cyan)" },
    { label: "Certificados Registrados", value: metrics.certificatesIssued, unit: "criptografados", icon: Award, color: "#ffeb3b" },
    { label: "Interações de Leads", value: metrics.leadsGenerated, unit: "networking", icon: Target, color: "var(--theme-green)" },
    { label: "Receita Estimada", value: `R$ ${metrics.estimatedRevenue.toLocaleString()}`, unit: "BRL", icon: DollarSign, color: "#ff1744" }
  ];

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="cyber-title text-2xl mb-1">Centro Operacional Geral</h1>
          <p className="text-xs text-gray-500 font-digital uppercase tracking-widest">IRIA PLATFORM NODE STATS // CURITIBA HUB v2.6</p>
        </div>
        <div className="flex gap-3">
          <button className="cyber-btn-cyan flex items-center gap-1.5 py-1.5 text-xs">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Sincronizando</span>
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="operational-grid operational-grid-3 lg:grid-cols-6 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div key={idx} className="cyber-panel p-4 flex flex-col justify-between" style={{ minHeight: '140px' }}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase font-header tracking-wider text-gray-500">{card.label}</span>
                <Icon style={{ color: card.color }} className="w-4 h-4" />
              </div>
              <div className="my-3">
                <span className="text-2xl font-bold font-digital tracking-tight block text-white">{card.value}</span>
                <span className="text-[10px] font-digital text-gray-500 uppercase">{card.unit}</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded overflow-hidden">
                <div className="h-full rounded" style={{ backgroundColor: card.color, width: '65%' }}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Operational Panels Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Terminal Log */}
        <div className="cyber-panel lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-header text-sm text-[#00E5FF] font-bold flex items-center gap-2">
              <TerminalIcon className="w-4 h-4" />
              <span>TERMINAL OPERACIONAL DE LOGS (SIMULADO)</span>
            </h3>
            <span className="text-[10px] font-digital text-emerald-400">STREAMING FEED</span>
          </div>

          <div className="terminal-container">
            {logs.map((log, index) => (
              <div key={index} className="terminal-line">
                <span className="terminal-time">[{log.time}]</span>
                <span className={`terminal-type ${log.type}`}>[{log.type}]</span>
                <span className="terminal-msg">{log.message}</span>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>
        </div>

        {/* System Capacity / Node Health */}
        <div className="cyber-panel flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-header text-sm text-[#00E5FF] font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>SALAS DE EXAME LUMINA</span>
              </h3>
              <span className="text-[10px] font-digital text-emerald-400">NODE-01</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-digital mb-1.5">
                  <span className="text-gray-400">FILA DE ESPERA (ESTANDES)</span>
                  <span className="text-white">5 / 15 participantes</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded overflow-hidden">
                  <div className="h-full bg-amber-500 rounded" style={{ width: '33%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-digital mb-1.5">
                  <span className="text-gray-400">PROCESSAMENTO CENTRAL</span>
                  <span className="text-[#00E5FF]">Estável - 4.2 Tflops</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded" style={{ width: '72%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-digital mb-1.5">
                  <span className="text-gray-400">CONECTIVIDADE CYNTREON</span>
                  <span className="text-emerald-400">Excelente Latência (4ms)</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#ff9100]/5 border border-[#ff9100]/20 rounded p-3 flex gap-3 items-start">
            <AlertCircle className="text-[#ff9100] w-4 h-4 flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-gray-400 leading-relaxed">
              AVISO: Lote de credenciamento do sub-hub POA sincronizado há 12 minutos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
