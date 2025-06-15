
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden h-full flex flex-col">
      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="text-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <Icon size={48} />
        </div>
        
        <h3 className="text-xl font-semibold text-secondary-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-secondary-foreground/80 leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
