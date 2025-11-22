"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { serviceGroups } from "./data";

export default function DesignFive() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {serviceGroups.map(group => (
          <ServiceFlow key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------
   Service Group Section (each category)
----------------------------------------------- */
function ServiceFlow({ group }: any) {
  return (
    <div className="space-y-14">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-3">{group.title}</h2>
        <p className="text-slate-600">{group.description}</p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-slate-300 ml-4 space-y-20">
        {group.services.map((service: any, index: number) => (
          <StepItem key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------
   Individual Step
----------------------------------------------- */
function StepItem({ service, index }: any) {
  const [visible, setVisible] = useState(false);
  const Icon = service.icon;

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`
        pl-10 relative transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* DOT */}
      <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-blue-600 shadow-md"></div>

      {/* CARD */}
      <div className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition p-6 md:p-8">
        
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
            <p className="text-slate-600 text-sm">{service.shortDesc}</p>
          </div>
        </div>

        {/* Image */}
        {service.image && (
          <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              className="object-contain"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30`}
            ></div>
          </div>
        )}

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 4).map((feat: string, i: number) => (
            <li key={i} className="flex gap-2 text-slate-700 text-sm">
              <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5" />
              {feat}
            </li>
          ))}
        </ul>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
            {service.timeline}
          </span>
          <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium">
            {service.pricing}
          </span>
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          {service.cta}
        </Button>
      </div>
    </div>
  );
}
