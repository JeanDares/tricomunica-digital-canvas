
import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-muted/30 to-muted relative overflow-hidden">
      {/* Animação de fundo - círculos flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
      </div>

      <div className="section-padding container-max py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-foreground mb-6 leading-tight animate-fade-in">
            Assessoria e marketing{' '}
            <span className="text-primary relative inline-block">
              estratégico
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full animate-pulse"></div>
            </span>{' '}
            com propósito
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-secondary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Criamos conexões autênticas entre marcas, ideias e pessoas.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 hover:scale-105 hover:shadow-2xl transition-all duration-500 shadow-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative">Entre em contato</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
