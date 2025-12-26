'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { jobDetailsMap } from '@/data/careers';
import { ApplyJobModal } from '@/components/careers/ApplyJobModal';
import { ArrowLeft, Briefcase, Calendar, CheckCircle, ChevronRight, Clock, DollarSign, MapPin, Share2, Users } from 'lucide-react';

const JobDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [openApply, setOpenApply] = useState(false);

  const jobDetails = jobDetailsMap[id];

  if (!jobDetails) {
    return <p className="text-center mt-20">Job not found</p>;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: jobDetails.title,
        text: `Check out this job opportunity at NPK BSS: ${jobDetails.title}`,
        url: window.location.href,
      });
    } else {
      toast.warning("This job can't be shared");
    }
  };

  return (
    <div className="min-h-screen bg-primary/10 font-display">
      <div className="sticky top-20 z-50 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button className="flex gap-2 items-center" onClick={() => router.push('/careers')}>
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-white">
            <CardHeader>
              <Badge variant="outline" className="mb-3 w-fit">
                {jobDetails.department}
              </Badge>
              <h1 className="text-4xl font-bold font-display">{jobDetails.title}</h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <Info icon={<MapPin />} text={jobDetails.location} />
                <Info icon={<Briefcase />} text={jobDetails.type} />
                <Info icon={<Clock />} text={jobDetails.experience} />
                <Info icon={<DollarSign />} text={jobDetails.salary ?? '—'} />
              </div>

              <div className="flex gap-6 mt-4 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {jobDetails.postedDate}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {jobDetails.openings}
                </span>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>About the Role</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{jobDetails.description}</p>
              <p className="mt-2">{jobDetails.fullDescription}</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Key Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {jobDetails.responsibilities?.map(item => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Required Qualifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {jobDetails.requirements?.map(item => (
                  <li key={item} className="flex gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 sticky top-36">
          <Card className="bg-white">
            <CardContent className="space-y-4 pt-4">
              <Button className="w-full py-6" onClick={() => setOpenApply(true)}>
                Apply for this Position
              </Button>
              <Button variant="outline" className="w-full" onClick={handleShare}>
                <Share2 className="w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <ApplyJobModal open={openApply} onClose={() => setOpenApply(false)} jobId={jobDetails.id} jobTitle={jobDetails.title} />
      </div>
    </div>
  );
};

const Info = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-blue-600">{icon}</span>
    <span className="text-sm">{text}</span>
  </div>
);

export default JobDetailsPage;
