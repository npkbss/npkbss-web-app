'use client';

import { useState, useEffect, useRef, TouchEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { testimonials } from '@/data/home';

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const autoDelay = 5000;
  const barUpdateRate = 50;

  // Swipe positions
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => {
    setFade(true);
    setTimeout(() => {
      setIndex(i => (i + 1) % testimonials.length);
      setFade(false);
    }, 300);
  };

  const prev = () => {
    setFade(true);
    setTimeout(() => {
      setIndex(i => (i - 1 + testimonials.length) % testimonials.length);
      setFade(false);
    }, 300);
  };

  // AUTOPLAY
  useEffect(() => {
    startAutoPlay();
    startProgress();
    return () => stopAll();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(next, autoDelay);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const startProgress = () => {
    stopProgress();
    setProgress(0);
    progressRef.current = setInterval(() => {
      setProgress(p => {
        if (p >= 100) return 100;
        return p + (barUpdateRate / autoDelay) * 100;
      });
    }, barUpdateRate);
  };

  const stopProgress = () => {
    if (progressRef.current) clearInterval(progressRef.current);
  };

  const stopAll = () => {
    stopAutoPlay();
    stopProgress();
  };

  // RESET progress when index changes
  useEffect(() => {
    startProgress();
  }, [index]);

  // TOUCH SWIPE HANDLERS
  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) < 50) return;
    delta > 0 ? next() : prev();
  };

  const item = testimonials[index];

  return (
    <div
      className="relative"
      onMouseEnter={stopAll}
      onMouseLeave={() => {
        startAutoPlay();
        startProgress();
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* CARD */}
      <div
        className={`bg-background rounded-2xl p-8 shadow-accent border border-border transition-all duration-300 ${
          fade ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="h-10 mb-6 relative">
          {/* <Image src={item.logo} alt={item.company} fill className="object-contain" /> */}
          <div className="text-2xl font-bold text-foreground mb-2">{testimonials[index].company}</div>
        </div>

        <blockquote className="text-lg text-foreground mb-6 py-2 md:py-0 leading-relaxed md:h-[100px] sm:max-h-auto sm:min-h-[200px] md:min-h-[100px]">
          “{item.quote}”
        </blockquote>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden relative">
            <Image src={item.image} alt={item.author} fill className="object-cover" />
          </div>
          <div>
            <div className="font-semibold">{item.author}</div>
            <div className="text-sm text-muted-foreground">
              {item.role} @ {item.company}
            </div>
          </div>
        </div>

        {/* <Link href="/case-studies" className="inline-flex items-center text-primary font-medium mt-6 hover:gap-2 transition-all">
          View more stories
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link> */}
      </div>

      {/* DOTS + PROGRESS BAR */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setFade(true);
                setTimeout(() => {
                  setIndex(i);
                  setFade(false);
                }, 300);
              }}
              className="relative h-2 w-8 rounded-full bg-border overflow-hidden"
            >
              {index === i && <div className="absolute inset-0 bg-primary transition-all duration-75" style={{ width: `${progress}%` }} />}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="icon" onClick={next} className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
