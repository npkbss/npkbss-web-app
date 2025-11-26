'use client';

import { servicesCTA } from '@/data/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* soft moving gradient */}
      <div className="absolute inset-0 opacity-[0.55] pointer-events-none">
        <div className="absolute left-0 top-10 w-[480px] h-[480px] bg-primary/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute right-0 bottom-10 w-[420px] h-[420px] bg-secondary/10 blur-[140px] rounded-full animate-pulse delay-300" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">{servicesCTA.title}</h2>

        {/* Subtitle */}
        <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">{servicesCTA.subtitle}</p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/contact">
            <Button className="px-8 py-6 text-base shadow-accent hover:shadow-hover transition">
              {servicesCTA.primary}
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline" className="px-8 py-6 text-base shadow-md hover:border-primary hover:text-primary transition">
              {servicesCTA.secondary}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
