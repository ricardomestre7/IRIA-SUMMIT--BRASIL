import React from 'react';
import { Mic, ShieldCheck, Mail, Sliders, ToggleLeft } from 'lucide-react';

export default function OradoresAdmin() {
  const oradores = [
    { name: "Dr. Ricardo Alencar", status: "Confirmado", time: "10:30 - Dia 1", active: true },
    { name: "Dra. Helena Viterbo", status: "Confirmado", time: "09:00 - Dia 2", active: true },
    { name: "Alberto Santos", status: "Aguardando Voo", time: "14:00 - Dia 2", active: false }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="cyber-title text-2xl mb-1">Painel de Oradores</h1>
          <p className="text-xs text-gray-500 font-digital uppercase tracking-widest">Controle de Palestrantes e Grade de Conteúdo</p>
        </div>
        <button className="cyber-btn-purple flex items-center gap-1.5 py-1.5 text-xs">
          <Sliders className="w-3.5 h-3.5" />
          <span>Configurar Painéis</span>
        </button>
      </div>

      <div className="cyber-panel">
        <table className="cyber-table">
          <thead>
            <tr>
              <th>Orador</th>
              <th>Status Operacional</th>
              <th>Alocação Prevista</th>
              <th>Status IoT</th>
              <th className="text-right">Ação</th>
            </tr>
          </thead>
          <tbody>
            {oradores.map((o, idx) => (
              <tr key={idx}>
                <td className="font-semibold text-white">{o.name}</td>
                <td>
                  <span className={`cyber-badge ${o.active ? 'cyber-badge-green' : 'cyber-badge-orange'}`}>
                    {o.status}
                  </span>
                </td>
                <td className="font-digital text-xs">{o.time}</td>
                <td>
                  <span className="text-[10px] text-gray-500 font-digital">
                    {o.active ? 'CONNECTED (LUMINA-NODE)' : 'DISCONNECTED'}
                  </span>
                </td>
                <td className="text-right">
                  <button className="cyber-btn-cyan py-1 px-3 text-xs flex items-center gap-1 ms-auto">
                    <ToggleLeft className="w-3 h-3" />
                    <span>Gerenciar</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
