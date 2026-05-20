import { useState, useEffect, useRef } from 'react';
import { INITIAL_SYSTEM_LOGS } from '../data/mockData';
import { generateIriaId } from '../core/config';

const MOCK_EVENTS = [
  { type: "CHECKIN", message: "Participante BRA-CWB-2026-000512 credenciado por painel manual." },
  { type: "LUMINA", message: "Sessão de biofeedback concluída para BRA-POA-2026-000104 [Operador: Helena Viterbo]." },
  { type: "CERTIFICATE", message: "Certificado de Palestrante emitido com sucesso para BRA-CWB-2026-000183." },
  { type: "SECURITY", message: "Renovando sessão encriptada com Cyntreon central API gateway." },
  { type: "API", message: "Leitura de batimento e EEG carregados para BRA-SSA-2026-000214 [CCI-9021-X]." },
  { type: "LUMINA", message: "Análise biométrica completa para BRA-CWB-2026-000012: stress reativo elevado." },
  { type: "CHECKIN", message: "Participante BRA-POA-2026-000320 realizou check-in rápido." }
];

export function useRealtimeFeed() {
  const [logs, setLogs] = useState(INITIAL_SYSTEM_LOGS);
  const counterRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeNow = new Date().toLocaleTimeString('pt-BR', { hour12: false });
      const randomEvent = MOCK_EVENTS[Math.floor(Math.random() * MOCK_EVENTS.length)];
      
      // Adapt message slightly to feel active
      let message = randomEvent.message;
      if (randomEvent.type === "CHECKIN" && Math.random() > 0.5) {
        const randId = Math.floor(Math.random() * 800) + 10;
        message = `Participante BRA-CWB-2026-${String(randId).padStart(6, '0')} credenciado por QR-Code.`;
      }

      const newLog = {
        time: timeNow,
        type: randomEvent.type,
        message: message
      };

      setLogs(prevLogs => {
        // Limit to last 50 logs to prevent memory leaks
        const updated = [...prevLogs, newLog];
        if (updated.length > 50) {
          return updated.slice(updated.length - 50);
        }
        return updated;
      });
    }, 4500); // add a new log every 4.5s

    return () => clearInterval(interval);
  }, []);

  return logs;
}
