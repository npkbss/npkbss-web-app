// 'use client';

import { Link, Linkedin, Mail, MailIcon, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Mail, Phone, MapPin, Linkedin, MailIcon, ArrowRight } from 'lucide-react';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
//       {/* Decorative gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>

//       <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
//           {/* Brand */}
//           <div className="space-y-6 lg:col-span-1">
//             <Link href="/" className="flex items-center space-x-3 group">
//               <div className="w-12 h-12 rounded-xl overflow-hidden shadow-medium group-hover:shadow-accent transition-all duration-300">
//                 <Image src="/assets/npk-logo.jpg" alt="NPK Logo" width={48} height={48} className="object-cover" />
//               </div>
//               <h2 className="font-bold text-xl text-white">NPK Business Solutions</h2>
//             </Link>
//             <p className="text-sm text-slate-300 leading-relaxed">
//               {/* Simplifying finance and operations for SMEs through automation, clean accounting, and intelligent dashboards. */}
//               Driving sustainable growth through digital transformation for businesses of all sizes. We bridge the gap between technology
//               and operations.
//             </p>
//             <div className="flex space-x-3">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
//                 onClick={() => window.open('https://www.linkedin.com/company/npkbss/', '_blank')}
//               >
//                 <Linkedin className="h-5 w-5" />
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
//                 asChild
//               >
//                 <a href="mailto:npk@npkbss.in">
//                   <MailIcon className="h-5 w-5" />
//                 </a>
//               </Button>
//             </div>
//           </div>

//           {/* Services */}
//           <div className="space-y-6">
//             <h3 className="text-base font-bold mb-6 text-blue-400 uppercase tracking-wider">Services</h3>
//             <nav className="flex flex-col space-y-3">
//               {[
//                 // 'Zoho',
//                 // 'Tally Prime Implementation',
//                 // 'Power BI Services',
//                 // 'Netsuite',
//                 // 'Salesforce',
//                 // 'Financial & Non-Financial MIS Services',
//                 // 'Accounting Services',
//                 'Platform Solutions',
//                 'Business Operations',
//                 'Development & Integration',
//                 'Automation & Workflow',
//                 'Training & Empowerment',
//               ].map(service => (
//                 <Link
//                   key={service}
//                   href="/services"
//                   className="group text-sm text-slate-300 hover:text-white transition-all duration-200 flex items-center"
//                 >
//                   <span className="group-hover:translate-x-1 transition-transform duration-200">{service}</span>
//                   <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-200" />
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Products */}
//           <div className="space-y-6">
//             <h4 className="font-semibold text-lg text-white">Products</h4>
//             <nav className="flex flex-col space-y-3">
//               {[
//                 // 'Zoho One',
//                 // 'Tally Add-ins',
//                 // 'Excel Add-ins',
//                 // 'Power BI Templates',
//                 // 'Custom Applications',
//                 'TallyPrime Add-ins',
//                 'Zoho Integrations',
//                 'Power BI Dashboards',
//                 'Custom Applications',
//                 'Excel Automation',
//               ].map(product => (
//                 <Link
//                   key={product}
//                   href="/products"
//                   className="group text-sm text-slate-300 hover:text-white transition-all duration-200 flex items-center"
//                 >
//                   <span className="group-hover:translate-x-1 transition-transform duration-200">{product}</span>
//                   <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-200" />
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Contact */}
//           <div className="space-y-6">
//             <h4 className="font-semibold text-lg text-white">Contact</h4>
//             <div className="space-y-4">
//               <a
//                 href="tel:+918147707125"
//                 className="flex items-center space-x-3 group bg-white/10 text-sm text-slate-300 hover:text-white transition-all duration-200"
//               >
//                 <div className="w-10 h-10  bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-200">
//                   <Phone className="h-4 w-4" />
//                 </div>
//                 <span>+91 8147707125</span>
//               </a>
//               <a
//                 href="mailto:npk@npkbss.in"
//                 className="flex items-center space-x-3 group text-sm text-slate-300 bg-white/10 hover:text-white transition-all duration-200"
//               >
//                 <div className="w-10 h-10 bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-200">
//                   <Mail className="h-4 w-4" />
//                 </div>
//                 <span>npk@npkbss.in</span>
//               </a>
//               <div
//                 className="flex items-start space-x-3 text-sm text-slate-300
//                 bg-white/10 p-2"
//               >
//                 <div className="w-10 h-10 p-2 bg-white/5 flex items-center justify-center">
//                   <MapPin className="h-4 w-4" />
//                 </div>
//                 <div>
//                   <p>1st Floor, 379/10, 3rdB Main, 27th Cross, Raghavendra Layout, Hulimavu, BG Road, Bangalore-560076</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/10 mt-12 lg:mt-16 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-sm text-slate-400">© 2025 NPK Business Solutions. All rights reserved.</p>
//             <div className="flex flex-wrap justify-center gap-6 text-sm">
//               <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-all duration-200">
//                 Privacy Policy
//               </Link>
//               <Link href="/terms-of-service" className="text-slate-400 hover:text-white transition-all duration-200">
//                 Terms of Service
//               </Link>
//               <Link href="/cookies" className="text-slate-400 hover:text-white transition-all duration-200">
//                 Cookie Settings
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative bottom gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
//     </footer>
//   );
// };

// export default Footer;

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center mb-6 space-x-2">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-medium group-hover:shadow-accent transition-all duration-300">
              <Image src="/assets/npk-logo.jpg" alt="NPK Logo" width={48} height={48} className="object-cover" />
            </div>
            <span className="text-lg font-bold">NPK Business Solutions</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Driving sustainable growth through digital transformation for businesses of all sizes. We bridge the gap between technology and
            operations.
          </p>
          <div className="flex space-x-4">
            {/* Social placeholders */}
            {/* {[1, 2, 3].map(i => (
              <div
                key={i}
                className="h-8 w-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
              >
                <div className="h-4 w-4 bg-slate-400 rounded-sm"></div>
              </div>
            ))} */}
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                onClick={() => window.open('https://www.linkedin.com/company/npkbss/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                <a href="mailto:npk@npkbss.in">
                  <MailIcon className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold mb-6 text-blue-400 uppercase tracking-wider text-xs">Services</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {[
              'Platform Solutions',
              'Business Operations',
              'Development & Integration',
              'Automation & Workflow',
              'Training & Empowerment',
            ].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-white hover:pl-1 transition-all duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold mb-6 text-blue-400 uppercase tracking-wider text-xs">Products</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {['Zoho Integrations', 'TallyPrime Add-ins', 'Power BI Dashboards', 'Custom Applications', 'Excel Automation'].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-white hover:pl-1 transition-all duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold mb-6 text-blue-400 uppercase tracking-wider text-xs">Contact Us</h3>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-start">
              <MapPin size={16} className="mr-3 mt-1 text-blue-500 flex-shrink-0" />
              <span>
                1st Floor, 379/10, 3rd B Main,
                <br />
                27th Cross, Raghavendra Layout,
                <br />
                Hulimavu, BG Road, Bangalore, Karnataka 560091
              </span>
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-3 text-blue-500 flex-shrink-0" />
              <a href="mailto:info@npkbusiness.com" className="hover:text-white">
                support@npkbss.in
              </a>
            </li>
            <li className="flex items-center">
              <Phone size={16} className="mr-3 text-blue-500 flex-shrink-0" />
              <a href="tel:+918041234567" className="hover:text-white">
                +91 81477 07125
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} NPK Business Solutions. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
