'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Code2, Plug, Cloud } from 'lucide-react';

// Service data for "Development, Integration & Cloud"
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

const devIntegrationCloudServices: Service[] = [
  {
    id: 13,
    category: 'development',
    icon: Code2,
    title: 'Custom Application Development',
    shortDesc: 'Web & mobile solutions tailored to business needs',
    fullDesc: 'End-to-end custom application development: modern web apps, native mobile apps, and cloud solutions tailored to your goals.',
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
];

export default function DevIntegrationCloudFuturistic() {
  // Hooks should always run first!
  const [active, setActive] = useState(0);

  // Auto-sync content + carousel with correct order of hooks (never conditional)
  useEffect(() => {
    const t = setInterval(() => {
      setActive(i => (i + 1) % devIntegrationCloudServices.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const images = devIntegrationCloudServices.map(s => s.image?.src).filter(Boolean) as string[];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT — FUTURISTIC CAROUSEL */}
        <div className="lg:col-span-7 flex items-center justify-center">
          <div className="relative w-full h-[500px] max-w-3xl overflow-hidden rounded-2xl">
            <FuturisticCarousel images={images} active={active} services={devIntegrationCloudServices} />
          </div>
        </div>

        {/* RIGHT — CONTENT PANEL */}
        <div className="lg:col-span-5 sticky top-28">
          <RightPanel
            groupTitle="Development, Integration & Cloud"
            groupDesc="Complete technical solutions from code to cloud"
            services={devIntegrationCloudServices}
            active={active}
            setActive={setActive}
          />
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   FUTURISTIC CAROUSEL LEFT SIDE
========================================================================= */
function FuturisticCarousel({ images, active, services }: { images: string[]; active: number; services: Service[] }) {
  return (
    <div className="relative w-full h-full">
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${services[active].gradient} opacity-40 blur-2xl transition-all duration-700`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-center bg-cover opacity-40 scale-110 blur-2xl transition-all duration-700"
        style={{ backgroundImage: `url(${images[active]})` }}
        aria-hidden="true"
      />
      {/* Carousel scroll */}
      <div
        className="relative flex h-full transition-transform duration-[900ms] ease-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-full h-full relative flex items-center justify-center p-6">
            <Image src={src} alt={`Slide ${i + 1}`} fill className="object-contain drop-shadow-2xl" sizes="100vw" priority={i === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========================================================================
   RIGHT PANEL CONTENT
========================================================================= */
function RightPanel({
  groupTitle,
  groupDesc,
  services,
  active,
  setActive,
}: {
  groupTitle: string;
  groupDesc: string;
  services: Service[];
  active: number;
  setActive: (n: number) => void;
}) {
  const service = services[active];
  const Icon = service.icon;

  return (
    <div className="flex flex-col h-[600px] justify-between text-white">
      {/* TOP TITLE */}
      <div className="space-y-5">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
          {groupTitle}
        </h2>
        <p className="text-slate-300 leading-relaxed">{groupDesc}</p>
        <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      {/* MIDDLE - CONTENT */}
      <div className="relative h-[260px] overflow-hidden">
        <div key={active} className="animate-fadeIn space-y-4">
          <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
          <p className="text-slate-300">{service.shortDesc}</p>
          <p className="text-slate-400 line-clamp-3">{service.fullDesc}</p>
          <ul className="space-y-1 text-sm">
            {service.features.slice(0, 4).map((f: string, i: number) => (
              <li key={i} className="flex gap-2 text-slate-300">
                <span className="text-cyan-300 mt-1">•</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black to-transparent" />
      </div>
      {/* CTA BUTTON */}
      <Link
        href="/contact"
        className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition"
      >
        {service.cta || 'Contact Us'}
      </Link>
      {/* DOTS */}
      <div className="flex gap-3 pt-4">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all ${i === active ? 'w-6 bg-cyan-400' : 'w-2.5 bg-slate-600'}`}
            type="button"
            aria-label={`Select ${services[i].title}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ========================================================================
   ANIMATIONS
========================================================================= */
const fadeIn = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

if (typeof window !== 'undefined' && !document.getElementById('fadeInStyles')) {
  const style = document.createElement('style');
  style.id = 'fadeInStyles';
  style.innerHTML = fadeIn;
  document.head.appendChild(style);
}
