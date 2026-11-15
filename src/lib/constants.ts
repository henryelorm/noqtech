import type { NavLink, ProcessStep, Project, Service, TechGroup } from './types';

/* ------------------------------------------------------------------ */
/* Company                                                             */
/* ------------------------------------------------------------------ */

export const COMPANY = {
  name: 'NoqTech',
  legalName: 'NoqTech Limited',
  tagline: 'Engineering ideas into digital experiences.',
  description:
    'NoqTech designs, engineers and delivers software solutions that help businesses innovate, operate smarter and grow.',
  email: 'develop@noqtech.com',
  responseTime: '< 24 hours',
  region: 'Global / Remote',
  /** Project brief intake — the existing Google Form */
  briefFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLScXVV1ktQzrR2S9Lq1Xlrm3VUZ9Yfw9HZQy4tu6Bnb2si77Jg/viewform',
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/', icon: 'web' },
  { label: 'Services', href: '/services', icon: 'build' },
  { label: 'Our Work', href: '/our-work', icon: 'architecture' },
  { label: 'About', href: '/about', icon: 'partnership' },
  { label: 'Contact', href: '/contact', icon: 'launch' },
];

/* ------------------------------------------------------------------ */
/* Projects — real products only                                       */
/* ------------------------------------------------------------------ */

export const PROJECTS: Project[] = [
  {
    slug: 'church-management-system',
    title: 'Church Management System',
    category: 'Enterprise SaaS · Church operations',
    filter: 'enterprise',
    badge: 'Live',
    description:
      'A multi-tenant church management platform that brings members, attendance, giving, events, groups, sermons and communications into one workspace, with role-based access for every level of a church.',
    tags: ['Next.js', 'TypeScript', 'Django', 'PostgreSQL', 'Redis', 'Celery'],
    facts: [
      { label: 'Architecture', value: 'Multi-tenant' },
      { label: 'Core modules', value: '7' },
      { label: 'Access roles', value: '6' },
    ],
    modules: ['Members & families', 'Attendance', 'Finance & pledges', 'Events', 'Groups & ministries', 'Sermons & media', 'SMS & email'],
    links: [
      { label: 'View live product', href: 'https://tlpci-hop.vercel.app', kind: 'live' },
      { label: 'Source on GitHub', href: 'https://github.com/quarshie133/tlpci-hop-chms', kind: 'repo' },
    ],
    images: [
      { src: '/projects/church-ms/dashboard.webp', alt: 'Church Management System dashboard with directory, groups, events and giving summaries' },
      { src: '/projects/church-ms/finance.webp', alt: 'Finance module showing giving totals, funds and contribution records' },
      { src: '/projects/church-ms/attendance.webp', alt: 'Attendance module for creating services and recording check-ins' },
      { src: '/projects/church-ms/login.webp', alt: 'Church Management System sign-in screen' },
    ],
    coverIcon: 'church',
    featured: true,
  },
  {
    slug: 'noqtech-opportunities',
    title: 'NoqTech Opportunities',
    category: 'Web platform · Scholarships & jobs',
    filter: 'web',
    badge: 'Live',
    description:
      "A web platform that brings funded Master's and PhD scholarships from around the world, together with jobs in Ghana, into one place — with application deadlines tracked for each listing.",
    tags: ['Next.js', 'React', 'Vercel', 'Magic-link sign-in'],
    facts: [
      { label: 'Funded places & jobs', value: '70+' },
      { label: 'Regions worldwide', value: '7' },
    ],
    links: [{ label: 'View live product', href: 'https://noqtech-opport.vercel.app', kind: 'live' }],
    images: [
      {
        src: '/projects/opport/login.webp',
        alt: 'NoqTech Opportunities sign-in screen with password and email-link options',
        focus: 'top',
      },
    ],
    coverIcon: 'opportunity',
  },
  {
    slug: 'wifi-speed-tester',
    title: 'WiFi Speed Tester',
    category: 'Mobile utility · Network diagnostics',
    filter: 'mobile',
    badge: 'Mobile App',
    description:
      'A fast, lightweight speed test for WiFi and mobile networks — download, upload, ping and jitter in one tap, with a network quality score and a full test history. Used by over 1.2 million users worldwide.',
    tags: ['React Native', 'Android', 'WiFi · 5G · 4G'],
    facts: [
      { label: 'Tech', value: 'React Native' },
      { label: 'Reach', value: '1M+ installs' },
    ],
    images: [
      {
        src: '/projects/wifi-speed-tester/cover.webp',
        alt: 'WiFi Speed Tester screens: test history, the speed gauge, and results with a network quality score',
        focus: 'center',
      },
    ],
    links: [
      {
        label: 'Get it on Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.noqtech.wifispeedtest',
        kind: 'store',
      },
    ],
    coverIcon: 'zap',
  },
  {
    slug: 'void-arena',
    title: 'Void Arena',
    category: 'PC game · Tactical FPS',
    filter: 'games',
    badge: 'PC Game',
    description:
      'A tactical PC shooter built on Unreal Engine 5. High-precision gunplay and atmospheric 3D environments.',
    tags: ['Unreal Engine 5', 'C++'],
    facts: [
      { label: 'Engine', value: 'UE5 / C++' },
      { label: 'Genre', value: 'Tactical FPS' },
    ],
    links: [],
    coverIcon: 'swords',
  },
  {
    slug: 'life-simulation-game',
    title: 'Life-Simulation Game',
    category: 'Game · Life simulation',
    filter: 'games',
    badge: 'In development',
    description:
      'A life-simulation game in development at NoqTech, where players guide characters through everyday life — building homes, careers and relationships in a living world shaped by their choices.',
    tags: ['Life simulation', 'Game development'],
    facts: [
      { label: 'Status', value: 'In development' },
      { label: 'Genre', value: 'Life simulation' },
    ],
    links: [],
    coverIcon: 'lifesim',
    upcoming: true,
  },
  {
    slug: 'noqshield-pro',
    title: 'NoqShield Pro',
    category: 'Mobile security · Encrypted storage',
    filter: 'mobile',
    badge: 'Security App',
    description:
      'A secure file vault and encryption app. Military-grade AES-256 local storage for privacy.',
    tags: ['AES-256', 'iOS', 'Android'],
    facts: [
      { label: 'Encryption', value: 'AES-256' },
      { label: 'Platforms', value: 'iOS · APK' },
    ],
    links: [],
    coverIcon: 'shield',
  },
];

export const PROJECT_FILTERS: { label: string; value: 'all' | Project['filter'] }[] = [
  { label: 'All projects', value: 'all' },
  { label: 'Web platforms', value: 'web' },
  { label: 'Enterprise', value: 'enterprise' },
  { label: 'Mobile apps', value: 'mobile' },
  { label: 'Games', value: 'games' },
];

/** Four projects for the homepage 2×2 grid (the full list lives on /our-work). */
export const HOME_PROJECT_SLUGS = ['church-management-system', 'noqtech-opportunities', 'wifi-speed-tester', 'void-arena'];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const SERVICES: Service[] = [
  {
    id: 'web',
    index: '01',
    title: 'Web Application Development',
    shortTitle: 'Web Development',
    summary: 'Modern websites, web applications and digital platforms.',
    description:
      'Responsive web applications, client portals and internal tools built with a modern, typed stack — designed to be fast, accessible and straightforward to maintain.',
    icon: 'web',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    deliverables: ['Web applications & portals', 'Admin dashboards & internal tools', 'Authentication & role-based access', 'Automated build & deployment'],
    relatedProject: 'noqtech-opportunities',
  },
  {
    id: 'mobile',
    index: '02',
    title: 'Mobile Application Development',
    shortTitle: 'Mobile Apps',
    summary: 'Android and iOS applications, including cross-platform solutions.',
    description:
      'Native and cross-platform mobile apps for iOS and Android — from utility tools to secure, privacy-focused products — taken all the way through store publishing.',
    icon: 'mobile',
    stack: ['React Native', 'Android', 'iOS'],
    deliverables: ['Android & iOS apps', 'Cross-platform builds', 'UI/UX design', 'Store publishing'],
    relatedProject: 'wifi-speed-tester',
  },
  {
    id: 'ai',
    index: '03',
    title: 'AI & Intelligent Systems',
    shortTitle: 'AI & Intelligent Systems',
    summary: 'AI-powered applications, automation and intelligent software.',
    description:
      'Practical AI features embedded in real products: assistants, document and workflow automation, and integrations with leading model providers — scoped around measurable business problems.',
    icon: 'ai',
    stack: ['Python', 'LLM APIs', 'Automation'],
    deliverables: ['AI-assisted product features', 'Document & workflow automation', 'Model provider integrations', 'Data preparation pipelines'],
  },
  {
    id: 'enterprise',
    index: '04',
    title: 'Custom Enterprise Software',
    shortTitle: 'Enterprise Software',
    summary: 'Custom business applications and management systems.',
    description:
      'Management systems shaped around how your organisation actually works — multi-tenant platforms, records, finance and reporting modules, with access control for every role.',
    icon: 'enterprise',
    stack: ['Django', 'PostgreSQL', 'Next.js', 'RBAC'],
    deliverables: ['Management systems', 'Multi-tenant platforms', 'Finance, records & reporting', 'Role-based permissions'],
    relatedProject: 'church-management-system',
  },
  {
    id: 'games',
    index: '05',
    title: 'Game Development',
    shortTitle: 'Game Development',
    summary: 'Interactive 2D and 3D gaming experiences.',
    description:
      'High-fidelity 2D and 3D games using Unity and Unreal Engine, with custom gameplay systems, physics and multiplayer mechanics.',
    icon: 'game',
    stack: ['Unreal Engine 5', 'Unity', 'C++', 'C#'],
    deliverables: ['2D & 3D games', 'C++ / C# gameplay scripting', 'Asset creation', 'Multiplayer net-code'],
    relatedProject: 'void-arena',
  },
  {
    id: 'backend',
    index: '06',
    title: 'Backend & API Engineering',
    shortTitle: 'Backend & APIs',
    summary: 'APIs, backend systems and data layers.',
    description:
      'Server-side architecture for data-heavy applications and live products: REST APIs, background processing, authentication and well-modelled relational data.',
    icon: 'backend',
    stack: ['Python', 'Django REST Framework', 'Celery', 'Redis'],
    deliverables: ['REST API design & build', 'Background jobs & scheduling', 'Real-time databases', 'Token-based authentication'],
    relatedProject: 'church-management-system',
  },
  {
    id: 'cloud',
    index: '07',
    title: 'Cloud Infrastructure & Deployment',
    shortTitle: 'Cloud & Deployment',
    summary: 'Infrastructure, CI/CD and reliable deployment.',
    description:
      'Containerised services, managed hosting and automated pipelines that take software from repository to production — and keep it running afterwards.',
    icon: 'cloud',
    stack: ['Docker', 'AWS S3', 'Vercel', 'GitHub Actions'],
    deliverables: ['Containerised deployments', 'Cloud hosting & storage', 'CI/CD pipelines', 'Monitoring & maintenance'],
  },
  {
    id: 'design',
    index: '08',
    title: 'Digital Product Design',
    shortTitle: 'Product Design',
    summary: 'Product strategy, UX and interface design.',
    description:
      'User research, flows, interactive prototypes and design systems that give engineering a clear specification — and give users an interface that feels obvious.',
    icon: 'design',
    stack: ['UX research', 'Prototyping', 'Design systems'],
    deliverables: ['UX flows & wireframes', 'Interactive prototypes', 'Design systems & components', 'Interface design'],
  },
];

/** The six disciplines highlighted on the homepage (per the Stitch home design). */
export const HOME_SERVICE_IDS = ['web', 'mobile', 'ai', 'enterprise', 'games', 'backend'];

/* ------------------------------------------------------------------ */
/* Capabilities, process, technology, principles                       */
/* ------------------------------------------------------------------ */

export const CAPABILITIES = [
  {
    title: 'Product Strategy & Design',
    description: 'Clear requirements, user journeys and interface design that turn an idea into a buildable specification.',
    tag: 'Discovery to spec',
  },
  {
    title: 'Software Engineering',
    description: 'Full-stack web, mobile and backend development with typed, tested and maintainable code.',
    tag: 'Web · Mobile · Backend',
  },
  {
    title: 'Digital Innovation',
    description: 'AI-assisted features, automation and interactive 3D experiences applied where they add real value.',
    tag: 'AI · Games · Automation',
  },
  {
    title: 'Deployment & Support',
    description: 'Automated deployment, cloud hosting and ongoing maintenance after launch.',
    tag: 'Launch & beyond',
  },
];

export const PROCESS: ProcessStep[] = [
  {
    index: '01',
    title: 'Discover',
    description: 'Understand the business, the problem and the requirements before any design or code.',
    output: 'Project brief & scope',
    icon: 'discover',
  },
  {
    index: '02',
    title: 'Design',
    description: 'Develop the product strategy, user experience and interface.',
    output: 'UX & interface design',
    icon: 'design',
  },
  {
    index: '03',
    title: 'Build',
    description: 'Engineer, integrate and test the solution in iterative milestones.',
    output: 'Tested build',
    icon: 'build',
  },
  {
    index: '04',
    title: 'Launch & Support',
    description: 'Deploy, monitor, improve and maintain the product after release.',
    output: 'Live product',
    icon: 'launch',
  },
];

/** Only technologies used in NoqTech's own projects or listed on the previous site. */
export const TECH_STACK: TechGroup[] = [
  { title: 'Frontend', icon: 'frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Backend', icon: 'backend', items: ['Python', 'Django', 'Django REST Framework', 'Celery'] },
  { title: 'Mobile', icon: 'mobile', items: ['React Native', 'Android', 'iOS'] },
  { title: 'Games & 3D', icon: 'game', items: ['Unreal Engine 5', 'Unity', 'C++', 'C#'] },
  { title: 'Databases', icon: 'database', items: ['PostgreSQL', 'Redis'] },
  { title: 'Cloud & DevOps', icon: 'cloud', items: ['Docker', 'AWS S3', 'Vercel', 'Render', 'GitHub Actions'] },
];

export const PRINCIPLES = [
  {
    title: 'Craftsmanship & Code Quality',
    description: 'Typed, tested and documented code, so products can be maintained and extended with confidence.',
    icon: 'quality' as const,
  },
  {
    title: 'Pragmatic Architecture',
    description: 'We choose proven tools that fit the problem, rather than following trends for their own sake.',
    icon: 'architecture' as const,
  },
  {
    title: 'Transparency & Partnership',
    description: 'Direct communication with the people building your product, and regular, visible progress.',
    icon: 'partnership' as const,
  },
];
