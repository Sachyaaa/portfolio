import { motion } from 'framer-motion';
import { Blocks, Braces, DatabaseZap, TestTubeDiagonal } from 'lucide-react';
import { skillGroups } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';

const iconMap = [Blocks, Braces, DatabaseZap, TestTubeDiagonal];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="A backend stack shaped around APIs, data, and delivery discipline."
          description="Designed for recruiter skim-speed: each category shows where I can contribute quickly on backend product teams."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[index % iconMap.length];

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <TiltCard className="panel panel-hover h-full p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200">
                      <Icon size={22} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{group.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/8 pt-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Core tools</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
