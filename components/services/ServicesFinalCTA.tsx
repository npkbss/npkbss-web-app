'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesFinalCTA() {
  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative rounded-3xl overflow-hidden shadow-accent h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
            <Image
              src="/assets/about/about-cta.avif"
              alt="Transform your business with our expert consulting services"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/30" />
            <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-8 lg:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Let&apos;s Transform Your Business Together</h2>

                <p className="text-lg text-white/90 max-w-2xl mb-8">
                  Schedule a free 45‑minute consultation with our experts. We’ll dive into your goals, identify what’s holding you back, and
                  map out the clearest path to help your business level up.
                </p>

                <p className="text-lg text-white/90 max-w-2xl mb-8">
                  Whether it's ERP setup, automation, analytics, or custom development — our team helps you move faster, smarter, and with
                  absolute clarity.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white text-primary hover:bg-white/90 shadow-xl shadow-accent hover:shadow-hover group cursor-pointer"
                      aria-label="Schedule a free consultation"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-white text-white shadow-accent hover:shadow-hover hover:bg-white hover:text-primary"
                    asChild
                  >
                    {/* <a href="tel:+918147707125" aria-label="Call us at +91 8147707125">
                      Call Us: +91 8147707125
                      <Phone className="ml-2 h-5 w-5" />
                    </a> */}
                    <a
                      href="https://wa.me/918147707125"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-7 py-3 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 transition text-base font-medium"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Quick Chat
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-6 sm:gap-8 mt-12 pt-8 border-t border-white/20">
                  <div className="text-white/90">
                    <div className="text-2xl sm:text-3xl font-bold">100+</div>
                    <div className="text-sm">Projects Delivered</div>
                  </div>
                  <div className="text-white/90">
                    <div className="text-2xl sm:text-3xl font-bold">50+</div>
                    <div className="text-sm">Happy Clients</div>
                  </div>
                  <div className="text-white/90">
                    <div className="text-2xl sm:text-3xl font-bold">3+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// <section className="relative py-32 bg-linear-to-b from-white via-slate-100/30 to-white overflow-hidden">
//   <div className="absolute inset-0 pointer-events-none">
//     <div className="absolute -top-20 right-20 w-96 h-96 bg-primary/10 blur-3xl rounded-full opacity-40" />
//     <div className="absolute bottom-0 left-10 w-[420px] h-[420px] bg-secondary/10 blur-[140px] rounded-full opacity-40" />
//   </div>

//   <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-10">
//     <div className="space-y-6 max-w-3xl">
//       <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
//         Let’s Build Something
//         <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"> Impactful Together</span>
//       </h2>

//       <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
//         Whether it's ERP setup, automation, analytics, or custom development— our team helps you execute faster, smarter, and with zero
//         guesswork.
//       </p>
//     </div>

//     <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
//       <Link href="/contact">
//         <Button
//           size="lg"
//           className="
//             inline-flex items-center gap-2 px-7 py-3
//             bg-primary text-white shadow-lg hover:bg-primary/90
//           "
//         >
//           Schedule a Free Consultation
//           <ArrowRight className="w-4 h-4" />
//         </Button>
//       </Link>

//       <a
//         href="https://wa.me/918147707125"
//         target="_blank"
//         className="
//           inline-flex items-center gap-2 px-7 py-3
//           border border-slate-300 rounded-lg text-slate-700
//           hover:bg-slate-100 transition text-base font-medium
//         "
//       >
//         <MessageCircle className="w-4 h-4" />
//         Quick Chat
//       </a>
//     </div>

//     <div className="flex gap-10 mt-10">
//       <div className="text-center">
//         <p className="text-3xl font-bold text-primary">100+</p>
//         <p className="text-sm text-slate-600">Projects Delivered</p>
//       </div>
//       <div className="text-center">
//         <p className="text-3xl font-bold text-primary">50+</p>
//         <p className="text-sm text-slate-600">Happy Clients</p>
//       </div>
//       <div className="text-center">
//         <p className="text-3xl font-bold text-primary">3+ Years</p>
//         <p className="text-sm text-slate-600">Industry Experience</p>
//       </div>
//     </div>
//   </div>
// </section>
