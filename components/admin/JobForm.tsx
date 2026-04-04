'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export type JobFormData = {
  title?: string;
  department?: string;
  location?: string;
  type?: string;
  work_type?: string;
  experience?: string;
  salary?: string;
  openings?: number;
  description?: string;
  full_description?: string;
  skills?: string[];
  responsibilities?: string[];
  requirements?: string[];
  nice_to_have?: string[];
};

type Props = {
  initialData?: JobFormData;
  onSubmit: (formData: FormData) => void;
  submitting?: boolean;
};

export default function JobForm({ initialData, onSubmit, submitting }: Props) {
  useEffect(() => {
    if (initialData?.type) {
      const el = document.getElementById('job-type') as HTMLInputElement;
      if (el) el.value = initialData.type;
    }
    if (initialData?.work_type) {
      const el = document.getElementById('work-type') as HTMLInputElement;
      if (el) el.value = initialData.work_type;
    }
  }, [initialData]);

  return (
    <form action={onSubmit} className="space-y-6">
      {/* BASIC INFORMATION */}
      <Card className="bg-gray-100">
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-6 grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium text-gray-700">
              Job Title
            </Label>
            <Input id="title" name="title" placeholder="Zoho Developer" className="bg-white" defaultValue={initialData?.title} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="department" className="text-sm font-medium text-gray-700">
              Department
            </Label>
            <Input
              id="department"
              name="department"
              placeholder="Engineering, Finanace"
              className="bg-white"
              defaultValue={initialData?.department}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium text-gray-700">
              Location
            </Label>
            <Input
              id="location"
              name="location"
              placeholder="Jayanagar, Bangalore, Karnataka"
              className="bg-white"
              defaultValue={initialData?.location}
            />
          </div>

          {/* JOB TYPE */}
          <div className="space-y-2">
            <Label htmlFor="job-type" className="text-sm font-medium text-gray-700">
              Job Type
            </Label>

            <Select
              defaultValue={initialData?.type}
              onValueChange={value => {
                const input = document.getElementById('job-type') as HTMLInputElement;
                if (input) input.value = value;
              }}
            >
              <SelectTrigger className="bg-white focus:ring-1 focus:ring-offset-1">
                <SelectValue placeholder="Select employment type" />
              </SelectTrigger>

              <SelectContent className="bg-white border shadow-md z-9999">
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Freelancer">Freelancer</SelectItem>
              </SelectContent>
            </Select>

            <input type="hidden" id="job-type" name="type" defaultValue={initialData?.type} />
          </div>

          {/* WORK TYPE */}
          <div className="space-y-2">
            <Label htmlFor="work-type" className="text-sm font-medium text-gray-700">
              Work Type
            </Label>

            <Select
              defaultValue={initialData?.work_type}
              onValueChange={value => {
                const input = document.getElementById('work-type') as HTMLInputElement;
                if (input) input.value = value;
              }}
            >
              <SelectTrigger className="bg-white focus:ring-1 focus:ring-offset-1">
                <SelectValue placeholder="Select work arrangement" />
              </SelectTrigger>

              <SelectContent className="bg-white border shadow-md z-9999">
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="On-site">On-site</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>

            <input type="hidden" id="work-type" name="work_type" defaultValue={initialData?.work_type} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
              Experience
            </Label>
            <Input id="experience" placeholder="2-3 Years" name="experience" className="bg-white" defaultValue={initialData?.experience} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="salary" className="text-sm font-medium text-gray-700">
              Salary (optional)
            </Label>
            <Input id="salary" name="salary" placeholder="3-6 LPA" className="bg-white" defaultValue={initialData?.salary} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="openings" className="text-sm font-medium text-gray-700">
              Openings
            </Label>
            <Input id="openings" type="number" name="openings" className="bg-white" defaultValue={initialData?.openings ?? 1} />
          </div>
        </CardContent>
      </Card>

      {/* DESCRIPTION */}
      <Card className="bg-gray-100">
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-gray-700">
              Short Description
            </Label>
            <Textarea id="description" name="description" className="bg-white" defaultValue={initialData?.description} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="full_description" className="text-sm font-medium text-gray-700">
              Full Description
            </Label>
            <Textarea
              id="full_description"
              name="full_description"
              className="bg-white"
              rows={6}
              defaultValue={initialData?.full_description}
            />
          </div>
        </CardContent>
      </Card>

      {/* DETAILS */}
      <Card className="bg-gray-100">
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-6">
          {/* Skills */}
          <div className="space-y-2">
            <Label htmlFor="skills" className="text-sm font-medium text-gray-700">
              Skills (comma separated)
            </Label>
            <Input
              id="skills"
              name="skills"
              className="bg-white"
              placeholder="React, TypeScript, SQL"
              defaultValue={initialData?.skills?.join(', ')}
            />
          </div>

          {/* Responsibilities */}
          <div className="space-y-2">
            <Label htmlFor="responsibilities" className="text-sm font-medium text-gray-700">
              Responsibilities (comma separated)
            </Label>
            <Textarea
              id="responsibilities"
              name="responsibilities"
              className="bg-white"
              placeholder="Develop features, collaborate with team, review code"
              defaultValue={initialData?.responsibilities?.join(', ')}
            />
            <p className="text-xs text-muted-foreground">Comma separated values</p>
          </div>

          {/* Requirements */}
          <div className="space-y-2">
            <Label htmlFor="requirements" className="text-sm font-medium text-gray-700">
              Requirements (comma separated)
            </Label>
            <Textarea
              id="requirements"
              name="requirements"
              className="bg-white"
              placeholder="3+ years experience, strong JS fundamentals"
              defaultValue={initialData?.requirements?.join(', ')}
            />
          </div>

          {/* Nice to Have */}
          <div className="space-y-2">
            <Label htmlFor="nice_to_have" className="text-sm font-medium text-gray-700">
              Nice to Have (comma separated)
            </Label>
            <Textarea
              id="nice_to_have"
              name="nice_to_have"
              className="bg-white"
              placeholder="Experience with Supabase, DevOps knowledge"
              defaultValue={initialData?.nice_to_have?.join(', ')}
            />
          </div>
        </CardContent>
      </Card>

      {/* ACTIONS */}
      <div className="flex justify-end">
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Saving…' : 'Save'}
        </Button>
      </div>
    </form>
  );
}
