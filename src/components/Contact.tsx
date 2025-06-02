
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
    <section id="contato" className="py-20 bg-muted">
      <div className="section-padding container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
              Vamos <span className="text-primary">conversar?</span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              Estamos prontos para ouvir sua história e ajudar a transformar suas ideias em realidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="bg-white p-8 rounded-3xl shadow-md">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Conte-nos sobre seu projeto ou como podemos ajudar..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  Enviar mensagem
                </button>
              </form>
            </div>

            {/* Contatos diretos */}
            <div className="space-y-8">
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
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="bg-green-500 text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-foreground">WhatsApp</h4>
                    <p className="text-secondary-foreground/80">Conversa direta e rápida</p>
                  </div>
                </a>

                <a
                  href="mailto:contato@tricomunica.com.br"
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
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
