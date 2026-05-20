import { generateIriaId } from '../core/config';

// 1. Initial Participants list
export const INITIAL_PARTICIPANTS = [
  { id: generateIriaId(12, 'CWB'), name: "Ana Beatriz Silva", email: "anabeatriz@gmail.com", city: "Ovar — Curitiba", ticket: "VIP Pass", status: "Presente", checkinTime: "2026-09-19T08:32:00Z" },
  { id: generateIriaId(85, 'CWB'), name: "Carlos Eduardo Santos", email: "carlos.santos@outlook.com", city: "Ovar — Curitiba", ticket: "General Admission", status: "Pendente", checkinTime: null },
  { id: generateIriaId(104, 'POA'), name: "Juliana Mendes Costa", email: "juliana.costa@techhealth.io", city: "Santa Maria da Feira — Porto Alegre", ticket: "Tech Specialist", status: "Presente", checkinTime: "2026-09-20T09:15:00Z" },
  { id: generateIriaId(183, 'CWB'), name: "Dr. Ricardo Alencar", email: "ricardo.alencar@neurotech.com.br", city: "Ovar — Curitiba", ticket: "Speaker/Orador", status: "Presente", checkinTime: "2026-09-19T08:05:00Z" },
  { id: generateIriaId(214, 'SSA'), name: "Mariana Fernandes Rocha", email: "mariana.rocha@consciencia.org", city: "Aveiro — Salvador", ticket: "VIP Pass", status: "Pendente", checkinTime: null },
  { id: generateIriaId(320, 'POA'), name: "Gabriel Oliveira Lima", email: "gabriel.lima@ufrgs.br", city: "Santa Maria da Feira — Porto Alegre", ticket: "Student Pass", status: "Presente", checkinTime: "2026-09-20T10:42:00Z" },
  { id: generateIriaId(405, 'SSA'), name: "Fernanda Souza Dias", email: "fernanda.dias@salvadorhealth.com", city: "Aveiro — Salvador", ticket: "Exhibitor Pass", status: "Pendente", checkinTime: null },
  { id: generateIriaId(512, 'CWB'), name: "Roberto Ramos Cruz", email: "roberto.ramos@gmail.com", city: "Ovar — Curitiba", ticket: "General Admission", status: "Presente", checkinTime: "2026-09-19T09:12:00Z" }
];

// 2. Lumina Systems Database
// Lumina Biofeedback sessions (accompanying biometric details, cognitive performance, operator notes)
export const LUMINA_EXAMS = [
  {
    iriaId: generateIriaId(183, 'CWB'),
    name: "Dr. Ricardo Alencar",
    therapist: "Helena Viterbo (Lumina Tech Lead)",
    city: "Ovar — Curitiba",
    cci: "CCI-9021-X",
    status: "Realizado",
    date: "2026-09-19",
    biometrics: {
      eegSignal: "Estável - Foco em Ritmo Alfa Frontal 10.2Hz",
      heartRateVar: "74 ms (Elevado - Boa Resiliência)",
      focusLevel: "85% (Foco Elevado)",
      galvanicSkin: "2.4 μS (Baixa Ansiedade)"
    },
    notes: "O participant demonstra excelente ativação do córtex pré-frontal esquerdo e ótimos níveis de coerência cardíaca após 15 minutos do teste de biofeedback Lumina no estande. Sinais indicativos de alta adaptabilidade de foco.",
    recommendations: "Recomendado acompanhamento de meditação e coerência respiratória durante os painéis do evento.",
    pdfUrl: "/react-build/pdfs/LUMINA-CWB-2026-000183.pdf"
  },
  {
    iriaId: generateIriaId(12, 'CWB'),
    name: "Ana Beatriz Silva",
    therapist: "Marcos Vinicius (Operador Lumina)",
    city: "Ovar — Curitiba",
    cci: "CCI-1142-Y",
    status: "Realizado",
    date: "2026-09-19",
    biometrics: {
      eegSignal: "Instabilidade leve - Foco Beta Elevado 22.4Hz",
      heartRateVar: "35 ms (Moderado - Stress Detetado)",
      focusLevel: "42% (Fadiga Cognitiva)",
      galvanicSkin: "6.8 μS (Alta Reatividade)"
    },
    notes: "Assinala-se cansaço mental leve reativo. O teste Lumina no estande evidenciou stress reativo moderado.",
    recommendations: "Sugerido intervalo de relaxamento na área de descompressão do evento e hidratação regular.",
    pdfUrl: "/react-build/pdfs/LUMINA-CWB-2026-000012.pdf"
  },
  {
    iriaId: generateIriaId(104, 'POA'),
    name: "Juliana Mendes Costa",
    therapist: "Helena Viterbo (Lumina Tech Lead)",
    city: "Santa Maria da Feira — Porto Alegre",
    cci: "CCI-9021-X",
    status: "Realizado",
    date: "2026-09-20",
    biometrics: {
      eegSignal: "Excelente - Ritmo Teta Profundo 6.1Hz",
      heartRateVar: "92 ms (Excelente - Excelente Resiliência)",
      focusLevel: "96% (Estado de Flow)",
      galvanicSkin: "1.8 μS (Estado de Meditação)"
    },
    notes: "Níveis de stress extremamente baixos. Excelente correlação entre ondas cerebrais e coerência cardíaca profunda durante a sessão no estande.",
    recommendations: "Manter atividade física atual. Convidada para testar o simulador Lumina VR.",
    pdfUrl: "/react-build/pdfs/LUMINA-POA-2026-000104.pdf"
  },
  {
    iriaId: generateIriaId(320, 'POA'),
    name: "Gabriel Oliveira Lima",
    therapist: "Marcos Vinicius (Operador Lumina)",
    city: "Santa Maria da Feira — Porto Alegre",
    cci: "CCI-1142-Y",
    status: "Realizado",
    date: "2026-09-20",
    biometrics: {
      eegSignal: "Estável - Equilíbrio Alfa/Beta",
      heartRateVar: "54 ms (Tolerável)",
      focusLevel: "70% (Foco Estável)",
      galvanicSkin: "3.2 μS (Normal)"
    },
    notes: "Níveis biométricos normais. EEG demonstra estabilidade temporal e bom foco nas atividades interativas do evento.",
    recommendations: "Exercícios de coerência respiratória sugeridos nos intervalos dos painéis principais.",
    pdfUrl: "/react-build/pdfs/LUMINA-POA-2026-000320.pdf"
  },
  {
    iriaId: generateIriaId(85, 'CWB'),
    name: "Carlos Eduardo Santos",
    therapist: "Pendente de Alocação",
    city: "Ovar — Curitiba",
    cci: "N/A",
    status: "Pendente",
    date: "2026-09-19",
    biometrics: null,
    notes: "Participante agendado para o teste Lumina no estande.",
    recommendations: "Nenhum protocolo ativo.",
    pdfUrl: null
  }
];

// 3. Certificates Database
export const INITIAL_CERTIFICATES = [
  {
    id: "CERT-001",
    name: "Dr. Ricardo Alencar",
    role: "Orador / Palestrante",
    iriaId: generateIriaId(183, 'CWB'),
    type: "Conferencista",
    hash: "6a964eb78d91c1070e304b77d612e4dfa63459c5d1e2f7b88aa0b62e49c716b9",
    issued: true,
    issuedDate: "2026-09-21T18:00:00Z"
  },
  {
    id: "CERT-002",
    name: "Ana Beatriz Silva",
    role: "Participante",
    iriaId: generateIriaId(12, 'CWB'),
    type: "Participação Geral",
    hash: "ff9e63e18a03bb4b8b6038166c3c582046fa4de77b8f9e6022e3895eefc4a92c",
    issued: true,
    issuedDate: "2026-09-21T18:00:00Z"
  },
  {
    id: "CERT-003",
    name: "Juliana Mendes Costa",
    role: "Participante Especialista",
    iriaId: generateIriaId(104, 'POA'),
    type: "Participação Técnica",
    hash: null,
    issued: false,
    issuedDate: null
  },
  {
    id: "CERT-004",
    name: "Gabriel Oliveira Lima",
    role: "Participante",
    iriaId: generateIriaId(320, 'POA'),
    type: "Participação Geral",
    hash: null,
    issued: false,
    issuedDate: null
  }
];

// 4. Initial System Logs (Live feed simulation)
export const INITIAL_SYSTEM_LOGS = [
  { time: "07:10:14", type: "SYSTEM", message: "IRIA CORE Node Ovar — Curitiba (CWB-01) inicializado com sucesso." },
  { time: "07:11:02", type: "SECURITY", message: "Conexão encriptada estabelecida com ecossistema Cyntreon Core." },
  { time: "07:15:45", type: "API", message: "Conexão estabelecida com servidor de dados Lumina local." },
  { time: "08:05:22", type: "CHECKIN", message: "Participante (Orador) BRA-CWB-2026-000183 credenciado." },
  { time: "08:12:30", type: "LUMINA", message: "Sincronização de dados do participante BRA-CWB-2026-000183 concluída." },
  { time: "08:32:11", type: "CHECKIN", message: "Participante BRA-CWB-2026-000012 credenciado por QR-Code." },
  { time: "08:45:00", type: "LUMINA", message: "Teste de biofeedback Lumina concluído para BRA-CWB-2026-000012 [Operador: Marcos Vinicius]." }
];

// 5. General Platform Metrics
export const PLATFORM_METRICS = {
  totalRegistered: 1250,
  checkinPercentage: 62.4,
  luminaExamsCompleted: 342,
  certificatesIssued: 412,
  leadsGenerated: 189,
  estimatedRevenue: 375400.00
};
