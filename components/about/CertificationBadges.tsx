'use client';
import React, { useState } from 'react';
import { Award, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function CertificationBadges() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const badges = [
    {
      label: 'Zoho Certified Developer Associate',
      img: '/assets/about/zoho-developer-associate.png',
      color: 'border-blue-200 hover:border-blue-400',
    },
    {
      label: 'Zoho CRM Developer',
      img: '/assets/about/zoho-crm-developer.png',
      color: 'border-purple-200 hover:border-purple-400',
    },
    {
      label: 'Zoho CRM Administrator',
      img: '/assets/about/zoho-crm-admin.png',
      color: 'border-orange-200 hover:border-orange-400',
    },
    {
      label: 'Zoho Analytics Associate',
      img: '/assets/about/zoho-analytics-associate.png',
      color: 'border-green-200 hover:border-green-400',
    },
    {
      label: 'Zoho Books Certified Associate',
      img: '/assets/about/zoho-books-associate.png',
      color: 'border-blue-200 hover:border-blue-400',
    },
    {
      label: 'Zoho Desk Certified Associate',
      img: '/assets/about/zoho-desk-certified-associate.png',
      color: 'border-purple-200 hover:border-purple-400',
    },
    {
      label: 'Zoho Project Certified Associate',
      img: '/assets/about/zoho-projects-associate.png',
      color: 'border-orange-200 hover:border-orange-400',
    },
    {
      label: 'Zoho Payroll Certified Associate',
      img: '/assets/about/zoho-payroll-associate.png',
      color: 'border-green-200 hover:border-green-400',
    },
  ];

  return (
    <section className="py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
            <Award className="w-6 h-6 text-blue-600" />
          </div>

          <h3 className="sm:text-3xl md:text-5xl font-bold text-blue-900 mb-3 font-sans">Certified Expertise</h3>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Our leadership team is backed by globally recognized Zoho certifications, ensuring expert-level implementation and consulting
            quality.
          </p>
        </div>

        {/* Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-white rounded-xl p-6 border-2 ${
                badge.color
              } transition-all duration-300 hover:shadow-lg h-full flex flex-col ${hoveredIndex === index ? '-translate-y-1' : ''}`}
            >
              <div className="flex-1 flex items-center justify-center mb-4">
                <Image
                  src={badge.img}
                  alt={badge.label}
                  width={180}
                  height={180}
                  className="object-contain max-h-full w-auto h-auto max-w-full"
                />
              </div>

              <div className="flex flex-col items-center flex-1 min-h-14 justify-end">
                <p className="text-center text-sm font-medium text-slate-700 leading-snug sm:text-sm mb-1 flex-1 flex items-center">
                  {badge.label}
                </p>

                {hoveredIndex === index && (
                  <div className="flex items-center text-green-600 bg-green-50/80 backdrop-blur-sm px-2 py-1 rounded-full border border-green-200/50 mt-2">
                    <CheckCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                    <span className="text-xs font-medium whitespace-nowrap">Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust footer */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            <span className="font-semibold text-slate-700"> Active Certifications</span> • Globally Recognized Standards
          </p>
        </div>
      </div>
    </section>
  );
}
