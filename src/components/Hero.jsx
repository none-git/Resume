export default function Hero() {
  return (
    <section id='hero' className='relative min-h-screen flex items-center' style={{ paddingTop: '80px' }}>
      <div className='max-w-6xl mx-auto px-6 w-full relative z-10'>
        <div className='max-w-3xl'>
          <div className='mb-4 reveal'>
            <span className='text-xs font-mono text-zinc-600 tracking-[0.2em] uppercase'>
              &lt;hello_world /&gt;
            </span>
          </div>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-zinc-100 leading-[1.05] tracking-tight reveal reveal-delay-1'>
            I'm <span className='text-accent'>None</span>
            <br />
            <span className='text-3xl sm:text-4xl lg:text-5xl text-zinc-400 font-normal'>
              Full-Stack Developer
            </span>
          </h1>
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
        </div>
      </div>
      <div className='scroll-indicator'>
        <span>Scroll</span>
        <div className='line'></div>
      </div>
    </section>
  );
}
