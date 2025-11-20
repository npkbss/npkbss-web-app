import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MessageCircle } from 'lucide-react';
import { faqList } from './data';


export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-300 to-indigo-300 text-white mx-auto mb-4">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold">Frequently asked</h2>
          <p className="text-slate-600">Quick answers to common questions</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqList.map((f) => (
            <AccordionItem key={f.value} value={f.value} className="bg-white rounded-xl shadow-sm border">
              <AccordionTrigger className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <f.icon className="h-5 w-5 text-cyan-400" />
                  <span className="font-medium">{f.title}</span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-4 text-slate-600">{f.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

