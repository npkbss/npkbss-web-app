'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign, ArrowRight, CheckCircle2, PieChart, TrendingUp, Database, FileSpreadsheet, Plug, Code, LightbulbIcon, Target, Cloud } from 'lucide-react';
import { BarChart3, Briefcase, Calculator, Code2, Layers, Workflow } from 'lucide-react';
import React, { useState } from 'react';

const categories = [
  { id: 'all', name: 'All Services', icon: <Layers className="h-4 w-4" /> },
  { id: 'analytics', name: 'Analytics & BI', icon: <BarChart3 className="h-4 w-4" /> },
  { id: 'erp', name: 'ERP & Finance', icon: <Calculator className="h-4 w-4" /> },
  { id: 'automation', name: 'Automation', icon: <Workflow className="h-4 w-4" /> },
  { id: 'development', name: 'Development', icon: <Code2 className="h-4 w-4" /> },
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
    image: { src: '/assets/services/microsoft-powerbi.avif', alt: 'Power BI Consulting & Development' },
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
    image: { src: '/assets/services/zoho-analytics.avif', alt: 'Zoho Analytics Implementation' },
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
    image: { src: '/assets/services/data-visualization.avif', alt: 'Data Visualization Services' },
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
    image: { src: '/assets/services/tally-prime.avif', alt: 'Tally Prime Implementation' },
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
    image: { src: '/assets/services/accounting.avif', alt: 'Accounting & Bookkeeping Services' },
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
    image: { src: '/assets/services/zoho-flow.avif', alt: 'Business Process Automation' },
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
    image: { src: '/assets/services/rest-api.png', alt: 'API Development & Integration' },
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
    image: { src: '/assets/services/microsoft-excel.png', alt: 'Custom Excel & Tally Add-ins' },
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
    image: { src: '/assets/services/it-consulting.avif', alt: 'IT Consulting & Strategy' },
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
    image: { src: '/assets/services/training.avif', alt: 'Training & Workshops' },
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
    image: { src: '/assets/services/custom-app.avif', alt: 'Custom Application Development' },
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
    image: { src: '/assets/services/data-migration.avif', alt: 'Cloud Infrastructure & Data Migration' },
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

export const CategoryServicesModel = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredServices = activeCategory === 'all' ? allServices : allServices.filter(s => s.category === activeCategory);

  return (
    <div>
      {' '}
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

            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: rgba(59, 130, 246, 0.3) transparent;
            }
          `}</style>
        </div>
      </section>
    </div>
  );
};
