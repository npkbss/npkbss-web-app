// 'use client';

// import { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { serviceGroups } from './data';
// import type { Service, ServiceGroup } from './data';

// /* ---------------------------------------------
//    SCROLL REVEAL HOOK
// --------------------------------------------- */
// function useReveal(ref: React.RefObject<HTMLDivElement | null>) {
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(e => {
//           if (e.isIntersecting) {
//             el.classList.add('reveal-active');
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     observer.observe(el);

//     return () => observer.disconnect();
//   }, [ref]);
// }


// /* ---------------------------------------------
//    MAIN CONTAINER
// --------------------------------------------- */
// export default function DesignNine() {
//   return (
//     <section className="bg-white">
//       {serviceGroups.map((group: ServiceGroup) => (
//         <GroupBlock key={group.id} group={group} />
//       ))}

//       <StyleInjector />
//     </section>
//   );
// }

// /* ---------------------------------------------
//    GROUP BLOCK
// --------------------------------------------- */
// function GroupBlock({ group }: { group: ServiceGroup }) {
//   return (
//     <div className="py-24 border-b border-slate-200">
//       <div className="max-w-5xl mx-auto px-6 mb-16">
//         <h2 className="text-4xl font-bold text-slate-900 mb-4">{group.title}</h2>
//         <p className="text-slate-600 text-lg">{group.description}</p>
//       </div>

//       <div className="space-y-28">
//         {group.services.map((service: Service) => (
//           <ServiceShowcase key={service.id} service={service} />
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ---------------------------------------------
//    INDIVIDUAL SERVICE
// --------------------------------------------- */
// function ServiceShowcase({ service }: { service: Service }) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   useReveal(ref);

//   const Icon = service.icon;

//   return (
//     <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-[900ms] reveal-element">
//       <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//         {/* LEFT SIDE — TEXT */}
//         <div>
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
//               <Icon className="h-7 w-7 text-slate-800" />
//             </div>

//             <span className="uppercase text-xs tracking-wide text-slate-500">{service.category}</span>
//           </div>

//           <h3 className="text-3xl font-bold text-slate-900 leading-tight">{service.title}</h3>

//           <p className="text-slate-600 mt-4 text-lg leading-relaxed">{service.shortDesc}</p>

//           <p className="text-slate-700 mt-6 leading-relaxed text-base">{service.fullDesc}</p>

//           {/* FEATURES */}
//           <div className="mt-6 flex flex-wrap gap-3">
//             {service.features.slice(0, 6).map((f, i) => (
//               <span key={i} className="px-3 py-1 rounded-full text-xs bg-slate-100 text-slate-700 border border-slate-200">
//                 {f}
//               </span>
//             ))}
//           </div>

//           {/* META */}
//           <div className="mt-8 flex gap-4">
//             <div className="px-4 py-2 bg-slate-100 rounded-xl text-sm text-slate-700">{service.timeline}</div>
//             <div className="px-4 py-2 bg-slate-100 rounded-xl text-sm text-slate-700">{service.pricing}</div>
//           </div>

//           {/* CTA BUTTON */}
//           <button
//             onClick={() => {
//               const el = document.getElementById('contact-form');
//               if (el) el.scrollIntoView({ behavior: 'smooth' });
//             }}
//             className="mt-10 inline-block px-6 py-3 bg-slate-900 text-white rounded-xl shadow hover:bg-slate-800 transition"
//           >
//             {service.cta}
//           </button>
//         </div>

//         {/* RIGHT SIDE — IMAGE */}
//         <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl group">
//           <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40 mix-blend-multiply`} />

//           {service.image && (
//             <Image
//               src={service.image.src}
//               alt={service.image.alt}
//               fill
//               className="object-contain group-hover:scale-105 transition-transform duration-700"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------------------------------------
//    STYLE INJECTOR
// --------------------------------------------- */
// function StyleInjector() {
//   useEffect(() => {
//     if (document.getElementById('design9-style')) return;

//     const s = document.createElement('style');
//     s.id = 'design9-style';
//     s.innerHTML = `
//       .reveal-element.reveal-active {
//         opacity: 1 !important;
//         transform: translateY(0) !important;
//       }
//     `;
//     document.head.appendChild(s);
//   }, []);

//   return null;
// }

import React from 'react'

const DesignNine = () => {
  return (
    <div>DesignNine</div>
  )
}

export default DesignNine
