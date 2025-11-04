import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* subtle gradient to ensure text readability; allow interaction with Spline */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl md:text-6xl">
          Minimal, sustainable cartridge recycling
        </h1>
        <p className="mt-5 max-w-xl text-base text-neutral-700 sm:text-lg">
          We collect and recycle printer cartridges with a clean, efficient service focused on impact and simplicity.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-white transition hover:bg-neutral-800">
            Schedule a pickup
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href="#benefits" className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-neutral-900 transition hover:bg-neutral-50">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
