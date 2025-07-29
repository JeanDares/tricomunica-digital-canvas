import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const AVATAR_URL = "/cliente01.jpeg";
const AVATAR_URL_2 = "/cliente02.jpeg";

// Adicione mais depoimentos se desejar
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Luciano Santos",
    role: "Presidente",
    company: "Associação Médica de Caxias do Sul - AMECS",
    content:
      "A Tricomunica tem sido uma grande parceira da AMECS. É um trabalho intenso e comprometido, que faz diferença no nosso dia a dia. Eles cuidam das campanhas do Instagram, do site, das notícias e dos artigos para o blog, além de todo o planejamento, sempre de forma orgânica e respeitando a identidade da associação. Hoje, a comunicação da AMECS está muito mais estruturada e alinhada, e isso fortalece o nosso trabalho e aproxima ainda mais a comunidade.",
    rating: 5,
    avatar: AVATAR_URL,
  },
  {
    id: 2,
    name: "Andréia Pretto",
    role: "Gerente",
    company: "Mais Óculos",
    content:
      "Trabalhar com a Tricomunica tem sido uma experiência incrível. Eles entenderam perfeitamente a essência da Mais Óculos e conseguiram traduzir isso em conteúdos criativos, estratégicos e cheios de personalidade. Estou muito feliz com essa parceria.",
    rating: 5,
    avatar: AVATAR_URL_2,
  },
];

// Definição do CSS para a animação como uma string
const progressAnimationCSS = `
  @keyframes progress {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    // Adicionar o CSS da animação ao head do documento
    const styleElement = document.createElement("style");
    styleElement.innerHTML = progressAnimationCSS;
    document.head.appendChild(styleElement);

    // Limpeza ao desmontar o componente
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []); // Executa apenas uma vez na montagem

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isAutoplay) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoplay]);

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
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10 overflow-hidden">
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

        {/* Testimonials Carousel */}
        <div className="relative px-4 sm:px-16 max-w-6xl mx-auto">
          {/* Card principal */}
          <div
            className="relative overflow-hidden bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-100 transition-all duration-500 transform"
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent">
              <div
                className="h-full bg-white opacity-30"
                style={{
                  width: "100%",
                  animationName: "progress",
                  animationDuration: "5s",
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationPlayState: isAutoplay ? "running" : "paused",
                }}
              />
            </div>

            {/* Background decoração */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-primary/5 z-0"></div>
            <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-accent/5 z-0"></div>

            {/* Quote Icon */}
            <div className="flex justify-between items-start mb-6 relative z-10">
              <Quote className="text-primary/30" size={48} />
              <div className="flex space-x-1">
                {renderStars(testimonials[activeIndex].rating)}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-secondary-foreground/80 mb-10 leading-relaxed text-lg sm:text-xl">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-sm opacity-30 animate-pulse"></div>
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-white"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-foreground text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-secondary-foreground/60">
                    {testimonials[activeIndex].role} •{" "}
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-2 sm:px-6 pointer-events-none">
            <button
              onClick={() => {
                setActiveIndex(
                  (current) =>
                    (current - 1 + testimonials.length) % testimonials.length
                );
                setIsAutoplay(false);
              }}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              aria-label="Depoimento anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                setActiveIndex(
                  (current) => (current + 1) % testimonials.length
                );
                setIsAutoplay(false);
              }}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              aria-label="Próximo depoimento"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-primary/50"
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
