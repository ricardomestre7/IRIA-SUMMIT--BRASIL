import React from 'react';
import { DollarSign, BarChart3, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Financeiro() {
  const transactions = [
    { desc: "Venda Bilhete: VIP Pass (BRA-CWB-2026-000012)", amount: "+R$ 950,00", time: "Há 12 minutos", status: "Pago" },
    { desc: "Venda Bilhete: General (BRA-POA-2026-000320)", amount: "+R$ 450,00", time: "Há 24 minutos", status: "Pago" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="cyber-title text-2xl mb-1">Painel Financeiro</h1>
          <p className="text-xs text-gray-500 font-digital uppercase tracking-widest">Acompanhamento de Caixa, Vendas e Receita Estimada</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="cyber-panel lg:col-span-2">
          <h3 className="font-header text-sm text-[#00E5FF] font-bold flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>Últimas Transações</span>
          </h3>

          <div className="space-y-4">
            {transactions.map((t, idx) => (
              <div key={idx} className="bg-[#0a0b16] border border-white/5 rounded p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-white text-sm">{t.desc}</h4>
                  <span className="text-[10px] text-gray-500 font-digital uppercase block mt-1">{t.time}</span>
                </div>
                <div className="text-right">
                  <span className="text-emerald-400 font-digital font-bold text-sm block">{t.amount}</span>
                  <span className="cyber-badge cyber-badge-green text-[9px] font-digital mt-1">{t.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cyber-panel flex flex-col justify-between" style={{ minHeight: '220px' }}>
          <div>
            <h3 className="font-header text-sm text-[#00E5FF] font-bold flex items-center gap-2 mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>Metas Financeiras</span>
            </h3>

            <div className="space-y-3 font-digital text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">META DE VENDAS</span>
                <span className="text-white">R$ 500.000 / R$ 600.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">MÉDIA DE TICKET</span>
                <span className="text-[#00E5FF]">R$ 824.50</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 mt-6 flex items-center gap-2 text-[10px] text-gray-500 font-digital">
            <ShieldCheck className="text-emerald-400 w-3.5 h-3.5" />
            <span>FATURAMENTO INTEGRADO E COMPILADO</span>
          </div>
        </div>
      </div>
    </div>
  );
}
