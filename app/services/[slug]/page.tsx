import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { services, serviceCategories } from '@/data/services';
import { getIcon } from '@/utils/iconMap';
import { Button } from '@/components/ui/button';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | NPK Business Solutions',
    };
  }

  return {
    title: `${service.title} | NPK Business Solutions`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} - NPK Business Solutions`,
      description: service.shortDesc,
      images: service.image ? [service.image.src] : [],
    },
    keywords: [
      service.title,
      'NPK Business Solutions',
      'Digital Transformation',
      'Business Growth',
      'India',
      'UAE',
      'USA',
      'Dubai',
      'Abu Dhabi',
      'Mumbai',
      'Bangalore',
      'New York',
      'London',
      ...service.features,
    ],
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const category = serviceCategories.find((c) => c.slug === service.categorySlug);
  const Icon = getIcon(service.icon);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/services"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {category?.title || 'Our Service'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {service.shortDesc}
              </p>
            </div>

            <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">
              <p>{service.fullDesc}</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Key Features & Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form">
                <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20">
                  {service.cta || 'Get Started Now'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg rounded-xl border-slate-200 hover:bg-slate-50">
                  Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Image & Card */}
          <div className="space-y-8 sticky top-32">
            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 p-8 flex items-center justify-center">
              {service.image ? (
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  className="object-contain p-12 transition-transform duration-700 hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                  <Icon className="w-32 h-32" />
                </div>
              )}
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="bg-blue-900 rounded-3xl p-8 text-white shadow-xl">
              <h4 className="text-xl font-bold mb-4">Why Choose Us?</h4>
              <ul className="space-y-4 text-blue-100">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>Expert-Led Implementations</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>Process-First Approach</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>24/7 Support availability</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>Scalable & Future-Ready</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.fullDesc,
            "provider": {
              "@type": "Organization",
              "name": "NPK Business Solutions",
              "url": "https://npkbusinesssolutions.com"
            },
            "areaServed": ["IN", "AE", "US"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Business Services",
              "itemListElement": service.features.map((f, i) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": f
                }
              }))
            }
          })
        }}
      />
    </div>
  );
}
