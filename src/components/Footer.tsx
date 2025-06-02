
import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary-foreground text-white py-16">
      <div className="section-padding container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo e descrição */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-primary mb-4">
              Tricomunica
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Comunicação, Estratégia e Conteúdo que conectam marcas, ideias e pessoas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/tricomunica"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-xl hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/tricomunica"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-xl hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-xl hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Links Rápidos</h4>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-white/80 hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block text-white/80 hover:text-primary transition-colors duration-300"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block text-white/80 hover:text-primary transition-colors duration-300"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block text-white/80 hover:text-primary transition-colors duration-300"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block text-white/80 hover:text-primary transition-colors duration-300"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-3 text-white/80">
              <p>contato@tricomunica.com.br</p>
              <p>+55 (11) 99999-9999</p>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 mb-2">
            Tricomunica — Conectamos marcas, ideias e pessoas.
          </p>
          <p className="text-white/60">
            © 2025 Tricomunica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
