import React from 'react';
import { Settings, Cpu, ShieldCheck, Database, ToggleRight } from 'lucide-react';

export default function Admin() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="cyber-title text-2xl mb-1">Painel Administrativo</h1>
          <p className="text-xs text-gray-500 font-digital uppercase tracking-widest">Configuração das Famílias de Sensores, Chaves e Portais</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="cyber-panel lg:col-span-2 space-y-6">
          <h3 className="font-header text-sm text-[#00E5FF] font-bold flex items-center gap-2 mb-4">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>Configurações do Ecossistema IRIA Core</span>
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center bg-[#0a0b16] border border-white/5 rounded p-4">
              <div>
                <h4 className="font-semibold text-white text-sm">Integração Lumina Live IoT</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed font-hologram">Permite o upload em tempo real de biossinais diretamente nos hubs.</p>
              </div>
              <ToggleRight className="text-[#00E5FF] w-8 h-8 cursor-pointer" />
            </div>

            <div className="flex justify-between items-center bg-[#0a0b16] border border-white/5 rounded p-4">
              <div>
                <h4 className="font-semibold text-white text-sm">Auditoria Criptográfica do verify.iriasummit.com</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed font-hologram">Verifica certificados emitidos por hash SHA256 no banco público.</p>
              </div>
              <ToggleRight className="text-[#00E5FF] w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="cyber-panel flex flex-col justify-between" style={{ minHeight: '220px' }}>
          <div>
            <h3 className="font-header text-sm text-[#00E5FF] font-bold flex items-center gap-2 mb-4">
              <Database className="w-4 h-4" />
              <span>Backups & Logs</span>
            </h3>

            <div className="space-y-3 font-digital text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">ÚLTIMO BACKUP</span>
                <span className="text-[#00E5FF]">Há 2 horas (Automático)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">TAMANHO DA BASE</span>
                <span className="text-white">12.4 MB</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 mt-6 flex items-center gap-2 text-[10px] text-gray-500 font-digital">
            <ShieldCheck className="text-emerald-400 w-3.5 h-3.5" />
            <span>ESTADO SEGURO E CONSOLIDADO</span>
          </div>
        </div>
      </div>
    </div>
  );
}
