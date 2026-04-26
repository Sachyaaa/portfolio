import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const onScroll = () => {
      const scrollPosition = window.scrollY + 160;

      setScrolled(window.scrollY > 18);

      const currentSection = sections.find((section, index) => {
        const sectionTop = section.offsetTop;
        const nextSectionTop =
          sections[index + 1]?.offsetTop ?? Number.POSITIVE_INFINITY;

        return scrollPosition >= sectionTop && scrollPosition < nextSectionTop;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (window.scrollY < 120) {
        setActiveSection('home');
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all sm:px-6 ${
          scrolled
            ? 'border-white/10 bg-slate-950/75 shadow-[0_20px_60px_rgba(5,8,22,0.45)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-white/5 text-sm font-semibold text-cyan-100">
            SD
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-wide text-white">Sachin Divase</p>
            <p className="text-xs text-slate-400">Backend Engineer</p>
          </div>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive ? (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 -z-0 rounded-full bg-white/8"
                  />
                ) : null}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="button-secondary px-4 py-2 text-sm">
            Let's Talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-[0_20px_60px_rgba(5,8,22,0.45)] backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    activeSection === item.id
                      ? 'bg-white/8 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
