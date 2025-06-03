
import React from 'react';
import { Calendar, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

interface FeaturedArticleProps {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime?: string;
  backgroundImage: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title,
  description,
  author,
  date,
  readTime = "8 min",
  backgroundImage
}) => {
  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding container-max text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Meta info */}
          <div className="flex items-center justify-center space-x-6 text-sm text-white/80 mb-6 animate-fade-in">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>Por {author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{date}</span>
            </div>
            <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
              {readTime} de leitura
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight" style={{ animationDelay: '0.2s' }}>
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Ler Artigo Completo
            </button>

            {/* Share buttons */}
            <div className="flex items-center space-x-3">
              <span className="text-white/70 text-sm">Compartilhar:</span>
              <button className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </button>
              <button className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110">
                <Twitter size={18} />
              </button>
              <button className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </button>
              <button className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
