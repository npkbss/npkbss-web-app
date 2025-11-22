'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BarChart3, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export interface Service {
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

const powerBIServices: Service[] = [
  {
    category: 'analytics',
    icon: BarChart3,
    title: 'Power BI Consulting & Development',
    shortDesc: 'Transform raw data into powerful visual insights',
    fullDesc:
      'Leverage Microsoft Power BI to create interactive dashboards, custom reports, and real-time analytics that empower business decisions.',
    image: {
      src: '/assets/services/powerbi-dashboard.jpg',
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
    ],
    pricing: 'Starting from ₹50,000',
    timeline: '2-8 weeks',
    cta: 'Get a Demo',
  },
  {
    category: 'analytics',
    icon: TrendingUp,
    title: 'Data Visualization Services',
    shortDesc: 'Beautiful, insightful data storytelling',
    fullDesc:
      'We craft stunning visual dashboards that simplify complex data, helping teams understand trends, uncover insights, and take confident actions.',
    image: {
      src: '/assets/services/data-visualization-dashboard.png',
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
    cta: 'Get a Demo',
  },
];

export default function PowerBIShowcaseCarousel() {
  const [active, setActive] = useState(0);
  const services = powerBIServices;
  const images = services.map(s => s.image?.src) as string[];

  useEffect(() => {
    const t = setInterval(() => {
      setActive(i => (i + 1) % services.length);
    }, 5000);
    return () => clearInterval(t);
  }, [services.length]);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
        {/* LEFT  */}
        <div className="lg:col-span-7 flex items-center justify-center relative h-[420px] my-auto sm:h-[460px] md:h-[500px]">
          <div className="w-full h-full relative overflow-hidden rounded-xl shadow-lg">
            <CarouselSynced images={images} active={active} />
          </div>
        </div>

        {/* RIGHT  */}
        <div className="lg:col-span-5 sticky top-24">
          <RightContent
            active={active}
            setActive={setActive}
            services={services}
            title="Power BI & Analytics"
            desc="Business intelligence and data visualization solutions"
          />
        </div>
      </div>
    </section>
  );
}

function CarouselSynced({ images, active }: { images: string[]; active: number }) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      {/* BG gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 opacity-40" />

      {/* Slider */}
      <div className="flex h-full transition-transform duration-700 ease-out" style={{ transform: `translateX(-${active * 100}%)` }}>
        {images.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-full h-full relative flex items-center justify-center">
            <Image src={src} alt={`Slide ${i + 1}`} fill className="object-contain object-center drop-shadow-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

function RightContent({
  active,
  setActive,
  services,
  title,
  desc,
}: {
  active: number;
  setActive: (v: number) => void;
  services: Service[];
  title: string;
  desc: string;
}) {
  const service = services[active];
  const Icon = service.icon;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
        <p className="text-slate-600 mt-2">{desc}</p>
      </div>

      {/* icon */}
      <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center shadow-md shadow-yellow-300/30">
        <Icon className="w-8 h-8 text-yellow-600" />
      </div>

      {/* content */}
      <div key={active} className="space-y-4 animate-fadeIn">
        <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>

        <p className="text-slate-600">{service.shortDesc}</p>

        <p className="text-slate-700 leading-relaxed line-clamp-3">{service.fullDesc}</p>

        <ul className="space-y-1">
          {service.features.slice(0, 4).map((f, i) => (
            <li key={i} className="text-sm text-slate-700 flex gap-2">
              <span className="text-yellow-600">•</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Link
        href="/contact"
        className="inline-flex w-fit items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition"
      >
        {service.cta}
      </Link>

      {/* dots */}
      <div className="flex gap-3">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all ${i === active ? 'w-6 bg-yellow-600' : 'w-2.5 bg-slate-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

/* fade animation */
const fadeIn = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { animation: fadeIn 0.5s ease-out; }
`;

if (typeof document !== 'undefined' && !document.getElementById('fadeInStyles')) {
  const s = document.createElement('style');
  s.id = 'fadeInStyles';
  s.innerHTML = fadeIn;
  document.head.appendChild(s);
}
