import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="font-inter text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Designed for clarity</h2>
              <p className="mt-4 text-neutral-600">
                A minimalist experience inspired by Webflow aesthetics: generous spacing, crisp typography, and focused content. No noise—just a smooth path to schedule a pickup and keep cartridges out of landfills.
              </p>
            </div>
          </div>
        </section>
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} EcoCartridge. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
