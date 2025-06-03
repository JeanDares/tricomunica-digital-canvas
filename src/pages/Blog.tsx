
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedArticle from '../components/FeaturedArticle';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  // Dados fictícios para demonstração
  const featuredArticle = {
    title: "O Futuro da Comunicação Digital: Estratégias que Conectam",
    description: "Explore as tendências emergentes em comunicação digital e como elas estão redefinindo a forma como as marcas se conectam com seus públicos.",
    author: "Adriano França",
    date: "15 de Janeiro, 2025",
    readTime: "12 min",
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop",
    content: `A comunicação digital está passando por uma transformação radical. As marcas que conseguem se adaptar a essas mudanças não apenas sobrevivem, mas prosperam em um mercado cada vez mais competitivo.

No cenário atual, a autenticidade se tornou mais importante do que nunca. Os consumidores podem identificar facilmente conteúdo artificial ou forçado, e isso afeta diretamente a percepção da marca. Por isso, é fundamental desenvolver uma voz única e consistente em todos os pontos de contato.

A personalização também se tornou um diferencial competitivo essencial. Com o avanço das tecnologias de análise de dados, é possível criar experiências cada vez mais direcionadas e relevantes para cada segmento de público.

Outro aspecto crucial é a importância do storytelling. As marcas que conseguem contar histórias envolventes e emocionalmente relevantes criam conexões mais profundas com seus públicos. Isso vai além do produto ou serviço oferecido – trata-se de criar um universo de valores e experiências.

A integração entre canais também ganhou nova dimensão. Uma estratégia omnichannel eficaz não se limita a estar presente em múltiplas plataformas, mas sim em criar uma experiência coesa e complementar em todos os pontos de contato.

Por fim, a medição e análise de resultados se tornaram mais sofisticadas. Não basta apenas contar likes e compartilhamentos – é preciso entender o real impacto da comunicação nos objetivos de negócio da empresa.

O futuro da comunicação digital está nas mãos daqueles que conseguem equilibrar tecnologia com humanização, dados com criatividade, e estratégia com autenticidade.`
  };

  const blogPosts = [
    {
      title: "Marketing de Conteúdo: Como Criar Narrativas que Engajam",
      description: "Descubra as técnicas mais eficazes para criar conteúdo que realmente conecta com sua audiência e gera resultados mensuráveis.",
      author: "Adriano França",
      date: "10 de Janeiro, 2025",
      readTime: "8 min",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      title: "Branding Estratégico: Construindo Marcas Autênticas",
      description: "Uma jornada através dos elementos fundamentais que compõem uma identidade de marca forte e memorável.",
      author: "Adriano França",
      date: "8 de Janeiro, 2025",
      readTime: "6 min",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      title: "Redes Sociais: Estratégias para Maximizar o Alcance",
      description: "Técnicas avançadas para otimizar sua presença nas redes sociais e aumentar o engajamento orgânico.",
      author: "Adriano França",
      date: "5 de Janeiro, 2025",
      readTime: "10 min",
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      title: "SEO e Content Marketing: A Combinação Perfeita",
      description: "Como integrar estratégias de SEO com marketing de conteúdo para dominar os resultados de busca.",
      author: "Adriano França",
      date: "2 de Janeiro, 2025",
      readTime: "7 min",
      imageUrl: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop"
    },
    {
      title: "Análise de Dados: Medindo o Sucesso da sua Comunicação",
      description: "Aprenda a interpretar métricas e transformar dados em insights acionáveis para sua estratégia de comunicação.",
      author: "Adriano França",
      date: "28 de Dezembro, 2024",
      readTime: "9 min",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "Comunicação Corporativa: Construindo Relacionamentos Duradouros",
      description: "Estratégias para desenvolver uma comunicação corporativa eficaz que fortalece a reputação da marca.",
      author: "Adriano França",
      date: "25 de Dezembro, 2024",
      readTime: "11 min",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Featured Article */}
        <FeaturedArticle {...featuredArticle} />
        
        {/* Blog Posts Grid */}
        <section className="py-20 bg-muted/30">
          <div className="section-padding container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 animate-fade-in">
                Últimos <span className="text-primary">Artigos</span>
              </h2>
              <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Insights, estratégias e tendências em comunicação e marketing digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <BlogCard {...post} />
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Carregar Mais Artigos
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
