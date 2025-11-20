'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, ChevronDown, Sparkles, Star } from 'lucide-react';
import {
  servicesData,
  categories,
  heroStats,
  processSteps,
  technologies,
  industries,
  whyChooseUs,
  faq,
} from '@/data/servicesData';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrollY, setScrollY] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredServices = activeCategory === 'all' ? servicesData : servicesData.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO - Split Screen Design with Floating Elements */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-40 blur-xl" />
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-40 blur-2xl" />
        <div className="absolute bottom-20 left-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 opacity-40 blur-xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-semibold text-gray-700">Comprehensive Business Solutions</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Business Growth
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                From analytics and automation to ERP and consulting, we provide comprehensive technology solutions tailored for success
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 hover:bg-gray-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Talk to Expert
                </Button>
              </div>
            </div>

            {/* Right: Floating Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {heroStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-md`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SERVICES - Asymmetric Bento Grid Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 mb-4">
              <Star className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-700">Popular Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Services That Drive Results</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Most requested solutions delivering immediate business value</p>
          </div>

          {/* Bento Grid - Asymmetric Layout */}
          <div className="grid md:grid-cols-12 gap-6">
            {/* Large Card - Spans 2 rows, 7 columns */}
            <div className="md:col-span-7 md:row-span-2 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-orange-100 shadow-lg">
              {(() => {
                const service = servicesData[0];
                const IconComponent = service.icon;
                return (
                  <>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center mb-6 shadow-xl`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-700 mb-6 text-lg">{service.fullDesc}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-r ${service.iconGradient}`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="bg-white text-gray-900 hover:bg-gray-50 shadow-md">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </>
                );
              })()}
            </div>

            {/* Medium Cards - Stack on right */}
            {servicesData.slice(1, 3).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="md:col-span-5 bg-white rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center mb-4 shadow-md`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.shortDesc}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.iconGradient}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                    Explore <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ALL SERVICES - Tab-Based Card Carousel (Like About Locations Roadmap) */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Service Portfolio</h2>
            <p className="text-gray-600">Browse by category</p>
          </div>

          {/* Horizontal Scroll Categories */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide">
            {categories.map(cat => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <IconComponent className="inline h-4 w-4 mr-2" />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Horizontal Scrolling Services */}
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center mb-4 shadow-md`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.shortDesc}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                        <div className={`w-1 h-1 rounded-full mt-1.5 bg-gradient-to-r ${service.iconGradient}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full justify-between text-blue-600 hover:bg-blue-50">
                    View Details <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROCESS - Roadmap Style (Like About Page Locations) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Delivery Process</h2>
            <p className="text-gray-600">6-step methodology for success</p>
          </div>

          {/* SVG Roadmap Path */}
          <div className="relative py-12">
            <svg className="w-full h-64 absolute inset-0" viewBox="0 0 1200 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'rgb(96, 165, 250)' }} />
                  <stop offset="50%" style={{ stopColor: 'rgb(168, 85, 247)' }} />
                  <stop offset="100%" style={{ stopColor: 'rgb(236, 72, 153)' }} />
                </linearGradient>
              </defs>
              <path
                d="M 50 150 Q 200 180 300 130 T 500 120 T 700 100 T 900 90 T 1150 80"
                stroke="url(#processGradient)"
                strokeWidth="3"
                fill="none"
              />
              {[120, 280, 440, 600, 760, 920].map((x, i) => (
                <circle key={i} cx={x} cy={150 - i * 12} r="6" fill="rgb(96, 165, 250)" />
              ))}
            </svg>

            {/* Process Cards Along Path */}
            <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-12">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                const marginTop = index * 20;
                return (
                  <div key={index} className="text-center" style={{ marginTop: `${marginTop}px` }}>
                    <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${step.iconGradient} flex items-center justify-center mb-3 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${step.gradient} text-xs font-bold text-gray-700 mb-2`}>
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-600">{step.description.substring(0, 60)}...</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGIES - Circular/Orbital Layout */}
      <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-gray-600">Tools we master</p>
          </div>

          {/* Circular Layout */}
          <div className="relative h-[500px] max-w-4xl mx-auto">
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl z-10">
              <span className="text-white font-bold text-center text-sm">12+ Technologies</span>
            </div>

            {/* Orbiting Tech Icons */}
            {technologies.map((tech, index) => {
              const angle = (index * 360) / technologies.length;
              const radius = 200;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-20 h-20 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center border border-gray-100"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">📊</div>
                    {hoveredIndex === index && <div className="text-xs font-semibold text-gray-900">{tech.name}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES - Magazine/Editorial Grid Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600">Specialized solutions across sectors</p>
          </div>

          {/* Magazine Grid - Varied Sizes */}
          <div className="grid grid-cols-12 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              const spans = [
                'col-span-12 md:col-span-7',
                'col-span-12 md:col-span-5',
                'col-span-12 md:col-span-5',
                'col-span-12 md:col-span-7',
                'col-span-12 md:col-span-6',
                'col-span-12 md:col-span-6',
              ];

              return (
                <div key={index} className={`${spans[index]} group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-90`} />
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div>
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.iconGradient} flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="text-gray-700 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US - Split Content Layout */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Title */}
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose NPK Business Solutions</h2>
              <p className="text-xl text-gray-600 mb-8">Your trusted partner for transformation</p>
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right: Stacked Reasons */}
            <div className="space-y-4">
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div key={index} className={`bg-gradient-to-r ${reason.gradient} rounded-2xl p-6 shadow-md hover:shadow-lg transition-all`}>
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${reason.iconGradient} flex items-center justify-center shadow-md`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{reason.title}</h3>
                        <p className="text-sm text-gray-700">{reason.description}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${reason.iconGradient} bg-clip-text text-transparent`}>{reason.stat}</div>
                        <div className="text-xs text-gray-600">{reason.statLabel}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ - Accordion (Simple & Clean) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know</p>
          </div>

          <div className="space-y-3">
            {faq.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA - Full Width Gradient */}
      <section className="py-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-10">Let&apos;s discuss your project and find the perfect solution</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl px-8">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
