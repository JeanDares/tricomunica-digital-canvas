
import React from 'react';

interface ClientCardProps {
  name: string;
  description: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ name, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
      <div className="h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center">
        <span className="text-lg font-bold text-primary">{name}</span>
      </div>
      
      <p className="text-secondary-foreground/80 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ClientCard;
