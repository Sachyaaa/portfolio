import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed left-0 right-0 top-0 z-[60] h-px bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-300 shadow-[0_0_18px_rgba(56,189,248,0.45)]"
    />
  );
}
