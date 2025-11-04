import { Recycle, Shield, Leaf, Truck } from "lucide-react";

const features = [
  {
    title: "Certified Recycling",
    description:
      "We comply with industry and environmental standards, ensuring cartridges are responsibly processed.",
    icon: Recycle,
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    title: "Data-Safe Disposals",
    description:
      "Printer memory is wiped and destroyed where applicable. Your information stays safe.",
    icon: Shield,
    color: "from-fuchsia-500/20 to-fuchsia-500/5",
  },
  {
    title: "Lower Carbon Footprint",
    description:
      "Refill and remanufacture to reduce raw plastic and CO₂. Better for the planet and your budget.",
    icon: Leaf,
    color: "from-yellow-400/30 to-yellow-400/10",
  },
  {
    title: "Fast Pickup & Logistics",
    description:
      "Doorstep pickup for homes and scheduled business collections with tracking.",
    icon: Truck,
    color: "from-black/20 to-black/5",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why choose us</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          A color-driven approach inspired by CMYK. We blend sustainability with reliability.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, description, icon: Icon, color }) => (
          <div
            key={title}
            className={`group rounded-2xl border border-neutral-200 dark:border-white/10 bg-gradient-to-b ${color} p-6 transition shadow-sm hover:shadow-md`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 dark:bg-white/10 shadow">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
