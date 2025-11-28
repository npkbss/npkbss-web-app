'use client';

import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export function LogoutButton() {
  return (
    <Button variant="outline" className="text-xs sm:text-sm" onClick={() => signOut({ callbackUrl: '/admin/login' })}>
      Logout
    </Button>
  );
}
