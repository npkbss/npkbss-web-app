// app/api/admin/jobs/[jobId]/candidates/route.ts
import { supabaseServer } from '@/lib/supabase-server';
import { NextResponse } from 'next/server';

export async function GET(_req: Request, context: { params: Promise<{ jobId: string }> }) {
  // console.log('API jobId param:', (await context.params).jobId);
  const { jobId } = await context.params;

  // console.log('SERVICE ROLE KEY present:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);

  const { data, error } = await supabaseServer
    .from('career_applications')
    .select('*')
    .eq('job_id', jobId)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch candidates' }, { status: 500 });
  }

  return NextResponse.json(data);
}
