import Hero from "./components/Hero";
import Features from "./components/Features";
import Process from "./components/Process";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <header className="sticky top-0 z-30 border-b border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-950/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-500 via-fuchsia-500 to-yellow-400" />
            <span className="font-semibold">TonerLoop Recycling</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:underline">Benefits</a>
            <a href="#process" className="hover:underline">Process</a>
            <a href="#cta" className="rounded-lg bg-neutral-900 text-white px-3 py-1.5 text-sm font-medium hover:bg-neutral-800 dark:bg-white dark:text-neutral-900">Recycle now</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="process">
          <Process />
        </div>
        <Features />
        <CTA />
      </main>
    </div>
  );
}

export default App;
