'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BarChart3,
  Database,
  Plug,
  Calculator,
  TrendingUp,
  FileSpreadsheet,
  Layers,
  Zap,
  CheckCircle2,
  Clock,
  Shield,
  Users,
  Target,
  Sparkles,
  Code,
  Briefcase,
  Globe,
  PieChart,
  FileText,
  Workflow,
  Package,
  DollarSign,
  LightbulbIcon,
  Rocket,
  Award,
  Phone,
  ArrowDown,
  Code2,
  Cloud,
} from 'lucide-react';
import Link from 'next/link';

// --- Data ---
const stats = [
  { value: '100+', label: 'Projects Delivered', icon: <Rocket className="h-5 w-5" /> },
  { value: '50+', label: 'Happy Clients', icon: <Users className="h-5 w-5" /> },
  { value: '24/7', label: 'Support Available', icon: <Clock className="h-5 w-5" /> },
  { value: '98%', label: 'Success Rate', icon: <Award className="h-5 w-5" /> },
];

const categories = [
  { id: 'all', name: 'All Services', icon: <Layers className="h-4 w-4" /> },
  { id: 'analytics', name: 'Analytics & BI', icon: <BarChart3 className="h-4 w-4" /> },
  { id: 'erp', name: 'ERP & Finance', icon: <Calculator className="h-4 w-4" /> },
  { id: 'automation', name: 'Automation', icon: <Workflow className="h-4 w-4" /> },
  { id: 'development', name: 'Development', icon: <Code2 className="h-4 w-4" /> }, // NEW
  { id: 'consulting', name: 'Consulting', icon: <Briefcase className="h-4 w-4" /> },
];

const allServices = [
  // Analytics & BI Services
  {
    id: 1,
    category: 'analytics',
    icon: <BarChart3 className="h-8 w-8" />,
    title: 'Power BI Consulting & Development',
    shortDesc: 'Transform raw data into powerful visual insights',
    fullDesc:
      'Leverage Microsoft Power BI to create interactive dashboards, custom reports, and real-time analytics that drive business decisions.',
    image: { src: '/assets/services/power-bi-hero.jpg', alt: 'Power BI Consulting & Development' },
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
    deliverables: [
      'Interactive visual reports',
      'Automated data refresh schedules',
      'Custom KPI tracking dashboards',
      'Power BI training documentation',
    ],
    technologies: ['Power BI Desktop', 'Power BI Service', 'Power Query', 'DAX', 'M Language', 'Azure'],
    pricing: 'Starting from ₹50,000',
    timeline: '2-8 weeks',
    cta: 'Start Power BI Project',
  },
  {
    id: 2,
    category: 'analytics',
    icon: <PieChart className="h-8 w-8" />,
    title: 'Zoho Analytics Implementation',
    shortDesc: 'Cloud-based BI platform for SMEs',
    fullDesc:
      'Implement Zoho Analytics to consolidate data from multiple sources and generate insightful reports with AI-powered analytics.',
    image: { src: '/assets/services/zoho-analytics-logo.avif', alt: 'Zoho Analytics Implementation' },
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
    deliverables: [
      'Configured Zoho Analytics workspace',
      'Custom reports and dashboards',
      'Data connectors setup',
      'User training sessions',
    ],
    technologies: ['Zoho Analytics', 'Zoho Creator', 'Zoho CRM', 'REST APIs', 'SQL'],
    pricing: 'Starting from ₹30,000',
    timeline: '1-4 weeks',
    cta: 'Launch Zoho Project',
  },
  {
    id: 3,
    category: 'analytics',
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Data Visualization Services',
    shortDesc: 'Beautiful, insightful data storytelling',
    fullDesc: 'Create stunning visualizations that communicate complex data clearly and drive action across your organization.',
    image: { src: '/assets/services/data-viz.jpg', alt: 'Data Visualization Services' },
    gradient: 'from-green-400 via-emerald-500 to-teal-600',
    features: [
      'Custom Chart Design',
      'Interactive Infographics',
      'Executive Summary Dashboards',
      'Storytelling with Data',
      'Responsive Design',
      'Print-Ready Reports',
    ],
    deliverables: ['Visual dashboard templates', 'Chart style guide', 'Interactive reports'],
    technologies: ['D3.js', 'Tableau', 'Power BI', 'Python', 'R'],
    pricing: 'Starting from ₹25,000',
    timeline: '1-3 weeks',
    cta: 'Create Visualizations',
  },
  // ERP & Finance Services
  {
    id: 4,
    category: 'erp',
    icon: <Calculator className="h-8 w-8" />,
    title: 'Tally Prime Implementation',
    shortDesc: 'Complete accounting & inventory management',
    fullDesc:
      'Full-service Tally Prime implementation including setup, customization, data migration, and training for seamless business operations.',
    image: { src: '/assets/services/tally-prime-hero.jpg', alt: 'Tally Prime Implementation' },
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    features: [
      'Complete Tally Prime Setup',
      'Chart of Accounts Configuration',
      'GST Configuration & Returns',
      'Inventory Management Setup',
      'Multi-currency Support',
      'Cost Center & Job Costing',
      'Payroll Configuration',
      'Data Migration from Old Systems',
      'Custom Invoice Templates',
      'User Rights & Security',
    ],
    deliverables: ['Fully configured Tally Prime', 'Migrated historical data', 'Custom reports', 'Training materials', 'User manual'],
    technologies: ['Tally Prime', 'TDL (Tally Definition Language)', 'ODBC', 'Tally.NET'],
    pricing: 'Starting from ₹15,000',
    timeline: '1-3 weeks',
    cta: 'Setup Tally Prime',
  },
  {
    id: 5,
    category: 'erp',
    icon: <Database className="h-8 w-8" />,
    title: 'Zoho Books & Finance',
    shortDesc: 'Cloud accounting made simple',
    fullDesc:
      'Implement and customize Zoho Books for complete financial management including invoicing, expenses, inventory, and compliance.',
    image: { src: '/assets/services/zoho-books-logo.avif', alt: 'Zoho Books & Finance' },
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
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
    deliverables: ['Configured Zoho Books account', 'Custom invoice templates', 'Automated workflows', 'Financial reports'],
    technologies: ['Zoho Books', 'Zoho Inventory', 'Payment Gateways', 'Banking APIs'],
    pricing: 'Starting from ₹20,000',
    timeline: '1-2 weeks',
    cta: 'Start with Zoho Books',
  },
  {
    id: 6,
    category: 'erp',
    icon: <FileSpreadsheet className="h-8 w-8" />,
    title: 'Accounting & Bookkeeping Services',
    shortDesc: 'Professional accounting support',
    fullDesc: 'Comprehensive accounting services including bookkeeping, financial statements, tax filing, and compliance management.',
    image: { src: '/assets/services/accounting.jpg', alt: 'Accounting & Bookkeeping Services' },
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    features: [
      'Daily Bookkeeping',
      'Bank Reconciliation',
      'Financial Statement Preparation',
      'GST Return Filing',
      'Income Tax Returns',
      'TDS Compliance',
      'Payroll Processing',
      'Accounts Payable/Receivable',
    ],
    deliverables: ['Monthly financial statements', 'Tax returns filed', 'Compliance reports', 'Financial analysis'],
    technologies: ['Tally', 'Zoho Books', 'Excel', 'GST Portal', 'Income Tax Portal'],
    pricing: 'Starting from ₹5,000/month',
    timeline: 'Ongoing monthly service',
    cta: 'Get Accounting Support',
  },
  // Automation Services
  {
    id: 7,
    category: 'automation',
    icon: <Workflow className="h-8 w-8" />,
    title: 'Business Process Automation',
    shortDesc: 'Eliminate repetitive tasks, boost efficiency',
    fullDesc: 'Automate your business workflows using cutting-edge tools like Zoho Flow, Power Automate, and custom scripts.',
    image: { src: '/assets/services/automation.jpg', alt: 'Business Process Automation' },
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
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
    deliverables: ['Automated workflows', 'Process documentation', 'Integration setup', 'Training & handover'],
    technologies: ['Zoho Flow', 'Power Automate', 'Zapier', 'Python', 'Node.js'],
    pricing: 'Starting from ₹25,000',
    timeline: '2-4 weeks',
    cta: 'Automate Processes',
  },
  {
    id: 8,
    category: 'automation',
    icon: <Plug className="h-8 w-8" />,
    title: 'API Development & Integration',
    shortDesc: 'Connect your business systems seamlessly',
    fullDesc: 'Custom API development and integration services to connect different platforms, sync data, and create unified systems.',
    image: { src: '/assets/services/api-integration.jpg', alt: 'API Development & Integration' },
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    features: [
      'REST API Development',
      'Third-party API Integration',
      'Webhook Configuration',
      'Data Synchronization',
      'Authentication & Security',
      'API Documentation',
      'Rate Limiting & Caching',
      'Error Handling & Logging',
    ],
    deliverables: ['Functional APIs', 'Integration documentation', 'Testing reports', 'Deployment support'],
    technologies: ['Node.js', 'Python', 'REST', 'GraphQL', 'OAuth 2.0', 'JWT'],
    pricing: 'Starting from ₹40,000',
    timeline: '3-6 weeks',
    cta: 'Build Integrations',
  },
  {
    id: 9,
    category: 'automation',
    icon: <Code className="h-8 w-8" />,
    title: 'Custom Excel & Tally Add-ins',
    shortDesc: 'Extend functionality with custom tools',
    fullDesc: 'Develop custom add-ins for Excel and Tally to extend functionality and meet specific business requirements.',
    image: { src: '/assets/services/addins.jpg', alt: 'Custom Excel & Tally Add-ins' },
    gradient: 'from-lime-500 via-green-500 to-emerald-600',
    features: [
      'Excel VBA Macros',
      'Excel Add-in Development',
      'Tally TDL Customization',
      'Custom Functions',
      'Automated Report Generation',
      'Data Import/Export Tools',
    ],
    deliverables: ['Custom add-in/plugin', 'User manual', 'Installation guide', 'Support'],
    technologies: ['VBA', 'Office.js', 'TDL', 'XML', 'ODBC'],
    pricing: 'Starting from ₹15,000',
    timeline: '1-3 weeks',
    cta: 'Build Custom Tools',
  },
  // Consulting Services
  {
    id: 10,
    category: 'consulting',
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Zoho One Implementation',
    shortDesc: 'Complete Zoho ecosystem setup',
    fullDesc: 'Full implementation of Zoho One suite including CRM, Finance, Projects, HR, and more - all integrated and customized.',
    image: { src: '/assets/services/zoho-one-logo.avif', alt: 'Zoho One Implementation' },
    gradient: 'from-sky-500 via-blue-500 to-indigo-600',
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
    deliverables: ['Fully integrated Zoho ecosystem', 'Custom workflows', 'User access setup', 'Training documentation'],
    technologies: ['Zoho CRM', 'Zoho Books', 'Zoho Projects', 'Zoho Creator', 'Deluge Script'],
    pricing: 'Starting from ₹1,00,000',
    timeline: '4-12 weeks',
    cta: 'Implement Zoho One',
  },
  {
    id: 11,
    category: 'consulting',
    icon: <LightbulbIcon className="h-8 w-8" />,
    title: 'IT Consulting & Strategy',
    shortDesc: 'Strategic technology guidance',
    fullDesc:
      'Expert IT consulting to help you make informed technology decisions, optimize infrastructure, and plan digital transformation.',
    image: { src: '/assets/services/it-consulting.jpg', alt: 'IT Consulting & Strategy' },
    gradient: 'from-teal-500 via-cyan-500 to-blue-600',
    features: [
      'IT Infrastructure Assessment',
      'Digital Transformation Strategy',
      'Technology Stack Selection',
      'Cloud Migration Planning',
      'Security Audits',
      'Process Optimization',
      'Cost-Benefit Analysis',
      'Vendor Evaluation',
    ],
    deliverables: ['Assessment report', 'Strategic recommendations', 'Implementation roadmap', 'ROI analysis'],
    technologies: ['Cloud Platforms', 'Enterprise Software', 'Security Tools', 'Analytics Platforms'],
    pricing: 'Starting from ₹50,000',
    timeline: '2-4 weeks',
    cta: 'Get IT Consultation',
  },
  {
    id: 12,
    category: 'consulting',
    icon: <Target className="h-8 w-8" />,
    title: 'Training & Workshops',
    shortDesc: 'Empower your team with knowledge',
    fullDesc: 'Customized training programs on Power BI, Tally, Zoho, Excel, and other business tools for your team.',
    image: { src: '/assets/services/training.jpg', alt: 'Training & Workshops' },
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    features: [
      'Power BI Training',
      'Tally Prime Training',
      'Zoho Suite Training',
      'Advanced Excel Training',
      'Hands-on Workshops',
      'Certification Support',
      'Custom Curriculum',
      'Post-training Support',
    ],
    deliverables: ['Training materials', 'Practice exercises', 'Video recordings', 'Certificates'],
    technologies: ['Power BI', 'Tally', 'Zoho', 'Excel', 'Various BI Tools'],
    pricing: 'Starting from ₹10,000/day',
    timeline: '1-5 days',
    cta: 'Book Training Session',
  },
  {
    id: 13,
    category: 'development',
    icon: <Code2 className="h-8 w-8" />,
    title: 'Custom Application Development',
    shortDesc: 'Bespoke web & mobile solutions tailored to your business',
    fullDesc:
      'End-to-end custom application development services including modern web applications, native Android apps, and cloud-based solutions designed specifically for your business needs.',
    image: { src: '/assets/services/custom-dev.jpg', alt: 'Custom Application Development' },
    gradient: 'from-indigo-600 via-blue-600 to-cyan-500',
    features: [
      'Angular Web Applications',
      'Kotlin Android Native Apps',
      'Progressive Web Apps (PWA)',
      'RESTful API Development',
      'SQL Server Database Design',
      'AWS/Azure Cloud Deployment',
      'Ubuntu Server Configuration',
      'CI/CD Pipeline Setup',
      'Responsive UI/UX Design',
      'Third-party Integrations',
      'Performance Optimization',
      'Security & Authentication',
    ],
    deliverables: [
      'Fully functional web/mobile application',
      'Source code & documentation',
      'Cloud deployment & setup',
      'Admin panel & user management',
      'Testing & quality assurance reports',
      'Post-launch support',
    ],
    technologies: ['Angular', 'Kotlin', 'TypeScript', 'SQL Server Express', 'AWS/Azure', 'Ubuntu Linux', 'Node.js', 'Docker'],
    pricing: 'Starting from ₹1,50,000',
    timeline: '6-16 weeks',
    cta: 'Build Custom App',
  },

  {
    id: 14,
    category: 'consulting',
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud Infrastructure & Data Migration',
    shortDesc: 'Seamless cloud transformation and data migration services',
    fullDesc:
      'Expert cloud infrastructure setup and data migration services to move your business systems to AWS/Azure with zero downtime and complete data integrity.',
    image: { src: '/assets/services/cloud-migration.jpg', alt: 'Cloud Infrastructure & Data Migration' },
    gradient: 'from-sky-400 via-blue-500 to-indigo-600',
    features: [
      'Data Migration (Tally, SAP, Oracle, etc.)',
      'AWS/Azure Instance Creation',
      'RDS Database Configuration',
      'Cloud Architecture Design',
      'Server Setup & Configuration',
      'Ubuntu Linux Server Management',
      'Load Balancing & Auto-scaling',
      'Backup & Disaster Recovery',
      'Cloud Security Implementation',
      'Cost Optimization Strategy',
      'Monitoring & Maintenance',
      'DevOps Implementation',
    ],
    deliverables: [
      'Migrated data with validation reports',
      'Configured cloud infrastructure',
      'Documentation & runbooks',
      'Backup & recovery procedures',
      'Monitoring dashboard setup',
      'Team training & handover',
    ],
    technologies: ['AWS EC2/RDS', 'Azure VMs/SQL', 'Ubuntu Server', 'Docker', 'Kubernetes', 'CloudWatch', 'Terraform', 'Git'],
    pricing: 'Starting from ₹60,000',
    timeline: '2-6 weeks',
    cta: 'Migrate to Cloud',
  },
];

const featuredServices = [
  {
    title: 'Power BI Analytics',
    icon: <BarChart3 className="h-12 w-12" />,
    description: 'Transform your data into actionable insights',
    stats: '50+ Dashboards Built',
    gradient: 'from-yellow-400 to-orange-600',
    image: { src: '/assets/services/power-bi-logo.jpeg', alt: 'Power BI Analytics' },
  },
  {
    title: 'Tally Solutions',
    icon: <Calculator className="h-12 w-12" />,
    description: 'Streamline your accounting operations',
    stats: '100+ Implementations',
    gradient: 'from-purple-500 to-pink-600',
    image: { src: '/assets/services/tally-logo.png', alt: 'Tally Solutions' },
  },
  {
    title: 'Zoho Integration',
    icon: <Workflow className="h-12 w-12" />,
    description: 'Connect and automate your business',
    stats: '200+ Integrations',
    gradient: 'from-blue-500 to-cyan-500',
    image: { src: '/assets/services/zoho-logo.png', alt: 'Zoho Integration' },
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description:
      'We dive deep into understanding your business challenges, goals, and requirements through detailed consultation sessions.',
    icon: <Target className="h-6 w-6" />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    step: '02',
    title: 'Proposal & Planning',
    description:
      'Receive a comprehensive proposal with timeline, deliverables, and pricing. We create a detailed project plan tailored to your needs.',
    icon: <FileText className="h-6 w-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '03',
    title: 'Implementation & Development',
    description: 'Our expert team executes the plan with precision, keeping you updated at every milestone with regular progress reports.',
    icon: <Code className="h-6 w-6" />,
    color: 'from-orange-500 to-red-500',
  },
  {
    step: '04',
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures everything works flawlessly. We verify all features, integrations, and performance benchmarks.',
    icon: <Shield className="h-6 w-6" />,
    color: 'from-green-500 to-emerald-500',
  },
  {
    step: '05',
    title: 'Training & Deployment',
    description:
      'Comprehensive training for your team followed by smooth deployment. We ensure everyone is comfortable with the new system.',
    icon: <Users className="h-6 w-6" />,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    step: '06',
    title: 'Support & Optimization',
    description: 'Ongoing support and continuous optimization to ensure your solution evolves with your business needs.',
    icon: <Zap className="h-6 w-6" />,
    color: 'from-pink-500 to-rose-500',
  },
];

const technologies = [
  { name: 'Power BI', icon: '📊', color: 'from-yellow-400 to-orange-500' },
  { name: 'Tally Prime', icon: '💼', color: 'from-purple-500 to-pink-500' },
  { name: 'Zoho', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
  { name: 'Excel', icon: '📈', color: 'from-green-500 to-emerald-500' },
  { name: 'Python', icon: '🐍', color: 'from-blue-600 to-indigo-600' },
  { name: 'Node.js', icon: '💚', color: 'from-green-600 to-teal-600' },
  { name: 'SQL', icon: '🗄️', color: 'from-orange-500 to-red-500' },
  { name: 'Azure', icon: '☁️', color: 'from-blue-400 to-blue-600' },
  { name: 'REST API', icon: '🔌', color: 'from-indigo-500 to-purple-500' },
  { name: 'Power Automate', icon: '⚙️', color: 'from-cyan-500 to-blue-500' },
  { name: 'VBA', icon: '📝', color: 'from-gray-600 to-gray-800' },
  { name: 'TDL', icon: '⚡', color: 'from-pink-500 to-rose-500' },
];

const industries = [
  {
    name: 'Manufacturing',
    icon: <Package className="h-8 w-8" />,
    services: ['Inventory Management', 'Production Analytics', 'Quality Control'],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Retail & E-commerce',
    icon: <Globe className="h-8 w-8" />,
    services: ['POS Integration', 'Sales Analytics', 'Customer Insights'],
    color: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Healthcare',
    icon: <Users className="h-8 w-8" />,
    services: ['Patient Management', 'Billing Systems', 'Compliance'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Finance & Banking',
    icon: <DollarSign className="h-8 w-8" />,
    services: ['Risk Analytics', 'Portfolio Management', 'Reporting'],
    color: 'from-orange-500 to-red-600',
  },
  {
    name: 'Real Estate',
    icon: <Briefcase className="h-8 w-8" />,
    services: ['Property Management', 'Lead Tracking', 'Financial Reports'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Logistics',
    icon: <Layers className="h-8 w-8" />,
    services: ['Fleet Management', 'Route Optimization', 'Tracking'],
    color: 'from-teal-500 to-green-600',
  },
];

const whyChooseUs = [
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Certified Experts',
    description: 'Microsoft, Zoho, and Tally certified professionals',
    stat: '15+',
    statLabel: 'Certifications',
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: 'On-Time Delivery',
    description: 'Projects delivered on schedule, every time',
    stat: '98%',
    statLabel: 'On-Time Rate',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Dedicated Support',
    description: '24/7 customer support and assistance',
    stat: '24/7',
    statLabel: 'Availability',
  },
  {
    icon: <Target className="h-10 w-10" />,
    title: 'Result-Focused',
    description: 'Measurable ROI and business outcomes',
    stat: '3X',
    statLabel: 'Avg ROI',
  },
];

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredServices = activeCategory === 'all' ? allServices : allServices.filter(s => s.category === activeCategory);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gray-50">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <div
            className="absolute top-40 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '1s' }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '5s', animationDelay: '2s' }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-full mb-8 animate-in slide-in-from-top duration-700">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Trusted by 50+ Businesses Across India</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 animate-in slide-in-from-bottom duration-700">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                Transform Your Business
              </span>
              <br />
              <span className="text-foreground">with Expert Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-in fade-in duration-1000 delay-200">
              From powerful analytics to seamless automation, we deliver comprehensive IT solutions that drive growth and efficiency
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-in fade-in duration-1000 delay-300">
              <Button
                size="lg"
                className="shadow-accent hover:shadow-hover group relative overflow-hidden"
                onClick={handleScrollToServices}
              >
                <span className="relative z-10 flex items-center">
                  Explore Our Services
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="cursor-pointer group shadow-accent hover:shadow-hover">
                  Schedule Free Consultation
                  <Clock className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-soft hover:shadow-accent transition-all duration-500 animate-in slide-in-from-bottom"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes gradient {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl p-8 bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="relative mb-6 inline-flex">
                  {service.image ? (
                    <div className={`p-0.5 rounded-2xl bg-gradient-to-br ${service.gradient}`}>
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        width={60}
                        height={100}
                        objectFit="contain"
                        className="rounded-2xl"
                      />
                    </div>
                  ) : (
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}
                    >
                      {service.icon}
                    </div>
                  )}
                  {hoveredService === index && (
                    <div className="absolute inset-0 blur-xl bg-gradient-to-br from-primary/50 to-secondary/50 animate-pulse" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">
                  <Award className="h-4 w-4" />
                  {service.stats}
                </div>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 scroll-mt-10" id="services-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">Complete Service Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of services designed to accelerate your digital transformation
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden ${
                  activeCategory === cat.id
                    ? 'text-white shadow-accent'
                    : 'bg-background text-muted-foreground hover:text-primary border border-border hover:border-primary/50'
                }`}
              >
                {activeCategory === cat.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-gradient" />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {cat.icon}
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-accent animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`} />
                      <div className="absolute inset-0 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-500">
                        <div className="text-center">
                          {service.icon}
                          <div className="mt-4 text-sm font-semibold uppercase tracking-wider">{service.category}</div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{service.shortDesc}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-xs font-medium">
                      <DollarSign className="h-3 w-3" />
                      {service.pricing}
                    </div>
                    <div className="inline-flex items-center gap-1 bg-secondary/10 text-secondary px-3 py-1.5 rounded-lg text-xs font-medium">
                      <Clock className="h-3 w-3" />
                      {service.timeline}
                    </div>
                  </div>
                  {/* CTA Button */}
                  <Button className="w-full group/btn relative overflow-hidden" variant="outline">
                    <span className="relative z-10 flex items-center justify-center">
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity`}
                    />
                  </Button>
                </div>
                {/* Hover Details Overlay */}
                <div className="absolute inset-0 bg-background/95 backdrop-blur-sm p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0 overflow-y-auto custom-scrollbar">
                  <div className="h-full flex flex-col">
                    <h4 className="text-lg font-bold text-foreground mb-3">{service.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{service.fullDesc}</p>
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-foreground mb-2">All Features:</h5>
                      <div className="grid grid-cols-1 gap-1.5">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-foreground mb-2">Deliverables:</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {service.deliverables.map((item, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Button className={`w-full mb-2 bg-gradient-to-r ${service.gradient} text-white border-0 hover:opacity-90`}>
                        Get Started Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 4px;
            }

            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(59, 130, 246, 0.3);
              border-radius: 9999px;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(59, 130, 246, 0.5);
            }

            /* Firefox */
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: rgba(59, 130, 246, 0.3) transparent;
            }
          `}</style>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '50px 50px' }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Process</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">How We Work With You</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A streamlined, proven methodology that delivers results every time
            </p>
          </div>
          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto">
            {processSteps.map((item, index) => (
              <div key={index} className="relative flex gap-8 mb-12 group">
                {index < 5 && <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-secondary opacity-30" />}
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.step}
                  </div>
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  />
                </div>
                <div className="flex-1 bg-background rounded-2xl p-6 border border-border group-hover:border-primary/50 group-hover:shadow-accent transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Technology Stack</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">Tools & Technologies We Master</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Leveraging cutting-edge technologies to deliver world-class solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-accent text-center cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}
                />
                <div className="relative">
                  <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform duration-300">{tech.icon}</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Industry Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">Serving Diverse Industries</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Tailored solutions for your specific industry challenges</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-accent overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="relative">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${industry.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{industry.name}</h3>
                  <div className="space-y-2">
                    {industry.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why NPK</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">Why Businesses Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group relative bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-accent text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                <div className="relative">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <div className="pt-6 border-t border-border">
                    <div className="text-4xl font-bold text-primary mb-1">{item.stat}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">{item.statLabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative rounded-3xl overflow-hidden shadow-accent h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
            <Image
              src="/assets/about/about-cta.avif"
              alt="Transform your business with our expert consulting services"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-8 lg:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Let&apos;s Transform Your Business Together</h2>
                <p className="text-lg text-white/90 max-w-2xl mb-8">
                  Schedule a free consultation with our experts. We&apos;ll analyze your needs and propose the perfect solution for your
                  business.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-primary hover:bg-white/90 shadow-xl shadow-accent hover:shadow-hover group cursor-pointer"
                    aria-label="Schedule a free consultation"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-white text-white shadow-accent hover:shadow-hover hover:bg-white hover:text-primary"
                    asChild
                  >
                    <a href="tel:+918147707125" aria-label="Call us at +91 8147707125">
                      Call Us: +91 8147707125
                      <Phone className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 sm:gap-8 mt-12 pt-8 border-t border-white/20">
                  <div className="text-white/90">
                    <div className="text-2xl sm:text-3xl font-bold">100+</div>
                    <div className="text-sm">Projects Delivered</div>
                  </div>
                  <div className="text-white/90">
                    <div className="text-2xl sm:text-3xl font-bold">50+</div>
                    <div className="text-sm">Happy Clients</div>
                  </div>
                  <div className="text-white/90">
                    <div className="text-2xl sm:text-3xl font-bold">3+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
