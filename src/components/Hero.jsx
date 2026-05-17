import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { heroRotatingTitles, heroTrustItems, socialLinks } from '../data/portfolio';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTitleIndex((current) => (current + 1) % heroRotatingTitles.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="section-shell pt-6 sm:pt-10">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.9)]" />
              Open to backend engineering opportunities
            </div>

            <p className="mt-8 text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/80">
              Backend Engineer / Java Developer
            </p>

            <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[4.65rem]">
              Backend systems that stay fast, reliable, and production-ready as products scale.
            </h1>

            <div className="mt-7 flex min-h-10 flex-wrap items-center gap-3 text-lg text-slate-300 sm:flex-nowrap sm:text-xl">
              <Sparkles className="text-cyan-300" size={18} />
              <span className="shrink-0 text-slate-400">Currently focused on</span>
              <span className="relative inline-flex min-h-8 min-w-[16rem] items-center sm:min-w-[18rem]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={heroRotatingTitles[titleIndex]}
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.35 }}
                    className="text-gradient absolute whitespace-nowrap font-medium"
                  >
                    {heroRotatingTitles[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Sachin Divase is a backend engineer with 2.5+ years of experience delivering APIs,
              measurable performance gains, and production reliability for enterprise financial
              platforms at Deloitte. He brings a backend-first mindset across Java, Spring Boot,
              GraphQL, data systems, and release-quality engineering practices.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#projects" className="button-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold">
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="/resume_v4.pdf"
                download
                className="button-secondary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold"
              >
                Download Resume
                <Download size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-slate-300 hover:text-white">
                Contact
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {heroTrustItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-4 backdrop-blur"
                >
                  <p className="text-xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              {socialLinks.map((item) => {
                const icon =
                  item.label === 'GitHub' ? <Github size={16} /> : item.label === 'LinkedIn' ? <Linkedin size={16} /> : <Mail size={16} />;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:border-cyan-300/30 hover:bg-white/8 hover:text-white"
                  >
                    {icon}
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="panel relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/70">Snapshot</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Engineering profile</p>
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                  Bangalore / India
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {[
                  ['Primary stack', 'Java, Spring Boot, Spring WebFlux'],
                  ['Platform focus', 'APIs, microservices, production support'],
                  ['Data systems', 'PostgreSQL, MySQL, query optimization'],
                  ['Quality bar', '90%+ coverage, incident ownership, SDLC discipline'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200 sm:text-base">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-cyan-300/10 bg-slate-950/70 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/80">Proof points</p>
                <div className="mt-4 space-y-3">
                  {[
                    'Built 10+ REST and GraphQL APIs for enterprise workflows.',
                    'Improved database latency by 25% through optimization work.',
                    'Handled P1/P2 production incidents with reliability-focused ownership.',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
