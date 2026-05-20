import React from 'react';
import { Calendar, Clock, MapPin, Plus } from 'lucide-react';

export default function Agenda() {
  const events = [
    { id: "EV-01", time: "09:00", title: "Triagem Biométrica Curitiba", room: "Sala Lumina A", cap: "12/20 pax", instructor: "Dra. Helena Viterbo" },
    { id: "EV-02", time: "10:30", title: "Configuração do CANNA-OS v3", room: "Lab Computacional 1", cap: "15/15 pax", instructor: "Dr. Ricardo Alencar" },
    { id: "EV-03", time: "14:00", title: "Mapeamento Biossocial", room: "Auditório Central", cap: "85/120 pax", instructor: "Alberto Santos" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="cyber-title text-2xl mb-1">Agenda Operacional</h1>
          <p className="text-xs text-gray-500 font-digital uppercase tracking-widest">Cronograma de Salas e Fluxo Técnico</p>
        </div>
        <button className="cyber-btn-cyan flex items-center gap-1.5 py-1.5 text-xs">
          <Plus className="w-3.5 h-3.5" />
          <span>Alocar Sala</span>
        </button>
      </div>

      <div className="operational-grid operational-grid-3">
        {events.map(ev => (
          <div key={ev.id} className="cyber-panel flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] text-gray-500 font-digital">{ev.id}</span>
                <span className="cyber-badge cyber-badge-cyan text-[10px] font-digital flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {ev.time}
                </span>
              </div>
              <h3 className="font-header text-base text-white font-bold mb-3">{ev.title}</h3>
              
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gray-600" />
                  <span>Local: {ev.room}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">CAPACIDADE:</span>
                  <span className="text-white font-digital">{ev.cap}</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-4 mt-6 text-xs text-[#a385ff]">
              Instrutor: {ev.instructor}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
