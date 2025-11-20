'use client';

import Hero from '@/components/contact/Hero';
import Timeline from '@/components/contact/Timeline';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import FAQ from '@/components/contact/FAQ';
import FinalCTA from '@/components/contact/FinalCTA';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <Hero />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <Timeline />
            <ContactInfo />
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </main>
  );
}
