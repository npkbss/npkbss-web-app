// 'use client';

import { Facebook, Linkedin, Mail, MailIcon, MapPin, Phone, Sparkles, Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-white pt-16 pb-8 font-display">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center mb-6 space-x-2">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-medium group-hover:shadow-accent transition-all duration-300">
              <Image src="/assets/npk-logo.jpg" alt="NPK Logo" width={48} height={48} className="object-cover" />
            </div>
            <span className="text-lg font-bold">NPK Business Solutions</span>
          </div>
           <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span className="text-sm">Zoho Authorized Partner</span>
                <Star className="h-4 w-4 text-yellow-300" />
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
                onClick={() => window.open('https://www.facebook.com/profile.php?id=61580820672997', '_blank')}
              >
                <Facebook className="h-5 w-5" />
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
          <h3 className="font-bold mb-6 text-blue-400 uppercase tracking-wider text-xs">Services</h3>
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
          <h3 className="font-bold mb-6 text-blue-400 uppercase tracking-wider text-xs">Products</h3>
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
          <h3 className="font-bold mb-6 text-blue-400 uppercase tracking-wider text-xs">Contact Us</h3>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-start">
              <MapPin size={16} className="mr-3 mt-1 text-blue-500 shrink-0" />
              <span>
                001, #62, Comfort Annapoorna,
                <br />
                12th Main Road, 3rd Block East,
                <br />
                Jayanagar, Bangalore – 560011
              </span>
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-3 text-blue-500 shrink-0" />
              <a href="mailto:info@npkbusiness.com" className="hover:text-white">
                support@npkbss.in
              </a>
            </li>
            <li className="flex items-center">
              <Phone size={16} className="mr-3 text-blue-500 shrink-0" />
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
