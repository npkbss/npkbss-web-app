'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { serviceGroups } from './data';

export default function DesignFour() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Loop all groups */}
        {serviceGroups.map((group, groupIndex) => (
          <div key={group.id} className="space-y-10">
            {/* GROUP TITLE */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-900">{group.title}</h2>
              <p className="text-slate-600 mt-2 max-w-2xl mx-auto">{group.description}</p>
            </div>

            {/* GROUP SERVICES */}
            <div className="space-y-24">
              {group.services.map((service, serviceIndex) => (
                <HorizontalServiceBlock key={service.id} service={service} reversed={serviceIndex % 2 === 1} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------
   Horizontal Service Component
--------------------------------------------------- */
function HorizontalServiceBlock({ service, reversed }: { service: any; reversed: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // triggers fade-in when component loads
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const Icon = service.icon;

  return (
    <div
      className={`
        flex flex-col lg:flex-row items-center gap-12 transition-all duration-700
        ${reversed ? 'lg:flex-row-reverse' : ''}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {/* IMAGE SIDE */}
      <div className="relative w-full lg:w-1/2 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
        {service.image && <Image src={service.image.src} alt={service.image.alt} fill className="object-contain" />}

        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40`}></div>
      </div>

      {/* TEXT SIDE */}
      <div className="lg:w-1/2">
        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
          <Icon className="h-7 w-7 text-blue-600" />
        </div>

        <h3 className="text-3xl font-semibold text-slate-900 mb-2">{service.title}</h3>

        <p className="text-slate-600 leading-relaxed mb-6">{service.shortDesc}</p>

        {/* FEATURES */}
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 4).map((feat: string, i: number) => (
            <li key={i} className="flex gap-3 text-slate-700">
              <span className="text-blue-500 mt-1">•</span>
              {feat}
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">{service.cta}</Button>
      </div>
    </div>
  );
}
