'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart3,
  Briefcase,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cloud,
  Code,
  Code2,
  Database,
  FileSpreadsheet,
  LightbulbIcon,
  PieChart,
  Plug,
  Target,
  TrendingUp,
  Workflow,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface Service {
  id: number;
  category: string;
  icon: ReactNode;
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

interface ServiceGroup {
  id: number;
  title: string;
  icon: string;
  description: string;
  services: Service[];
}


const serviceGroups: ServiceGroup[] = [
  {
    id: 1,
    title: 'Zoho Ecosystem',
    icon: '',
    description: 'Complete Zoho suite implementation and automation',
    services: [
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
        pricing: 'Starting from ₹30,000',
        timeline: '1-4 weeks',
        cta: 'Launch Zoho Project',
      },
      {
        id: 5,
        category: 'erp',
        icon: <Database className="h-8 w-8" />,
        title: 'Zoho Books & Finance',
        shortDesc: 'Cloud accounting made simple',
        fullDesc:
          'Implement and customize Zoho Books for complete financial management including invoicing, expenses, inventory, and compliance.',
        image: { src: '/assets/services/zoho-books.avif', alt: 'Zoho Books & Finance' },
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
        icon: <Briefcase className="h-8 w-8" />,
        title: 'Zoho One Implementation',
        shortDesc: 'Complete Zoho ecosystem setup',
        fullDesc:
          'Full implementation of Zoho One suite including CRM, Finance, Projects, HR, and more - all integrated and customized.',
        image: { src: '/assets/services/zoho-one.avif', alt: 'Zoho One Implementation' },
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
        icon: <Workflow className="h-8 w-8" />,
        title: 'Business Process Automation',
        shortDesc: 'Eliminate repetitive tasks, boost efficiency',
        fullDesc:
          'Automate your business workflows using cutting-edge tools like Zoho Flow, Power Automate, and custom scripts.',
        image: { src: '/assets/services/zoho-flow.avif', alt: 'Business Process Automation' },
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
  {
    id: 2,
    title: 'Power BI & Analytics',
    icon: '',
    description: 'Business intelligence and data visualization solutions',
    services: [
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
        pricing: 'Starting from ₹50,000',
        timeline: '2-8 weeks',
        cta: 'Start Power BI Project',
      },
      {
        id: 3,
        category: 'analytics',
        icon: <TrendingUp className="h-8 w-8" />,
        title: 'Data Visualization Services',
        shortDesc: 'Beautiful, insightful data storytelling',
        fullDesc:
          'Create stunning visualizations that communicate complex data clearly and drive action across your organization.',
        image: { src: '/assets/services/data-visualization.avif', alt: 'Data Visualization Services' },
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
  {
    id: 3,
    title: 'Tally & Accounting',
    icon: '',
    description: 'Accounting, ERP, and financial management solutions',
    services: [
      {
        id: 4,
        category: 'erp',
        icon: <Calculator className="h-8 w-8" />,
        title: 'Tally Prime Implementation',
        shortDesc: 'Complete accounting & inventory management',
        fullDesc:
          'Full-service Tally Prime implementation including setup, customization, data migration, and training for seamless business operations.',
        image: { src: '/assets/services/tally-prime.avif', alt: 'Tally Prime Implementation' },
        gradient: 'from-lime-500 via-green-500 to-emerald-600',
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
        pricing: 'Starting from ₹15,000',
        timeline: '1-3 weeks',
        cta: 'Setup Tally Prime',
      },
      {
        id: 9,
        category: 'automation',
        icon: <Code className="h-8 w-8" />,
        title: 'Custom Excel & Tally Add-ins',
        shortDesc: 'Extend functionality with custom tools',
        fullDesc:
          'Develop custom add-ins for Excel and Tally to extend functionality and meet specific business requirements.',
        image: { src: '/assets/services/microsoft-excel.avif', alt: 'Custom Excel & Tally Add-ins' },
        gradient: 'from-lime-500 via-green-500 to-emerald-600',
        features: [
          'Excel VBA Macros',
          'Excel Add-in Development',
          'Tally TDL Customization',
          'Custom Functions',
          'Automated Report Generation',
          'Data Import/Export Tools',
        ],
        pricing: 'Starting from ₹15,000',
        timeline: '1-3 weeks',
        cta: 'Build Custom Tools',
      },
      {
        id: 6,
        category: 'erp',
        icon: <FileSpreadsheet className="h-8 w-8" />,
        title: 'Accounting & Bookkeeping Services',
        shortDesc: 'Professional accounting support',
        fullDesc:
          'Comprehensive accounting services including bookkeeping, financial statements, tax filing, and compliance management.',
        image: { src: '/assets/services/accounting.avif', alt: 'Accounting & Bookkeeping Services' },
        gradient: 'from-lime-500 via-green-500 to-emerald-600',
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
        pricing: 'Starting from ₹5,000/month',
        timeline: 'Ongoing monthly service',
        cta: 'Get Accounting Support',
      },
    ],
  },
  {
    id: 4,
    title: 'Development, Integration & Cloud',
    icon: '',
    description: 'Complete technical solutions from code to cloud',
    services: [
      {
        id: 13,
        category: 'development',
        icon: <Code2 className="h-8 w-8" />,
        title: 'Custom Application Development',
        shortDesc: 'Bespoke web & mobile solutions tailored to your business',
        fullDesc:
          'End-to-end custom application development services including modern web applications, native Android apps, and cloud-based solutions designed specifically for your business needs.',
        image: { src: '/assets/services/custom-app.avif', alt: 'Custom Application Development' },
        gradient: 'from-indigo-500 via-blue-600 to-cyan-500',
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
        pricing: 'Starting from ₹1,50,000',
        timeline: '6-16 weeks',
        cta: 'Build Custom App',
      },
      {
        id: 8,
        category: 'automation',
        icon: <Plug className="h-8 w-8" />,
        title: 'API Development & Integration',
        shortDesc: 'Connect your business systems seamlessly',
        fullDesc:
          'Custom API development and integration services to connect different platforms, sync data, and create unified systems.',
        image: { src: '/assets/services/api.avif', alt: 'API Development & Integration' },
        gradient: 'from-indigo-500 via-blue-600 to-cyan-500',
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
        pricing: 'Starting from ₹40,000',
        timeline: '3-6 weeks',
        cta: 'Build Integrations',
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
        gradient: 'from-indigo-500 via-blue-600 to-cyan-500',
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
        pricing: 'Starting from ₹60,000',
        timeline: '2-6 weeks',
        cta: 'Migrate to Cloud',
      },
    ],
  },
  {
    id: 5,
    title: 'Consulting & Training',
    icon: '',
    description: 'Strategic guidance and team empowerment',
    services: [
      {
        id: 11,
        category: 'consulting',
        icon: <LightbulbIcon className="h-8 w-8" />,
        title: 'IT Consulting & Strategy',
        shortDesc: 'Strategic technology guidance',
        fullDesc:
          'Expert IT consulting to help you make informed technology decisions, optimize infrastructure, and plan digital transformation.',
        image: { src: '/assets/services/it-consulting.avif', alt: 'IT Consulting & Strategy' },
        gradient: 'from-orange-500 via-red-500 to-pink-600',
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
        fullDesc:
          'Customized training programs on Power BI, Tally, Zoho, Excel, and other business tools for your team.',
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
        pricing: 'Starting from ₹10,000/day',
        timeline: '1-5 days',
        cta: 'Book Training Session',
      },
    ],
  },
];

export default function ServicesSection() {
  return (
    <>
      <section id="services-section" className="py-20 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Services</h2>
            <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
              Explore our full-service offerings designed to accelerate your digital growth.
            </p>
          </div>

          {/* Groups */}
          {serviceGroups.map(group =>
            group.id === 1 ? (
              <ZohoShowcase key={group.id} group={group} />
            ) : (
              <div key={group.id} className="mb-20">
                <h3 className="text-3xl font-semibold text-slate-800 mb-6">{group.title}</h3>
                <p className="text-slate-600 mb-10">{group.description}</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.services.map(service => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* local CSS for fadeIn */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}


function ZohoShowcase({ group }: { group: ServiceGroup }) {
  const [activeId, setActiveId] = useState(group.services[0]?.id);
  const activeService = group.services.find(s => s.id === activeId) ?? group.services[0];

  if (!activeService) return null;

  return (
    <section className="mb-24">
      <div className="mb-10">
        <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">{group.title}</h3>
        <p className="text-slate-600 max-w-2xl">{group.description}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: sticky visual */}
        <div className="lg:sticky lg:top-24">
          <div className="relative w-full h-72 md:h-80 rounded-3xl overflow-hidden shadow-xl bg-slate-900">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${activeService.gradient} opacity-80 mix-blend-multiply`}
            />
            {activeService.image && (
              <Image
                src={activeService.image.src}
                alt={activeService.image.alt}
                fill
                className="object-cover object-center"
              />
            )}

            <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">
                  Zoho Suite • {activeService.category.toUpperCase()}
                </p>
                <h4 className="text-2xl md:text-3xl font-semibold mb-3">{activeService.title}</h4>
                <p className="text-sm md:text-base text-white/80 max-w-md">{activeService.shortDesc}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs">
                  {activeService.timeline}
                </span>
                <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs">
                  {activeService.pricing}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: service “chapters” */}
        <div className="space-y-4">
          {group.services.map(service => {
            const isActive = service.id === activeId;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveId(service.id)}
                className={`w-full text-left rounded-2xl border p-4 md:p-5 transition-all ${
                  isActive
                    ? 'border-blue-500 bg-white shadow-md'
                    : 'border-slate-200 bg-white/60 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-blue-500">{service.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-semibold text-slate-900">{service.title}</h4>
                      {isActive && (
                        <span className="inline-flex items-center text-xs text-blue-600 font-medium">
                          Active
                          <span className="ml-1 h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{service.shortDesc}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                        >
                          <CheckCircle2 className="h-3 w-3 text-blue-500" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}

          {/* Optional: CTA card */}
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 md:p-5">
            <p className="text-sm text-slate-700 mb-3">
              Not sure where to start? We can help you choose the right Zoho apps and rollout plan for your business.
            </p>
            <Button
              className="text-sm"
              size="sm"
              onClick={() => {
                if (typeof document !== 'undefined') {
                  const el = document.getElementById('contact-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book Zoho Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="rounded-2xl border shadow-sm hover:shadow-md transition-all overflow-hidden">
      {/* IMAGE */}
      {service.image && (
        <div className="relative w-full h-40 bg-slate-100 overflow-hidden">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      {/* CONTENT */}
      <CardHeader className="pt-5">
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-3">{service.icon}</div>
        <CardTitle className="text-lg font-semibold text-slate-800">{service.title}</CardTitle>
        <p className="text-slate-600 text-sm mt-1">{service.shortDesc}</p>
      </CardHeader>

      <CardContent className="space-y-2 mt-1">
        {service.features.slice(0, 3).map((feat, i) => (
          <div key={i} className="flex gap-2 text-sm text-slate-600">
            <CheckCircle2 className="text-blue-500 h-4 w-4 mt-0.5" />
            <span>{feat}</span>
          </div>
        ))}
      </CardContent>

      <CardFooter className="pt-3">
        <Button
          variant="outline"
          className="w-full text-sm flex items-center justify-between"
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? 'Hide Details' : 'View Details'}
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </CardFooter>

      {open && (
        <div className="px-6 pb-6 mt-3 border-t pt-4 animate-fadeIn">
          <p className="text-slate-700 text-sm mb-3">{service.fullDesc}</p>

          <h4 className="font-medium text-slate-800 mb-2 text-sm">Features</h4>
          <div className="space-y-1.5 mb-3">
            {service.features.map((feat, i) => (
              <div key={i} className="flex gap-2 text-sm text-slate-600">
                <CheckCircle2 className="text-blue-500 h-4 w-4 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-xs mt-3 bg-slate-100 p-3 rounded-xl">
            <span className="font-medium">Pricing:</span>
            <span>{service.pricing}</span>
          </div>

          <div className="flex justify-between text-xs mt-2 bg-slate-100 p-3 rounded-xl">
            <span className="font-medium">Timeline:</span>
            <span>{service.timeline}</span>
          </div>
        </div>
      )}
    </Card>
  );
}
