import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Luciano Santos",
    role: "Presidente",
    company: "Associação Médica de Caxias do Sul - AMECS",
    content:
      "A Tricomunica tem sido uma grande parceira da AMECS. É um trabalho intenso e comprometido, que faz diferença no nosso dia a dia. Eles cuidam das campanhas do Instagram, do site, das notícias e dos artigos para o blog, além de todo o planejamento, sempre de forma orgânica e respeitando a identidade da associação. Hoje, a comunicação da AMECS está muito mais estruturada e alinhada, e isso fortalece o nosso trabalho e aproxima ainda mais a comunidade.",
    rating: 5,
    avatar: "../../public/cliente01.jpeg",
  },
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="section-padding container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
            O que dizem sobre a empresa
          </h2>
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            Depoimentos de clientes e parceiros que confiaram no trabalho da
            equipe
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 animate-fade-in mx-auto"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="text-primary/30" size={32} />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Content */}
                <p className="text-secondary-foreground/80 mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-secondary-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-secondary-foreground/60">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
