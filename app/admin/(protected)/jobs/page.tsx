import { Job } from '@/types/career';
import React from 'react';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const jobs: Job[] = [
  {
    id: 'application-support-executive',
    title: 'Application Support Executive',
    department: 'Support',
    location: 'Jayanagar, Bangalore (WFO)',
    type: 'Full-time',
    experience: '0–1 Year',
    description: 'Support business applications such as Zoho, Tally, Power BI, and custom-built applications.',
    skills: ['MS Excel', 'Email Communication', 'Business Processes', 'ERP Basics'],
  },
  {
    id: 'zoho-developer',
    title: 'Zoho Developer',
    department: 'Engineering',
    location: 'Jayanagar, Bangalore (WFO)',
    type: 'Full-time',
    experience: '1 Year',
    description: 'Customization, automation, and support of Zoho applications for partner clients.',
    skills: ['Zoho CRM', 'Zoho Creator', 'Deluge', 'APIs', 'Integrations'],
  },
  {
    id: 'tally-developer-freelancer',
    title: 'Tally Developer (Freelancer)',
    department: 'Finance / ERP',
    location: 'Remote',
    type: 'Freelance / Project-based',
    experience: 'Experienced',
    description: 'Work on multiple client projects involving Tally customization and integrations.',
    skills: ['TallyPrime', 'TDL', 'API Integration', 'Automation'],
  },
  {
    id: 'interns-freshers-2025',
    title: 'Interns & Fresh Graduates (2025)',
    department: 'Multiple',
    location: 'Jayanagar, Bangalore (WFO)',
    type: 'Internship / Full-time',
    experience: 'Freshers',
    description: 'Hiring interns and fresh graduates interested in ERP implementations, reporting, and support.',
    skills: ['MS Excel', 'PowerPoint', 'Communication', 'ERP Interest'],
  },
];

const Jobs = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col space-y-6">
        {jobs.map(job => {
          return (
            <Card key={job.id}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{job.title}</CardTitle>
                <CardDescription>{job.description}</CardDescription>
                <CardAction className="space-x-2">
                  {/* <Button asChild>
                    <Link href={`/admin/jobs/${job.id}/candidates`}>View Details </Link>
                  </Button> */}
                  <Button asChild variant="secondary">
                    <Link href={`/admin/jobs/${job.id}/candidates`}>View Candidates </Link>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>{job.location}</p>
                <p>{job.department}</p>
                <p>{job.experience}</p>
                <p>{job.type}</p>
              </CardContent>
              <CardFooter className='flex flex-wrap gap-2'>{job.skills && job.skills.map((skill, index) => <span key={index}>{skill}</span>)}</CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
