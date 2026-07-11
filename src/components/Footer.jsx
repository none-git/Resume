export default function Footer() {
  return (
    <footer className='relative z-10 border-t border-neon/[0.08] py-10'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4'>
        <div className='flex items-center gap-3'>
          <span className='w-1.5 h-1.5 rounded-full bg-neon animate-pulse-glow' style={{ boxShadow: '0 0 8px rgba(194, 247, 62, 0.8)' }} />
          <span className='font-mono text-sm text-zinc-400'>&lt;None&#47;&gt;</span>
        </div>

        <a
          href='#hero'
          className='group flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-neon transition-colors'
        >
          Back to top
          <span className='material-symbols-outlined text-sm group-hover:-translate-y-0.5 transition-transform'>
            arrow_upward
          </span>
        </a>

        <p className='text-xs text-zinc-600 font-mono'>
          &copy; {new Date().getFullYear()} None. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
