import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';

export async function GET() {
  try {
    await supabaseServer
      .from('admins')
      .select('id')
      .limit(1);

    return NextResponse.json({ status: 'alive' });
  } catch (err) {
    return NextResponse.json(
      { error: 'keep-alive failed' },
      { status: 500 }
    );
  }
}
