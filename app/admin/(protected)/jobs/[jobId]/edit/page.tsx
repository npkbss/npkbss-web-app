// app/admin/(protected)/jobs/[jobId]/edit/page.tsx
import { supabaseServer } from '@/lib/supabase-server';
import { notFound } from 'next/navigation';
import EditJobClient from './EditJobClient';

export default async function EditJobPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;

  const { data: job, error } = await supabaseServer.from('jobs').select('*').eq('id', jobId).single();

  if (error || !job) notFound();

  return <EditJobClient job={job} jobId={jobId} />;
}
