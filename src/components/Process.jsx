const steps = [
  {
    title: "Book Pickup",
    text: "Tell us what you have — inkjet, laser, toner — and choose a convenient time.",
    color: "bg-cyan-500",
  },
  {
    title: "Collect & Sort",
    text: "We collect on schedule and sort by model and condition at our facility.",
    color: "bg-fuchsia-500",
  },
  {
    title: "Reuse or Recycle",
    text: "Good units are remanufactured; the rest are responsibly recycled.",
    color: "bg-yellow-400 text-black",
  },
  {
    title: "Report & Rewards",
    text: "Receive a diversion report and earn credits for future refills.",
    color: "bg-black",
  },
];

export default function Process() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            A simple, transparent path from your desk to a cleaner planet.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-sm">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-white ${s.color}`}>
                <span className="font-semibold">{i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
