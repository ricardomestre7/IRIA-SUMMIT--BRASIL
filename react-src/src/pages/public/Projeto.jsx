import React from 'react';
import { Target, Lightbulb, Compass, Award } from 'lucide-react';

export default function Projeto() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="cyber-title text-4xl">O Projeto IRIA</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">
          O IRIA Summit Brasil não é um evento isolado. É uma plataforma integrada de inteligência artificial aplicativa,
          regeneração, inclusão social e saúde integral.
        </p>
      </div>

      <div className="operational-grid operational-grid-3 mb-16">
        <div className="cyber-panel">
          <div className="w-12 h-12 rounded bg-[#764DF0]/10 border border-[#764DF0]/30 flex items-center justify-center mb-6">
            <Target className="text-[#00E5FF] w-6 h-6" />
          </div>
          <h3 className="font-header text-lg text-white mb-3">Missão e Visão</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Consolidar um ecossistema inteligente de dados e biometria clínica voltado à promoção de saúde preventiva, 
            bem-estar e integração social no Brasil.
          </p>
        </div>

        <div className="cyber-panel">
          <div className="w-12 h-12 rounded bg-[#764DF0]/10 border border-[#764DF0]/30 flex items-center justify-center mb-6">
            <Lightbulb className="text-[#00E5FF] w-6 h-6" />
          </div>
          <h3 className="font-header text-lg text-white mb-3">Inovação Aplicada</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Incorporação de inteligência de sensores avançados (Lumina Systems) e gestão automatizada (CANNA-OS) 
            na análise de perfis adaptativos de stress e biometria clínica.
          </p>
        </div>

        <div className="cyber-panel">
          <div className="w-12 h-12 rounded bg-[#764DF0]/10 border border-[#764DF0]/30 flex items-center justify-center mb-6">
            <Compass className="text-[#00E5FF] w-6 h-6" />
          </div>
          <h3 className="font-header text-lg text-white mb-3">Descentralização</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Ativação do ciclo progressivo integrando os ecossistemas econômicos e acadêmicos de Curitiba, Porto Alegre e Salvador.
          </p>
        </div>
      </div>

      <div className="cyber-panel p-8">
        <h2 className="cyber-title text-xl mb-4">Mapeamento Biométrico e Rastreabilidade</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          A cada fase, os participantes têm a oportunidade de realizar medições de biometria de stress e foco através dos
          dispositivos integrados da Lumina Systems. Os dados clínicos resultantes são catalogados e vinculados diretamente
          ao seu **IRIA-ID** (ex. `BRA-CWB-2026-000183`), proporcionando um histórico integrado de evolução clínica, prescrição 
          terapêutica e verificação com total privacidade.
        </p>
        <div className="flex gap-4">
          <span className="cyber-badge cyber-badge-cyan">Patentes PPP-IA1 a PPP-IA5</span>
          <span className="cyber-badge cyber-badge-green">Conformidade LGPD</span>
        </div>
      </div>
    </div>
  );
}
