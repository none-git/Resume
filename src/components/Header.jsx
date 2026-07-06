import { useEffect, useRef } from 'react';

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.style.borderBottom =
            window.scrollY > 50 ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent';
          header.style.background = window.scrollY > 50 ? 'rgba(8,8,12,0.75)' : 'transparent';
          header.style.backdropFilter = window.scrollY > 50 ? 'blur(20px)' : 'blur(0px)';
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header ref={headerRef} id='header' className='fixed top-0 z-50 w-full transition-all duration-500'>
      <div className='max-w-6xl mx-auto px-6 py-5 flex items-center justify-between'>
        <a href='#hero' className='flex items-center gap-3 group'>
          <div className='w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 transition-all'>
            <span className='material-symbols-outlined text-base text-zinc-400 group-hover:text-zinc-200'>
              code
            </span>
          </div>
          <span className='text-base font-bold tracking-tight font-display text-zinc-200'>None</span>
        </a>
        <nav className='hidden md:flex items-center gap-8'>
          <a href='#hero' className='text-sm text-zinc-500 hover:text-zinc-200 transition-colors'>
            Home
          </a>
          <a href='#skills' className='text-sm text-zinc-500 hover:text-zinc-200 transition-colors'>
            Skills
          </a>
          <a href='#projects-section' className='text-sm text-zinc-500 hover:text-zinc-200 transition-colors'>
            Work
          </a>
          <a href='#contact' className='text-sm text-zinc-500 hover:text-zinc-200 transition-colors'>
            Contact
          </a>
        </nav>
        <button
          id='menu-toggle'
          className='md:hidden p-2 text-zinc-500 hover:text-zinc-200 transition-colors'
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            if (menu) {
              menu.classList.toggle('hidden');
              document.body.style.overflow = menu.classList.contains('hidden') ? '' : 'hidden';
            }
          }}
        >
          <span className='material-symbols-outlined'>menu</span>
        </button>
      </div>
    </header>
  );
}
