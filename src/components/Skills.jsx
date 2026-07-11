import { skillCategories } from '../data/siteData';

export default function Skills() {
  return (
    <section id='skills' className='py-32 relative z-10'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='max-w-xl mb-16 reveal'>
          <span className='section-label'>&#47;&#47; capabilities</span>
          <h2 className='text-4xl sm:text-5xl font-bold font-display text-zinc-100 mt-5 tracking-tight'>
            What I Do
          </h2>
          <p className='text-zinc-500 mt-4 leading-relaxed font-body text-sm sm:text-base'>
            I build end-to-end digital products with modern technologies, from responsive frontends to
            scalable backends.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {skillCategories.map((cat, idx) => (
            <div key={cat.title} className={`glass-card reveal reveal-delay-${idx + 1}`}>
              <div className='flex items-center gap-3 mb-6'>
                <div className='relative w-10 h-10 rounded-lg bg-neon/[0.06] border border-neon/10 flex items-center justify-center text-neon transition-all duration-300'>
                  <span className='material-symbols-outlined text-xl'>{cat.icon}</span>
                </div>
                <h3 className='text-lg font-bold font-display text-zinc-100'>{cat.title}</h3>
                <span className='ml-auto font-mono text-[10px] text-zinc-600'>
                  0{idx + 1}
                </span>
              </div>
              <div className='flex flex-wrap gap-2'>
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className='text-[11px] font-mono text-zinc-400 bg-white/[0.02] px-3 py-1.5 rounded-md border border-white/[0.06] hover:border-neon/40 hover:text-neon hover:bg-neon/[0.04] transition-all duration-300'
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
