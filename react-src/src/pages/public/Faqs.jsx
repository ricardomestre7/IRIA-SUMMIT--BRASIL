import React from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function Faqs() {
  const faqs = [
    {
      q: "O que é o IRIA-ID e por que preciso dele?",
      a: "O IRIA-ID (ex. BRA-CWB-2026-000183) é o seu código biométrico e de identificação único. Ele associa a sua entrada no evento às suas sessões de biofeedback (Lumina Systems), emissão de certificados e matches de networking."
    },
    {
      q: "Como realizo as sessões da Lumina Systems?",
      a: "No dia do evento, dirija-se a um dos estandes de biofeedback da Lumina. Apresente seu IRIA-ID, e o instrutor alocado conduzirá a sessão de 15 minutos (foco, biossinais, EEG e coerência cardíaca). O PDF do relatório de performance fica disponível em sua área interna imediatamente."
    },
    {
      q: "Os meus dados biométricos estão seguros?",
      a: "Totalmente. O processamento de dados biométricos segue protocolos rígidos de encriptação, e toda a análise cumpre estritamente os quesitos legais da Lei Geral de Proteção de Dados (LGPD). Os operadores possuem acesso restrito via CCI (Credential Connector Identifier)."
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
          Tire suas dúvidas operacionais sobre biofeedback, credenciamento, certificação e segurança de dados do ecossistema.
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
