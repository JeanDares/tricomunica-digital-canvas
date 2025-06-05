
import React from 'react';
import { ArrowRight, BookOpen, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
      <div className="section-padding container-max">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8" />
            </div>
          </div>

          {/* Content */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Explore o Blog
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubra artigos sobre desenvolvimento web, tecnologia, tutoriais práticos e insights do mundo tech. 
            A empresa compartilha conhecimento e experiências para ajudar outros desenvolvedores e empresas.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Coffee size={16} />
              <span>Tutoriais práticos</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <BookOpen size={16} />
              <span>Case studies</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <ArrowRight size={16} />
              <span>Tendências tech</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <span>Visitar Blog</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-white/80 text-sm">Artigos publicados</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">1K+</div>
              <div className="text-white/80 text-sm">Leitores mensais</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">5★</div>
              <div className="text-white/80 text-sm">Avaliação média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCallToAction;
