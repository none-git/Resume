import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/siteData';

function CountUp({ end, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();
            const animate = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // easeOutExpo for a satisfying deceleration
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              setCount(Math.round(eased * end));
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className='tabular-nums'>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className='relative z-10 py-20'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {stats.map((stat, idx) => (
            <div key={stat.label} className={`glass-card text-center reveal reveal-delay-${idx + 1} group`}>
              <div className='flex items-center justify-center mb-4'>
                <span className='material-symbols-outlined text-2xl text-neon/70 group-hover:text-neon transition-colors duration-300'>
                  {stat.icon}
                </span>
              </div>
              <div
                className='text-4xl sm:text-5xl font-bold font-display text-zinc-100 tracking-tight'
                style={{ textShadow: '0 0 24px rgba(194, 247, 62, 0.25)' }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className='mt-2 text-[11px] font-mono text-zinc-500 tracking-wider uppercase'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
