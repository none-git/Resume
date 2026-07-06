export default function Footer() {
  return (
    <footer className='border-t border-border-subtle py-8 relative z-10'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3'>
        <div className='flex items-center gap-2'>
          <span className='font-display text-sm font-bold text-zinc-400'>&lt;None&#47;&gt;</span>
        </div>
        <p className='text-xs text-zinc-600 font-body'>
          &copy; {new Date().getFullYear()} None. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
