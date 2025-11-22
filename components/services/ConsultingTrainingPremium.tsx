'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Service, ServiceGroup, serviceGroups } from './data';


export default function ConsultingTrainingPremium() {
  const group = serviceGroups.find(g => g.id === 5) as ServiceGroup | undefined;
  if (!group) return null;

  return (
    <section className="bg-slate-950 text-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[1fr,1.3fr]">
        {/* LEFT — storyline */}
        <div className="lg:sticky lg:top-24 space-y-8">
          <p className="inline-flex bg-slate-900/50 border border-slate-700 px-3 py-1 text-xs rounded-full text-slate-300">
            Consulting & Training
            <span className="ml-2 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </p>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">Strategic consulting & expert training for teams ready to level up.</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Get hands-on programs, strategic advice, and structured learning designed around Power BI, Zoho, Tally, cloud, automation, and
              more. No fluff — just real improvement.
            </p>
          </div>

          {/* mini stats */}
          <div className="flex gap-4 flex-wrap">
            <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
              <p className="text-slate-400 text-xs">Workshop Tracks</p>
              <p className="text-lg font-semibold">10+ tailored</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
              <p className="text-slate-400 text-xs">Consulting Duration</p>
              <p className="text-lg font-semibold">2–6 weeks</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-500 text-slate-900 px-5 py-2.5 rounded-full font-medium shadow-lg shadow-emerald-600/30 hover:bg-emerald-400 transition"
          >
            Talk to a consultant
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* RIGHT — cards */}
        <div className="space-y-5">
          {group.services.map(service => (
            <ConsultingCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 450ms ease, transform 450ms ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}

function ConsultingCard({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const Icon = service.icon;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setShow(true);
            observer.unobserve(ref.current!);
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`fade-up relative rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/20 ${
        show ? 'visible' : ''
      }`}
    >
      <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-500" />

      <div className="flex gap-4">
        <div className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center ring-1 ring-slate-700 relative shrink-0">
          <Icon className="h-5 w-5 text-emerald-300" />
        </div>

        <div className="space-y-1 flex-1">
          <h3 className="text-lg font-semibold text-slate-50">{service.title}</h3>
          <p className="text-xs bg-slate-800 rounded-full px-2 py-0.5 inline-block text-slate-300">{service.category}</p>
          <p className="text-sm text-slate-300">{service.shortDesc}</p>
          <p className="text-xs text-slate-400 line-clamp-3">{service.fullDesc}</p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 mt-2">
            {service.features.slice(0, 4).map((f, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 flex justify-between items-center text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full" />
          Tailored for your team
        </span>

        <Link href="/contact" className="text-emerald-300 hover:text-emerald-200 flex items-center gap-1 transition">
          Explore program
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
}
