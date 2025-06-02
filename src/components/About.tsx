
import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Elemento decorativo animado */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary/5 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-accent/10 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
      
      <div className="section-padding container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-8 animate-fade-in">
            Sobre a <span className="text-primary relative">
              Tricomunica
              <div className="absolute inset-0 bg-primary/10 rounded-lg transform -skew-x-12 -z-10 animate-pulse"></div>
            </span>
          </h2>
          
          <div className="prose prose-lg sm:prose-xl mx-auto text-secondary-foreground/80 leading-relaxed space-y-6">
            <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Na Tricomunica, acreditamos que a comunicação estratégica é a ponte que conecta 
              marcas autênticas aos seus públicos. Somos uma consultoria especializada em 
              transformar ideias em narrativas poderosas e estratégias eficazes.
            </p>
            
            <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Nossa abordagem combina criatividade, estratégia e propósito para criar 
              conexões genuínas que geram resultados tangíveis. Trabalhamos com empresas 
              que desejam fazer a diferença no mundo através de uma comunicação consciente e impactante.
            </p>
            
            <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Cada projeto é uma oportunidade de contar uma história única, 
              de construir relacionamentos duradouros e de contribuir para um futuro 
              mais conectado e humano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
