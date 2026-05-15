// Single source of truth para el BigDeal de La Previsora S.A.
// Toda la página /bigdeals/la-previsora consume estos datos.

import type { Probability, Severity } from './bbva-bigdeal';

export type { Probability, Severity };

export interface PrKpiCard {
  icon: string;
  label: string;
  value: string;
  sub?: string;
}

export interface PrProfileRow {
  dimension: string;
  detail: string;
}

export interface PrPillar {
  pillar: string;
  pain: string;
  solution: string;
}

export interface PrDealRow {
  component: string;
  description: string;
  acv: string;
  isTotal?: boolean;
  isTarget?: boolean;
}

export interface PrHorizon {
  number: string;
  name: string;
  range: string;
  bullets: string[];
  highlight?: boolean;
}

export interface PrStakeholder {
  name: string;
  role: string;
  alignment: string;
  alignmentLevel: 'high' | 'medium' | 'tech';
  message: string;
}

export interface PrRisk {
  risk: string;
  prob: Probability;
  impact: Severity;
  response: string;
}

export interface PrSuccess {
  category: string;
  text: string;
}

export interface PrNextStep {
  task: string;
}

// ============================================================================
// HERO
// ============================================================================

export const heroKpis: PrKpiCard[] = [
  {
    icon: 'lucide:wallet',
    label: 'ACV Salesforce',
    value: '$766,250',
    sub: 'USD/año · target $1M'
  },
  {
    icon: 'lucide:target',
    label: 'Gap a cerrar',
    value: '~$233,750',
    sub: 'Tableau + Agentforce expansion'
  },
  {
    icon: 'lucide:shield',
    label: 'Sector',
    value: '+2.5M',
    sub: 'asegurados · Grupo Bicentenario'
  }
];

// ============================================================================
// SECCIÓN 1 — Perfil del cliente
// ============================================================================

export const profile: PrProfileRow[] = [
  { dimension: 'Tipo', detail: 'Sociedad de economía mixta' },
  { dimension: 'Antigüedad', detail: '+70 años (fundada 1954)' },
  { dimension: 'Clientes', detail: '+2.5M asegurados en Colombia' },
  { dimension: 'Empleados', detail: '~722 · 1,200+ corredores a nivel nacional' },
  { dimension: 'Facturación', detail: '$650M+ COP anuales' },
  { dimension: 'Footprint Salesforce', detail: 'Cliente activo desde 2021 — Sales Cloud (~500 usuarios)' },
  { dimension: 'Regulación', detail: 'Superintendencia Financiera de Colombia · Ministerio de Hacienda' },
  { dimension: 'Grupo', detail: 'Grupo Bicentenario (economía mixta del Estado colombiano)' },
  { dimension: 'Competidores directos', detail: 'Grupo Sura · AXA Colpatria · Allianz Colombia · Liberty Seguros' }
];

// ============================================================================
// SECCIÓN 3 — 7 Pilares estratégicos
// ============================================================================

export const pillars: PrPillar[] = [
  {
    pillar: 'Cliente Céntrico',
    pain: 'Información fragmentada en 7+ sistemas (SUP, OnBase, ERP, Cobis, AS400, Dynamics, app)',
    solution: 'Financial Services Cloud · Sales Cloud · Data Cloud'
  },
  {
    pillar: 'A un Clic',
    pain: 'Canales presenciales dominantes · baja autogestión · corredores sin visibilidad digital',
    solution: 'Experience Cloud · Digital Engagement (WhatsApp, web, app)'
  },
  {
    pillar: 'Agilidad Empresarial',
    pain: 'Emisión, renovaciones y reclamaciones con procesos manuales · reprocesos frecuentes',
    solution: 'Salesforce Flow · Automatización low-code'
  },
  {
    pillar: 'Decisiones con Datos',
    pain: 'Power BI limitado · sin analítica predictiva · decisiones sobre reportes históricos',
    solution: 'Tableau · Analytics predictivo por ramo, región y canal'
  },
  {
    pillar: 'Innovación Aplicada',
    pain: '~30% de casos de suscripción escalan al centro por brecha técnica local',
    solution: 'Agentforce — Asistente técnico de suscripción (~400 usuarios)'
  },
  {
    pillar: 'Rentabilidad y Sostenibilidad',
    pain: 'Costos operativos altos por ineficiencia y reprocesos',
    solution: 'Automatización + Agentforce reducen costo por transacción'
  },
  {
    pillar: 'Sinergias y Ecosistemas',
    pain: 'Baja visibilidad del rendimiento de corredores y aliados del Grupo Bicentenario',
    solution: 'Service Cloud · Partner Community'
  }
];

// ============================================================================
// SECCIÓN 4 — Estructura del deal
// ============================================================================

export const dealStructure: PrDealRow[] = [
  {
    component: 'Financial Services Cloud — 500 usuarios',
    description: 'CRM unificado para seguros · base del deal',
    acv: '$350,000'
  },
  {
    component: 'Agentforce — Proceso de suscripción',
    description: '~400 usuarios en sucursales · caso de uso ancla',
    acv: '$200,000'
  },
  {
    component: 'Experience Cloud — Omnicanalidad',
    description: 'Portal cliente + Portal corredor + digital engagement',
    acv: '$116,250'
  },
  {
    component: 'Service Cloud',
    description: 'Gestión de casos · centro de contacto omnicanal',
    acv: '$50,000'
  },
  {
    component: 'MuleSoft — Integración (MAF)',
    description: 'Capa de integración con sistemas legacy (SUP, OnBase, AS400, ERP)',
    acv: '$50,000'
  },
  {
    component: 'TOTAL BIG DEAL',
    description: 'Pipeline consolidado',
    acv: '$766,250',
    isTotal: true
  },
  {
    component: 'Target Big Deal',
    description: 'Meta declarada en Big Deal Engine',
    acv: '$1,000,000',
    isTarget: true
  }
];

export const dealGap = {
  amount: '~$233,750',
  path: 'Tableau + Agentforce expansion'
};

// ============================================================================
// SECCIÓN 5 — Anchor: Agentforce para Suscripción
// ============================================================================

export const anchor = {
  title: 'Agentforce para Suscripción Técnica',
  problem:
    '~30% de los casos en ramos complejos (Cumplimiento, RC Servidores Públicos, Daños Materiales Combinados) escalan al centro técnico por brecha de conocimiento local — no por complejidad real del caso.',
  contractContext:
    'La Subgerencia de Transformación Digital tiene pliego de AI vigente, alineado con la Circular Básica Jurídica SFC (CBJ 006 de 2025).',
  features: [
    'Consulta autónoma de manuales técnicos, cláusulas y tablas de delegación',
    'Evaluación asistida de riesgos antes del escalamiento',
    'Trazabilidad completa: fuente de datos + reglas aplicadas + justificación',
    'Supervisión humana siempre — el agente asiste, no decide',
    'Cumplimiento ISO 42001 · NIST AI RMF · CBJ 006 de 2025'
  ],
  scope: '~400 usuarios · todas las sucursales del país',
  successCriterion: '≥85% accuracy en validación documental y evaluación tarifaria'
};

// ============================================================================
// SECCIÓN 6 — Roadmap (3 horizontes)
// ============================================================================

export const horizons: PrHorizon[] = [
  {
    number: 'H1',
    name: 'Fundación y Valor Rápido',
    range: 'Q3 FY27 · Cierre objetivo',
    highlight: true,
    bullets: [
      'Agentforce para suscripción técnica en sucursales (~400 usuarios) — caso de uso ancla',
      'Sales Cloud potenciado con Financial Services Cloud — unificación del CRM existente',
      'Integración básica con SUP y OnBase vía MuleSoft/APIs REST',
      'Quick win: Piloto en 2–3 sucursales para validar accuracy y adopción'
    ]
  },
  {
    number: 'H2',
    name: 'Expansión Digital',
    range: 'Q4 FY27 — H1 FY28',
    bullets: [
      'Experience Cloud: portal de clientes + portal de corredores',
      'Digital Engagement: WhatsApp, web, chat conectados al case management',
      'Salesforce Flow: automatización de emisión, renovaciones y reclamaciones',
      'Service Cloud: gestión omnicanal de centro de contacto'
    ]
  },
  {
    number: 'H3',
    name: 'Empresa Agéntica',
    range: 'H2 FY28 en adelante',
    bullets: [
      'Tableau: analítica ejecutiva por ramo, región y corredor — predictiva de churn y fraude',
      'Agentforce expandido: agente de atención, agente de renovaciones, agente de onboarding',
      'Data Cloud: unificación de datos para alimentar todos los agentes',
      'Partner Community: gestión integral de 1,200+ corredores',
      'Expansión hacia el Grupo Bicentenario como ecosistema'
    ]
  }
];

// ============================================================================
// SECCIÓN 7 — Stakeholders
// ============================================================================

export const stakeholders: PrStakeholder[] = [
  {
    name: 'Charly',
    role: 'Patrocinador · ejecutivo sponsor',
    alignment: 'Alta — validó la visión',
    alignmentLevel: 'high',
    message: '"Salesforce como sistema operativo de la transformación"'
  },
  {
    name: 'Juan David Agudelo',
    role: 'Líder técnico / TD',
    alignment: 'Alta — involucrado en el pliego',
    alignmentLevel: 'high',
    message: '"Cumplimiento normativo + ISO 42001 + entregables medibles"'
  },
  {
    name: 'Subgerencia de TD',
    role: 'Área líder del proyecto AI',
    alignment: 'Alta — autora del pliego técnico',
    alignmentLevel: 'high',
    message: '"Agentforce para cerrar la brecha de conocimiento técnico"'
  },
  {
    name: 'Gerencia de Sucursales',
    role: 'Co-responsable del AI',
    alignment: 'Media — ve impacto operacional',
    alignmentLevel: 'medium',
    message: '"Menos escalamientos · más velocidad · autonomía regional"'
  },
  {
    name: "VP's funcionales",
    role: 'Dueños de procesos',
    alignment: 'Media — pendiente involucrar',
    alignmentLevel: 'medium',
    message: '"ROI por proceso: emisión, renovación, reclamación"'
  },
  {
    name: 'Arquitecto técnico',
    role: 'Evaluación de arquitectura',
    alignment: 'Técnica — integraciones pendientes',
    alignmentLevel: 'tech',
    message: '"APIs REST · Hyperforce · integración no invasiva"'
  }
];

// ============================================================================
// SECCIÓN 8 — Riesgos
// ============================================================================

export const risks: PrRisk[] = [
  {
    risk: 'Contratación pública (licitación vs. directa)',
    prob: 'high', impact: 'high',
    response: 'Mapear ruta contractual con legal de Salesforce y La Previsora'
  },
  {
    risk: 'Arquitectura compleja (7+ sistemas legacy)',
    prob: 'medium', impact: 'high',
    response: 'Pilot acotado: Agentforce + SUP + OnBase en Fase 1'
  },
  {
    risk: 'Accuracy de Agentforce en ramos complejos',
    prob: 'medium', impact: 'high',
    response: 'Piloto controlado en 2–3 sucursales con supervisión humana total'
  },
  {
    risk: 'Resistencia al cambio en sucursales',
    prob: 'medium', impact: 'medium',
    response: 'Change management · involucrar usuarios desde el diseño'
  },
  {
    risk: 'Ciclo largo de aprobación en entidad pública',
    prob: 'high', impact: 'medium',
    response: 'Anclar al pliego activo ya existente — reducir descubrimiento'
  }
];

// ============================================================================
// SECCIÓN 9 — Criterios de éxito
// ============================================================================

export const successCriteria: PrSuccess[] = [
  { category: 'Técnico', text: 'Accuracy ≥85% en validación documental y evaluación tarifaria' },
  { category: 'Negocio', text: 'Reducción medible del 30% baseline de escalamientos en el piloto' },
  { category: 'Adopción', text: '≥80% de usuarios piloto activos en las primeras 4 semanas' },
  { category: 'Contractual', text: 'Deal firmado en Q3 FY27 · primera fase en producción en H2 FY27' }
];

// ============================================================================
// SECCIÓN 10 — Próximos pasos
// ============================================================================

export const nextSteps: PrNextStep[] = [
  { task: 'Confirmar ruta contractual: licitación vs. contratación directa — involucrar legal Salesforce' },
  { task: 'Agendar sesión técnica con arquitecto de La Previsora para mapear integraciones (SUP, OnBase, AS400)' },
  { task: 'Definir ramos y sucursales piloto para el PoC de Agentforce (2–3 sucursales)' },
  { task: 'Presentar roadmap de 3 horizontes a Charly y equipo ejecutivo' },
  { task: 'Validar oportunidades en Org62 y alinear monto del deal hacia el $1M objetivo' },
  { task: 'Preparar deal inspection con Business Value Assessment (BVA) cuantificado' }
];

// Tesis estratégica (sección 2)
export const thesis = {
  problem:
    'La Previsora enfrenta una brecha estructural entre su ambición de ser la aseguradora elegida por los colombianos y su capacidad operativa actual: información fragmentada en 7+ sistemas, procesos manuales, conocimiento técnico concentrado en el centro, y canales de atención que no están a la altura del cliente de hoy.',
  context:
    'Esta no es una conversación de tecnología — es una conversación de competitividad y supervivencia en un mercado que ya se está moviendo.',
  positioning:
    'Salesforce llega a ser el sistema operativo de la transformación de La Previsora, alineando producto, proceso y dato alrededor del Plan Estratégico 2025-2026.'
};
