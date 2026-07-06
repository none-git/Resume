export default function MobileMenu() {
  function closeMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  return (
    <div id='mobile-menu' className='fixed inset-0 z-40 bg-bg-deep/95 backdrop-blur-xl hidden'>
      <div className='flex flex-col items-center justify-center h-full gap-8'>
        <a
          href='#hero'
          onClick={closeMenu}
          className='text-2xl font-display text-zinc-400 hover:text-zinc-100 transition-colors'
        >
          Home
        </a>
        <a
          href='#skills'
          onClick={closeMenu}
          className='text-2xl font-display text-zinc-400 hover:text-zinc-100 transition-colors'
        >
          Skills
        </a>
        <a
          href='#projects-section'
          onClick={closeMenu}
          className='text-2xl font-display text-zinc-400 hover:text-zinc-100 transition-colors'
        >
          Work
        </a>
        <a
          href='#contact'
          onClick={closeMenu}
          className='text-2xl font-display text-zinc-400 hover:text-zinc-100 transition-colors'
        >
          Contact
        </a>
      </div>
    </div>
  );
}
