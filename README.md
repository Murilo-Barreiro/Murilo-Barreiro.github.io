# Portfólio — Murilo Pereira Barreiro

Portfólio interativo de dados: Engenharia de Dados · BI · Ciência de Dados.

Site estático (HTML/CSS/JS puro, sem dependências) — bilíngue PT/EN, com efeito de
digitação, fundo animado, timeline de experiência, cards de projetos e download de CV.

## Estrutura

```
index.html          # página única com todas as seções
css/styles.css      # tema escuro, responsivo, animações
js/main.js          # typing effect, canvas, i18n PT/EN, scroll reveal
assets/cv/          # CVs em PDF (PT e EN) servidos pelo botão "Baixar CV"
```

## Rodar localmente

```bash
python -m http.server 8765
# abrir http://localhost:8765
```

## Publicar no GitHub Pages (grátis)

1. Crie um repositório chamado `Murilo-Barreiro.github.io` no GitHub
   (com esse nome exato, o site fica em `https://murilo-barreiro.github.io`).
2. Na pasta do projeto:
   ```bash
   git init
   git add index.html css js assets README.md
   git commit -m "Portfólio interativo"
   git branch -M main
   git remote add origin https://github.com/Murilo-Barreiro/Murilo-Barreiro.github.io.git
   git push -u origin main
   ```
3. Em **Settings → Pages**, confirme que a fonte é a branch `main` (raiz).
4. Em alguns minutos o site estará no ar.

> Os PDFs originais dos currículos na raiz da pasta são material de trabalho —
> não precisam ir para o repositório (só os de `assets/cv/` são usados pelo site).
