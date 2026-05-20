import React from 'react';
import { Handshake, Database, BarChart3, Radio } from 'lucide-react';

export default function ParceirosAdmin() {
  const partners = [
    { name: "Cyntreon Core", apiHits: "142,902", status: "Online", latency: "4ms" },
    { name: "Lumina Database", apiHits: "32,109", status: "Online", latency: "12ms" },
    { name: "BioField-Intelligence", apiHits: "1,452", status: "Inativo", latency: "N/A" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="cyber-title text-2xl mb-1">Painel de Parceiros</h1>
          <p className="text-xs text-gray-500 font-digital uppercase tracking-widest">Integrações de API e Telemetria Externa</p>
        </div>
      </div>

      <div className="operational-grid operational-grid-3">
        {partners.map((p, idx) => (
          <div key={idx} className="cyber-panel flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-header text-sm text-white font-bold">{p.name}</span>
                <span className={`cyber-badge ${p.status === 'Online' ? 'cyber-badge-green' : 'cyber-badge-red'}`}>
                  {p.status}
                </span>
              </div>
              
              <div className="space-y-3 font-digital text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">API HITS (24h)</span>
                  <span className="text-[#00E5FF]">{p.apiHits}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">LATÊNCIA</span>
                  <span className="text-white">{p.latency}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-[10px] text-gray-500 font-digital">
              <span className="flex items-center gap-1">
                <Radio className={`w-3.5 h-3.5 ${p.status === 'Online' ? 'text-emerald-400 animate-pulse' : 'text-red-500'}`} />
                <span>IOT CONNECT</span>
              </span>
              <span>VER: 4.1.2</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
