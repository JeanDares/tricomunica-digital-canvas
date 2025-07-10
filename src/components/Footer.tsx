import { ExternalLink, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary-foreground text-white py-16">
      <div className="section-padding container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo e descrição */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-primary mb-4">
              Tricomunica
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Comunicação, Estratégia e Conteúdo que conectam marcas, ideias e
              pessoas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/tri.comunica"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-xl hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/tricomunica-assessoria-marketing/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-xl hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/554981188791"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-xl hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Links Rápidos</h4>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-white/80 hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block text-white/80 hover:text-primary transition-colors duration-300"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block text-white/80 hover:text-primary transition-colors duration-300"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block text-white/80 hover:text-primary transition-colors duration-300"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block text-white/80 hover:text-primary transition-colors duration-300"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-3 text-white/80">
              <p>contato@tricomunica.com.br</p>
              <p>+55 (54) 98118-8791</p>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="text-center mb-4">
            <p className="text-white/60 mb-2">
              Tricomunica — Conectamos marcas, ideias e pessoas.
            </p>
            <p className="text-white/60">
              © 2025 Tricomunica. Todos os direitos reservados.
            </p>
          </div>

          {/* Créditos da Hubb */}
          <div className="border-t border-white/10 pt-6 mt-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
              <span className="text-white/50 text-sm">
                Site desenvolvido por
              </span>
              <a
                href="https://hubb.app.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300 font-medium group"
              >
                <span className="text-lg font-bold">Hubb</span>
                <ExternalLink
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </a>
            </div>
            <p className="text-center text-white/40 text-xs mt-2">
              Conectando você ao digital de forma simples e eficaz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
