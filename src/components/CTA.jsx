import { Mail, Phone, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-yellow-400/10" />
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-8 sm:p-12 shadow-xl backdrop-blur">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">Ready to recycle your cartridges?</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-xl">
              Book a pickup or drop‑off. We’ll get back to you in minutes during business hours.
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a href="mailto:recycle@tonerloop.com" className="inline-flex items-center gap-2 hover:underline">
                <Mail className="h-4 w-4" /> recycle@tonerloop.com
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 hover:underline">
                <Phone className="h-4 w-4" /> +1 (234) 567‑890
              </a>
              <p className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Nationwide service • Local hubs in major cities
              </p>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = Object.fromEntries(new FormData(form).entries());
                alert(`Thanks, ${data.name || "there"}! We'll contact you at ${data.email || "your email"}.`);
              }}
              className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/10 p-4 sm:p-6 shadow"
            >
              <div className="grid grid-cols-1 gap-3">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-neutral-300/70 dark:border-white/10 bg-white/80 dark:bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-lg border border-neutral-300/70 dark:border-white/10 bg-white/80 dark:bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500"
                  required
                />
                <input
                  name="zip"
                  type="text"
                  placeholder="ZIP / Postcode"
                  className="w-full rounded-lg border border-neutral-300/70 dark:border-white/10 bg-white/80 dark:bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/30 dark:bg-white dark:text-neutral-900"
                >
                  Get pickup options
                </button>
              </div>
              <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                We’ll never share your info. By submitting, you agree to be contacted about recycling services.
              </p>
            </form>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-neutral-500">© {new Date().getFullYear()} TonerLoop Recycling. All rights reserved.</p>
      </div>
    </section>
  );
}
