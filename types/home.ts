export interface HeroCTA {
  label: string;
  href: string;
}

export interface HeroImage {
  src: string;
  alt: string;
}

export interface TechLogo {
  name: string;
  logo: string;
}

export interface HeroData {
  badge: string;
  title: string;
  description: string;
  primaryCta: HeroCTA;
  secondaryCta: HeroCTA;
  image: HeroImage;
  techStackLogos: TechLogo[];
}

export interface CategoryCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  link: string;
  icon?: string;
}

export interface FeaturedService {
  id: string;
  category: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
  highlight?: boolean;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: 'Search' | 'Settings' | 'Layers' | 'GraduationCap'; 
}

export interface BenefitItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface Testimonial {
  id: string;
  company: string;
  author: string;
  role: string;
  quote: string;
  logo: string;
  image: string;
}

export interface FinalCta {
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  background: string; 
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}




