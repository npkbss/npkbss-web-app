'use server';

import { supabaseServer } from '@/lib/supabase-server';

export async function createJob(formData: FormData) {
  try {
    const parseList = (value: FormDataEntryValue | null) =>
      value
        ? String(value)
            .split(',')
            .map(v => v.trim())
            .filter(Boolean)
        : [];


    const { error } = await supabaseServer.from('jobs').insert({
      title: formData.get('title'),
      department: formData.get('department'),
      location: formData.get('location'),
      type: formData.get('type'),
      work_type: formData.get('work_type'),
      experience: formData.get('experience'),
      salary: formData.get('salary'),
      openings: Number(formData.get('openings') || 1),

      description: formData.get('description'),
      full_description: formData.get('full_description'),

      skills: parseList(formData.get('skills')),
      responsibilities: parseList(formData.get('responsibilities')),
      requirements: parseList(formData.get('requirements')),
      nice_to_have: parseList(formData.get('nice_to_have')),
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (e) {
    return { error: 'Failed to create job' };
  }
}
