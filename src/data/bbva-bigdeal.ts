// Single source of truth para el BigDeal de BBVA Colombia.
// Toda la página /bigdeals consume estos datos.

export type Status = 'active' | 'partial' | 'gap' | 'excluded';
export type Probability = 'low' | 'medium' | 'high';
export type Severity = 'low' | 'medium' | 'high' | 'critical';

export interface KpiCard {
  icon: string;
  label: string;
  value: string;
  sub?: string;
}

export interface PortfolioRow {
  product: string;
  status: Status;
  current: string;
  target: string;
  critical?: boolean;
}

export interface Agent {
  icon: string;
  name: string;
  function: string;
  impact: string;
  source: string;
}

export interface InvestmentRow {
  component: string;
  acv: string;
  total: string;
  isTotal?: boolean;
}

export interface RoiLeverRow {
  lever: string;
  assumption: string;
  y1: string;
  y2: string;
  y3: string;
  isSubtotal?: boolean;
}

export interface RoiSummaryRow {
  label: string;
  y1: string;
  y2: string;
  y3: string;
  total3y: string;
  tone?: 'positive' | 'negative' | 'gross' | 'net';
}

export interface InactionRow {
  source: string;
  calc: string;
  monthly: string;
  isTotal?: boolean;
}

export interface RoadmapPhase {
  number: string;
  name: string;
  range: string;
  bullets: string[];
  delivers: string;
}

export interface KpiAgentRow {
  agent: string;
  kpi: string;
  okr: string;
  measurement: string;
}

export interface BeforeAfter {
  before: string;
  after: string;
  impact: string;
}

export interface Benchmark {
  icon: string;
  source: string;
  highlight: string;
  detail?: string;
}

export interface Risk {
  risk: string;
  prob: Probability;
  impact: Severity;
  mitigation: string;
}

export interface NextStep {
  task: string;
}

// ============================================================================
// HERO
// ============================================================================

export const heroKpis: KpiCard[] = [
  {
    icon: 'lucide:wallet',
    label: 'ACV Salesforce',
    value: '~$1,050,000',
    sub: 'USD / año'
  },
  {
    icon: 'lucide:trending-up',
    label: 'ROI Año 3',
    value: '+268%',
    sub: 'sobre inversión total'
  },
  {
    icon: 'lucide:globe',
    label: 'Potencial Grupo',
    value: '$10M+',
    sub: 'a nivel BBVA Global'
  }
];

// ============================================================================
// SECCIÓN 2 — Portafolio
// ============================================================================

export const portfolio: PortfolioRow[] = [
  { product: 'Sales Cloud', status: 'active', current: 'Activo (gestión básica)', target: 'Potenciar con AI + FSC' },
  { product: 'Service Cloud', status: 'partial', current: 'Parcial / ausente', target: 'Completo con omnichannel' },
  { product: 'Financial Services Cloud', status: 'gap', current: 'No implementado', target: 'Brecha crítica — base del deal', critical: true },
  { product: 'Data Cloud', status: 'gap', current: 'No implementado', target: 'Brecha estratégica — combustible de agentes', critical: true },
  { product: 'Agentforce', status: 'gap', current: 'No implementado', target: '6 agentes — corazón del deal', critical: true },
  { product: 'Tableau', status: 'gap', current: 'No implementado', target: 'Analytics ejecutivo self-service' },
  { product: 'Marketing Cloud', status: 'partial', current: 'Básico / evaluación', target: 'Upgrade con segmentación IA' },
  { product: 'MuleSoft', status: 'excluded', current: 'Fuera de alcance (decisión del banco)', target: '—' }
];

// ============================================================================
// SECCIÓN 3 — Los 6 Agentes Agentforce
// ============================================================================

export const agents: Agent[] = [
  {
    icon: 'lucide:headset',
    name: 'Agente PQR / PQRS',
    function: 'Resolución autónoma 24/7 de quejas y reclamos',
    impact: '−40 a −60% tiempo de resolución',
    source: 'Salesforce State of Service 2024'
  },
  {
    icon: 'lucide:user-check',
    name: 'Agente Banquero Asistido',
    function: 'Co-piloto: resumen de cliente, NBA, recomendaciones en tiempo real',
    impact: '+25 a +35% productividad por banquero',
    source: 'Benchmark banca Latam FSC'
  },
  {
    icon: 'lucide:megaphone',
    name: 'Agente de Mercadeo',
    function: 'Segmentación dinámica, campañas personalizadas, scoring de audiencias',
    impact: '+30 a +40% conversión de campañas',
    source: 'Salesforce Marketing Intelligence Report'
  },
  {
    icon: 'lucide:bar-chart-3',
    name: 'Agente de Análisis de Datos',
    function: 'Insights sobre comportamiento financiero y riesgo',
    impact: 'Decisiones en minutos vs. días',
    source: 'IDC Financial Services AI 2024'
  },
  {
    icon: 'lucide:target',
    name: 'Agente de Leads',
    function: 'Identificación proactiva de prospectos de alto valor',
    impact: 'Pipeline más predecible',
    source: 'McKinsey Banking on AI 2024'
  },
  {
    icon: 'lucide:line-chart',
    name: 'Agente de Inversiones',
    function: 'Recomendación de productos de inversión basada en perfil de cliente',
    impact: '+15 a +20% wallet share',
    source: 'McKinsey Banking on AI 2024'
  }
];

// ============================================================================
// SECCIÓN 4 — Inversión
// ============================================================================

export const investment: InvestmentRow[] = [
  { component: 'Financial Services Cloud', acv: '$180,000', total: '$220,000' },
  { component: 'Data Cloud', acv: '$220,000', total: '$270,000' },
  { component: 'Agentforce — 6 Agentes', acv: '$280,000', total: '$380,000' },
  { component: 'Service Cloud (upgrade)', acv: '$90,000', total: '$110,000' },
  { component: 'Tableau', acv: '$80,000', total: '$95,000' },
  { component: 'Marketing Cloud (upgrade)', acv: '$60,000', total: '$70,000' },
  { component: 'Salesforce Shield + Governance', acv: '$50,000', total: '$55,000' },
  { component: 'Change Management / Adopción', acv: '—', total: '$40,000' },
  { component: 'TOTAL', acv: '~$960,000 – $1,050,000', total: '~$1,240,000 – $1,380,000', isTotal: true }
];

// ============================================================================
// SECCIÓN 5 — Modelo de ROI
// ============================================================================

export const roiLevel1: RoiLeverRow[] = [
  {
    lever: 'Reducción carga contact center (Agente PQR)',
    assumption: '40% reducción, ~200 agentes CC, $8K USD/año c/u',
    y1: '$320,000', y2: '$380,000', y3: '$420,000'
  },
  {
    lever: 'Reducción tiempo resolución PQR (−45%)',
    assumption: 'Menos reprocesos, más casos en 1er contacto',
    y1: '$60,000', y2: '$80,000', y3: '$100,000'
  },
  {
    lever: 'Eliminación reportes manuales TI (Tableau)',
    assumption: '5 analistas × 20h/sem × 52 sem × $25/h = $130K → 60% liberado',
    y1: '$78,000', y2: '$90,000', y3: '$95,000'
  },
  {
    lever: 'Subtotal Nivel 1',
    assumption: '',
    y1: '$458,000', y2: '$550,000', y3: '$615,000', isSubtotal: true
  }
];

export const roiLevel2: RoiLeverRow[] = [
  {
    lever: 'Productividad banquero (+25%)',
    assumption: '800 banqueros, agente desde mes 5 → 7 meses impacto año 1, $50K revenue/banquero',
    y1: '$583,000', y2: '$1,000,000', y3: '$1,100,000'
  },
  {
    lever: 'Cross-sell / up-sell con NBA (+15% wallet share)',
    assumption: 'Agente Inversiones desde mes 8 → 5 meses de impacto año 1',
    y1: '$120,000', y2: '$420,000', y3: '$580,000'
  },
  {
    lever: 'Mejora conversión campañas (+30%)',
    assumption: 'Agente Mercadeo desde mes 7, presupuesto marketing $2M/año',
    y1: '$250,000', y2: '$600,000', y3: '$700,000'
  },
  {
    lever: 'Subtotal Nivel 2',
    assumption: '',
    y1: '$953,000', y2: '$2,020,000', y3: '$2,380,000', isSubtotal: true
  }
];

export const roiLevel3: RoiLeverRow[] = [
  {
    lever: 'Reducción churn clientes (−20%)',
    assumption: 'Clientes retenidos × margen promedio',
    y1: '$80,000', y2: '$180,000', y3: '$280,000'
  },
  {
    lever: 'Reducción costo adquisición de clientes',
    assumption: 'Agente de Leads reduce CAC 10%',
    y1: '$50,000', y2: '$120,000', y3: '$180,000'
  },
  {
    lever: 'Evitar costo de no-conformidad regulatoria',
    assumption: 'Einstein Trust Layer + Shield evita multas SFC',
    y1: '$30,000', y2: '$60,000', y3: '$80,000'
  },
  {
    lever: 'Subtotal Nivel 3',
    assumption: '',
    y1: '$160,000', y2: '$360,000', y3: '$540,000', isSubtotal: true
  }
];

export const roiSummary: RoiSummaryRow[] = [
  { label: 'Nivel 1 — Eficiencias operativas', y1: '$458,000', y2: '$550,000', y3: '$615,000', total3y: '$1,623,000' },
  { label: 'Nivel 2 — Ingresos incrementales', y1: '$953,000', y2: '$2,020,000', y3: '$2,380,000', total3y: '$5,353,000' },
  { label: 'Nivel 3 — Beneficios estratégicos', y1: '$160,000', y2: '$360,000', y3: '$540,000', total3y: '$1,060,000' },
  { label: 'Beneficio Bruto Total', y1: '$1,571,000', y2: '$2,930,000', y3: '$3,535,000', total3y: '$8,036,000', tone: 'gross' },
  { label: 'Inversión total banco', y1: '($1,380,000)', y2: '($960,000)', y3: '($960,000)', total3y: '($3,300,000)', tone: 'negative' },
  { label: 'Beneficio Neto', y1: '$191,000', y2: '$1,970,000', y3: '$2,575,000', total3y: '$4,736,000', tone: 'net' }
];

export const roiBadges = {
  y1: { label: '+14%', tone: 'amber' as const, blurb: 'Conservador y honesto' },
  y2: { label: '+205%', tone: 'green' as const, blurb: 'Inversión baja a solo licencias' },
  y3: { label: '+268%', tone: 'green-bright' as const, blurb: 'Caso de éxito certificado' },
  total: { label: '1.44x neto', tone: 'green' as const, blurb: 'Beneficio neto / inversión' }
};

// ============================================================================
// SECCIÓN 6 — Costo de inacción
// ============================================================================

export const inaction: InactionRow[] = [
  {
    source: 'Exceso operativo contact center (no automatizado)',
    calc: '80 FTEs equiv. × $8,000/año ÷ 12',
    monthly: '$26,667'
  },
  {
    source: 'Revenue perdido por banqueros sin NBA',
    calc: '800 banqueros × 1 opp perdida/mes × $25 margen',
    monthly: '$20,000'
  },
  {
    source: 'Campañas de marketing con baja conversión',
    calc: '30% diferencial sobre $167K/mes presupuesto',
    monthly: '$50,000'
  },
  {
    source: 'Total costo mensual de la inacción',
    calc: '',
    monthly: '~$97,000/mes',
    isTotal: true
  }
];

// ============================================================================
// SECCIÓN 7 — Roadmap
// ============================================================================

export const roadmap: RoadmapPhase[] = [
  {
    number: '00',
    name: 'Cimientos de Datos',
    range: 'Mes 1-2',
    bullets: [
      'Data Cloud: ingesta core bancario + app móvil + web',
      'Identity Resolution — Primer perfil 360°'
    ],
    delivers: 'Dashboards ejecutivos en Tableau desde semana 6'
  },
  {
    number: '01',
    name: 'Quick Win PQR',
    range: 'Mes 3-5',
    bullets: [
      'FSC base + Service Cloud',
      'Agente PQR en producción'
    ],
    delivers: 'PRIMER ROI TANGIBLE — Mes 5: −40% carga contact center'
  },
  {
    number: '02',
    name: 'Productividad Banqueros',
    range: 'Mes 5-8',
    bullets: [
      'Agente Banquero Asistido en producción',
      'Agente de Leads'
    ],
    delivers: 'Banqueros con NBA + pipeline predecible desde mes 6'
  },
  {
    number: '03',
    name: 'Crecimiento de Ingresos',
    range: 'Mes 7-10',
    bullets: [
      'Agente de Mercadeo + Agente de Inversiones'
    ],
    delivers: 'Cross-sell activo, campañas personalizadas, AUM creciendo'
  },
  {
    number: '04',
    name: 'Optimización y Escala',
    range: 'Mes 10-14',
    bullets: [
      'Agente de Análisis de Datos',
      'Refinamiento de modelos + Tableau ejecutivo completo'
    ],
    delivers: 'Primera medición formal de ROI — Caso de éxito para GAM/Grupo'
  }
];

// ============================================================================
// SECCIÓN 8 — KPIs por agente
// ============================================================================

export const agentKpis: KpiAgentRow[] = [
  { agent: 'Agente PQR', kpi: '% casos resueltos sin humano', okr: '60% resolución autónoma a 6 meses', measurement: 'Contact Center Dashboard' },
  { agent: 'Agente Banquero', kpi: 'Clientes atendidos/semana', okr: '+30% productividad en 9 meses', measurement: 'CRM Activity Reporting' },
  { agent: 'Agente Mercadeo', kpi: 'Tasa de conversión campañas', okr: '+35% conversión vs. baseline a 12 meses', measurement: 'Marketing Cloud Analytics' },
  { agent: 'Agente Leads', kpi: '% leads calificados vs. contactados', okr: '+25% pipeline calificado en 9 meses', measurement: 'Salesforce Pipeline Reports' },
  { agent: 'Agente Inversiones', kpi: 'AUM promedio por cliente', okr: '+15% AUM por cliente en 12 meses', measurement: 'FSC Wealth Dashboard' },
  { agent: 'Agente de Datos', kpi: 'Tiempo de generación de insight', okr: 'De 2 días a 30 min en 6 meses', measurement: 'Tableau Usage Metrics' }
];

// ============================================================================
// SECCIÓN 9 — Antes / Después
// ============================================================================

export const beforeAfter: BeforeAfter[] = [
  {
    before: 'PQR — 3-5 días de resolución promedio',
    after: 'PQR — 4 minutos con Agente IA (benchmark FINS Feb 2026)',
    impact: '+25-30 puntos NPS · segmento servicio'
  },
  {
    before: 'Banquero llega a reunión sin preparación completa del cliente',
    after: 'Resumen 360° del cliente generado por IA antes de cada reunión',
    impact: '+20 puntos NPS · segmento private/select'
  },
  {
    before: 'Campañas masivas con baja personalización',
    after: 'Campañas hiperpersonalizadas basadas en señales de comportamiento real',
    impact: '+15 puntos NPS · segmento digital'
  }
];

// ============================================================================
// SECCIÓN 10 — Benchmarks
// ============================================================================

export const benchmarks: Benchmark[] = [
  {
    icon: 'lucide:bar-chart-3',
    source: 'Forrester TEI — Service Cloud',
    highlight: '248% ROI a 3 años en enterprise',
    detail: '$14.6M NPV en implementaciones a escala BBVA Colombia'
  },
  {
    icon: 'lucide:landmark',
    source: 'McKinsey "Banking on AI" 2024',
    highlight: '+15-20% wallet share',
    detail: 'con NBA y agentes de inversión'
  },
  {
    icon: 'lucide:trending-up',
    source: 'IDC Financial Services AI Report 2024',
    highlight: '−20% churn',
    detail: 'con perfilado predictivo de clientes'
  },
  {
    icon: 'lucide:wrench',
    source: 'Salesforce State of Service 2024',
    highlight: '−45% tiempo de resolución',
    detail: 'con IA en contact center'
  },
  {
    icon: 'lucide:check-circle-2',
    source: 'Salesforce Customer Success Metrics FY26 Q3',
    highlight: '92-100% ROI positivo',
    detail: 'en todos los sectores · +30-42% productividad con IA'
  },
  {
    icon: 'lucide:rocket',
    source: 'Salesforce FY26 — Marc Benioff',
    highlight: '29,000+ deals Agentforce en 15 meses',
    detail: 'ARR +169% YoY · 68% resolución sin humano en help.salesforce.com'
  }
];

// ============================================================================
// SECCIÓN 11 — Riesgos
// ============================================================================

export const risks: Risk[] = [
  {
    risk: 'Calidad de datos del core bancario',
    prob: 'high', impact: 'high',
    mitigation: 'Data Cloud con herramientas de limpieza nativas. Fase 0 dedicada a assessment.'
  },
  {
    risk: 'Sin MuleSoft: integraciones complejas',
    prob: 'medium', impact: 'medium',
    mitigation: 'APIs REST nativas + conectores Salesforce. Tiempo adicional en Fase 0.'
  },
  {
    risk: 'Resistencia cultural de banqueros',
    prob: 'medium', impact: 'high',
    mitigation: 'Change management desde Fase 1. Banqueros son los primeros en ver el beneficio.'
  },
  {
    risk: 'Expectativas del C-Suite desalineadas',
    prob: 'medium', impact: 'high',
    mitigation: 'Este business case es la herramienta de gestión de expectativas. Presentar antes de firmar.'
  },
  {
    risk: 'Cumplimiento SFC y Habeas Data',
    prob: 'low', impact: 'critical',
    mitigation: 'Einstein Trust Layer + Shield + Data Cloud Privacy. Involucrar legal BBVA desde Fase 0.'
  }
];

// ============================================================================
// SECCIÓN 12 — Efecto Grupo
// ============================================================================

export const groupCountries = [
  { flag: '🇨🇴', name: 'Colombia', highlight: true },
  { flag: '🇲🇽', name: 'México' },
  { flag: '🇵🇪', name: 'Perú' },
  { flag: '🇦🇷', name: 'Argentina' },
  { flag: '🇪🇸', name: 'España' },
  { flag: '🇹🇷', name: 'Turquía' }
];

// ============================================================================
// SECCIÓN 13 — Próximos pasos
// ============================================================================

export const nextSteps: NextStep[] = [
  { task: 'Executive Briefing: CIO, CDO, VP Digital, CFO de BBVA Colombia — presentar este business case' },
  { task: 'Demo viva Agente PQR + Banquero (construida en Claude Code para BBVA)' },
  { task: 'Solicitar apoyo Industry GTM FSI/Banking para presentación ante C-Suite' },
  { task: 'Estructurar ramp deal 3 años con Deal Desk (año 1 completo, años 2-3 con escalera de valor)' },
  { task: 'Identificar partner implementador certificado FSI en Colombia (Deloitte / Accenture CO)' },
  { task: 'Validar DPA y cumplimiento SFC con equipo legal Salesforce + BBVA' },
  { task: 'Activar conversación con GAM desde el inicio — no al final' },
  { task: 'Solicitar referencia BBVA México o banco Latam con caso similar (Bancolombia Agentforce)' }
];
