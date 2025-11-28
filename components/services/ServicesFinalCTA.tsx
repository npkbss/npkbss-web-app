'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesFinalCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative rounded-3xl overflow-hidden shadow-accent min-h-[360px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[560px]">
          {/* Background Image */}
          <Image
            src="/assets/about/about-cta.avif"
            alt="Transform your business with our expert consulting services"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/40 md:via-black/70" />

          {/* Content */}
          <div className="relative z-10 flex h-full px-4 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-4">
            <div className="my-auto max-w-md sm:max-w-2xl lg:max-w-3xl">
              <h2 className="text-[1.5rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-5">
                Let&apos;s Transform Your Business Together
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 max-w-xl">
                Schedule a free 45‑minute consultation with our experts. We’ll dive deep into your goals, identify challenges, and chart the
                clearest roadmap for your growth.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-xl">
                Whether it’s ERP setup, automation, analytics, or custom development—our team helps you move smarter and faster.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row flex-wrap gap-4">
                <Link href="/contact" className="w-full md:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full md:w-auto bg-white text-primary hover:bg-white/90 shadow-xl shadow-accent hover:shadow-hover group"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <a
                  href="https://wa.me/918147707125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white border border-white rounded-lg text-base font-medium hover:bg-white hover:text-primary transition shadow-accent hover:shadow-hover w-full md:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quick Chat
                </a>
              </div>

              {/* Stats Section */}
              <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-10 mt-8 sm:mt-10 md:mt-12 pt-5 sm:pt-6 md:pt-8 border-t border-white/20">
                {[
                  { label: 'Projects Delivered', value: '100+' },
                  { label: 'Happy Clients', value: '50+' },
                  { label: 'Years Experience', value: '3+' },
                ].map(item => (
                  <div key={item.label} className="text-white/90 min-w-[90px]">
                    <div className="text-lg sm:text-2xl md:text-3xl font-bold">{item.value}</div>
                    <div className="text-[11px] sm:text-xs md:text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
