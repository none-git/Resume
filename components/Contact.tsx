import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card-dark rounded-3xl overflow-hidden border border-card-border shadow-2xl flex flex-col lg:flex-row">
          <div className="bg-primary p-10 lg:p-16 lg:w-2/5 flex flex-col justify-between text-white relative overflow-hidden group">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-1000"></div>

            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold font-display">
                  Let's work together!
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  I'm always interested in hearing about new projects and
                  opportunities. Drop me a line and let's create something
                  amazing.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:none00email@gmail.com"
                  className="flex items-center gap-4 hover:bg-white/10 p-3 rounded-xl transition-all w-fit -ml-3"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <span className="text-lg font-medium">
                    none00email@gmail.com
                  </span>
                </a>
                <div className="flex items-center gap-4 p-3 -ml-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <span className="text-lg font-medium">Qazvin, IR</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex gap-4 mt-12">
              {[
                {
                  name: 'Github',
                  icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                  url: 'https://github.com/none-git',
                },
                {
                  name: 'LinkedIn',
                  icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                  url: 'https://github.com/none-git',
                },
                {
                  name: 'Twitter',
                  icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
                  url: 'https://github.com/none-git',
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all shadow-lg"
                  aria-label={social.name}
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="absolute -bottom-16 -right-16 text-white/5 pointer-events-none">
              <span className="material-symbols-outlined text-[300px] select-none">
                send
              </span>
            </div>
          </div>

          <div className="p-10 lg:p-16 lg:w-3/5 bg-[#121a2b]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="space-y-2">
                <label
                  className="text-sm font-bold tracking-wider text-slate-300 uppercase"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  required
                  className="h-14 w-full rounded-xl border border-card-border bg-background-dark/50 px-5 text-white placeholder-slate-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                  id="name"
                  placeholder="Mohammad Momtazan"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-bold tracking-wider text-slate-300 uppercase"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  required
                  className="h-14 w-full rounded-xl border border-card-border bg-background-dark/50 px-5 text-white placeholder-slate-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                  id="email"
                  placeholder="none00email@gmail.com"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-bold tracking-wider text-slate-300 uppercase"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  required
                  className="w-full rounded-xl border border-card-border bg-background-dark/50 p-5 text-white placeholder-slate-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none min-h-[160px]"
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-2 h-14 w-full rounded-xl bg-primary text-white text-lg font-bold tracking-wide hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
              >
                Send Message
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
