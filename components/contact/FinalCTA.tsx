import Link from 'next/link';
import { Calendar, Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/70 shadow-sm">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="font-semibold">Limited Time — Free roadmap</span>
        </div>

        <h3 className="text-3xl font-bold mb-3">Ready to elevate your ops?</h3>
        <p className="text-slate-600 mb-8">Book your free consultation and get a tailored implementation roadmap.</p>

        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-cyan-400 to-indigo-500 text-white px-6 py-3 rounded-xl">
            <Link href="#contact-form" className="flex items-center gap-2">
              <Calendar className="h-5 w-5" /> Book Consultation
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-800 px-6 py-3 rounded-xl">
            <Link href="tel:+918147707125" className="flex items-center gap-2">
              <Phone className="h-5 w-5" /> Call Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
