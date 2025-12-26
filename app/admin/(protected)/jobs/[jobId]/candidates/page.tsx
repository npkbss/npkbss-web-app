'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type Candidate = {
  id: string;
  name: string;
  email: string;
  phone: string;
  resume_path: string;
  created_at: string;
};

export default function Candidates() {
  const { jobId } = useParams<{ jobId: string }>();
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchCandidates();
  }, [jobId]);

  async function fetchCandidates() {
    const res = await fetch(`/api/admin/jobs/${jobId}/candidates`);

    const data = await res.json();
    if (!res.ok) {
      toast.error('Failed to fetch candidates');
    }
    setCandidates(data);
  }

  async function viewResume(path: string) {
    const res = await fetch('/api/admin/resume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error('Unable to preview resume for a moment');
      return;
    }

    setResumeUrl(data.url);
  }

  return (
    <div className="space-y-6">
      {candidates.length === 0 && <center>No candidates applied.</center>}
      {candidates.length > 0 && (
        <Table>
          <TableCaption>Candidates {candidates.length}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Applied on</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="text-right">Resume</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map(candidate => (
              <TableRow key={candidate.id}>
                <TableCell className="font-medium">{new Date(candidate.created_at).toLocaleString()}</TableCell>
                <TableCell>{candidate.name}</TableCell>
                <TableCell>{candidate.email}</TableCell>
                <TableCell>{candidate.phone}</TableCell>
                <TableCell className="text-right">
                  <button onClick={() => viewResume(candidate.resume_path)} className="text-blue-600 text-sm underline">
                    View Resume
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {/* Resume Preview */}
      {resumeUrl && (
        <div className="border rounded mt-6 relative">
          {/* Close button */}
          <button onClick={()=>setResumeUrl(null)} className="absolute -top-4 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded">
            Close
          </button>

          <iframe src={resumeUrl} title="Resume Preview" className="w-full h-[700px]" />
        </div>
      )}
    </div>
  );
}
