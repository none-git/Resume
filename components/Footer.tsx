import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#222f49] py-12 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded-lg bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-lg">
                  terminal
                </span>
              </div>
              <span className="text-lg font-bold font-display tracking-tight">
                &lt;None /&gt;
              </span>
            </div>
            <p className="text-slate-500 text-sm font-normal">
              © {currentYear} None. All rights reserved.
            </p>
          </div>

          {/* <div className="flex flex-col sm:flex-row items-center gap-8">
            <nav className="flex items-center gap-8">
              <a
                href="#"
                className="text-slate-400 text-sm font-medium hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 text-sm font-medium hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </nav>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
