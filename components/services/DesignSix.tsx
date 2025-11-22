'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { serviceGroups } from './data'; // <- your shared data file
import type { Service } from './data';

export default function DesignSix() {
  return (
    <section className="bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        <header className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services — Split Reveal</h1>
          <p className="text-slate-600 mt-3">
            High-impact visuals + clear messaging. Each service gets a cinematic split section that reveals as you scroll.
          </p>
        </header>

        {serviceGroups.map(group => (
          <GroupBlock key={group.id} group={group} />
        ))}
      </div>

      <style jsx>{`
        /* tiny helper animations */
        .reveal {
          transform: translateY(18px);
          opacity: 0;
          transition: opacity 560ms cubic-bezier(0.2, 0.9, 0.2, 1), transform 560ms cubic-bezier(0.2, 0.9, 0.2, 1);
        }
        .reveal.visible {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

/* -------------------------
   GroupBlock: each category
   contains multiple split sections
--------------------------*/
function GroupBlock({ group }: { group: { id: number; title: string; description: string; services: Service[] } }) {
  return (
    <div className="space-y-12">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-slate-900">{group.title}</h2>
        <p className="text-slate-600 mt-2 max-w-2xl">{group.description}</p>
      </div>

      <div className="space-y-24">
        {group.services.map((service, i) => (
          <SplitSection key={service.id} service={service} index={i} />
        ))}
      </div>
    </div>
  );
}

/* -------------------------
   SplitSection: primary component
   - Alternates layout
   - Uses IntersectionObserver (reveal on scroll)
   - Sticky image preview on wider screens
--------------------------*/
function SplitSection({ service, index }: { service: Service; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target); // reveal once
          }
        });
      },
      { threshold: 0.18 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const reverse = index % 2 === 1;
  const Icon = service.icon;

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`} aria-labelledby={`service-${service.id}-title`}>
      {/* VISUAL (left or right depending on reverse) */}
      <div className={`lg:col-span-7 order-1 lg:order-${reverse ? 2 : 1} relative rounded-2xl overflow-hidden shadow-xl`}>
        {/* For large screens we create a sticky effect so image feels cinematic */}
        <div className="hidden lg:block sticky top-[120px] h-[360px]">
          <VisualCard service={service} visible={visible} />
        </div>

        {/* For small screens just show inline image */}
        <div className="block lg:hidden h-56 rounded-2xl overflow-hidden">
          <VisualCard service={service} visible={visible} small />
        </div>
      </div>

      {/* TEXT */}
      <div className={`lg:col-span-5 order-2 lg:order-${reverse ? 1 : 2} px-2`}>
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
              <Icon className="h-6 w-6 text-slate-700" />
            </div>
            <span className="text-xs text-slate-500 uppercase tracking-wider">{service.category}</span>
          </div>

          <h3 id={`service-${service.id}-title`} className="text-2xl font-semibold leading-tight">
            {service.title}
          </h3>

          <p className="text-slate-600 mt-3 mb-5">{service.shortDesc}</p>

          <ul className="space-y-2 mb-5">
            {service.features.slice(0, 4).map((f, idx) => (
              <li key={idx} className="text-sm text-slate-700 flex gap-3 items-start">
                <span className="mt-0.5 text-blue-600">•</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 items-center">
            <div className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">{service.pricing}</div>
            <div className="bg-slate-50 text-slate-700 px-3 py-1 rounded-full text-sm">{service.timeline}</div>

            <button
              onClick={() => {
                const el = document.getElementById('contact-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ml-auto inline-flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
            >
              {service.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------
   VisualCard
   - handles image + gradient overlay
   - small prop for compact mobile render
--------------------------*/
function VisualCard({ service, visible, small = false }: { service: Service; visible: boolean; small?: boolean }) {
  return (
    <div
      className={`relative w-full h-full rounded-2xl overflow-hidden transform transition-all duration-700
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-98'}`}
      aria-hidden
    >
      {service.image ? (
        <Image src={service.image.src} alt={service.image.alt} fill className="object-contain object-center" priority={false} />
      ) : (
        <div className="w-full h-full bg-slate-200" />
      )}

      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30`}></div>

      <div className={`absolute bottom-4 left-4 right-4 ${small ? 'p-3' : 'p-6'}`}>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3">
          <p className="text-sm font-medium text-slate-900">{service.title}</p>
          <p className="text-xs text-slate-700 mt-1 line-clamp-2">{service.shortDesc}</p>
        </div>
      </div>
    </div>
  );
}
