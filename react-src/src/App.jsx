import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import LayoutPublic from './layouts/LayoutPublic';
import LayoutInternal from './layouts/LayoutInternal';

// Public Pages
import Projeto from './pages/public/Projeto';
import Fases from './pages/public/Fases';
import Programa from './pages/public/Programa';
import Oradores from './pages/public/Oradores';
import Parceiros from './pages/public/Parceiros';
import Institucional from './pages/public/Institucional';
import Press from './pages/public/Press';
import Faqs from './pages/public/Faqs';
import Bilhetes from './pages/public/Bilhetes';
import BilhetesCuritiba from './pages/public/BilhetesCuritiba';
import CheckoutCuritiba from './pages/public/CheckoutCuritiba';
import Login from './pages/public/Login';

// Internal Pages
import Dashboard from './pages/internal/Dashboard';
import Participantes from './pages/internal/Participantes';
import Credenciamento from './pages/internal/Credenciamento';
import Agenda from './pages/internal/Agenda';
import OradoresAdmin from './pages/internal/OradoresAdmin';
import ParceirosAdmin from './pages/internal/ParceirosAdmin';
import LuminaExames from './pages/internal/LuminaExames';
import Certificados from './pages/internal/Certificados';
import Networking from './pages/internal/Networking';
import Leads from './pages/internal/Leads';
import Financeiro from './pages/internal/Financeiro';
import Admin from './pages/internal/Admin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Public Routing Layer */}
        <Route element={<LayoutPublic />}>
          <Route path="/" element={<Navigate to="/projeto" replace />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/fases" element={<Fases />} />
          <Route path="/programa" element={<Programa />} />
          <Route path="/oradores" element={<Oradores />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/press" element={<Press />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/bilhetes" element={<Bilhetes />} />
          <Route path="/bilhetes/curitiba" element={<BilhetesCuritiba />} />
          <Route path="/checkout/curitiba" element={<CheckoutCuritiba />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Internal Routing Layer (Sidebar Control Room) */}
        <Route element={<LayoutInternal />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/participantes" element={<Participantes />} />
          <Route path="/credenciamento" element={<Credenciamento />} />
          <Route path="/agenda-interna" element={<Agenda />} />
          <Route path="/oradores-admin" element={<OradoresAdmin />} />
          <Route path="/parceiros-admin" element={<ParceirosAdmin />} />
          <Route path="/lumina-exames" element={<LuminaExames />} />
          <Route path="/certificados" element={<Certificados />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/admin" element={<Admin />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/projeto" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
