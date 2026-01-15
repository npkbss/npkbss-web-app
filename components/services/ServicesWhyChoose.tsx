'use client';

import { servicesWhyChoose } from '@/data/services';
import { getIcon } from '@/utils/iconMap';
import { Sparkles, Star } from 'lucide-react';

export default function ServicesWhyChoose() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 font-sans">Why Companies Choose Our Services</h2>

          <p className="mt-4 text-slate-600 text-lg leading-relaxed font-sans ">
            Years of hands-on experience, strong platform knowledge, and a business-first mindset — all combined into one trusted service
            stack.
          </p>

          <div className="inline-flex items-center gap-3 bg-white/10 mt-4 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-sm">Trusted Zoho Authorized Partner - Helping businesses implement scalable CRM & automation solutions.</span>
            <Star className="h-4 w-4 text-yellow-300" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesWhyChoose.map(item => {
            const Icon = getIcon(item.icon);

            return (
              <div
                key={item.id}
                className="
                  p-6 bg-white rounded-2xl border border-slate-200 shadow-sm
                  hover:shadow-lg hover:border-primary/40
                  transition-all group backdrop-blur
                "
              >
                <div
                  className="
                    w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center
                    group-hover:bg-primary/20 transition
                  "
                >
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mt-5">{item.title}</h3>

                <p className="mt-3 text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
