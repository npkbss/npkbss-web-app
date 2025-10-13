'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Award, BarChart3, Brain, Calculator, ChevronLeft, ChevronRight, Target, Workflow, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const capabilities = [
    {
      icon: <Target className="h-8 w-8" />,
      category: 'Strategy',
      title: 'Digital transformation roadmap',
      description: 'Develop strategic plans aligned with your business objectives',
      link: '/services/strategy',
      image: { src: '/assets/home/strategy.jpg', alt: 'Strategy Image' },
    },
    {
      icon: <Zap className="h-8 w-8" />,
      category: 'Technology',
      title: 'Advanced tech solutions',
      description: 'Implement cutting-edge technologies to enhance operational efficiency',
      link: '/services/technology',
      image: { src: '/assets/home/technology.jpg', alt: 'Technology Image' },
    },
    {
      icon: <Brain className="h-8 w-8" />,
      category: 'Consulting',
      title: 'Expert guidance for complex business challenges',
      description: 'Provide tailored recommendations to drive organizational growth',
      link: '/services/consulting',
      image: { src: '/assets/home/consulting.jpg', alt: 'Consulting Image' },
    },
  ];

  const services = [
    {
      category: 'Analytics',
      title: 'Power BI Analytics',
      description: 'Transform your data into actionable insights with interactive dashboards',
      image: { src: '/assets/home/power-bi.avif', alt: 'Power BI Analytics Image' },
      link: '/services#power-bi',
    },
    {
      category: 'ERP & Finance',
      title: 'Tally Solutions',
      description: 'Streamline your accounting operations with Tally Prime implementation',
      link: '/services#tally',
      image: { src: '/assets/home/tally-prime.avif', alt: 'Tally Solutions Image' },
    },
    {
      category: 'Automation',
      title: 'Zoho Integration',
      description: 'Connect and automate your business with comprehensive Zoho ecosystem',
      link: '/services#zoho',
      image: { src: '/assets/home/zoho-one.avif', alt: 'Zoho Integration Image' },
    },
  ];

  const benefits = [
    {
      category: 'Expertise',
      title: 'Proven track record of success',
      description: 'Our team brings deep industry knowledge and technical expertise to every engagement',
      image: { src: '/assets/home/expertise.jpg', alt: 'Expertise Image' },
      buttons: [
        { text: 'Learn more', variant: 'outline' },
        { text: 'Explore', variant: 'link' },
      ],
    },
    {
      category: 'Innovation',
      title: 'Cutting-edge technology solutions',
      description: 'We continuously develop innovative approaches to solve complex business challenges',
      image: { src: '/assets/home/innovation.jpg', alt: 'Innovation Image' },
      buttons: [
        { text: 'Discover', variant: 'outline' },
        { text: 'Explore', variant: 'link' },
      ],
    },
  ];

  const testimonials = [
    {
      company: 'Webflow',
      logo: '/assets/webflow-logo.svg',
      quote: 'Their strategic insights transformed our entire digital infrastructure.',
      author: 'Sarah Johnson',
      position: 'CTO, Global Tech Solutions',
      image: { src: '/assets/home/sarah-johnson.jpg', alt: 'Sarah Johnson' },
    },
    {
      company: 'Microsoft',
      logo: '/assets/microsoft-logo.svg',
      quote: 'Outstanding service delivery and exceptional technical expertise throughout our project.',
      author: 'Michael Chen',
      position: 'VP of Operations, Enterprise Systems',
      image: { src: '/assets/home/michael-chen.webp', alt: 'Michael Chen' },
    },
    {
      company: 'Google',
      logo: '/assets/google-logo.svg',
      quote: "The team's innovative approach helped us achieve our transformation goals ahead of schedule.",
      author: 'Emma Williams',
      position: 'Director of IT, Innovation Labs',
      image: { src: '/assets/home/emma-williams.jpg', alt: 'Emma Williams' },
    },
  ];

  const imageSrc = '/assets/home/ready-to-transform.jpeg';
  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We provide comprehensive digital transformation, cloud migration, technology consulting, and strategic innovation services. Our solutions are tailored to meet unique organizational challenges.',
    },
    {
      question: 'How long does a typical engagement last?',
      answer:
        'Project duration varies based on complexity and organizational needs. Typically, engagements range from 3 to 12 months, with ongoing support options available.',
    },
    {
      question: 'What industries do you work with?',
      answer:
        'We serve multiple sectors including technology, finance, healthcare, manufacturing, and retail. Our flexible approach adapts to diverse industry requirements.',
    },
    {
      question: 'What is your pricing model?',
      answer:
        'We offer customized pricing based on project scope, complexity, and client requirements. Our transparent approach ensures clear value and return on investment.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer:
        'Yes, we offer comprehensive post-implementation support, including training, maintenance, and continuous improvement strategies.',
    },
    {
      question: 'How do you ensure data security?',
      answer:
        'We implement rigorous security protocols, including encryption, access controls, and compliance with international data protection standards.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">Strategic Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Strategic consulting and technology solutions for modern businesses
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                We help organizations transform their operations through innovative technology and strategic insights. Our team delivers
                comprehensive solutions that drive growth and efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="shadow-accent group hover:shadow-hover">
                  Explore services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 shadow-accent">
                <Image src="/assets/home/home-hero.jpg" priority fill className="object-fill rounded-2xl" alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Innovate</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Core capabilities that drive business transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to meet complex organizational challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-background rounded-2xl p-8 shadow-soft hover:shadow-accent border border-border transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-6 overflow-hidden relative">
                  {capability.image ? (
                    <Image src={capability.image.src} alt={capability.image.alt} fill className="object-cover rounded-xl opacity-80" />
                  ) : (
                    <div className="text-primary group-hover:scale-110 transition-transform">{capability.icon}</div>
                  )}
                </div>

                <span className="text-sm font-semibold text-primary uppercase tracking-wider">{capability.category}</span>
                <h3 className="text-xl font-bold text-foreground mt-3 mb-3">{capability.title}</h3>
                <p className="text-muted-foreground mb-6">{capability.description}</p>
                <Link href={capability.link} className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all">
                  {capability.category === 'Strategy' ? 'Learn' : capability.category === 'Technology' ? 'Explore' : 'Discover'}
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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Comprehensive services for business excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored approaches to solve complex organizational challenges
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 items-stretch">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-accent border border-border transition-all duration-300 hover:-translate-y-2 ${
                  index === 0 ? 'md:col-span-2' : 'md:col-span-1'
                } flex flex-col`}
              >
                {index === 0 ? (
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="p-8 flex flex-col justify-center">
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">{service.category}</span>
                      <h3 className="text-2xl font-bold text-foreground mt-3 mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <Link href={service.link} className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>

                    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border-l border-1">
                      {service.image && (
                        <Image
                          src={service.image.src}
                          alt={service.image.alt}
                          fill
                          className="object-cover group-hover:scale-110 scale-105 transition-transform duration-500 ease-out opacity-80"
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 opacity-80 border-b border-1">
                      {service.image && (
                        <Image
                          src={service.image.src}
                          alt={service.image.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      )}
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">{service.category}</span>
                        <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                      </div>
                      <Link
                        href={service.link}
                        className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all mt-auto"
                      >
                        {index === 1 ? 'Explore' : 'Discover'}
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
              <Button size="lg" variant="outline" className="shadow-accent hover:shadow-hover">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Benefits</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">Why choose our strategic solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Proven approaches that deliver measurable business outcomes</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-accent border border-border transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden relative">
                  {benefit.image && (
                    <Image
                      src={benefit.image.src}
                      alt={benefit.image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
                    />
                  )}
                </div>
                <div className="p-8">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">{benefit.category}</span>
                  <h3 className="text-2xl font-bold text-foreground mt-3 mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-6">{benefit.description}</p>
                  <div className="flex gap-3">
                    {benefit.buttons.map((button, btnIndex) => (
                      <Button
                        key={btnIndex}
                        variant={button.variant === 'outline' ? 'outline' : 'ghost'}
                        className={button.variant === 'link' ? 'link shadow-accent ' : ''}
                      >
                        {button.text}
                        {button.variant === 'link' && <ArrowRight className="ml-1 h-4 w-4" />}
                      </Button>
                    ))}
                  </div>
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
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Success Stories</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">Client success stories</h2>
              <p className="text-lg text-muted-foreground">Real-world impact of our strategic solutions</p>
            </div>

            <div className="relative">
              <div className="bg-background rounded-2xl p-8 shadow-accent border border-border">
                <div className="mb-6">
                  <div className="text-2xl font-bold text-foreground mb-2">{testimonials[currentTestimonial].company}</div>
                </div>
                <blockquote className="text-lg text-foreground mb-6">&quot;{testimonials[currentTestimonial].quote}&quot;</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden relative">
                    <Image
                      src={testimonials[currentTestimonial].image.src}
                      alt={`${testimonials[currentTestimonial].image.alt} Logo`}
                      fill
                      className="object-cover rounded-full w-12 h-12"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[currentTestimonial].author}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].position}</div>
                  </div>
                </div>
                <Link href="#" className="inline-flex items-center text-primary font-medium mt-6 hover:gap-2 transition-all">
                  Read full case study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentTestimonial ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative rounded-3xl overflow-hidden text-center shadow-accent h-[50vh] md:h-[60vh]">
            {imageSrc ? (
              <>
                <Image src={imageSrc} alt="Hero background" fill className="object-cover object-center" priority />
                <div className="absolute inset-0 bg-black/40" />
              </>
            ) : (
              <div className="absolute inset-0 bg-black/70" />
            )}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to transform your business?</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how our strategic solutions can drive your organizational growth and innovation
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-medium">
                  Get started
                </Button>
                <Button size="lg" variant="default" className="border-white text-white hover:shadow-hover shadow-accent">
                  Schedule consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">FAQs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Common questions about our strategic consulting and technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-bold text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-8">Our team is ready to provide detailed information and personalized guidance</p>
            <Button variant="outline" className="hover:shadow-hover shadow-accent" size="lg">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
