export interface ServiceCategory {
  id: number;
  slug: string;
  title: string;
  icon: string;
  description: string;
}

export interface ServiceItem {
  id: number;
  categorySlug: string;
  icon: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image?: { src: string; alt: string };
  gradient?: string;
  features: string[];
  pricing?: string;
  timeline?: string;
  cta?: string;
}

export interface ServiceGroup {
  category: ServiceCategory;
  services: ServiceItem[];
}
