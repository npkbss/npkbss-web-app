'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, X } from 'lucide-react';
import { serviceGroups } from './data';

export default function DesignThree() {
  const [service, setService] = useState<any>(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Our Services</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto mt-4">Modern solutions designed with precision and business impact.</p>
        </div>

        {/* Groups */}
        {serviceGroups.map(group => (
          <div key={group.id} className="mb-24">
            {/* Group Title */}
            <h3 className="text-3xl font-semibold text-slate-900 mb-4">{group.title}</h3>
            <p className="text-slate-600 mb-10 max-w-2xl">{group.description}</p>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.services.map(s => (
                <button
                  key={s.id}
                  onClick={() => setService(s)}
                  className="group p-8 bg-white rounded-3xl border shadow-sm hover:shadow-md transition-all text-left hover:-translate-y-1"
                >
                  {/* Icon */}
                  {/* Icon */}
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    {(() => {
                      const Icon = s.icon;
                      return <Icon className="h-7 w-7 text-blue-600" />;
                    })()}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">{s.title}</h4>

                  {/* Short Desc */}
                  <p className="text-slate-600 text-sm leading-relaxed">{s.shortDesc}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {service && <ServiceModal service={service} onClose={() => setService(null)} />}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}

/* ------------------------------------------
   MODAL COMPONENT (included in same file)
------------------------------------------ */

function ServiceModal({ service, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-xl overflow-hidden animate-fadeIn">
        {/* Image */}
        <div className="relative w-full h-60">
          {service.image && <Image src={service.image.src} alt={service.image.alt} fill className="object-cover" />}

          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`} />

          <button onClick={onClose} className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full shadow">
            <X className="h-5 w-5 text-slate-700" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">{service.title}</h2>

          <p className="text-slate-600 mb-6">{service.fullDesc}</p>

          <h3 className="text-lg font-semibold text-slate-800 mb-3">Key Features</h3>

          {/* Features */}
          <div className="space-y-2 mb-6">
            {service.features.map((feat: string, idx: number) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="text-blue-500 h-5 w-5 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Pricing & Timeline */}
          <div className="flex gap-4 flex-wrap mb-6">
            <div className="bg-slate-100 px-4 py-2 rounded-xl text-sm text-slate-800 font-medium">{service.pricing}</div>
            <div className="bg-slate-100 px-4 py-2 rounded-xl text-sm text-slate-800 font-medium">{service.timeline}</div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              const el = document.getElementById('contact-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              onClose();
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-3 rounded-xl transition"
          >
            Contact Us for This Service
          </button>
        </div>
      </div>
    </div>
  );
}
