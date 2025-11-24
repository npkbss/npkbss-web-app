// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { Award, BarChart3, Calculator, Brain, Zap, Workflow, Code2 } from 'lucide-react';

// const platformServices = [
//   {
//     title: 'Zoho Ecosystem',
//     desc: 'Unified suite for CRM, finance, HR, and more.',
//     icon: '/assets/services/zoho-one.png',
//     link: '/services/zoho',
//   },
//   {
//     title: 'Tally Prime',
//     desc: 'Effortless accounting and compliance.',
//     icon: '/assets/home/tally-prime.avif',
//     link: '/services/tally',
//   },
//   {
//     title: 'Netsuite ERP',
//     desc: 'Cloud ERP for scalable processes.',
//     icon: '/assets/services/oracle-netsuite.png',
//     link: '/services/netsuite',
//   },
//   {
//     title: 'Salesforce CRM',
//     desc: 'Unify sales and marketing.',
//     icon: '/assets/services/salesforce.jpg',
//     link: '/services/salesforce',
//   },
//   {
//     title: 'Power BI',
//     desc: 'Visualize and analyze your business data.',
//     icon: '/assets/services/powerbi.png',
//     link: '/services/powerbi',
//   },
// ];

// const operationsServices = [
//   {
//     title: 'Accounting & Audit',
//     desc: 'Comprehensive accounting and audits for compliance.',
//     icon: <Calculator className="h-8 w-8 text-primary" />,
//     image: '/assets/services/accounting.jpg',
//     link: '/services/accounting',
//   },
//   {
//     title: 'Corporate Services',
//     desc: 'Full-spectrum business support and legal solutions.',
//     icon: <Award className="h-8 w-8 text-primary" />,
//     image: '/assets/services/corporate-service.jpg',
//     link: '/services/corporate',
//   },
//   {
//     title: 'MIS (Financial & Non-Financial)',
//     desc: 'Custom business dashboards for key insights.',
//     icon: <BarChart3 className="h-8 w-8 text-primary" />,
//     image: '/assets/services/mis-report.jpg',
//     link: '/services/mis',
//   },
//   {
//     title: 'Data Migration & Analysis',
//     desc: 'Modernize and analyze your data with ease.',
//     icon: <Brain className="h-8 w-8 text-primary" />,
//     image: '/assets/services/data-migration.jpg',
//     link: '/services/data-migration',
//   },
// ];

// const integrationServices = [
//   {
//     title: 'Custom Applications',
//     desc: 'Unique apps to automate and accelerate your business.',
//     icon: <Code2 className="h-8 w-8 text-primary" />,
//     image: '/assets/services/custom-apps.jpg',
//     link: '/services/custom-apps',
//   },
//   {
//     title: 'Excel Add-ins (Macros, VBA)',
//     desc: 'Automate tedious tasks with advanced Excel add-ins.',
//     icon: <Calculator className="h-8 w-8 text-primary" />,
//     image: '/assets/services/excel-addin.jpg',
//     link: '/services/excel-addin',
//   },
//   {
//     title: 'TDL & GSheet Automation',
//     desc: 'Scripted automations for Tally and Google Sheets.',
//     icon: <Workflow className="h-8 w-8 text-primary" />,
//     image: '/assets/services/g-sheet.jpg',
//     link: '/services/g-sheet',
//   },
// ];

// const automationBrands = [
//   { name: 'N8N', logo: '/assets/services/n8n.jpg', link: '/services/n8n' },
//   { name: 'Make.com', logo: '/assets/services/make.jpg', link: '/services/make' },
//   { name: 'Zapier', logo: '/assets/services/zapier.jpg', link: '/services/zapier' },
//   { name: 'Power Automate', logo: '/assets/services/power-automate.jpg', link: '/services/power-automate' },
// ];

// const trainingServices = [
//   {
//     title: 'ERP/CRM/BI Training',
//     desc: 'Grow your team’s platform expertise through engaging sessions.',
//     icon: <Award className="h-8 w-8 text-primary" />,
//     image: '/assets/services/training.jpg',
//     link: '/services/training',
//   },
//   {
//     title: 'Automation Workshops',
//     desc: 'Hands-on learning for popular automation tools.',
//     icon: <Workflow className="h-8 w-8 text-primary" />,
//     image: '/assets/services/workshop.jpg',
//     link: '/services/workshop',
//   },
// ];

// // --------------- COMPONENTS ----------------

// // PLATFORM SECTION: Horizontal Scroll Cards
// function PlatformCarousel({ services }) {
//   return (
//     <div className="py-16 bg-primary/10">
//       <div className="container mx-auto max-w-7xl px-4">
//         <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Platform Solutions</h2>
//         <p className="text-muted-foreground mb-8 max-w-2xl">
//           Transform your business using the world’s top digital platforms, customized for you.
//         </p>
//         <div className="flex gap-8 overflow-x-auto pb-2 hide-scrollbar">
//           {services.map((service, idx) => (
//             <Link href={service.link} key={idx} className="min-w-[260px] max-w-xs flex-shrink-0">
//               <div className="group bg-background rounded-2xl shadow-soft border border-border overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col relative">
//                 <div className="relative w-full h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
//                   <Image
//                     src={service.icon}
//                     alt={service.title + ' logo'}
//                     fill
//                     className="object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
//                   />
//                 </div>
//                 <div className="p-6 grow flex flex-col">
//                   <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
//                   <p className="text-muted-foreground text-base mb-2">{service.desc}</p>
//                   <span className="text-xs font-medium text-primary group-hover:underline cursor-pointer mt-auto">Explore &rarr;</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // BUSINESS OPERATIONS SECTION: Classic Grid Overlay Cards
// function BusinessGrid({ services }) {
//   return (
//     <div className="py-16 bg-muted/30">
//       <div className="container mx-auto max-w-7xl px-4">
//         <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Business Operations</h2>
//         <p className="text-muted-foreground mb-8 max-w-2xl">Professional support for your vital business processes and reporting needs.</p>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, idx) => (
//             <Link href={service.link} key={idx}>
//               <div className="group bg-background rounded-2xl shadow-soft border border-border relative flex flex-col p-0 overflow-hidden hover:shadow-accent">
//                 <div className="relative h-32 w-full bg-gradient-to-br from-purple-400/30 to-purple-100 opacity-80">
//                   <Image src={service.image} alt={service.title} fill className="object-center object-cover" />
//                   <div className="absolute bottom-2 left-2">{service.icon}</div>
//                 </div>
//                 <div className="p-5 pb-3 flex-grow flex flex-col justify-between">
//                   <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
//                   <p className="text-muted-foreground text-sm mb-2">{service.desc}</p>
//                   <span className="text-xs text-primary font-medium group-hover:underline cursor-pointer">Details &rarr;</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // INTEGRATION SECTION: Vertical Steps
// function IntegrationSteps({ services }) {
//   return (
//     <div className="py-16 bg-gradient-to-br from-green-100 to-teal-100">
//       <div className="container mx-auto max-w-6xl px-4">
//         <h2 className="text-3xl font-bold mb-2 text-foreground">Development & Integration</h2>
//         <p className="mb-10 text-muted-foreground max-w-xl">Custom applications and integrations tailored for your workflows.</p>
//         <div className="flex flex-col gap-8">
//           {services.map((service, idx) => (
//             <div key={idx} className="flex gap-6 items-center">
//               <div className="w-16 h-16 rounded-xl border bg-background flex items-center justify-center shadow border-primary">
//                 {service.icon}
//               </div>
//               <div>
//                 <h3 className="text-lg font-bold text-primary">{service.title}</h3>
//                 <p className="mb-2 text-muted-foreground">{service.desc}</p>
//                 <Link href={service.link} className="text-sm text-primary font-medium underline">
//                   See Solution
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // AUTOMATION SECTION: Brand Chips
// function AutomationChips({ brands }) {
//   return (
//     <div className="py-16 bg-gradient-to-br from-blue-100 to-blue-50">
//       <div className="container mx-auto max-w-7xl px-4">
//         <h2 className="text-3xl font-bold mb-6 text-foreground">Automation & Workflow Platforms</h2>
//         <div className="flex flex-wrap gap-8 items-center justify-center">
//           {brands.map((brand, idx) => (
//             <Link href={brand.link} key={idx}>
//               <div className="relative min-w-[120px] h-28 flex items-center justify-center rounded-xl bg-background border border-primary shadow-soft hover:shadow-accent px-6 py-4 transition-transform hover:-translate-y-2">
//                 <Image src={brand.logo} alt={brand.name} width={56} height={56} className="object-contain" />
//                 <span className="absolute bottom-2 left-2 text-xs font-bold text-primary">{brand.name}</span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // TRAINING SECTION: Stack Cards + Callouts
// function TrainingStack({ trainings }) {
//   return (
//     <div className="py-16 bg-yellow-50">
//       <div className="container mx-auto max-w-5xl px-4">
//         <h2 className="text-3xl font-bold text-foreground mb-6">Empower Through Training</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {trainings.map((training, idx) => (
//             <div
//               key={idx}
//               className="bg-background flex flex-row shadow-soft border border-border rounded-2xl overflow-hidden hover:shadow-accent transition-all"
//             >
//               <div className="w-36 h-36 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
//                 <Image src={training.image} alt={training.title} width={120} height={120} className="object-cover rounded-xl" />
//               </div>
//               <div className="flex flex-col justify-center p-6 grow">
//                 <h3 className="font-bold text-lg text-primary">{training.title}</h3>
//                 <p className="mb-2 text-muted-foreground">{training.desc}</p>
//                 <Link href={training.link} className="text-sm text-primary font-semibold underline">
//                   Book Session
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ---- MAIN SECTION ----
// const ServicesOverview = () => (
//   <div className="bg-background min-h-screen">
//     <section className="text-center py-16">
//       <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Unlock Business Excellence</h1>
//       <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
//         Discover distinct solution areas—from platforms and operations to automation, integrations, and skill development. Experience
//         creative, smart UI for easy browsing.
//       </p>
//     </section>
//     <PlatformCarousel services={platformServices} />
//     <BusinessGrid services={operationsServices} />
//     <IntegrationSteps services={integrationServices} />
//     <AutomationChips brands={automationBrands} />
//     <TrainingStack trainings={trainingServices} />
//     <div className="container mx-auto px-4 py-12 text-center">
//       <Link href="/services">
//         <button className="rounded-xl font-bold bg-primary/80 text-white py-4 px-10 text-lg hover:bg-primary shadow-accent transition-all">
//           View All Services
//         </button>
//       </Link>
//     </div>
//   </div>
// );

// export default ServicesOverview;
export {};
