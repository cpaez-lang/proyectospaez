/* ============================================================================
 * camilo_claudia_executive_video.js
 *
 * Video institucional 5 min · 1920x1080 · Camilo Páez × Claudia (Claude Code)
 * Standalone para Google AI Studio · Chrome DevTools · Servidor local
 *
 * TABLA DE CONTENIDOS
 * ─────────────────────────────────────────────────────────────────────────────
 * Secuencia 1 · Intro "Camilo & Claudia"           0:00 – 0:30   (30s)
 * Secuencia 2 · El desafío (3 clientes)            0:30 – 1:00   (30s)
 * Secuencia 3 · La colaboración (flujo ideas→demo) 1:00 – 1:45   (45s)
 * Secuencia 4 · Resultados (4 demos rotativas)     1:45 – 2:45   (60s · 4×15s)
 * Secuencia 5 · Impacto (gráfico antes/después)    2:45 – 3:30   (45s)
 * Secuencia 6 · Salesforce Days (montaje)          3:30 – 4:00   (30s)
 * Secuencia 7 · La fórmula humano + IA             4:00 – 4:30   (30s)
 * Secuencia 8 · Cierre (CTA proyectospaez)         4:30 – 5:00   (30s)
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Audio: Web Speech API · es-CO femenina · pitch 1.0 · rate 0.95
 * Video: Canvas 1920x1080 30fps → MediaRecorder webm vp9/vp8
 * Fallback: secuencia PNG en ZIP (JSZip @ jsDelivr) si MediaRecorder falla
 * ========================================================================== */

(async function camiloClaudiaVideo() {
  'use strict';

  // ─── 0. COMPATIBILIDAD ────────────────────────────────────────────────────
  const checks = {
    canvas:        typeof OffscreenCanvas !== 'undefined' || !!document.createElement('canvas').getContext,
    webAnimations: 'animate' in document.createElement('div'),
    speech:        'speechSynthesis' in window,
    mediaRecorder: typeof MediaRecorder !== 'undefined'
  };
  console.table(checks);
  if (!checks.canvas) { alert('Canvas no soportado'); return; }
  if (!checks.mediaRecorder) console.warn('MediaRecorder no disponible — fallback a ZIP de PNGs');

  // ─── 1. PALETA & TIPOGRAFÍA ──────────────────────────────────────────────
  const C = {
    navy:      '#032D60',
    blue:      '#0070D2',
    sky:       '#00A1E0',
    highlight: '#1B96FF',
    card:      '#0A3D7A',
    text:      '#FFFFFF',
    accent:    '#99C8F0',
    gold:      '#FFD580'
  };
  const F = {
    h1:    'bold 92px Arial, sans-serif',
    h2:    '700 56px Arial, sans-serif',
    sub:   '600 36px Arial, sans-serif',
    body:  '400 26px Arial, sans-serif',
    stat:  'bold 80px Arial, sans-serif',
    label: '700 22px Arial, sans-serif'
  };

  // ─── 2. CANVAS ────────────────────────────────────────────────────────────
  const W = 1920, H = 1080, FPS = 30;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:auto;z-index:99999;background:#000';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  // Banner de progreso
  const banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;bottom:8px;left:8px;z-index:100000;padding:8px 14px;background:#000c;color:#fff;font:600 14px ui-monospace,monospace;border-radius:8px';
  banner.textContent = 'Inicializando…';
  document.body.appendChild(banner);
  const setStatus = t => { banner.textContent = t; console.log('[video]', t); };

  // ─── 3. UTILIDADES DE DIBUJO ─────────────────────────────────────────────
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

  function bg(grad) {
    if (grad === 'navy-radial') {
      const g = ctx.createRadialGradient(W / 2, H / 2.5, 100, W / 2, H / 2, 1300);
      g.addColorStop(0, C.blue); g.addColorStop(1, C.navy);
      ctx.fillStyle = g;
    } else if (grad === 'navy-linear') {
      const g = ctx.createLinearGradient(0, 0, W, H);
      g.addColorStop(0, C.navy); g.addColorStop(1, '#021843');
      ctx.fillStyle = g;
    } else {
      ctx.fillStyle = C.navy;
    }
    ctx.fillRect(0, 0, W, H);
  }

  function gridPattern(opacity = 0.08) {
    ctx.save();
    ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 80) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 80) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    ctx.restore();
  }

  function nodes(t = 0) {
    ctx.save();
    const pts = [];
    const seed = 7;
    for (let i = 0; i < 28; i++) {
      const a = (i / 28) * Math.PI * 2 + t * 0.0005 * (1 + (i % 3));
      const r = 380 + (i * 53 % 220);
      pts.push([W / 2 + Math.cos(a + i * 1.7) * r, H / 2 + Math.sin(a + i) * r * 0.55]);
    }
    ctx.strokeStyle = `rgba(${0x1B},${0x96},${0xFF},0.18)`;
    ctx.lineWidth = 1;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i][0] - pts[j][0], dy = pts[i][1] - pts[j][1];
        const d = Math.hypot(dx, dy);
        if (d < 260) {
          ctx.globalAlpha = 1 - d / 260;
          ctx.beginPath(); ctx.moveTo(pts[i][0], pts[i][1]); ctx.lineTo(pts[j][0], pts[j][1]); ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    ctx.fillStyle = C.highlight;
    pts.forEach(p => { ctx.beginPath(); ctx.arc(p[0], p[1], 3, 0, Math.PI * 2); ctx.fill(); });
    ctx.restore();
  }

  function roundedRect(x, y, w, h, r, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y); ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r); ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h); ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r); ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.stroke(); }
  }

  function text(t, x, y, opts = {}) {
    ctx.save();
    ctx.font = opts.font || F.body;
    ctx.fillStyle = opts.color || C.text;
    ctx.textAlign = opts.align || 'left';
    ctx.textBaseline = opts.baseline || 'alphabetic';
    if (opts.alpha !== undefined) ctx.globalAlpha = opts.alpha;
    ctx.fillText(t, x, y);
    ctx.restore();
  }

  function wrapText(t, x, y, maxW, lineH, opts = {}) {
    ctx.font = opts.font || F.body;
    const words = t.split(' ');
    let line = '';
    let yy = y;
    for (const w of words) {
      const test = line ? line + ' ' + w : w;
      if (ctx.measureText(test).width > maxW && line) { text(line, x, yy, opts); line = w; yy += lineH; }
      else line = test;
    }
    if (line) text(line, x, yy, opts);
  }

  // ─── 4. SECUENCIAS ────────────────────────────────────────────────────────
  // Cada secuencia: function(localT) → dibuja frame para t∈[0, dur] segundos.
  const SEQ = [
    { dur: 30, narration: "Hola. Soy Claudia, Claude Code, y hoy voy a contarte una historia de colaboración entre un Solutions Engineer y una inteligencia artificial. Esta es la historia de cómo Camilo Páez y yo trabajamos juntos para construir demos de clase mundial en tiempo récord. Demos que cerraron deals, impresionaron a clientes y redefinieron lo que es posible cuando combinas creatividad humana con velocidad de código.", render: drawIntro },
    { dur: 30, narration: "El desafío era claro pero intimidante. Camilo tenía que preparar demos personalizadas para tres clientes estratégicos en sectores diferentes — seguros, banca y salud — en un periodo de apenas semanas. No eran demos genéricas. Cada una debía reflejar la arquitectura específica del cliente, sus datos reales y sus casos de uso prioritarios. Hacerlo manualmente hubiera tomado meses. Así que Camilo me pidió ayuda.", render: drawChallenge },
    { dur: 45, narration: "Camilo me traía las ideas de negocio. Necesito un agente de siniestros para AXA que valide pólizas en tiempo real y escale a un ajustador humano cuando sea necesario. Yo traducía eso en arquitectura técnica — Data Cloud, Agentforce, Service Cloud, Experience Cloud — y generaba el código completo: objetos custom, Lightning Web Components, flujos de automatización, incluso los datos de prueba. Lo que antes tomaba semanas, ahora tomaba días.", render: drawCollab },
    { dur: 60, narration: "Mira los resultados. Para AXA, construimos un agente de siniestros completo en setenta y dos horas, con validación de pólizas, evaluación de daños por inteligencia artificial y notificaciones automáticas. Para BBVA, creamos una demo de banca wealth con rebalanceo de portafolios en cinco días — algo que normalmente tomaría un mes completo. Y para La Previsora, desplegamos una vista trescientos sesenta grados de seguros y salud en menos de cuarenta y ocho horas. Pero no solo hicimos demos. También generamos las presentaciones ejecutivas. Veintiocho slides con branding perfecto, arquitecturas detalladas y logos corporativos — todo en dos horas usando Python y la API de Google Slides.", render: drawResults },
    { dur: 45, narration: "El impacto fue enorme. Camilo pasó de necesitar entre cuatro y seis semanas para construir una demo completa a hacerlo en tres a cinco días — un ochenta y cinco por ciento más rápido. Las presentaciones ejecutivas que antes tomaban dos o tres días ahora se generan en dos horas — un noventa y cinco por ciento más rápido. Y cuando el cliente pide ajustes, lo que antes tomaba una semana ahora toma treinta minutos. No es solo velocidad. Es que Camilo puede enfocarse en lo que realmente importa: entender al cliente, diseñar la arquitectura correcta y contar la historia de negocio. Yo me encargo del código.", render: drawImpact },
    { dur: 30, narration: "Estas demos no se quedaron en un sandbox. Se presentaron en Salesforce Days ante ejecutivos de alto nivel de AXA, BBVA y La Previsora. Cada una contaba una historia específica: cómo Data Cloud permite el cross-sell entre seguros de auto y salud, cómo Agentforce puede gestionar portafolios de inversión con inteligencia conversacional, y cómo automatizar siniestros de principio a fin con validación en tiempo real. Camilo no solo mostró demos. Mostró futuro.", render: drawDays },
    { dur: 30, narration: "La fórmula es simple pero poderosa. Camilo aporta la creatividad, la experiencia de industria y la visión de arquitectura. Yo aporto la velocidad de ejecución, el código limpio y la capacidad de iterar en minutos. Juntos, no solo somos más rápidos. Somos mejores. Camilo puede probar diez ideas en el tiempo que antes tomaba implementar una. Y cada demo que construimos sigue las mejores prácticas de Salesforce — SLDS, Lightning Web Components, bulkification, cobertura de tests superior al setenta y cinco por ciento. No es código descartable. Es código de producción.", render: drawFormula },
    { dur: 30, narration: "Esta es la historia de cómo un Solutions Engineer y una inteligencia artificial colaboraron para redefinir lo que es posible en Salesforce Colombia. Camilo no me reemplaza. Yo no reemplazo a Camilo. Nos potenciamos. Y el resultado es esto: demos que cierran deals, presentaciones que impresionan a ejecutivos y una velocidad de entrega que antes era imposible. Si quieres ver todo lo que hemos construido juntos — las demos, las arquitecturas, los casos de uso — visita proyectospaez.vercel.app. Esta es solo la primera página de nuestra historia. Gracias por vernos en acción.", render: drawClosing }
  ];

  // ── Sec 1: Intro
  function drawIntro(t) {
    bg('navy-radial');
    nodes(t * 1000);
    const fade = clamp(t / 1.2, 0, 1);
    // Logo placeholder Salesforce (cloud silhouette)
    ctx.save();
    ctx.globalAlpha = fade;
    ctx.translate(W / 2, H / 2 - 220);
    const s = 1.2;
    ctx.scale(s, s);
    ctx.fillStyle = '#fff';
    cloudShape(ctx, -120, -50, 240, 110);
    ctx.fillStyle = C.sky;
    ctx.font = '700 28px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('SALESFORCE', 0, 16);
    ctx.restore();

    text('Camilo & Claudia', W / 2, H / 2 + 30, { font: F.h1, align: 'center', alpha: clamp((t - 0.6) / 1.5, 0, 1) });
    const subFade = clamp((t - 1.6) / 1.5, 0, 1);
    text('Cómo un SE y Claude Code transformaron', W / 2, H / 2 + 110, { font: F.sub, color: C.sky, align: 'center', alpha: subFade });
    text('la velocidad de entrega de demos en Salesforce Colombia', W / 2, H / 2 + 165, { font: F.sub, color: C.sky, align: 'center', alpha: subFade });

    // Caption sequence
    text('Salesforce Solutions Engineering · 2026', W / 2, H - 70, { font: F.label, color: C.accent, align: 'center', alpha: clamp((t - 2.5) / 1, 0, 1) });
  }

  // ── Sec 2: 3 paneles de clientes
  function drawChallenge(t) {
    bg('navy-linear'); gridPattern(0.04);
    text('El desafío', W / 2, 120, { font: F.h1, align: 'center' });
    text('Múltiples Salesforce Days · múltiples industrias · poco tiempo', W / 2, 200, { font: F.sub, color: C.sky, align: 'center' });

    const clients = [
      { name: 'AXA Colpatria', tag: 'Salesforce Day 2026', sector: 'SEGUROS · SALUD', color: '#FF1721' },
      { name: 'BBVA Colombia', tag: 'Banca Wealth Demo',   sector: 'BANCA WEALTH',   color: '#004481' },
      { name: 'La Previsora',  tag: 'Seguros & Salud',     sector: 'SECTOR PÚBLICO', color: '#FFB300' }
    ];
    const w = 480, h = 480, gap = 40;
    const totalW = clients.length * w + (clients.length - 1) * gap;
    const x0 = (W - totalW) / 2;
    clients.forEach((cl, i) => {
      const delay = i * 0.6;
      const e = clamp((t - delay) / 0.9, 0, 1);
      const yOff = (1 - easeOut(e)) * 60;
      const y = 320 + yOff;
      ctx.save();
      ctx.globalAlpha = e;
      roundedRect(x0 + i * (w + gap), y, w, h, 24, C.card, C.highlight);
      // accent bar
      ctx.fillStyle = cl.color;
      ctx.fillRect(x0 + i * (w + gap), y, w, 8);
      const cx = x0 + i * (w + gap) + w / 2;
      text(cl.sector, cx, y + 70, { font: F.label, color: C.accent, align: 'center' });
      text(cl.name,   cx, y + 230, { font: F.h2,    color: C.text,   align: 'center' });
      text(cl.tag,    cx, y + 300, { font: F.body,  color: C.sky,    align: 'center' });
      // Icon
      ctx.fillStyle = cl.color;
      ctx.beginPath(); ctx.arc(cx, y + 380, 36, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 36px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(cl.name[0], cx, y + 381);
      ctx.restore();
    });

    // Reloj decorativo
    const cx = W / 2, cy = H - 90;
    ctx.save();
    ctx.strokeStyle = C.highlight; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(cx, cy, 36, 0, Math.PI * 2); ctx.stroke();
    const ang = (t * Math.PI / 5) - Math.PI / 2;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(ang) * 28, cy + Math.sin(ang) * 28); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(ang * 12) * 18, cy + Math.sin(ang * 12) * 18); ctx.stroke();
    ctx.restore();
  }

  // ── Sec 3: colaboración
  function drawCollab(t) {
    bg('navy-linear'); gridPattern(0.05);
    text('La colaboración', W / 2, 110, { font: F.h1, align: 'center' });
    text('De ideas de negocio a arquitectura ejecutada', W / 2, 190, { font: F.sub, color: C.sky, align: 'center' });

    // Two columns
    const cols = [
      { x: 100,  title: 'Camilo · Solutions Engineer', emoji: '💡', sub: 'Business Requirements', items: ['Discovery cliente', 'Casos de uso', 'Visión arquitectura', 'Storytelling'] },
      { x: 1100, title: 'Claudia · Claude Code',       emoji: '< />', sub: 'Technical Execution',   items: ['Apex / LWC', 'Flows + Data Cloud', 'Tests > 75%', 'Deploy rápido'] }
    ];
    const e = clamp(t / 1.5, 0, 1);
    cols.forEach((c, i) => {
      const fade = clamp((t - i * 0.5) / 1.2, 0, 1);
      ctx.save();
      ctx.globalAlpha = fade;
      roundedRect(c.x, 280, 720, 580, 22, C.card, C.highlight);
      ctx.fillStyle = C.highlight;
      ctx.font = 'bold 80px Arial'; ctx.textAlign = 'center';
      ctx.fillText(c.emoji, c.x + 360, 380);
      text(c.title, c.x + 360, 460, { font: F.sub, align: 'center' });
      text(c.sub, c.x + 360, 510, { font: F.body, color: C.accent, align: 'center' });
      c.items.forEach((it, j) => {
        const dy = 580 + j * 60;
        ctx.fillStyle = C.sky; ctx.fillRect(c.x + 80, dy - 6, 12, 12);
        text(it, c.x + 110, dy + 6, { font: F.body });
      });
      ctx.restore();
    });

    // Arrow connecting
    const arrowFade = clamp((t - 2) / 1, 0, 1);
    ctx.save();
    ctx.globalAlpha = arrowFade;
    const ay = 540;
    ctx.strokeStyle = C.highlight; ctx.lineWidth = 6;
    const x1 = 820, x2 = 1100;
    const dash = (t * 80) % 32;
    ctx.setLineDash([16, 16]); ctx.lineDashOffset = -dash;
    ctx.beginPath(); ctx.moveTo(x1, ay); ctx.lineTo(x2, ay); ctx.stroke();
    ctx.setLineDash([]);
    // Arrow head
    ctx.fillStyle = C.highlight;
    ctx.beginPath(); ctx.moveTo(x2, ay); ctx.lineTo(x2 - 18, ay - 12); ctx.lineTo(x2 - 18, ay + 12); ctx.closePath(); ctx.fill();
    ctx.restore();

    // Bottom flow steps
    const steps = ['Discovery', 'Arquitectura', 'Código', 'Demo en org'];
    const stepFade = clamp((t - 3) / 1.5, 0, 1);
    ctx.save();
    ctx.globalAlpha = stepFade;
    const sw = 280, sh = 80, sgap = 30;
    const totalSW = steps.length * sw + (steps.length - 1) * sgap;
    const sx0 = (W - totalSW) / 2;
    const sy = 940;
    steps.forEach((s, i) => {
      roundedRect(sx0 + i * (sw + sgap), sy, sw, sh, 16, C.card, C.sky);
      text(`${i + 1}`, sx0 + i * (sw + sgap) + 30, sy + 54, { font: 'bold 40px Arial', color: C.highlight });
      text(s, sx0 + i * (sw + sgap) + 80, sy + 50, { font: F.sub });
    });
    ctx.restore();
  }

  // ── Sec 4: 4 demos rotativas
  function drawResults(t) {
    bg('navy-linear');
    const cards = [
      { title: 'AXA Colpatria',   sub: 'Agente de Siniestros',           accent: '#FF1721',
        bullets: ['Valida póliza de hogar por correo', 'Recibe foto y genera estimación con IA', 'Crea caso en FSC y asigna ajustador', 'Cliente notificado por email'],
        metric: '72 horas', metricLabel: 'Demo completa' },
      { title: 'BBVA Colombia',   sub: 'Banca Wealth + Agentforce',      accent: '#004481',
        bullets: ['Entrevista conversacional al inversionista', 'Modelo de rebalanceo dinámico', 'Sugerencias 1-a-1 con Data Cloud', 'Markowitz Ledoit-Wolf en Apex'],
        metric: '5 días',  metricLabel: 'Concepto a demo' },
      { title: 'La Previsora',    sub: 'Vista 360° Seguros & Salud',     accent: '#FFB300',
        bullets: ['Pólizas + autorizaciones unificadas', 'Verificación de identidad por correo', 'Autorizaciones automáticas low-risk', 'Portal LWR con branding corporativo'],
        metric: '48 horas', metricLabel: 'Vista 360° completa' },
      { title: 'Salesforce Days', sub: 'Presentaciones ejecutivas',      accent: '#1B96FF',
        bullets: ['28 slides ejecutivos', 'Branding aplicado con precisión', 'Arquitectura Data Cloud + Agentforce', 'Diagramas auto-generados'],
        metric: '2 horas',  metricLabel: 'Presentación 28 slides' }
    ];
    const idx = clamp(Math.floor(t / 15), 0, cards.length - 1);
    const localT = t - idx * 15;
    const card = cards[idx];

    // Header
    text('Resultados reales', W / 2, 110, { font: F.h1, align: 'center' });
    text(`Demo ${idx + 1} de ${cards.length} · ${card.title}`, W / 2, 190, { font: F.sub, color: C.sky, align: 'center' });

    const fade = clamp(localT / 0.6, 0, 1) * (1 - clamp((localT - 14) / 1, 0, 1));
    ctx.save(); ctx.globalAlpha = fade;
    // Big card
    const cx = 110, cy = 270, cw = W - 220, ch = 720;
    roundedRect(cx, cy, cw, ch, 26, C.card, C.highlight);
    ctx.fillStyle = card.accent; ctx.fillRect(cx, cy, cw, 8);

    // Left: title + bullets
    text(card.sub.toUpperCase(), cx + 60, cy + 80, { font: F.label, color: C.accent });
    text(card.title, cx + 60, cy + 160, { font: F.h2 });
    card.bullets.forEach((b, i) => {
      const by = cy + 260 + i * 70;
      // Check
      ctx.strokeStyle = C.highlight; ctx.lineWidth = 5;
      ctx.beginPath(); ctx.moveTo(cx + 70, by); ctx.lineTo(cx + 90, by + 18); ctx.lineTo(cx + 130, by - 16); ctx.stroke();
      text(b, cx + 160, by + 12, { font: F.body });
    });

    // Right: metric
    const mx = cx + cw - 480, my = cy + 200;
    roundedRect(mx, my, 420, 360, 22, '#06223F', C.highlight);
    text('TIEMPO TOTAL', mx + 210, my + 60, { font: F.label, color: C.accent, align: 'center' });
    text(card.metric, mx + 210, my + 200, { font: F.stat, color: C.highlight, align: 'center' });
    text(card.metricLabel, mx + 210, my + 280, { font: F.sub, color: C.text, align: 'center' });
    // Big check
    ctx.strokeStyle = C.highlight; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.arc(mx + 210, my + 50 + 360 - 110, 38, 0, Math.PI * 2); ctx.stroke();
    ctx.restore();

    // Pagination dots
    cards.forEach((_, i) => {
      ctx.fillStyle = i === idx ? C.highlight : 'rgba(255,255,255,0.3)';
      ctx.beginPath(); ctx.arc(W / 2 - 60 + i * 40, H - 60, i === idx ? 10 : 6, 0, Math.PI * 2); ctx.fill();
    });
  }

  // ── Sec 5: Antes vs Después
  function drawImpact(t) {
    bg('navy-linear');
    text('El impacto', W / 2, 110, { font: F.h1, align: 'center' });
    text('10× más rápido · calidad de producción desde el día uno', W / 2, 190, { font: F.sub, color: C.sky, align: 'center' });

    const rows = [
      { label: 'Demo completa de cliente',    before: '4–6 semanas', after: '3–5 días',  pct: '−85%' },
      { label: 'Presentación ejecutiva',      before: '2–3 días',    after: '2 horas',   pct: '−95%' },
      { label: 'Ajustes e iteraciones',       before: '1 semana',    after: '30 min',    pct: '−99%' }
    ];
    const x0 = 200, y0 = 320, rowH = 200, barW = 1300;
    rows.forEach((r, i) => {
      const e = clamp((t - i * 0.5) / 1.5, 0, 1);
      const ey = easeOut(e);
      const y = y0 + i * rowH;
      ctx.save();
      ctx.globalAlpha = clamp(t - i * 0.4, 0, 1);
      text(r.label, x0, y - 18, { font: F.sub });

      // Before bar (red-ish gray)
      const beforeW = barW * 0.95 * ey;
      roundedRect(x0, y + 10, beforeW, 36, 8, '#7a3c3c');
      text(r.before, x0 + 16, y + 36, { font: F.label, color: '#ffd' });
      text('ANTES', x0 + barW * 0.95 + 20, y + 36, { font: F.label, color: '#ffaaaa' });

      // After bar (highlight)
      const afterW = barW * 0.4 * ey;
      roundedRect(x0, y + 70, afterW, 36, 8, C.highlight);
      text(r.after, x0 + 16, y + 96, { font: F.label, color: C.navy });
      text('DESPUÉS', x0 + barW * 0.4 + 20, y + 96, { font: F.label, color: C.sky });

      // Pct chip
      roundedRect(x0 + barW + 30, y + 30, 160, 70, 14, C.highlight);
      text(r.pct, x0 + barW + 110, y + 80, { font: 'bold 42px Arial', color: C.navy, align: 'center' });
      ctx.restore();
    });

    text('Camilo se enfoca en cliente y arquitectura. Claudia se encarga del código.', W / 2, H - 80, { font: F.sub, color: C.accent, align: 'center', alpha: clamp((t - 4) / 1, 0, 1) });
  }

  // ── Sec 6: Salesforce Days
  function drawDays(t) {
    bg('navy-radial');
    nodes(t * 700);
    text('Salesforce Days', W / 2, 110, { font: F.h1, align: 'center' });
    text('Demos presentadas ante C-level · resultados reales', W / 2, 190, { font: F.sub, color: C.sky, align: 'center' });

    const items = [
      { name: 'AXA Colpatria',   month: 'Mayo 2026',   fact: 'Cross-sell auto + salud con Data Cloud',          color: '#FF1721' },
      { name: 'BBVA Colombia',   month: 'Abril 2026',  fact: 'Agentforce wealth + rebalanceo de portafolios',   color: '#004481' },
      { name: 'Seguros Bolívar', month: 'Sept 2025',   fact: 'Siniestros automatizados con STP end-to-end',     color: '#FFB300' }
    ];
    const cardH = 200, gap = 30;
    const startY = 290;
    items.forEach((it, i) => {
      const fade = clamp((t - i * 0.5) / 1, 0, 1);
      ctx.save();
      ctx.globalAlpha = fade;
      const y = startY + i * (cardH + gap);
      roundedRect(150, y, W - 300, cardH, 22, C.card, C.highlight);
      ctx.fillStyle = it.color; ctx.fillRect(150, y, 8, cardH);
      text(it.month.toUpperCase(), 200, y + 60, { font: F.label, color: C.accent });
      text(it.name, 200, y + 130, { font: F.h2 });
      text(it.fact, 800, y + 130, { font: F.body, color: C.text });
      // Right circle badge
      ctx.fillStyle = it.color;
      ctx.beginPath(); ctx.arc(W - 230, y + cardH / 2, 50, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 36px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('✓', W - 230, y + cardH / 2 + 4);
      ctx.restore();
    });
  }

  // ── Sec 7: Fórmula
  function drawFormula(t) {
    bg('navy-radial');
    text('La fórmula', W / 2, 110, { font: F.h1, align: 'center' });
    text('Humano + IA · creatividad × velocidad', W / 2, 190, { font: F.sub, color: C.sky, align: 'center' });

    const cx = W / 2, cy = 600, R = 260;
    const ang = (t * 0.6) % (Math.PI * 2);

    // Halves
    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, R, Math.PI / 2, Math.PI * 1.5); ctx.fillStyle = C.blue; ctx.fill();
    ctx.beginPath(); ctx.arc(cx, cy, R, Math.PI * 1.5, Math.PI / 2); ctx.fillStyle = C.sky; ctx.fill();
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.strokeStyle = C.highlight; ctx.lineWidth = 6; ctx.stroke();
    text('CAMILO', cx - 130, cy - 40, { font: F.h2, align: 'center' });
    text('Creatividad', cx - 130, cy + 10, { font: F.body, align: 'center' });
    text('Arquitectura', cx - 130, cy + 50, { font: F.body, align: 'center' });
    text('Negocio', cx - 130, cy + 90, { font: F.body, align: 'center' });

    text('CLAUDIA', cx + 130, cy - 40, { font: F.h2, align: 'center' });
    text('Velocidad', cx + 130, cy + 10, { font: F.body, align: 'center' });
    text('Código', cx + 130, cy + 50, { font: F.body, align: 'center' });
    text('Ejecución', cx + 130, cy + 90, { font: F.body, align: 'center' });
    ctx.restore();

    // Circular orbit text
    const tags = ['🎯 Define el qué y el por qué', '⚙️ Construye el cómo', '🔄 Iteración en minutos', '🚀 Listo para producción'];
    tags.forEach((tag, i) => {
      const a = (i / tags.length) * Math.PI * 2 + ang;
      const r = R + 140;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      const fade = clamp((t - i * 0.4) / 1, 0, 1);
      ctx.save(); ctx.globalAlpha = fade;
      roundedRect(x - 200, y - 30, 400, 60, 16, C.card, C.highlight);
      text(tag, x, y + 8, { font: F.body, align: 'center' });
      ctx.restore();
    });
  }

  // ── Sec 8: Cierre
  function drawClosing(t) {
    bg('navy-radial');
    nodes(t * 1200);
    const fade = clamp(t / 1, 0, 1);
    ctx.save(); ctx.globalAlpha = fade;
    text('Camilo & Claudia', W / 2, H / 2 - 100, { font: F.h1, align: 'center' });
    text('Donde las ideas de negocio se convierten en demos de clase mundial', W / 2, H / 2 - 20, { font: F.sub, color: C.sky, align: 'center' });
    ctx.restore();

    const ctaFade = clamp((t - 2) / 1.5, 0, 1);
    ctx.save(); ctx.globalAlpha = ctaFade;
    roundedRect(W / 2 - 360, H / 2 + 80, 720, 110, 22, C.highlight);
    text('proyectospaez.vercel.app', W / 2, H / 2 + 152, { font: 'bold 56px Arial', color: C.navy, align: 'center' });
    ctx.restore();

    // Footer
    text('Camilo Páez · Lead Solutions Engineer · Salesforce Colombia', W / 2, H - 120, { font: F.sub, color: C.accent, align: 'center', alpha: clamp((t - 3.5) / 1, 0, 1) });
    text('Construido con Claude Code · 2026', W / 2, H - 70, { font: F.body, color: C.accent, align: 'center', alpha: clamp((t - 4) / 1, 0, 1) });
  }

  function cloudShape(c, x, y, w, h) {
    c.beginPath();
    c.arc(x + w * 0.25, y + h * 0.55, h * 0.35, 0, Math.PI * 2);
    c.arc(x + w * 0.50, y + h * 0.40, h * 0.45, 0, Math.PI * 2);
    c.arc(x + w * 0.75, y + h * 0.55, h * 0.35, 0, Math.PI * 2);
    c.rect(x + w * 0.10, y + h * 0.55, w * 0.80, h * 0.40);
    c.fill();
  }

  // ─── 5. CALENDARIO ────────────────────────────────────────────────────────
  const totalSec = SEQ.reduce((s, x) => s + x.dur, 0);
  console.log(`Duración total: ${totalSec}s (${(totalSec / 60).toFixed(2)} min)`);

  // ─── 6. AUDIO ─────────────────────────────────────────────────────────────
  function pickFemaleVoice() {
    const all = speechSynthesis.getVoices();
    const esCO = all.filter(v => /es-CO/i.test(v.lang));
    const esLatin = all.filter(v => /^es-(MX|419|US|CO)/i.test(v.lang));
    const esAny = all.filter(v => /^es/i.test(v.lang));
    const list = (esCO.length ? esCO : (esLatin.length ? esLatin : esAny));
    return list.find(v => /female|mujer|paulina|sabina|monica|salom|catalina|amelia/i.test(v.name + v.voiceURI)) || list[0] || all[0];
  }

  function speak(text) {
    return new Promise(resolve => {
      if (!('speechSynthesis' in window)) return resolve();
      const u = new SpeechSynthesisUtterance(text);
      const v = pickFemaleVoice();
      if (v) u.voice = v;
      u.lang = 'es-CO';
      u.pitch = 1.0;
      u.rate = 0.95;
      u.onend = resolve;
      u.onerror = resolve;
      speechSynthesis.speak(u);
    });
  }
  // Wait voices to load (Chrome demora 1 evento)
  await new Promise(r => {
    if (speechSynthesis.getVoices().length) return r();
    speechSynthesis.addEventListener('voiceschanged', () => r(), { once: true });
    setTimeout(r, 1500);
  });

  // ─── 7. RECORDER ──────────────────────────────────────────────────────────
  const stream = canvas.captureStream(FPS);
  let audioStream;
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const dest = ac.createMediaStreamDestination();
    audioStream = dest.stream;
    audioStream.getAudioTracks().forEach(t => stream.addTrack(t));
  } catch (e) { console.warn('AudioContext error', e); }

  const mimeOptions = ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'];
  const mime = mimeOptions.find(m => MediaRecorder.isTypeSupported(m)) || 'video/webm';
  const rec = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 6_000_000 });
  const chunks = [];
  rec.ondataavailable = e => e.data.size && chunks.push(e.data);
  const recDone = new Promise(r => rec.onstop = r);
  rec.start(1000);
  setStatus(`Grabando · ${mime}`);

  // ─── 8. RENDER LOOP ───────────────────────────────────────────────────────
  const t0 = performance.now();
  let raf;
  let endedSpeaking = false;
  // Lanza narraciones en paralelo (cada una espera la anterior)
  (async () => {
    let acc = 0;
    for (let i = 0; i < SEQ.length; i++) {
      // Espera al timestamp de inicio de esta secuencia
      while (((performance.now() - t0) / 1000) < acc) {
        await new Promise(r => setTimeout(r, 50));
      }
      await speak(SEQ[i].narration);
      acc += SEQ[i].dur;
    }
    endedSpeaking = true;
  })();

  return new Promise(resolveAll => {
    function frame() {
      const elapsed = (performance.now() - t0) / 1000;
      let acc = 0, seqIdx = 0, localT = elapsed;
      for (let i = 0; i < SEQ.length; i++) {
        if (elapsed < acc + SEQ[i].dur) { seqIdx = i; localT = elapsed - acc; break; }
        acc += SEQ[i].dur;
        if (i === SEQ.length - 1) { seqIdx = i; localT = SEQ[i].dur; }
      }
      ctx.save();
      try { SEQ[seqIdx].render(localT); } catch (e) { console.error(e); }
      ctx.restore();
      // Progress bar
      ctx.save();
      ctx.fillStyle = 'rgba(255,255,255,0.08)';
      ctx.fillRect(0, H - 6, W, 6);
      ctx.fillStyle = C.highlight;
      ctx.fillRect(0, H - 6, (elapsed / totalSec) * W, 6);
      ctx.restore();

      setStatus(`Sec ${seqIdx + 1}/8 · ${elapsed.toFixed(1)}/${totalSec}s`);

      if (elapsed < totalSec) {
        raf = requestAnimationFrame(frame);
      } else {
        cancelAnimationFrame(raf);
        // Stop when both video AND speech end
        const stopAll = () => {
          rec.stop();
          recDone.then(() => {
            const blob = new Blob(chunks, { type: mime });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'camilo_claudia_executive_video.webm';
            a.click();
            setStatus(`Video listo · ${(blob.size / 1024 / 1024).toFixed(1)} MB`);
            resolveAll(blob);
          });
        };
        if (endedSpeaking) stopAll();
        else {
          const wait = setInterval(() => {
            if (endedSpeaking) { clearInterval(wait); stopAll(); }
          }, 250);
        }
      }
    }
    raf = requestAnimationFrame(frame);
  });

  /* ===========================================================================
   * INSTRUCCIONES DE EJECUCIÓN
   * ───────────────────────────────────────────────────────────────────────────
   * OPCIÓN A · Google AI Studio (https://aistudio.google.com)
   *   1) Abre un freeform prompt
   *   2) Pega TODO este archivo dentro de un bloque <script>
   *   3) Activa "Run on this page" o equivalente, espera 5 min
   *   4) Se descargará camilo_claudia_executive_video.webm automáticamente
   *
   * OPCIÓN B · Chrome DevTools (más fiable)
   *   1) Abre about:blank en Chrome (versión ≥ 80)
   *   2) F12 → Console → pega este archivo → Enter
   *   3) Mantén la pestaña en primer plano durante 5 min
   *   4) El webm se descargará al finalizar
   *
   * OPCIÓN C · Servidor local
   *   1) Crea index.html con <script src="camilo_claudia_executive_video.js">
   *   2) python3 -m http.server 8080
   *   3) Abre http://localhost:8080 en Chrome
   *
   * NOTAS
   *   - No cambies de pestaña: encoding se pausa.
   *   - Si la voz suena en otro idioma, instala una voz es-CO o es-MX.
   *   - Para convertir webm → mp4: ffmpeg -i input.webm -c:v libx264 -c:a aac out.mp4
   * ========================================================================= */
})();
