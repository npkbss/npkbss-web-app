'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { faqData, productData, Product } from '@/data/products';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  HelpCircle,
  Layers,
  LayoutGrid,
  MessageCircle,
  Printer,
  Settings,
  Shield,
  Star,
  TrendingUp,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';

const getCategoryIcon = (categoryName: string) => {
  switch (categoryName) {
    case 'Premium Modules':
      return <Star className="w-5 h-5 text-yellow-500" />;
    case 'Standard Enhancements':
      return <Layers className="w-5 h-5 text-green-500" />;
    case 'Approvals & Workflows':
      return <CheckCircle2 className="w-5 h-5 text-indigo-500" />;
    case 'Automation & Utilities':
      return <Zap className="w-5 h-5 text-red-500" />;
    case 'Data Importing & Bulk Update':
      return <Database className="w-5 h-5 text-cyan-500" />;
    case 'Custom Printing & Info Tools':
      return <Printer className="w-5 h-5 text-amber-500" />;
    case 'Data & Control Tools':
      return <Settings className="w-5 h-5 text-gray-500" />;
    case 'API & Integrations':
      return <Cpu className="w-5 h-5 text-purple-500" />;
    case 'Advanced Reports':
      return <TrendingUp className="w-5 h-5 text-teal-500" />;
    default:
      return <LayoutGrid className="w-5 h-5 text-blue-500" />;
  }
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const icon = getCategoryIcon(product.category);

  const getPriceBadge = (price?: string, popular?: boolean) => {
    let color = 'bg-gray-100 text-gray-700 border-gray-300';
    if (price === 'Premium') color = 'bg-yellow-500/20 text-yellow-700 border-yellow-500';
    if (price === 'Advanced') color = 'bg-red-500/20 text-red-700 border-red-500';

    return (
      <div className="flex items-center space-x-2">
        <Badge className={`px-3 py-1 text-xs font-semibold border ${color}`}>{price || 'Standard'}</Badge>
        {popular && <Badge className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white animate-pulse">🔥 Popular</Badge>}
      </div>
    );
  };

  return (
    <Card className="flex flex-col h-full bg-white hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500">
      <CardHeader className="pb-3 pt-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/10 rounded-full">{icon}</div>
            <CardTitle className="text-xl font-bold text-gray-900 leading-snug">{product.name}</CardTitle>
          </div>
          {getPriceBadge(product.price, product.popular)}
        </div>
        <CardDescription className="text-sm text-gray-600 mt-2 line-clamp-3 min-h-[45px]">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="grow pt-2 pb-4 border-t border-gray-100">
        <h4 className="text-sm font-semibold mb-2 text-gray-700">Key Benefits:</h4>
        <ul className="space-y-1">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-1 mr-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
          {product.features.length > 3 && (
            <li className="text-xs text-gray-500 mt-1.5 italic">...and {product.features.length - 3} more.</li>
          )}
        </ul>
      </CardContent>
      <CardFooter className="pt-4 border-t border-gray-100">
        <Link href="/contact" passHref>
          <Button asChild variant="default" className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-colors">
            <div>
              Request Demo <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Premium Modules');
  const activeProducts = productData.find(category => category.name === activeCategory)?.products || [];

  return (
    <div className="products-page bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/products/product-hero.png" alt="Background" className="w-full h-full object-cover opacity-40" fill />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/30 to-slate-900/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-500/50 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              Trusted by 500+ Businesses
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight font-display">
              Enhance <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">TallyPrime</span> with{' '}
              {/* <br /> */}
              Powerful Add-ins
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl font-sans">
              Streamline your accounting, inventory, compliance, and automation with our enterprise-grade add-ins. Designed to make your
              business operations seamless.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:shadow-hover hover:shadow-accent text-white border-none h-12 px-8 text-base shadow-lg cursor-pointer"
                onClick={() => document.getElementById('product-list-container')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Add-ins
              </Button>
              <Link href="/contact" className="w-full md:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-base border-slate-600 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white cursor-pointer"
                >
                  Request Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust/Stats Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Active Users', value: '900+' },
              { label: 'Add-ins Deployed', value: '300+' },
              { label: 'Client Retention', value: '98%' },
              { label: 'Support Rating', value: '4.9/5' },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="product-list-container">
        {/* Category Tabs */}
        <div className="sticky top-20 z-40 bg-white shadow-md border-b border-gray-200">
          {/* <div className="pt-20 lg:pt-0"></div> */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-3 py-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 md:hidden">Filter by Category</h2>
            <div className="flex md:grid overflow-x-auto md:overflow-visible grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pb-2">
              {productData.map(category => (
                <motion.button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`shrink-0 md:shrink px-3 py-2 md:p-2 rounded-xl transition-all text-sm font-semibold border-2 flex items-center min-w-[22px] md:min-w-0 
                    ${
                      activeCategory === category.name
                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                        : 'bg-white text-gray-800 border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center">
                    <span
                      className={`p-1 md:p-1.5 rounded-full mr-2 ${activeCategory === category.name ? 'bg-white text-blue-600' : 'bg-blue-50/70'}`}
                    >
                      {getCategoryIcon(category.name)}
                    </span>
                    <span className="text-sm font-medium leading-tight text-left">{category.name.replace(' & ', ' / ')}</span>
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">{activeCategory}</h3>
            <p className="text-lg text-gray-600">
              Explore our selection of {activeCategory} add-ins designed for specific enterprise needs.
            </p>
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </section>
      </div>

      <hr className="border-gray-200" />

      {/* Feature Highlight Section */}
      <section className="py-20 bg-slate-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                Seamless Integration
              </div>
              <h2 className="text-3xl md:text-4xl hidden md:block font-bold mb-6 leading-tight font-sans">
                Connect TallyPrime to the <br />
                <span className="text-blue-400">Modern </span>Web Ecosystem
              </h2>
              <h2 className="text-3xl md:hidden font-bold mb-6 leading-tight font-sans">
                Connect TallyPrime to the
                <span className="text-blue-400"> Modern </span>Web Ecosystem
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed font-sans">
                Stop working in silos. Our advanced connectors bridge the gap between your accounting software and your favorite
                productivity tools.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'WhatsApp Automation', desc: 'Send invoices instantly without saving numbers.' },
                  { title: 'Cloud Backup', desc: 'Secure off-site backups to Google Drive & OneDrive.' },
                  { title: 'Power BI Analytics', desc: 'Visualize your financial health with interactive dashboards.' },
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="shrink-0 h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 mr-4">
                      <div className="h-6 w-6 bg-blue-500 rounded-lg opacity-80"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl bg-slate-800 border border-slate-700 p-2 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-blue-500/5 rounded-2xl **backdrop-blur-sm**"></div>

                <div className="rounded-xl bg-slate-900 overflow-hidden border border-slate-800">
                  <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>

                  <div className="relative w-full aspect-video">
                    <Image
                      src="/assets/products/tally-screen-highlight.png"
                      alt="Tally Integration Mockup Dashboard"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-2 md:-left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Security Status</div>
                    <div className="text-slate-900 font-bold">Enterprise Grade</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 font-sans">What Our Clients Say</h2>
          <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-3xl mx-auto overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-blue-500 to-indigo-600"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-50 rounded-full opacity-50"></div>

            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={20} className="text-yellow-400 mx-0.5" fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-slate-800 mb-8 leading-relaxed">
                "NPK’s TallyPrime add-ins saved us <span className="text-blue-600 font-bold">10+ hours weekly</span> on compliance tracking.
                The automation is seamless and the support is incredible."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-slate-200 border-2 border-white shadow-md overflow-hidden mr-4">
                  <Image
                    src="/assets/testimonials/rajesh-sharma.avif"
                    alt="Rajesh Sharma"
                    className="h-12 w-12 object-cover"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="text-left">
                  <cite className="block font-bold text-slate-900 not-italic text-lg">Rajesh Sharma</cite>
                  <span className="text-slate-500 text-sm">Finance Manager, Midwest Manufacturing Co.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[360px] sm:min-h-[420px] md:min-h-[480px]">
            <Image
              src="/assets/about/about-cta.avif"
              alt="Transform your Tally workflow with our advanced modules"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />

            <div className="absolute inset-0 bg-linear-to-r from-gray-900/90 via-gray-900/80 to-gray-900/40 md:via-gray-900/70" />

            <div className="relative z-10 flex h-full px-4 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-auto">
              <div className="my-auto max-w-md sm:max-w-2xl lg:max-w-3xl">
                <h2 className="text-[1.5rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-5 font-sans">
                  Ready to Supercharge Your TallyPrime?
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 max-w-xl font-sans">
                  Schedule a free 45‑minute demo of the add-in modules that solve your specific automation, control, or reporting
                  challenges.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-xl font-sans ">
                  Stop manual workarounds. Start operating at peak efficiency with enterprise-grade Tally enhancements.
                </p>
                <div className="flex flex-col md:flex-row flex-wrap gap-4">
                  <Link href="/contact" className="w-full md:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full md:w-auto bg-white text-blue-700 hover:bg-white/90 shadow-xl group"
                    >
                      Schedule Free Demo
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <a
                    href="https://wa.me/918147707125"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white border border-white rounded-lg text-base font-medium hover:bg-white hover:text-blue-700 transition shadow-lg w-full md:w-auto"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Quick Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      <section className="py-16 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-sans">Frequently Asked Questions</h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto font-sans">
              Clear answers to help you understand our add-in licensing, installation, compatibility, and support model.
            </p>
          </div>

          {/* FAQs */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={`faq-${index}`} value={`faq-${index}`} className="border border-slate-200 bg-white rounded-xl shadow-sm">
                <AccordionTrigger className="px-6 py-5 text-left text-lg font-medium text-slate-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-5 text-slate-600 leading-relaxed">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-slate-600 mb-4">Didn't find what you were looking for?</p>
            <Link
              href="/contact"
              className="
                        inline-flex items-center px-6 py-3 rounded-full
                        bg-blue-600 text-white hover:bg-blue-700
                        shadow-lg shadow-blue-600/20 transition
                        text-base font-medium
                    "
            >
              Talk to our Tally experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
