'use client';

import { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { serviceGroups } from './data'; // <-- your typed data file
import type { Service } from './data';

/**
 * DesignEight.tsx
 * Interactive 3D Tilt Cards + Parallax Backgrounds
 *
 * Notes:
 * - Expects `service.icon` to be typed as React.ComponentType<React.SVGProps<SVGSVGElement>>
 * - Uses only React + next/image + Tailwind CSS classes
 * - Works on mouse, keyboard (focus), and touch
 */

export default function DesignEight() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <Header />

        {/* Parallax background container */}
        <div className="relative mt-10">
          <ParallaxBackdrop />

          {/* Card grid */}
          <div className="relative grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.flatMap((group) =>
              group.services.map((s) => <TiltCard key={s.id} service={s} />),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Header ---------- */
function Header() {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold text-slate-900">Our Services</h2>
      <p className="mt-3 text-slate-600">
        Interactive previews — tilt to explore. Images, icons and micro-interactions make services come alive.
      </p>
    </div>
  );
}

/* ---------- Parallax Backdrop (ambient shapes) ---------- */
function ParallaxBackdrop() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 30; // -15..15
      const y = ((e.clientY - top) / height - 0.5) * 30;
      el.style.setProperty('--px', `${x}px`);
      el.style.setProperty('--py', `${y}px`);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{ transform: 'translateZ(0)' }}
    >
      {/* subtle floating blobs */}
      <div
        className="absolute -left-24 -top-20 w-72 h-72 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(99,102,241,0.14), transparent 30%), linear-gradient(135deg, rgba(14,165,233,0.06), transparent 40%)',
          transform: 'translate(var(--px,0), var(--py,0))',
          transition: 'transform 120ms linear',
          filter: 'blur(36px)',
        }}
      />
      <div
        className="absolute right-[-6rem] bottom-[-6rem] w-96 h-96 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(236,72,153,0.08), transparent 30%), linear-gradient(135deg, rgba(99,102,241,0.04), transparent 40%)',
          transform: 'translate(calc(var(--px,0) * -0.6), calc(var(--py,0) * -0.6))',
          transition: 'transform 160ms linear',
          filter: 'blur(48px)',
        }}
      />
    </div>
  );
}

/* ---------- Tilt Card ---------- */
function TiltCard({ service }: { service: Service }) {
  const rootRef = useRef<HTMLButtonElement | null>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // pointer move -> compute tilt and glare
  const onPointerMove = useCallback((e: PointerEvent | MouseEvent | TouchEvent) => {
    const root = rootRef.current;
    if (!root) return;

    const rect = root.getBoundingClientRect();
    const clientX = 'touches' in e ? (e as TouchEvent).touches[0]?.clientX ?? 0 : (e as MouseEvent).clientX;
    const clientY = 'touches' in e ? (e as TouchEvent).touches[0]?.clientY ?? 0 : (e as MouseEvent).clientY;

    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;

    // tilt strength
    const rotateY = (px - 0.5) * 12; // -6..6 deg
    const rotateX = (0.5 - py) * 10; // -5..5 deg

    // scale a touch-friendly bit
    const scale = 1.02;

    root.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

    // glare position (in %)
    const gx = px * 100;
    const gy = py * 100;
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(closest-side at ${gx}% ${gy}%, rgba(255,255,255,0.18), rgba(255,255,255,0.06) 10%, transparent 30%)`;
      glareRef.current.style.opacity = '1';
    }

    // parallax content move
    if (contentRef.current) {
      const max = 10;
      const tx = (px - 0.5) * max;
      const ty = (py - 0.5) * max;
      contentRef.current.style.transform = `translate(${tx}px, ${ty}px)`;
    }
  }, []);

  // reset transform on pointer leave / touch end / blur
  const reset = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    root.style.transform = '';
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
    if (contentRef.current) contentRef.current.style.transform = '';
  }, []);

  // attach pointer handlers (use effect for pointer events)
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const handlePointerMove = (ev: PointerEvent) => onPointerMove(ev);
    const handleTouchMove = (ev: TouchEvent) => onPointerMove(ev);
    const handleLeave = () => reset();

    // use pointer events when available
    root.addEventListener('pointermove', handlePointerMove);
    root.addEventListener('pointerleave', handleLeave);
    root.addEventListener('pointerup', handleLeave);

    // touch fallback
    root.addEventListener('touchmove', handleTouchMove, { passive: true });
    root.addEventListener('touchend', handleLeave);

    // keyboard accessibility: subtle lift on focus
    const handleFocus = () => {
      root.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1.02)';
    };
    const handleBlur = () => reset();

    root.addEventListener('focus', handleFocus);
    root.addEventListener('blur', handleBlur);

    return () => {
      root.removeEventListener('pointermove', handlePointerMove);
      root.removeEventListener('pointerleave', handleLeave);
      root.removeEventListener('pointerup', handleLeave);
      root.removeEventListener('touchmove', handleTouchMove as any);
      root.removeEventListener('touchend', handleLeave);
      root.removeEventListener('focus', handleFocus);
      root.removeEventListener('blur', handleBlur);
    };
  }, [onPointerMove, reset]);

  const Icon = service.icon;

  return (
    <button
      ref={rootRef}
      aria-label={`Open details for ${service.title}`}
      className="relative bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden text-left transform transition-transform will-change-transform focus:outline-none focus:ring-4 focus:ring-indigo-200"
      type="button"
      onClick={() => {
        // default behavior: scroll to contact form
        const el = document.getElementById('contact-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {/* GLARE layer */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150"
        aria-hidden
      />

      {/* Card content with slight parallax (contentRef) */}
      <div ref={contentRef} className="relative p-6 md:p-8 flex flex-col gap-4">
        {/* top: image or icon */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-slate-50 to-white/60 border border-slate-100">
            {/* Render icon component */}
            <Icon className="h-7 w-7 text-indigo-600" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-slate-900 leading-tight">{service.title}</h3>
            <p className="text-sm text-slate-500 truncate">{service.shortDesc}</p>
          </div>
        </div>

        {/* hero image (optional) */}
        {service.image && (
          <div className="relative w-full h-40 rounded-xl overflow-hidden bg-slate-100">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              className="object-contain transition-transform duration-500"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} mix-blend-multiply opacity-60`}
            />
          </div>
        )}

        {/* quick features */}
        <div className="flex flex-wrap gap-2">
          {service.features.slice(0, 3).map((f, i) => (
            <span key={i} className="px-3 py-1 bg-slate-50 text-slate-700 text-xs rounded-full border">
              {f}
            </span>
          ))}
        </div>

        {/* footer meta */}
        <div className="mt-2 flex items-center justify-between gap-4">
          <div className="flex gap-2 items-center text-xs text-slate-500">
            <span className="px-2 py-0.5 bg-slate-100 rounded-full">{service.timeline}</span>
            <span className="px-2 py-0.5 bg-slate-100 rounded-full">{service.pricing}</span>
          </div>

          <div>
            <span className="text-indigo-600 text-sm font-medium">Learn more →</span>
          </div>
        </div>
      </div>
    </button>
  );
}

/* ---------- Styles: small helpers ---------- */
const styles = `
/* small CSS overrides for smoother transforms */
button[aria-label] {
  perspective: 900px;
  backface-visibility: hidden;
}
`;

function StyleInjector() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (document.getElementById('design-eight-styles')) return;
    const s = document.createElement('style');
    s.id = 'design-eight-styles';
    s.innerHTML = styles;
    document.head.appendChild(s);
    return () => {
      const el = document.getElementById('design-eight-styles');
      if (el) el.remove();
    };
  }, []);
  return null;
}

// inject styles at top-level of this component instance
// (this component is rendered automatically when module imported)
(function mountStyleInjector() {
  // ensure injection across server/client boundaries without rendering node
  // we purposely don't export the injector — side-effect injection is okay here
  if (typeof window !== 'undefined') {
    const already = document.getElementById('design-eight-styles');
    if (!already) {
      const s = document.createElement('style');
      s.id = 'design-eight-styles';
      s.innerHTML = styles;
      document.head.appendChild(s);
    }
  }
})();
