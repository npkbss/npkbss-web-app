'use client';

import Link from 'next/link';
import { Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
      {/* Decorative Blobs */}
      <svg className="absolute -left-28 -top-32 opacity-30" width="520" height="520">
        <defs>
          <linearGradient id="heroBlob1" x1="0" x2="1">
            <stop offset="0" stopColor="#7dd3fc" />
            <stop offset="1" stopColor="#c4b5fd" />
          </linearGradient>
        </defs>
        <path
          d="M70 0c40 0 80 20 110 50s50 70 30 110-70 60-110 70S0 220 0 160 30 0 70 0z"
          fill="url(#heroBlob1)"
          className="animate-[wiggle_8s_ease-in-out_infinite]"
        />
      </svg>

      <svg className="absolute right-0 bottom-0 opacity-25" width="420" height="420">
        <defs>
          <linearGradient id="heroBlob2" x1="0" x2="1">
            <stop offset="0" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <path
          d="M60 0c30 40 90 50 140 30s90-10 120 30 40 90 0 130-120 40-160 10S30 140 0 90 30 0 60 0z"
          fill="url(#heroBlob2)"
          className="animate-[wiggle_10s_ease-in-out_infinite]"
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm">Experts and Consultants — Strategic Automations</span>
          <Star className="h-4 w-4 text-yellow-300" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 font-display">
          Creative Zoho implementations that{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-indigo-300">actually move the needle</span>
        </h1>

        <p className="text-slate-200 max-w-2xl mx-auto mb-8">
          We combine product thinking with technical craft — frictionless automation, clean UX, and measurable impact.
        </p>

        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-blue-800 px-8 py-3 rounded-xl shadow-lg">
            <Link href="#contact-form">Book Free Consult</Link>
          </Button>

          <Link href="#faq" className="text-sm text-slate-200 hover:text-white transition py-2 items-center">
            View FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
