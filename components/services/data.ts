import {
  PieChart,
  Database,
  Briefcase,
  Workflow,
  BarChart3,
  TrendingUp,
  Calculator,
  FileSpreadsheet,
  Code,
  Code2,
  Cloud,
  LightbulbIcon,
  Target,
  Plug,
} from 'lucide-react';

export interface Service {
  id: number;
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image?: { src: string; alt: string };
  gradient: string;
  features: string[];
  pricing: string;
  timeline: string;
  cta: string;
}

export interface ServiceGroup {
  id: number;
  title: string;
  icon: string;
  description: string;
  services: Service[];
}

export const serviceGroups: ServiceGroup[] = [
  /* ------------------------------------------------------
     ZOHO ECOSYSTEM
  ------------------------------------------------------ */
  {
    id: 1,
    title: 'Zoho Ecosystem',
    icon: '',
    description: 'Complete Zoho suite implementation and automation',
    services: [
      {
        id: 2,
        category: 'analytics',
        icon: PieChart,
        title: 'Zoho Analytics Implementation',
        shortDesc: 'Cloud-based BI platform for SMEs',
        fullDesc:
          'Implement Zoho Analytics to consolidate data from multiple sources and generate insightful reports with AI-powered analytics.',
        image: {
          src: '/assets/services/zoho-analytics.avif',
          alt: 'Zoho Analytics Implementation',
        },
        gradient: 'from-blue-500 via-purple-500 to-pink-500',
        features: [
          'Multi-source Data Integration',
          'AI-Powered Insights (Zia)',
          'Automated Report Scheduling',
          'White-Label Analytics',
          'Collaborative Dashboards',
          'Predictive Analytics',
          'Mobile App Configuration',
          'API Integration',
        ],
        pricing: 'Starting from ₹30,000',
        timeline: '1-4 weeks',
        cta: 'Launch Zoho Project',
      },
      {
        id: 5,
        category: 'erp',
        icon: Database,
        title: 'Zoho Books & Finance',
        shortDesc: 'Cloud accounting made simple',
        fullDesc:
          'Implement and customize Zoho Books for complete financial management including invoicing, expenses, inventory, and compliance.',
        image: {
          src: '/assets/services/zoho-books.avif',
          alt: 'Zoho Books & Finance',
        },
        gradient: 'from-blue-500 via-purple-500 to-pink-500',
        features: [
          'Zoho Books Setup & Configuration',
          'Client & Vendor Management',
          'Automated Invoicing',
          'Expense Tracking & Approval',
          'Bank Reconciliation',
          'GST Compliance & Filing',
          'Purchase Order Management',
          'Payment Gateway Integration',
        ],
        pricing: 'Starting from ₹20,000',
        timeline: '1-2 weeks',
        cta: 'Start with Zoho Books',
      },
      {
        id: 10,
        category: 'consulting',
        icon: Briefcase,
        title: 'Zoho One Implementation',
        shortDesc: 'Complete Zoho ecosystem setup',
        fullDesc: 'Full implementation of Zoho One suite including CRM, Finance, Projects, HR, and more - all integrated and customized.',
        image: {
          src: '/assets/services/zoho-one.avif',
          alt: 'Zoho One Implementation',
        },
        gradient: 'from-blue-500 via-purple-500 to-pink-500',
        features: [
          'Zoho CRM Setup',
          'Zoho Books Configuration',
          'Zoho Projects Implementation',
          'Zoho People HR Setup',
          'Zoho Desk Support Portal',
          'Cross-app Integration',
          'Custom Workflows',
          'Data Migration',
          'User Training',
        ],
        pricing: 'Starting from ₹1,00,000',
        timeline: '4-12 weeks',
        cta: 'Implement Zoho One',
      },
      {
        id: 7,
        category: 'automation',
        icon: Workflow,
        title: 'Business Process Automation',
        shortDesc: 'Eliminate repetitive tasks, boost efficiency',
        fullDesc: 'Automate your business workflows using cutting-edge tools like Zoho Flow, Power Automate, and custom scripts.',
        image: {
          src: '/assets/services/zoho-flow.avif',
          alt: 'Business Process Automation',
        },
        gradient: 'from-blue-500 via-purple-500 to-pink-500',
        features: [
          'Workflow Analysis & Design',
          'Zoho Flow Automation',
          'Power Automate Solutions',
          'Email Automation',
          'Document Generation',
          'Approval Workflows',
          'CRM Automation',
          'Notification Systems',
        ],
        pricing: 'Starting from ₹25,000',
        timeline: '2-4 weeks',
        cta: 'Automate Processes',
      },
    ],
  },

  /* ------------------------------------------------------
     POWER BI & ANALYTICS
  ------------------------------------------------------ */
  {
    id: 2,
    title: 'Power BI & Analytics',
    icon: '',
    description: 'Business intelligence and data visualization solutions',
    services: [
      {
        id: 1,
        category: 'analytics',
        icon: BarChart3,
        title: 'Power BI Consulting & Development',
        shortDesc: 'Transform raw data into powerful visual insights',
        fullDesc:
          'Leverage Microsoft Power BI to create interactive dashboards, custom reports, and real-time analytics that drive business decisions.',
        image: {
          src: '/assets/services/microsoft-powerbi.avif',
          alt: 'Power BI Consulting & Development',
        },
        gradient: 'from-yellow-400 via-orange-500 to-red-500',
        features: [
          'Custom Dashboard Development',
          'Data Modeling & Architecture',
          'DAX Formula Development',
          'Power BI Embedded Solutions',
          'Real-time Data Streaming',
          'Mobile Analytics Apps',
          'Row-Level Security Implementation',
          'Power BI Gateway Configuration',
        ],
        pricing: 'Starting from ₹50,000',
        timeline: '2-8 weeks',
        cta: 'Start Power BI Project',
      },
      {
        id: 3,
        category: 'analytics',
        icon: TrendingUp,
        title: 'Data Visualization Services',
        shortDesc: 'Beautiful, insightful data storytelling',
        fullDesc: 'Create stunning visualizations that communicate complex data clearly and drive action across your organization.',
        image: {
          src: '/assets/services/data-visualization.avif',
          alt: 'Data Visualization Services',
        },
        gradient: 'from-yellow-400 via-orange-500 to-red-500',
        features: [
          'Custom Chart Design',
          'Interactive Infographics',
          'Executive Summary Dashboards',
          'Storytelling with Data',
          'Responsive Design',
          'Print-Ready Reports',
        ],
        pricing: 'Starting from ₹25,000',
        timeline: '1-3 weeks',
        cta: 'Create Visualizations',
      },
    ],
  },

  /* ------------------------------------------------------
     TALLY & ACCOUNTING
  ------------------------------------------------------ */
  {
    id: 3,
    title: 'Tally & Accounting',
    icon: '',
    description: 'Accounting, ERP, and financial management solutions',
    services: [
      {
        id: 4,
        category: 'erp',
        icon: Calculator,
        title: 'Tally Prime Implementation',
        shortDesc: 'Complete accounting & inventory management',
        fullDesc:
          'Full-service Tally Prime implementation including setup, customization, data migration, and training for seamless business operations.',
        image: {
          src: '/assets/services/tally-prime.avif',
          alt: 'Tally Prime Implementation',
        },
        gradient: 'from-lime-500 via-green-500 to-emerald-600',
        features: [
          'Complete Tally Prime Setup',
          'Inventory Management Setup',
          'GST Configuration & Returns',
          'Job Costing',
          'Payroll Configuration',
          'Data Migration',
          'Custom Invoice Templates',
        ],
        pricing: 'Starting from ₹15,000',
        timeline: '1-3 weeks',
        cta: 'Setup Tally Prime',
      },
      {
        id: 9,
        category: 'automation',
        icon: Code,
        title: 'Custom Excel & Tally Add-ins',
        shortDesc: 'Extend functionality with custom tools',
        fullDesc: 'Develop custom add-ins for Excel and Tally to extend functionality and meet specific business requirements.',
        image: {
          src: '/assets/services/microsoft-excel.avif',
          alt: 'Custom Excel & Tally Add-ins',
        },
        gradient: 'from-lime-500 via-green-500 to-emerald-600',
        features: [
          'Excel VBA Macros',
          'Excel Add-in Development',
          'Tally TDL Customization',
          'Automated Report Generation',
          'Import/Export Tools',
        ],
        pricing: 'Starting from ₹15,000',
        timeline: '1-3 weeks',
        cta: 'Build Custom Tools',
      },
      {
        id: 6,
        category: 'erp',
        icon: FileSpreadsheet,
        title: 'Accounting & Bookkeeping Services',
        shortDesc: 'Professional accounting support',
        fullDesc: 'Comprehensive accounting services including bookkeeping, financial statements, tax filing, and compliance management.',
        image: {
          src: '/assets/services/accounting.avif',
          alt: 'Accounting & Bookkeeping Services',
        },
        gradient: 'from-lime-500 via-green-500 to-emerald-600',
        features: [
          'Daily Bookkeeping',
          'Bank Reconciliation',
          'Financial Statement Preparation',
          'GST Return Filing',
          'Income Tax Returns',
          'Payroll Processing',
        ],
        pricing: 'Starting from ₹5,000/month',
        timeline: 'Monthly Service',
        cta: 'Get Accounting Support',
      },
    ],
  },

  /* ------------------------------------------------------
     DEVELOPMENT, INTEGRATION, CLOUD
  ------------------------------------------------------ */
  {
    id: 4,
    title: 'Development, Integration & Cloud',
    icon: '',
    description: 'Complete technical solutions from code to cloud',
    services: [
      {
        id: 13,
        category: 'development',
        icon: Code2,
        title: 'Custom Application Development',
        shortDesc: 'Web & mobile solutions tailored to business needs',
        fullDesc:
          'End-to-end custom application development: modern web apps, native mobile apps, and cloud solutions tailored to your goals.',
        image: {
          src: '/assets/services/custom-app.avif',
          alt: 'Custom Application Development',
        },
        gradient: 'from-indigo-500 via-blue-600 to-cyan-500',
        features: [
          'Modern Web Apps (Angular/React)',
          'Android Native Apps',
          'API Development',
          'Cloud Deployment',
          'CI/CD Pipelines',
          'Third-party Integrations',
        ],
        pricing: 'Starting from ₹1,50,000',
        timeline: '6-16 weeks',
        cta: 'Build Custom App',
      },
      {
        id: 8,
        category: 'automation',
        icon: Plug,
        title: 'API Development & Integration',
        shortDesc: 'Connect business systems seamlessly',
        fullDesc: 'Custom API development and integrations to connect CRMs, ERPs, gateways, or any external systems in real-time.',
        image: {
          src: '/assets/services/api.avif',
          alt: 'API Development & Integration',
        },
        gradient: 'from-indigo-500 via-blue-600 to-cyan-500',
        features: [
          'REST API Development',
          'Third-party Integrations',
          'Webhook Setup',
          'Data Sync',
          'Authentication & Security',
          'Error Logging',
        ],
        pricing: 'Starting from ₹40,000',
        timeline: '3-6 weeks',
        cta: 'Build Integrations',
      },
      {
        id: 14,
        category: 'consulting',
        icon: Cloud,
        title: 'Cloud Infrastructure & Data Migration',
        shortDesc: 'Seamless cloud transformation',
        fullDesc: 'Cloud infrastructure setup, server configuration, migration from legacy systems, backup, scaling, and full monitoring.',
        image: {
          src: '/assets/services/data-migration.avif',
          alt: 'Cloud Infrastructure & Data Migration',
        },
        gradient: 'from-indigo-500 via-blue-600 to-cyan-500',
        features: [
          'AWS/Azure Setup',
          'RDS Databases',
          'Auto-Scaling Architecture',
          'Backup & Disaster Recovery',
          'Cloud Security',
          'Cost Optimization',
        ],
        pricing: 'Starting from ₹60,000',
        timeline: '2-6 weeks',
        cta: 'Migrate to Cloud',
      },
    ],
  },

  /* ------------------------------------------------------
     CONSULTING & TRAINING
  ------------------------------------------------------ */
  {
    id: 5,
    title: 'Consulting & Training',
    icon: '',
    description: 'Strategic guidance and business empowerment',
    services: [
      {
        id: 11,
        category: 'consulting',
        icon: LightbulbIcon,
        title: 'IT Consulting & Strategy',
        shortDesc: 'Strategic technology guidance',
        fullDesc: 'Expert IT consulting to help you optimize infrastructure, modernize systems, and plan your digital transformation path.',
        image: {
          src: '/assets/services/it-consulting.avif',
          alt: 'IT Consulting & Strategy',
        },
        gradient: 'from-orange-500 via-red-500 to-pink-600',
        features: [
          'Digital Transformation Strategy',
          'Tech Stack Selection',
          'Process Optimization',
          'Security Audits',
          'Infrastructure Planning',
        ],
        pricing: 'Starting from ₹50,000',
        timeline: '2-4 weeks',
        cta: 'Get IT Consultation',
      },
      {
        id: 12,
        category: 'consulting',
        icon: Target,
        title: 'Training & Workshops',
        shortDesc: 'Empower your team with knowledge',
        fullDesc: 'Customized training programs on Power BI, Tally, Zoho, and Excel to improve team productivity and technical competence.',
        image: {
          src: '/assets/services/training.avif',
          alt: 'Training & Workshops',
        },
        gradient: 'from-orange-500 via-red-500 to-pink-600',
        features: ['Power BI Training', 'Tally Prime Training', 'Zoho Suite Training', 'Excel Advanced Training', 'Certification Support'],
        pricing: 'Starting from ₹10,000/day',
        timeline: '1-5 days',
        cta: 'Book Training Session',
      },
    ],
  },
];
