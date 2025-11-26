'use client';

import Image from 'next/image';
import Link from 'next/link';
import { servicesDeepDive } from '@/data/services';
import { getIcon } from '@/utils/iconMap';

export default function ServicesDeepDive() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-secondary/10 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">A Deeper Look Into Our Key Service Areas</h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Explore how each part of our service ecosystem works — from implementations to cloud and automations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesDeepDive.map(item => {
            const Icon = getIcon(item.icon);

            return (
              <div
                key={item.id}
                className="
                  group relative rounded-3xl overflow-hidden 
                  bg-white/70 backdrop-blur-xl border border-slate-200 
                  hover:border-primary/40 shadow-sm hover:shadow-xl 
                  transition-all p-6 flex flex-col
                "
              >
                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl" />

                {/* image */}
                <div className="relative z-10 h-40 w-full overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                {/* icon */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* title */}
                <h3 className="relative z-10 text-xl font-semibold text-slate-900">{item.label}</h3>

                <p className="relative z-10 mt-3 text-slate-600 leading-relaxed text-sm">{item.desc}</p>

                {/* bullet points */}
                <ul className="relative z-10 mt-4 space-y-2 text-sm">
                  {item.points.map((p, i) => (
                    <li key={i} className="flex gap-2 text-slate-700">
                      <span className="text-primary mt-1">•</span>
                      {p}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="
                    relative z-10 mt-auto inline-block 
                    text-primary font-medium pt-4 group-hover:underline
                  "
                >
                  {item.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
