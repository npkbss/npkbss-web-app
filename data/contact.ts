import { Mail, Phone, MessageCircle, MapPin, Clock, Users, Lightbulb, TrendingUp } from 'lucide-react';

// export const zohoProducts = [
//   'Zoho',
//   'Tally',
//   'Power BI',
//   'Salesforce',
//   'Netsuite',
//   'Dell Boomi',
//   'Custom Application Development',
//   'n8n',
//   'Make.com',
//   'Zapier',
//   'Power Automate',
//   'Consulting & Training',
//   'Accounting & Auditing Services',
//   'Registration Services',
//   'Inventory & Fixed Asset Audit',
//   'Financial and Non-Financial MIS services',
//   'TDL & Macro Tools Development',
//   'Google Sheet & drive Automation',
//   'API Integrations & Data Migration',
//   'Data Analysis & Reporting',
// ];

export const allServices: string[] = [
  'Zoho Ecosystem',
  'Tally Prime',
  'NetSuite',
  'Salesforce CRM',
  'Power BI Analytics',
  'Registration Services',
  'Accounting & Audit',
  'Fixed Assets & Mobile Audit',
  'Financial & Non-Financial MIS',
  'Data Migration & Analysis',
  'Custom Applications',
  'API Development & Integrations',
  'Cloud Infrastructure & Migration',
  'N8N Automation',
  'Make.com Automation',
  'Zapier Automation',
  'Power Automate',
  'Training & Consulting',
  'Automation Workshops',
];

export const contactInfo = [
  { icon: Mail, label: 'Email', value: 'npk@npkbss.in', color: 'text-blue-400' },
  { icon: Phone, label: 'Phone', value: '+91 8147707125', color: 'text-green-400' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', color: 'text-emerald-400' },
  { icon: MapPin, label: 'Location', value: 'Bangalore, Mumbai, Kurnool', color: 'text-purple-400' },
];

export const faqList = [
  {
    value: 'implementation',
    icon: Clock,
    title: 'How long does implementation take?',
    content:
      'Most Zoho implementations are completed within 2–4 weeks. Complex custom solutions may take longer; we’ll share a timeline during consultation.',
  },
  {
    value: 'training',
    icon: Users,
    title: 'Do you provide training for our team?',
    content: 'Yes — hands-on training, docs & recordings are included so your team can hit the ground running.',
  },
  {
    value: 'customization',
    icon: Lightbulb,
    title: 'Can you customize Zoho for our needs?',
    content: 'Absolutely. We build custom workflows, automations, integrations and dashboards tailored to your operations.',
  },
  {
    value: 'pricing',
    icon: TrendingUp,
    title: 'How much does it cost?',
    content: 'Cost depends on scope. Book a free consult to get a transparent estimate scoped to your needs.',
  },
];
