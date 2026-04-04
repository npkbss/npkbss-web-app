// app/admin/(protected)/jobs/[jobId]/edit/EditJobClient.tsx
'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import JobForm from '@/components/admin/JobForm';
import { updateJob } from './server-actions';

export default function EditJobClient({ job, jobId }: { job: any; jobId: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <JobForm
      initialData={job}
      submitting={isPending}
      onSubmit={formData =>
        startTransition(async () => {
          const res = await updateJob(jobId, formData);
          if (res?.error) {
            toast.error(res.error);
            return;
          }
          toast.success('Job updated');
          router.push('/admin/jobs');
        })
      }
    />
  );
}
