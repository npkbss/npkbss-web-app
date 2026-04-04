// app/api/admin/jobs/[jobId]/candidates/route.ts
import { supabaseServer } from '@/lib/supabase-server';
import { NextResponse } from 'next/server';

export async function GET(
  _req: Request,
  { params }: { params: { jobId: string } }
) {
  const env = process.env.NEXT_PUBLIC_APP_ENV || 'prod';
  const { jobId } = params;

  // check env
  if (!['dev', 'prod'].includes(env)) {
    return NextResponse.json({ error: 'Invalid environment' }, { status: 500 });
  }

  const { data, error } = await supabaseServer
    .from('career_applications')
    .select('id, name, email, phone, resume_path, created_at')
    .eq('job_id', jobId)
    .eq('environment', env)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch candidates' }, { status: 500 });
  }

  return NextResponse.json(data);
}

