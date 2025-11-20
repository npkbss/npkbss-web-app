'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Mail, Phone, Users, Briefcase, MapPin, Layers, MessageCircle, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { zohoProducts, contactTimes } from './data';

export default function GlassForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    business: '',
    email: '',
    phone: '',
    city: '',
    zohoProducts: [] as string[],
    requirements: '',
    contactTime: '',
    agree: false,
  });

  const update = (k: string, v: any) => setForm(p => ({ ...p, [k]: v }));

  const toggleProduct = (p: string) =>
    update('zohoProducts', form.zohoProducts.includes(p) ? form.zohoProducts.filter(x => x !== p) : [...form.zohoProducts, p]);

  const submit = async (e: any) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.zohoProducts.length || !form.agree) return;
    setLoading(true);
    await new Promise(res => setTimeout(res, 1200));
    setDone(true);
    setTimeout(() => setDone(false), 4000);
    setLoading(false);
  };

  return (
    <>
    <form
      onSubmit={submit}
      className="
        relative
        bg-white/10
        backdrop-blur-xl
        rounded-3xl
        p-10
        shadow-[0_0_40px_rgba(0,0,0,0.25)]
        border
        border-white/20
        overflow-hidden
      "
    >
      {/* animated gradient border */}
      <div className="absolute inset-0 rounded-3xl border-[3px] border-transparent animate-borderGlow pointer-events-none" />

      <h2 className="text-3xl font-semibold text-black mb-6">Book Your Free Consultation</h2>

      {done && (
        <div className="mb-6 flex items-center gap-3 bg-green-500/20 border border-green-400/30 text-green-100 px-4 py-3 rounded-xl">
          <CheckCircle2 className="h-5 w-5" /> Your request has been submitted!
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <FloatingField label="Full Name" icon={<Users />} value={form.fullName} onChange={v => update('fullName', v)} />

        <FloatingField label="Business Name" icon={<Briefcase />} value={form.business} onChange={v => update('business', v)} />

        <FloatingField label="Email Address" icon={<Mail />} value={form.email} onChange={v => update('email', v)} type="email" />

        <FloatingField label="Phone / WhatsApp" icon={<Phone />} value={form.phone} onChange={v => update('phone', v)} />
      </div>

      <div className="mt-6">
        <FloatingField label="City" icon={<MapPin />} value={form.city} onChange={v => update('city', v)} />
      </div>

      {/* Zoho products */}
      <div className="mt-8">
        <label className="text-sm font-medium text-black/90 mb-3 flex gap-2 items-center">
          <Layers className="h-4 w-4 text-cyan-300" /> Zoho Products Interested In *
        </label>

        <div className="grid sm:grid-cols-2 gap-3">
          {zohoProducts.map(p => (
            <label
              key={p}
              className="
                flex items-center gap-3 p-3 rounded-xl
                bg-white/10 border border-black/20
                hover:bg-white/20 hover:border-cyan-300/50
                text-black/90 text-sm cursor-pointer backdrop-blur-md
                transition-all
              "
            >
              <Checkbox checked={form.zohoProducts.includes(p)} onCheckedChange={() => toggleProduct(p)} />
              {p}
            </label>
          ))}
        </div>
      </div>

      {/* Requirements */}
      <div className="mt-8">
        <label className="text-sm font-medium text-black/90 mb-2 flex gap-2 items-center">
          <MessageCircle className="h-4 w-4 text-cyan-300" /> Requirements *
        </label>
        <Textarea
          rows={4}
          value={form.requirements}
          onChange={e => update('requirements', e.target.value)}
          placeholder="Describe what you're looking to automate or improve..."
          className="
            bg-white/10 border-black/20 text-black placeholder-black/40
            backdrop-blur-md rounded-xl
          "
        />
      </div>

      {/* Contact time */}
      <div className="mt-8">
        <label className="text-sm font-medium text-black/90 mb-2 flex gap-2 items-center">
          <Clock className="h-4 w-4 text-cyan-300" /> Preferred Time
        </label>
        <Select value={form.contactTime} onValueChange={v => update('contactTime', v)}>
          <SelectTrigger className="bg-white/10 backdrop-blur-lg border-white/20 text-black">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-black/20">
            {contactTimes.map(t => (
              <SelectItem key={t.value} value={t.value} className="text-black">
                {t.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Agree */}
      <label className="flex items-start gap-3 mt-6 text-black/90 text-sm cursor-pointer">
        <Checkbox checked={form.agree} onCheckedChange={v => update('agree', v as boolean)} />I agree to be contacted regarding this
        inquiry.
      </label>

      {/* Submit */}
      <Button
        type="submit"
        disabled={loading}
        className="
          w-full mt-8 py-6 rounded-xl text-lg
          bg-gradient-to-r from-cyan-400 to-indigo-500
          text-black font-semibold shadow-xl
          hover:scale-[1.02] transition
        "
      >
        {loading ? 'Submitting...' : 'Submit Request'}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      {/* gradient blur orb */}
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-400/30 blur-3xl rounded-full pointer-events-none" />
    </form>
    
    </>
    
  );
}

function FloatingField({
  label,
  icon,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  icon: any;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black/50">{icon}</div>

      <Input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="
          pl-12 bg-white/10 border-black/20 text-black
          rounded-xl backdrop-blur-md
          focus:border-cyan-300 focus:ring-0
          peer
        "
      />

      <label
        className="
          absolute left-12 top-1/2 -translate-y-1/2
          text-white/50 text-sm transition-all
          peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-200
          peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
}
