'use client';

// import { servicesProcess } from '@/data/services';
// import { getIcon } from '@/utils/iconMap';
import { Code, FileText, Shield, Target, Users, Zap } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description:
      'We dive deep into understanding your business challenges, goals, and requirements through detailed consultation sessions.',
    icon: <Target className="h-6 w-6" />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    step: '02',
    title: 'Proposal & Planning',
    description:
      'Receive a comprehensive proposal with timeline, deliverables, and pricing. We create a detailed project plan tailored to your needs.',
    icon: <FileText className="h-6 w-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '03',
    title: 'Implementation & Development',
    description: 'Our expert team executes the plan with precision, keeping you updated at every milestone with regular progress reports.',
    icon: <Code className="h-6 w-6" />,
    color: 'from-orange-500 to-red-500',
  },
  {
    step: '04',
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures everything works flawlessly. We verify all features, integrations, and performance benchmarks.',
    icon: <Shield className="h-6 w-6" />,
    color: 'from-green-500 to-emerald-500',
  },
  {
    step: '05',
    title: 'Training & Deployment',
    description:
      'Comprehensive training for your team followed by smooth deployment. We ensure everyone is comfortable with the new system.',
    icon: <Users className="h-6 w-6" />,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    step: '06',
    title: 'Support & Optimization',
    description: 'Ongoing support and continuous optimization to ensure your solution evolves with your business needs.',
    icon: <Zap className="h-6 w-6" />,
    color: 'from-pink-500 to-rose-500',
  },
];

export default function ServicesProcess() {
  return (
    // <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
    //   {/* floating gradients */}
    //   <div className="absolute inset-0 pointer-events-none">
    //     <div className="absolute -top-20 left-10 w-96 h-96 bg-primary/10 blur-[130px]" />
    //     <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[160px]" />
    //   </div>

    //   <div className="relative max-w-7xl mx-auto px-6">
    //     {/* Heading */}
    //     <div className="text-center max-w-3xl mx-auto mb-20">
    //       <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How We Deliver Premium Services</h2>
    //       <p className="mt-4 text-lg text-slate-600">
    //         A refined execution framework used across ERP, automation, analytics, cloud, operations, and integrations — built for speed &
    //         precision.
    //       </p>
    //     </div>

    //     {/* Process timeline */}
    //     <div className="relative">
    //       <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-slate-200/70 rounded-full hidden md:block" />

    //       <div className="flex flex-col gap-16">
    //         {servicesProcess.map((step, index) => {
    //           const Icon = getIcon(step.icon);

    //           const isLeft = index % 2 === 0;

    //           return (
    //             <div
    //               key={step.id}
    //               className={`
    //                 flex flex-col md:flex-row items-center gap-10
    //                 ${isLeft ? 'md:flex-row-reverse' : ''}
    //               `}
    //             >
    //               {/* connector dot */}
    //               <div className="hidden md:flex items-center justify-center w-10">
    //                 <div className="w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/30" />
    //               </div>

    //               {/* Card */}
    //               <div
    //                 className="
    //                   relative group p-8 w-full md:w-[44%]
    //                   bg-white/70 backdrop-blur-xl border border-slate-200
    //                   rounded-2xl shadow-sm hover:shadow-xl
    //                   transition-all
    //                 "
    //               >
    //                 {/* Glow effect */}
    //                 <div
    //                   className="
    //                     absolute inset-0 rounded-2xl opacity-0
    //                     group-hover:opacity-100
    //                     bg-gradient-to-br from-primary/10 to-secondary/10
    //                     blur-xl transition
    //                   "
    //                 />

    //                 <div className="relative z-10">
    //                   <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
    //                     <Icon className="w-7 h-7 text-primary" />
    //                   </div>

    //                   <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>

    //                   <p className="mt-3 text-slate-600 leading-relaxed text-sm">{step.desc}</p>
    //                 </div>
    //               </div>

    //               <div className="hidden md:block w-10" />
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mt-4 mb-6 font-sans">How We Deliver Premium Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            A refined execution framework used across ERP, automation, analytics, cloud, operations, and integrations — built for speed &
            precision.
          </p>
        </div>

        {/* Stepped Circle Design */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((item, index) => {
            const isOrange = index === 2 || index === 5;
            return (
              <div key={index} className="group relative">
                <div
                  className={`relative w-full aspect-square rounded-full border-4 ${
                    isOrange ? 'bg-primary border-primary' : 'bg-background border-border'
                  } flex flex-col items-center justify-center p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                >
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full ${
                      isOrange ? 'bg-primary-foreground text-primary' : 'bg-primary text-primary-foreground'
                    } flex items-center justify-center font-bold text-lg shadow-lg`}
                  >
                    {item.step}
                  </div>
                  <div className={`mb-4 ${isOrange ? 'text-primary-foreground' : 'text-primary'}`}>{item.icon}</div>
                  <h3 className={`text-lg font-bold text-center mb-3 ${isOrange ? 'text-primary-foreground' : 'text-foreground'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm text-center line-clamp-4 ${isOrange ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {item.description}
                  </p>
                  <div
                    className={`absolute inset-0 rounded-full ${
                      isOrange ? 'bg-primary' : 'bg-primary'
                    } blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>
                {index < processSteps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
