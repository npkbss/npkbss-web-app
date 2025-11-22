'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { faqList } from '@/data/contact-data';
// import { MessageCircle } from 'lucide-react';

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-300 to-indigo-300 text-white shadow-lg mx-auto mb-4">
            <MessageCircle className="h-6 w-6" />
          </div> */}

          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked</h2>
          <p className="text-slate-600 mt-1">Quick answers to common questions</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqList.map(f => (
            <AccordionItem key={f.value} value={f.value} className="bg-white rounded-xs shadow-sm border border-slate-200">
              <AccordionTrigger className="px-4 py-4 flex gap-3 items-center hover:no-underline">
                <f.icon className="h-5 w-5 text-cyan-400" />
                <span className="font-medium text-slate-900">{f.title}</span>
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-4 text-slate-600 leading-relaxed">{f.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
