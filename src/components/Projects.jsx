import { useEffect, useRef } from 'react';
import { projects } from '../data/siteData';

export default function Projects() {
  const stickyRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!sticky || !track) return;

    const dots = sticky.querySelectorAll('.progress-dot');

    function update() {
      const sectionTop = sticky.parentElement.offsetTop;
      const sectionHeight = sticky.parentElement.offsetHeight;
      const scrollY = window.scrollY;
      const progress = Math.max(
        0,
        Math.min(1, (scrollY - sectionTop) / (sectionHeight - window.innerHeight)),
      );
      const maxTranslate = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(${-progress * maxTranslate}px)`;

      const activeIdx = Math.round(progress * (projects.length - 1));
      dots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <>
      <section className='relative z-10' style={{ background: '#08080c' }}>
        <div className='max-w-6xl mx-auto px-6 py-32'>
          <div className='max-w-xl reveal'>
            <span className='text-[10px] font-mono text-zinc-600 tracking-[0.25em] uppercase'>
              &#47;&#47; featured work
            </span>
            <h2 className='text-3xl sm:text-4xl font-bold font-display text-zinc-100 mt-4 tracking-tight'>
              Selected Projects
            </h2>
          </div>
        </div>
      </section>

      <section id='projects-section' className='relative z-10' style={{ height: '260vh' }}>
        <div id='projects-sticky' ref={stickyRef}>
          <div id='projects-track' ref={trackRef}>
            {projects.map((p, i) => (
              <div key={p.id} className='project-card' data-index={i}>
                <img src={p.imageUrl} alt={p.title} loading={i === 0 ? 'eager' : 'lazy'} />
                <div className='project-overlay'>
                  <div className='flex items-start justify-between mb-3'>
                    <h3 className='text-xl sm:text-2xl font-bold font-display text-zinc-100'>{p.title}</h3>
                    <a
                      href={p.githubUrl}
                      className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-zinc-300 shrink-0 ml-4'
                    >
                      <span className='material-symbols-outlined text-lg'>code</span>
                    </a>
                  </div>
                  <p className='text-sm text-zinc-400 max-w-lg mb-4 font-body'>{p.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className='text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/10'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20'>
            {projects.map((_, i) => (
              <div key={i} className='progress-dot' data-index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
