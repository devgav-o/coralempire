import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const { language, toggleLanguage, t, direction } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { key: 'home', id: 'hero' },
    { key: 'about', id: 'about' },
    { key: 'gallery', id: 'gallery' },
    { key: 'catalog', id: 'catalog' },
    { key: 'contact', id: 'contact' },
  ];

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            data-testid="logo"
            className="font-heading text-2xl md:text-3xl font-bold text-secondary cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-accent">Coral</span> Empire
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                data-testid={`nav-${item.key}`}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-secondary transition-colors duration-300 font-medium relative group"
              >
                {t.nav[item.key]}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              data-testid="language-toggle"
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:bg-primary/50 transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language === 'he' ? 'EN' : 'עב'}</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              data-testid="mobile-menu-toggle"
              className="md:hidden p-2 hover:bg-primary/50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        data-testid="mobile-menu"
        className={`md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-4 gap-2">
          {navItems.map((item) => (
            <button
              key={item.key}
              data-testid={`mobile-nav-${item.key}`}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-secondary hover:bg-primary/30 transition-all duration-300 font-medium py-3 px-4 rounded-lg text-start"
            >
              {t.nav[item.key]}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
