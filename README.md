# Reunioes de Inflexao PR2X

Aplicacao React + Vite com narrativa inicial em slideshow e painel editorial interativo da metodologia PR2X.

## Requisitos

- Node.js 20+
- npm 10+

## Execucao local

1. Instalar dependencias:
   npm install
2. Iniciar ambiente de desenvolvimento:
   npm run dev

## Build de producao

1. Gerar build:
   npm run build
2. Previsualizar localmente:
   npm run preview

## Publicacao no GitHub Pages

O projeto ja esta configurado com base path e scripts de deploy.

1. Garantir que o repositorio remoto seja:
   https://github.com/dmenezes007/reunioes-de-inflexao-pr2x.git
2. Executar deploy:
   npm run deploy

O script publica a pasta dist na branch gh-pages.

## Publicacao no Vercel

Configuracao recomendada:

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist
- Install Command: npm install

Como o app e estatico, nao ha necessidade de funcoes serverless.
