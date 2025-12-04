import React from 'react';
import { Building2, Factory, Heart, Landmark, ShoppingCart, Truck } from 'lucide-react';

const industries = [
  {
    name: 'Manufacturing',
    icon: <Factory className="h-8 w-8" />,
    services: ['Inventory Management', 'Production Analytics', 'Quality Control'],
    color: 'from-indigo-400 via-indigo-300 to-purple-400',
  },
  {
    name: 'Retail & E-commerce',
    icon: <ShoppingCart className="h-8 w-8" />,
    services: ['POS Integration', 'Sales Analytics', 'Customer Insights'],
    color: 'from-purple-400 via-fuchsia-300 to-pink-400',
  },
  {
    name: 'Healthcare',
    icon: <Heart className="h-8 w-8" />,
    services: ['Patient Management', 'Billing Systems', 'Compliance'],
    color: 'from-cyan-400 via-sky-300 to-blue-400',
  },
  {
    name: 'Finance & Banking',
    icon: <Landmark className="h-8 w-8" />,
    services: ['Risk Analytics', 'Portfolio Management', 'Financial Reporting'],
    color: 'from-indigo-400 via-blue-300 to-cyan-400',
  },
  {
    name: 'Real Estate',
    icon: <Building2 className="h-8 w-8" />,
    services: ['Property Management', 'Lead Tracking', 'Financial Reports'],
    color: 'from-cyan-400 via-teal-300 to-emerald-400',
  },
  {
    name: 'Logistics & Distribution',
    icon: <Truck className="h-8 w-8" />,
    services: ['Fleet Management', 'Route Optimization', 'Shipment Tracking'],
    color: 'from-purple-400 via-indigo-300 to-blue-400',
  },
];

export const ServingIndustries = () => {
  return (
    <>
      <section className="py-20 bg-linear-to-br from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='currentColor' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Industry Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mt-4 mb-6 font-sans">Serving Diverse Industries</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">Tailored solutions for your specific industry challenges</p>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    marginTop: index % 2 === 1 ? '2rem' : '0',
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="relative w-full aspect-square max-w-64 mx-auto">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${industry.color} rounded-3xl transform rotate-12 group-hover:rotate-6 transition-all duration-500 opacity-10 group-hover:opacity-20`}
                    />
                    <div className="relative w-full h-full bg-background border-2 border-border group-hover:border-primary/50 rounded-3xl transform group-hover:scale-105 transition-all duration-500 flex flex-col items-center justify-center p-6 group-hover:shadow-2xl">
                      <div
                        className={`p-4 rounded-2xl bg-linear-to-br ${industry.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {industry.icon}
                      </div>
                      <h3 className="text-lg font-bold text-center text-foreground group-hover:text-primary transition-colors mb-3">
                        {industry.name}
                      </h3>
                      {/* <div className="text-xs text-muted-foreground text-center">{industry.services.length} Solutions</div> */}

                      {/* Hover */}
                      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm rounded-3xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center">
                        <h4 className="font-bold text-primary text-center mb-3">{industry.name}</h4>
                        <div className="space-y-1">
                          {industry.services.map((service, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs">
                              <div className={`w-2 h-2 rounded-full bg-linear-to-r ${industry.color}`} />
                              <span className="text-foreground">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
