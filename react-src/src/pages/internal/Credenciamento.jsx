import React from 'react';
import { INITIAL_PARTICIPANTS } from '../../data/mockData';
import { ShieldCheck, Search, QrCode, UserCheck, AlertTriangle } from 'lucide-react';

export default function Credenciamento() {
  const [participants, setParticipants] = React.useState(INITIAL_PARTICIPANTS);
  const [search, setSearch] = React.useState('');
  const [lastCheckinName, setLastCheckinName] = React.useState('');

  const handleCheckin = (id, name) => {
    setParticipants(prev => prev.map(p => {
      if (p.id === id) {
        return {
          ...p,
          status: p.status === 'Presente' ? 'Pendente' : 'Presente',
          checkinTime: p.status === 'Presente' ? null : new Date().toISOString()
        };
      }
      return p;
    }));
    setLastCheckinName(name);
    setTimeout(() => setLastCheckinName(''), 4000);
  };

  const filtered = participants.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.email.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toLowerCase().includes(search.toLowerCase())
  );

  const presentCount = participants.filter(p => p.status === 'Presente').length;
  const totalCount = participants.length;
  const checkinPercentage = totalCount > 0 ? Math.round((presentCount / totalCount) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="cyber-title text-2xl mb-1">Terminal de Credenciamento</h1>
        <p className="text-xs text-gray-500 font-digital uppercase tracking-widest">Painel Operacional de Entrada Fast-Track & Biometria</p>
      </div>

      {/* Analytics widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="cyber-panel p-4 flex flex-col justify-between">
          <span className="text-[10px] text-gray-500 font-header uppercase tracking-wider mb-2">Check-in Geral</span>
          <div>
            <span className="text-3xl font-digital font-bold text-white">{presentCount}</span>
            <span className="text-xs text-gray-400 font-digital"> / {totalCount} participantes</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded overflow-hidden mt-3">
            <div className="h-full bg-[#00E5FF] rounded" style={{ width: `${checkinPercentage}%` }}></div>
          </div>
        </div>

        <div className="cyber-panel p-4 flex flex-col justify-between">
          <span className="text-[10px] text-gray-500 font-header uppercase tracking-wider mb-2">Status da Linha</span>
          <div>
            <span className="text-3xl font-digital font-bold text-emerald-400">FLUXO ATIVO</span>
            <span className="text-xs text-gray-400 block font-digital mt-0.5">Tempo Médio de Atendimento: 24s</span>
          </div>
          <div className="text-[10px] text-[#00E5FF] font-digital mt-3">HOST MATCH: ACTIVE (CWB-01)</div>
        </div>

        <div className="cyber-panel p-4 flex flex-col justify-between">
          <span className="text-[10px] text-gray-500 font-header uppercase tracking-wider mb-2">Última Ação</span>
          <div>
            <span className="text-lg font-bold text-white font-header block truncate">
              {lastCheckinName ? lastCheckinName : "Aguardando Leitura"}
            </span>
            <span className="text-[10px] text-[#a385ff] font-digital block mt-0.5">
              {lastCheckinName ? "CHECK-IN CONCLUÍDO COM SUCESSO" : "STATUS: SCANNER PRONTO"}
            </span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded overflow-hidden mt-3">
            <div className={`h-full rounded ${lastCheckinName ? 'bg-emerald-400 animate-pulse' : 'bg-gray-700'}`} style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>

      {/* Main scanning panel */}
      <div className="cyber-panel">
        <div className="flex flex-wrap gap-4 items-center justify-between border-b border-white/5 pb-4 mb-6">
          <h3 className="font-header text-sm text-[#00E5FF] font-bold flex items-center gap-2">
            <QrCode className="w-4 h-4" />
            <span>Pesquisa de Ingresso / Scan de Biometria</span>
          </h3>
          <span className="text-[10px] font-digital text-gray-500">DIGITE OU ESCANEIE O IRIA-ID</span>
        </div>

        <div className="max-w-2xl mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Digite o IRIA-ID (ex. BRA-CWB-2026-000183), Nome ou Email..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="cyber-input pl-12 py-3.5 text-base"
            />
          </div>
        </div>

        {/* Listing */}
        <div className="overflow-x-auto">
          <table className="cyber-table">
            <thead>
              <tr>
                <th>IRIA-ID</th>
                <th>Nome Completo</th>
                <th>Ticket</th>
                <th>Status</th>
                <th className="text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id}>
                  <td className="font-digital text-xs text-[#00E5FF]">{p.id}</td>
                  <td className="font-semibold text-white">{p.name}</td>
                  <td className="text-xs">{p.ticket}</td>
                  <td>
                    <span className={`cyber-badge ${p.status === 'Presente' ? 'cyber-badge-green' : 'cyber-badge-orange'}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="text-right">
                    <button
                      onClick={() => handleCheckin(p.id, p.name)}
                      className={`cyber-btn-cyan py-1 px-3 text-xs flex items-center gap-1.5 ms-auto ${p.status === 'Presente' ? 'border-emerald-400 text-emerald-400 bg-emerald-400/5 hover:bg-emerald-400 hover:text-black' : ''}`}
                    >
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>{p.status === 'Presente' ? 'Desfazer' : 'Registrar'}</span>
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-gray-500 font-digital">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <AlertTriangle className="text-amber-500 w-6 h-6" />
                      <span>Nenhum participante correspondente encontrado.</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
