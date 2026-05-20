import React from 'react';
import { INITIAL_PARTICIPANTS } from '../../data/mockData';
import { Search, User, Filter, CreditCard, Mail, MapPin } from 'lucide-react';

export default function Participantes() {
  const [participants, setParticipants] = React.useState(INITIAL_PARTICIPANTS);
  const [search, setSearch] = React.useState('');
  const [cityFilter, setCityFilter] = React.useState('ALL');
  const [statusFilter, setStatusFilter] = React.useState('ALL');
  const [selectedPax, setSelectedPax] = React.useState(INITIAL_PARTICIPANTS[0]);

  const filtered = participants.filter(p => {
    const matchesSearch = 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase());
    
    const matchesCity = cityFilter === 'ALL' || p.city === cityFilter;
    const matchesStatus = statusFilter === 'ALL' || p.status === statusFilter;
    
    return matchesSearch && matchesCity && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="cyber-title text-2xl mb-1">Base de Participantes</h1>
        <p className="text-xs text-gray-500 font-digital uppercase tracking-widest">Base de Dados Integrada dos Portadores de IRIA-ID</p>
      </div>

      {/* Control panel */}
      <div className="cyber-panel p-4 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-3 flex-grow max-w-xl">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Buscar por nome, email ou IRIA-ID..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="cyber-input pl-10"
            />
          </div>
          <select 
            value={cityFilter} 
            onChange={e => setCityFilter(e.target.value)}
            className="cyber-input" 
            style={{ width: '150px' }}
          >
            <option value="ALL">Todas as Cidades</option>
            <option value="Curitiba">Curitiba</option>
            <option value="Porto Alegre">Porto Alegre</option>
            <option value="Salvador">Salvador</option>
          </select>
          <select 
            value={statusFilter} 
            onChange={e => setStatusFilter(e.target.value)}
            className="cyber-input" 
            style={{ width: '150px' }}
          >
            <option value="ALL">Todos os Status</option>
            <option value="Presente">Presente</option>
            <option value="Pendente">Pendente</option>
          </select>
        </div>
        <div className="text-xs font-digital text-gray-400">
          Encontrados: <span className="text-[#00E5FF]">{filtered.length}</span> registros
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Table list */}
        <div className="cyber-panel lg:col-span-2 overflow-x-auto">
          <table className="cyber-table">
            <thead>
              <tr>
                <th>IRIA-ID</th>
                <th>Nome</th>
                <th>Cidade</th>
                <th>Ticket</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr 
                  key={p.id} 
                  onClick={() => setSelectedPax(p)}
                  className={`cursor-pointer ${selectedPax?.id === p.id ? 'bg-[#764DF0]/5' : ''}`}
                >
                  <td className="font-digital text-white text-xs">{p.id}</td>
                  <td className="font-semibold">{p.name}</td>
                  <td>{p.city}</td>
                  <td>{p.ticket}</td>
                  <td>
                    <span className={`cyber-badge ${p.status === 'Presente' ? 'cyber-badge-green' : 'cyber-badge-orange'}`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-gray-500 font-digital">Nenhum participante encontrado no banco de dados.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Selected Details Card */}
        <div className="cyber-panel flex flex-col justify-between" style={{ minHeight: '350px' }}>
          {selectedPax ? (
            <div>
              <div className="flex items-center gap-4 border-b border-white/5 pb-4 mb-4">
                <div className="w-12 h-12 rounded bg-[#764DF0]/10 border border-[#764DF0]/30 flex items-center justify-center text-[#00E5FF] text-xl font-bold">
                  {selectedPax.name[0]}
                </div>
                <div>
                  <h3 className="font-header text-base text-white font-bold">{selectedPax.name}</h3>
                  <span className="font-digital text-xs text-[#00E5FF]">{selectedPax.id}</span>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>{selectedPax.email}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{selectedPax.city} Hub</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <CreditCard className="w-4 h-4 text-gray-500" />
                  <span>Cat: {selectedPax.ticket}</span>
                </div>

                <div className="border-t border-white/5 pt-4 mt-4">
                  <span className="text-[10px] font-digital text-gray-500 uppercase block mb-1">Check-in Log</span>
                  <p className="text-xs text-gray-400 font-digital leading-relaxed">
                    {selectedPax.status === 'Presente' 
                      ? `AUTORIZADO NO TERMINAL EM: ${new Date(selectedPax.checkinTime).toLocaleString('pt-BR')}`
                      : 'NENHUM LOG DE CREDENCIAMENTO DETECTADO'
                    }
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500 font-digital">
              Selecione um participante para ver detalhes operacionais.
            </div>
          )}

          <div className="border-t border-white/5 pt-4 mt-6">
            <span className="text-[10px] text-gray-500 font-digital leading-none block mb-1">VERIFICAÇÃO DE ASSINATURA</span>
            <span className="text-[10px] text-emerald-400 font-digital">SECURE CORE MATCH v1.2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
