# Reuniões de Inflexão PR2X

Aplicação React + Vite com narrativa inicial em slideshow e painel editorial interativo da metodologia PR2X.

## Requisitos

- Node.js 20+
- npm 10+

## Execução local

1. Instalar dependências:
   npm install
2. Iniciar ambiente de desenvolvimento:
   npm run dev

## Build de produção

1. Gerar build:
   npm run build
2. Pré-visualizar localmente:
   npm run preview

## Publicação no GitHub Pages

O projeto já está configurado com base path e scripts de deploy.

1. Garantir que o repositório remoto seja:
   https://github.com/dmenezes007/reunioes-de-inflexao-pr2x.git
2. Executar deploy:
   npm run deploy

O script publica a pasta dist na branch gh-pages.

## Publicação no Vercel

Configuração recomendada:

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist
- Install Command: npm install

Como o app é estático, não há necessidade de funções serverless.
