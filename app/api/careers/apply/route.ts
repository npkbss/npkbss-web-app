// api/careers/apply/route.ts
import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';
import { randomUUID } from 'crypto';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const jobId = formData.get('jobId') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const resume = formData.get('resume') as File;

    // Validation
    if (!jobId || !jobTitle || !name || !email || !phone || !resume) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json({ error: 'Only PDF, DOC, DOCX allowed' }, { status: 400 });
    }

    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Resume must be under 5MB' }, { status: 400 });
    }

    // Upload resume
    const appEnv = process.env.NEXT_PUBLIC_APP_ENV || 'prod';
    const bucket = appEnv === 'dev' ? 'resumes-dev' : 'resumes-prod';
    const fileExt = resume.name.split('.').pop();
    const filePath = `${appEnv}/${jobId}/${randomUUID()}-${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabaseServer.storage.from(bucket).upload(filePath, resume, {
      contentType: resume.type,
      upsert: false,
    });

    if (uploadError) {
      console.error(uploadError);
      return NextResponse.json({ error: 'Resume upload failed' }, { status: 500 });
    }

    // Insert application
    const { error: insertError } = await supabaseServer.from('career_applications').insert({
      job_id: jobId,
      job_title: jobTitle,
      name,
      email,
      phone,
      resume_path: filePath,
      user_agent: req.headers.get('user-agent'),
      environment: appEnv,
    });

    if (insertError) {
      return NextResponse.json({ error: 'You have already applied for this job' }, { status: 409 });
    }

    return NextResponse.json({ success: true, message: 'Application submitted successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
