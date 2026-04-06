// app/admin/(protected)/layout.tsx
import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { LogoutButton } from '@/components/admin/LogoutButton';
import Image from 'next/image';
import { Settings, Settings2, Settings2Icon, SettingsIcon } from 'lucide-react';

import { authOptions } from '@/lib/auth';

interface AdminLayoutProps {
  children: ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/assets/npk-logo.jpg" alt="NPK Logo" width={48} height={48} className="object-cover rounded-lg" />
            <span className="font-semibold text-slate-900 text-sm sm:text-base">NPK Admin</span>
            <span className="hidden sm:inline-block text-xs text-slate-500">• Internal Dashboard</span>
          </div>

          <nav className="flex items-center gap-4 text-xs sm:text-sm text-slate-600 ">
            <Link href="/admin" className="hover:text-slate-900 hover:underline">
              Dashboard
            </Link>
            <Link href="/admin/leads" className="hover:text-slate-900 hover:underline">
              Leads
            </Link>
            <Link href="/admin/jobs" className="hover:text-slate-900 hover:underline">
              Jobs
            </Link>
            <Link href="/admin/settings" className="hover:text-slate-900">
              <Settings />
            </Link>

            <div className="pl-3 border-l border-slate-300">
              <LogoutButton />
            </div>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">{children}</main>
    </div>
  );
}
