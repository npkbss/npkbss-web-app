'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { servicesFAQ } from '@/data/services';
import Link from 'next/link';

export default function ServicesFAQ() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-sans">Frequently Asked Questions</h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto font-sans">
            Clear answers to help you understand our process, pricing, implementation approach, and support model.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {servicesFAQ.map(item => (
            <AccordionItem key={item.id} value={`faq-${item.id}`} className="border border-slate-200 bg-white rounded-xl shadow-sm">
              <AccordionTrigger className="px-6 py-5 text-left text-lg font-medium text-slate-900 hover:no-underline">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-5 text-slate-600 leading-relaxed">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-4">Still have questions?</p>

          <Link
            href="/contact"
            className="
              inline-flex items-center px-6 py-3 rounded-full
              bg-primary text-white hover:bg-primary/90
              shadow-lg shadow-primary/20 transition
            "
          >
            Talk to our team
          </Link>
        </div>
      </div>
    </section>
  );
}
