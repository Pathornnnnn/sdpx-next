const navItems = ['Overview', 'Inventory', 'Reports'];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_60%)]">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-lg font-semibold tracking-wide text-white">
            LabFlow
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="flex flex-1 items-center">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm text-sky-300">
              University Lab Equipment Tracking
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Keep every instrument visible, checked, and ready.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              LabFlow helps departments track equipment usage, maintenance status, and availability in one clean workspace.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-sky-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
              >
                Explore service
              </a>
              <a
                href="#"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                View demo
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-medium text-white">Main feature preview</h2>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs text-emerald-300">
                Live
              </span>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl border border-slate-800 bg-slate-800/70 p-4">
                <p className="text-sm text-slate-400">Inventory overview</p>
                <p className="mt-1 text-xl font-semibold text-white">124 devices tracked</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-800/70 p-4">
                <p className="text-sm text-slate-400">Upcoming maintenance</p>
                <p className="mt-1 text-xl font-semibold text-white">8 items due this week</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-800/70 p-4">
                <p className="text-sm text-slate-400">Availability status</p>
                <p className="mt-1 text-xl font-semibold text-white">89% in service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
