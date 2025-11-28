// app/admin/(protected)/leads/page.tsx
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Suspense } from 'react';

type LeadRow = {
  id: number;
  created_at: string;
  full_name: string;
  business_name: string | null;
  email: string;
  phone: string | null;
  city: string | null;
  services: string | null;
};

interface LeadsPageProps {
  searchParams?: {
    q?: string;
    page?: string;
  };
}

const PAGE_SIZE = 20;

export default async function LeadsPage({ searchParams }: LeadsPageProps) {
  const q = searchParams?.q?.trim() || '';
  const page = Number(searchParams?.page || '1') || 1;
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, error, count } = await supabase
    .from('leads')
    .select('id, created_at, full_name, business_name, email, phone, city, services', {
      count: 'exact',
    })
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
  }

  const leads: LeadRow[] = (data || []) as LeadRow[];

  // simple search in memory (name, email, business)
  const filtered = q
    ? leads.filter(l => {
        const haystack = `${l.full_name} ${l.business_name || ''} ${l.email}`.toLowerCase();
        return haystack.includes(q.toLowerCase());
      })
    : leads;

  const paged = filtered.slice(from, to + 1);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Leads</h1>
          <p className="text-sm text-slate-500">All contact form submissions from your website.</p>
        </div>

        {/* Search form (server-side, via searchParams) */}
        <form method="GET" className="flex items-center gap-2">
          <input
            type="text"
            name="q"
            placeholder="Search by name, email, company..."
            defaultValue={q}
            className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-400"
          />
          <button type="submit" className="text-sm px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50">
            Search
          </button>
        </form>
      </div>

      <Suspense fallback={<p>Loading leads...</p>}>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left">
              <tr>
                <Th>Date</Th>
                <Th>Name</Th>
                <Th>Business</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>City</Th>
                <Th>Services</Th>
              </tr>
            </thead>
            <tbody>
              {paged.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-6 text-center text-slate-500">
                    No leads found.
                  </td>
                </tr>
              )}

              {paged.map(lead => (
                <tr key={lead.id} className="border-t border-slate-100 align-top hover:bg-slate-50/60">
                  <Td className="text-xs text-slate-500 whitespace-nowrap">{new Date(lead.created_at).toLocaleString()}</Td>
                  <Td className="font-medium text-slate-900">{lead.full_name}</Td>
                  <Td>{lead.business_name || '-'}</Td>
                  <Td>
                    <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                      {lead.email}
                    </a>
                  </Td>
                  <Td>
                    {lead.phone ? (
                      <a href={`tel:${lead.phone}`} className="text-slate-700">
                        {lead.phone}
                      </a>
                    ) : (
                      '-'
                    )}
                  </Td>
                  <Td>{lead.city || '-'}</Td>
                  <Td className="max-w-[200px] text-xs text-slate-700">
                    {(() => {
                      try {
                        const arr = lead.services ? JSON.parse(lead.services) : [];
                        if (Array.isArray(arr)) return arr.join(', ');
                        return lead.services;
                      } catch {
                        return lead.services;
                      }
                    })()}
                  </Td>
                  <Td>
                    <Link href={`/admin/leads/${lead.id}`} className="text-xs text-slate-600 underline hover:text-slate-900">
                      View
                    </Link>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Suspense>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>
            Page {page} of {totalPages}
          </span>
          <div className="flex gap-2">
            {page > 1 && (
              <Link
                href={`/admin/leads?page=${page - 1}${q ? `&q=${encodeURIComponent(q)}` : ''}`}
                className="px-3 py-1 border border-slate-300 rounded-lg bg-white hover:bg-slate-50"
              >
                Previous
              </Link>
            )}
            {page < totalPages && (
              <Link
                href={`/admin/leads?page=${page + 1}${q ? `&q=${encodeURIComponent(q)}` : ''}`}
                className="px-3 py-1 border border-slate-300 rounded-lg bg-white hover:bg-slate-50"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wide">{children}</th>;
}

function Td({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 ${className}`}>{children}</td>;
}
