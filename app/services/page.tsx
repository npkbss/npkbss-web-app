"use client";
import React from 'react';
import CategorySection from '@/components/services/CategorySection';
import ServicesCategoryOverview from '@/components/services/ServicesCategoryOverview';
import ServicesHero from '@/components/services/ServicesHero';
import { groupedServices } from '@/data/services';
import ServicesHighlights from '@/components/services/ServicesHighlights';
import ServicesWhyChoose from '@/components/services/ServicesWhyChoose';
import ServicesProcess from '@/components/services/ServicesProcess';
import ServicesDeepDive from '@/components/services/ServicesDeepDive';
// import ServicesCTA from '@/components/services/ServicesCTA';
import ServicesFAQ from '@/components/services/ServicesFAQ';
// import ServicesTestimonials from '@/components/services/ServicesTestimonials';
import ServicesFinalCTA from '@/components/services/ServicesFinalCTA';
import { ServingIndustries } from '@/components/services/ServingIndustries';

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesCategoryOverview />
      {groupedServices.map((group) => (
        <CategorySection key={group.category.id} group={group} />
      ))}
      <ServicesHighlights />
      <ServicesWhyChoose />
      <ServicesProcess />
      {/* <ServicesDeepDive /> */}
      <ServingIndustries />
      {/* <ServicesCTA /> */}
      {/* <ServicesTestimonials /> */}
      <ServicesFinalCTA />
      <ServicesFAQ />
    </div>
  );
};
export default Services;
