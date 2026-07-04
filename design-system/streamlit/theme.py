"""MB.dark: tema visual do portfólio aplicado ao Streamlit.

Uso, no início do app.py:

    from theme import apply_theme
    apply_theme()

O grosso do tema vem do .streamlit/config.toml; este módulo injeta a fonte
Montserrat e o refinamento (botões-pílula, cards, métricas) via CSS.
Seletores do Streamlit mudam entre versões; se algo deixar de pegar,
o app continua funcional, só perde o refinamento daquele componente.
"""

import streamlit as st

_CSS = """
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* ---------- base ---------- */
html, body, [class*="css"], [data-testid="stAppViewContainer"] {
    font-family: 'Montserrat', system-ui, sans-serif;
    color-scheme: dark;
}

/* ---------- tipografia ---------- */
h1 {
    font-weight: 800 !important;
    letter-spacing: -0.03em;
}
h2, h3 {
    font-weight: 700 !important;
    letter-spacing: -0.02em;
}

/* ---------- sidebar ---------- */
[data-testid="stSidebar"] {
    background-color: #0a0a0c;
    border-right: 1px solid rgba(255, 255, 255, 0.08);
}

/* ---------- botões: pílula estilo MB.dark ---------- */
.stButton > button, .stDownloadButton > button {
    border-radius: 999px;
    font-weight: 600;
    padding: 0.6rem 1.8rem;
    border: none;
    background: #f5f5f7;
    color: #000000;
    transition: transform 0.2s ease, opacity 0.2s ease;
}
.stButton > button:hover, .stDownloadButton > button:hover {
    transform: scale(1.03);
    opacity: 0.9;
    color: #000000;
}
.stButton > button:active, .stDownloadButton > button:active {
    transform: scale(0.98);
}
/* botão secundário (kind="secondary") vira ghost grafite */
.stButton > button[kind="secondary"] {
    background: #1c1c1e;
    color: #f5f5f7;
}
.stButton > button[kind="secondary"]:hover {
    background: #2c2c2e;
    color: #f5f5f7;
}

/* ---------- métricas: número roxo, rótulo discreto ---------- */
[data-testid="stMetricValue"] {
    color: #bf5af2;
    font-weight: 800;
    letter-spacing: -0.02em;
}
[data-testid="stMetricLabel"] {
    color: #a1a1a6;
    font-weight: 500;
}

/* ---------- containers com borda viram cards ---------- */
[data-testid="stVerticalBlockBorderWrapper"] > div {
    border-radius: 18px;
}
div[data-testid="stExpander"] details {
    background: #141416;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px;
}

/* ---------- inputs ---------- */
[data-testid="stNumberInput"] input,
[data-testid="stTextInput"] input,
[data-baseweb="select"] > div {
    background-color: #1c1c1e !important;
    border-radius: 10px;
}

/* ---------- tabelas e dataframes ---------- */
[data-testid="stDataFrame"] {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
}

/* ---------- detalhes ---------- */
a { color: #bf5af2; }
hr { border-color: rgba(255, 255, 255, 0.08); }
</style>
"""


def apply_theme() -> None:
    """Injeta o CSS do MB.dark na página atual."""
    st.markdown(_CSS, unsafe_allow_html=True)
