'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { faqList } from '@/data/contact';

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">Quick answers to common questions.</p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqList.map(f => (
            <AccordionItem key={f.value} value={f.value} className="border border-slate-200 bg-white rounded-xl shadow-sm">
              <AccordionTrigger className="px-6 py-5 flex gap-3 items-center text-left text-lg font-medium text-slate-900 hover:no-underline">
                <f.icon className="h-5 w-5 text-cyan-400" />
                {f.title}
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-5 text-slate-600 leading-relaxed">{f.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
