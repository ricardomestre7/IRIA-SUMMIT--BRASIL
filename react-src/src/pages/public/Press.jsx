import React from 'react';
import { Newspaper, Download, Share2 } from 'lucide-react';

export default function Press() {
  const releases = [
    { date: "2026-05-15", title: "IRIA Summit lança Ciclo de Saúde Inteligente em Curitiba", desc: "A plataforma conectará mais de 1.200 especialistas em torno de biometria de stress e prescrições terapêuticas baseadas em IA." },
    { date: "2026-04-10", title: "Integração Lumina Systems & Cyntreon Core", desc: "Assinatura do acordo tecnológico para a consolidação de biometria biomédica segura sob arquitetura blockchain e criptografia descentralizada." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="cyber-title text-4xl">Press & Mídia</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">
          Acompanhe os comunicados de imprensa oficiais e obtenha kits de marca oficiais do IRIA Summit.
        </p>
      </div>

      <div className="operational-grid operational-grid-2 mb-10">
        <div className="cyber-panel p-6 flex justify-between items-center">
          <div>
            <h3 className="font-header text-white font-bold text-lg mb-1">Kit de Imprensa Oficial</h3>
            <p className="text-gray-400 text-xs">Inclui logotipos, paleta de cores e fotografias oficiais do ciclo.</p>
          </div>
          <button className="cyber-btn-cyan flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>

        <div className="cyber-panel p-6 flex justify-between items-center">
          <div>
            <h3 className="font-header text-white font-bold text-lg mb-1">Contato de Assessoria</h3>
            <p className="text-gray-400 text-xs">press@iriasummit.com.br · Respondemos em até 4 horas.</p>
          </div>
          <button className="cyber-btn-purple flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            <span>Contatar</span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="font-header text-xl text-white mb-4">Notas de Imprensa Recentes</h2>
        {releases.map((rel, idx) => (
          <div key={idx} className="cyber-panel">
            <span className="text-xs text-[#00E5FF] font-digital block mb-2">{rel.date}</span>
            <h3 className="font-header text-white font-bold text-lg mb-2">{rel.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{rel.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
