import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Fingerprint, Lock, Cpu, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [scanning, setScanning] = React.useState(false);
  const [scanComplete, setScanComplete] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const startBioScan = () => {
    setScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setScanning(false);
      setScanComplete(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 800);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto my-16 px-4">
      <div className="cyber-panel">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full border-2 border-[#00E5FF] flex items-center justify-center mx-auto mb-4 bg-[#101435]">
            <Cpu className="text-[#00E5FF] w-8 h-8 animate-pulse" />
          </div>
          <h2 className="cyber-title font-header text-xl tracking-wider mb-2">Acesso Operacional</h2>
          <p className="text-xs text-gray-500 font-digital">IRIA CORE SYSTEM AUTHENTICATION</p>
        </div>

        {scanning ? (
          <div className="text-center py-8">
            <Fingerprint className="w-24 h-24 text-[#00E5FF] mx-auto animate-pulse" style={{ filter: 'drop-shadow(0 0 10px rgba(0, 229, 255, 0.4))' }} />
            <div className="mt-4 text-xs font-digital text-[#00E5FF] animate-pulse">ESCANEANDO IMPRESSÃO BIOMÉTRICA...</div>
            <div className="mt-2 text-[10px] text-gray-500 font-digital">CANNA-OS GATEWAY STATUS: SYNCING</div>
          </div>
        ) : scanComplete ? (
          <div className="text-center py-8">
            <Fingerprint className="w-24 h-24 text-emerald-400 mx-auto" />
            <div className="mt-4 text-xs font-digital text-emerald-400">BIOMETRIA AUTORIZADA</div>
            <div className="mt-2 text-[10px] text-gray-500 font-digital">SYS_ACCESS_GRANTEE: RP-9021</div>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-header text-gray-400 uppercase tracking-widest mb-2">Identificador (NIF / Email)</label>
              <div className="relative">
                <Shield className="absolute left-3.5 top-3.5 text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  required
                  placeholder="admin@iriasummit.com.br"
                  defaultValue="admin@iriasummit.com.br"
                  className="cyber-input pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-header text-gray-400 uppercase tracking-widest mb-2">Chave de Encriptação (Senha)</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 text-gray-500 w-4 h-4" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••••••"
                  defaultValue="12345678"
                  className="cyber-input pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full cyber-btn-cyan flex items-center justify-center gap-2 py-3"
              >
                <span>Aceder via Credenciais</span>
              </button>
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-white/5"></div>
              <span className="flex-shrink mx-4 text-[10px] text-gray-500 font-digital">OU USE BIOMETRIA</span>
              <div className="flex-grow border-t border-white/5"></div>
            </div>

            <div>
              <button
                type="button"
                onClick={startBioScan}
                className="w-full cyber-btn-purple flex items-center justify-center gap-2 py-3"
              >
                <Fingerprint className="w-4 h-4" />
                <span>Escanear Biometria</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
