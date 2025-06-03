
import React from 'react';
import { X, Calendar, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: {
    title: string;
    description: string;
    author: string;
    date: string;
    readTime: string;
    backgroundImage: string;
    content: string;
  };
}

const ArticleModal: React.FC<ArticleModalProps> = ({ isOpen, onClose, article }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header Image */}
        <div 
          className="h-64 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${article.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-3xl font-bold text-secondary-foreground mb-4">
              {article.title}
            </DialogTitle>
            
            {/* Meta info */}
            <div className="flex items-center space-x-6 text-sm text-secondary-foreground/60 mb-4">
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>Por {article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary">
                {article.readTime} de leitura
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex items-center space-x-3 mb-6 pb-6 border-b">
              <span className="text-secondary-foreground/70 text-sm">Compartilhar:</span>
              <button className="p-2 bg-secondary hover:bg-secondary/80 rounded-full transition-all duration-300 hover:scale-110">
                <Facebook size={16} className="text-primary" />
              </button>
              <button className="p-2 bg-secondary hover:bg-secondary/80 rounded-full transition-all duration-300 hover:scale-110">
                <Twitter size={16} className="text-primary" />
              </button>
              <button className="p-2 bg-secondary hover:bg-secondary/80 rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin size={16} className="text-primary" />
              </button>
              <button className="p-2 bg-secondary hover:bg-secondary/80 rounded-full transition-all duration-300 hover:scale-110">
                <Share2 size={16} className="text-primary" />
              </button>
            </div>
          </DialogHeader>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-secondary-foreground/80 mb-6 leading-relaxed">
              {article.description}
            </p>
            
            <div className="text-secondary-foreground leading-relaxed space-y-4">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;
