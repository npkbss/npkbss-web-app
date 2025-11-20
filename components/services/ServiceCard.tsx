'use client';

import { useState, useCallback, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Calculator,
  Database,
  FileSpreadsheet,
  Workflow,
  Plug,
  Code,
  Briefcase,
  LightbulbIcon,
  Target,
  Code2,
  Cloud,
  CheckCircle2,
  DollarSign,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
        fullDesc: 'Full implementation of Zoho One suite including CRM, Finance, Projects, HR, and more - all integrated and customized.',
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
        fullDesc: 'Automate your business workflows using cutting-edge tools like Zoho Flow, Power Automate, and custom scripts.',
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
        fullDesc: 'Create stunning visualizations that communicate complex data clearly and drive action across your organization.',
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
        fullDesc: 'Develop custom add-ins for Excel and Tally to extend functionality and meet specific business requirements.',
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
        fullDesc: 'Comprehensive accounting services including bookkeeping, financial statements, tax filing, and compliance management.',
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
        fullDesc: 'Custom API development and integration services to connect different platforms, sync data, and create unified systems.',
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
        pricing: 'Starting from ₹10,000/day',
        timeline: '1-5 days',
        cta: 'Book Training Session',
      },
    ],
  },
];

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div
      className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pr-4"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <Card className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-accent h-full">
        {/* Header */}
        <div className="relative h-60 overflow-hidden rounded-t-lg">
          {service.image ? (
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
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

        {/* Card Header */}
        <CardHeader className="pb-3">
          <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">{service.title}</CardTitle>
          <CardDescription className="line-clamp-2 text-sm">{service.shortDesc}</CardDescription>
        </CardHeader>

        {/* Card Content */}
        <CardContent className="space-y-4 pb-4">
          <div className="space-y-2">
            {service.features.slice(0, 2).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-xs font-medium">
              <DollarSign className="h-3 w-3" />
              <span>{service.pricing}</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-secondary/10 text-secondary px-3 py-1.5 rounded-lg text-xs font-medium">
              <Clock className="h-3 w-3" />
              <span>{service.timeline}</span>
            </div>
          </div>
        </CardContent>

        {/* Card Footer */}
        <CardFooter className="pt-0">
          <Button className="w-full group/btn relative overflow-hidden" variant="outline">
            <span className="relative z-10 flex items-center justify-center">
              {service.cta}
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </span>
            <div
              className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity`}
            />
          </Button>
        </CardFooter>

        {/* Hover Details Overlay */}
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0 overflow-y-auto custom-scrollbar rounded-lg">
          <div className="h-full flex flex-col">
            <h4 className="text-lg font-bold text-foreground mb-3">{service.title}</h4>
            <p className="text-sm text-muted-foreground mb-4">{service.fullDesc}</p>

            <div className="mb-4 flex-1">
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
            {/* <div className="absolute inset-0 bg-foreground/60 backdrop-blur-md p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0 overflow-y-auto custom-scrollbar rounded-lg">
          <div className="h-full flex flex-col">
            <h4 className="text-lg font-bold text-background mb-3">{service.title}</h4>
            <p className="text-sm text-background mb-4">{service.fullDesc}</p>

            <div className="mb-4 flex-1">
              <h5 className="text-sm font-semibold text-background mb-2">All Features:</h5>
              <div className="grid grid-cols-1 gap-1.5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-background">
                    <CheckCircle2 className="h-3 w-3 text-background flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="mt-auto pt-4">
              <Button className={`w-full bg-gradient-to-r ${service.gradient} text-white border-0 hover:opacity-90`}>
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

interface ServiceCarouselProps {
  group: ServiceGroup;
}

const ServiceCarousel = ({ group }: ServiceCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
  const [canScrollNext, setCanScrollNext] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="mb-16 relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold">{group.title.toUpperCase()}</h3>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">{group.description}</p>
        </div>
      </div>

      {/* Previous Button */}
      {canScrollPrev && (
        <button
          onClick={scrollPrev}
          className={`absolute -left-6 top-[calc(50%+20px)] -translate-y-1/2 z-20 bg-foreground/80 hover:bg-foreground/90 border border-border backdrop-blur-sm rounded-md h-32 w-12 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          } hover:scale-105 shadow-xl`}
          aria-label="Previous services"
          type="button"
        >
          <ChevronLeft className="h-8 w-8 text-background" />
        </button>
      )}

      {/* Carousel */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex pl-6 pt-6">
          {group.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Next Button */}
      {canScrollNext && (
        <button
          onClick={scrollNext}
          className={`absolute -right-6 top-[calc(50%+20px)] -translate-y-1/2 z-20 bg-foreground/80 hover:bg-foreground/90 border border-border backdrop-blur-sm rounded-md h-32 w-12 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          } hover:scale-105 shadow-xl`}
          aria-label="Next services"
          type="button"
        >
          <ChevronRight className="h-8 w-8 text-background" />
        </button>
      )}
    </div>
  );
};

const NetflixServicesSection = () => {
  return (
    <section className="py-20" id="services-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">Complete Service Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of services designed to accelerate your digital transformation
          </p>
        </div>

        {/* Carousel */}
        {serviceGroups.map(group => (
          <ServiceCarousel key={group.id} group={group} />
        ))}
      </div>

      <style jsx global>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
          touch-action: pan-y;
        }
        .embla__slide {
          transform: translate3d(0, 0, 0);
        }

        /* Custom Scrollbar */
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
    </section>
  );
};

export default NetflixServicesSection;
