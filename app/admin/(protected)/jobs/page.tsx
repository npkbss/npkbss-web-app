import { supabaseServer } from '@/lib/supabase-server';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { Plus, Pencil } from 'lucide-react';
import JobStatusActions from '@/components/admin/JobStatusActions';

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  status: 'draft' | 'open' | 'closed';
  is_published: boolean;
  created_at: string;
  published_at: string | null;
  closed_at: string | null;
};

const env = process.env.NEXT_PUBLIC_APP_ENV || 'prod';

export default async function AdminJobsPage() {
  const { data: jobs, error } = await supabaseServer
    .from('jobs')
    .select('id, title, department, location, status, is_published, created_at, published_at, closed_at')
    .eq('environment', env)
    .order('created_at', { ascending: false });

  if (error) {
    return <div className="p-6 text-red-600">Failed to load jobs</div>;
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Job Management</h1>

        <Link href="/admin/jobs/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Job
          </Button>
        </Link>
      </div>

      {/* Table */}
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Published</TableHead>
              <TableHead>Published At</TableHead>
              <TableHead>Closed At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {jobs?.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-muted-foreground py-10">
                  No jobs created yet
                </TableCell>
              </TableRow>
            )}

            {jobs?.map(job => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>{job.department}</TableCell>
                <TableCell>{job.location}</TableCell>

                <TableCell>
                  <StatusBadge status={job.status} />
                </TableCell>

                <TableCell>
                  {job.is_published ? <Badge className="bg-green-600">Yes</Badge> : <Badge variant="secondary">No</Badge>}
                </TableCell>

                <TableCell>{job.published_at ? new Date(job.published_at).toLocaleDateString() : '—'}</TableCell>

                <TableCell>{job.closed_at ? new Date(job.closed_at).toLocaleDateString() : '—'}</TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end items-center gap-2">
                    {job.status !== 'closed' && (
                      <Link href={`/admin/jobs/${job.id}/edit`}>
                        <Button size="sm" variant="outline">
                          <Pencil className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                      </Link>
                    )}

                    {/* ALL state actions live here */}
                    <JobStatusActions jobId={job.id} status={job.status} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

/* ------------------ */
/* Status Badge */
function StatusBadge({ status }: { status: 'draft' | 'open' | 'closed' }) {
  switch (status) {
    case 'open':
      return <Badge className="bg-blue-600">Open</Badge>;
    case 'closed':
      return <Badge className='bg-red-400'>Closed</Badge>;
    default:
      return <Badge variant="outline">Draft</Badge>;
  }
}
