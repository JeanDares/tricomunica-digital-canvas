import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full animate-ping"></div>
        <div
          className="absolute top-1/2 right-20 w-3 h-3 bg-accent rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="section-padding container-max relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 animate-fade-in">
              Vamos{" "}
              <span className="text-primary relative">
                conversar?
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full animate-pulse"></div>
              </span>
            </h2>
            <p
              className="text-lg sm:text-xl text-secondary-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Estamos prontos para ouvir sua história e ajudar a transformar
              suas ideias em realidade. Entre em contato através dos nossos
              canais oficiais.
            </p>
          </div>

          {/* Cards de contato centralizados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {/* WhatsApp */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a
                href="https://wa.me/5554981188791"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-400/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="bg-green-500 text-white p-4 rounded-2xl inline-flex group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mb-6">
                    <MessageCircle size={32} />
                  </div>

                  <h3 className="text-xl font-bold text-secondary-foreground mb-3">
                    WhatsApp
                  </h3>

                  <p className="text-secondary-foreground/70 mb-4 leading-relaxed">
                    Conversa direta e rápida para tirar suas dúvidas
                  </p>

                  <div className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Iniciar conversa</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-ping"></div>
                  </div>
                </div>
              </a>
            </div>

            {/* E-mail */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <a
                href="mailto:contato@tricomunica.com.br"
                className="block p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-400/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="bg-primary text-primary-foreground p-4 rounded-2xl inline-flex group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mb-6">
                    <Mail size={32} />
                  </div>

                  <h3 className="text-xl font-bold text-secondary-foreground mb-3">
                    E-mail
                  </h3>

                  <p className="text-secondary-foreground/70 mb-4 leading-relaxed">
                    Para propostas detalhadas e documentos
                  </p>

                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Enviar e-mail</span>
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-ping"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Seção adicional com call-to-action */}
          <div
            className="text-center mt-16 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                Resposta rápida garantida
              </h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Nossa equipe está sempre pronta para atender você. Respondemos
                todas as mensagens em até 2 horas durante horário comercial.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Online agora</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Resposta em até 2h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
