import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#314368 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider">
                  Open to work
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight font-display">
                Building digital experiences with{' '}
                <span className="text-primary">code</span> &{' '}
                <span className="text-primary">creativity</span>.
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                I'm None, a Full-Stack Developer specializing in building
                exceptional digital experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold hover:bg-primary/90 transition-all font-display shadow-xl shadow-primary/30 hover:-translate-y-1"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl h-14 px-8 bg-card-border/30 border border-card-border text-white text-lg font-bold hover:bg-card-border/50 transition-all font-display"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-4 text-slate-500 font-mono text-sm">
              <a
                href="https://github.com/none-git"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                github.com/none-git
              </a>
              {/* <span className="opacity-30">|</span>
              <a
                href="#"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                linkedin.com/in/alex
              </a> */}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-square max-w-[500px] mx-auto rounded-2xl overflow-hidden bg-[#0a0f18] border border-white/5 shadow-2xl flex items-center justify-center p-6 sm:p-12">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>

              <div className="w-full font-mono text-sm sm:text-base p-6 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-rose-500 shadow-lg shadow-rose-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/20"></div>
                </div>
                <div className="space-y-1.5">
                  <p>
                    <span className="text-purple-400">const</span> developer ={' '}
                    {'{'}
                  </p>
                  <p className="pl-6">
                    name: <span className="text-emerald-400">'Mohammad'</span>,
                  </p>
                  <p className="pl-6">
                    role: <span className="text-emerald-400">'Full Stack'</span>
                    ,
                  </p>
                  <p className="pl-6">
                    skills: [<span className="text-emerald-400">'React'</span>,{' '}
                    <span className="text-emerald-400">'Node'</span>],
                  </p>
                  <p className="pl-6">
                    hardWorker: <span className="text-sky-400">true</span>
                  </p>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
