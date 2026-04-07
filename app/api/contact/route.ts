// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const appEnv = process.env.NEXT_PUBLIC_APP_ENV || 'prod';
const isProd = appEnv === 'prod';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, businessName, email, phone, city, services, requirements, agree, turnstileToken } = body;

    if (!fullName || !email || !services?.length || !requirements || !agree) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }
    if (isProd && !turnstileToken) {
      return NextResponse.json({ success: false, message: 'Turnstile verification token missing' }, { status: 400 });
    }

    // step1: Verify Turnstile with Cloudflare
    if (isProd) {
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
    }

    // step2: Insert into Supabase
    const { error } = await supabaseServer.from('leads').insert([
      {
        full_name: fullName,
        business_name: businessName,
        email,
        phone,
        city,
        requirements,
        services: JSON.stringify(services),
        agree,
        environment: appEnv,
      },
    ]);

    if (error) {
      console.error('DB Error:', error);
      return NextResponse.json({ success: false, message: 'Database insert failed' }, { status: 500 });
    }
    console.log('Contact API hit');
    console.log('ENV NOTIFICATIONS_TO:', process.env.NOTIFICATIONS_TO);
    console.log('ENV RESEND KEY exists:', !!process.env.RESEND_API_KEY);
    console.log('RESEND KEY:', process.env.RESEND_API_KEY);

    // step3: Send notification email via Resend
    // Skip emails in dev
    // if (appEnv === 'dev') {
    //   console.log('[DEV] Email skipped');
    //   return NextResponse.json({ success: true });
    // }

    try {
      const toEmails = (process.env.NOTIFICATIONS_TO || '')
        .split(',')
        .map(e => e.trim())
        .filter(Boolean);

      if (toEmails.length > 0) {
        const result = await resend.emails.send({
          // from: 'onboarding@resend.dev', // testing domain
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
        console.log('Resend response:', result);
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
