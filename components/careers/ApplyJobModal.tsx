'use client';

import { useId, useState, useTransition } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';

interface ApplyJobModalProps {
  open: boolean;
  onClose: () => void;
  jobId: string;
  jobTitle: string;
}

export const ApplyJobModal = ({ open, onClose, jobId, jobTitle }: ApplyJobModalProps) => {
  const [resume, setResume] = useState<File | null>(null);
  const [isPending, startTransition] = useTransition();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const resumeId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !resume) {
      toast.error('Please fill all required fields');
      return;
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (!allowedTypes.includes(resume.type)) {
      toast.error('Only PDF, DOC, or DOCX files are allowed');
      return;
    }

    if (resume.size > 5 * 1024 * 1024) {
      toast.error('Resume must be under 5MB');
      return;
    }

    const formData = new FormData();
    formData.append('jobId', jobId);
    formData.append('jobTitle', jobTitle);
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('phone', form.phone);
    formData.append('resume', resume);

    startTransition(async () => {
      try {
        const res = await fetch('/api/careers/apply', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();

        if (!res.ok) {
          toast.error(data.error || 'Application failed');
          return;
        }

        toast.success(data.message || 'Job Application submitted successfully');
        setForm({ name: '', email: '', phone: '' });
        setResume(null);
        onClose();
      } catch {
        toast.error('Something went wrong. Please try again.');
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={open => !open && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-3">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="name" placeholder="Enter your full name" value={form.name} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" name="email" placeholder="you@gmail.com" value={form.email} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input id="phone" name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor={resumeId}>Resume *</Label>
            <Input type="file" id={resumeId} required accept=".pdf,.doc,.docx" onChange={e => setResume(e.target.files?.[0] || null)} />
          </div>

          <Button className="w-full" disabled={isPending} onClick={handleSubmit}>
            {isPending ? 'Submitting...' : 'Submit Application'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
