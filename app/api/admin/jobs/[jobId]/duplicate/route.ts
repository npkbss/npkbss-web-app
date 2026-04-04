import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';

export async function POST(req: Request, { params }: { params: Promise<{ jobId: string }> }) {
  try {
    const { jobId } = await params;

    const { data: job, error } = await supabaseServer.from('jobs').select('*').eq('id', jobId).single();

    if (error || !job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    if (job.status !== 'closed') {
      return NextResponse.json({ error: 'Only closed jobs can be duplicated' }, { status: 400 });
    }

    // Remove fields that must NOT be copied
    const { id, status, is_published, published_at, closed_at, created_at, updated_at, ...jobData } = job;

    const { data: newJob, error: insertError } = await supabaseServer
      .from('jobs')
      .insert({
        ...jobData,
        status: 'draft',
        is_published: false,
        created_at: new Date().toISOString(),
      })
      .select('id')
      .single();

    if (insertError) {
      return NextResponse.json({ error: 'Failed to duplicate job' }, { status: 500 });
    }

    return NextResponse.json({ success: true, jobId: newJob.id });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to duplicate job' }, { status: 500 });
  }
}
