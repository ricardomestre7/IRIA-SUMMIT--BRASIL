import React from 'react';
import { LUMINA_EXAMS } from '../../data/mockData';
import { downloadCsv } from '../../services/mockApi';
import { 
  HeartPulse, FileText, Download, Search, X, 
  Activity, ShieldCheck, User, Zap, Brain, Thermometer
} from 'lucide-react';

export default function LuminaExames() {
  const [exams, setExams] = React.useState(LUMINA_EXAMS);
  const [search, setSearch] = React.useState('');
  const [cityFilter, setCityFilter] = React.useState('ALL');
  const [statusFilter, setStatusFilter] = React.useState('ALL');
  const [selectedExam, setSelectedExam] = React.useState(null);

  const filtered = exams.filter(e => {
    const matchesSearch = 
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.iriaId.toLowerCase().includes(search.toLowerCase()) ||
      e.therapist.toLowerCase().includes(search.toLowerCase());
    
    const matchesCity = cityFilter === 'ALL' || e.city === cityFilter;
    const matchesStatus = statusFilter === 'ALL' || e.status === statusFilter;
    
    return matchesSearch && matchesCity && matchesStatus;
  });

  const handleExport = () => {
    const headers = ["iriaId", "name", "therapist", "city", "cci", "status", "date"];
    downloadCsv(headers, exams, "LUMINA-EXAMS-SUMMIT.csv");
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="cyber-title text-2xl mb-1">Histórico de Testes Lumina</h1>
          <p className="text-xs text-gray-500 font-digital uppercase tracking-widest">Sessões de biofeedback e avaliação biométrica realizadas nos estandes do evento</p>
        </div>
        <button 
          onClick={handleExport}
          className="cyber-btn-cyan flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Exportar Relatório</span>
        </button>
      </div>

      {/* Filters */}
      <div className="cyber-panel p-4 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-3 flex-grow max-w-xl">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Buscar por IRIA-ID, Nome ou Operador..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="cyber-input pl-10"
            />
          </div>
          <select 
            value={cityFilter} 
            onChange={e => setCityFilter(e.target.value)}
            className="cyber-input" 
            style={{ width: '220px' }}
          >
            <option value="ALL">Todas as Cidades</option>
            <option value="Ovar — Curitiba">Ovar — Curitiba</option>
            <option value="Santa Maria da Feira — Porto Alegre">Feira — Porto Alegre</option>
            <option value="Aveiro — Salvador">Aveiro — Salvador</option>
          </select>
          <select 
            value={statusFilter} 
            onChange={e => setStatusFilter(e.target.value)}
            className="cyber-input" 
            style={{ width: '150px' }}
          >
            <option value="ALL">Todos os Status</option>
            <option value="Realizado">Realizado</option>
            <option value="Pendente">Pendente</option>
          </select>
        </div>
        <div className="text-xs font-digital text-gray-400">
          Testes Realizados: <span className="text-[#00E5FF]">{filtered.length}</span> detectados
        </div>
      </div>

      {/* Exams Table */}
      <div className="cyber-panel overflow-x-auto">
        <table className="cyber-table">
          <thead>
            <tr>
              <th>IRIA-ID</th>
              <th>Nome</th>
              <th>Operador/Responsável</th>
              <th>Cidade</th>
              <th>CCI</th>
              <th>Status</th>
              <th>Data</th>
              <th className="text-center">Laudo</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((e, idx) => (
              <tr key={idx}>
                <td className="font-digital text-xs text-[#00E5FF]">{e.iriaId}</td>
                <td className="font-semibold text-white">{e.name}</td>
                <td className="text-xs">{e.therapist}</td>
                <td>{e.city}</td>
                <td className="font-digital text-xs">{e.cci}</td>
                <td>
                  <span className={`cyber-badge ${e.status === 'Realizado' ? 'cyber-badge-green' : 'cyber-badge-orange'}`}>
                    {e.status}
                  </span>
                </td>
                <td className="font-digital text-xs">{e.date}</td>
                <td className="text-center">
                  {e.status === 'Realizado' ? (
                    <button 
                      onClick={() => setSelectedExam(e)}
                      className="p-1.5 rounded hover:bg-white/5 text-[#00E5FF] inline-flex items-center justify-center cursor-pointer border border-[#00E5FF]/20 hover:border-[#00E5FF]"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                  ) : (
                    <span className="text-gray-600 text-xs">-</span>
                  )}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-8 text-gray-500 font-digital">
                  Nenhum teste encontrado no sistema.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Test Details Modal */}
      {selectedExam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl cyber-panel max-h-[90vh] overflow-y-auto" style={{ border: '2px solid var(--theme-cyan)' }}>
            
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <HeartPulse className="text-[#ff1744] w-6 h-6 animate-pulse" />
                <div>
                  <h3 className="font-header text-lg text-white font-bold">RELATÓRIO DO EXAME LUMINA</h3>
                  <span className="text-[10px] text-gray-500 font-digital uppercase">DADOS COLETADOS NO ESTANDE DO SUMMIT</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedExam(null)}
                className="p-1 rounded hover:bg-white/15 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document Header details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#101435]/40 border border-white/5 rounded p-4 mb-6 text-sm font-hologram">
              <div className="space-y-2">
                <div><span className="text-gray-500">PARTICIPANTE:</span> <strong className="text-white">{selectedExam.name}</strong></div>
                <div><span className="text-gray-500">IRIA-ID:</span> <strong className="text-[#00E5FF] font-digital">{selectedExam.iriaId}</strong></div>
                <div><span className="text-gray-500">CIDADE REGIONAL:</span> <span className="text-white">{selectedExam.city} Hub</span></div>
              </div>
              <div className="space-y-2 md:border-l md:border-white/5 md:pl-6">
                <div><span className="text-gray-500">OPERADOR DO ESTANDE:</span> <span className="text-white">{selectedExam.therapist}</span></div>
                <div><span className="text-gray-500">TEST ID (CCI):</span> <span className="text-[#a385ff] font-digital">{selectedExam.cci}</span></div>
                <div><span className="text-gray-500">DATA DA REALIZAÇÃO:</span> <span className="text-white">{selectedExam.date}</span></div>
              </div>
            </div>

            {/* Biometric results */}
            <div className="mb-6">
              <h4 className="font-header text-xs text-[#00E5FF] tracking-wider uppercase mb-3">BIOMETRIA DO PARTICIPANTE EM TEMPO REAL</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                
                <div className="bg-[#0a0b16] border border-white/5 rounded p-3 text-center">
                  <Brain className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                  <span className="block text-[10px] text-gray-500 font-digital uppercase">Sinal EEG (Foco)</span>
                  <span className="text-xs text-white font-digital font-bold block mt-1">{selectedExam.biometrics.eegSignal}</span>
                </div>

                <div className="bg-[#0a0b16] border border-white/5 rounded p-3 text-center">
                  <Activity className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                  <span className="block text-[10px] text-gray-500 font-digital uppercase">Coerência Cardíaca</span>
                  <span className="text-xs text-white font-digital font-bold block mt-1">{selectedExam.biometrics.heartRateVar}</span>
                </div>

                <div className="bg-[#0a0b16] border border-white/5 rounded p-3 text-center">
                  <Thermometer className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                  <span className="block text-[10px] text-gray-500 font-digital uppercase">Stress / Cortisol</span>
                  <span className="text-xs text-white font-digital font-bold block mt-1">{selectedExam.biometrics.cortisolLevel}</span>
                </div>

                <div className="bg-[#0a0b16] border border-white/5 rounded p-3 text-center">
                  <Zap className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                  <span className="block text-[10px] text-gray-500 font-digital uppercase">Reação Galvânica</span>
                  <span className="text-xs text-white font-digital font-bold block mt-1">{selectedExam.biometrics.galvanicSkin}</span>
                </div>

              </div>
            </div>

            {/* Observations and recommendations */}
            <div className="space-y-6">
              <div>
                <h4 className="font-header text-xs text-[#00E5FF] tracking-wider uppercase mb-2">OBSERVAÇÕES E NOTAS DE AVALIAÇÃO</h4>
                <p className="bg-[#0a0b16] border border-white/5 rounded p-4 text-sm text-gray-300 leading-relaxed font-hologram">
                  {selectedExam.notes}
                </p>
              </div>

              <div>
                <h4 className="font-header text-xs text-[#00E5FF] tracking-wider uppercase mb-2">RECOMENDAÇÕES DE BEM-ESTAR</h4>
                <p className="bg-[#0a0b16] border border-white/5 rounded p-4 text-sm text-gray-300 leading-relaxed font-hologram">
                  {selectedExam.recommendations}
                </p>
              </div>
            </div>

            {/* Document Signature */}
            <div className="flex justify-between items-center border-t border-white/5 pt-6 mt-8">
              <div className="text-xs text-gray-500 font-digital">
                RELATÓRIO GERADO NO EVENTO · ASSINATURA SECURE ID
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-emerald-400 w-4 h-4" />
                <span className="text-xs text-emerald-400 font-digital font-semibold">PROCESSAMENTO SEGURO</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
