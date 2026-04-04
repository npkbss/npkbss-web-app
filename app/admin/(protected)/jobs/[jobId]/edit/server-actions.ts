'use server';

import { supabaseServer } from '@/lib/supabase-server';

export async function updateJob(jobId: string, formData: FormData) {
  try {
    const parseList = (value: FormDataEntryValue | null) =>
      value
        ? String(value)
            .split(',')
            .map(v => v.trim())
            .filter(Boolean)
        : [];

    const { error } = await supabaseServer
      .from('jobs')
      .update({
        title: formData.get('title'),
        department: formData.get('department'),
        location: formData.get('location'),
        type: formData.get('type'),
        experience: formData.get('experience'),
        salary: formData.get('salary'),
        openings: Number(formData.get('openings') || 1),

        description: formData.get('description'),
        full_description: formData.get('full_description'),

        skills: parseList(formData.get('skills')),
        responsibilities: parseList(formData.get('responsibilities')),
        requirements: parseList(formData.get('requirements')),
        nice_to_have: parseList(formData.get('nice_to_have')),

        updated_at: new Date().toISOString(),
      })
      .eq('id', jobId);

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (err) {
    return { error: 'Failed to update job' };
  }
}
