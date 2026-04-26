import { motion } from 'framer-motion';
import { BrainCircuit, Database, ShieldCheck, Workflow } from 'lucide-react';
import profileImage from '../assets/profile.jpeg';

const principles = [
  {
    icon: BrainCircuit,
    title: 'Systems Thinking',
    description: 'I care about the contract between services, data flows, edge cases, and long-term maintainability.',
  },
  {
    icon: Database,
    title: 'Performance Awareness',
    description: 'I actively look for bottlenecks in query patterns, API behavior, and backend response time.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability Mindset',
    description: 'Testing, incident response, and release confidence are part of the engineering job, not extras.',
  },
  {
    icon: Workflow,
    title: 'Product Delivery',
    description: 'I work across the SDLC with enough rigor to support product teams, stakeholders, and production systems.',
  },
];

const aboutStats = [
  '2.5+ Years',
  'Backend Engineer',
  'Bangalore, India',
  'Open to Opportunities',
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_420px] xl:gap-14">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
            >
              <p className="eyebrow">About</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                A backend engineer who prefers durable systems over flashy complexity.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="mt-8"
            >
              <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
                <p>
                  I am <span className="font-semibold text-white">Sachin Divase</span>, a backend
                  engineer with <span className="font-semibold text-cyan-200">2.5+ years of experience</span>
                  {' '}building enterprise backend systems using{' '}
                  <span className="font-semibold text-white">Java</span> and{' '}
                  <span className="font-semibold text-white">Spring Boot</span>. At Deloitte, I have
                  worked on financial systems for Vanguard where correctness, reliability, and
                  performance matter every day.
                </p>
                <p>
                  My focus is <span className="font-semibold text-white">backend product engineering</span>:
                  REST and GraphQL APIs, reactive services, database optimization, unit testing
                  discipline, and operational ownership when things break in production.
                </p>
                <p>
                  I like systems that are{' '}
                  <span className="font-semibold text-cyan-100">easy to reason about</span>, easy to
                  extend, and boring in the best possible way.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/75">
                  Core stack
                </p>
                <div className="mt-4 flex max-w-xl flex-wrap gap-3">
                  {['Java', 'Spring Boot', 'WebFlux', 'GraphQL', 'PostgreSQL', 'Docker'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="space-y-5"
          >
            <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-2 shadow-[0_24px_80px_rgba(5,8,22,0.34)] backdrop-blur-xl transition duration-300 hover:border-cyan-300/20 hover:bg-white/[0.06]">
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/60">
                <img
                  src={profileImage}
                  alt="Sachin Divase"
                  className="h-[360px] w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="panel px-5 py-4 sm:px-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {aboutStats.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/75">
                Focus
              </p>
              <div className="mt-4 space-y-3">
                {[
                  'API design and backend product delivery',
                  'Performance, testing, and maintainable services',
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
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="panel panel-hover p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
