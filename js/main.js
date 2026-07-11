/* =============================================
   Neha RS — Portfolio
   main.js
   ============================================= */

/* ── Data ─────────────────────────────────── */
const DATA = {
  accenture: {
    logo: 'assets/accenture.svg',
    title: 'Accenture',
    sub: 'Cloud Security Analyst',
    meta: ['May 2026 – Present', 'Singapore'],
    body: 'Implementing cloud security controls and identity management across enterprise environments using Microsoft Azure and CyberArk.',
    tech: ['Azure', 'CyberArk', 'Carbon Black', 'Docker', 'Vulnerability Management'],
    bullets: [
      'Built a container vulnerability scanning pipeline using Docker Scout and Trivy across 5 production images; mapped CVEs via the Ubuntu Security API and coordinated remediation with infrastructure and application teams.',
      'Developed a CIS Ubuntu 22.04 hardening script remediating 308 security controls across SSH, PAM, AppArmor, kernel modules, and logging on Azure production VMs.',
      'Collaborated with Pen Testing Team to remediate identified vulnerabilities in the enterprise environment.',
      'Supported secure deployment of an Accenture in-house AI platform in a Singapore government tax environment (IRAS), ensuring compliance with enterprise security standards.'
    ],
  },
  ensign: {
    logo: 'assets/ensign.svg',
    title: 'Ensign InfoSecurity',
    sub: 'Cyber Resilience Lab Intern · Upcoming',
    meta: ['Aug – Dec 2026', 'Singapore'],
    body: "Upcoming role within Ensign's Cyber Resilience Lab — Singapore's leading cybersecurity firm.",
    tech: ['Cyber Range', 'AI Security', 'SOC Operations', 'Security Testing'],
    bullets: [
      'Cyber range operations and adversary simulation',
      'AI security research and applied lab operations',
      'SOC operations and incident response',
    ],
  },
  inspire: {
    logo: 'assets/uvic.svg',
    title: 'INSPIRE · University of Victoria',
    sub: 'Software Engineer Intern',
    meta: ['Sep – Dec 2025', 'Victoria, BC'],
    body: 'Contributed to BridgingRoots, a SENĆOŦEN Indigenous language-learning platform. Focused on backend reliability and secure containerised deployments.',
    tech: ['React', 'Node.js', 'Docker', 'MySQL', 'Nginx'],
    bullets: [
      'Contributed to BridgingRoots — SENĆOŦEN Indigenous language-learning platform',
      'Optimised containerised services (Docker, MySQL, Nginx) resolving cross-platform issues',
      'Delivered production-ready platform through iterative educator-driven improvements',
    ],
    link: 'https://inspireuvic.org/project/bridging-roots-bayside/',
    linkLabel: 'Project page ↗',
  },
  iras: {
    logo: 'assets/accenture.svg',
    title: 'Accenture · Client: IRAS',
    sub: 'Application Developer Intern',
    meta: ['May – Aug 2025', 'Singapore'],
    body: "Worked on Singapore's national tax system resolving production data inconsistencies across ETL pipelines.",
    tech: ['Azure Data Factory', 'ETL', 'Python', 'CI/CD'],
    bullets: [
      "Resolved production data inconsistencies across ETL pipelines in Singapore's national tax system",
      'Debugged Azure Data Factory workflows and identified pipeline failures',
      'Backend stability through code fixes and root cause analysis in live production',
    ],
  },
  dsta: {
    logo: 'assets/dsta.svg',
    title: 'DSTA · Defence Science & Technology Agency',
    sub: 'Cyber Security Engineer Intern · Distinction',
    meta: ['Sep 2022 – Feb 2023', 'Singapore'],
    body: 'Built automated red team tool analysing Terraform configs across 50+ cloud misconfiguration scenarios. Awarded Distinction.',
    tech: ['Terraform', 'AWS', 'MITRE ATT&CK', 'Python'],
    bullets: [
      'Automated red team tool for Terraform config analysis across 50+ cloud misconfigs',
      'Deployed vulnerable AWS environments via IaC mapped to MITRE ATT&CK',
      'Awarded Distinction for internship project performance',
    ],
    link: 'https://drive.google.com/file/d/1PXTq4Fq0L-1p8jeE7peipD7f7zIGuVcc/view?usp=sharing',
    linkLabel: 'Drive link ↗',
  },
  planpilot: {
    logo: null,
    title: 'PlanPilot AI',
    sub: '2nd Place · Microsoft CWB 2026',
    meta: ['2026', 'CWB Hackathon'],
    accent: '#2563eb',
    body: 'Agentic project tracking system that turns meeting notes and email threads into structured task updates, approvals, and live dashboard changes.',
    tech: ['Azure AI Foundry', 'Azure Cosmos DB', 'Flask', 'React', 'TypeScript', 'Vite'],
    bullets: [
      'Extracts owners, due dates, priorities, and status updates from meeting notes and email threads',
      'Supports human-in-the-loop approval for low-confidence changes',
      'Persists tasks and approvals in Azure Cosmos DB',
      'Includes dashboard, task tracker, Gantt view, and change detection workflow',
    ],
    link: 'https://www.youtube.com/watch?v=60ltPSRvXE0',
    linkLabel: 'Demo video ↗',
  },
  vulnscan: {
    logo: 'assets/vulscan.png',
    title: 'VulnScan',
    sub: 'LLM-Powered Code Auditor · Personal Project',
    meta: ['2026', 'In Development'],
    accent: '#ec4899',
    body: 'Web-based SAST tool using LLMs for semantic source code analysis. Detects OWASP Top 10 with contextual fix suggestions.',
    tech: ['LLM/AI', 'Python', 'SAST', 'OWASP Top 10'],
    bullets: [
      'Semantic source code analysis using LLMs',
      'Detects all OWASP Top 10 vulnerability categories',
      'Contextual remediation suggestions per finding',
    ],
    carousel: [
      { src: 'assets/vulscan.png', label: 'Analysis screen' },
      { src: 'assets/vulscan2.png', label: 'Findings view' },
    ],
  },
  redteam: {
    logo: 'assets/IaC.png',
    title: 'Automated Red Team Ops Framework',
    sub: 'DSTA Internship · Distinction',
    meta: ['2022–2023', 'DSTA'],
    accent: '#22c55e',
    body: 'Red team simulation using Terraform IaC mapped to MITRE ATT&CK. Generates attack paths for AWS cloud infrastructure.',
    tech: ['Python', 'Terraform', 'AWS', 'MITRE ATT&CK'],
    bullets: [
      'Terraform config analysis identifying 50+ misconfiguration patterns',
      'Attack path generation mapped to MITRE ATT&CK',
      'Vulnerable AWS environments via IaC modelling real exploit chains',
    ],
    link: 'https://drive.google.com/file/d/1PXTq4Fq0L-1p8jeE7peipD7f7zIGuVcc/view?usp=sharing',
    linkLabel: 'Drive link ↗',
  },
  cuemaster: {
    logo: 'assets/cuemaster4.png',
    title: 'CueMaster',
    sub: 'CS203 Collaborative Software Development · Lead Developer',
    meta: ['CS203', 'Lead Developer'],
    accent: '#2563eb',
    body: 'Led a team of four to build a 9-ball pool management platform with a Spring Boot backend and a ReactJS + TypeScript frontend.',
    tech: ['Spring Boot', 'ReactJS', 'TypeScript', 'OAuth', '2FA', 'BCrypt'],
    bullets: [
      'Owned User CRUD, OAuth, email activation, CAPTCHA, 2FA, and session management',
      'Implemented secure authentication with BCrypt, Google OAuth, and TOTP-based 2FA',
      'Led testing, debugging, code refactoring, merge conflict resolution, and deployment coordination',
      'Improved security and user experience with single-session login',
    ],
    carousel: [
      { src: 'assets/cuemaster4.png', label: 'Login' },
      { src: 'assets/cuemaster3.png', label: 'Email Authentication' },
      { src: 'assets/cuemaster2.png', label: 'User Management' },
    ],
  },
  cloudcrm: {
    logo: 'assets/aws.svg',
    title: 'Cloud CRM — Banking Architecture',
    sub: 'Academic · SMU × AWS',
    meta: ['2026', 'Academic'],
    accent: '#38bdf8',
    body: 'Cloud-hosted banking CRM with enterprise-grade security controls throughout.',
    tech: ['AWS', 'Flask', 'OAuth2', 'API Gateway', 'Lambda', 'CI/CD'],
    bullets: [
      'AWS Cognito OAuth2 for authentication and authorisation',
      'API Gateway with rate limiting and request validation',
      'Automated CI/CD with security scanning at each stage',
    ],
    carousel: [
      { src: 'assets/Admin Dashboard.png', label: 'Admin Dashboard' },
      { src: 'assets/Clients View.png', label: 'Clients View' },
      { src: 'assets/Home Page.png', label: 'Home page' },
    ],
  },
};

const CAROUSEL_STATE = {};

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const value = clean.length === 3
    ? clean.split('').map(ch => ch + ch).join('')
    : clean;
  const numeric = parseInt(value, 16);
  return `${(numeric >> 16) & 255}, ${(numeric >> 8) & 255}, ${numeric & 255}`;
}

/* ── Tab switching ────────────────────────── */
function sw(paneId, el) {
  ['pw', 'pe', 'pa', 'pc'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  document.getElementById(paneId).style.display = 'block';
  el.closest('.tabs').querySelectorAll('.tb').forEach(t => t.classList.remove('on'));
  el.classList.add('on');
}

/* ── Project filter ───────────────────────── */
function fp(cat, el) {
  document.querySelectorAll('.pf').forEach(p => p.classList.remove('on'));
  el.classList.add('on');
  document.querySelectorAll('#pl .proj-card').forEach(card => {
    const cats = (card.dataset.c || '').split(' ');
    card.style.display = (cat === 'all' || cats.includes(cat)) ? 'block' : 'none';
  });
}

function renderCarousel(id, slides) {
  if (!slides || !slides.length) return '';
  const initial = 0;
  const currentSlide = slides[initial];
  const dots = slides.map((slide, index) => `
    <button type="button" class="carousel-dot ${index === initial ? 'is-active' : ''}" onclick="carouselJump('${id}', ${index})" aria-label="Show ${slide.label}"></button>
  `).join('');

  return `
    <div class="dsection">
      <div class="dstitle">Preview</div>
      <div class="carousel" id="carousel-${id}" data-carousel-id="${id}">
        <div class="carousel-frame">
          <button type="button" class="carousel-btn carousel-prev" onclick="carouselStep('${id}', -1)" aria-label="Previous slide">‹</button>
          <img class="carousel-image" src="${encodeURI(currentSlide.src)}" alt="${id} - ${currentSlide.label}">
          <button type="button" class="carousel-btn carousel-next" onclick="carouselStep('${id}', 1)" aria-label="Next slide">›</button>
        </div>
        <div class="carousel-bar">
          <div>
            <div class="carousel-caption">${currentSlide.label}</div>
            <div class="carousel-counter">1/${slides.length}</div>
          </div>
          <div class="carousel-dots">${dots}</div>
        </div>
      </div>
    </div>`;
}

function syncCarousel(id) {
  const d = DATA[id];
  if (!d?.carousel?.length) return;
  const current = CAROUSEL_STATE[id] ?? 0;
  const carouselEl = document.getElementById(`carousel-${id}`);
  if (!carouselEl) return;
  const slide = d.carousel[current];
  const imageEl = carouselEl.querySelector('.carousel-image');
  const captionEl = carouselEl.querySelector('.carousel-caption');
  const counterEl = carouselEl.querySelector('.carousel-counter');
  imageEl.src = encodeURI(slide.src);
  imageEl.alt = `${d.title} - ${slide.label}`;
  captionEl.textContent = slide.label;
  counterEl.textContent = `${current + 1}/${d.carousel.length}`;
  carouselEl.querySelectorAll('.carousel-dot').forEach((dot, index) => {
    dot.classList.toggle('is-active', index === current);
  });
}

function carouselStep(id, delta) {
  const d = DATA[id];
  if (!d?.carousel?.length) return;
  const current = CAROUSEL_STATE[id] ?? 0;
  const next = (current + delta + d.carousel.length) % d.carousel.length;
  CAROUSEL_STATE[id] = next;
  syncCarousel(id);
}

function carouselJump(id, index) {
  const d = DATA[id];
  if (!d?.carousel?.length) return;
  CAROUSEL_STATE[id] = index;
  syncCarousel(id);
}

/* ── Detail modal ─────────────────────────── */
function od(id, cardEl) {
  const d = DATA[id];
  if (!d) return;

  if (cardEl) {
    cardEl.classList.remove('proj-pop');
    void cardEl.offsetWidth;
    cardEl.classList.add('proj-pop');
    window.setTimeout(() => cardEl.classList.remove('proj-pop'), 420);
  }

  const accent = d.accent || '#818cf8';
  const accentRgb = hexToRgb(accent);
  const dbox = document.getElementById('dbox');
  const ov = document.getElementById('ov');

  dbox.style.setProperty('--accent', accent);
  dbox.style.setProperty('--accent-rgb', accentRgb);
  ov.style.setProperty('--accent', accent);
  ov.style.setProperty('--accent-rgb', accentRgb);

  const logoHtml = d.logo
    ? `<img src="${d.logo}" alt="${d.title}">`
    : `<span style="font-size:.65rem;font-weight:700;color:#71717a">${id.slice(0,2).toUpperCase()}</span>`;
  CAROUSEL_STATE[id] = 0;

  let html = `
    <div class="dhead">
      <div class="dlogo">${logoHtml}</div>
      <div>
        <div class="dtitle">${d.title}</div>
        <div class="dsub">${d.sub}</div>
      </div>
      <span class="dx" onclick="cd()">×</span>
    </div>
    <div class="dbody">
      <div class="dmeta">
        ${d.meta.map(m => `<div class="dm">${m}</div>`).join('<div class="dm">·</div>')}
      </div>
      <div class="dsection">
        <div class="dstitle">Overview</div>
        <div class="dtext">${d.body}</div>
      </div>`;

  if (d.carousel?.length) {
    html += renderCarousel(id, d.carousel);
  }

  if (d.link) {
    html += `
      <div class="dsection">
        <div class="dstitle">Links</div>
        <a class="dlink" href="${d.link}" target="_blank" rel="noreferrer">${d.linkLabel || 'GitHub ↗'}</a>
      </div>`;
  }

  html += `
      <div class="dsection">
        <div class="dstitle">Technologies</div>
        <div class="dtags">${d.tech.map(t => `<span class="dtag">${t}</span>`).join('')}</div>
      </div>
      <div class="dsection">
        <div class="dstitle">Contributions</div>
        <ul class="dbullets">${d.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>
    </div>`;

  dbox.innerHTML = html;
  ov.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function cd() {
  const ov = document.getElementById('ov');
  ov.classList.remove('show');
  ov.style.removeProperty('--accent');
  ov.style.removeProperty('--accent-rgb');
  document.getElementById('dbox').style.removeProperty('--accent');
  document.getElementById('dbox').style.removeProperty('--accent-rgb');
  document.body.style.overflow = '';
}

/* ── Close modal on backdrop click ───────── */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ov').addEventListener('click', function(e) {
    if (e.target === this) cd();
  });
});
