import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { TICKETS_CWB } from '../../data/tickets';
import { 
  ShieldCheck, CreditCard, User, Mail, FileText, 
  ArrowLeft, CheckCircle2, QrCode, Lock, Cpu, Sparkles 
} from 'lucide-react';

export default function CheckoutCuritiba() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const ticketId = searchParams.get('ticket') || 'visitante-profissional';
  const ticket = TICKETS_CWB.find(t => t.id === ticketId) || TICKETS_CWB[0];

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [nif, setNif] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState('');

  // UI Flow State
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedId, setGeneratedId] = useState('');

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryChange = (e) => {
    let v = e.target.value.replace(/[^0-9]/g, '');
    if (v.length >= 2) {
      v = v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    setCardExpiry(v.substring(0, 5));
  };

  const handleCvvChange = (e) => {
    setCardCvv(e.target.value.replace(/[^0-9]/g, '').substring(0, 4));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !nif || !cardNumber || !cardExpiry || !cardCvv) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsProcessing(true);

    // Simulate cryptographic checkout processing
    setTimeout(() => {
      // Generate a brand new IRIA ID
      const randomNum = Math.floor(Math.random() * 800) + 120;
      const formattedNum = String(randomNum).padStart(6, '0');
      const newIriaId = `BRA-CWB-2026-${formattedNum}`;
      
      setGeneratedId(newIriaId);
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="cyber-panel p-8 text-center relative overflow-hidden border-[#00E5FF] shadow-[0_0_40px_rgba(0,229,255,0.15)]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-[40px]"></div>
          
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-emerald-400 w-8 h-8" />
          </div>

          <span className="cyber-badge cyber-badge-green mb-3">PAGAMENTO APROVADO</span>
          
          <h2 className="cyber-title text-3xl font-black text-white uppercase tracking-wider mb-2">
            Inscrição Confirmada!
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm font-hologram mb-8">
            Seu passaporte de acesso para o **IRIA Summit Brasil 2026** foi gerado com sucesso.
            Suas credenciais e QR code de acesso foram vinculados e encriptados sob o protocolo Cyntreon Core.
          </p>

          {/* Ticket Receipt Visual */}
          <div className="max-w-md mx-auto bg-[#0a0b16] border border-white/10 rounded-xl overflow-hidden mb-8 relative flex flex-col md:flex-row">
            {/* Hologram side bar */}
            <div className="w-full md:w-2 bg-gradient-to-b from-[#00E5FF] to-[#764DF0]"></div>
            
            <div className="flex-grow p-6 text-left">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-digital text-[#00E5FF] tracking-widest">IRIA CREDENTIAL</span>
                <span className="text-[9px] font-digital text-purple-400">HUB CURITIBA</span>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-[9px] text-gray-500 block uppercase tracking-wider">CONGRESSISTA</span>
                  <strong className="text-white uppercase font-header tracking-wide">{fullName}</strong>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[9px] text-gray-500 block uppercase tracking-wider">IRIA-ID</span>
                    <strong className="text-[#00E5FF] font-digital tracking-wider">{generatedId}</strong>
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-500 block uppercase tracking-wider">BILHETE</span>
                    <strong className="text-white tracking-wide">{ticket.name}</strong>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[9px] text-gray-500 block uppercase tracking-wider">LOTE</span>
                    <strong className="text-purple-400 font-digital">{ticket.batch}</strong>
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-500 block uppercase tracking-wider">DATA DO HUB</span>
                    <strong className="text-white text-xs">19–21 Set 2026</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Perforation line */}
            <div className="hidden md:flex flex-col justify-between items-center py-2 relative">
              <div className="w-4 h-4 rounded-full bg-[#0c0d1e] -mt-4 border-b border-white/10"></div>
              <div className="h-full border-l border-dashed border-white/15 my-1"></div>
              <div className="w-4 h-4 rounded-full bg-[#0c0d1e] -mb-4 border-t border-white/10"></div>
            </div>

            {/* Receipt QR panel */}
            <div className="p-6 bg-[#0c0d1e]/80 flex flex-col justify-center items-center md:w-36 border-t md:border-t-0 md:border-l border-white/10">
              <div className="p-2 bg-[#0a0b16] border border-[#00E5FF]/20 rounded-md">
                <QrCode className="w-16 h-16 text-[#00E5FF]" />
              </div>
              <span className="text-[8px] font-digital text-gray-500 uppercase tracking-widest mt-2">{ticket.eventCode}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/login')}
              className="cyber-btn-cyan px-8 py-3 font-digital text-xs uppercase tracking-wider cursor-pointer"
            >
              Entrar na Área Interna
            </button>
            <button 
              onClick={() => navigate('/bilhetes/curitiba')}
              className="border border-white/10 hover:bg-white/5 text-white px-8 py-3 rounded text-xs font-digital uppercase tracking-wider transition-colors cursor-pointer"
            >
              Voltar para Ingressos
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Back link */}
      <button 
        onClick={() => navigate('/bilhetes/curitiba')}
        className="flex items-center gap-2 text-gray-400 hover:text-[#00E5FF] transition-colors mb-8 bg-transparent border-0 cursor-pointer font-digital text-xs uppercase tracking-wider"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Voltar para Ingressos</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Checkout Form */}
        <div className="lg:col-span-7 cyber-panel p-8 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#764DF0]/5 blur-[60px] -z-10"></div>
          
          <h2 className="font-header text-2xl text-white font-bold mb-2 tracking-wide uppercase">
            Inscrição e Checkout
          </h2>
          <p className="text-gray-400 text-xs font-hologram mb-8">
            Preencha seus dados de faturamento para gerar sua credencial e chave encriptada de participante.
          </p>

          {isProcessing ? (
            <div className="py-16 text-center space-y-4">
              <Cpu className="w-16 h-16 text-[#00E5FF] mx-auto animate-spin" style={{ animationDuration: '3s' }} />
              <div className="text-sm font-digital text-[#00E5FF] animate-pulse uppercase tracking-widest">
                Processando transação de rede...
              </div>
              <div className="text-[10px] text-gray-500 font-mono tracking-wide">
                CYNTREON CORE GATEWAY // ASSINANDO HASH CRIPTOGRÁFICO
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="font-header text-xs text-[#00E5FF] uppercase tracking-wider border-b border-white/5 pb-2">
                  1. Dados do Participante
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-header text-gray-400 uppercase tracking-widest mb-2">Nome Completo</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                      <input 
                        type="text" 
                        required 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Nome Sobrenome" 
                        className="cyber-input pl-10" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-header text-gray-400 uppercase tracking-widest mb-2">E-mail</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                      <input 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nome@provedor.com" 
                        className="cyber-input pl-10" 
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-header text-gray-400 uppercase tracking-widest mb-2">Documento / NIF / CPF</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                    <input 
                      type="text" 
                      required 
                      value={nif}
                      onChange={(e) => setNif(e.target.value)}
                      placeholder="000.000.000-00" 
                      className="cyber-input pl-10" 
                    />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-4 pt-4">
                <h3 className="font-header text-xs text-[#00E5FF] uppercase tracking-wider border-b border-white/5 pb-2">
                  2. Método de Pagamento (Cartão de Crédito)
                </h3>

                <div>
                  <label className="block text-[10px] font-header text-gray-400 uppercase tracking-widest mb-2">Número do Cartão</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                    <input 
                      type="text" 
                      required 
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="0000 0000 0000 0000" 
                      className="cyber-input pl-10" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-header text-gray-400 uppercase tracking-widest mb-2">Validade</label>
                    <input 
                      type="text" 
                      required 
                      value={cardExpiry}
                      onChange={handleExpiryChange}
                      placeholder="MM/AA" 
                      className="cyber-input" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-header text-gray-400 uppercase tracking-widest mb-2">CVV</label>
                    <input 
                      type="password" 
                      required 
                      value={cardCvv}
                      onChange={handleCvvChange}
                      placeholder="•••" 
                      className="cyber-input text-center" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-header text-gray-400 uppercase tracking-widest mb-2">Nome Impresso no Cartão</label>
                  <input 
                    type="text" 
                    required 
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="COMO CONSTA NO CARTÃO" 
                    className="cyber-input uppercase" 
                  />
                </div>
              </div>

              {/* Security info */}
              <div className="bg-[#0a0b16] border border-white/5 rounded p-4 flex gap-3 items-start text-gray-400 text-xs">
                <Lock className="text-emerald-400 w-4 h-4 flex-shrink-0 mt-0.5" />
                <p className="font-hologram">
                  Pagamento auditado e processado com segurança por Cyntreon Pay API. 
                  Seus dados bancários nunca são guardados nos nossos servidores.
                </p>
              </div>

              {/* Form Actions */}
              <div className="pt-4 flex gap-4 items-center">
                <button 
                  type="submit" 
                  className="cyber-btn-cyan flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider cursor-pointer flex-grow sm:flex-grow-0"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Finalizar Inscrição</span>
                </button>
                <div className="hidden sm:block text-xs font-digital text-gray-500">
                  TOTAL A PAGAR: <span className="text-white font-bold">{ticket.price} BRL</span>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Selected Ticket Summary Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="cyber-panel relative overflow-hidden" style={{ border: '1px solid var(--theme-purple)' }}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#764DF0]/10 blur-[30px] -z-10"></div>
            
            <h3 className="font-header text-sm text-[#a385ff] font-bold uppercase tracking-wider mb-4">
              Resumo do Passaporte
            </h3>

            {/* Ticket Graphic card */}
            <div className="bg-[#0a0b16] border border-white/10 rounded-lg p-5 relative overflow-hidden">
              {/* Perforation visual */}
              <div className="absolute top-0 left-12 w-3.5 h-1.5 rounded-b-full bg-[#101128]"></div>
              <div className="absolute bottom-0 left-12 w-3.5 h-1.5 rounded-t-full bg-[#101128]"></div>

              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-[#764DF0]/15 border border-[#764DF0]/30 rounded px-2 py-0.5 text-[8px] font-digital text-purple-400 uppercase tracking-widest block w-max mb-1">
                    {ticket.batch}
                  </span>
                  <h4 className="font-header text-lg text-white font-bold tracking-wide">{ticket.name}</h4>
                </div>
                <div className="text-right">
                  <span className="text-xl font-digital font-black text-[#00E5FF]">{ticket.price}</span>
                  <span className="text-[9px] text-gray-500 font-digital uppercase block">BRL</span>
                </div>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed mb-4 border-b border-white/5 pb-4 font-hologram">
                {ticket.desc}
              </p>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-digital">
                  <span className="text-gray-500">EVENT CODE:</span>
                  <span className="text-white">{ticket.eventCode}</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-digital">
                  <span className="text-gray-500">CIDADE HUB:</span>
                  <span className="text-white">Ovar — Curitiba</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-digital">
                  <span className="text-gray-500">MAILING HASH:</span>
                  <span className="text-purple-400">PROV_CWB_2026</span>
                </div>
              </div>
            </div>

            {/* Summary Values list */}
            <div className="space-y-3 pt-6 mt-6 border-t border-white/5 font-digital text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">SUBTOTAL</span>
                <span className="text-white">{ticket.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">TAXAS OPERACIONAIS</span>
                <span className="text-emerald-400">R$ 0,00</span>
              </div>
              <div className="flex justify-between border-t border-white/5 pt-3 text-sm">
                <span className="text-gray-400">VALOR TOTAL:</span>
                <span className="text-[#00E5FF] font-bold">{ticket.price}</span>
              </div>
            </div>
          </div>

          {/* Hologram card graphic live preview */}
          <div className="bg-gradient-to-br from-[#1b124a] to-[#0c0d1e] border border-[#764DF0]/40 rounded-xl p-6 relative overflow-hidden shadow-2xl h-48 flex flex-col justify-between group">
            {/* Chip decoration */}
            <div className="flex justify-between items-start">
              <div className="w-10 h-7 bg-gradient-to-r from-amber-400 to-amber-200 rounded-md flex items-center justify-center opacity-70 relative">
                <div className="absolute inset-1 border border-black/20 rounded-[3px]"></div>
                <div className="w-full h-[1px] bg-black/20 absolute top-1/2 -translate-y-1/2"></div>
                <div className="h-full w-[1px] bg-black/20 absolute top-0 left-1/3"></div>
                <div className="h-full w-[1px] bg-black/20 absolute top-0 left-2/3"></div>
              </div>
              <div className="text-right">
                <span className="text-[#00E5FF] font-digital font-black text-sm tracking-widest">CYNTREON</span>
                <span className="block text-[8px] font-mono text-purple-400 tracking-wider">SECURE PAY NODE</span>
              </div>
            </div>

            {/* Holographic glowing badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#00E5FF]/5 blur-[30px] rounded-full group-hover:scale-150 transition-transform duration-700"></div>

            {/* Card number display preview */}
            <div className="text-white font-digital text-lg tracking-widest text-center my-2 h-7 font-bold">
              {cardNumber || '•••• •••• •••• ••••'}
            </div>

            {/* Expiry and holder display preview */}
            <div className="flex justify-between items-end text-white font-mono uppercase">
              <div>
                <span className="text-[7px] text-gray-500 block">CARDHOLDER NAME</span>
                <span className="text-[10px] tracking-wide h-4 block truncate w-36">{cardName || 'YOUR FULL NAME'}</span>
              </div>
              <div className="text-right">
                <span className="text-[7px] text-gray-500 block">EXPIRY</span>
                <span className="text-[10px] tracking-wide h-4 block">{cardExpiry || 'MM/AA'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
