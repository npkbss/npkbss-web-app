'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

import JobForm from '@/components/admin/JobForm';
import { createJob } from './server-actions';

export default function CreateJobPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Create Job</h1>
        </div>

        {/* Form */}
        <JobForm
          submitting={isPending}
          onSubmit={formData =>
            startTransition(async () => {
              const res = await createJob(formData);
              if (res?.error) {
                toast.error(res.error);
                return;
              }

              toast.success('Job created successfully');
              router.push('/admin/jobs');
            })
          }
        />
      </div>
    </div>
  );
}
