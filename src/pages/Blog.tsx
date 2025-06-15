import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedArticle from '../components/FeaturedArticle';
import BlogCard from '../components/BlogCard';
import ArticleModal from '../components/ArticleModal';
import { useAdmin } from '../contexts/AdminContext';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Newspaper, 
  BookOpen, 
  Briefcase,
  Filter 
} from 'lucide-react';

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { posts } = useAdmin();

  // Imagens padrão para quando não há imagem definida
  const defaultImages = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&h=1080&fit=crop"
  ];

  // Dados fictícios para demonstração de posts comuns (definindo defaultBlogPosts para evitar erro TS2304)
  const defaultBlogPosts = [
    {
      id: '1',
      title: "Como Construir Autoridade no Instagram em 2025",
      description: "Descubra estratégias modernas para fortalecer sua marca pessoal ou empresarial no Instagram neste ano de novas tendências e algoritmos.",
      author: "Gabriela Terra",
      date: "2 de Janeiro, 2025",
      readTime: "7 min",
      imageUrl: defaultImages[0],
      backgroundImage: defaultImages[0],
      content: `O Instagram se reinventa a cada ano (...)\n\nAcompanhe as novidades mais importantes e como usá-las.`,
      category: 'blog',
      featured: false
    },
    {
      id: '2',
      title: "Novas Algoritmos das Redes Sociais: O que Mudou?",
      description: "Analisamos o impacto das recentes mudanças nos algoritmos das principais redes sociais e como isso afeta o alcance orgânico.",
      author: "Adriano França",
      date: "10 de Janeiro, 2025",
      readTime: "6 min",
      imageUrl: defaultImages[1],
      backgroundImage: defaultImages[1],
      content: `Os algoritmos das redes sociais passaram (...)\n\nDescubra táticas para manter o engajamento alto.`,
      category: 'noticia',
      featured: false
    },
    {
      id: '3',
      title: "Tutorial: Como Criar uma Campanha Digital do Zero",
      description: "Um passo a passo simples para criar campanhas digitais bem-sucedidas para pequenas e médias empresas.",
      author: "Equipe Tricomunica",
      date: "15 de Janeiro, 2025",
      readTime: "9 min",
      imageUrl: defaultImages[2],
      backgroundImage: defaultImages[2],
      content: `Criar uma campanha digital eficiente (...)\n\nSiga este guia prático!`,
      category: 'tutorial',
      featured: false
    }
  ];

  // Dados fictícios para demonstração (mantendo para quando não há posts criados)
  const defaultFeaturedArticle = {
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

  // Função para obter imagem padrão quando não há imageUrl
  const getPostImage = (post: any, index: number) => {
    if (post.imageUrl) return post.imageUrl;
    return defaultImages[index % defaultImages.length];
  };

  // Usar posts criados se existirem, senão usar os padrão
  const featuredPost = posts.find(post => post.featured) || {
    ...defaultFeaturedArticle,
    // Garante que imageUrl e backgroundImage existem para fallback também:
    imageUrl: defaultFeaturedArticle.backgroundImage,
    backgroundImage: defaultFeaturedArticle.backgroundImage
  };

  // allPosts tipado como Post[], mas os defaultBlogPosts não têm id, imageUrl e backgroundImage
  const allPosts = posts.length > 0
    ? posts.filter(post => !post.featured)
    : defaultBlogPosts;

  // Filtrar posts por categoria
  const filteredPosts = selectedCategory === 'all'
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  const handleReadMore = (article: any) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const categories = [
    { id: 'all', name: 'Todos', icon: Filter },
    { id: 'blog', name: 'Blog', icon: FileText },
    { id: 'noticia', name: 'Notícias', icon: Newspaper },
    { id: 'tutorial', name: 'Tutoriais', icon: BookOpen },
    { id: 'case-study', name: 'Case Studies', icon: Briefcase }
  ];

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return allPosts.length;
    return allPosts.filter(post => post.category === categoryId).length;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Featured Article */}
        <FeaturedArticle 
          {...featuredPost} 
          backgroundImage={featuredPost.backgroundImage || featuredPost.imageUrl || defaultImages[0]}
        />
        
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

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {categories.map((category) => {
                const CategoryIcon = category.icon;
                const count = getCategoryCount(category.id);
                
                return (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className="flex items-center space-x-2"
                  >
                    <CategoryIcon size={16} />
                    <span>{category.name}</span>
                    {count > 0 && (
                      <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
                        {count}
                      </span>
                    )}
                  </Button>
                );
              })}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div 
                  key={post.id || index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <BlogCard 
                    {...post} 
                    imageUrl={getPostImage(post, index)}
                    onReadMore={() => handleReadMore({
                      ...post,
                      backgroundImage: getPostImage(post, index)
                    })}
                  />
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-secondary-foreground/60 text-lg">
                  Nenhum post encontrado nesta categoria.
                </p>
              </div>
            )}

            {/* Load More Button - só mostrar se há posts padrão */}
            {posts.length === 0 && (
              <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Carregar Mais Artigos
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {/* Article Modal */}
      {selectedArticle && (
        <ArticleModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          article={selectedArticle}
        />
      )}
    </div>
  );
};

export default Blog;
