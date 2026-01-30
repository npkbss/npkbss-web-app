'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles, Star } from 'lucide-react';
import Image from 'next/image';

export function ZohoPartnerPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('zoho-partner-popup');

    if (!hasSeen) {
      setOpen(true);
      sessionStorage.setItem('zoho-partner-popup', 'true');
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      setOpen(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-2xl text-center">
        <DialogHeader>
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-3 mt-4 px-4 py-2 rounded-full border bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm">NPK Business Solutions – Zoho Authorized Partner</span>
              <Star className="h-4 w-4 text-yellow-300" />
            </div>
          </div>

          <DialogTitle className="text-xl font-semibold px-6">🎉 We’re now a Zoho Authorized Partner</DialogTitle>

          <DialogDescription className="mt-3 text-sm text-muted-foreground px-6">
            NPK Business Solutions is officially recognized as a Zoho Authorized Partner, delivering certified CRM, automation, and business
            solutions to growing organizations.
          </DialogDescription>

          <div className="text-center mx-auto py-6">
            <Image
              src="/assets/home/zoho-authorized-badge-new.png"
              alt="Zoho Authorized Partner"
              className="h-auto w-75 md:h-40 md:w-full  mx-auto"
              width={580}
              height={40}
            />
          </div>
        </DialogHeader>

        <div className="mt-4 flex justify-center">
          <Button onClick={() => setOpen(false)}>Got it</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
