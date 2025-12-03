import type { HeroData, CategoryCard, FeaturedService, ProcessStep, BenefitItem, Testimonial, FinalCta, FaqItem } from '@/types/home';

export const heroData: HeroData = {
  badge: 'Finance · Operations · Automation · Analytics',
  title: 'Simplifying finance and operations with smart platforms & automation.',
  description:
    'We help SMEs implement ERPs, CRMs, analytics and automations — from Zoho and Tally to Power BI and n8n — so your accounts are clean, workflows are automated, and leadership gets real-time visibility.',
  primaryCta: {
    label: 'Book a Free Consultation',
    href: '/contact',
  },
  secondaryCta: {
    label: 'Explore Services',
    href: '/services',
  },
  image: {
    src: '/assets/home/home-hero-2.png',
    alt: 'Business automation illustration',
  },
  techStackLogos: [
    { name: 'Zoho', logo: '/assets/services/zoho-logo.avif' },
    { name: 'Tally', logo: '/assets/services/tally-logo.webp' },
    { name: 'Netsuite', logo: '/assets/services/netsuite-logo.png' },
    { name: 'Salesforce', logo: '/assets/services/salesforce.jpg' },
    { name: 'Power BI', logo: '/assets/services/power-bi-logo.avif' },
    { name: 'n8n', logo: '/assets/services/n8n-logo.png' },
    { name: 'Make.com', logo: '/assets/services/make-logo.png' },
    { name: 'Zapier', logo: '/assets/services/zapier-logo.png' },
    { name: 'Power Automate', logo: '/assets/services/power-automate-logo.png' },
  ],
};

export const serviceCategories: CategoryCard[] = [
  {
    id: 'platform-solutions',
    title: 'Platform Solutions',
    subtitle: 'ERPs · CRMs · Analytics',
    description: 'Implementation and optimization of Zoho, Tally, Netsuite, Salesforce and Power BI tailored to your workflows.',
    bullets: ['Zoho Ecosystem', 'Tally Prime', 'Netsuite ERP', 'Salesforce CRM', 'Power BI Analytics', 'Dellbhoomi'],
    link: '/services#platform-solutions',
  },
  {
    id: 'business-operations',
    title: 'Business Operations',
    subtitle: 'Accounting · Audit · MIS',
    description: 'Clean books, compliance management, MIS reporting and asset audits for scalable operations.',
    bullets: [
      'Registration Services',
      'Accounting & Audit',
      'Fixed & Mobile Assets Audit',
      'Financial & Non-Financial MIS',
      'Data Migration & Analysis',
    ],
    link: '/services#business-operations',
  },
  {
    id: 'development-integration',
    title: 'Development & Integration',
    subtitle: 'Custom Build · Connect · Extend',
    description: 'Applications, extensions and workflows when your business needs more than off-the-shelf tools.',
    bullets: ['Custom Applications', 'Excel Add-ins (Macros, VBA)', 'TDL & GSheet Automation'],
    link: '/services#development-integration',
  },
  {
    id: 'automation-workflow',
    title: 'Automation & Workflow',
    subtitle: 'No-Code · Low-Code · Integrations',
    description: 'Automate processes and eliminate manual work using n8n, Make.com, Zapier and Power Automate.',
    bullets: ['n8n', 'Make.com', 'Zapier', 'Power Automate'],
    link: '/services#automation-workflow',
  },
  {
    id: 'training-empowerment',
    title: 'Training & Empowerment',
    subtitle: 'Upskill · Enable · Grow',
    description: 'Role-based training and workshops for ERP, CRM, BI and automation tools.',
    bullets: ['ERP/CRM/BI Training', 'Automation Workshops'],
    link: '/services#training-empowerment',
  },
];

export const featuredServices: FeaturedService[] = [
  {
    id: 'zoho-ecosystem',
    category: 'Platform Solutions',
    title: 'Zoho Ecosystem Implementation',
    description: 'Zoho One, Books, CRM, Analytics and Flow — fully implemented and customized to your business workflows.',
    link: '/services#platform-solutions',
    image: {
      src: '/assets/services/zoho-logo.avif',
      alt: 'Zoho Ecosystem',
    },
    highlight: true,
  },
  {
    id: 'tally-prime',
    category: 'Finance & ERP',
    title: 'Tally Prime Implementation',
    description: 'End-to-end setup, GST compliance, multi-branch configuration, inventory and job costing for Tally Prime.',
    link: '/services#platform-solutions',
    image: {
      src: '/assets/home/tally-prime.avif',
      alt: 'Tally Prime',
    },
    highlight: false,
  },
  {
    id: 'power-bi',
    category: 'Analytics',
    title: 'Power BI Analytics & Dashboards',
    description: 'Interactive dashboards from Tally, Zoho, Excel and ERPs — build KPIs that give leadership real-time visibility.',
    link: '/services#platform-solutions',
    image: {
      src: '/assets/services/power-bi.jpg',
      alt: 'Power BI Analytics',
    },
    highlight: false,
  },
  {
    id: 'netsuite',
    category: 'ERP & Cloud',
    title: 'Netsuite ERP Setup & Support',
    description: 'Cloud-based ERP for finance, operations and CRM — ideal for scaling companies with complex processes.',
    link: '/services#platform-solutions',
    image: {
      src: '/assets/services/netsuite.png',
      alt: 'Netsuite ERP',
    },
    highlight: true,
  },
  {
    id: 'mis-reporting',
    category: 'Reporting & Insights',
    title: 'Financial & Non-Financial MIS',
    description: 'Build custom MIS packs — financial + operational — tailored for leadership and investor reporting.',
    link: '/services#business-operations',
    image: {
      src: '/assets/services/mis-report.jpg',
      alt: 'MIS Reporting',
    },
    highlight: false,
  },
  {
    id: 'salesforce',
    category: 'CRM & Cloud',
    title: 'Salesforce CRM Implementation',
    description: 'Unify sales, service and marketing workflows with a powerful CRM built for fast-growing teams.',
    link: '/services#platform-solutions',
    image: {
      src: '/assets/services/salesforce.jpg',
      alt: 'Salesforce CRM',
    },
    highlight: false,
  },
    {
    id: 'custom-applications',
    category: 'Development & Integration',
    title: 'Custom Applications',
    description: 'Custom web, mobile & cloud applications built to streamline your unique business workflows and processes.',
    link: '/services#development-integration',
    image: { src: '/assets/services/custom-app.avif', alt: 'Custom Applications' },
    highlight: false,
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Discover & Diagnose',
    description: 'We understand your processes, tools (Tally, Zoho, Excel, ERPs) and map your operational pain points.',
    icon: 'Search',
  },
  {
    id: 2,
    title: 'Design the Solution',
    description: 'We define the workflows, automations, dashboards and system architecture — tailored to your business.',
    icon: 'Settings',
  },
  {
    id: 3,
    title: 'Implement & Integrate',
    description: 'We execute the plan: systems setup, data migration, custom development and automation flows.',
    icon: 'Layers',
  },
  {
    id: 4,
    title: 'Train & Support',
    description: 'We conduct role-based training, provide documentation and offer ongoing support to keep operations smooth.',
    icon: 'GraduationCap',
  },
];

export const benefits: BenefitItem[] = [
  {
    id: 'expert-team',
    title: 'Experts in Finance, Ops & Automation',
    tag: 'Expertise',
    description:
      'Our team combines accounting, audit, ERP, CRM and automation experience — so you get solutions that actually fit your operations.',
    image: {
      src: '/assets/home/expertise.jpg',
      alt: 'Expert team',
    },
  },
  {
    id: 'platform-mastery',
    title: 'Deep Platform Mastery',
    tag: 'Technology',
    description:
      'We work across Zoho, Tally, Netsuite, Salesforce, Power BI, n8n, Make.com and more — we recommend the right platform, not the popular one.',
    image: {
      src: '/assets/home/innovation.jpg',
      alt: 'Platform mastery',
    },
  },
  {
    id: 'scalable-ops',
    title: 'Built for Scalability',
    tag: 'Reliability',
    description:
      'We design systems that grow with your business — clean data, predictable processes, dashboards, and automations that scale.',
    image: {
      src: '/assets/home/scalability.png',
      alt: 'Scalable operations',
    },
  },
  {
    id: 'end-to-end',
    title: 'End-to-End Implementation',
    tag: 'Delivery',
    description: 'From accounting cleanup and ERP setup to automation and reporting — everything under one roof, no fragmentation.',
    image: {
      src: '/assets/home/end-to-end.png',
      alt: 'End to end delivery',
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'manufacturing-powerbi',
    company: 'Midwest Manufacturing Co.',
    author: 'Rajesh Sharma',
    role: 'Finance Manager',
    quote:
      'Power BI dashboards built by NPK transformed our month-end closing. Reports that took 3 days now refresh automatically in minutes.',
    logo: '/assets/testimonials/company1.svg',
    image: '/assets/testimonials/rajesh-sharma.avif',
  },
  {
    id: 'distribution-zoho',
    company: 'Trinity Distribution Pvt. Ltd.',
    author: 'Anita Desai',
    role: 'Operations Head',
    quote: 'Zoho implementation streamlined our sales → delivery → billing workflow. We finally have visibility across all branches.',
    logo: '/assets/testimonials/company2.svg',
    image: '/assets/testimonials/anita-desai.jpg',
  },
  {
    id: 'retail-automation',
    company: 'Urban Retail Group',
    author: 'Sandeep Verma',
    role: 'COO',
    quote:
      'NPK automated our invoice approvals and daily reporting using n8n and Google Workspace. The manual workload dropped by almost 70%.',
    logo: '/assets/testimonials/company3.svg',
    image: '/assets/testimonials/sandeep-verma.jpg',
  },
];

export const finalCta: FinalCta = {
  title: 'Ready to simplify your finance and operations?',
  description:
    'Let’s map the right mix of platforms, automations and reporting that fits your business. No jargon. No fluff. Real results.',
  primaryCta: {
    label: 'Schedule a Consultation',
    href: '/contact',
  },
  secondaryCta: {
    label: 'Explore Services',
    href: '/services',
  },
  background: '/assets/home/ready-to-transform.jpeg',
};

export const faqs: FaqItem[] = [
  {
    id: 'services',
    question: 'Do you only work with specific platforms like Zoho or Tally?',
    answer:
      'No. We are platform-agnostic. We work across Zoho, Tally Prime, Netsuite, Salesforce, Power BI and multiple automation tools like n8n, Make.com and Zapier depending on what fits your business.',
  },
  {
    id: 'migration',
    question: 'Can you migrate our existing data from Tally, Excel or older systems?',
    answer:
      'Yes. We handle complete data migration—including cleaning, mapping, reconciliation and validation—from Tally, Excel, legacy ERPs or cloud tools into the new system.',
  },
  {
    id: 'accounting',
    question: 'Do you provide ongoing accounting, MIS and compliance support?',
    answer:
      'Yes. We provide monthly bookkeeping, MIS packs, audit support, fixed-asset tracking and ongoing operational assistance for finance teams.',
  },
  {
    id: 'automation',
    question: 'What kinds of business processes can you automate?',
    answer:
      'We automate approval workflows, daily reporting, sales-to-invoice pipelines, inter-department handovers, email/WhatsApp notifications, data syncs between apps, and much more.',
  },
  {
    id: 'training',
    question: 'Do you train our team on the tools you implement?',
    answer:
      'Absolutely. We provide role-based training for Zoho, Tally, Netsuite, Salesforce, Power BI and automation tools — along with documentation, recordings and SOPs.',
  },
  {
    id: 'timeline',
    question: 'What is the typical project timeline for implementation?',
    answer:
      'Smaller automation or dashboard projects take 1–3 weeks. Full ERP/CRM setups may take 4–10 weeks depending on processes, customizations and data migration.',
  },
  {
    id: 'pricing',
    question: 'What is your pricing model?',
    answer:
      'We offer customized pricing based on project scope, complexity, and client requirements. Our transparent approach ensures clear value and return on investment.',
  },
  {
    id: 'industries',
    question: 'What industries do you work with?',
    answer:
      'We serve multiple sectors including technology, finance, healthcare, manufacturing, and retail. Our flexible approach adapts to diverse industry requirements.',
  },
];
