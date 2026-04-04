import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';

export async function PATCH(req: Request, { params }: { params: Promise<{ jobId: string }> }) {
  try {
    const { jobId } = await params;

    if (!jobId) {
      return NextResponse.json({ error: 'Job ID is required' }, { status: 400 });
    }

    const { action } = await req.json();

    // 🔒 Fetch current job state first (IMPORTANT)
    const { data: job, error: fetchError } = await supabaseServer.from('jobs').select('status').eq('id', jobId).single();

    if (fetchError || !job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    // 🚫 Terminal state protection
    if (job.status === 'closed') {
      return NextResponse.json({ error: 'Closed jobs cannot be modified' }, { status: 400 });
    }

    let updateData: Record<string, any> = {};

    switch (action) {
      case 'publish':
        if (job.status !== 'draft') {
          return NextResponse.json({ error: 'Only draft jobs can be published' }, { status: 400 });
        }

        updateData = {
          status: 'open',
          is_published: true,
          published_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };
        break;

      case 'close':
        if (job.status !== 'open') {
          return NextResponse.json({ error: 'Only open jobs can be closed' }, { status: 400 });
        }

        updateData = {
          status: 'closed',
          is_published: false,
          closed_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };
        break;

      // ❌ Explicitly blocked
      case 'reopen':
      case 'unpublish':
        return NextResponse.json({ error: 'This action is not allowed' }, { status: 400 });

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    const { error: updateError } = await supabaseServer.from('jobs').update(updateData).eq('id', jobId);

    if (updateError) {
      console.error('Job status update failed:', updateError);
      return NextResponse.json({ error: 'Failed to update job status' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ error: 'Failed to update job status' }, { status: 500 });
  }
}
