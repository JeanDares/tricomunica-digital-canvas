
import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-muted">
      <div className="section-padding container-max py-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-foreground mb-6 leading-tight">
            Assessoria e marketing{' '}
            <span className="text-primary">estratégico</span>{' '}
            com propósito
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-secondary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Criamos conexões autênticas entre marcas, ideias e pessoas.
          </p>
          
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Entre em contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
