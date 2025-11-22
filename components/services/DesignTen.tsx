'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { serviceGroups as _serviceGroups } from './data'; // your shared data file

// typed shapes so icons render safely
type SVGIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;
type Service = {
  id: number;
  category?: string;
  icon: SVGIcon;
  title: string;
  shortDesc: string;
  fullDesc?: string;
  image?: { src: string; alt: string };
  gradient?: string;
  features?: string[];
  pricing?: string;
  timeline?: string;
  cta?: string;
};
type ServiceGroup = { id: number; title: string; description?: string; services: Service[] };

// cast imported data (keeps TS safe without changing your data file)
const serviceGroups = _serviceGroups as unknown as ServiceGroup[];

/**
 * DesignTen.tsx
 * Big Image Storytelling — full-bleed, chapter-style sections with sticky side panels for large screens
 */

export default function DesignTen() {
  return (
    <main className="bg-white">
      <header className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Our Services — Visual Stories</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Large visuals, bold headlines — each service presented like a product chapter. Swipe, scroll or tap to explore.
        </p>
      </header>

      <section className="space-y-32">
        {serviceGroups.map(g => (
          <GroupChapter key={g.id} group={g} />
        ))}
      </section>
    </main>
  );
}

/* -------------------------
   GroupChapter: renders each category as a set of full-bleed sections
------------------------- */
function GroupChapter({ group }: { group: ServiceGroup }) {
  return (
    <section aria-labelledby={`group-${group.id}-title`} className="border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 id={`group-${group.id}-title`} className="text-3xl font-semibold text-slate-900 mb-2">
          {group.title}
        </h2>
        {group.description && <p className="text-slate-600 mb-8 max-w-2xl">{group.description}</p>}

        <div className="space-y-20">
          {group.services.map((s, idx) => (
            <StorySection key={s.id} service={s} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------
   StorySection: full-bleed visual + content block
   - Alternates layout on large screens
   - Sticky side block for text on wide screens
   - Parallax-ish image move on scroll (lightweight)
------------------------- */
function StorySection({ service, index }: { service: Service; index: number }) {
  const leftImage = index % 2 === 0;
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  // lightweight IntersectionObserver for reveal and parallax
  useEffect(() => {
    if (!textRef.current || !imageRef.current) return;
    const t = textRef.current;
    const img = imageRef.current;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setRevealed(true);
          }
        });
      },
      { threshold: 0.18 }
    );

    io.observe(t);
    io.observe(img);

    // Parallax: update image position on scroll (throttled)
    let raf = 0;
    const onScroll = () => {
      if (!img) return;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = img.getBoundingClientRect();
        const windowH = window.innerHeight;
        // calc progress -1..1
        const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - windowH / 2) / (windowH / 2)));
        const translate = progress * -10; // px
        img.style.transform = `translateY(${translate}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const Icon = service.icon;

  return (
    <article className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
        {/* Image column (sticky on large screens) */}
        <div className={`lg:col-span-7 col-span-12 order-1 ${leftImage ? 'lg:order-1' : 'lg:order-2'}`} aria-hidden>
          <div
            ref={imageRef}
            className="rounded-3xl overflow-hidden h-72 md:h-[420px] shadow-lg transition-transform duration-500 will-change-transform"
            style={{ transitionProperty: 'transform, opacity' }}
          >
            {service.image ? (
              <Image src={service.image.src} alt={service.image.alt} fill className="object-cover" />
            ) : (
              <div className="w-full h-full bg-slate-200" />
            )}
            {/* gradient overlay */}
            <div className={`absolute inset-0 pointer-events-none rounded-3xl ${service.gradient ?? ''}`} style={{ opacity: 0.28 }} />
          </div>
        </div>

        {/* Content column (sticky block on large screens) */}
        <div ref={textRef} className={`lg:col-span-5 col-span-12 order-2 ${leftImage ? 'lg:order-2' : 'lg:order-1'} `}>
          <div
            className={`sticky top-28 bg-white/0 p-0 md:p-6 lg:p-8 rounded-xl transition-all duration-700 ${
              revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                <Icon className="h-6 w-6 text-slate-800" />
              </div>
              {service.category && <span className="text-xs uppercase tracking-wide text-slate-500">{service.category}</span>}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{service.title}</h3>

            <p className="text-slate-600 mt-4">{service.shortDesc}</p>

            {service.fullDesc && <p className="text-slate-700 mt-4">{service.fullDesc}</p>}

            <div className="mt-6 flex flex-wrap gap-3">
              {(service.features ?? []).slice(0, 6).map((f, i) => (
                <span key={i} className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4">
              {service.cta ? (
                <button
                  onClick={() => {
                    const el = document.getElementById('contact-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg shadow hover:bg-slate-800 transition"
                >
                  {service.cta}
                </button>
              ) : null}

              <div className="text-sm text-slate-500">
                {service.timeline && <span className="mr-3">{service.timeline}</span>}
                {service.pricing && <span>{service.pricing}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* -------------------------
   Minimal style injector for precise visuals
------------------------- */
function DesignTenStyles() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (document.getElementById('design-ten-styles')) return;
    const s = document.createElement('style');
    s.id = 'design-ten-styles';
    s.innerHTML = `
      /* subtle image smoothing */
      .object-cover { will-change: transform; }
      /* keep sticky block from overflowing on small screens */
      @media (max-width: 1024px) {
        .sticky { position: static !important; top: auto !important; }
      }
    `;
    document.head.appendChild(s);
    return () => {
      const el = document.getElementById('design-ten-styles');
      if (el) el.remove();
    };
  }, []);
  return null;
}

// mount styles (safe side-effect)
if (typeof window !== 'undefined') {
  const id = 'design-ten-mount';
  if (!document.getElementById(id)) {
    const n = document.createElement('div');
    n.id = id;
    document.body.appendChild(n);
  }
}
