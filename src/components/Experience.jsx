import { motion } from 'framer-motion';
import { BadgeCheck, BriefcaseBusiness, Building2, ShieldCheck, TrendingUp } from 'lucide-react';
import { awards, experienceItems } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Enterprise backend experience with measurable delivery outcomes."
          description="The Deloitte work is positioned here as practical product engineering experience, not generic employment history."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.42fr]">
          <div className="relative pl-6 sm:pl-10">
            <div className="absolute left-2 top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-cyan-300/70 via-white/20 to-transparent sm:left-4" />

            <div className="space-y-8">
              {experienceItems.map((item, index) => (
                (() => {
                  const isFeatured = index === 0;

                  return (
                    <motion.article
                      key={`${item.company}-${item.role}`}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.22 }}
                      transition={{ duration: 0.55, delay: index * 0.08 }}
                      className={`relative overflow-hidden rounded-[30px] border p-6 shadow-[0_24px_80px_rgba(5,8,22,0.32)] backdrop-blur-xl sm:p-7 ${
                        isFeatured
                          ? 'border-cyan-300/15 bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(255,255,255,0.04))]'
                          : 'border-white/10 bg-white/[0.045]'
                      }`}
                    >
                      {isFeatured ? (
                        <>
                          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-100">
                            Featured Experience
                          </div>
                        </>
                      ) : null}

                      <div className="absolute -left-[2.15rem] top-8 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950 text-cyan-200 sm:-left-[3.05rem]">
                        <BriefcaseBusiness size={16} />
                      </div>

                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/70">{item.company}</p>
                          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-[1.75rem]">{item.role}</h3>
                          <p className="mt-2 text-sm text-slate-400">{item.client}</p>
                        </div>
                        <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
                          {item.period}
                        </span>
                      </div>

                      <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">{item.summary}</p>

                      {!isFeatured ? (
                        <div className="mt-6 flex flex-wrap gap-3">
                          {item.metrics?.map((metric) => (
                            <span
                              key={metric}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-slate-300"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      {isFeatured ? (
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                          {[
                            {
                              icon: TrendingUp,
                              label: 'Performance',
                              value: '25% faster database response',
                            },
                            {
                              icon: ShieldCheck,
                              label: 'Quality',
                              value: '90%+ test coverage maintained',
                            },
                            {
                              icon: Building2,
                              label: 'Environment',
                              value: 'Enterprise-scale financial platform',
                            },
                          ].map((entry) => {
                            const Icon = entry.icon;

                            return (
                              <div
                                key={entry.label}
                                className="rounded-2xl border border-white/8 bg-white/[0.035] p-4"
                              >
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200">
                                  <Icon size={18} />
                                </div>
                                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">
                                  {entry.label}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-200">{entry.value}</p>
                              </div>
                            );
                          })}
                        </div>
                      ) : null}

                      <ul className="mt-6 grid gap-3">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base">
                            <BadgeCheck className="mt-1 shrink-0 text-cyan-200" size={16} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  );
                })()
              ))}
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="space-y-5"
          >
            <div className="panel p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/70">Operating context</p>
              <div className="mt-5 grid gap-4">
                {[
                  'Global asset management platform with enterprise reliability expectations.',
                  'Hands-on backend ownership across implementation, testing, and incident response.',
                  'REST, GraphQL, and database optimization work in a production-facing environment.',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/70">Recognition</p>
              <div className="mt-5 flex flex-col gap-3">
                {awards.map((award) => (
                  <div key={award} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
                    {award}
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
