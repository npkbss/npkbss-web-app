'use client';

import Link from 'next/link';
import { Sparkles, Star, ArrowRight, Globe, TrendingUp, Rocket, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [active, setActive] = useState([false, false, false]);
  useEffect(() => {
    const t1 = setTimeout(() => setActive([true, false, false]), 220);
    const t2 = setTimeout(() => setActive([true, true, false]), 440);
    const t3 = setTimeout(() => setActive([true, true, true]), 660);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const stats = [
    { icon: Globe, value: '50+', label: 'Institutions' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
    { icon: Rocket, value: '2–4 wks', label: 'Delivery' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white pt-24 pb-32">
      {/* soft morphing blobs */}
      <svg className="absolute -left-24 -top-20 opacity-30" width="480" height="480" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#7dd3fc" />
            <stop offset="1" stopColor="#c4b5fd" />
          </linearGradient>
        </defs>
        <g transform="translate(30,30)">
          <path d="M70 0c40 0 80 20 110 50s50 70 30 110-70 60-110 70S0 220 0 160 30 0 70 0z" fill="url(#g1)" className="animate-[wiggle_8s_ease-in-out_infinite]" />
        </g>
      </svg>

      <svg className="absolute right-0 bottom-0 opacity-25" width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <path d="M60 0c30 40 90 50 140 30s90-10 120 30 40 90 0 130-120 40-160 10S30 140 0 90 30 0 60 0z" fill="url(#g2)" className="animate-[wiggle_10s_ease-in-out_infinite]" />
      </svg>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white/8 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-sm">Premium Zoho Partner — Strategic automations.</span>
            <Star className="h-4 w-4 text-yellow-300" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Creative Zoho implementations that <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300">actually move the needle</span>
          </h1>

          <p className="text-slate-200 max-w-2xl mx-auto mb-8">
            We combine product thinking with technical craft — frictionless automation, human-friendly UX and measurable outcomes.
          </p>

          <div className="flex justify-center gap-4 items-center">
            <Button asChild size="lg" className="bg-white text-blue-800 px-8 py-3 rounded-xl shadow-lg">
              <Link href="#contact-form" className="flex items-center gap-2">
                Book Free Consult
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <a className="inline-flex items-center gap-2 text-sm text-slate-200 px-3 py-2 rounded-full hover:bg-white/5 transition" href="#faq">
              View FAQs
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`rounded-2xl p-5 backdrop-blur-md bg-white/5 border border-white/8 transform transition duration-600 ${
                  active[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <s.icon className="mx-auto h-6 w-6 text-cyan-300 mb-2" />
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-sm text-slate-200/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(6deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-\\[wiggle_8s_ease-in-out_infinite\\] { animation: wiggle 8s ease-in-out infinite; }
        .animate-\\[wiggle_10s_ease-in-out_infinite\\] { animation: wiggle 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
