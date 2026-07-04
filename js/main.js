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
    "about.p2": "Desenvolvo modelagem dimensional (Star Schema) para consumo analítico, automatizo relatórios gerenciais e dashboards, e aplico IA na prática, de transcrição e diarização de áudio à geração de documentos com LLMs. Minha vivência inclui corretora e gestora de recursos: fundos, FIDCs e controladoria.",
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
    "proj.p1.name": "Data Mart de Receita em Star Schema",
    "proj.p1.desc": "Receita da assessoria consolidada de fontes em SQL Server, Oracle e APIs num modelo estrela: staging, cargas incrementais orquestradas no Airflow e duas fatos, uma de receita e uma de metas mensais.",
    "proj.p1.tag4": "Documentação",
    "proj.p1.link1": "Diagrama",
    "proj.p1.link2": "Documentação",
    "proj.p2.name": "Ata de Reunião com IA",
    "proj.p2.desc": "Pipeline 100% em Python que processa reuniões de ponta a ponta: transcrição de áudio com Whisper (faster-whisper), diarização de falantes com Pyannote e geração automática de atas e resumos com LLMs (GPT e Gemini). Modularizado e com logging detalhado.",
    "proj.p3.name": "Simulador de Empacotamento 2D (TCC)",
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

    "proj.case1": "Ver case completo",
    "proj.case2": "Ver case completo",
    "proj.case3": "Ver case completo",
    "case.back": "← Voltar aos projetos",
    "case.repo": "Ver repositório",
    "case.repo2": "Ver repositório",
    "case.ctxTitle": "O contexto",
    "case.ctxTitle2": "O contexto",
    "case.solTitle": "A solução",
    "case.solTitle2": "A solução",
    "case.hlTitle": "Destaques técnicos",
    "case.hlTitle2": "Destaques técnicos",
    "case.next.dm": "Próximo case: Data Mart de Receita →",
    "case.next.ata": "Próximo case: Ata de Reunião com IA →",
    "case.next.sim": "Próximo case: Simulador de Empacotamento 2D →",

    "case.sim.title": "Simulador de Empacotamento 2D",
    "case.sim.subtitle": "Otimização de corte para reduzir desperdício de matéria-prima, desenvolvido como TCC em Engenharia de Produção no Instituto Mauá de Tecnologia.",
    "case.sim.ctx": "Gráficas e indústrias cortam rótulos e adesivos a partir de folhas grandes de matéria-prima. Quando o arranjo das peças na folha é definido manualmente, sobra material entre os cortes, e cada ponto percentual de desperdício vira custo direto de insumo. O problema de decidir o melhor arranjo é um clássico da pesquisa operacional: o 2D bin packing, computacionalmente intratável de resolver por força bruta.",
    "case.sim.sol": "Um simulador interativo em Streamlit: o usuário informa as dimensões da folha, margens, espaçamento entre peças e o mix de rótulos do pedido. O motor de otimização testa heurísticas clássicas de empacotamento (MaxRects, Guillotine e Skyline, via rectpack), busca o menor número de folhas capaz de alocar todas as peças e apresenta o layout de corte com métricas de utilização e desperdício, com exportação em PNG e CSV.",
    "case.sim.fig1": "Saída real do motor do simulador: 54 rótulos de 4 tamanhos alocados em folha de 300×500 mm com 81,5% de utilização da área útil.",
    "case.sim.fig2": "O mesmo pedido resolvido por três heurísticas. Comparar estratégias antes de cortar é justamente o valor do simulador.",
    "case.sim.h1": "Busca incremental do número mínimo de folhas, partindo do limite inferior teórico (área total ÷ área útil) e dobrando até alocar todas as peças.",
    "case.sim.h2": "Precisão dimensional: cálculos em décimos de milímetro com inteiros, evitando erros de ponto flutuante no encaixe.",
    "case.sim.h3": "Dois modos de operação: agrupado (mistura rótulos para máximo aproveitamento) e único (uma folha por tipo de rótulo).",
    "case.sim.h4": "Suporte a rotação de peças, margens de impressão e espaçamento de corte configuráveis.",
    "case.sim.h5": "Arquitetura modular (packing · plotting · utils) com separação clara entre motor de otimização e interface.",

    "case.dm.title": "Data Mart de Receita",
    "case.dm.subtitle": "Receita da assessoria de investimentos, vinda de fontes em SQL Server, Oracle e APIs externas, consolidada em um modelo estrela no SQL Server com ETL orquestrado no Airflow.",
    "case.dm.link1": "Diagrama interativo (dbdocs)",
    "case.dm.link2": "Documentação (Notion)",
    "case.dm.ctx": "O time de assessoria de investimentos apura receita a partir de fontes heterogêneas: renda fixa, renda variável, fundos e outros produtos, distribuídos entre SQL Server, Oracle e APIs externas. Cada fonte tem estrutura, granularidade e regras de negócio próprias. Sem um processo estruturado de integração, era inviável analisar receita consolidada, produtividade dos assessores e evolução de carteira.",
    "case.dm.sol": "Modelei e implementei um data mart dimensional em esquema estrela no SQL Server, com pipeline de ETL orquestrado no Airflow. Os dados brutos das diferentes origens chegam a uma camada de staging, onde são padronizados e conformados com as chaves substitutas do modelo, e só então entram nas tabelas fato e dimensão por carga incremental.",
    "case.dm.fig1": "O modelo real resumido: duas fatos e seis dimensões. O diagrama completo, com todas as colunas e relacionamentos, está publicado no dbdocs.",
    "case.dm.archTitle": "A arquitetura",
    "case.dm.a1": "FatoReceita concentra o negócio: granularidade por data, cliente e produto, com quantidade de negócios, valor bruto e receitas bruta e líquida. Chave primária composta e FKs para todas as dimensões.",
    "case.dm.a2": "FatoMetaMensal fica isolada da fato de receita e relaciona owner, tipo de meta e mês ao valor-alvo, o que permite comparar receita realizada contra a meta.",
    "case.dm.a3": "Seis dimensões dão contexto: cliente (cadastro, perfil e vínculo com o CRM), produto (categoria, subcategoria e emissor), assessor e owner (hierarquia comercial), calendário completo com flags de pregão e feriado, e tipos de meta com unidade de medida.",
    "case.dm.a4": "A staging recebe os dados brutos identificados por fonte, com tipos flexíveis e sem chaves, servindo de área de validação e reprocessamento antes da carga final.",
    "case.dm.decTitle": "Decisões técnicas",
    "case.dm.h1": "Índices covering na FatoReceita para os principais padrões de consulta (por cliente, por data e assessor, por owner, por produto), cada um incluindo as colunas de valor mais consultadas para responder dashboards sem lookup na tabela base.",
    "case.dm.h2": "Coluna computada de semestre na dimensão de calendário, evitando lógica duplicada nas consultas de BI.",
    "case.dm.h3": "Constraints de FK com WITH CHECK desde a criação, impedindo que dados órfãos das múltiplas fontes cheguem à camada dimensional.",
    "case.dm.h4": "Separação clara entre staging (schema flexível, sem PK) e camada dimensional (tipagem estrita, PKs e FKs), permitindo validar e reprocessar antes da carga final.",
    "case.dm.h5": "Airflow unificando a ingestão de fontes com stacks distintas (SQL Server, Oracle e APIs) num único fluxo controlado e agendado.",
    "case.dm.resTitle": "O resultado",
    "case.dm.res": "Receita de múltiplas fontes consolidada em um único modelo dimensional, com performance adequada para os dashboards de BI e para o acompanhamento de metas por owner e mês.",

    "case.ata.title": "Ata de Reunião com IA",
    "case.ata.subtitle": "Pipeline 100% Python que transforma a gravação de uma reunião em ata estruturada: transcrição, identificação de falantes e geração de resumo com LLMs.",
    "case.ata.ctx": "Reuniões entre assessores de investimento e clientes precisam de registro fiel do que foi discutido, decidido e prometido. Fazer isso manualmente consome tempo de quem deveria estar atendendo e produz atas inconsistentes. A combinação de modelos de speech-to-text, diarização e LLMs torna possível automatizar o fluxo inteiro.",
    "case.ata.sol": "Um pipeline modular que recebe áudio ou vídeo (inclusive em lote), normaliza com FFmpeg, transcreve com faster-whisper, identifica quem falou em cada trecho com Pyannote, alinha falante e fala, e envia a transcrição estruturada para um LLM (GPT ou Gemini, configurável) gerar ata e resumo em markdown, com logging detalhado em cada etapa.",
    "case.ata.fig1": "As sete etapas do pipeline. Cada bloco é um módulo Python independente.",
    "case.ata.sample": "## Ata: Reunião de acompanhamento (exemplo ilustrativo)\n\n**Participantes:** FALANTE_01 (assessor), FALANTE_02 (cliente)\n\n**Resumo:** revisão trimestral da carteira; cliente demonstrou\ninteresse em aumentar exposição a renda fixa indexada.\n\n**Decisões:**\n- Rebalancear 15% da carteira para CDBs pós-fixados\n- Agendar nova revisão para o próximo trimestre\n\n**Pendências:**\n- Assessor: enviar comparativo de fundos até sexta-feira",
    "case.ata.fig2": "Formato da ata gerada, com dados fictícios de exemplo.",
    "case.ata.h1": "Diarização com atribuição de falas: a transcrição final indica quem disse o quê, com timestamps, requisito para uma ata ter valor.",
    "case.ata.h2": "Provedor de LLM configurável (OpenAI GPT ou Google Gemini) sem mudança de código, só de configuração.",
    "case.ata.h3": "Processamento em lote de múltiplos arquivos, com suporte a formatos de áudio e vídeo via FFmpeg.",
    "case.ata.h4": "Aceleração opcional por GPU (CUDA) na transcrição, com fallback transparente para CPU.",
    "case.ata.h5": "Modularização e logging detalhado por etapa: cada fase do pipeline pode ser reexecutada e auditada isoladamente.",
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
    "about.p2": "I develop dimensional models (Star Schema) for analytical consumption, automate management reports and dashboards, and apply AI in practice, from audio transcription and speaker diarization to document generation with LLMs. My background covers a brokerage and an asset manager: funds, FIDCs and controllership.",
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
    "proj.p1.name": "Revenue Data Mart in Star Schema",
    "proj.p1.desc": "Advisory revenue consolidated from SQL Server, Oracle and API sources into a star schema: staging, incremental loads orchestrated in Airflow and two fact tables, one for revenue and one for monthly targets.",
    "proj.p1.tag4": "Documentation",
    "proj.p1.link1": "Diagram",
    "proj.p1.link2": "Documentation",
    "proj.p2.name": "AI Meeting Minutes",
    "proj.p2.desc": "Fully Python-based pipeline that processes meetings end to end: audio transcription with Whisper (faster-whisper), speaker diarization with Pyannote and automatic minutes/summary generation with LLMs (GPT and Gemini). Modular, with detailed logging.",
    "proj.p3.name": "2D Packing Simulator (Capstone)",
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

    "proj.case1": "View full case study",
    "proj.case2": "View full case study",
    "proj.case3": "View full case study",
    "case.back": "← Back to projects",
    "case.repo": "View repository",
    "case.repo2": "View repository",
    "case.ctxTitle": "The context",
    "case.ctxTitle2": "The context",
    "case.solTitle": "The solution",
    "case.solTitle2": "The solution",
    "case.hlTitle": "Technical highlights",
    "case.hlTitle2": "Technical highlights",
    "case.next.dm": "Next case: Revenue Data Mart →",
    "case.next.ata": "Next case: AI Meeting Minutes →",
    "case.next.sim": "Next case: 2D Packing Simulator →",

    "case.sim.title": "2D Packing Simulator",
    "case.sim.subtitle": "Cutting optimization to reduce raw-material waste, developed as my Production Engineering capstone project at Instituto Mauá de Tecnologia.",
    "case.sim.ctx": "Print shops and industries cut labels and stickers from large sheets of raw material. When the arrangement of pieces is decided manually, material is left over between cuts, and every percentage point of waste is direct input cost. Deciding the best arrangement is a classic operations research problem: 2D bin packing, computationally intractable to solve by brute force.",
    "case.sim.sol": "An interactive Streamlit simulator: the user enters sheet dimensions, margins, spacing between pieces and the label mix of the order. The optimization engine tests classic packing heuristics (MaxRects, Guillotine and Skyline, via rectpack), searches for the minimum number of sheets that fits all pieces and renders the cutting layout with utilization and waste metrics, exportable as PNG and CSV.",
    "case.sim.fig1": "Real output from the simulator engine: 54 labels of 4 sizes packed on a 300×500 mm sheet at 81.5% usable-area utilization.",
    "case.sim.fig2": "The same order solved by three heuristics. Comparing strategies before cutting is exactly the simulator's value.",
    "case.sim.h1": "Incremental search for the minimum number of sheets, starting from the theoretical lower bound (total area ÷ usable area) and doubling until every piece fits.",
    "case.sim.h2": "Dimensional precision: calculations in tenths of a millimeter using integers, avoiding floating-point errors in the fitting.",
    "case.sim.h3": "Two operating modes: grouped (mixes labels for maximum utilization) and single (one sheet per label type).",
    "case.sim.h4": "Support for piece rotation, configurable print margins and cutting spacing.",
    "case.sim.h5": "Modular architecture (packing · plotting · utils) with clear separation between optimization engine and interface.",

    "case.dm.title": "Revenue Data Mart",
    "case.dm.subtitle": "Investment advisory revenue from SQL Server, Oracle and external API sources, consolidated into a star schema on SQL Server with an ETL pipeline orchestrated in Airflow.",
    "case.dm.link1": "Interactive diagram (dbdocs)",
    "case.dm.link2": "Documentation (Notion)",
    "case.dm.ctx": "The investment advisory team calculates revenue from heterogeneous sources: fixed income, equities, funds and other products, spread across SQL Server, Oracle and external APIs. Each source has its own structure, granularity and business rules. Without a structured integration process, there was no viable way to analyze consolidated revenue, advisor productivity or portfolio evolution.",
    "case.dm.sol": "I modeled and implemented a dimensional data mart in a star schema on SQL Server, with an ETL pipeline orchestrated in Airflow. Raw data from the different sources lands in a staging layer, where it is standardized and conformed to the model's surrogate keys, and only then loaded incrementally into the fact and dimension tables.",
    "case.dm.fig1": "The real model, summarized: two fact tables and six dimensions. The full diagram, with every column and relationship, is published on dbdocs.",
    "case.dm.archTitle": "The architecture",
    "case.dm.a1": "FatoReceita holds the core business: granularity by date, client and product, with deal count, gross value and gross and net revenue. Composite primary key and FKs to every dimension.",
    "case.dm.a2": "FatoMetaMensal is kept separate from the revenue fact and relates owner, target type and month to the target value, enabling actual vs. target comparisons.",
    "case.dm.a3": "Six dimensions provide context: client (registration, profile and CRM link), product (category, subcategory and issuer), advisor and owner (commercial hierarchy), a full calendar with trading day and holiday flags, and target types with unit of measure.",
    "case.dm.a4": "Staging receives raw data identified by source, with flexible types and no keys, acting as a validation and reprocessing area before the final load.",
    "case.dm.decTitle": "Technical decisions",
    "case.dm.h1": "Covering indexes on FatoReceita for the main query patterns (by client, by date and advisor, by owner, by product), each including the most queried value columns so dashboards are answered without base-table lookups.",
    "case.dm.h2": "Computed semester column in the calendar dimension, avoiding duplicated logic in BI queries.",
    "case.dm.h3": "FK constraints created WITH CHECK from day one, keeping orphan records from the multiple sources out of the dimensional layer.",
    "case.dm.h4": "Clear separation between staging (flexible schema, no PKs) and the dimensional layer (strict typing, PKs and FKs), allowing validation and reprocessing before the final load.",
    "case.dm.h5": "Airflow unifying the ingestion of sources with different stacks (SQL Server, Oracle and APIs) into a single controlled, scheduled flow.",
    "case.dm.resTitle": "The outcome",
    "case.dm.res": "Revenue from multiple sources consolidated into a single dimensional model, with performance fit for BI dashboards and for tracking targets by owner and month.",

    "case.ata.title": "AI Meeting Minutes",
    "case.ata.subtitle": "Fully Python pipeline that turns a meeting recording into structured minutes: transcription, speaker identification and LLM-generated summary.",
    "case.ata.ctx": "Meetings between investment advisors and clients need a faithful record of what was discussed, decided and promised. Doing it manually consumes time from people who should be serving clients and produces inconsistent minutes. Combining speech-to-text models, diarization and LLMs makes it possible to automate the whole flow.",
    "case.ata.sol": "A modular pipeline that takes audio or video (including batches), normalizes with FFmpeg, transcribes with faster-whisper, identifies who spoke in each segment with Pyannote, aligns speaker and speech, and sends the structured transcript to an LLM (GPT or Gemini, configurable) to generate minutes and a summary in markdown, with detailed logging at every step.",
    "case.ata.fig1": "The seven pipeline stages. Each block is an independent Python module.",
    "case.ata.sample": "## Minutes: Follow-up meeting (illustrative example)\n\n**Participants:** SPEAKER_01 (advisor), SPEAKER_02 (client)\n\n**Summary:** quarterly portfolio review; client showed\ninterest in increasing indexed fixed-income exposure.\n\n**Decisions:**\n- Rebalance 15% of the portfolio into floating-rate CDs\n- Schedule the next review for next quarter\n\n**Action items:**\n- Advisor: send fund comparison by Friday",
    "case.ata.fig2": "Format of the generated minutes, with fictitious example data.",
    "case.ata.h1": "Diarization with speech attribution: the final transcript shows who said what, with timestamps, a requirement for minutes to have value.",
    "case.ata.h2": "Configurable LLM provider (OpenAI GPT or Google Gemini) with no code change, configuration only.",
    "case.ata.h3": "Batch processing of multiple files, with audio and video format support via FFmpeg.",
    "case.ata.h4": "Optional GPU (CUDA) acceleration for transcription, with transparent CPU fallback.",
    "case.ata.h5": "Modularization and detailed per-stage logging: every pipeline phase can be re-run and audited in isolation.",
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
