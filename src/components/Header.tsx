
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const LOGO_URL = "/lovable-uploads/b2444c6c-eddc-48b2-95a0-bf09a405fa0a.png";

const NAV_LINKS = [
  { label: 'Home', section: 'home', show: true },
  { label: 'Sobre', section: 'sobre', show: true },
  { label: 'Serviços', section: 'servicos', show: true },
  { label: 'Portfólio', section: 'portfolio', show: true },
  { label: 'Blog', href: '/blog', show: true },
  { label: 'Contato', section: 'contato', show: true },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolar até uma seção da página inicial, mesmo se estiver em outra página
  const scrollToSectionHybrid = (sectionId: string) => {
    if (location.pathname !== "/") {
      // Se não está na home, navega para home e depois faz scroll
      navigate("/");
      // Espera a navegação acontecer antes de rolar (pequeno delay)
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
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
            <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src={LOGO_URL}
                alt="Tricomunica Logo"
                className="h-10 sm:h-12 w-auto object-contain mr-2"
                style={{ maxWidth: "180px" }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link =>
              link.show && (link.href ? (
                <Link 
                  key={link.label}
                  to={link.href}
                  className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollToSectionHybrid(link.section!)}
                  className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium bg-transparent border-none outline-none"
                >
                  {link.label}
                </button>
              ))
            )}
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
              {NAV_LINKS.map(link =>
                link.show && (link.href ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-left text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => scrollToSectionHybrid(link.section!)}
                    className="text-left text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium py-2 bg-transparent border-none outline-none"
                  >
                    {link.label}
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
