import React from 'react';
import { Shield, Leaf, Clock } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Secure & compliant',
    desc: 'Certified handling and traceable disposal for peace of mind.'
  },
  {
    icon: Leaf,
    title: 'Low-impact logistics',
    desc: 'Optimized routes and partners to minimize carbon footprint.'
  },
  {
    icon: Clock,
    title: 'Fast turnaround',
    desc: 'Simple scheduling with quick pickups that respect your time.'
  }
];

export default function Features() {
  return (
    <section id="benefits" className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">What you get</h2>
          <p className="mt-4 text-neutral-600">Focused benefits that matter, without the clutter.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 bg-white p-8 transition hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white">
                <Icon className="h-5 w-5 text-neutral-900" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-neutral-900">{title}</h3>
              <p className="mt-2 text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
