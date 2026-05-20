import React from 'react';
import { Mic, Globe, Linkedin } from 'lucide-react';

export default function Oradores() {
  const speakers = [
    {
      name: "Dr. Ricardo Alencar",
      title: "Diretor do Lab Neuro-CWB",
      desc: "Especialista em neurociência integrativa, pioneiro na pesquisa de canabinoides aplicados a biofeedback cerebral.",
      city: "Ovar — Curitiba"
    },
    {
      name: "Dra. Helena Viterbo",
      title: "Diretora de Pesquisa Lumina Systems",
      desc: "Ph.D. em Biofísica Médica, desenvolvedora chefe dos algoritmos de coerência neural integrados nos sensores biométricos.",
      city: "Santa Maria da Feira — Porto Alegre"
    },
    {
      name: "Prof. Alberto Santos",
      title: "Coordenador de IA - Cyntreon Labs",
      desc: "Investigador especializado em modelagem computacional biológica e arquitetura de redes neurais regenerativas.",
      city: "Aveiro — Salvador"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="cyber-title text-4xl">Oradores & Especialistas</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">
          Conheça os líderes acadêmicos e técnicos que atuam ativamente no ecossistema operacional do IRIA Summit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {speakers.map((speaker, idx) => (
          <div key={idx} className="cyber-panel flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-full border border-[#00E5FF]/30 flex items-center justify-center bg-[#101435] mb-6">
                <Mic className="text-[#00E5FF] w-6 h-6" />
              </div>
              <h3 className="font-header text-xl text-white font-bold mb-1">{speaker.name}</h3>
              <p className="text-[#a385ff] text-xs font-digital mb-4 uppercase tracking-wider">{speaker.title}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{speaker.desc}</p>
            </div>
            <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs font-digital text-gray-500">
              <span>HUB: {speaker.city.toUpperCase()}</span>
              <div className="flex gap-3">
                <Linkedin className="w-4 h-4 hover:text-[#00E5FF] cursor-pointer" />
                <Globe className="w-4 h-4 hover:text-[#00E5FF] cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
