import { supabaseServer } from '@/lib/supabase-server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { path } = await req.json();

  if (!path) {
    return NextResponse.json({ error: 'Missing resume path' }, { status: 400 });
  }

  const { data, error } = await supabaseServer.storage
  .from('resumes')
  .createSignedUrl(path, 60 * 5); // 5mins

  if (error) {
    return NextResponse.json({ error: 'Failed to generate resume URL' }, { status: 500 });
  }

  return NextResponse.json({url: data.signedUrl});
}
