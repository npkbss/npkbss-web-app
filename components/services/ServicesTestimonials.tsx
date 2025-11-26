'use client';

import Image from 'next/image';
import { testimonials } from '@/data/services';
import { useEffect, useRef } from 'react';

export default function ServicesTestimonials() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animation: number;
    let scrollPos = 0;

    const loop = () => {
      scrollPos += 0.4; // smooth speed
      slider.scrollLeft = scrollPos;

      if (scrollPos >= slider.scrollWidth - slider.clientWidth) {
        scrollPos = 0; // seamless loop
      }
      animation = requestAnimationFrame(loop);
    };

    animation = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Trusted by Fast-Growing Teams</h2>
          <p className="text-slate-600 mt-4 text-lg">Real stories from businesses that scaled with our services.</p>
        </div>

        {/* Auto-scrolling slider */}
        <div
          ref={sliderRef}
          className="
            flex gap-6 overflow-x-auto no-scrollbar py-4 
            scroll-smooth relative
          "
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="
                min-w-[360px] max-w-[360px] bg-white 
                border border-slate-200 rounded-2xl 
                shadow-sm hover:shadow-xl
                transition-all p-6 flex flex-col gap-4
                hover:-translate-y-1
              "
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <Image src={item.avatar} alt={item.name} width={56} height={56} className="rounded-full object-cover shadow-sm" />
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>

              {/* Message */}
              <p className="text-slate-700 text-sm leading-relaxed mt-1">“{item.message}”</p>

              {/* Logo */}
              {item.companyLogo && (
                <div className="mt-auto">
                  <Image src={item.companyLogo} alt="Company Logo" width={80} height={40} className="opacity-70" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
