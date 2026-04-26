import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/8 bg-slate-950/60 px-4 py-10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Sachin Divase</p>
          <p className="mt-2 text-sm text-slate-400">
            Backend Engineer focused on scalable APIs, performance, and dependable systems.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Sachyaaa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/30 hover:text-white"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/sachin-divase-b9b5a8229/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/30 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:divasesachin2002@gmail.com"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/30 hover:text-white"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/8 pt-6 text-sm text-slate-500">
        © {currentYear} Sachin Divase. Built with React, Tailwind CSS, Framer Motion, and a backend engineer&apos;s bias for clarity.
      </div>
    </footer>
  );
}
