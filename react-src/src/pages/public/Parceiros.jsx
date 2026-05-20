import React from 'react';
import { Handshake, Award, ShieldCheck, Database } from 'lucide-react';

export default function Parceiros() {
  const partners = [
    { name: "Cyntreon", category: "Core Integrator / Holding", role: "Arquitetura e banco de dados corporativo principal." },
    { name: "Lumina Systems", category: "Clinical Diagnostics Provider", role: "Sensores avançados de neurofeedback e biometria diagnóstica." },
    { name: "BioField-Intelligence", category: "Bio-Agricultural Signals", role: "Fornecimento de dados bioecológicos e fitoterapêuticos." },
    { name: "CylinderMargin LDA", category: "Intellectual Property / Org", role: "Detentora das patentes PPP-IA1 a PPP-IA5 e infraestrutura física." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="cyber-title text-4xl">Alianças & Parceiros</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">
          Unindo ciência clínica, inovação de software e patentes regenerativas para moldar a saúde do futuro.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {partners.map((partner, idx) => (
          <div key={idx} className="cyber-panel">
            <div className="flex gap-4 items-start mb-4">
              <div className="w-12 h-12 rounded bg-[#764DF0]/10 border border-[#764DF0]/30 flex items-center justify-center">
                <Database className="text-[#00E5FF] w-6 h-6" />
              </div>
              <div>
                <h3 className="font-header text-xl text-white font-bold mb-1">{partner.name}</h3>
                <span className="cyber-badge cyber-badge-cyan">{partner.category}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{partner.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
