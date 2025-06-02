
import React from 'react';
import ClientCard from './ClientCard';

const Portfolio = () => {
  const clients = [
    {
      name: "AMECS",
      description: "Estratégia de comunicação digital e produção de conteúdo para fortalecimento da marca no mercado corporativo."
    },
    {
      name: "IPJI",
      description: "Desenvolvimento de identidade visual e campanhas de marketing digital para engajamento da comunidade."
    },
    {
      name: "Eder Luiz Notícias",
      description: "Consultoria em comunicação jornalística e estratégia de conteúdo para plataformas digitais."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="section-padding container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Nossa comunicação se mede em conexões reais.
          </p>
          <p className="text-secondary-foreground/80 max-w-3xl mx-auto">
            Cada projeto é uma parceria única, onde transformamos desafios em oportunidades 
            e ideias em resultados concretos. Conheça algumas das marcas que já confiaram em nosso trabalho.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ClientCard {...client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
