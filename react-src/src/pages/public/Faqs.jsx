import React from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function Faqs() {
  const faqs = [
    {
      q: "O que é o IRIA-ID e por que preciso dele?",
      a: "O IRIA-ID (ex. BRA-CWB-2026-000183) é o seu código biométrico e de identificação único. Ele associa a sua entrada no evento à sua triagem clínica (Lumina Systems), emissão de certificados, histórico de tratamentos de saúde e matches de networking."
    },
    {
      q: "Como realizo os exames da Lumina Systems?",
      a: "No dia do evento, dirija-se a uma das salas de mapeamento da Lumina. Apresente seu IRIA-ID, e o terapeuta alocado conduzirá o exame de 15 minutos (foco, biossinais, EEG e variabilidade cardíaca). O PDF do laudo fica disponível em sua área interna imediatamente."
    },
    {
      q: "Os meus dados biológicos estão seguros?",
      a: "Totalmente. O processamento de dados biométricos segue protocolos rígidos de encriptação, e todos os diagnósticos cumprem estritamente os quesitos legais da Lei Geral de Proteção de Dados (LGPD). Os terapeutas possuem acesso restrito via CCI (Clinician Care Identifier)."
    },
    {
      q: "Como faço a validação do meu certificado?",
      a: "Os certificados emitidos contam com uma assinatura SHA256 e um QR Code rastreável. A validação pode ser efetuada no domínio de auditoria verify.iriasummit.com usando o hash gerado no sistema."
    }
  ];

  const [openIdx, setOpenIdx] = React.useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="cyber-title text-4xl">Dúvidas Frequentes</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-base mt-4 font-hologram">
          Tire suas dúvidas operacionais sobre exames, credenciamento, certificação e segurança de dados do ecossistema.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="cyber-panel cursor-pointer" onClick={() => toggle(idx)}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-[#00E5FF] w-5 h-5 flex-shrink-0" />
                  <span className="font-header text-sm sm:text-base text-white font-bold">{faq.q}</span>
                </div>
                {isOpen ? <ChevronUp className="text-gray-400 w-5 h-5" /> : <ChevronDown className="text-gray-400 w-5 h-5" />}
              </div>
              {isOpen && (
                <div className="mt-4 pt-4 border-t border-white/5 text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
