import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, businessName, email, phone, city, services, requirements, agree, turnstileToken } = body;

    if (!fullName || !email || !services?.length || !requirements || !agree) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }
    if (!turnstileToken) {
      return NextResponse.json({ success: false, message: 'Turnstile verification token missing' }, { status: 400 });
    }

    //  Verify Turnstile with Cloudflare
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: turnstileToken,
      }),
    });

    const verifyResult = await verifyRes.json();

    if (!verifyResult.success) {
      console.error('Turnstile Failed:', verifyResult);
      return NextResponse.json({ success: false, message: 'Failed CAPTCHA verification' }, { status: 400 });
    }

    const { error } = await supabase.from('leads').insert([
      {
        full_name: fullName,
        business_name: businessName,
        email,
        phone,
        city,
        requirements,
        services: JSON.stringify(services),
        agree,
      },
    ]);

    if (error) {
      console.error('DB Error:', error);
      return NextResponse.json({ success: false, message: 'Database insert failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
