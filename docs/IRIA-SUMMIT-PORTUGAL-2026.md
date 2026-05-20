# IRIA SUMMIT PORTUGAL 2026

Plataforma web oficial do **IRIA SUMMIT PORTUGAL**, construída em Symfony/Twig para apresentar o ciclo 2026 em três cidades anfitriãs:

- Ovar (Semente)
- Santa Maria da Feira (Raiz)
- Aveiro (Árvore)

Este repositório combina posicionamento institucional, experiência de evento e operação digital (programa, bilhetes, parceiros, institucional, contactos e comunicação).

---

## 1) Visão do projeto

O site foi estruturado para comunicar:

- **identidade** (Inteligência, Regeneração, Inclusão, Ação),
- **trajetória territorial** (3 cidades, 3 escalas),
- **credibilidade institucional** (entidade promotora, continuidade, proteção),
- **ativação de ecossistema** (parceiros, expositores, startups, comunicação).

---

## 2) Stack técnica

- **PHP** `>= 8.2`
- **Symfony** `7.3`
- **Twig** (renderização de templates)
- Frontend em templates Twig + assets estáticos (CSS/JS/imagens)

Dependências principais em [`Landing/composer.json`](Landing/composer.json).

---

## 3) Estrutura de pastas

```text
.
├─ Landing/
│  ├─ api/                      # entrada serverless para Vercel
│  ├─ public/                   # assets estáticos e front controller
│  ├─ src/
│  │  ├─ Controller/            # rotas e renderização
│  │  └─ Kernel.php             # cache/log adaptados para Vercel
│  ├─ templates/
│  │  ├─ index*.html.twig       # variantes de homepage
│  │  └─ partials/              # secções modulares IRIA
│  └─ vercel.json               # configuração Vercel quando Root Directory=Landing
├─ vercel.json                  # configuração Vercel na raiz (produção recomendada)
├─ docker-compose.yml
├─ Dockerfile
└─ start-local.ps1
```

---

## 4) Rotas e renderização

O controlador principal está em [`Landing/src/Controller/DefaultController.php`](Landing/src/Controller/DefaultController.php):

- `/` renderiza `index.html.twig` (home principal),
- `/{path}` tenta renderizar `{path}.html.twig` quando existir.

---

## 5) Secções principais (partials)

Secções editoriais/modulares em [`Landing/templates/partials`](Landing/templates/partials):

- `section-phase-ovar-iria.html.twig`, `section-phase-feira-iria.html.twig`, `section-phase-aveiro-iria.html.twig` (programas oficiais)
- `section-schedule-iria.html.twig` (resumos por cidade)
- `section-tickets-iria.html.twig`
- `section-partners-iria.html.twig`
- `section-institutional-iria.html.twig`
- `section-faq-iria.html.twig`
- `section-contact-emails-iria.html.twig`
- `section-newsletter-iria.html.twig`
- `section-summit-delivers-iria.html.twig`

---

## 6) Executar localmente

### Opção A — PHP + Composer (recomendada para edição)

Pré-requisitos:

- PHP 8.2+
- Composer

No PowerShell:

```powershell
cd C:\Aivent_Symfony_v1.0.0
.\start-local.ps1
```

Com PHP local ativo, o site sobe em:

- `http://127.0.0.1:8000/`

### Opção B — Docker

```powershell
cd C:\Aivent_Symfony_v1.0.0
docker compose up --build
```

No modo Docker:

- `http://127.0.0.1:8080/`

---

## 7) Deploy na Vercel

### Configuração atualmente adotada

A produção usa o `vercel.json` da **raiz**:

- [`vercel.json`](vercel.json)

Este arquivo roteia para `Landing/api/index.php` e serve estáticos de `Landing/public`.

### Variáveis de ambiente recomendadas

No projeto Vercel:

- `APP_ENV=prod`
- `APP_DEBUG=0`
- `APP_SECRET=<valor longo e seguro>`

### Diagnóstico rápido de produção

```powershell
curl -I https://iasummit.vercel.app/
```

Esperado:

- `HTTP/1.1 200 OK`

Se retornar 404:

1. verificar se o deploy mais recente está `Ready`,
2. promover deploy para produção,
3. confirmar domínio associado ao projeto correto.

---

## 8) Branding e conteúdo (boas práticas)

- Manter tom institucional e territorial em todas as secções.
- Evitar termos genéricos herdados de template em inglês.
- Preservar consistência entre home principal e variantes `index-*`.
- Atualizações de copy devem privilegiar:
  - continuidade,
  - cooperação interinstitucional,
  - clareza operacional para parceiros/startups/expositores.

---

## 9) Imagens e assets

Padrão recomendado:

- cidades em `webp`, ideal `1600x1067` (3:2),
- logo preferencialmente SVG (com fallback PNG transparente),
- nomes de ficheiros descritivos e estáveis em `Landing/public/assets/images/...`.

---

## 10) Fluxo de contribuição sugerido

```powershell
git checkout -b feat/nome-curto
# editar
git add -A
git commit -m "feat: descrição objetiva da mudança"
git push -u origin HEAD
```

Para mudanças críticas em conteúdo:

- validar visual na home principal,
- validar âncoras do menu,
- validar variante `index.html.twig` e pelo menos uma variante `index-*`.

---

## 11) Troubleshooting comum

### 404 na Vercel

- Deploy não promovido para produção,
- domínio apontando para projeto/deploy errado,
- configuração de routes não aplicada.

### Mudança “não apareceu”

- cache de browser (usar `Ctrl+F5`),
- deploy ainda em fila ou não concluído,
- commit local não enviado.

### Abas (tabs) com comportamento estranho

- confirmar que o JS de tabs está isolando níveis corretamente,
- evitar acoplamento de handlers entre abas aninhadas.

---

## 12) Entidade e projeto

**IRIA SUMMIT PORTUGAL**  
Projeto concebido, promovido e coordenado pela **CylinderMargin LDA**.

Repositório oficial:

- <https://github.com/CylinderMargin/IASUMMIT>

