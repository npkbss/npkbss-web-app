'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Calculator, Zap, CheckCircle, Users, Clock, Star, TrendingUp, Database, FileText } from 'lucide-react';

const Home3 = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Power BI Services',
      description: 'Transform raw data into actionable insights with custom dashboards and automated reporting.',
      link: '/services/power-bi',
    },
    {
      icon: Calculator,
      title: 'Tally Prime Implementation',
      description: 'Complete setup and customization for streamlined accounting and inventory management.',
      link: '/services/tally-prime',
    },
    {
      icon: BarChart3,
      title: 'Zoho Analytics',
      description: "Comprehensive business intelligence solutions with Zoho's analytics platform.",
      link: '/services/zoho-analytics',
    },
    {
      icon: Zap,
      title: 'API Integrations',
      description: 'Connect your systems seamlessly with custom integrations and automated workflows.',
      link: '/services',
    },
    {
      icon: FileText,
      title: 'Accounting Services',
      description: 'Professional bookkeeping, financial reporting, and compliance management.',
      link: '/services',
    },
    {
      icon: Database,
      title: 'Inventory Audit',
      description: 'Comprehensive inventory tracking, auditing, and management implementations.',
      link: '/services',
    },
  ];

  const whyNpk = [
    {
      icon: Users,
      title: 'Experienced Consultants',
      description: 'Deep expertise across accounting, automation, and business intelligence.',
    },
    {
      icon: CheckCircle,
      title: 'Certified Partners',
      description: 'Official partnerships ensure best-practice implementations.',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Streamlined processes mean systems are live and productive faster.',
    },
    {
      icon: Star,
      title: 'Post-Live Support',
      description: 'Ongoing support ensures maximum return on investment.',
    },
  ];

  const testimonials = [
    {
      quote:
        'NPK Business Solutions transformed our chaotic spreadsheet-based reporting into automated dashboards. We now have real-time insights that actually help us make better decisions.',
      author: 'Sarah Chen',
      title: 'CFO, TechStart Industries',
      rating: 5,
    },
    {
      quote:
        'The Tally Prime implementation was seamless. Their team understood our complex requirements and delivered a solution that saves us 15 hours per week on accounting tasks.',
      author: 'Rajesh Kumar',
      title: 'Finance Manager, Global Exports Ltd',
      rating: 5,
    },
    {
      quote:
        'Outstanding service and expertise. The Zoho One implementation connected all our departments and improved our operational efficiency by 40%. Highly recommended!',
      author: 'Emily Rodriguez',
      title: 'Operations Director, Modern Manufacturing',
      rating: 5,
    },
  ];

  const products = [
    {
      badge: 'Popular',
      title: 'Zoho One Complete Suite',
      description: '45+ integrated business applications for complete digital transformation',
      features: [
        'CRM, Accounting & HR in one platform',
        'Project management & collaboration tools',
        'Business intelligence & analytics',
        'Custom implementation & training included',
      ],
      link: '/products',
      buttonText: 'Explore Zoho One',
      buttonVariant: 'solid',
    },
    {
      title: 'Power BI Templates',
      description: 'Pre-built dashboards for instant business intelligence insights',
      features: [
        'Financial performance dashboards',
        'Sales & marketing analytics',
        'Operational efficiency tracking',
        'Customization & support included',
      ],
      link: '/products',
      buttonText: 'View Templates',
      buttonVariant: 'outline',
    },
  ];

  // ------------------ Page JSX ------------------
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-95 bg-gradient-to-b from-primary via-primary/50 to-secondary"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Driving Sustainable Growth Through Digital Transformation</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            We implement accounting systems, build dashboards, and automate workflows so you can run your business — not your spreadsheets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="gradient" className="bg-primary" asChild>
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/40 bg-transparent hover:bg-white/10" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 subtle-gradient">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">Our Approach</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Tailored solutions to help your business run smoother, faster, and smarter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: CheckCircle,
                title: 'Implement',
                desc: 'Professional setup of accounting systems, dashboards, and business tools tailored to your needs.',
              },
              { icon: Zap, title: 'Integrate', desc: 'Connect your existing systems and create seamless data flows between platforms.' },
              {
                icon: TrendingUp,
                title: 'Automate',
                desc: 'Eliminate manual processes and create intelligent workflows that save time and reduce errors.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-background rounded-xl shadow-soft hover:shadow-accent transition-all duration-300">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">Our Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            From implementation to automation, we offer services that help your business thrive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="rounded-2xl shadow-soft hover:shadow-accent hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-4 text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mb-4 mx-auto">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center mt-4">
                  <Button variant="link" asChild className="text-primary hover:text-secondary font-medium">
                    <Link href={service.link}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with NPK */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">Why Partner with NPK</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Experience, expertise, and support that guarantee your business gets the best solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyNpk.map((item, i) => (
              <div key={i} className="text-center p-6 bg-background rounded-xl shadow-soft hover:shadow-accent transition-all duration-300">
                <item.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-foreground">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-6 rounded-2xl shadow-soft hover:shadow-accent hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-4 text-center">
                  <div className="flex justify-center items-center space-x-1 mb-4">
                    {[...Array(t.rating)].map((_, star) => (
                      <Star key={star} className="h-5 w-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <CardDescription className="text-base md:text-lg italic text-foreground leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center mt-6">
                  <div className="font-semibold text-foreground">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">Featured Solutions</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Ready-to-deploy products that accelerate your digital transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((p, i) => (
              <Card
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-accent hover:-translate-y-1 transition-all duration-300"
              >
                <CardHeader className="pb-4 text-left relative z-10">
                  {p.badge && <Badge className="bg-accent text-white w-fit mb-2">{p.badge}</Badge>}
                  <CardTitle className="text-2xl font-semibold mb-2 text-foreground">{p.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{p.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 text-left">
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {p.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full font-medium ${
                      p.buttonVariant === 'outline'
                        ? 'border border-border text-foreground bg-transparent hover:bg-muted'
                        : 'bg-primary hover:bg-secondary text-primary-foreground'
                    }`}
                  >
                    <Link href={p.link}>{p.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-background">Ready to Transform Your Business Operations?</h2>
        <p className="text-lg opacity-90 mb-8">Join 150+ businesses that have streamlined their operations with our solutions.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" variant="gradient" asChild>
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/10" asChild>
            <a href="tel:+918147707125">Call Now</a>
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm opacity-75">
          <span>✓ Free 30-minute consultation</span>
          <span>✓ No obligation assessment</span>
          <span>✓ Custom solution recommendations</span>
        </div>
      </section>
    </div>
  );
};

export default Home3;
