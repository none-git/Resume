import { skillCategories } from '../data/siteData';

export default function Skills() {
  return (
    <section id='skills' className='py-32 relative z-10'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='max-w-xl mb-20 reveal'>
          <span className='text-[10px] font-mono text-zinc-600 tracking-[0.25em] uppercase'>
            &#47;&#47; capabilities
          </span>
          <h2 className='text-3xl sm:text-4xl font-bold font-display text-zinc-100 mt-4 tracking-tight'>
            What I Do
          </h2>
          <p className='text-zinc-500 mt-4 leading-relaxed font-body text-sm sm:text-base'>
            I build end-to-end digital products with modern technologies, from responsive frontends to
            scalable backends.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {skillCategories.map((cat) => (
            <div key={cat.title} className='skill-card reveal'>
              <div className='flex items-center gap-3 mb-5'>
                <div className='w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-zinc-400'>
                  <span className='material-symbols-outlined text-xl'>{cat.icon}</span>
                </div>
                <h3 className='text-base font-bold font-display text-zinc-200'>{cat.title}</h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className='text-[11px] text-zinc-500 bg-white/[0.03] px-3 py-1.5 rounded-md border border-white/[0.05]'
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
