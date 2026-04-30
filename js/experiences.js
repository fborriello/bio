/* ===================================
   EXPERIENCE DATA + RENDERERS
   =================================== */

const PIN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;

export const experiences = [
  {
    hidden: true,
    showInIndex: true,
    index: {
      role: 'Frontend Lead Engineer – Travelthings',
      date: '2026 – Present',
      location: 'Italy · Remote',
    },
    cv: {
      role: 'Frontend Lead Engineer – Travelthings',
      date: '2026 – Present',
    },
    company: 'eDreams ODIGEO',
    bullets: [
      'Leads the Travelthings frontend engineering team end-to-end, owning technical strategy, delivery, and team health across a modern React, TypeScript, Jest, and Cypress stack with fully automated CI/CD pipelines.',
      'Drives product delivery by translating business requirements into incremental customer-facing releases, accountable for sprint commitments, quality gates, and production stability.',
      'Manages the full people agenda: performance conversations, career growth planning, goal setting, and hiring, building a team where engineers feel real ownership over their work.',
      'Shapes the technical roadmap in close partnership with Product, Architecture, and Data Science, acting as the primary engineering interface to leadership and cross-vertical stakeholders.',
      'Champions engineering standards and a culture of continuous improvement across the broader frontend guild within the Travelthings vertical.',
    ],
    tags: ['Frontend Leadership', 'React', 'TypeScript', 'Engineering Management', 'Agile Delivery', 'CI/CD'],
  },
  {
    hidden: false,
    showInIndex: true,
    index: {
      role: 'Engineering Manager',
      date: '2020 – Present',
      location: 'Italy · Hybrid',
    },
    cv: {
      role: 'Manager, Software Development Engineering',
      date: 'Jun 2022 – Present',
    },
    company: 'Expedia Group',
    bullets: [
      'Led cross-functional engineering teams across Android, iOS, web, and backend, managing up to 16 engineers across 4 teams with full ownership of delivery, team health, and engineering execution.',
      'Delivered One Key Credit Card, Expedia\'s highest-visibility fintech launch in 2024, coordinating multiple teams across engineering, product, and business and shipping on schedule.',
      'Drove AI-driven personalisation across web and mobile, partnering with data science and product to define and ship experimentation programmes that improved traveller conversion and engagement.',
      'Built a high-trust engineering culture through structured hiring, onboarding, continuous feedback, performance reviews, and career development, growing team capability while keeping delivery predictability high.',
      'Partnered with Product and Business leadership to translate strategic goals into clear technical roadmaps, delivered in quarterly increments across globally distributed teams.',
      'Provided technical leadership and architectural oversight across distributed systems, ensuring reliability, scalability, and long-term sustainability of the platform.',
    ],
    tags: ['Engineering Leadership', 'Team Building', 'Java', 'AWS', 'CI/CD', 'Open Source'],
  },
  {
    hidden: false,
    showInIndex: true,
    index: {
      role: 'Software Development Engineer II',
      date: '2021 – 2022',
      location: 'Italy · Hybrid',
    },
    cv: {
      role: 'Software Development Engineer II',
      date: 'Sep 2021 – May 2022',
    },
    company: 'Expedia Group',
    bullets: [
      'Contributed to platform engineering teams within Expedia Group\'s large-scale service-oriented architecture, building backend services supporting one of the world\'s highest-traffic travel platforms.',
      'Designed and built internal A/B experimentation tooling enabling product teams across Hotels.com and Expedia.com to run data-driven experiments at scale, reducing setup friction and accelerating product decision-making.',
      'Developed production-grade backend services in Java within a CI/CD environment with automated testing, on-call responsibility, and a strong focus on reliability and quality.',
    ],
    tags: ['Java', 'Spring Boot', 'A/B Testing', 'CI/CD', 'Distributed Systems'],
  },
  {
    hidden: false,
    showInIndex: true,
    index: {
      role: 'Senior Software Analyst',
      date: '2020 – 2021',
      location: 'Italy · On-site',
    },
    cv: {
      role: 'Senior Software Analyst',
      date: 'Sep 2020 – Oct 2021',
    },
    company: 'FAO — Food and Agriculture Organization of the UN',
    bullets: [
      'Led modernization of a portfolio of legacy enterprise applications, directing migration from Adobe Flash and other deprecated technologies.',
      'Coordinated cross-functional collaboration between IT teams and business units to identify long-term technical solutions including SaaS, PaaS, and custom development.',
    ],
    tags: ['Legacy modernization', 'Solution Architecture', 'Enterprise IT'],
  },
  {
    hidden: false,
    showInIndex: false,
    cv: {
      role: 'Senior Software Engineer',
      date: 'Jan 2018 – Sep 2020',
    },
    company: 'Expedia, Inc.',
    bullets: [
      'Designed and shipped backend services for Hotels.com and the wider Expedia Group platform, a travel ecosystem serving tens of millions of users, within a microservices architecture built for reliability, horizontal scale, and continuous deployment.',
      'Created BULL (Bean Util Light Library), Expedia Group\'s open-source Java object transformation framework adopted across the Hotels.com engineering organisation to eliminate repetitive bean-mapping boilerplate. Covered in four articles on the Expedia Group Tech blog.',
      'Built internal A/B experimentation tooling enabling product teams to run data-driven experiments at scale, reducing time-to-experiment and increasing test cadence.',
      'Operated in a CI/CD environment with TDD discipline, automated test suites, and on-call rotation, building the engineering rigour that carried directly into the Engineering Manager role.',
    ],
  },
  {
    hidden: false,
    showInIndex: false,
    cv: {
      role: 'Enterprise Solution Architect',
      date: 'Oct 2017 – Dec 2017',
    },
    company: 'Altran',
    bullets: [
      'Designed system architecture for mission-critical platforms, including a radar command-and-control system for a major Italian aerospace company.',
      'Produced foundational UML models, architectural designs, and skeleton projects for core components.',
    ],
  },
  {
    hidden: false,
    showInIndex: false,
    cv: {
      role: 'IT Solutions Architect',
      date: 'Jan 2017 – Oct 2017',
    },
    company: 'FAO',
    bullets: [
      'Led analysis and design of enterprise IT solutions, producing solution proposals, architectural documentation, and project plans.',
      'Managed the IT request intake and governance workflow leading to CIO approval of new initiatives.',
    ],
  },
  {
    hidden: false,
    showInIndex: false,
    cv: {
      role: 'Senior Software Engineer',
      date: 'Jul 2008 – Dec 2016',
    },
    company: 'FAO',
    bullets: [
      'Designed and delivered enterprise web applications across multiple divisions of the UN Food and Agriculture Organisation over 8 years, the technical foundation that preceded senior engineering roles at global consumer-scale platforms.',
      'Led small development teams of up to 3 engineers, acted as the technical reference point for Java architecture decisions, and collaborated with international stakeholders across FAO headquarters and decentralised offices worldwide.',
    ],
  },
  {
    hidden: false,
    showInIndex: false,
    cv: {
      role: 'Senior Analyst & Programmer',
      date: 'Aug 2007 – Jun 2008',
    },
    company: 'SOFTLAB S.p.A.',
    bullets: [
      'Developed and maintained Java/J2EE applications for multiple clients, led a 10-person team as project manager on client delivery projects.',
      'Taught Java/J2EE to a class of 15 engineers working towards Sun certification.',
    ],
  },
  {
    hidden: false,
    showInIndex: false,
    cv: {
      role: 'IT System Administrator & Junior Analyst',
      date: 'Aug 2006 – Jul 2007',
    },
    company: 'Telecom Italia',
    bullets: [
      'Covered the full analyst-to-delivery cycle on a large TIM services platform: UML modelling, implementation, testing, and release across a team of 40 engineers using Bea WebLogic and Oracle.',
      'Developed telecom services using EJBs, PL/SQL procedures, and XML-based integrations across multiple TIM systems.',
    ],
  },
];

export function renderIndexExperiences(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = experiences
    .filter(e => e.showInIndex)
    .map(e => {
      const hidden    = e.hidden ? ' style="display:none"' : '';
      const bullets   = e.bullets.length
        ? `<ul class="timeline-card__bullets">${e.bullets.map(b => `<li class="timeline-card__bullet">${b}</li>`).join('')}</ul>`
        : '';
      const tags      = (e.tags && e.tags.length)
        ? `<div class="timeline-card__tags">${e.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`
        : '';

      return `
        <div class="timeline-item reveal"${hidden}>
          <div class="timeline-card">
            <div class="timeline-card__meta">
              <span class="timeline-card__company">${e.company}</span>
              <span class="timeline-card__date">${e.index.date}</span>
            </div>
            <h3 class="timeline-card__role">${e.index.role}</h3>
            <p class="timeline-card__location">
              ${PIN_SVG}
              ${e.index.location}
            </p>
            ${bullets}
            ${tags}
          </div>
        </div>`;
    })
    .join('');
}

export function renderCvExperiences(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = experiences
    .map(e => {
      const hidden  = e.hidden ? ' style="display:none"' : '';
      const bullets = e.bullets.length
        ? `<ul class="cv-bullets">${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
        : '';

      return `
        <div class="cv-entry"${hidden}>
          <div class="cv-entry__head">
            <div>
              <h3 class="cv-entry__role">${e.cv.role}</h3>
              <span class="cv-entry__company">${e.company}</span>
            </div>
            <span class="cv-entry__date">${e.cv.date}</span>
          </div>
          ${bullets}
        </div>`;
    })
    .join('');
}
