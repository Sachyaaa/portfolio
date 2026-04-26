import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Layers3 } from 'lucide-react';
import { projects } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Project work that reinforces backend depth."
          description="A focused backend project, presented around architecture, operational readiness, and implementation quality."
        />

        <div className="mt-12 grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <TiltCard className="panel panel-hover overflow-hidden">
                <div className="grid gap-5 p-6 sm:p-7">
                  <div className="grid gap-5 lg:grid-cols-[1.28fr_0.72fr]">
                    <div className="rounded-[24px] border border-white/8 bg-slate-950/45 p-5 sm:p-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-100">
                        <Layers3 size={14} />
                        {project.type}
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold text-white sm:text-[1.85rem]">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                        {project.description}
                      </p>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {project.highlights?.map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300"
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 border-t border-white/8 pt-5">
                        <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/70">
                          What stands out
                        </p>
                        <ul className="mt-4 space-y-3">
                          {project.outcomes.map((outcome) => (
                            <li key={outcome} className="text-sm leading-6 text-slate-300">
                              {outcome}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="button-secondary inline-flex items-center gap-2 px-4 py-2.5 text-sm"
                          >
                            <Github size={16} />
                            GitHub
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-1 py-2 text-sm font-medium text-slate-300 hover:text-white"
                          >
                            View Details
                            <ArrowUpRight size={16} />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                      <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/70">Stack</p>
                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
