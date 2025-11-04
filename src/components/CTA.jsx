import React, { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // In a future iteration we can connect this to the backend.
    alert(`Thanks! We will reach out to ${email}.`);
    setEmail('');
  };

  return (
    <section id="contact" className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Ready to recycle smarter?</h2>
          <p className="mt-4 text-neutral-600">Leave your email and we’ll help you schedule a pickup.</p>
        </div>
        <form onSubmit={onSubmit} className="mx-auto mt-10 flex max-w-xl gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 rounded-full border border-neutral-200 bg-white px-5 py-3 outline-none ring-0 transition placeholder:text-neutral-400 focus:border-neutral-300"
            aria-label="Email address"
          />
          <button type="submit" className="rounded-full bg-neutral-900 px-6 py-3 text-white transition hover:bg-neutral-800">Get in touch</button>
        </form>
      </div>
    </section>
  );
}
