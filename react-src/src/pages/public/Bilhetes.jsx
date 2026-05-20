import React from 'react';
import { Ticket, CheckCircle2, Shield } from 'lucide-react';

export default function Bilhetes() {
  const tickets = [
    {
      name: "General Admission",
      price: "R$ 450",
      desc: "Acesso total aos painéis e workshops nos 3 dias de evento. Networking ativo.",
      features: [
        "Acesso à programação de debates",
        "Geração de IRIA-ID no credenciamento",
        "Certificado geral de participação",
        "Acesso ao app móvel de networking"
      ],
      popular: false
    },
    {
      name: "VIP Pass",
      price: "R$ 950",
      desc: "Ideal para participantes que buscam acompanhamento de saúde e análise de biometria.",
      features: [
        "Tudo do General Admission",
        "1 Exame Clínico Lumina Systems",
        "Laudo em PDF na Área Interna",
        "Prioridade em filas de credenciamento",
        "Kit de boas-vindas exclusivo"
      ],
      popular: true
    },
    {
      name: "Clinical Expert",
      price: "R$ 1.800",
      desc: "Focado em médicos, terapeutas e desenvolvedores de biossinais.",
      features: [
        "Tudo do VIP Pass",
        "Certificação especial clínica",
        "Manual de protocolos de saúde",
        "Acesso restrito ao painel de parcerias",
        "Encontro fechado com Ricardo Pereira"
      ],
      popular: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="cyber-title text-4xl">Garanta seu Lugar</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4 font-hologram">
          Selecione a categoria de credenciamento que melhor atende à sua demanda de aprendizado, networking e diagnóstico clínico.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tickets.map((t, idx) => (
          <div key={idx} className={`cyber-panel flex flex-col justify-between ${t.popular ? 'border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.15)] scale-105' : ''}`}>
            <div>
              {t.popular && (
                <div className="absolute top-0 right-0 bg-[#00E5FF] text-[#0a0b16] font-header font-bold text-[9px] uppercase px-3 py-1 tracking-widest rounded-bl">
                  MAIS PROCURADO
                </div>
              )}
              <h3 className="font-header text-xl text-white font-bold mb-1">{t.name}</h3>
              <div className="flex items-baseline gap-1 my-6">
                <span className="text-[#00E5FF] text-3xl font-digital font-bold">{t.price}</span>
                <span className="text-gray-500 text-xs font-digital">/ LOTE 1</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">{t.desc}</p>
              
              <div className="border-t border-white/5 pt-6 mb-8">
                <ul className="space-y-3.5">
                  {t.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className={`w-full py-3 flex items-center justify-center gap-2 cursor-pointer transition-all ${
              t.popular ? 'cyber-btn-cyan' : 'cyber-btn-purple'
            }`}>
              <Ticket className="w-4 h-4" />
              <span>Adquirir Bilhete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
