import React from "react";

interface ClientCardProps {
  name: string;
  description: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ name, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 group relative overflow-hidden">
      {/* Efeito de onda no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>

      <div className="relative z-10">
        <div className="h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 text-center">
          <span className="text-lg font-bold text-primary group-hover:animate-pulse text-center w-full">
            {name}
          </span>
        </div>

        <p className="text-secondary-foreground/80 text-sm leading-relaxed text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ClientCard;
