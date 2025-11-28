'use client';

import { contactInfo } from '@/data/contact';
import Link from 'next/link';

export default function ContactInfo() {
  const getLink = item => {
    const label = item.label.toLowerCase();

    if (label.includes('email')) return `mailto:${item.value}`;
    if (label.includes('phone')) return `tel:${item.value.replace(/[^0-9+]/g, '')}`;
    if (label.includes('whatsapp')) return `https://wa.me/918147707125`; 

    return null; 
  };

  return (
    <div className="rounded-2xl p-6 shadow-lg border border-white/20 bg-white/70 backdrop-blur-xl">
      <h3 className="text-lg font-semibold mb-5 text-slate-900">Contact</h3>

      <div className="space-y-4">
        {contactInfo.map((item, i) => {
          const href = getLink(item);
          const Wrapper = href ? 'a' : 'div';

          return (
            <Wrapper
              key={i}
              href={href || undefined}
              target={href ? '_blank' : undefined}
              rel={href ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-4 p-4 rounded-xl transition
                ${href ? 'hover:bg-white/80 cursor-pointer' : 'bg-white/50'}
              `}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/60 shadow-sm ${item.color}`}>
                <item.icon className="h-5 w-5" />
              </div>

              {/* Text */}
              <div>
                <p className="text-[11px] text-slate-500 uppercase tracking-wide">{item.label}</p>

                <p className={`text-slate-900 font-medium ${href ? 'hover:underline underline-offset-2' : ''}`}>{item.value}</p>
              </div>
            </Wrapper>
          );
        })}
      </div>

      <p className="mt-6 p-4 text-slate-700 leading-relaxed bg-white/50 rounded-xl">
        We're here to answer your questions, discuss your business needs, and help you find the right solution. Reach out using the details
        above or fill in the contact form — we’ll get back to you shortly.
      </p>
    </div>
  );
}
