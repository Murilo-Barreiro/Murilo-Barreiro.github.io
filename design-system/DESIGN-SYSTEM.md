# MB.dark — Design System

Identidade visual do portfólio de Murilo Barreiro (murilo-barreiro.github.io), pensada para ser
reaproveitada em qualquer superfície: apps Streamlit, dashboards, slides e documentos.

## Princípios

1. **Preto de verdade.** O fundo é #000000, sem gradientes de fundo. Profundidade vem dos cards, não do fundo.
2. **Uma cor de acento, usada pouco.** O roxo aparece em detalhes: um ponto, um número, um link. Nunca em áreas grandes.
3. **Tipografia faz o trabalho pesado.** Montserrat em pesos altos (700/800) para títulos, com letter-spacing negativo. Hierarquia por peso e tamanho, não por cor.
4. **Movimento sutil.** Hovers de 0.2s a 0.3s com lift pequeno. Nada pisca, nada gira.
5. **Escuro declarado.** Toda página declara `color-scheme: dark` para desativar o dark mode forçado dos navegadores.

## Cores

| Token | Valor | Uso |
|---|---|---|
| `bg` | `#000000` | fundo principal |
| `bg-alt` | `#0a0a0c` | fundo de seções alternadas |
| `card` | `#141416` | superfície de cards |
| `card-hover` | `#1c1c1e` | card em hover, pills e inputs |
| `card-border` | `rgba(255,255,255,0.08)` | bordas de 1px em superfícies |
| `text` | `#f5f5f7` | texto principal |
| `text-dim` | `#a1a1a6` | texto secundário, legendas |
| `pill-text` | `#d1d1d6` | texto dentro de tags |
| `accent` | `#bf5af2` | roxo de acento (links, marcadores, números) |
| `accent-soft` | `rgba(191,90,242,0.14)` | fundo de chips e ícones de destaque |

Regras:
- Texto principal sempre `text` sobre `bg` ou `card` (contraste AAA).
- `accent` nunca como cor de texto corrido, só em elementos pequenos e interativos.
- Fundos de imagens e diagramas devem ser opacos (`card`), nunca transparentes.

## Tipografia

Fonte única: **Montserrat** (Google Fonts), pesos 400, 500, 600, 700 e 800.

| Papel | Tamanho | Peso | Extras |
|---|---|---|---|
| Display (hero) | clamp(2.7rem, 7.5vw, 5rem) | 800 | letter-spacing -0.035em, line-height 1.05 |
| Título de seção | clamp(1.7rem, 4.5vw, 2.4rem) | 800 | letter-spacing -0.025em |
| Título de card | 1.1rem a 1.3rem | 700/800 | letter-spacing -0.015em |
| Corpo | 1rem | 400/500 | line-height 1.65, cor `text-dim` |
| Legenda / caption | 0.82rem | 500 | cor `text-dim` |
| Eyebrow / label | 0.7rem a 0.82rem | 600/700 | uppercase, letter-spacing 0.14em a 0.22em, cor `accent` ou `text-dim` |

## Espaçamento e forma

- Escala de espaçamento: múltiplos de 8px (8, 16, 24, 32, 48, 64, 96).
- Seções: padding vertical de 96px a 100px (72px no mobile).
- Largura máxima de conteúdo: 1000px a 1100px, centralizada.
- Raio de borda: **18px** em cards, **14px a 16px** em ícones-contêiner, **999px** em botões e pills.
- Bordas: 1px `card-border`. Nunca bordas grossas.

## Sombras e elevação

- Repouso: sem sombra ou sombra mínima.
- Hover de card: `translateY(-4px)` ou `scale(1.012~1.025)` + `box-shadow: 0 18px 50px rgba(0,0,0,0.55)`.
- Elementos roxos podem usar glow: `0 8px 22px rgba(191,90,242,0.35)`.

## Componentes

### Botão primário
Pílula branca com texto preto. `background: #f5f5f7; color: #000; border-radius: 999px; padding: 13px 30px; font-weight: 600`. Hover: `scale(1.03)`. Active: `scale(0.98)`.

### Botão secundário (ghost)
Pílula grafite: `background: #1c1c1e; color: #f5f5f7`. Hover clareia para `#2c2c2e`.

### Card
`background: card; border: 1px card-border; border-radius: 18px; padding: 28px a 32px`. Hover: fundo vai a `card-hover`, lift sutil e sombra grande.

### Tag / pill
`background: #1c1c1e; color: #d1d1d6; border-radius: 999px; font-size: 0.72rem; font-weight: 600; padding: 6px 13px`.

### Eyebrow (rótulo de seção)
Texto pequeno, uppercase, tracking largo, em `accent` ou `text-dim`, acima do título.

### Métrica / stat
Número grande (2rem+, peso 700/800) em `accent`, rótulo pequeno em `text-dim` abaixo.

## Movimento

- Transições: 0.2s a 0.3s, easing `ease`.
- Entrada de conteúdo: fade + translateY(24px a 28px), uma vez só, via IntersectionObserver.
- Respeitar `prefers-reduced-motion: reduce` zerando animações.

## Aplicação em Streamlit

Dois arquivos prontos nesta pasta:

- `streamlit/config.toml`: copie para `.streamlit/config.toml` no repo do app. Define o tema nativo (cores de fundo, texto e acento).
- `streamlit/theme.py`: importe e chame `apply_theme()` no início do `app.py`. Injeta a Montserrat e o refinamento visual (botões-pílula, cards, métricas roxas) via CSS.

O tema nativo cobre 80% do visual; o CSS cobre o resto. Se uma versão nova do Streamlit
quebrar algum seletor, o app continua funcional, só perde o refinamento daquele componente.
