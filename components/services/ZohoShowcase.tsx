'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Service, serviceGroups } from './data';

export default function ZohoServicesSection() {
  const zohoGroup = serviceGroups.find(g => g.id === 1);

  if (!zohoGroup) return null;

  return (
    <section id="services-zoho" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{zohoGroup.title}</h2>
          <p className="text-slate-600 mt-3">{zohoGroup.description}</p>
        </div>

        {/* Services */}
        <div className="space-y-24">
          {zohoGroup.services.map((service, i) => (
            <ZohoServiceRow key={service.id} service={service} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ZohoServiceRow({ service, reverse }: { service: Service; reverse: boolean }) {
  const [visible, setVisible] = useState(false);
  const blockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!blockRef.current) return;

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(blockRef.current);
    return () => obs.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <div ref={blockRef} className={`flex flex-col lg:flex-row items-center gap-12 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* IMAGE SIDE */}
      <div
        className={`
          relative w-full lg:w-1/2 h-[280px] md:h-[340px] 
          overflow-hidden rounded 
          transform transition-all duration-700 
          ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-105'}
        `}
      >
        {service.image ? (
          <Image src={service.image.src} alt={service.image.alt} fill className="object-contain scale-90 object-center" />
        ) : (
          <div className="w-full h-full bg-slate-200" />
        )}

        {/* Subtle gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`} />
      </div>

      {/* TEXT SIDE */}
      <div
        className={`
          lg:w-1/2 transition-all duration-700
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        {/* Icon + category */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
            <Icon className="h-6 w-6 text-slate-800" />
          </div>

          <span className="text-xs uppercase tracking-wide text-slate-500">{service.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{service.title}</h3>

        {/* Description */}
        <p className="mt-3 text-slate-600 text-sm md:text-base">{service.shortDesc}</p>

        <p className="mt-4 text-slate-700 text-sm md:text-base leading-relaxed">{service.fullDesc}</p>

        {/* Features */}
        <div className="mt-6 flex flex-wrap gap-2">
          {service.features.slice(0, 5).map((f, i) => (
            <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs md:text-sm">
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        {service.cta && (
          <div className="mt-6">
            <Button
              onClick={() => {
                const el = document.getElementById('contact-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {service.cta}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
