# IASUMMIT — Regenerative AI Intelligence Platform

> Plataforma de Inteligência Artificial Regenerativa do ecossistema Cyntreon.

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-22c55e?style=flat-square)]()
[![IP](https://img.shields.io/badge/IP-CylinderMargin%20LDA-16a34a?style=flat-square)]()
[![Patent](https://img.shields.io/badge/patent-PPP--IA1%20a%20IA5-blue?style=flat-square)]()
[![Infra](https://img.shields.io/badge/infra-Hetzner%20VPS-0284c7?style=flat-square)]()

---

## Visão Geral

O **IASUMMIT** é o motor de Inteligência Artificial Regenerativa da CylinderMargin, desenvolvido no âmbito do programa de inovação deeptech do ecossistema Cyntreon.

Integra-se com os sistemas core — `cyntreon-core`, `BioField-Intelligence` e `Canna-OS-plataform` — para fornecer uma camada de decisão inteligente baseada em dados biológicos, clínicos e ambientais.

---

## Ecossistema Cyntreon

```
cyntreon-core (RPQ36, BSS-576)
    └── IASUMMIT (Regenerative AI Engine)
            ├── BioField-Intelligence (dados agrícolas)
            ├── Canna-OS-plataform (dados clínicos)
            └── sistema-de-monitorizacao (monitorização)
```

---

## Stack Técnica

| Camada | Tecnologia |
|--------|-----------|
| Runtime | Node.js / Python 3.11 |
| IA/ML | PyTorch, Scikit-learn |
| API | FastAPI / Express |
| Base de dados | PostgreSQL |
| Infraestrutura | Docker, Hetzner VPS |

---

## Instalação

```bash
# Clonar repositório
git clone https://github.com/CylinderMargin/IASUMMIT.git
cd IASUMMIT

# Instalar dependências
npm install
# ou
pip install -r requirements.txt

# Configurar variáveis de ambiente
cp .env.example .env

# Iniciar
npm run dev
```

---

## Variáveis de Ambiente

Ver `.env.example` para a lista completa de variáveis necessárias.

---

## Documentação

- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — Arquitectura do sistema
- [`docs/ROADMAP.md`](./docs/ROADMAP.md) — Próximos passos
- [`CHANGELOG.md`](./CHANGELOG.md) — Histórico de versões

---

## Propriedade Intelectual

© 2026 CylinderMargin LDA (NIF 519207769) | Portugal
Cyntreon Holding OÜ | Tallinn, Estonia

Este repositório contém tecnologia proprietária protegida.
Todos os direitos reservados.
Uso não autorizado é expressamente proibido.

Família de patentes: Regenerative AI (PPP-IA1 a PPP-IA5)
