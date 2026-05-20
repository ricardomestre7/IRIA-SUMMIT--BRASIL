import React from 'react';
import { Clock, ShieldAlert } from 'lucide-react';

export default function Programa() {
  const schedule = [
    { time: "08:00 - 09:00", title: "Credenciamento & Triagem Biométrica", desc: "Abertura dos canais operacionais e check-in com geração de IRIA-ID. Início das coletas de base Lumina.", track: "Geral" },
    { time: "09:00 - 10:15", title: "Cerimônia de Abertura & Painel: IA Regenerativa no SUS", desc: "Abertura oficial com Ricardo Pereira e especialistas parceiros do ecossistema Cyntreon.", track: "Tecnologia" },
    { time: "10:30 - 12:00", title: "Workshop: Protocolos Clínicos com Lumina Systems", desc: "Treinamento prático de terapeutas na utilização do sistema e sincronização com o banco de dados central.", track: "Clínico" },
    { time: "14:00 - 15:30", title: "Painel: Rastreabilidade e Criptografia em Dados de Saúde", desc: "Discussão de boas práticas (LGPD) e segurança no processamento de sinais biológicos complexos.", track: "Segurança" },
    { time: "16:00 - 17:30", title: "Estudo de Caso: Microdosagem e Coerência Cardíaca", desc: "Resultados estatísticos da aplicação do módulo CANNA-OS na modulação de ansiedade severa.", track: "Ciência" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="cyber-title text-4xl">Programa Geral</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">
          A programação técnica do IRIA Summit foca na fusão de conhecimentos acadêmicos e simulação operacional prática.
        </p>
      </div>

      <div className="cyber-panel p-6 mb-10">
        <div className="flex gap-4 items-center text-amber-500">
          <ShieldAlert className="w-6 h-6 flex-shrink-0 animate-pulse" />
          <p className="text-xs font-digital">
            NOTA OPERACIONAL: A triagem de biometria Lumina funciona ininterruptamente em salas paralelas. Verifique seu IRIA-ID 
            no app móvel para reservar vaga de exame clínico.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {schedule.map((item, idx) => (
          <div key={idx} className="cyber-panel">
            <div className="sm:flex justify-between items-start gap-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 bg-[#764DF0]/10 border border-[#764DF0]/30 rounded px-3 py-1.5 font-digital text-sm text-[#00E5FF] flex items-center gap-1.5 h-8">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{item.time}</span>
                </div>
                <div>
                  <h3 className="font-header text-lg text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="mt-3 sm:mt-0">
                <span className={`cyber-badge ${
                  item.track === 'Geral' ? 'cyber-badge-cyan' :
                  item.track === 'Tecnologia' ? 'cyber-badge-orange' :
                  item.track === 'Clínico' ? 'cyber-badge-green' : 'cyber-badge-purple'
                }`}>
                  {item.track}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
