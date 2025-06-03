
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="section-padding container-max py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Tricomunica
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Portfólio
            </button>
            <Link 
              to="/blog"
              className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Blog
            </Link>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                Portfólio
              </button>
              <Link 
                to="/blog"
                className="text-left text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
