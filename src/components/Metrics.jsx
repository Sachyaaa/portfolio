import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { metrics } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';

function Counter({ value }) {
  const [displayValue, setDisplayValue] = useState('0');
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.5 });

  const parsedValue = useMemo(() => {
    const number = Number.parseFloat(value.replace(/[^0-9.]/g, ''));
    const prefix = value.match(/^[^0-9]+/)?.[0] ?? '';
    const suffix = value.replace(/[0-9.]/g, '');

    return { number, prefix, suffix, decimals: value.includes('.') ? 1 : 0 };
  }, [value]);

  useEffect(() => {
    if (!isInView || Number.isNaN(parsedValue.number)) {
      return undefined;
    }

    const duration = 1000;
    const start = performance.now();

    const updateValue = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const nextValue = parsedValue.number * progress;
      setDisplayValue(
        `${parsedValue.prefix}${nextValue.toFixed(parsedValue.decimals)}${parsedValue.suffix}`,
      );

      if (progress < 1) {
        window.requestAnimationFrame(updateValue);
      }
    };

    const frame = window.requestAnimationFrame(updateValue);
    return () => window.cancelAnimationFrame(frame);
  }, [isInView, parsedValue]);

  return (
    <span ref={counterRef} className="text-4xl font-semibold tracking-tight text-white">
      {isInView ? displayValue : `0${parsedValue.suffix}`}
    </span>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="section-shell">
      <div className="section-container">
        <SectionHeading
          eyebrow="Impact"
          title="Execution quality you can measure."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <TiltCard className="panel panel-hover h-full p-6">
                <Counter value={item.value} />
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/80">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{item.detail}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
