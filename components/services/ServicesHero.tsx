'use client';

import { serviceCategories } from '@/data/services';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { getIcon } from '@/utils/iconMap';

export default function ServicesHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-linear-to-b from-white via-slate-50/60 to-white overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-72 h-72 bg-primary/10 blur-3xl rounded-full opacity-40" />
        <div className="absolute top-40 right-10 w-[340px] h-[340px] bg-secondary/10 blur-[110px] rounded-full opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium">
          Our Services
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
          Complete IT & Business Solutions—
          <br />
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Built for Growing Companies</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
          Explore our full suite of services across ERP, automation, cloud, analytics, and business operations. Everything crafted to boost
          your performance and efficiency.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {serviceCategories.map(cat => {
            const Icon = getIcon(cat.icon); 

            return (
              <button
                key={cat.id}
                onClick={() => document.getElementById(`cat-${cat.slug}`)?.scrollIntoView({ behavior: 'smooth' })}
                className="
                  group flex items-center gap-2 px-5 py-2.5 rounded-full
                  border border-slate-200 bg-white shadow-sm
                  hover:shadow-md hover:border-primary/40 
                  text-slate-700 hover:text-primary
                  transition-all
                "
              >
                <Icon className="w-4 h-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <Button
          size="lg"
          className="mt-10 inline-flex items-center gap-2 shadow-lg shadow-primary/20"
          onClick={() => document.getElementById('services-category-sections')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore All Services
          <ArrowDown className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
