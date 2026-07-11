import { useEffect, useRef, useState } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects-section', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const headerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Header background on scroll
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50;
          header.style.borderBottom = scrolled
            ? '1px solid rgba(194, 247, 62, 0.08)'
            : '1px solid transparent';
          header.style.background = scrolled ? 'rgba(6, 6, 8, 0.7)' : 'transparent';
          header.style.backdropFilter = scrolled ? 'blur(20px)' : 'blur(0px)';
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={headerRef} id='header' className='fixed top-0 z-50 w-full transition-all duration-500'>
      <div className='max-w-6xl mx-auto px-6 py-5 flex items-center justify-between'>
        <a href='#hero' className='flex items-center gap-3 group' aria-label='Home'>
          <div className='relative w-9 h-9 rounded-lg bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover:border-neon/40 transition-all duration-300'>
            <span className='material-symbols-outlined text-base text-zinc-400 group-hover:text-neon transition-colors duration-300'>
              code
            </span>
            <span className='absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500' style={{ boxShadow: '0 0 20px rgba(194, 247, 62, 0.25)' }} />
          </div>
          <span className='text-base font-bold tracking-tight font-display text-zinc-200 group-hover:text-white transition-colors'>
            None
          </span>
        </a>

        <nav className='hidden md:flex items-center gap-1'>
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id || (id === 'projects-section' && activeSection === '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm transition-colors duration-300 ${
                  isActive ? 'text-neon' : 'text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className='absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1 h-1 rounded-full bg-neon'
                    style={{ boxShadow: '0 0 8px rgba(194, 247, 62, 0.8)' }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <a
          href='#contact'
          className='hidden md:inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-neon border border-border-default hover:border-neon/40 rounded-lg px-4 py-2 transition-all duration-300'
        >
          <span className='w-1.5 h-1.5 rounded-full bg-neon animate-pulse-glow' style={{ boxShadow: '0 0 8px rgba(194, 247, 62, 0.8)' }} />
          Available
        </a>

        <button
          id='menu-toggle'
          className='md:hidden p-2 text-zinc-400 hover:text-neon transition-colors'
          onClick={() => window.dispatchEvent(new CustomEvent('mobile-menu-toggle'))}
          aria-label='Open menu'
        >
          <span className='material-symbols-outlined'>menu</span>
        </button>
      </div>
    </header>
  );
}
