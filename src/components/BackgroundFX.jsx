export default function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(99,102,241,0.1),_transparent_24%),linear-gradient(180deg,_#060816_0%,_#070b1b_45%,_#050816_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)] animate-grid-flow" />
      <div className="absolute left-[8%] top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl animate-float-slow" />
      <div className="absolute right-[10%] top-[18%] h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl animate-float-delay" />
      <div className="absolute bottom-[8%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-300/10 blur-3xl animate-float-reverse" />
      <div className="noise absolute inset-0 opacity-20" />
    </div>
  );
}
