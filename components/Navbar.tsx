
import React, { useEffect, useState } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-xl border-b border-white/10 h-16' : 'bg-transparent h-20'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="material-icons-outlined text-accent text-3xl">sports_golf</span>
          <span className="text-xl font-display font-bold tracking-wider text-white">
            ELITE<span className="text-accent">SIMS</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-gray-300">
          {['RESIDENTIAL', 'COMMERCIAL', 'TECHNOLOGY', 'THE PROCESS'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="hover:text-accent transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <a 
            href="#consultation" 
            className="hidden sm:block bg-primary hover:bg-green-800 text-white px-6 py-2.5 rounded text-[10px] font-bold tracking-[0.2em] transition-all uppercase"
          >
            Get a Quote
          </a>
          <button 
            onClick={onToggleTheme}
            className="p-2 text-white/70 hover:text-white transition-colors"
          >
            <span className="material-icons-outlined">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
