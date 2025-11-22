'use client';

import Image from 'next/image';
import { serviceGroups } from './data';
import { CheckCircle2 } from 'lucide-react';

export default function DesignTwo() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Our Services</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto mt-4">
            Premium business solutions crafted for productivity, automation and digital transformation.
          </p>
        </div>

        {/* Loop all groups */}
        {serviceGroups.map((group, groupIndex) => (
          <div key={group.id} className="mb-24">
            {/* Group title */}
            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-slate-900 mb-2">{group.title}</h3>
              <p className="text-slate-600 max-w-2xl">{group.description}</p>
            </div>

            {/* Service rows */}
            <div className="space-y-20">
              {group.services.map((service, i) => {
                const Icon = service.icon;
                const reverse = i % 2 === 1;

                return (
                  <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                    {/* IMAGE SIDE */}
                    <div className={`relative w-full h-72 rounded-3xl overflow-hidden shadow-md ${reverse ? 'lg:order-last' : ''}`}>
                      {service.image && (
                        <Image src={service.image.src} alt={service.image.alt} fill className="object-cover object-center" />
                      )}

                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40`} />
                    </div>

                    {/* TEXT SIDE */}
                    <div className={`${reverse ? 'lg:order-first' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                          <Icon className="h-7 w-7 text-blue-600" />
                        </div>
                        <span className="text-sm text-slate-500 uppercase tracking-wider">{service.category}</span>
                      </div>

                      <h4 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">{service.title}</h4>

                      <p className="text-slate-600 leading-relaxed mb-6">{service.shortDesc}</p>

                      {/* Top features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                            <CheckCircle2 className="text-blue-500 h-5 w-5 mt-0.5" />
                            {feat}
                          </div>
                        ))}
                      </div>

                      {/* Pricing + timeline */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="bg-slate-100 px-4 py-2 rounded-xl font-medium text-slate-800">{service.pricing}</div>
                        <div className="bg-slate-100 px-4 py-2 rounded-xl font-medium text-slate-800">{service.timeline}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
