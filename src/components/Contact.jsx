import { socialLinks } from '../data/siteData';

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:none00email@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id='contact' className='py-32 relative z-10'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='max-w-xl mb-16 reveal'>
          <span className='section-label'>&#47;&#47; connect</span>
          <h2 className='text-4xl sm:text-5xl font-bold font-display text-zinc-100 mt-5 tracking-tight'>
            Let's Build Something
          </h2>
          <p className='text-zinc-500 mt-4 leading-relaxed font-body text-sm sm:text-base'>
            Have a project in mind or just want to say hi? Drop me a message.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='space-y-8 reveal reveal-delay-2'>
            <a
              href='mailto:none00email@gmail.com'
              className='flex items-center gap-5 group'
            >
              <div className='w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover:text-neon group-hover:border-neon/40 transition-all duration-300'>
                <span className='material-symbols-outlined text-xl'>mail</span>
              </div>
              <div>
                <p className='text-[10px] font-mono text-zinc-600 tracking-[0.2em] uppercase'>Email</p>
                <p className='text-sm text-zinc-300 group-hover:text-neon transition-colors font-body'>
                  none00email@gmail.com
                </p>
              </div>
            </a>

            <div className='flex items-center gap-5'>
              <div className='w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-zinc-400'>
                <span className='material-symbols-outlined text-xl'>location_on</span>
              </div>
              <div>
                <p className='text-[10px] font-mono text-zinc-600 tracking-[0.2em] uppercase'>Location</p>
                <p className='text-sm text-zinc-300 font-body'>Qazvin, Iran</p>
              </div>
            </div>

            <div className='flex gap-3 pt-2'>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-11 h-11 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center hover:bg-neon/[0.06] hover:text-neon hover:border-neon/40 transition-all duration-300 text-zinc-400'
                  aria-label={s.name}
                >
                  <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className='space-y-5 reveal reveal-delay-3'>
            <div>
              <label className='text-xs text-zinc-500 font-mono mb-1.5 block tracking-wider uppercase' htmlFor='name'>
                Your Name
              </label>
              <input id='name' type='text' placeholder='John Doe' required />
            </div>
            <div>
              <label className='text-xs text-zinc-500 font-mono mb-1.5 block tracking-wider uppercase' htmlFor='email'>
                Your Email
              </label>
              <input id='email' type='email' placeholder='john@example.com' required />
            </div>
            <div>
              <label className='text-xs text-zinc-500 font-mono mb-1.5 block tracking-wider uppercase' htmlFor='message'>
                Message
              </label>
              <textarea id='message' rows='5' placeholder='Tell me about your project...' required></textarea>
            </div>
            <button type='submit' className='btn-primary w-full'>
              Send Message
              <span className='material-symbols-outlined text-base'>send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
