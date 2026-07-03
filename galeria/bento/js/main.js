/* ============================================================
   Portfólio — Murilo Barreiro
   i18n PT/EN · reveal on scroll · contadores · nav
   ============================================================ */

/* ---------- i18n ---------- */
const I18N = {
  pt: {
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.stack": "Stack",
    "nav.contact": "Contato",

    "hero.hello": "Olá, eu sou",
    "hero.roles": "Engenharia de Dados · BI · Ciência de Dados",
    "hero.tagline": "Transformo dados brutos em decisões: pipelines ETL/ELT, modelagem dimensional, BI e IA aplicada no mercado financeiro.",
    "hero.ctaProjects": "Ver projetos",
    "hero.ctaCv": "Baixar CV",

    "about.title": "Sobre mim",
    "about.p1": "Sou profissional de dados com atuação no mercado financeiro, na ponte entre engenharia de dados e áreas de negócio. Construo e orquestro pipelines ETL/ELT integrando APIs, bancos relacionais e arquivos externos, com foco em automação, reprocessamento seguro e performance.",
    "about.p2": "Desenvolvo modelagem dimensional (Star Schema) para consumo analítico, automatizo relatórios gerenciais e dashboards, e aplico IA na prática — de transcrição e diarização de áudio a geração de documentos com LLMs. Minha vivência inclui corretora e gestora de recursos: fundos, FIDCs e controladoria.",
    "about.stat1": "anos em dados",
    "about.stat2": "empresas do mercado financeiro",
    "about.stat3": "projetos publicados",
    "about.stat4": "tecnologias na stack",

    "exp.title": "Experiência",
    "exp.j1.period": "02/2025 – Atual",
    "exp.j1.role": "Analista de BI / Dados Pleno",
    "exp.j1.b1": "Pipelines ETL/ELT em Python e SQL integrando APIs, bancos relacionais e arquivos externos, com automação e reprocessamento seguro.",
    "exp.j1.b2": "Orquestração de workflows com Airflow: dependências, políticas de retry, monitoramento de falhas e execução incremental.",
    "exp.j1.b3": "Processos ETL no Pentaho Data Integration (PDI) em ambiente produtivo.",
    "exp.j1.b4": "Modelagem dimensional (Star Schema) sustentando dashboards e análises recorrentes de performance financeira e operacional.",
    "exp.j1.b5": "Otimização de queries e cargas SQL, reduzindo tempo de execução e uso de recursos.",
    "exp.j2.role": "Estagiário / Analista de Dados Jr",
    "exp.j2.b1": "Automação de relatórios financeiros e de performance de ativos, integrando planilhas, bases de dados e dashboards.",
    "exp.j2.b2": "Controladoria diária de fundos fechados (FIDCs), aplicando regras de regulamento e alocação de ativos.",
    "exp.j2.b3": "Automação da geração de relatórios mensais para investidores, consolidando dados financeiros e operacionais.",
    "exp.j2.b4": "Estruturação e manutenção do banco de dados interno, garantindo consistência e confiabilidade das informações.",

    "proj.title": "Projetos",
    "proj.p1.name": "Datamart Analítico em Star Schema",
    "proj.p1.desc": "Modelagem completa de datamart: fatos, dimensões, chaves substitutas e granularidade. Pipelines ETL de carga e atualização com nomenclatura padronizada, modelo lógico, dicionário de dados e fluxo de cargas documentados.",
    "proj.p1.tag4": "Documentação",
    "proj.p1.link1": "Diagrama",
    "proj.p1.link2": "Documentação",
    "proj.p2.name": "Ata de Reunião com IA",
    "proj.p2.desc": "Pipeline 100% em Python que processa reuniões de ponta a ponta: transcrição de áudio com Whisper (faster-whisper), diarização de falantes com Pyannote e geração automática de atas e resumos com LLMs (GPT e Gemini). Modularizado e com logging detalhado.",
    "proj.p3.name": "Simulador de Empacotamento 2D — TCC",
    "proj.p3.desc": "Solução computacional de otimização (problema de empacotamento 2D) desenvolvida como TCC em Engenharia de Produção. Implementação algorítmica com rectpack e interface em Streamlit, aplicando modularização e boas práticas de manutenção de código.",
    "proj.p3.tag4": "Otimização",
    "proj.repo": "Repositório",
    "proj.repo2": "Repositório",

    "stack.title": "Stack técnica",
    "stack.g1": "Linguagens & Análise",
    "stack.g2": "Engenharia de Dados",
    "stack.g3": "Bancos de Dados",
    "stack.g3.t5": "Modelagem Dimensional",
    "stack.g4": "Ciência de Dados & IA",
    "stack.g5.t2": "Fundamentos de serviços de dados",
    "stack.g6": "Formação & Idiomas",
    "edu.degree": "Engenharia de Produção",
    "edu.year": "concluído em 12/2025",
    "edu.lang1": "Português · nativo",
    "edu.lang2": "Inglês · avançado",

    "contact.title": "Contato",
    "contact.text": "Aberto a oportunidades e novos desafios em dados. Se quiser conversar sobre engenharia de dados, BI ou um projeto, me chama!",
    "contact.cta": "Enviar e-mail",

    "footer.text": "Desenvolvido por Murilo Barreiro · Python, SQL & muito café",
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.contact": "Contact",

    "hero.hello": "Hi, I'm",
    "hero.roles": "Data Engineering · BI · Data Science",
    "hero.tagline": "I turn raw data into decisions: ETL/ELT pipelines, dimensional modeling, BI and applied AI in the financial market.",
    "hero.ctaProjects": "View projects",
    "hero.ctaCv": "Download resume",

    "about.title": "About me",
    "about.p1": "I'm a data professional working in the financial market, bridging data engineering and business teams. I build and orchestrate ETL/ELT pipelines integrating APIs, relational databases and external files, focused on automation, safe reprocessing and performance.",
    "about.p2": "I develop dimensional models (Star Schema) for analytical consumption, automate management reports and dashboards, and apply AI in practice — from audio transcription and speaker diarization to document generation with LLMs. My background covers a brokerage and an asset manager: funds, FIDCs and controllership.",
    "about.stat1": "years in data",
    "about.stat2": "financial market companies",
    "about.stat3": "published projects",
    "about.stat4": "technologies in the stack",

    "exp.title": "Experience",
    "exp.j1.period": "02/2025 – Present",
    "exp.j1.role": "Mid-level BI / Data Analyst",
    "exp.j1.b1": "ETL/ELT pipelines in Python and SQL integrating APIs, relational databases and external files, with automation and safe reprocessing.",
    "exp.j1.b2": "Workflow orchestration with Airflow: dependencies, retry policies, failure monitoring and incremental runs.",
    "exp.j1.b3": "ETL processes in Pentaho Data Integration (PDI) in a production environment.",
    "exp.j1.b4": "Dimensional modeling (Star Schema) supporting recurring dashboards and analyses of financial and operational performance.",
    "exp.j1.b5": "SQL query and load optimization, reducing execution time and resource usage.",
    "exp.j2.role": "Data Intern / Jr. Data Analyst",
    "exp.j2.b1": "Automated financial and asset performance reports, integrating spreadsheets, databases and dashboards.",
    "exp.j2.b2": "Daily controllership of closed-end funds (FIDCs), applying fund regulation and asset allocation rules.",
    "exp.j2.b3": "Automated monthly investor reports, consolidating financial and operational data.",
    "exp.j2.b4": "Structured and maintained the internal database, ensuring consistency and reliability of information.",

    "proj.title": "Projects",
    "proj.p1.name": "Analytical Data Mart in Star Schema",
    "proj.p1.desc": "Complete data mart modeling: facts, dimensions, surrogate keys and granularity. ETL pipelines for loading and refresh with standardized naming, plus documented logical model, data dictionary and load flow.",
    "proj.p1.tag4": "Documentation",
    "proj.p1.link1": "Diagram",
    "proj.p1.link2": "Documentation",
    "proj.p2.name": "AI Meeting Minutes",
    "proj.p2.desc": "Fully Python-based pipeline that processes meetings end to end: audio transcription with Whisper (faster-whisper), speaker diarization with Pyannote and automatic minutes/summary generation with LLMs (GPT and Gemini). Modular, with detailed logging.",
    "proj.p3.name": "2D Packing Simulator — Capstone",
    "proj.p3.desc": "Computational optimization solution (2D packing problem) developed as my Production Engineering capstone project. Algorithmic implementation with rectpack and a Streamlit front end, applying modularization and good code-maintenance practices.",
    "proj.p3.tag4": "Optimization",
    "proj.repo": "Repository",
    "proj.repo2": "Repository",

    "stack.title": "Tech stack",
    "stack.g1": "Programming & Analysis",
    "stack.g2": "Data Engineering",
    "stack.g3": "Databases",
    "stack.g3.t5": "Dimensional Modeling",
    "stack.g4": "Data Science & AI",
    "stack.g5.t2": "Data services fundamentals",
    "stack.g6": "Education & Languages",
    "edu.degree": "Production Engineering",
    "edu.year": "graduated 12/2025",
    "edu.lang1": "Portuguese · native",
    "edu.lang2": "English · advanced",

    "contact.title": "Contact",
    "contact.text": "Open to opportunities and new challenges in data. Want to talk about data engineering, BI or a project? Reach out!",
    "contact.cta": "Send an e-mail",

    "footer.text": "Built by Murilo Barreiro · Python, SQL & lots of coffee",
  },
};

const CV_FILES = {
  pt: "assets/cv/Murilo-Barreiro-CV-PT.pdf",
  en: "assets/cv/Murilo-Barreiro-CV-EN.pdf",
};

let currentLang = localStorage.getItem("lang") || "pt";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-toggle__opt").forEach((opt) => {
    opt.classList.toggle("is-active", opt.dataset.lang === lang);
  });

  const cvLink = document.getElementById("cvLink");
  if (cvLink) cvLink.href = CV_FILES[lang];
}

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(currentLang === "pt" ? "en" : "pt");
});

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ---------- Contadores animados ---------- */
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = Number(el.dataset.count);
      const duration = 1200;
      const start = performance.now();

      function step(now) {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      statObserver.unobserve(el);
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll("[data-count]").forEach((el) => statObserver.observe(el));

/* ---------- Nav: sombra, link ativo e menu mobile ---------- */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 10);
});

const sections = document.querySelectorAll("main section[id], section#home");
const navAnchors = document.querySelectorAll(".nav__links a");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navAnchors.forEach((a) =>
        a.classList.toggle("is-active", a.getAttribute("href") === `#${e.target.id}`)
      );
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach((s) => sectionObserver.observe(s));

const burger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  burger.classList.toggle("is-open");
  navLinks.classList.toggle("is-open");
});
navAnchors.forEach((a) =>
  a.addEventListener("click", () => {
    burger.classList.remove("is-open");
    navLinks.classList.remove("is-open");
  })
);

/* ---------- Init ---------- */
applyLang(currentLang);
