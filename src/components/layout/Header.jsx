import { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import NavbarLink from '../ui/NavbarLink';
import ThemeToggle from '../ui/ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/5 dark:bg-black/5 backdrop-blur-sm shadow-sm border-b border-muted/10 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl sm:text-2xl font-bold flex items-center gap-1 transition-transform hover:scale-105">
            <span className="text-text">Sep</span>
            <span className="text-primary">Tada</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            <nav className="flex items-center gap-2">
              {portfolioData.navLinks.map((link) => (
                <NavbarLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="md:hidden text-text p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/50 dark:bg-black/50 backdrop-blur-lg border-b border-muted/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 border-opacity-100' : 'max-h-0 border-opacity-0'
        }`}>
        <div className="flex flex-col py-4 px-6 gap-2">
          {portfolioData.navLinks.map((link) => (
            <NavbarLink
              key={link.label}
              href={link.href}
              label={link.label}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
