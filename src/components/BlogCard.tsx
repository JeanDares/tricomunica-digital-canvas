
import React from 'react';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl: string;
  readTime?: string;
  content: string;
  onReadMore: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  description, 
  author, 
  date, 
  imageUrl, 
  readTime = "5 min",
  content,
  onReadMore
}) => {
  return (
    <article 
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 overflow-hidden cursor-pointer"
      onClick={onReadMore}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/30 group-hover:scale-110 transition-transform duration-500"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Read time badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-secondary-foreground">
          {readTime} de leitura
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-secondary-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Meta info */}
        <div className="flex items-center justify-between text-xs text-secondary-foreground/60">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User size={12} />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar size={12} />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
