'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ServiceGroup, ServiceItem } from '@/types/services';
import { getIcon } from '@/utils/iconMap';
import Link from 'next/link';

interface Props {
  group: ServiceGroup;
}

export default function CategorySection({ group }: Props) {
  return (
    <section id={`cat-${group.category.slug}`} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 space-y-20 z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            {group.category.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-900">{group.category.title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{group.category.description}</p>
        </div>

        <div className="space-y-28">
          {group.services.map((service, idx) => (
            <ServiceRow key={service.id} service={service} reverse={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, reverse }: { service: ServiceItem; reverse: boolean }) {
  const Icon = getIcon(service.icon);
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`
        flex flex-col lg:flex-row items-center gap-14
        ${reverse ? 'lg:flex-row-reverse' : ''}
      `}
    >
      {/* IMAGE SIDE */}
      <div
        className={`
          relative w-full lg:w-1/2 h-[280px] md:h-[340px]
          overflow-hidden rounded
          transform transition-all duration-700
          ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-105'}
        `}
      >
        {service.image ? (
          <Image src={service.image.src} alt={service.image.alt} fill className="object-contain scale-90 object-center" />
        ) : (
          <div className="w-full h-full bg-slate-200" />
        )}

        {/* Subtle gradient */}
        <div
          className={`
            absolute inset-0 bg-linear-to-br
            ${service.gradient || 'from-blue-500 via-purple-500 to-pink-500'}
            opacity-20
          `}
        />
      </div>

      {/* TEXT SIDE */}
      <div className="lg:w-1/2 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <span className="text-xs uppercase tracking-wide text-slate-500">{service.title}</span>
        </div>

        <h3 className="text-3xl font-bold text-slate-900">{service.title}</h3>
        <p className="text-slate-600 text-base">{service.shortDesc}</p>
        <p className="text-slate-700 leading-relaxed">{service.fullDesc}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {service.features?.slice(0, 5).map((feat, i) => (
            <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-700 shadow-sm">
              {feat}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-5">
          <Link href={`/services/${service.slug}`}>
            <Button className="w-full sm:w-auto">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          {service.cta && (
            <Link href="/contact#contact-form">
              <Button variant="outline" className="w-full sm:w-auto">
                {service.cta}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
