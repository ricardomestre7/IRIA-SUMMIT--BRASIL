import React from 'react';
import { Target, BarChart3, Database, ShieldAlert } from 'lucide-react';

export default function Leads() {
  const leads = [
    { id: "L-012", name: "Ana Beatriz Silva", origin: "Patrocinador: Lumina Booth", category: "Interesse: Monitoramento de Performance" },
    { id: "L-183", name: "Dr. Ricardo Alencar", origin: "Conferência Principal", category: "Interesse: Integração API" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="cyber-title text-2xl mb-1">Painel de Leads</h1>
          <p className="text-xs text-gray-500 font-digital uppercase tracking-widest">Analytics de Aquisição e Oportunidades Comerciais</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="cyber-panel lg:col-span-2">
          <h3 className="font-header text-sm text-[#00E5FF] font-bold flex items-center gap-2 mb-4">
            <Target className="w-4 h-4 text-purple-400" />
            <span>Fila Recente de Leads</span>
          </h3>

          <div className="space-y-4">
            {leads.map((l, idx) => (
              <div key={idx} className="bg-[#0a0b16] border border-white/5 rounded p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-white text-sm">{l.name}</h4>
                    <span className="text-[10px] text-gray-500 font-digital uppercase block mt-1">{l.origin}</span>
                  </div>
                  <span className="cyber-badge cyber-badge-cyan text-[10px] font-digital">{l.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cyber-panel flex flex-col justify-between" style={{ minHeight: '220px' }}>
          <div>
            <h3 className="font-header text-sm text-[#00E5FF] font-bold flex items-center gap-2 mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>Métricas de Conversão</span>
            </h3>

            <div className="space-y-3 font-digital text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">TAXA DE RESPOSTA</span>
                <span className="text-[#00E5FF]">42.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">MÉDIA DE LEADS POR HORA</span>
                <span className="text-white">12.4</span>
              </div>
            </div>
          </div>

          <div className="bg-[#a385ff]/5 border border-[#a385ff]/20 rounded p-3 flex gap-2 items-start mt-6">
            <ShieldAlert className="text-[#a385ff] w-4 h-4 flex-shrink-0 mt-0.5" />
            <p className="text-[10px] text-gray-400 leading-relaxed font-hologram">
              A distribuição de leads respeita as opções de privacidade selecionadas pelo usuário durante o credenciamento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
