'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Service, serviceGroups } from './data';

export default function TallyServicesSection() {
  const tallyGroup = serviceGroups.find(g => g.id === 3);

  if (!tallyGroup) return null;

  return (
    <section id="services-tally" className="py-20 bg-slate-50 border-t">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">{tallyGroup.title}</h2>
          <p className="text-slate-600 mt-3 max-w-3xl mx-auto">{tallyGroup.description}</p>
        </div>

        {/* CARD GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tallyGroup.services.map(service => (
            <TallyCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TallyCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div
      className="
        rounded-2xl border bg-white shadow-sm hover:shadow-md 
        transition-all overflow-hidden group
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-40 bg-white overflow-hidden">
        {service.image ? (
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            className="object-contain group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full bg-slate-200" />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>

        <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>

        <p className="text-slate-600 text-sm mt-2">{service.shortDesc}</p>

        {/* Features */}
        <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
          {service.features.slice(0, 4).map((feat, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {service.cta && (
          <Button
            className="mt-6 w-full text-sm"
            onClick={() => {
              const el = document.getElementById('contact-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {service.cta}
          </Button>
        )}
      </div>
    </div>
  );
}
