'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = path => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md shadow-soft border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-medium group-hover:shadow-accent transition-all duration-300">
              <Image src="/assets/npk-logo.jpg" alt="NPK Logo" width={48} height={48} className="object-cover" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl lg:text-2xl text-foreground tracking-tight">
                <em>NPK Business Solutions</em>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Products', href: '/products' },
              { name: 'About', href: '/about' },
              { name: 'Gallery', href: '/gallery' },
            ].map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 font-medium text-foreground hover:text-primary transition-all duration-200
  after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300
  hover:after:scale-x-100
  ${isActive(item.href) ? 'after:scale-x-100 text-primary' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button asChild className="shadow-accent hover:shadow-hover transition-all duration-300">
              <Link href="/contact">Book a Meeting</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Products', href: '/products' },
                { name: 'About', href: '/about' },
                { name: 'Gallery', href: '/gallery' },
              ].map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-3 px-4 font-medium text-foreground hover:text-primary transition-all duration-200
  after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300
  hover:after:scale-x-100
  ${isActive(item.href) ? 'after:scale-x-100 text-primary' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Contact */}
              <div className="pt-3 mt-3 border-t border-border space-y-2">
                <Button className="w-full shadow-accent" asChild>
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Book a Meeting
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

// 'use client';

// import { Button } from '@/components/ui/button';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md shadow-soft border-b border-border">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <div className="flex items-center justify-between h-20">
//           <Link href="/" className="flex items-center space-x-3 group">
//             <div className="w-12 h-12 rounded-xl overflow-hidden shadow-medium group-hover:shadow-accent transition-all duration-300">
//               <Image src="/assets/npk-logo.jpg" alt="NPK Logo" width={48} height={48} className="object-cover" />
//             </div>
//             <div className="hidden sm:block">
//               <h1 className="font-bold text-xl lg:text-2xl text-foreground tracking-tight">
//                 <em>NPK Business Solutions</em>
//               </h1>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-1">
//             <Link
//               href="/"
//               className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 font-medium"
//             >
//               Home
//             </Link>
//              <Link
//               href="/services"
//               className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 font-medium"
//             >
//               Services
//             </Link>

//             {/* Services Dropdown */}
//             {/* <div className="relative group">
//               <button className="flex items-center px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 font-medium">
//                 Services
//                 <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
//               </button>
//               <div className="absolute top-full left-0 mt-2 w-64 bg-background shadow-accent rounded-xl border border-border py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
//                 {[
//                   { name: 'Power BI Services', href: '/services/power-bi' },
//                   { name: 'Tally Prime Implementation', href: '/services/tally-prime' },
//                   { name: 'Zoho Analytics', href: '/services/zoho-analytics' },
//                   { name: 'View All Services', href: '/services', highlight: true },
//                 ].map(service => (
//                   <Link
//                     key={service.name}
//                     href={service.href}
//                     className={`block px-4 py-2.5 text-sm rounded-lg mx-2 hover:bg-muted transition-all duration-200 ${
//                       service.highlight ? 'text-primary font-semibold bg-primary/5' : 'text-foreground hover:text-primary'
//                     }`}
//                   >
//                     {service.name}
//                   </Link>
//                 ))}
//               </div>
//             </div> */}

//             {/* Products */}
//             <Link
//               href="/products"
//               className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 font-medium"
//             >
//               Products
//             </Link>

//             {/* About */}
//             <Link
//               href="/about"
//               className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 font-medium"
//             >
//               About
//             </Link>

//             {/* Gallery */}
//             <Link
//               href="/gallery"
//               className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 font-medium"
//             >
//               Gallery
//             </Link>
//           </nav>

//           {/* Contact */}
//           <div className="hidden lg:flex items-center space-x-2">
//             <Button asChild className="shadow-accent hover:shadow-hover transition-all duration-300">
//               <Link href="/contact">Book a Meeting</Link>
//             </Button>
//           </div>

//           {/* Mobile Menu */}
//           <button
//             className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-all duration-200"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
//             <nav className="flex flex-col space-y-1">
//               {[
//                 { name: 'Home', href: '/' },
//                 { name: 'Services', href: '/services' },
//                 { name: 'Products', href: '/products' },
//                 { name: 'About', href: '/about' },
//                 { name: 'Gallery', href: '/gallery' },
//               ].map(item => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="py-3 px-4 rounded-lg text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               {/* Mobile Contact */}
//               <div className="pt-3 mt-3 border-t border-border space-y-2">
//                 <Button className="w-full shadow-accent" asChild>
//                   <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
//                     Book a Meeting
//                   </Link>
//                 </Button>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
