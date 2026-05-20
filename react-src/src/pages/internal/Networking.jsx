import React from 'react';
import { Share2, Zap, Users, ShieldCheck } from 'lucide-react';

export default function Networking() {
  const matches = [
    { p1: "Dr. Ricardo Alencar", p2: "Dra. Helena Viterbo", match: "98%", reason: "Interesse Comum: Neurofeedback & Canabinoides" },
    { p1: "Ana Beatriz Silva", p2: "Juliana Mendes Costa", match: "84%", reason: "Interesse Comum: Triagem Preventiva & Biossinais" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="cyber-title text-2xl mb-1">Rede de Networking</h1>
          <p className="text-xs text-gray-500 font-digital uppercase tracking-widest">Matriz de Conexão Inteligente entre Participantes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="cyber-panel lg:col-span-2 space-y-4">
          <h3 className="font-header text-sm text-[#00E5FF] font-bold flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Mapeamento de Compatibilidade Inteligente</span>
          </h3>

          <div className="space-y-4">
            {matches.map((m, idx) => (
              <div key={idx} className="bg-[#0a0b16] border border-white/5 rounded p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span>{m.p1}</span>
                    <Share2 className="w-3.5 h-3.5 text-gray-600" />
                    <span>{m.p2}</span>
                  </div>
                  <span className="text-emerald-400 font-digital font-bold text-sm bg-emerald-400/5 border border-emerald-400/20 px-2 py-0.5 rounded">
                    {m.match} Match
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-hologram mt-1">{m.reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cyber-panel flex flex-col justify-between" style={{ minHeight: '220px' }}>
          <div>
            <h3 className="font-header text-sm text-[#00E5FF] font-bold flex items-center gap-2 mb-4">
              <Users className="w-4 h-4" />
              <span>Métricas de Interação</span>
            </h3>

            <div className="space-y-3 font-digital text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">CONEXÕES ATIVAS</span>
                <span className="text-white">1,412</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">MENSAGENS TROCADAS</span>
                <span className="text-white">4,892</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 mt-6 flex items-center gap-2 text-[10px] text-gray-500 font-digital">
            <ShieldCheck className="text-emerald-400 w-3.5 h-3.5" />
            <span>PROTEÇÃO DE PRIVACIDADE ATIVA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
