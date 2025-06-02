
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
      <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon size={48} />
      </div>
      
      <h3 className="text-xl font-semibold text-secondary-foreground mb-4">
        {title}
      </h3>
      
      <p className="text-secondary-foreground/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
