'use client';

import { ArrowRight } from 'lucide-react';
import { getIcon } from '@/utils/iconMap';
import { groupedServices } from '@/data/services';

export default function ServicesCategoryOverview() {
  const handleScrollToCategory = (slug: string) => {
    if (typeof window !== 'undefined' && document) {
      document.getElementById(`cat-${slug}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services-category-sections" className="relative py-20 overflow-hidden scroll-mt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gray-50 z-0">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '2s' }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-blue-900 font-display animate-gradient">Explore Our Core Service Categories</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Solve every part of your business workflow — platforms, analytics, cloud, automation, operations, and training.
          </p>
        </div>

        {/* Service Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {groupedServices.map(({ category }) => {
            const CatIcon = getIcon(category.icon);
            return (
              <div
                key={category.id}
                onClick={() => handleScrollToCategory(category.slug)}
                className="group relative overflow-hidden rounded-3xl p-8 bg-white border border-border shadow-soft hover:shadow-accent hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Gradient hover overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br from-primary/20 via-secondary/20 to-accent/20" />
                {/* Icon box */}
                <div className="relative mb-6 inline-flex">
                  <div className="p-2 rounded-2xl bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10">
                    <CatIcon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{category.title}</h3>
                <p className="text-slate-600 mb-6 text-base">{category.description}</p>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Animated gradient keyframes */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
