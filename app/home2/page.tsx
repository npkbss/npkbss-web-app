'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Calculator, Zap, CheckCircle, Users, Clock, Star, ArrowRight, TrendingUp, Database, FileText } from 'lucide-react';
// import heroImage from "@/assets/hero-dashboard.jpg";

const Home = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Power BI Services',
      description: 'Transform raw data into actionable insights with custom dashboards and automated reporting.',
      link: '/services/power-bi',
      image: '/assets/services/powerbi.jpg',
    },
    {
      icon: Calculator,
      title: 'Tally Prime Implementation',
      description: 'Complete setup and customization for streamlined accounting and inventory management.',
      link: '/services/tally-prime',
      image: '/assets/services/tally.jpg',
    },
    {
      icon: BarChart3,
      title: 'Zoho Analytics',
      description: "Comprehensive business intelligence solutions with Zoho's analytics platform.",
      link: '/services/zoho-analytics',
      image: '/assets/services/zoho-analytics.jpg',
    },
    {
      icon: Zap,
      title: 'API Integrations',
      description: 'Connect your systems seamlessly with custom integrations and automated workflows.',
      link: '/services',
      image: '/assets/services/api-intergrations.jpg',
    },
    {
      icon: FileText,
      title: 'Accounting Services',
      description: 'Professional bookkeeping, financial reporting, and compliance management.',
      link: '/services',
      image: '/assets/services/accounting.jpg',
    },
    {
      icon: Database,
      title: 'Inventory Audit',
      description: 'Comprehensive inventory tracking, auditing, and management implementations.',
      link: '/services',
      image: '/assets/services/inventory-audit.jpg',
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-95 bg-gradient-to-b from-primary via-primary/50 to-secondary"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            {/* Data-driven Finance & Automation */}
            Driving Sustainable Growth Through Digital Transformation
          </h1>
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

      {/* Value Propositions */}
      <section className="py-20 subtle-gradient">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">Our Approach</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions to help your business run smoother, faster, and smarter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Implement */}
            <div className="text-center p-6 bg-background rounded-xl shadow-soft hover:shadow-accent transition-all duration-300">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 transform hover:scale-105 transition-transform duration-300">
                <CheckCircle className="h-10 w-10 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Implement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Professional setup of accounting systems, dashboards, and business tools tailored to your needs.
              </p>
            </div>
            {/* Integrate */}
            <div className="text-center p-6 bg-background rounded-xl shadow-soft hover:shadow-accent transition-all duration-300">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 transform hover:scale-105 transition-transform duration-300">
                <Zap className="h-10 w-10 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Integrate</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect your existing systems and create seamless data flows between platforms.
              </p>
            </div>
            {/* Automate */}
            <div className="text-center p-6 bg-background rounded-xl shadow-soft hover:shadow-accent transition-all duration-300">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 transform hover:scale-105 transition-transform duration-300">
                <TrendingUp className="h-10 w-10 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Automate</h3>
              <p className="text-muted-foreground leading-relaxed">
                Eliminate manual processes and create intelligent workflows that save time and reduce errors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="rounded-2xl shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild>
                    <Link href={service.link}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">Our Services</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From implementation to automation, we offer services that help your business thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="rounded-2xl shadow-soft hover:shadow-accent hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-4 text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mb-4 transform hover:scale-105 transition-transform duration-300 mx-auto">
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

      {/* Why NPK */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose NPK</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Experienced Consultants</h3>
                <p className="text-muted-foreground text-sm">Deep expertise across accounting, automation, and business intelligence.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Certified Partners</h3>
                <p className="text-muted-foreground text-sm">Official partnerships ensure best-practice implementations.</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
                <p className="text-muted-foreground text-sm">Streamlined processes mean systems are live and productive faster.</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Post-Live Support</h3>
                <p className="text-muted-foreground text-sm">Ongoing support ensures maximum return on investment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NPK */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">Why Partner with NPK</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience, expertise, and support that guarantee your business gets the best solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Experienced Consultants */}
            <div className="text-center p-6 bg-background rounded-xl shadow-soft hover:shadow-accent transition-all duration-300">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Experienced Consultants</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Deep expertise across accounting, automation, and business intelligence.
              </p>
            </div>
            {/* Certified Partners */}
            <div className="text-center p-6 bg-background rounded-xl shadow-soft hover:shadow-accent transition-all duration-300">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Certified Partners</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Official partnerships ensure best-practice implementations.</p>
            </div>
            {/* Fast Turnaround */}
            <div className="text-center p-6 bg-background rounded-xl shadow-soft hover:shadow-accent transition-all duration-300">
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Fast Turnaround</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Streamlined processes mean systems are live and productive faster.
              </p>
            </div>
            {/* Post-Live Support */}
            <div className="text-center p-6 bg-background rounded-xl shadow-soft hover:shadow-accent transition-all duration-300">
              <Star className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">Post-Live Support</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Ongoing support ensures maximum return on investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-gradient-to-t from-primary/20 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">How We Work</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Our proven 3-step process ensures smooth, successful implementations—every time.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {['Discover', 'Implement', 'Handover & Support'].map((step, i) => (
                <div key={i} className="text-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                  <div
                    className="w-24 h-24 md:w-28 md:h-28 
                    bg-gradient-to-r from-primary to-cyan-300 
                    rounded-full flex items-center justify-center mx-auto mb-6 transform hover:scale-105 transition-transform duration-300"
                  >
                    <span className="text-3xl md:text-4xl font-bold text-white">{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{step}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {i === 0 &&
                      'We dive deep into your processes, uncover pain points, and craft a solution perfectly tailored to your business.'}
                    {i === 1 &&
                      'Our team implements the solution seamlessly, integrating systems without disrupting your daily operations.'}
                    {i === 2 && 'We ensure your team is trained, supported, and confident, so you get maximum value from your new systems.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-foreground">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                    <CardDescription className="text-base leading-relaxed">&quot;{testimonial.quote}&quot;</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 pb-0 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-foreground">What Our Clients Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="relative p-6 rounded-2xl shadow-soft hover:shadow-accent hover:-translate-y-1 transition-all duration-300"
                >
                  <CardHeader className="pb-4 text-center">
                    {/* Star rating */}
                    <div className="flex justify-center items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                      ))}
                    </div>

                    {/* Quote */}
                    <CardDescription className="text-base md:text-lg italic text-foreground leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="text-center mt-6">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">Featured Solutions</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready-to-deploy products that accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Card 1 */}
            <Card className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-accent hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-accent text-white">Popular</Badge>
                </div>
                <CardTitle className="text-2xl font-semibold mb-2 text-foreground">Zoho One Complete Suite</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  45+ integrated business applications for complete digital transformation
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• CRM, Accounting & HR in one platform</li>
                  <li>• Project management & collaboration tools</li>
                  <li>• Business intelligence & analytics</li>
                  <li>• Custom implementation & training included</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground font-medium">
                  <Link href="/products">Explore Zoho One</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Product Card 2 */}
            <Card className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-accent hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="pb-4 relative z-10">
                <CardTitle className="text-2xl font-semibold mb-2 text-foreground">Power BI Templates</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Pre-built dashboards for instant business intelligence insights
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Financial performance dashboards</li>
                  <li>• Sales & marketing analytics</li>
                  <li>• Operational efficiency tracking</li>
                  <li>• Customization & support included</li>
                </ul>
                <Button variant="outline" className="w-full font-medium">
                  <Link href="/products">View Templates</Link>
                </Button>
              </CardContent>
            </Card>
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

export default Home;
