import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-7xl min-h-screen text-center px-4 py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">Contact Us</h1>

      <div className="relative w-full max-w-xl mb-10">
        <Image
          src="/assets/page-under-construction.png"
          alt="Website Under Construction"
          width={600}
          height={400}
          className="object-contain mix-blend-darken mx-auto"
          priority
        />
      </div>

      <p className="text-lg text-muted-foreground max-w-2xl mb-8">
        Get in touch with us to learn more about our services and how we can help your business grow.
      </p>
      <Link href="/services">
        <Button size="lg" variant="default" className="shadow-accent hover:shadow-hover cursor-pointer transition-all">
          Explore Services
        </Button>
      </Link>
    </div>
  );
};

export default ContactPage;
