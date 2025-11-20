'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Target,
  Award,
  Users,
  Lightbulb,
  Shield,
  Zap,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Calendar,
  MapPin,
  Globe,
  TrendingUp,
} from 'lucide-react';

const AboutPage = () => {
  const [currentMilestone, setCurrentMilestone] = useState(0);

  // Company Stats
  const stats = [
    { value: '2021', label: 'Established' },
    { value: '24+', label: 'Team members' },
    { value: '3', label: 'Office locations' },
    { value: '100%', label: 'Client dedication' },
  ];

  // Office Locations
  const officeLocations = [
    {
      city: 'Bangalore',
      state: 'Karnataka (Headquarters)',
      gradient: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      city: 'Mumbai',
      state: 'Maharashtra',
      gradient: 'bg-secondary/10',
      iconColor: 'text-secondary',
    },
    {
      city: 'Kurnool',
      state: 'Andhra Pradesh',
      gradient: 'bg-accent/10',
      iconColor: 'text-accent',
    },
  ];

  // Core Values
  const coreValuesData = [
    {
      icon: Shield,
      title: 'Integrity',
      description:
        'We conduct business with honesty, transparency, and ethical principles. Our commitment to integrity builds lasting trust with clients and stakeholders.',
      gradient: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We embrace creativity and continuous improvement, staying ahead of industry trends to deliver cutting-edge solutions that drive meaningful results.',
      gradient: 'from-secondary/20 to-secondary/10',
      iconColor: 'text-secondary',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We pursue the highest standards in every engagement, delivering quality outcomes that exceed expectations and create lasting value.',
      gradient: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We believe in the power of partnership, working closely with clients and teams to co-create solutions that address complex challenges.',
      gradient: 'from-primary/20 to-secondary/10',
      iconColor: 'text-primary',
    },
    {
      icon: CheckCircle2,
      title: 'Accountability',
      description:
        'We take ownership of our commitments, delivering on promises and taking responsibility for outcomes at every stage of engagement.',
      gradient: 'from-secondary/20 to-accent/10',
      iconColor: 'text-secondary',
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description:
        'Client success drives everything we do. We listen deeply, understand unique needs, and deliver solutions that create measurable business impact.',
      gradient: 'from-accent/20 to-primary/10',
      iconColor: 'text-accent',
    },
  ];

  type TeamMember = {
  name: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
  bio: string;
  linkedin?: string; 
};

  //   Leadership Team
  const team: TeamMember[] = [
    {
      name: 'Dellibabu Nallabothu',
      role: 'Founder & CEO',
      image: { src: '/assets/about/team-ceo.jpg', alt: 'Dellibabu Nallabothu' },
      bio: 'Visionary entrepreneur with passion for innovation and digital transformation',
      // linkedin: 'https://www.linkedin.com/in/dellibabun/',
    },
    {
      name: 'Team Member',
      role: 'Chief Technology Officer',
      image: { src: '/assets/about/team-cto.avif', alt: 'CTO Name' },
      bio: 'Technology leader specializing in cloud solutions and enterprise architecture',
    },
    {
      name: 'Team Member',
      role: 'Head of Operations',
      image: { src: '/assets/about/team-ho.avif', alt: 'Operations Head' },
      bio: 'Operations expert ensuring excellence in project delivery and client success',
    },
    {
      name: 'Team Member',
      role: 'Project Manager',
      image: { src: '/assets/about/team-pm.avif', alt: 'Project Manager' },
      bio: 'Experienced PM driving successful implementation of complex technology projects',
    },
  ];

  // Differentiators
  const differentiators = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Industry expertise',
      description: 'Our team brings proven experience in technology consulting, delivering strategic solutions across diverse sectors',
      image: { src: '/assets/about/industry-expertise.avif', alt: 'Industry Expertise' },
      stats: { value: '3+', label: 'Years Excellence' },
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Client-centric approach',
      description: 'Tailored solutions designed around your business goals—your success drives every engagement and partnership',
      image: { src: '/assets/about/client-centric.avif', alt: 'Client Centric' },
      stats: { value: '24+', label: 'Expert Team' },
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation leadership',
      description: 'Cutting-edge technologies and modern methodologies that deliver measurable business impact and sustainable growth',
      image: { src: '/assets/about/innovation-leadership.avif', alt: 'Innovation Leadership' },
      stats: { value: '3', label: 'Office Locations' },
    },
  ];

  // Company Milestones
  const milestones = [
    {
      year: '2021',
      title: 'Company founded',
      description:
        'NPK Business Solutions established by Dellibabu Nallabothu with a vision to transform business consulting and technology solutions',
      image: { src: '/assets/about/milestone-founded.avif', alt: 'Company Founded' },
    },
    {
      year: '2022',
      title: 'Multi-city expansion',
      description: 'Expanded operations with branches in Mumbai, Bangalore, and Kurnool, establishing regional presence across India',
      image: { src: '/assets/about/milestone-expansion.avif', alt: 'Multi-City Expansion' },
    },
    {
      year: '2023',
      title: 'Team growth milestone',
      description: 'Grew to a diverse team of 24+ professionals including Project Managers, Developers, Support Staff, and Managers',
      image: { src: '/assets/about/milestone-team.avif', alt: 'Team Growth' },
    },
    {
      year: '2024',
      title: 'Client success stories',
      description:
        'Delivered transformative digital solutions across multiple industries, building long-term partnerships based on trust and results',
      image: { src: '/assets/about/milestone-success.avif', alt: 'Client Success' },
    },
  ];

  const nextMilestone = () => {
    setCurrentMilestone(prev => (prev + 1) % milestones.length);
  };

  const prevMilestone = () => {
    setCurrentMilestone(prev => (prev - 1 + milestones.length) % milestones.length);
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
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  About NPK Business Solutions
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Empowering businesses through innovation and strategic partnership
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                More than a technology provider—we&apos;re your strategic partner in navigating the digital age. Delivering exceptional
                value through innovation, expertise, and commitment to your success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="shadow-accent group hover:shadow-hover">
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 shadow-accent overflow-hidden">
                <Image src="/assets/about/about-hero.avif" priority fill className="rounded-2xl" alt="About Us Hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section - With Roadmap Visualization */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
                Your strategic partner in the digital age
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At NPK Business Solutions, we are more than just a technology provider; we are your strategic partner in navigating the
                complexities of the digital age. Established in <span className="font-semibold text-foreground">2021</span> by{' '}
                <span className="font-semibold text-foreground">Dellibabu Nallabothu</span>, our foundation is built on a passion for
                innovation and a commitment to delivering exceptional value to our clients.
              </p>
              <p>
                Headquartered in <span className="font-semibold text-foreground">Bangalore, Karnataka</span>, the heart of India&apos;s
                technology hub, we bring together a strong team of over{' '}
                <span className="font-semibold text-foreground">24+ experienced professionals</span>, including Project Managers,
                Developers, Support Staff, and Managers. We understand the unique challenges businesses face, and we tailor our solutions to
                empower you to achieve your specific goals.
              </p>
              <p>
                With branches in{' '}
                <span className="font-semibold text-foreground">
                  Mumbai, Maharashtra; Bangalore, Karnataka; and Kurnool, Andhra Pradesh
                </span>
                , our reach extends across key regions, enabling us to provide localized support and build strong relationships with our
                clients. Our client-centric approach, combined with our focus on cutting-edge technologies, allows us to deliver sustainable
                results and build long-term relationships based on trust and mutual success. We are dedicated to your growth and
                transformation.
              </p>
            </div>

            {/* Office Locations Journey - Roadmap Style */}
            <div className="mt-16 relative">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">Our expansion journey</h3>
                <p className="text-muted-foreground">Growing across India to serve you better</p>
              </div>

              {/* Desktop/Tablet View - Horizontal Roadmap */}
              <div className="hidden md:block relative py-12">
                <svg className="w-full h-46 absolute inset-0" viewBox="0 0 1000 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: 'rgb(99, 102, 241)', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: 'rgb(139, 92, 246)', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: 'rgb(6, 182, 212)', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  {/* Curved Road Path */}
                  <path
                    d="M 50 150 Q 250 180 350 120 T 650 100 T 950 80"
                    stroke="url(#roadGradient)"
                    strokeWidth="4"
                    fill="none"
                    className="animate-draw"
                  />
                  {/* Milestone Dots */}
                  <circle cx="150" cy="160" r="8" fill="rgb(99, 102, 241)" className="animate-pulse" />
                  <circle cx="450" cy="87" r="8" fill="rgb(139, 92, 246)" className="animate-pulse" />
                  <circle cx="780" cy="115" r="8" fill="rgb(6, 182, 212)" className="animate-pulse" />
                </svg>

                {/* Location Cards */}
                <div className="relative grid grid-cols-3 gap-8 pt-8">
                  <div className="relative" style={{ marginTop: '60px', marginLeft: '80px' }}>
                    <div className="p-6 hover:shadow-accent transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <div className="p-6">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">Bangalore</h4>
                          <span className="text-xs text-primary font-medium">2021 - Founded</span>
                          <p className="text-sm text-muted-foreground">Karnataka (Headquarters)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative" style={{ marginTop: '-10px', marginLeft: '40px' }}>
                    <div className=" rounded-xl p-6 hover:shadow-accent transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">Mumbai</h4>
                          <span className="text-xs text-secondary font-medium">2022 - Expansion</span>
                          <p className="text-sm text-muted-foreground">Maharashtra</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <div className=" rounded-xl p-6  hover:shadow-accent transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">Kurnool</h4>
                          <span className="text-xs text-accent font-medium">2023 - Growth</span>
                          <p className="text-sm text-muted-foreground">Andhra Pradesh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Loaction - Mobile View */}
              <div className="md:hidden space-y-6">
                {[
                  {
                    city: 'Bangalore',
                    state: 'Karnataka (Headquarters)',
                    year: '2021 - Founded',
                    color: 'primary',
                    colorClass: 'bg-primary text-primary',
                  },
                  {
                    city: 'Mumbai',
                    state: 'Maharashtra',
                    year: '2022 - Expansion',
                    color: 'secondary',
                    colorClass: 'bg-secondary text-secondary',
                  },
                  { city: 'Kurnool', state: 'Andhra Pradesh', year: '2023 - Growth', color: 'accent', colorClass: 'bg-accent text-accent' },
                ].map((location, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${location.colorClass.split(' ')[0]}`} />
                      {index < 2 && <div className={`w-0.5 h-full ${location.colorClass.split(' ')[0]}/30 mt-2`} />}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="bg-background rounded-xl p-4 border border-border shadow-soft">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className={`h-4 w-4 ${location.colorClass.split(' ')[1]}`} />
                          <h4 className="font-bold text-foreground">{location.city}</h4>
                        </div>
                        <span className={`text-xs ${location.colorClass.split(' ')[1]} font-medium block mb-1`}>{location.year}</span>
                        <p className="text-sm text-muted-foreground">{location.state}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Principles</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">Our core values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The fundamental principles that guide our decisions, shape our culture, and define how we serve our clients
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {coreValuesData.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="flex gap-6 items-start group">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className={`h-6 w-6 ${value.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Differentiators</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">What sets us apart</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unique advantages that make us the preferred partner for business transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-accent border border-border transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center items-center  p-6 rounded-t-xl">
                  {item.image && (
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={140}
                      height={140}
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {/* <div className="text-primary">{item.icon}</div> */}
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-3xl font-bold text-primary">{item.stats.value}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">{item.stats.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">Meet our leadership team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence across every engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-accent border border-border transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden relative">
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    // width={200}
                    // height={200}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <div className="text-sm text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  {member?.linkedin && (<Link
                    href={member.linkedin}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Journey</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">Our growth milestones</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Key achievements that shaped our evolution as a leading business solutions provider
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-background rounded-2xl overflow-hidden shadow-accent border border-border">
                <div className="grid md:grid-cols-2 min-h-[310px]">
                  {/* Text Section */}
                  <div className="p-8 md:p-12 flex flex-col justify-center h-full">
                    <div className="inline-flex items-center gap-2 text-primary font-bold text-lg mb-4">
                      <Calendar className="h-5 w-5" />
                      {milestones[currentMilestone].year}
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">{milestones[currentMilestone].title}</h3>
                    <p className="text-lg text-muted-foreground line-clamp-5 md:line-clamp-none">
                      {milestones[currentMilestone].description}
                    </p>
                  </div>

                  {/* Image Section */}
                  <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10">
                    <Image
                      src={milestones[currentMilestone].image.src}
                      alt={milestones[currentMilestone].image.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>
              </div>

              {/* Timeline Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {milestones.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMilestone(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentMilestone ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
                      }`}
                      aria-label={`Go to milestone ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={prevMilestone} className="rounded-full" aria-label="Previous milestone">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextMilestone} className="rounded-full" aria-label="Next milestone">
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
            <Image src="/assets/about/about-cta.avif" alt="Join our team" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to partner with us?</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how our strategic expertise can transform your organization and drive sustainable growth
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-medium">
                  Start a conversation
                </Button>
                <Button size="lg" variant="default" className="border-white text-white hover:shadow-hover shadow-accent">
                  View our services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
