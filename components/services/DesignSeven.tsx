'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { serviceGroups } from './data';
import type { Service } from './data';

export default function DesignSeven() {
  return (
    <section className="w-full h-full bg-black text-white overflow-hidden">
      {serviceGroups.map(group => (
        <GroupChapter key={group.id} group={group} />
      ))}
    </section>
  );
}

/* ───────────────────────────────────────────────
    GROUP SECTION (each category becomes a chapter)
────────────────────────────────────────────── */
function GroupChapter({ group }: { group: { id: number; title: string; description: string; services: Service[] } }) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full h-full">
      {/* GROUP TITLE */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">{group.title}</h2>
        <p className="text-white/70 max-w-2xl mt-3">{group.description}</p>
      </div>

      {/* MAIN CHAPTER SCREEN */}
      <div className="relative w-full h-[90vh] rounded-3xl overflow-hidden mb-20">
        {/* Background */}
        <CinematicBackground service={group.services[active]} />

        {/* Floating Content */}
        <div className="absolute inset-0 flex items-center px-6 md:px-12">
          <ContentCard service={group.services[active]} />
        </div>

        {/* Horizontal Chapter Navigation */}
        <ChapterNav services={group.services} active={active} onChange={i => setActive(i)} />
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
    BACKGROUND (Cinematic full bleed)
────────────────────────────────────────────── */
function CinematicBackground({ service }: { service: Service }) {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Image */}
      {service.image ? (
        <Image src={service.image.src} alt={service.image.alt} fill className="object-cover object-center opacity-80" />
      ) : (
        <div className="bg-slate-800 w-full h-full" />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Gradient accent */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`} />
    </div>
  );
}

/* ───────────────────────────────────────────────
    CONTENT FLOATING CARD
────────────────────────────────────────────── */
function ContentCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="max-w-xl bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl animate-fadeUp">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 flex items-center justify-center bg-white/10 rounded-xl">
          <Icon className="h-7 w-7 text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold">{service.title}</h3>
      </div>

      <p className="text-white/70 text-sm leading-relaxed mb-5">{service.shortDesc}</p>

      <ul className="space-y-2 mb-6">
        {service.features.slice(0, 4).map((f, i) => (
          <li key={i} className="text-sm text-white/80 flex gap-2">
            <span className="text-blue-400 mt-0.5">•</span> {f}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs">{service.timeline}</span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
    HORIZONTAL CHAPTER NAV (like Apple website)
────────────────────────────────────────────── */
function ChapterNav({ services, active, onChange }: { services: Service[]; active: number; onChange: (i: number) => void }) {
  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
      {services.map((s, i) => (
        <button
          key={s.id}
          onClick={() => onChange(i)}
          className={`h-2 rounded-full transition-all ${active === i ? 'w-10 bg-white' : 'w-4 bg-white/40 hover:bg-white/60'}`}
        />
      ))}
    </div>
  );
}

/* ───────────────────────────────────────────────
    ANIMATIONS
────────────────────────────────────────────── */
<style jsx global>{`
  .animate-fadeUp {
    animation: fadeUp 0.6s cubic-bezier(0.25, 1, 0.3, 1);
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`}</style>;
