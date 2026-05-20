import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TICKETS_CWB } from '../../data/tickets';
import { Ticket, CheckCircle2, QrCode, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function BilhetesCuritiba() {
  const navigate = useNavigate();

  const handleSelect = (id) => {
    navigate(`/checkout/curitiba?ticket=${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10">
          <div className="w-96 h-96 rounded-full bg-[#00E5FF] blur-[120px] animate-pulse"></div>
        </div>
        <span className="cyber-badge cyber-badge-cyan mb-3">LOTE FUNDADOR</span>
        <h1 className="cyber-title text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
          Adquira Seu Passaporte
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg mt-4 font-hologram">
          Participe simultaneamente do maior Hub de inovação e biofeedback em Curitiba.
          Conecte-se aos líderes do ecossistema e garanta sua credencial encriptada.
        </p>
        <div className="mt-4 text-xs font-digital text-gray-500 uppercase tracking-widest">
          EVENT CODE: <span className="text-[#00E5FF]">IRIA-CWB-2026</span> // HUB: OVAR — CURITIBA
        </div>
      </div>

      {/* Tickets List */}
      <div className="space-y-10">
        {TICKETS_CWB.map((t) => (
          <div 
            key={t.id} 
            className="relative flex flex-col lg:flex-row bg-[#0c0d1e]/90 border border-white/10 rounded-xl overflow-hidden hover:border-[#00E5FF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] group"
          >
            {/* Hologram decoration */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#00E5FF] via-[#764DF0] to-purple-800"></div>

            {/* Left side: Ticket Details */}
            <div className="flex-grow p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#764DF0]/10 border border-[#764DF0]/30 rounded px-2.5 py-0.5 text-[10px] font-digital text-purple-400 uppercase tracking-wider">
                      {t.batch}
                    </span>
                    <span className="bg-white/5 border border-white/10 rounded px-2.5 py-0.5 text-[10px] font-digital text-gray-400 uppercase tracking-wider">
                      {t.eventCode}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-digital font-black text-[#00E5FF]">{t.price}</span>
                    <span className="text-xs text-gray-500 font-digital uppercase">BRL</span>
                  </div>
                </div>

                <h3 className="font-header text-2xl sm:text-3xl text-white font-bold mb-3 tracking-wide group-hover:text-[#00E5FF] transition-colors">
                  {t.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-hologram">
                  {t.desc}
                </p>

                {/* Benefits grid */}
                <div className="border-t border-white/5 pt-6 mb-8">
                  <h4 className="text-[10px] font-digital text-gray-500 uppercase tracking-wider mb-4">BENEFÍCIOS INCLUSOS:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {t.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button 
                  onClick={() => handleSelect(t.id)}
                  className="cyber-btn-cyan flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider cursor-pointer group/btn"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Garantir lugar</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Perforation dotted line separator (Desktop only) */}
            <div className="hidden lg:flex flex-col justify-between items-center py-4 relative">
              <div className="w-6 h-6 rounded-full bg-[#0a0b16] -mt-7 border-b border-white/10"></div>
              <div className="h-full border-l-2 border-dashed border-white/10 my-2"></div>
              <div className="w-6 h-6 rounded-full bg-[#0a0b16] -mb-7 border-t border-white/10"></div>
            </div>

            {/* Right side: Tear-off coupon pass visual */}
            <div className="lg:w-80 bg-[#101128]/50 p-8 lg:p-10 flex flex-col justify-between items-center text-center border-t lg:border-t-0 lg:border-l border-white/10 relative">
              {/* Event Badge */}
              <div className="w-full flex justify-between items-center mb-6">
                <span className="font-header font-black tracking-widest text-[#00E5FF] text-xs">IRIA 2026</span>
                <span className="text-[9px] font-digital text-purple-400">CURITIBA HUB</span>
              </div>

              {/* QR and Barcode Visuals */}
              <div className="flex flex-col items-center justify-center my-auto space-y-6">
                {/* Mock QR Code Container */}
                <div className="p-3 bg-[#0a0b16] border border-[#00E5FF]/20 rounded-lg relative group-hover:border-[#00E5FF]/50 transition-colors">
                  <div className="w-28 h-28 flex items-center justify-center bg-[#07080f] text-[#00E5FF] rounded border border-white/5 relative overflow-hidden">
                    <QrCode className="w-20 h-20 opacity-80" />
                    {/* QR scanner line animation */}
                    <div className="absolute left-0 w-full h-0.5 bg-[#00E5FF] opacity-50 shadow-[0_0_8px_#00E5FF] top-0 animate-[bounce_3s_infinite]"></div>
                  </div>
                </div>

                {/* Event ID Details */}
                <div className="text-center font-digital">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">CREDENTIAL TYPE</div>
                  <div className="text-xs text-white uppercase font-bold tracking-wider mt-0.5">{t.name}</div>
                  <div className="text-[9px] text-[#00E5FF] mt-1 font-mono tracking-wider">{t.qrValue}</div>
                </div>
              </div>

              {/* Mock Barcode Visual */}
              <div className="w-full mt-6 pt-4 border-t border-white/5 flex flex-col items-center">
                <div className="flex items-end justify-center gap-[2px] h-9 w-48 opacity-60">
                  {/* Generate lines with random sizes for styling barcode */}
                  {[2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 3, 1, 2, 4, 1, 3, 2].map((w, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white h-full" 
                      style={{ width: `${w}px`, opacity: idx % 3 === 0 ? 0.3 : 0.8 }}
                    ></div>
                  ))}
                </div>
                <span className="text-[9px] font-digital text-gray-500 tracking-widest mt-1.5">{t.eventCode}-LOTE-FND</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-16 cyber-panel p-6 max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 items-center bg-[#0a0b16]/60">
        <div className="w-12 h-12 rounded bg-[#764DF0]/10 border border-[#764DF0]/30 flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="text-[#00E5FF] w-6 h-6" />
        </div>
        <div>
          <h4 className="font-header text-sm text-white font-bold mb-1">Pagamento Seguro & Encriptação de ID</h4>
          <p className="text-gray-400 text-xs leading-relaxed font-hologram">
            Todos os ingressos geram imediatamente um **IRIA-ID** provisório enviado ao seu e-mail.
            O processamento do pagamento e segurança de dados respeitam integralmente os requisitos de integridade da LGPD.
          </p>
        </div>
      </div>
    </div>
  );
}
