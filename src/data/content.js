export const skills = [
  {
    name: 'PHP / Laravel',
    icon: 'laravel',
    level: 95,
    color: 'cyan',
    description: 'Primary backend framework, REST APIs, Artisan, Eloquent ORM',
  },
  {
    name: 'MySQL / PostgreSQL',
    icon: 'database',
    level: 88,
    color: 'purple',
    description: 'Complex queries, schema design, performance tuning, indexing',
  },
  {
    name: 'JavaScript',
    icon: 'js',
    level: 82,
    color: 'cyan',
    description: 'ES6+, async/await, DOM manipulation, API integration',
  },
  {
    name: 'Git & Version Control',
    icon: 'git',
    level: 90,
    color: 'purple',
    description: 'Branching strategies, code reviews, CI/CD pipelines',
  },
  {
    name: 'Agile / Scrum',
    icon: 'agile',
    level: 85,
    color: 'cyan',
    description: 'Sprint planning, retrospectives, stakeholder communication',
  },
  {
    name: 'AI Prompt Engineering',
    icon: 'ai',
    level: 88,
    color: 'purple',
    description: 'Autonomous workflows, LLM integration, agent orchestration',
  },
  {
    name: 'REST API Design',
    icon: 'api',
    level: 92,
    color: 'cyan',
    description: 'Resource modeling, authentication, versioning, documentation',
  },
  {
    name: 'Docker / DevOps',
    icon: 'docker',
    level: 75,
    color: 'purple',
    description: 'Containerization, deployment pipelines, server management',
  },
]

export const experiences = [
  {
    company: 'Golden Synapse Technologies',
    role: 'Sr. Software Developer',
    location: 'Dubai, UAE',
    period: '2022 — Present',
    color: 'cyan',
    highlights: [
      'Led end-to-end development of Maritime Logistics platform, reducing vessel reporting time by 40%',
      'Architected HRM & Payroll system processing multi-currency payroll for 500+ employees across UAE',
      'Built Asset Management module with real-time tracking, depreciation engine, and audit trails',
      'Established Laravel best practices and mentored junior developers across the engineering team',
    ],
    tech: ['Laravel', 'MySQL', 'Redis', 'Vue.js', 'REST API', 'Docker'],
  },
  {
    company: 'Excelledia Ventures',
    role: 'Backend Developer',
    location: 'Dubai, UAE',
    period: '2020 — 2022',
    color: 'purple',
    highlights: [
      'Designed and implemented API architecture for isorobot ERP enabling ISO compliance management at scale',
      'Built system interoperability layer connecting isorobot with third-party HR, finance, and document management systems',
      'Reduced API response time by 60% through query optimization and caching strategy',
      'Implemented OAuth 2.0 / Laravel Passport for enterprise-grade multi-tenant authentication',
    ],
    tech: ['Laravel', 'PostgreSQL', 'Laravel Passport', 'REST API', 'MySQL', 'Swagger'],
  },
  {
    company: 'IOCOD',
    role: 'Full-Stack Developer',
    location: 'Calicut, India',
    period: '2018 — 2020',
    color: 'cyan',
    highlights: [
      'Developed and maintained full-stack web applications using Laravel and JavaScript',
      'Implemented Laravel Passport for secure API authentication across mobile and web clients',
      'Performed system optimization resulting in 35% reduction in page load times',
      'Collaborated with design team to deliver pixel-perfect, responsive interfaces',
    ],
    tech: ['Laravel', 'MySQL', 'Laravel Passport', 'JavaScript', 'Bootstrap', 'jQuery'],
  },
]

export const projects = [
  {
    title: 'ISO ROBOT',
    tagline: 'Enterprise ISO Compliance ERP',
    description:
      'A comprehensive ERP platform for managing ISO compliance workflows, document control, internal audits, and corrective actions. Features multi-tenant architecture supporting 100+ organizations.',
    tech: ['Laravel', 'PostgreSQL', 'REST API', 'OAuth 2.0', 'Redis', 'Vue.js'],
    color: 'cyan',
    highlight: true,
    icon: '🤖',
    category: 'Enterprise ERP',
  },
  {
    title: 'VAQT',
    tagline: 'AI-Powered Time & Attendance',
    description:
      'Intelligent time tracking and workforce management system with AI-driven scheduling recommendations, biometric integration, and automated payroll sync for UAE labour law compliance.',
    tech: ['Laravel', 'MySQL', 'AI Integration', 'REST API', 'JavaScript', 'Biometric SDK'],
    color: 'purple',
    highlight: true,
    icon: '⏱️',
    category: 'AI Workflow',
  },
  {
    title: 'LutherSales',
    tagline: 'B2B Sales Automation Platform',
    description:
      'End-to-end sales pipeline management with CRM capabilities, automated follow-up sequences, deal tracking, and analytics dashboard for B2B sales teams.',
    tech: ['Laravel', 'MySQL', 'JavaScript', 'REST API', 'Chart.js'],
    color: 'cyan',
    highlight: false,
    icon: '📊',
    category: 'Sales & CRM',
  },
  {
    title: 'Easify',
    tagline: 'SME Business Management Suite',
    description:
      'All-in-one business management for small and medium enterprises. Covers inventory, invoicing, expense tracking, and financial reporting with a clean, intuitive UI.',
    tech: ['Laravel', 'MySQL', 'Vue.js', 'REST API', 'PDF Generation'],
    color: 'purple',
    highlight: false,
    icon: '⚡',
    category: 'Business Suite',
  },
  {
    title: 'Lansoa',
    tagline: 'Maritime Logistics Platform',
    description:
      'Specialized maritime logistics system for vessel management, cargo tracking, port operations, and regulatory compliance reporting for shipping companies in the UAE.',
    tech: ['Laravel', 'PostgreSQL', 'REST API', 'Real-time Updates', 'Redis'],
    color: 'cyan',
    highlight: false,
    icon: '🚢',
    category: 'Maritime Tech',
  },
  {
    title: 'Merchant Marketplace',
    tagline: 'Multi-Vendor E-Commerce Platform',
    description:
      'Scalable multi-vendor marketplace with independent merchant dashboards, commission management, dispute resolution, and integrated payment gateway for the MENA region.',
    tech: ['Laravel', 'MySQL', 'Payment Gateway', 'REST API', 'JavaScript', 'Redis'],
    color: 'purple',
    highlight: false,
    icon: '🛍️',
    category: 'E-Commerce',
  },
]

export const contactInfo = {
  name: 'Muhammed Jabir',
  role: 'Sr. Software Developer',
  location: 'Dubai, UAE',
  email: 'jabir145@gmail.com',
  mobile: '+971 558450285',
  linkedin: 'https://www.linkedin.com/in/jabir145/',
  github: 'https://github.com/jabir145',
  availability: 'Open to opportunities',
  license: 'UAE Driving License (Valid)',
}
