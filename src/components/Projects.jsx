import { projects } from '../data/siteData';

export default function Projects() {
  return (
    <section id='projects-section' className='relative z-10 py-32'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='max-w-xl mb-16 reveal'>
          <span className='section-label'>&#47;&#47; featured work</span>
          <h2 className='text-4xl sm:text-5xl font-bold font-display text-zinc-100 mt-5 tracking-tight'>
            Selected Projects
          </h2>
          <p className='text-zinc-500 mt-4 leading-relaxed font-body text-sm sm:text-base max-w-md'>
            A collection of things I've built — from social platforms to games and landing pages.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {projects.map((p, i) => (
            <article key={p.id} className={`project-card reveal reveal-delay-${(i % 3) + 1}`} data-index={i}>
              <div className='project-media'>
                <span className='project-badge'>Project / 0{i + 1}</span>
                <a
                  href={p.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='project-link'
                  aria-label={`View ${p.title} on GitHub`}
                >
                  <svg className='w-[18px] h-[18px] fill-current' viewBox='0 0 24 24'>
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                </a>
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  className='object-top'
                />
              </div>

              <div className='project-body'>
                <h3 className='text-xl font-bold font-display text-zinc-100 tracking-tight'>{p.title}</h3>
                <p className='text-sm text-zinc-500 mt-2 leading-relaxed font-body'>{p.description}</p>
                <div className='flex flex-wrap gap-2 mt-4'>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className='text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-400 border border-white/[0.06]'
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
