"use client";

import { contactInfo } from "@/data/contact";

export default function ContactInfo() {
  return (
    <div className="rounded-2xl p-6 shadow-lg border border-white/20 bg-white/60 backdrop-blur-xl">
      <h3 className="text-lg font-semibold mb-4">Contact</h3>

      <div className="space-y-3">
        {contactInfo.map((c, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/70 transition">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white/50 ${c.color}`}>
              <c.icon className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs text-slate-600 uppercase">{c.label}</p>
              <p className="font-medium text-slate-900">{c.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-4'>
        <p className='p-4'>
          We're here to answer your questions, discuss your business needs, and help you find the perfect solution. Get in touch with us
          today using the information below, or fill out the contact form, and we'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}