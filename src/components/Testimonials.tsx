import React from 'react';
import { Star, Quote } from 'lucide-react';

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
    name: "Maria Silva",
    role: "CEO",
    company: "TechStart",
    content: "A empresa transformou completamente nossa presença digital. A expertise em desenvolvimento web é excepcional e o resultado superou todas as expectativas.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "João Santos",
    role: "Diretor de Marketing",
    company: "Inovare",
    content: "Equipe dedicada e criativa. Entregaram um projeto incrível dentro do prazo e sempre disponíveis para ajudar. Recomendamos fortemente!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Empreendedora",
    company: "Boutique Digital",
    content: "A empresa não apenas desenvolveu nosso site, mas nos ajudou a entender todo o processo. A paciência e conhecimento da equipe são admiráveis.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
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
            Depoimentos de clientes e parceiros que confiaram no trabalho da equipe
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="text-primary/30" size={32} />
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Content */}
              <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-secondary-foreground">
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
    </section>
  );
};

export default Testimonials;
