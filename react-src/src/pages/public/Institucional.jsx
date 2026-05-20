import React from 'react';
import { ShieldCheck, Info, FileText } from 'lucide-react';

export default function Institucional() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="cyber-title text-4xl">Institucional & Propriedade</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">
          Conformidade regulatória, enquadramento jurídico e proteção intelectual de ativos de IA regenerativa.
        </p>
      </div>

      <div className="cyber-panel p-8 mb-8">
        <div className="flex gap-4 items-start mb-6">
          <ShieldCheck className="text-[#00E5FF] w-8 h-8 flex-shrink-0" />
          <div>
            <h2 className="font-header text-xl text-white font-bold mb-1">Cylinder Margin LDA</h2>
            <p className="text-xs text-gray-500 font-digital">NIF 519207769 · PORTUGAL · OVAR, AVEIRO</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Responsável pela organização operacional, controle de infraestrutura física, processamento local de dados
          biométricos no Brasil, e fomento de parcerias institucionais corporativas.
        </p>
        <div className="border-t border-white/5 pt-4 text-xs font-digital text-gray-500">
          CYNTREON HOLDING OÜ · TALLINN, ESTONIA
        </div>
      </div>

      <div className="operational-grid operational-grid-2">
        <div className="cyber-panel">
          <h3 className="font-header text-lg text-white mb-3 flex items-center gap-2">
            <Info className="text-[#00E5FF] w-5 h-5" />
            <span>Propriedade Intelectual</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            A tecnologia integrada de análise preventiva, biometria facial, mapeamento e prescrição automatizada é regida
            pela família de patentes **PPP-IA1 a PPP-IA5** (Regenerative AI Core).
          </p>
          <span className="cyber-badge cyber-badge-cyan">Registrado INPI / EPO</span>
        </div>

        <div className="cyber-panel">
          <h3 className="font-header text-lg text-white mb-3 flex items-center gap-2">
            <FileText className="text-[#00E5FF] w-5 h-5" />
            <span>Compliance e LGPD</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Os dados biométricos do módulo **Lumina Systems** e a encriptação de chaves **IRIA-ID** cumprem integralmente
            as normativas federais de proteção de dados sensíveis e pessoais no Brasil (LGPD).
          </p>
          <span className="cyber-badge cyber-badge-green">Consentimento Seguro</span>
        </div>
      </div>
    </div>
  );
}
