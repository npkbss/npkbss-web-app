'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Archive, Copy } from 'lucide-react';

type Props = {
  jobId: string;
  status: 'draft' | 'open' | 'closed';
};

export default function JobStatusActions({ jobId, status }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const updateStatus = (action: 'publish' | 'close') => {
    startTransition(async () => {
      const res = await fetch(`/api/admin/jobs/${jobId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action }),
      });

      if (!res.ok) {
        toast.error('Failed to update job');
        return;
      }

      toast.success('Job updated');
      window.location.reload();
    });
  };

  const duplicateJob = () => {
    startTransition(async () => {
      const res = await fetch(`/api/admin/jobs/${jobId}/duplicate`, {
        method: 'POST',
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || 'Failed to duplicate job');
        return;
      }

      toast.success('Job duplicated');
      router.push(`/admin/jobs/${data.jobId}/edit`);
    });
  };

  /* ------------------ */
  /* OPEN → Close */
  if (status === 'open') {
    return (
      <Button size="sm" className='px-6' variant="premium" disabled={isPending} onClick={() => updateStatus('close')}>
        {/* <Archive className="w-4 h-4 mr-1" /> */}
        Close
      </Button>
    );
  }

  /* ------------------ */
  /* CLOSED → Duplicate */
  if (status === 'closed') {
    return (
      <Button size="sm" variant="secondary" disabled={isPending} onClick={duplicateJob}>
        <Copy className="w-4 h-4 mr-1" />
        Duplicate
      </Button>
    );
  }

  /* ------------------ */
  /* DRAFT → Publish */
  return (
    <Button size="sm" variant="success" disabled={isPending} onClick={() => updateStatus('publish')}>
      Publish
    </Button>
  );
}
