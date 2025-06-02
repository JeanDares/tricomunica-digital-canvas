
import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="section-padding container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-8">
            Sobre a <span className="text-primary">Tricomunica</span>
          </h2>
          
          <div className="prose prose-lg sm:prose-xl mx-auto text-secondary-foreground/80 leading-relaxed">
            <p className="mb-6">
              Na Tricomunica, acreditamos que a comunicação estratégica é a ponte que conecta 
              marcas autênticas aos seus públicos. Somos uma consultoria especializada em 
              transformar ideias em narrativas poderosas e estratégias eficazes.
            </p>
            
            <p className="mb-6">
              Nossa abordagem combina criatividade, estratégia e propósito para criar 
              conexões genuínas que geram resultados tangíveis. Trabalhamos com empresas 
              que desejam fazer a diferença no mundo através de uma comunicação consciente e impactante.
            </p>
            
            <p>
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
