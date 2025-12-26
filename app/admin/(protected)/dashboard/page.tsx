// app/admin/(protected)/dashboard/page.tsx

import { supabaseServer } from '@/lib/supabase-server';

type LeadRow = {
  id: number;
  created_at: string;
  full_name: string;
  email: string;
  services: string | null;
};

export default async function DashboardPage() {
  const { data, error } = await supabaseServer
    .from('leads')
    .select('id, created_at, full_name, email, services')
    .order('created_at', { ascending: false });

  if (error) console.error(error);

  const leads: LeadRow[] = (data || []) as LeadRow[];

  const totalLeads = leads.length;

  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const monthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

  const leadsToday = leads.filter(l => l.created_at.slice(0, 10) === todayStr).length;

  const leadsThisMonth = leads.filter(l => l.created_at.slice(0, 7) === monthStr).length;

  const serviceCounts: Record<string, number> = {};
  for (const lead of leads) {
    try {
      const arr = lead.services ? JSON.parse(lead.services) : [];
      if (Array.isArray(arr)) {
        arr.forEach((s: string) => {
          serviceCounts[s] = (serviceCounts[s] || 0) + 1;
        });
      }
    } catch {}
  }

  const topServices = Object.entries(serviceCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const latest = leads.slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Quick insights into your inbound leads.</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard label="Total Leads" value={totalLeads.toString()} />
        <StatCard label="Leads Today" value={leadsToday.toString()} />
        <StatCard label="Leads This Month" value={leadsThisMonth.toString()} />
      </div>

      {/* Top services */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-800 mb-4">Most Requested Services</h2>

        {topServices.length === 0 ? (
          <p className="text-sm text-slate-500">Not enough data yet.</p>
        ) : (
          <ul className="space-y-2">
            {topServices.map(([service, count]) => (
              <li key={service} className="flex items-center justify-between text-sm">
                <span className="text-slate-700">{service}</span>
                <span className="text-slate-500 text-xs">{count} requests</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Latest Leads */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-800 mb-4">Latest Leads</h2>

        {latest.length === 0 ? (
          <p className="text-sm text-slate-500">No leads yet.</p>
        ) : (
          <ul className="divide-y divide-slate-200">
            {latest.map(l => (
              <li key={l.id} className="py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">{l.full_name}</p>
                  <p className="text-xs text-slate-500">{l.email}</p>
                </div>
                <span className="text-xs text-slate-500">{new Date(l.created_at).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  );
}
