'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Header from '@/components/Header';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Header />}

      {children}

      {!isAdminRoute && <WhatsAppFloat />}
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <Analytics />}
      {!isAdminRoute && <SpeedInsights />}
    </>
  );
}
