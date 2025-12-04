import { ServiceCategory, ServiceGroup, ServiceItem } from '@/types/services';

export const servicesHero = {
  badge: 'Our Service Portfolio',
  title: 'All Your Business Technology Services in One Place',
  highlight: 'Business Technology Services',
  subtitle:
    'Explore our complete suite of services across platforms, operations, automation, analytics, development, integrations, and training — structured for modern business growth.',
  cta: 'Explore All Services',
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: 1,
    slug: 'platform-solutions',
    title: 'Platform Solutions',
    icon: 'Blocks',
    description: 'Implementations, migrations, analytics & integrations across enterprise platforms.',
  },
  {
    id: 2,
    slug: 'business-operations',
    title: 'Business Operations',
    icon: 'Briefcase',
    description: 'Accounting, audits, MIS reporting, registration services, data migration.',
  },
  {
    id: 3,
    slug: 'development-integration',
    title: 'Development & Integration',
    icon: 'Code',
    description: 'Custom apps, APIs, cloud deployments, enterprise integrations.',
  },
  {
    id: 4,
    slug: 'automation-workflow',
    title: 'Automation & Workflow',
    icon: 'Workflow',
    description: 'N8N, Make.com, Zapier, Power Automate, and full process automation.',
  },
  {
    id: 5,
    slug: 'training-empowerment',
    title: 'Training & Empowerment',
    icon: 'GraduationCap',
    description: 'ERP, CRM, BI training programs, workshops, and upskilling.',
  },
];

export const services: ServiceItem[] = [
  {
    id: 101,
    categorySlug: 'platform-solutions',
    icon: 'Server',
    title: 'Zoho Ecosystem',
    shortDesc: 'Full Zoho suite setup, customization & automation.',
    fullDesc:
      'Complete Zoho One implementation: Books, Analytics, Payroll, Inventory, CRM, Bigin, Desk, Flow, Creator, Qntrl, Projects, People, Recruit, Contracts, Sign, Mail, automation workflows, and cross-app integrations.',
    image: { src: '/assets/services/zoho-logo.avif', alt: 'Zoho Ecosystem' },
    features: ['CRM Setup', 'Finance Suite', 'Automation', 'Cross-App Integrations', 'Custom Modules'],
    cta: 'Start Zoho Project',
  },

  {
    id: 102,
    categorySlug: 'platform-solutions',
    icon: 'Calculator',
    title: 'Tally Prime',
    shortDesc: 'Accounting, Inventory, Payroll, GST, TDS & full configuration.',
    fullDesc: 'End-to-end implementation, customization, automation, api integrations, data migration, security setup, multi-GSTIN, currency & advanced reporting.',
    image: { src: '/assets/services/tally.webp', alt: 'Tally Prime' },
    features: ['GST', 'Inventory', 'Payroll', 'Data Migration', 'Custom Reports'],
    cta: 'Setup Tally Prime',
  },

  {
    id: 103,
    categorySlug: 'platform-solutions',
    icon: 'Server',
    title: 'NetSuite ERP',
    shortDesc: 'Cloud ERP for growing enterprises.',
    fullDesc: 'NetSuite implementation, modules setup, inventory, finance, procurement, integration & analytics.',
    image: { src: '/assets/services/netsuite.png', alt: 'NetSuite ERP' },
    features: ['Finance', 'Inventory', 'Procurement', 'Dashboards', 'Automation'],
    cta: 'Explore NetSuite',
  },

  {
    id: 104,
    categorySlug: 'platform-solutions',
    icon: 'Server',
    title: 'Salesforce CRM',
    shortDesc: 'CRM for sales, service, automation & reporting.',
    fullDesc: 'Salesforce setup, workflows, pipelines, automations, dashboards & integrations.',
    image: { src: '/assets/services/salesforce.jpg', alt: 'Salesforce CRM' },
    features: ['Sales', 'Service Cloud', 'Automations', 'Integrations'],
    cta: 'Start Salesforce Setup',
  },

  {
    id: 105,
    categorySlug: 'platform-solutions',
    icon: 'BarChart3',
    title: 'Power BI Analytics',
    shortDesc: 'Dashboards, DAX, data modeling & automation.',
    fullDesc: 'Power BI consulting, custom dashboards, embedded analytics, forecasting, real-time streaming & enterprise BI.',
    image: { src: '/assets/services/powerbi.jpg', alt: 'Power BI Analytics' },
    features: ['DAX', 'Data Modeling', 'Live Reports', 'Mobile BI'],
    cta: 'Start Power BI Project',
  },

  {
    id: 201,
    categorySlug: 'business-operations',
    icon: 'Briefcase',
    title: 'Registration Services',
    shortDesc: 'Business registration, compliance & documentation.',
    fullDesc: 'Company registration, GST, MSME, PF/ESI, licenses & ongoing compliance support.',
    features: ['GST', 'MSME', 'Udyam', 'Compliance Filing'],
    image: { src: '/assets/services/business-registration.webp', alt: 'Registration Services' },
  },

  {
    id: 202,
    categorySlug: 'business-operations',
    icon: 'FileSpreadsheet',
    title: 'Accounting & Audit',
    shortDesc: 'End-to-end accounting & audit services.',
    fullDesc: 'Daily bookkeeping, monthly closing, statutory audit support, tax filings & financial reporting.',
    features: ['Bookkeeping', 'Audit', 'Tax Filing', 'Financial Reports'],
    image: { src: '/assets/services/accounting-and-auditing.png', alt: 'Accounting & Audit' },
  },

  {
    id: 203,
    categorySlug: 'business-operations',
    icon: 'Database',
    title: 'Fixed Assets & Mobile Audit',
    shortDesc: 'Digital audit for assets & field-level verification.',
    fullDesc: 'Asset tagging, mobile audit systems, reconciliation, depreciation mapping & asset controls.',
    features: ['Asset Tagging', 'Mobile Audit', 'Reconciliation'],
    image: { src: '/assets/services/fixed-asset-&-mobile-audit.png', alt: 'Fixed Assets & Mobile Audit' },
  },

  {
    id: 204,
    categorySlug: 'business-operations',
    icon: 'BarChart3',
    title: 'Financial & Non-Financial MIS',
    shortDesc: 'Custom MIS dashboards for decision making.',
    fullDesc: 'BI-enabled MIS reports covering financial metrics, operational KPIs & management performance dashboards.',
    features: ['KPI Dashboards', 'MIS Reports', 'Forecasting'],
    image: { src: '/assets/services/mis-report.jpg', alt: 'Financial & Non-Financial MIS' },
  },

  {
    id: 205,
    categorySlug: 'business-operations',
    icon: 'Database',
    title: 'Data Migration & Analysis',
    shortDesc: 'Legacy to modern system migration.',
    fullDesc: 'Migration from Tally/SAP/Excel to Zoho, Power BI or cloud systems with full validation & cleanup.',
    features: ['Data Validation', 'Clean-up', 'Mapping', 'Automation'],
    image: { src: '/assets/services/data-migration.jpg', alt: 'Data Migration & Analysis' },
  },

  {
    id: 301,
    categorySlug: 'development-integration',
    icon: 'Code2',
    title: 'Custom Applications',
    shortDesc: 'Web, mobile & cloud apps for your workflows.',
    fullDesc: 'Angular, React, Kotlin, Node.js apps with full backend, database, APIs & deployment.',
    features: ['Web Apps', 'Mobile Apps', 'APIs', 'Dashboards'],
    cta: 'Build Custom App',
    image: { src: '/assets/services/custom-app.avif', alt: 'Custom Applications' },
  },

  {
    id: 302,
    categorySlug: 'development-integration',
    icon: 'Plug',
    title: 'API Development & Integrations',
    shortDesc: 'REST APIs, third-party integrations & sync.',
    fullDesc: 'Connect CRMs, ERPs, payment gateways, cloud services, custom systems & automation platforms.',
    features: ['REST', 'Webhooks', 'Security', 'Auth', 'Sync'],
    image: { src: '/assets/services/api.avif', alt: 'API Development & Integrations' },
  },

  {
    id: 303,
    categorySlug: 'development-integration',
    icon: 'Cloud',
    title: 'Cloud Infrastructure & Migration',
    shortDesc: 'AWS/Azure cloud setup & migration.',
    fullDesc: 'Server setup, RDS, load balancing, security, automation, cost optimization & monitoring.',
    features: ['AWS', 'Azure', 'Ubuntu', 'CI/CD', 'Scaling'],
    cta: 'Migrate to Cloud',
    image: { src: '/assets/services/data-migration.avif', alt: 'Cloud Infrastructure & Migration' },
  },

  {
    id: 401,
    categorySlug: 'automation-workflow',
    icon: 'Workflow',
    title: 'N8N Automation',
    shortDesc: 'Custom workflow automation using N8N.',
    fullDesc: 'Custom nodes, workflows, multi-system sync, data pipelines & self-hosted automation infra.',
    features: ['Custom Flows', 'APIs', 'Pipelines'],
    image: { src: '/assets/services/n8n-logo.png', alt: 'N8N Automation' },
  },

  {
    id: 402,
    categorySlug: 'automation-workflow',
    icon: 'Workflow',
    title: 'Make.com Automation',
    shortDesc: 'Low-code automation across 1,000+ apps.',
    fullDesc: 'Complex workflows, advanced scenarios, webhook automation, multi-branch flows.',
    features: ['Advanced Scenarios', 'Webhooks', 'Integrations'],
    image: { src: '/assets/services/make-logo.png', alt: 'Make.com Automation' },
  },

  {
    id: 403,
    categorySlug: 'automation-workflow',
    icon: 'Workflow',
    title: 'Zapier Automation',
    shortDesc: 'Fast automation for marketing, CRM & tasks.',
    fullDesc: 'High-speed zaps, multi-step automation, conditional flows, data movement.',
    features: ['Multi-Step Zaps', 'Logic', 'Scheduling'],
    image: { src: '/assets/services/zapier-logo.png', alt: 'Zapier Automation' },
  },

  {
    id: 404,
    categorySlug: 'automation-workflow',
    icon: 'Workflow',
    title: 'Power Automate',
    shortDesc: 'Microsoft ecosystem automation.',
    fullDesc: 'Power Automate flows for SharePoint, Dynamics, Outlook, Teams and full enterprise automation.',
    features: ['SharePoint', 'Data Flows', 'Enterprise Logic'],
    image: { src: '/assets/services/power-automate-logo.png', alt: 'Power Automate' },
  },

  {
    id: 501,
    categorySlug: 'training-empowerment',
    icon: 'GraduationCap',
    title: 'ERP / CRM / BI Training',
    shortDesc: 'Hands-on training programs.',
    fullDesc: 'Customized training for Zoho, Power BI, Tally, Salesforce & analytics teams.',
    features: ['Power BI', 'Zoho', 'Tally', 'Salesforce'],
    cta: 'Book Training',
    image: { src: '/assets/services/custom-training.png', alt: 'ERP / CRM / BI Training' },
  },

  {
    id: 502,
    categorySlug: 'training-empowerment',
    icon: 'GraduationCap',
    title: 'Automation Workshops',
    shortDesc: 'Team upskilling in automation tools.',
    fullDesc: 'Make.com, N8N, Zapier & Power Automate workshops for IT, operations & business teams.',
    features: ['N8N', 'Make.com', 'Zapier'],
    image: { src: '/assets/services/automation-workshops.avif', alt: 'Automation Workshops' },
  },
];

export const groupedServices: ServiceGroup[] = serviceCategories.map(cat => ({
  category: cat,
  services: services.filter(s => s.categorySlug === cat.slug),
}));

export const serviceHighlights = [
  {
    id: 1,
    label: 'Platform Implementations',
  },
  {
    id: 2,
    label: 'Business Process Optimization',
  },
  {
    id: 3,
    label: 'Automation & Workflow',
  },
  {
    id: 4,
    label: 'Cloud & Integration',
  },
  {
    id: 5,
    label: 'Training & Enablement',
  },
];

export const servicesWhyChoose = [
  {
    id: 1,
    title: 'Expert-Led Implementations',
    desc: 'Every service is executed by certified specialists with real execution experience — not just theory.',
    icon: 'ShieldCheck',
  },
  {
    id: 2,
    title: 'Process-First Approach',
    desc: 'We understand business workflows deeply, ensuring our solutions actually improve operations, not complicate them.',
    icon: 'Workflow',
  },
  {
    id: 3,
    title: 'Cross-Platform Expertise',
    desc: 'Zoho, Tally, NetSuite, Salesforce, Power BI, cloud, automation — all under one roof.',
    icon: 'Layers',
  },
  {
    id: 4,
    title: 'Fast Delivery Timelines',
    desc: 'Most implementations go live 40–60% faster thanks to our refined delivery frameworks.',
    icon: 'Timer',
  },
  {
    id: 5,
    title: 'Scalable & Future-Ready',
    desc: 'Solutions built to scale as your company grows — no rework, no messy patches.',
    icon: 'TrendingUp',
  },
  {
    id: 6,
    title: 'Ongoing Support',
    desc: 'We don’t just deliver — we stay with you for long-term updates, training, and optimization.',
    icon: 'LifeBuoy',
  },
];

export const servicesProcess = [
  {
    id: 1,
    title: 'Discovery & Requirements',
    desc: 'We understand business processes, challenges, and KPIs before suggesting any platform or solution.',
    icon: 'Search',
  },
  {
    id: 2,
    title: 'Solution Architecture',
    desc: 'We design the right setup — ERP modules, automation flows, integrations, infra, or dashboards.',
    icon: 'Puzzle',
  },
  {
    id: 3,
    title: 'Implementation',
    desc: 'Full configuration, development, data structuring, dashboards, automations, and deployment.',
    icon: 'Hammer',
  },
  {
    id: 4,
    title: 'Testing & Optimization',
    desc: 'UAT, workflows refinement, performance tuning, KPI validation, and improved usability.',
    icon: 'Sparkles',
  },
  {
    id: 5,
    title: 'Training & Go-Live',
    desc: 'Team training, documentation, go-live support, and productivity onboarding.',
    icon: 'GraduationCap',
  },
  {
    id: 6,
    title: 'Long-Term Support',
    desc: 'Continued guidance, enhancements, workshops, and platform upgrades.',
    icon: 'LifeBuoy',
  },
];

export const servicesDeepDive = [
  {
    id: 1,
    label: 'ERP, CRM & Platform Implementations',
    desc: 'Zoho, Tally Prime, NetSuite, Salesforce — enterprise-grade setup, automation, migration, reporting.',
    icon: 'Blocks',
    points: ['Implementation & Customization', 'Cross-platform Integrations', 'Data Migration', 'Dashboarding & Automation'],
    image: '/assets/deep/erp-suite.webp',
    cta: 'Explore Platforms',
  },
  {
    id: 2,
    label: 'Automation, Workflows & Integrations',
    desc: 'N8N, Make.com, Zapier, Power Automate — build automated workflows that run your business 24/7.',
    icon: 'Workflow',
    points: ['Low-code Automation', 'API Integrations', 'Multi-system Sync', 'Operations Automation'],
    image: '/assets/deep/automation-workflow.webp',
    cta: 'View Automation Services',
  },
  {
    id: 3,
    label: 'BI, Dashboards & Cloud Development',
    desc: 'Power BI, Cloud Apps, APIs, Cloud Infra — data-driven apps built for scalability and insights.',
    icon: 'BarChart3',
    points: ['Power BI Dashboards', 'Custom Applications', 'Cloud Deployment', 'API Development'],
    image: '/assets/deep/bi-cloud.webp',
    cta: 'See Development',
  },
];

export const servicesCTA = {
  title: 'Ready to accelerate your digital transformation?',
  subtitle: 'Whether you need ERP implementation, automation, analytics, or custom development — our experts are ready to build with you.',
  primary: 'Start Your Project',
  secondary: 'Schedule Consultation',
};

export const servicesFAQ = [
  {
    id: 1,
    question: 'Which businesses do you work with?',
    answer:
      'We work with startups, SMEs, and enterprises across finance, manufacturing, SaaS, retail, healthcare, and services. Our solutions adapt to small teams or large-scale operations.',
  },
  {
    id: 2,
    question: 'How do you decide which platform is right for us?',
    answer:
      'We begin with a discovery analysis to understand your workflows, data structure, needs, and goals. Based on this, we recommend the ideal platform and configuration.',
  },
  {
    id: 3,
    question: 'Do you provide post-implementation support?',
    answer: 'Yes — we offer ongoing support, enhancements, training, and periodic reviews to ensure continuous improvement.',
  },
  {
    id: 4,
    question: 'Do you offer custom development?',
    answer: 'Absolutely. We build APIs, integrations, custom modules, mobile apps, workflow automations, and dashboards.',
  },
  {
    id: 5,
    question: 'What are your pricing models?',
    answer: 'We offer fixed-scope pricing, retainer models, and hybrid billing based on project complexity and timelines.',
  },
  {
    id: 6,
    question: 'How long does an implementation take?',
    answer: 'Small projects: 2–4 weeks. Medium: 4–10 weeks. Enterprise rollouts: 3–6 months depending on scope.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Head of Operations, Axiom Traders',
    message:
      'The Zoho automation & Power BI dashboards completely transformed our reporting speed. What earlier took 4 hours is now 10 minutes.',
    avatar: '/assets/testimonials/user1.jpg',
    companyLogo: '/assets/testimonials/logo1.png',
  },
  {
    id: 2,
    name: 'Sanjana Verma',
    role: 'Finance Lead, BrightEdge Pvt Ltd',
    message: 'Their cloud migration strategy was flawless. Zero downtime, improved performance, and airtight security.',
    avatar: '/assets/testimonials/user2.jpg',
    companyLogo: '/assets/testimonials/logo2.png',
  },
  {
    id: 3,
    name: 'Karthik M',
    role: 'Founder, ScaleHub',
    message: "Custom app build + API integrations = massive efficiency boost. Couldn't imagine scaling without this.",
    avatar: '/assets/testimonials/user3.jpg',
    companyLogo: '/assets/testimonials/logo3.png',
  },
];
