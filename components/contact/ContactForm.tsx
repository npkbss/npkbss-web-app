'use client';

import { ArrowRight, Briefcase, CheckCircle2, Mail, MapPin, Phone, Users } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zohoProducts } from '@/data/contact-data';


export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    business: '',
    email: '',
    phone: '',
    city: '',
    zohoProducts: [] as string[],
    requirements: '',
    agree: false,
  });

  const update = (k: string, v: string | string[] | boolean) => setForm(prev => ({ ...prev, [k]: v }));

  const toggleProduct = (p: string) =>
    update('zohoProducts', form.zohoProducts.includes(p) ? form.zohoProducts.filter(x => x !== p) : [...form.zohoProducts, p]);

  const submit = async (e: any) => {
    e.preventDefault();

    const newErrors: any = {};

    if (!form.fullName) newErrors.fullName = 'Full Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.zohoProducts.length) newErrors.zohoProducts = 'Select at least one product';
    if (!form.requirements) newErrors.requirements = 'Requirements are required';
    if (!form.agree) newErrors.agree = 'You must agree before submitting';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setOpen(true);

        setForm({
          fullName: '',
          business: '',
          email: '',
          phone: '',
          city: '',
          zohoProducts: [],
          requirements: '',
          agree: false,
        });

        setErrors({});
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <>
      <form
        id="contact-form"
        onSubmit={submit}
        className="scroll-mt-32 relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20 space-y-6"
      >
        <h2 className="text-3xl font-semibold text-black">Book Your Free Consultation</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Field
            label="Full Name"
            required
            name="fullName"
            autoComplete="name"
            icon={<Users />}
            value={form.fullName}
            onChange={(v: string) => update('fullName', v)}
            error={errors.fullName}
          />

          <Field
            label="Company Name"
            name="business"
            autoComplete="organization"
            icon={<Briefcase />}
            value={form.business}
            onChange={(v: string) => update('business', v)}
          />

          <Field
            label="Email Address"
            required
            type="email"
            name="email"
            autoComplete="email"
            icon={<Mail />}
            value={form.email}
            onChange={(v: string) => update('email', v)}
            error={errors.email}
          />

          <Field
            label="Phone / WhatsApp (Optional)"
            name="phone"
            type="tel"
            autoComplete="tel"
            icon={<Phone />}
            value={form.phone}
            onChange={(v: string) => update('phone', v)}
          />
        </div>

        {/* <Field
          label="City"
          name="city"
          autoComplete="address-level2"
          icon={<MapPin />}
          value={form.city}
          onChange={(v: string) => update('city', v)}
        /> */}

        {/* Products */}
        <div>
          <LabelRequired>Products Interested In</LabelRequired>

          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            {zohoProducts.map(p => (
              <label
                key={p}
                className="flex items-center gap-3 p-2 rounded-xl bg-white/10 border border-black/20 hover:bg-white/20 hover:border-cyan-300/50 cursor-pointer transition-all"
              >
                <Checkbox checked={form.zohoProducts.includes(p)} onCheckedChange={() => toggleProduct(p)} />
                {p}
              </label>
            ))}
          </div>

          {errors.zohoProducts && <p className="text-red-600 text-xs mt-1">{errors.zohoProducts}</p>}
        </div>

        {/* Requirements */}
        <div>
          <LabelRequired>Requirements</LabelRequired>

          <Textarea
            name="requirements"
            autoComplete="off"
            rows={4}
            value={form.requirements}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => update('requirements', e.target.value)}
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) => update('requirements', e.currentTarget.value)}
            className="bg-white/10 border-black/20 text-black placeholder-black/40 rounded-xl backdrop-blur-md mt-2"
            placeholder="Tell us what you want to automate or improve..."
          />

          {errors.requirements && <p className="text-red-600 text-xs mt-1">{errors.requirements}</p>}
        </div>

        {/* Agree */}
        <label className="flex items-start gap-3 text-black text-sm cursor-pointer">
          <Checkbox checked={form.agree} onCheckedChange={v => update('agree', v as boolean)} />I agree to be contacted regarding this
          inquiry
          <span className="text-red-500">*</span>
        </label>

        {errors.agree && <p className="text-red-600 text-xs">{errors.agree}</p>}

        <Button
          type="submit"
          disabled={loading}
          className="w-full py-5 rounded-xl text-lg bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold shadow-xl hover:scale-[1.02] transition"
        >
          {loading ? 'Submitting...' : 'Submit Request'}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>

      {/* Popup */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white rounded-2xl shadow-xl max-w-sm text-center">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Thank You! 🎉</DialogTitle>
            <DialogDescription>Your request has been submitted. We’ll reach out shortly!</DialogDescription>
          </DialogHeader>

          <div className="flex justify-center mt-4">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>

          <Button className="mt-6 bg-cyan-500 text-black" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

/* -------------------------- FIELD COMPONENT -------------------------- */
function Field({ label, icon, value, onChange, error, required, type = 'text', name, autoComplete }: any) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-semibold text-black flex items-center gap-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black/50">{icon}</div>

        <Input
          name={name}
          autoComplete={autoComplete}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          onInput={e => onChange(e.currentTarget.value)}
          className={`pl-12 bg-white/10 border text-black rounded-xl backdrop-blur-md ${
            error ? 'border-red-500' : 'border-black/20'
          } focus:border-cyan-300 focus:ring-0`}
        />
      </div>

      {error && <p className="text-red-600 text-xs">{error}</p>}
    </div>
  );
}

function LabelRequired({ children }: any) {
  return (
    <label className="text-sm font-semibold text-black flex items-center gap-1">
      {children} <span className="text-red-500">*</span>
    </label>
  );
}
