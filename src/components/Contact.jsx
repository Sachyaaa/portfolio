import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, Send } from 'lucide-react';
import { contactChannels } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';

const iconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:divasesachin2002@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);

    window.setTimeout(() => {
      setSubmitted(false);
    }, 2400);
  };

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
        <SectionHeading
          eyebrow="Contact"
          title="Hiring for backend roles, API platforms, or Java product teams?"
          description="Open to backend engineering opportunities where clean API design, performance, and production ownership matter."
        />

            <div className="mt-8 rounded-[28px] border border-cyan-300/10 bg-cyan-400/8 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">Best fit</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Backend engineering roles in product companies, platform teams, and systems-focused
                environments where reliability and shipping discipline are valued.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {contactChannels.map((channel, index) => {
                const Icon = iconMap[channel.label];

                return (
                  <motion.a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="panel panel-hover flex items-center justify-between gap-4 p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{channel.label}</p>
                        <p className="mt-1 text-sm text-slate-200 sm:text-base">{channel.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="text-slate-500" size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            className="panel p-5 sm:p-6"
          >
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.06]"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.06]"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.06]"
                  placeholder="Tell me a bit about the role or opportunity."
                  required
                />
              </div>

              <div className="flex flex-col gap-4 border-t border-white/8 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-sm leading-6 text-slate-400">
                  This form opens your email client with the message prefilled.
                </p>
                <button type="submit" className="button-primary inline-flex items-center justify-center gap-2 px-5 py-3">
                  {submitted ? 'Ready to send' : 'Compose message'}
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
