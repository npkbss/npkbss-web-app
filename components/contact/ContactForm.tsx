'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Users, Briefcase, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { allServices } from '@/data/contact';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();
  const [token, setToken] = useState('');
  const hasRendered = useRef(false); 
  const retryInterval = useRef<number | null>(null);

  const [form, setForm] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    services: [] as string[],
    requirements: '',
    agree: false,
  });

  // Turnstile callback
  //  useEffect(() => {
  //   const turnstile = (window as any).turnstile;

  //   if (turnstile && document.querySelector('.cf-turnstile')) {
  //     turnstile.render('.cf-turnstile', {
  //       sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  //       callback: (token: string) => setTurnstileToken(token)
  //     });
  //   }
  // }, []);
  useEffect(() => {
    const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    const tryRender = () => {
      const win = window as any;

      // Script not ready
      if (!win.turnstile || typeof win.turnstile.render !== 'function') return false;

      // Prevent duplicate render
      if (hasRendered.current) return true;

      const container = document.getElementById('turnstile-container');
      if (!container) return false;

      container.innerHTML = ''; // cleanup just in case

      win.turnstile.render('#turnstile-container', {
        sitekey,
        callback: (val: string) => {
          setToken(val);
        },
      });

      hasRendered.current = true;
      return true;
    };

    // immediate attempt
    if (!tryRender()) {
      let tries = 0;
      retryInterval.current = window.setInterval(() => {
        tries += 1;
        if (tryRender() || tries > 20) {
          if (retryInterval.current) clearInterval(retryInterval.current);
        }
      }, 200);
    }

    // cleanup
    return () => {
      hasRendered.current = true; // do NOT render again even if remounted
      if (retryInterval.current) clearInterval(retryInterval.current);
    };
  }, []);

  const update = (key: string, value: string | boolean | string[]) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const toggleService = (service: string) => {
    update('services', form.services.includes(service) ? form.services.filter(s => s !== service) : [...form.services, service]);
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Site key:', process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

    const validation: Record<string, string> = {};

    if (!form.fullName) validation.fullName = 'Full Name is required';
    if (!form.email) validation.email = 'Email is required';
    if (!form.phone) validation.phone = 'Phone is required';
    if (!form.services.length) validation.services = 'Select at least one service';
    if (!form.requirements) validation.requirements = 'Tell us what you need';
    if (!form.agree) validation.agree = 'You must agree before submitting';

    if (!turnstileToken) {
      alert("Please verify you're not a bot.");
      return;
    }

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          turnstileToken,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setOpen(true);
        setForm({
          fullName: '',
          businessName: '',
          email: '',
          phone: '',
          services: [],
          requirements: '',
          agree: false,
        });
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleClose = () => {
    router.push('/services');
    setOpen(false);
  };

  return (
    <>
      <form
        onSubmit={submitForm}
        className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl border border-white/20 space-y-4 scroll-mt-24"
        id="contact-form"
      >
        <h2 className="text-3xl font-semibold text-black">Book Your Free Consultation</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <Field
            label="Full Name"
            required
            value={form.fullName}
            error={errors.fullName}
            icon={<Users />}
            onChange={(v: string) => update('fullName', v)}
          />

          <Field label="Company Name" value={form.businessName} icon={<Briefcase />} onChange={(v: string) => update('businessName', v)} />

          <Field
            label="Email Address"
            required
            type="email"
            value={form.email}
            error={errors.email}
            icon={<Mail />}
            onChange={(v: string) => update('email', v)}
          />

          <Field label="Phone" required type="tel" value={form.phone} icon={<Phone />} onChange={(v: string) => update('phone', v)} />
        </div>

        <div>
          <LabelRequired>Services & Products Interested In</LabelRequired>

          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            {allServices.map(service => (
              <label
                key={service}
                className="flex items-center gap-3 p-1 rounded-xl bg-white/10 border border-black/20 hover:bg-white/20 cursor-pointer transition"
              >
                <Checkbox
                  checked={form.services.includes(service)}
                  onCheckedChange={(_v: boolean | 'indeterminate') => toggleService(service)}
                />
                {service}
              </label>
            ))}
          </div>

          {errors.services && <p className="text-red-600 text-xs mt-1">{errors.services}</p>}
        </div>

        <div>
          <LabelRequired>Requirements</LabelRequired>

          <Textarea
            value={form.requirements}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => update('requirements', e.target.value)}
            className="bg-white/10 border-black/20 text-black rounded-xl mt-2"
            rows={3}
            placeholder="Tell us what you want to build or improve..."
          />

          {errors.requirements && <p className="text-red-600 text-xs mt-1">{errors.requirements}</p>}
        </div>

        {/* <label className="flex items-start gap-3 text-black text-sm cursor-pointer">
          <Checkbox checked={form.agree} onCheckedChange={(v: boolean | 'indeterminate') => update('agree', v === true)} />I agree to be
          contacted regarding this inquiry <span className="text-red-500">*</span>
        </label> */}
        <label className="flex items-start gap-3 text-black text-sm cursor-pointer leading-snug">
          <Checkbox checked={form.agree} onCheckedChange={(v: boolean | 'indeterminate') => update('agree', v === true)} />
          <span>
            I agree to be contacted and acknowledge the{' '}
            <a href="/privacy-policy" className="underline text-blue-600" target="_blank">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms-of-service" className="underline text-blue-600" target="_blank">
              Terms of Service
            </a>
            .<span className="text-red-500"> *</span>
          </span>
        </label>

        {errors.agree && <p className="text-red-600 text-xs">{errors.agree}</p>}

        {/* <div
          dangerouslySetInnerHTML={{
            __html: `<div 
      class="cf-turnstile"
      data-sitekey="${process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}"
      data-callback="onTurnstileSuccess"
    ></div>`,
          }}
        /> */}
        {/* <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} data-callback="onTurnstileSuccess"></div> */}
        <div id="turnstile-container" className="mt-2"></div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl text-base bg-linear-to-r from-cyan-400 to-indigo-500 text-black font-semibold shadow-xl hover:scale-[1.02] transition"
        >
          {loading ? 'Submitting...' : 'Submit Request'}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white rounded-2xl shadow-xl max-w-sm text-center">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Thank You! 🎉</DialogTitle>
            <DialogDescription>Your request has been submitted. We'll contact you soon.</DialogDescription>
          </DialogHeader>

          <div className="flex justify-center mt-4">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>

          <Button className="mt-6 bg-cyan-500 text-black" onClick={handleClose}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  required,
  type = 'text',
  icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-semibold text-black flex items-center gap-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black/50">{icon}</div>

        <Input
          type={type}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          className={`pl-14 bg-white/10 border text-black rounded-xl backdrop-blur-md ${error ? 'border-red-500' : 'border-black/20'}`}
        />
      </div>

      {error && <p className="text-red-600 text-xs">{error}</p>}
    </div>
  );
}

function LabelRequired({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-sm font-semibold text-black flex items-center gap-1">
      {children} <span className="text-red-500">*</span>
    </label>
  );
}
