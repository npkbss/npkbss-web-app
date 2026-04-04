// app/api/admin/resume/route.ts
import { supabaseServer } from '@/lib/supabase-server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { path } = await req.json();
  const env = process.env.NEXT_PUBLIC_APP_ENV || 'prod';

  if (!path) {
    return NextResponse.json({ error: 'Missing resume path' }, { status: 400 });
  }

  if (!['dev', 'prod'].includes(env)) {
    return NextResponse.json({ error: 'Invalid environment' }, { status: 500 });
  }

  const bucket = env === 'dev' ? 'resumes-dev' : 'resumes-prod';

  // check
  if (!path.startsWith(`${env}/`)) {
    return NextResponse.json({ error: 'Unauthorized resume access' }, { status: 403 });
  }

  const { data, error } = await supabaseServer.storage
    .from(bucket)
    .createSignedUrl(path, 60 * 5); // 5 minutes

  if (error) {
    return NextResponse.json({ error: 'Failed to generate resume URL' }, { status: 500 });
  }

  return NextResponse.json({ url: data.signedUrl });
}

