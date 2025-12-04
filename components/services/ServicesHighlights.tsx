'use client';

import { serviceHighlights } from '@/data/services';

export default function ServicesHighlights() {
  return (
    <section className="py-16 border-y border-slate-200 bg-linear-to-br from-background to-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
            gap-6 text-center
          "
        >
          {serviceHighlights.map(item => (
            <div
              key={item.id}
              className="
                group p-5 rounded-xl border border-transparent
                hover:border-primary/30 transition
                hover:shadow-sm
              "
            >
              <span
                className="
                  text-slate-700 font-medium text-sm
                  group-hover:text-primary transition
                "
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
