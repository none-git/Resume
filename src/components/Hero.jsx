export default function Hero() {
  return (
    <section id='hero' className='relative min-h-screen flex items-center' style={{ paddingTop: '80px' }}>
      <div className='max-w-6xl mx-auto px-6 w-full relative z-10'>
        <div className='max-w-3xl'>
          <div className='mb-6 reveal flex items-center gap-3'>
            <span className='w-2 h-2 rounded-full bg-neon animate-pulse-glow' style={{ boxShadow: '0 0 12px rgba(194, 247, 62, 0.9)' }} />
            <span className='text-xs font-mono text-zinc-500 tracking-[0.25em] uppercase'>
              &lt;hello_world /&gt;
            </span>
          </div>

          <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold font-display text-zinc-100 leading-[1.0] tracking-tighter reveal reveal-delay-1'>
            I'm{' '}
            <span
              className='glitch text-neon'
              data-text='None'
              style={{ textShadow: '0 0 30px rgba(194, 247, 62, 0.4)' }}
            >
              None
            </span>
          </h1>

          <div className='flex items-center gap-3 mt-4 reveal reveal-delay-1'>
            <span className='h-px flex-1 max-w-[60px] bg-gradient-to-r from-neon to-transparent' />
            <span className='text-2xl sm:text-3xl lg:text-4xl text-zinc-400 font-light font-display tracking-tight'>
              Full-Stack Developer
            </span>
          </div>

          <p className='text-base sm:text-lg text-zinc-500 max-w-lg mt-8 leading-relaxed reveal reveal-delay-2 font-body'>
            I craft digital experiences with clean code and thoughtful design. Specializing in building
            products that live at the intersection of form and function.
          </p>

          <div className='flex flex-wrap gap-3 mt-10 reveal reveal-delay-3'>
            <a href='#projects-section' className='btn-primary'>
              View Projects
              <span className='material-symbols-outlined text-base'>arrow_forward</span>
            </a>
            <a href='#contact' className='btn-outline'>
              Get in Touch
            </a>
          </div>

          {/* Tech ticker / status row */}
          <div className='mt-16 reveal reveal-delay-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-600'>
            <span className='flex items-center gap-2'>
              <span className='material-symbols-outlined text-sm text-neon/70'>terminal</span>
              {`> whoami`}
            </span>
            <span className='text-zinc-700'>|</span>
            <span>Node.js · React · TypeScript</span>
            <span className='text-zinc-700'>|</span>
            <span className='text-neon/60'>Qazvin, IR</span>
          </div>
        </div>
      </div>

      <div className='scroll-indicator'>
        <span>Scroll</span>
        <div className='line'></div>
      </div>
    </section>
  );
}
