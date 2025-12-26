// app/admin/(protected)/leads/[id]/page.tsx
import { supabase } from '@/lib/supabase-client';
import Link from 'next/link';

interface LeadDetailPageProps {
  params: {
    id: string;
  };
}

type Lead = {
  id: number;
  created_at: string;
  full_name: string;
  business_name: string | null;
  email: string;
  phone: string | null;
  city: string | null;
  requirements: string;
  services: string | null;
};

export default async function LeadDetailPage({ params }: LeadDetailPageProps) {
  const id = Number(params.id);

  const { data, error } = await supabase.from('leads').select('*').eq('id', id).single();

  if (error || !data) {
    console.error(error);
    return (
      <div className="space-y-4">
        <Link href="/admin/leads" className="text-xs text-slate-600 underline hover:text-slate-900">
          ← Back to leads
        </Link>
        <p className="text-sm text-red-600">Lead not found.</p>
      </div>
    );
  }

  const lead = data as Lead;

  let services: string[] = [];
  try {
    const parsed = lead.services ? JSON.parse(lead.services) : [];
    if (Array.isArray(parsed)) services = parsed;
  } catch {
    // ignore
  }

  return (
    <div className="space-y-6">
      <Link href="/admin/leads" className="text-xs text-slate-600 underline hover:text-slate-900">
        ← Back to leads
      </Link>

      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">{lead.full_name}</h1>
            <p className="text-sm text-slate-500">{lead.business_name || 'No company specified'}</p>
          </div>
          <p className="text-xs text-slate-500">Submitted: {new Date(lead.created_at).toLocaleString()}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <DetailField label="Email">
            <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
              {lead.email}
            </a>
          </DetailField>

          <DetailField label="Phone">
            {lead.phone ? (
              <a href={`tel:${lead.phone}`} className="text-slate-800">
                {lead.phone}
              </a>
            ) : (
              '-'
            )}
          </DetailField>

          <DetailField label="City">{lead.city || '-'}</DetailField>

          <DetailField label="Services">{services.length ? services.join(', ') : '-'}</DetailField>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <h2 className="text-sm font-semibold text-slate-800 mb-1">Requirements</h2>
          <p className="text-sm text-slate-700 whitespace-pre-line">{lead.requirements}</p>
        </div>
      </div>
    </div>
  );
}

function DetailField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-slate-800">{children}</p>
    </div>
  );
}
