
import React from 'react';
import { MessageCircle, TrendingUp, FileText, Palette } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Assessoria de Comunicação",
      description: "Estratégias de comunicação integrada para fortalecer sua marca e construir relacionamentos duradouros com seus públicos."
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Campanhas digitais estratégicas que conectam sua marca ao público certo, no momento certo, através dos canais mais eficazes."
    },
    {
      icon: FileText,
      title: "Produção de Conteúdo",
      description: "Criação de conteúdo relevante e envolvente que conta a história da sua marca de forma autêntica e impactante."
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Desenvolvimento de identidade de marca consistente que reflete os valores e a personalidade única da sua empresa."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary">
      <div className="section-padding container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            O que <span className="text-primary">fazemos</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Nossos serviços são pensados para criar conexões autênticas e resultados que fazem a diferença.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
