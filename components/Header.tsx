import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222f49] bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-9 rounded-lg bg-primary/20 text-primary">
            <span className="material-symbols-outlined">terminal</span>
          </div>
          <span className="text-xl font-bold tracking-tight font-display">
            &lt;None /&gt;
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors font-display"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-sm font-medium hover:text-primary transition-colors font-display"
          >
            Skills
          </a>
          {/* <a
            href="#projects"
            className="text-sm font-medium hover:text-primary transition-colors font-display"
          >
            Work
          </a> */}
          <a
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors font-display"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden sm:inline-flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all font-display shadow-lg shadow-primary/20"
          >
            Resume
          </a>
          <button className="md:hidden p-2 text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
