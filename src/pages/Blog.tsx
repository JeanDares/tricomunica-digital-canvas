
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

  const defaultBlogPosts = [
    {
      id: "1",
      title: "Marketing de Conteúdo: Como Criar Narrativas que Engajam",
      description: "Descubra as técnicas mais eficazes para criar conteúdo que realmente conecta com sua audiência e gera resultados mensuráveis.",
      author: "Adriano França",
      date: "10 de Janeiro, 2025",
      readTime: "8 min",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "blog",
      content: `O marketing de conteúdo representa uma revolução na forma como as marcas se comunicam com seus públicos. Diferente da publicidade tradicional, que busca vender diretamente, o marketing de conteúdo constrói relacionamentos através da entrega de valor.

Para criar narrativas que realmente engajam, é essencial conhecer profundamente seu público. Isso vai além de dados demográficos básicos – você precisa entender suas dores, desejos, medos e aspirações. Só assim será possível criar conteúdo que ressoa genuinamente.

A consistência é outro pilar fundamental. Não basta criar um conteúdo excepcional esporadicamente; é necessário manter uma presença constante e previsível. Isso ajuda a construir expectativa e fidelidade na audiência.

O storytelling técnico também é crucial. Cada peça de conteúdo deve ter início, meio e fim bem definidos. Deve haver um conflito ou problema apresentado, uma jornada de descoberta ou solução, e uma resolução satisfatória.

A medição de resultados no marketing de conteúdo vai além de métricas de vaidade. É importante focar em indicadores que realmente importam para o negócio: engajamento qualificado, tempo de permanência, conversões e, principalmente, a construção de autoridade de marca.

Por fim, a adaptação constante é fundamental. O que funciona hoje pode não funcionar amanhã, por isso é essencial manter-se atualizado com as tendências e estar sempre disposto a experimentar novas abordagens.`
    },
    {
      title: "Branding Estratégico: Construindo Marcas Autênticas",
      description: "Uma jornada através dos elementos fundamentais que compõem uma identidade de marca forte e memorável.",
      author: "Adriano França",
      date: "8 de Janeiro, 2025",
      readTime: "6 min",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      category: "blog",
      content: `O branding estratégico é muito mais do que um logotipo bonito ou uma paleta de cores atrativa. É a alma da empresa traduzida em elementos visuais e verbais que criam uma conexão emocional com o público.

Uma marca autêntica nasce de dentro para fora. Ela reflete genuinamente os valores, propósito e personalidade da organização. Quando há alinhamento entre o que a empresa é e o que ela comunica, surge a autenticidade que os consumidores modernos tanto valorizam.

A diferenciação é outro elemento crucial. Em um mercado saturado, não basta ser bom; é preciso ser único. Isso significa encontrar seu posicionamento distintivo e comunicá-lo de forma clara e consistente em todos os pontos de contato.

A consistência visual e verbal cria reconhecimento e confiança. Cada interação que o público tem com sua marca deve reforçar a mesma mensagem e sentimento. Isso inclui desde o tom de voz nas redes sociais até a experiência de atendimento ao cliente.

O branding também deve ser flexível o suficiente para evoluir. Marcas que se mantêm relevantes são aquelas que conseguem adaptar-se às mudanças do mercado sem perder sua essência.

Finalmente, uma marca forte é construída através de experiências consistentemente positivas. Cada promessa feita pela marca deve ser cumprida na prática, criando uma reputação sólida e confiável.`
    },
    {
      title: "Redes Sociais: Estratégias para Maximizar o Alcance",
      description: "Técnicas avançadas para otimizar sua presença nas redes sociais e aumentar o engajamento orgânico.",
      author: "Adriano França",
      date: "5 de Janeiro, 2025",
      readTime: "10 min",
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      category: "tutorial",
      content: `As redes sociais se tornaram o epicentro da comunicação digital moderna. Para maximizar o alcance orgânico, é essencial entender os algoritmos e criar conteúdo que gere engajamento genuíno.

A primeira regra é conhecer cada plataforma profundamente. O que funciona no Instagram pode não funcionar no LinkedIn. Cada rede tem sua própria linguagem, formato preferido e comportamento de usuário característico.

O timing é crucial. Publicar no momento certo pode significar a diferença entre alcançar centenas ou milhares de pessoas. Isso requer análise de dados constante e ajustes baseados no comportamento específico da sua audiência.

A criação de comunidade é mais valiosa que o número de seguidores. Mil seguidores engajados valem mais que dez mil passivos. Foque em criar conversas significativas e responder genuinamente aos comentários.

O conteúdo visual continua dominando. Vídeos, especialmente, têm performance superior na maioria das plataformas. Mas não se trata apenas de qualidade técnica – o conteúdo precisa ser emocionalmente envolvente.

A colaboração com influenciadores e outros criadores pode exponencialmente aumentar seu alcance. Mas é importante escolher parceiros que tenham alinhamento genuíno com sua marca e valores.

Por fim, a análise de métricas deve guiar suas decisões. Não se baseie apenas em impressões – analise engajamento, salvamentos, compartilhamentos e, principalmente, ações que levam a conversões reais.`
    },
    {
      title: "SEO e Content Marketing: A Combinação Perfeita",
      description: "Como integrar estratégias de SEO com marketing de conteúdo para dominar os resultados de busca.",
      author: "Adriano França",
      date: "2 de Janeiro, 2025",
      readTime: "7 min",
      imageUrl: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop",
      category: "tutorial",
      content: `A união entre SEO e marketing de conteúdo representa uma das estratégias mais poderosas do marketing digital atual. Quando bem executada, essa combinação gera tráfego qualificado e autoridade de marca simultaneamente.

O SEO moderno prioriza a intenção de busca do usuário. Isso significa que criar conteúdo apenas para ranquear palavras-chave específicas não é mais suficiente. É preciso entender o que o usuário realmente está procurando e entregar valor genuíno.

A pesquisa de palavras-chave deve ser o ponto de partida, mas não o destino final. Use-a para entender as dúvidas e necessidades do seu público, depois crie conteúdo abrangente que responda completamente a essas questões.

A estrutura do conteúdo é fundamental para o SEO. Use headers hierárquicos (H1, H2, H3) de forma lógica, crie parágrafos digestíveis e inclua elementos visuais que quebrem o texto e melhorem a experiência do usuário.

A velocidade de carregamento e a experiência mobile são fatores de ranqueamento cruciais. Não adianta ter o melhor conteúdo do mundo se o site é lento ou não funciona bem em dispositivos móveis.

O link building orgânico acontece naturalmente quando você cria conteúdo verdadeiramente valioso. Foque em ser uma fonte confiável de informação em sua área de expertise.

Finalmente, a consistência é chave. O SEO é uma estratégia de longo prazo que requer paciência e persistência. Os resultados podem demorar para aparecer, mas quando chegam, tendem a ser duradouros e escaláveis.`
    },
    {
      title: "Análise de Dados: Medindo o Sucesso da sua Comunicação",
      description: "Aprenda a interpretar métricas e transformar dados em insights acionáveis para sua estratégia de comunicação.",
      author: "Adriano França",
      date: "28 de Dezembro, 2024",
      readTime: "9 min",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "case-study",
      content: `A análise de dados transformou a comunicação de uma arte subjetiva em uma ciência mensurável. Hoje, é possível rastrear cada interação e entender precisamente o que funciona e o que precisa ser ajustado.

O primeiro passo é definir KPIs (Key Performance Indicators) alinhados com os objetivos de negócio. Não se perca em métricas de vaidade – foque em indicadores que realmente importam para o crescimento da empresa.

A implementação de ferramentas de analytics deve ser feita de forma estratégica. Google Analytics, Facebook Insights, LinkedIn Analytics – cada plataforma oferece dados únicos que, quando combinados, criam um panorama completo da performance.

A segmentação de audiência nos dados revela insights valiosos. Diferentes grupos podem responder de forma completamente distinta às mesmas campanhas. Entender essas nuances permite otimizações mais precisas.

O funil de conversão deve ser mapeado e monitorado constantemente. Identifique onde os usuários estão saindo e por quê. Cada ponto de atrito identificado é uma oportunidade de melhoria.

A análise competitiva também é fundamental. Ferramentas como SEMrush e Ahrefs permitem entender o que a concorrência está fazendo e identificar lacunas que podem ser exploradas.

Por fim, transformar dados em insights acionáveis é uma habilidade que deve ser desenvolvida. Não basta coletar informações – é preciso interpretá-las corretamente e implementar mudanças baseadas nessas descobertas.`
    },
    {
      title: "Comunicação Corporativa: Construindo Relacionamentos Duradouros",
      description: "Estratégias para desenvolver uma comunicação corporativa eficaz que fortalece a reputação da marca.",
      author: "Adriano França",
      date: "25 de Dezembro, 2024",
      readTime: "11 min",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      category: "case-study",
      content: `A comunicação corporativa eficaz é a base para relacionamentos duradouros com todos os stakeholders da empresa. Ela vai muito além do marketing tradicional, abrangendo relações com investidores, funcionários, mídia e comunidade.

A transparência se tornou um valor não negociável na comunicação corporativa moderna. As empresas que se comunicam de forma aberta e honesta, especialmente durante crises, constroem maior confiança e resiliência de marca.

A comunicação interna é tão importante quanto a externa. Funcionários engajados e bem informados são os melhores embaixadores da marca. Investir em canais de comunicação interna eficazes gera resultados que se refletem externamente.

O gerenciamento de crise deve ser proativo, não reativo. Ter protocolos claros de comunicação para diferentes cenários pode significar a diferença entre superar uma crise fortalecido ou sofrer danos duradouros à reputação.

A personalização também chegou à comunicação corporativa. Diferentes stakeholders têm diferentes necessidades de informação. A mensagem principal pode ser a mesma, mas a forma de comunicá-la deve ser adaptada para cada audiência.

O storytelling corporativo humaniza a marca. Contar a história da empresa, seus valores e propósito de forma envolvente cria conexões emocionais que vão além de transações comerciais.

Finalmente, a medição da reputação corporativa deve ser constante. Ferramentas de monitoramento de mídia e pesquisas de percepção ajudam a entender como a empresa é vista e identificar oportunidades de melhoria na comunicação.`
    }
  ];

  // Função para obter imagem padrão quando não há imageUrl
  const getPostImage = (post: any, index: number) => {
    if (post.imageUrl) return post.imageUrl;
    return defaultImages[index % defaultImages.length];
  };

  // Usar posts criados se existirem, senão usar os padrão
  const featuredPost = posts.find(post => post.featured) || {
    ...defaultFeaturedArticle
  };

  const allPosts = posts.length > 0 ? posts.filter(post => !post.featured) : defaultBlogPosts;

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
