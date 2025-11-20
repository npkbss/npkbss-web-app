'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, ChevronDown, Play } from 'lucide-react';
import { servicesData, categories, heroStats, processSteps, technologies, industries, whyChooseUs, faq } from '@/data/servicesData';

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrollY, setScrollY] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredServices = activeCategory === 'all' ? servicesData : servicesData.filter(s => s.category === activeCategory);

  const featuredServices = servicesData.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Modern Hero Section with Animated Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '0s' }}
          />
          <div
            className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '4s' }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 shadow-sm animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Business Solutions
              </span>
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                with Expert Solutions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              From analytics and automation to ERP and consulting, we provide comprehensive technology solutions tailored to drive your
              success
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all group px-8 py-6 text-base"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 px-8 py-6 text-base group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Schedule Call
              </Button>
            </div>
          </div>

          {/* Stats Cards - Modern Floating Design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {heroStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="relative group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Featured Services - Creative Card Layout */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-100 mb-4">
              <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                ⭐ FEATURED
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Most Popular Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our most requested solutions that deliver immediate business value</p>
          </div>

          {/* Featured Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Gradient Top Bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${service.iconGradient}`} />

                  {/* Card Content */}
                  <div className="p-8">
                    {/* Icon */}
                    <div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.iconGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}
                      />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.shortDesc}</p>

                    {/* Features Preview */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.iconGradient}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href={service.slug}>
                      <Button
                        variant="ghost"
                        className="w-full group/btn bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 border border-gray-200"
                      >
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                          Learn More
                        </span>
                        <ArrowRight className="ml-2 h-4 w-4 text-blue-600 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Services - Category Filter & Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-4">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                📦 ALL SERVICES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Complete Service Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Browse our comprehensive range of technology solutions</p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => {
              const IconComponent = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-md hover:scale-105'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {cat.name}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Bar */}
                  <div className={`h-1 bg-gradient-to-r ${service.iconGradient}`} />

                  <div className="p-6">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{service.shortDesc}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className={`mt-1.5 w-1 h-1 rounded-full bg-gradient-to-r ${service.iconGradient} flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Timeline & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-xs text-gray-500">
                        <span className="font-semibold text-gray-700">{service.timeline}</span> timeline
                      </div>
                      <Link href={service.slug}>
                        <Button variant="ghost" size="sm" className="group/btn text-blue-600 hover:bg-blue-50">
                          Details
                          <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline - Modern Vertical Flow */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 mb-4">
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                🚀 OUR PROCESS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">How We Deliver Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven 6-step methodology ensures successful project delivery every time
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Step Number Background */}
                  <div className={`absolute top-6 right-6 text-7xl font-bold bg-gradient-to-br ${step.gradient} opacity-5`}>
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${step.iconGradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${step.gradient} text-xs font-bold text-gray-700 mb-3`}
                    >
                      STEP {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies - Bento Grid Style */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 mb-4">
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                ⚡ TECHNOLOGY STACK
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Tools & Technologies We Master
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Industry-leading platforms we specialize in</p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries - Creative Cards */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 mb-4">
              <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                🏢 INDUSTRIES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Serving Diverse Industries</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Specialized solutions tailored for your industry&apos;s unique challenges</p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`h-1 bg-gradient-to-r ${industry.iconGradient}`} />
                  <div className="p-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.iconGradient} flex items-center justify-center mb-4 shadow-md`}
                    >
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                    <ul className="space-y-2">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.iconGradient}`} />
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

      {/* Why Choose Us - Feature Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 mb-4">
              <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                ✨ WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Why NPK Business Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for business transformation and technology excellence
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${reason.gradient} rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reason.iconGradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{reason.description}</p>

                  {/* Stats */}
                  <div className="flex items-end gap-2 pt-4 border-t border-gray-200">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${reason.iconGradient} bg-clip-text text-transparent`}>
                      {reason.stat}
                    </div>
                    <div className="text-sm text-gray-600 pb-1 font-medium">{reason.statLabel}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ - Accordion Style */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-4">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ❓ FAQs
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Frequently Asked Questions</span>
            </h2>
            <p className="text-lg text-gray-600">Everything you need to know about our services</p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
                >
                  <span className="font-semibold text-gray-900 pr-8 group-hover:text-blue-600 transition-colors">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Gradient Design */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />

            {/* Animated Blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: '2s' }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-8 py-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
                Let&apos;s discuss how our solutions can help you achieve your business goals and drive growth
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl px-8 py-6 text-base group">
                  <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Schedule Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
