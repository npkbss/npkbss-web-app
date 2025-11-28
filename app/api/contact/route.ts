import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // step1: Verify Turnstile with Cloudflare
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

    // step2: Insert into Supabase
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

    // step3: Send notification email via Resend
    try {
      const toEmails = (process.env.NOTIFICATIONS_TO || '')
        .split(',')
        .map(e => e.trim())
        .filter(Boolean);

      if (toEmails.length > 0) {
        await resend.emails.send({
          from: process.env.NOTIFICATIONS_FROM || 'NPK Leads <no-reply@npkbss.in>',
          to: toEmails,
          subject: `New Lead from ${fullName}`,
          html: `
            <h2>New Lead Received</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Business:</strong> ${businessName || '-'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || '-'}</p>
            <p><strong>Services:</strong> ${services?.join(', ')}</p>
            <p><strong>Requirements:</strong></p>
            <p>${requirements.replace(/\n/g, '<br />')}</p>
          `,
        });
      }
    } catch (mailError) {
      console.error('Email send error:', mailError);
      // don't block the user if email fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
