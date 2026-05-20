import React from 'react';
import { INITIAL_CERTIFICATES } from '../../data/mockData';
import { generateHash } from '../../services/mockApi';
import { Award, ShieldCheck, QrCode, Send, Eye, X } from 'lucide-react';

export default function Certificados() {
  const [certs, setCerts] = React.useState(INITIAL_CERTIFICATES);
  const [selectedCert, setSelectedCert] = React.useState(null);

  const handleIssue = (id, name, type) => {
    setCerts(prev => prev.map(c => {
      if (c.id === id) {
        const secret = `${id}-${name}-${type}-${new Date().getTime()}`;
        return {
          ...c,
          hash: generateHash(secret),
          issued: true,
          issuedDate: new Date().toISOString()
        };
      }
      return c;
    }));
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="cyber-title text-2xl mb-1">Registro de Certificações</h1>
        <p className="text-xs text-gray-500 font-digital uppercase tracking-widest">Emissão de Certificados com Rastreabilidade Criptográfica SHA256</p>
      </div>

      {/* Main Table */}
      <div className="cyber-panel overflow-x-auto">
        <table className="cyber-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>IRIA-ID</th>
              <th>Nome Completo</th>
              <th>Tipo de Certificado</th>
              <th>Hash SHA256</th>
              <th>Status</th>
              <th className="text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {certs.map(c => (
              <tr key={c.id}>
                <td className="font-digital text-xs">{c.id}</td>
                <td className="font-digital text-xs text-[#00E5FF]">{c.iriaId}</td>
                <td className="font-semibold text-white">{c.name}</td>
                <td className="text-xs">{c.type}</td>
                <td className="font-digital text-xs max-w-xs truncate text-gray-500" title={c.hash || 'Pendente'}>
                  {c.hash ? `${c.hash.substring(0, 16)}...` : 'Não Gerado'}
                </td>
                <td>
                  <span className={`cyber-badge ${c.issued ? 'cyber-badge-green' : 'cyber-badge-orange'}`}>
                    {c.issued ? 'Emitido' : 'Pendente'}
                  </span>
                </td>
                <td className="text-right">
                  <div className="flex gap-2 justify-end">
                    {c.issued ? (
                      <button
                        onClick={() => setSelectedCert(c)}
                        className="cyber-btn-cyan py-1 px-3 text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Ver QR</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleIssue(c.id, c.name, c.type)}
                        className="cyber-btn-purple py-1 px-3 text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>Emitir</span>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* QR Code / Holographic Card Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg cyber-panel p-8 text-center" style={{ border: '2px solid var(--theme-purple)' }}>
            
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute right-4 top-4 p-1 rounded hover:bg-white/10 text-gray-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full border border-purple-500/30 flex items-center justify-center bg-[#101435] mx-auto mb-6">
              <Award className="text-[#a385ff] w-8 h-8 animate-pulse" />
            </div>

            <h3 className="font-header text-xl text-white font-bold mb-1">CERTIFICADO VERIFICADO</h3>
            <span className="text-[10px] font-digital text-emerald-400 block mb-6">ASSINATURA CRIPTOGRÁFICA REGISTRADA</span>

            {/* Simulated certificate template */}
            <div className="bg-[#0a0b16] border border-white/5 rounded p-6 mb-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <Award className="w-24 h-24 text-white" />
              </div>
              <div className="text-[10px] text-gray-500 font-digital uppercase mb-3">IRIA SUMMIT BRASIL 2026</div>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Certificamos que <strong className="text-white">{selectedCert.name}</strong> participou com aproveitamento na categoria
                de <strong className="text-white">{selectedCert.type}</strong> durante as atividades oficiais do ciclo Curitiba 2026.
              </p>
              <div className="flex justify-between items-end border-t border-white/5 pt-4 text-[9px] font-digital text-gray-500">
                <div>
                  <div>ID: {selectedCert.iriaId}</div>
                  <div>DATA: {new Date(selectedCert.issuedDate).toLocaleDateString('pt-BR')}</div>
                </div>
                <div className="text-right">
                  <div>Cylinder Margin LDA</div>
                  <div className="text-[#00E5FF]">Cyntreon Core Verified</div>
                </div>
              </div>
            </div>

            {/* QR Code section */}
            <div className="bg-[#101435]/40 border border-white/5 rounded p-4 flex flex-col items-center">
              {/* Mock QR box */}
              <div className="w-28 h-28 bg-white p-2 rounded mb-3 flex items-center justify-center">
                <QrCode className="w-full h-full text-black" />
              </div>
              <span className="text-[10px] text-gray-500 font-digital uppercase mb-1">Link de Auditoria</span>
              <a 
                href={`https://verify.iriasummit.com/hash/${selectedCert.hash}`} 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs text-[#00E5FF] font-digital no-underline hover:underline break-all max-w-xs"
              >
                verify.iriasummit.com/hash/{selectedCert.hash.substring(0, 16)}...
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              <button 
                onClick={() => window.print()}
                className="flex-grow cyber-btn-cyan py-2.5"
              >
                Imprimir Certificado
              </button>
              <button 
                onClick={() => setSelectedCert(null)}
                className="cyber-btn-purple py-2.5 px-6"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
