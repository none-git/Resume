import { useEffect, useState } from 'react';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects-section', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Listen for toggle event from Header (keeps Header's onClick clean)
  useEffect(() => {
    const onToggle = () => setOpen((o) => !o);
    window.addEventListener('mobile-menu-toggle', onToggle);
    return () => window.removeEventListener('mobile-menu-toggle', onToggle);
  }, []);

  return (
    <div
      id='mobile-menu'
      className={`fixed inset-0 z-[60] bg-bg-deep/95 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-x-full ${
        open ? 'translate-x-0' : ''
      }`}
    >
      <div className='flex justify-end p-6'>
        <button
          className='p-2 text-zinc-400 hover:text-neon transition-colors'
          onClick={() => setOpen(false)}
          aria-label='Close menu'
        >
          <span className='material-symbols-outlined text-2xl'>close</span>
        </button>
      </div>

      <nav className='flex flex-col items-center justify-center h-[calc(100%-80px)] gap-6'>
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className='group relative text-3xl font-display text-zinc-400 hover:text-neon transition-colors duration-300'
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            <span className='font-mono text-xs text-neon/50 absolute -left-8 top-2 group-hover:text-neon transition-colors'>
              0{i + 1}
            </span>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
