'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { jobs } from '@/data/careers';
import { Briefcase, Clock, Layers, MapPin, Search, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const filteredJobs = jobs.filter(job => {
    const query = searchQuery.toLowerCase();
    return (
      job.title.toLowerCase().includes(query) ||
      job.department.toLowerCase().includes(query) ||
      job.type.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.experience.toLowerCase().includes(query) ||
      job.skills?.some(skill => skill.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen font-display">
      <section id="open-positions" className="py-20 px-4 bg-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="md:text-5xl sm:text-xl font-bold text-blue-900 mb-4 font-display">Open Positions</h1>
            <p className="text-xl text-gray-600">Find your perfect role</p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                className="pl-10 py-6 text-lg"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-6 mt-10">
            {filteredJobs.length === 0 && <p className="text-center text-gray-500">No jobs found</p>}

            {filteredJobs.map(job => (
              <Card key={job.id} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{job.title}</CardTitle>
                  <CardDescription>{job.description}</CardDescription>
                  <CardAction>
                    <Button onClick={() => router.push(`/careers/${job.id}`)}>View Details</Button>
                  </CardAction>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <Badge variant="outline">{job.department}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </CardContent>

                {job.skills && (
                  <CardFooter>
                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                      <Layers className="w-4 h-4" />
                      {job.skills.map(skill => (
                        <span key={skill} className="ml-2">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
