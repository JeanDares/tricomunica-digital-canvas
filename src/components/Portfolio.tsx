import ClientCard from "./ClientCard";

const Portfolio = () => {
  const clients = [
    {
      name: "AMECS",
      description:
        "Estratégia de comunicação digital e produção de conteúdo para fortalecimento da marca no mercado corporativo.",
    },
    {
      name: "EDER LUIZ",
      description:
        "Consultoria em comunicação jornalística e estratégia de conteúdo para plataformas digitais.",
    },
    {
      name: "MAIS ÓCULOS",
      description:
        "Gestão de redes sociais e produção de conteúdo para engajamento e crescimento da marca.",
    },
    {
      name: "RENNA COMPONENTES PARA MÓVEIS",
      description:
        "Gestão de redes sociais, produção de conteúdo e marketing digital para o setor automotivo.",
    },
    {
      name: "PIX ILUMINAÇÃO",
      description:
        "Gestão de redes sociais, produção de conteúdo e marketing digital para soluções em iluminação.",
    },
    {
      name: "IPJI",
      description:
        "Desenvolvimento de identidade visual e campanhas de marketing digital para engajamento da comunidade.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Elementos decorativos animados */}
      <div className="absolute top-0 left-1/4 w-2 h-32 bg-gradient-to-b from-primary/20 to-transparent animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/3 w-2 h-24 bg-gradient-to-t from-accent/20 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="section-padding container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4 animate-fade-in">
            <span className="text-primary relative">
              Portfólio
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-pulse"></div>
            </span>
          </h2>
          <p
            className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Nossa comunicação se mede em{" "}
            <span className="text-primary font-semibold">conexões reais</span>.
          </p>
          <p
            className="text-secondary-foreground/80 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Cada projeto é uma parceria única, onde transformamos desafios em
            oportunidades e ideias em resultados concretos. Conheça algumas das
            marcas que já confiaram em nosso trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="animate-fade-in hover:animate-pulse w-full max-w-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ClientCard {...client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
