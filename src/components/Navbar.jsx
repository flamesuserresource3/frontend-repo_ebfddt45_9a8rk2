import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/20 bg-white/50 px-4 py-2 backdrop-blur-md">
          <a href="#top" className="font-semibold tracking-tight text-neutral-900">EcoCartridge</a>
          <nav className="hidden gap-8 text-sm text-neutral-700 md:flex">
            <a href="#about" className="transition-colors hover:text-neutral-900">About</a>
            <a href="#benefits" className="transition-colors hover:text-neutral-900">Benefits</a>
            <a href="#contact" className="transition-colors hover:text-neutral-900">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
