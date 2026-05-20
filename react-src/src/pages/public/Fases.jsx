import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

export default function Fases() {
  const fases = [
    {
      num: "01",
      city: "Ovar — Curitiba",
      date: "19–21 Setembro 2026",
      theme: "Inovação Aplicada e Laboratório Vivo",
      desc: "Lançamento da plataforma, triagem inicial de biofeedback e inteligência de sensores aplicada ao comportamento humano.",
      active: true
    },
    {
      num: "02",
      city: "Santa Maria da Feira — Porto Alegre",
      date: "Outubro 2026",
      theme: "Ciência, Mercado e Escala",
      desc: "Expansão operacional das sessões de biofeedback e neurofeedback, rodadas de investimento e validação de neurotecnologias corporativas.",
      active: false
    },
    {
      num: "03",
      city: "Aveiro — Salvador",
      date: "Novembro 2026",
      theme: "Consciência, Bem-Estar e Futuro Humano",
      desc: "Sustentação de alta performance e foco cognitivo, validação de interfaces cérebro-computador e consolidação final do banco de dados analíticos.",
      active: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="cyber-title text-4xl">Ciclo de Fases 2026</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">
          O IRIA Summit se desdobra em três grandes hubs de impacto econômico e científico, desenhando uma jornada lógica de
          experimentação, escala e consolidação.
        </p>
      </div>

      <div className="space-y-8">
        {fases.map((fase) => (
          <div key={fase.num} className={`cyber-panel ${fase.active ? 'border-[#00E5FF]/45 shadow-[0_0_15px_rgba(0,229,255,0.08)]' : ''}`}>
            <div className="md:flex justify-between items-start gap-8">
              <div className="flex gap-6 items-start mb-4 md:mb-0">
                <div className="font-header text-5xl font-black text-[#00E5FF]/30 leading-none">
                  {fase.num}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="font-header text-2xl text-white font-bold">{fase.city}</h2>
                    {fase.active && <span className="cyber-badge cyber-badge-cyan">Fase Atual</span>}
                  </div>
                  <p className="text-[#a385ff] font-medium text-sm mb-3 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{fase.date}</span>
                  </p>
                  <h4 className="font-header text-sm text-gray-300 font-bold mb-2 uppercase tracking-wide">{fase.theme}</h4>
                  <p className="text-gray-400 text-sm max-w-3xl leading-relaxed">{fase.desc}</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="flex items-center gap-1 text-[11px] font-digital text-gray-500">
                  <MapPin className="w-3 h-3" />
                  <span>REGIONAL HUB</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
