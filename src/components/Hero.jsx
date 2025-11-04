import { Printer, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* CMYK tone ribbons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-40 bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-20 left-0 right-0 h-40 bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-40 left-0 right-0 h-40 bg-yellow-400/30 blur-3xl" />
        <div className="absolute top-60 left-0 right-0 h-40 bg-black/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Printer className="h-4 w-4 text-neutral-800 dark:text-neutral-100" />
            Greener prints, cleaner planet
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Recycle Printer & Toner Cartridges
            <span className="block bg-gradient-to-r from-cyan-500 via-fuchsia-500 via-50% to-yellow-400 bg-clip-text text-transparent">
              with Color-Combined Sustainability
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            We collect, sort, and remanufacture cartridges to keep plastic and e‑waste
            out of landfills. Easy pickups for homes and businesses.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/30 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
            >
              Schedule a pickup
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg bg-white/80 dark:bg-white/10 px-5 py-3 text-sm font-medium shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            >
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
