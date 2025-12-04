'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const handleBookMeeting = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (pathname !== '/contact') {
      window.location.href = '/contact#contact-form';
      return;
    }

    e.preventDefault();
    const section = document.getElementById('contact-form');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md shadow-soft border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-medium group-hover:shadow-accent transition-all duration-300">
              <Image src="/assets/npk-logo.jpg" alt="NPK Logo" width={48} height={48} className="object-cover" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-xl lg:text-2xl text-blue-900 tracking-tight group-hover:text-primary transition-colors duration-300">
                NPK Business Solutions
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 font-display">
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
            <Button className="shadow-accent hover:shadow-hover transition-all duration-300" onClick={handleBookMeeting}>
              Book a Meeting
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
