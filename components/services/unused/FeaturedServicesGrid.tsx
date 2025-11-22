import { Award, Clock, Rocket, Users } from 'lucide-react';
import React from 'react';

const stats = [
  { value: '100+', label: 'Projects Delivered', icon: <Rocket className="h-5 w-5" /> },
  { value: '50+', label: 'Happy Clients', icon: <Users className="h-5 w-5" /> },
  { value: '24/7', label: 'Support Available', icon: <Clock className="h-5 w-5" /> },
  { value: '98%', label: 'Success Rate', icon: <Award className="h-5 w-5" /> },
];

export default function FeaturedServicesGrid() {
  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-soft hover:shadow-accent transition-all duration-500 animate-in slide-in-from-bottom"
            style={{ animationDelay: `${(index + 4) * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
