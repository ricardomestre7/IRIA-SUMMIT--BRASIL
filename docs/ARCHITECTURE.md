# Architecture — IASUMMIT

## Overview

IASUMMIT is the Regenerative AI intelligence layer of the Cyntreon ecosystem.
It receives domain signals from BioField-Intelligence and cyntreon-core and produces regenerative AI-driven insights.

## Position in Ecosystem

```
cyntreon-core (RPQ36, BSS-576)
    └── IASUMMIT (Regenerative AI Engine)
            ├── BioField-Intelligence (agricultural domain signals)
            ├── Canna-OS-plataform    (clinical domain signals)
            └── sistema-de-monitorizacao (monitoring signals)
```

## Core Modules

```
src/
├── engine/        Regenerative AI core (PPP-IA1)
├── contracts/     Integration interfaces with cyntreon-core
├── adapters/      Domain signal translators
├── inference/     AI model serving
└── api/           REST / WebSocket endpoints
```

## Data Flow

```
Domain signals (BioField / CannaOS / Monitoring)
    → cyntreon-core (RPQ36 evaluation)
        → IASUMMIT engine (Regenerative AI processing)
            → Regenerative insights + recommendations
```

## IP

Regenerative AI methodology covered by PPP-IA1 a PPP-IA5.
CylinderMargin LDA / Cyntreon Holding OÜ.
