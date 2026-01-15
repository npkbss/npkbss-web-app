'use client';

import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import { Button } from '@/components/ui/button';
import { benefits, faqs, featuredServices, finalCta, heroData, processSteps, serviceCategories } from '@/data/home';
import { processIcons } from '@/utils/icons';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 xl:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">{heroData.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight drop-shadow-md text-gray-800 ">
                Simplifying{' '}
                <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  finance and operations
                </span>{' '}
                with smart platforms & automation.
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">{heroData.description}</p>
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span className="text-sm">Zoho Authorized Partner</span>
                <Star className="h-4 w-4 text-yellow-300" />
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href={heroData.primaryCta.href}>
                  <Button size="lg" className="shadow-accent group hover:shadow-hover cursor-pointer">
                    {heroData.primaryCta.label}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href={heroData.secondaryCta.href}>
                  <Button size="lg" variant="outline" className="cursor-pointer">
                    {heroData.secondaryCta.label}
                  </Button>
                </Link>
              </div>

              {/* Logo strip */}
              <div className="flex flex-wrap gap-6 items-center pt-6">
                {heroData.techStackLogos.map(item => (
                  <div key={item.name} className="flex items-center justify-center opacity-80 hover:opacity-100 transition">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={70}
                      height={40}
                      className="object-contain grayscale hover:grayscale-0 transition"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:w-full">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image src={heroData.image.src} alt={heroData.image.alt} priority fill className="object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-blue-900 mt-4 mb-6">
              End-to-end services designed for growing businesses
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From platforms to automation, accounting to analytics — everything your operations need in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {serviceCategories.map(category => (
              <div
                key={category.id}
                className="group bg-background rounded-2xl p-6 shadow-soft hover:shadow-accent border border-border transition-all duration-300 hover:-translate-y-2"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{category.subtitle}</span>

                <h3 className="text-xl font-bold text-foreground mt-3 mb-3">{category.title}</h3>

                <p className="text-muted-foreground mb-4 text-sm">{category.description}</p>

                <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                  {category.bullets.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>

                <Link href={category.link} className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all">
                  Explore
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Featured Solutions</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-blue-900 mt-4 mb-6 drop-shadow-md">
              Our most in-demand solutions
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Practical solutions designed to streamline finance, operations, analytics and automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <div
                key={service.id}
                className={`group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-accent border border-border transition-all duration-300 hover:-translate-y-2
            ${service.highlight ? 'md:col-span-2 lg:col-span-2' : ''}
          `}
              >
                {/* HIGHLIGHT CARDS */}
                {service.highlight ? (
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="p-8 flex flex-col justify-center bg-gray-200">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">{service.category}</span>

                      <h3 className="text-2xl font-bold text-foreground mt-3 mb-3">{service.title}</h3>

                      <p className="text-muted-foreground mb-6">{service.description}</p>

                      <Link href={service.link} className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>

                    <div className="relative bg-white from-primary/10 to-secondary/10 overflow-hidden">
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>
                ) : (
                  /* NORMAL CARDS */
                  <>
                    <div className="relative aspect-video bg-white from-primary/10 to-secondary/10 overflow-hidden">
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    <div className="p-8 flex flex-col bg-gray-200">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">{service.category}</span>

                      <h3 className="text-xl font-bold text-foreground mt-3 mb-3">{service.title}</h3>

                      <p className="text-muted-foreground mb-4">{service.description}</p>

                      <Link
                        href={service.link}
                        className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all mt-auto"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="default" className="shadow-accent hover:shadow-hover cursor-pointer">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">How We Work</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 font-sans text-blue-900">
              Our process for delivering impact
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A structured, transparent workflow that ensures smooth implementation, clean systems and real results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(step => {
              const IconComponent = processIcons[step.icon];

              return (
                <div
                  key={step.id}
                  className="group bg-background rounded-2xl p-8 shadow-soft hover:shadow-accent border border-border transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    {IconComponent && <IconComponent className="h-7 w-7 text-primary" />}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
            <div className="w-fit mx-auto flex items-center gap-3 mt-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm">Trusted Zoho Partner</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-blue-900 mt-4 mb-6">
              We help businesses run smarter, cleaner and faster
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real expertise across platforms, operations and automation — built for SMEs that want efficiency and clarity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {benefits.map(item => (
              <div
                key={item.id}
                className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-accent border border-border transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">{item.tag}</span>

                  <h3 className="text-2xl font-bold text-foreground mt-3 mb-3">{item.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Block */}
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Success Stories</span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 font-sans">
                Real results from real businesses
              </h2>

              <p className="text-lg text-muted-foreground">How SMEs improved efficiency, reporting and operations with our solutions.</p>
            </div>

            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative rounded-3xl overflow-hidden text-center shadow-accent h-[50vh] md:h-[60vh] max-h-[500px]">
            {/* Background Image */}
            <Image src={finalCta.background} alt={finalCta.title} fill className="object-cover object-center brightness-50" priority />

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow font-sans">{finalCta.title}</h2>

              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">{finalCta.description}</p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link href={finalCta.primaryCta.href}>
                  <Button
                    size="lg"
                    variant="default"
                    className="bg-primary text-white shadow-accent hover:shadow-hover hover:bg-primary/90"
                  >
                    {finalCta.primaryCta.label}
                  </Button>
                </Link>

                <Link href={finalCta.secondaryCta.href}>
                  <Button size="lg" variant="outline" className="bg-white/90 text-primary border-white hover:bg-white">
                    {finalCta.secondaryCta.label}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQs</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-sans text-blue-900 mt-4 mb-6">
              Frequently asked questions
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything SMEs typically ask before getting started with finance, ERP or automation projects.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            {faqs.map(item => (
              <div key={item.id} className="space-y-3">
                <h3 className="text-lg font-bold text-foreground">{item.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          {/* FAQ CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h3>

            <p className="text-muted-foreground mb-8">Our team can guide you based on your tools, workflows and business needs.</p>

            <Link href="/contact">
              <Button variant="outline" size="lg" className="hover:shadow-hover shadow-accent cursor-pointer">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
