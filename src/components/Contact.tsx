import React, { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você implementaria o envio do formulário
  };

  return (
    <section id="contato" className="py-20 bg-muted relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-accent rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-padding container-max relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4 animate-fade-in">
              Vamos <span className="text-primary relative">
                conversar?
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full animate-pulse"></div>
              </span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Estamos prontos para ouvir sua história e ajudar a transformar suas ideias em realidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-secondary-foreground mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:scale-105 transition-all duration-300"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:scale-105 transition-all duration-300"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:scale-105 transition-all duration-300 resize-none"
                    placeholder="Conte-nos sobre seu projeto ou como podemos ajudar..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Send size={20} className="relative z-10 group-hover:animate-pulse" />
                  <span className="relative z-10">Enviar mensagem</span>
                </button>
              </form>
            </div>

            {/* Contatos diretos */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                  Outras formas de contato
                </h3>
                <p className="text-secondary-foreground/80 mb-8">
                  Prefere uma conversa mais direta? Entre em contato através dos nossos canais oficiais.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-green-500/5 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="bg-green-500 text-white p-3 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10">
                    <MessageCircle size={24} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-semibold text-secondary-foreground">WhatsApp</h4>
                    <p className="text-secondary-foreground/80">Conversa direta e rápida</p>
                  </div>
                </a>

                <a
                  href="mailto:contato@tricomunica.com.br"
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/5 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="bg-primary text-primary-foreground p-3 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10">
                    <Mail size={24} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-semibold text-secondary-foreground">E-mail</h4>
                    <p className="text-secondary-foreground/80">contato@tricomunica.com.br</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
