import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, FileText, Filter, Newspaper } from "lucide-react";
import { useState } from "react";
import ArticleModal from "../components/ArticleModal";
import BlogCard from "../components/BlogCard";
import FeaturedArticle from "../components/FeaturedArticle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAdmin } from "../contexts/AdminContext";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  backgroundImage: string;
  content: string;
  category: string;
  featured: boolean;
}

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { posts } = useAdmin();

  // Imagens específicas para os posts
  const postImages: Record<number, string> = {
    1: "/texto1.jpeg",
    2: "/texto2.jpeg",
    3: "/texto3.jpeg",
  };

  // Imagens padrão para quando não há imagem definida
  const defaultImages = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&h=1080&fit=crop",
  ];

  // Conteúdos reais da Tricomunica
  const defaultBlogPosts: BlogPost[] = [
    {
      id: "1",
      title:
        "O Poder da Narrativa: Como Contar Boas Histórias Pode Mudar a Percepção da Sua Marca",
      description:
        "Descubra como o storytelling pode transformar sua comunicação e criar conexões emocionais duradouras com seu público.",
      author: "Tricomunica",
      date: "20 de Janeiro, 2025",
      readTime: "8 min",
      imageUrl: postImages[1],
      backgroundImage: postImages[1],
      content: `Vivemos cercados de dados, estatísticas e informações técnicas. Mas o que realmente nos conecta? Histórias. Desde os tempos mais antigos, antes mesmo da escrita, aprendemos, criamos vínculos e damos sentido ao mundo através de narrativas.

**Por que isso importa para sua marca?**

Porque marcas que contam boas histórias são lembradas. Marcas que se comunicam apenas com dados, não. No mercado saturado de hoje, onde todos dizem ter o melhor produto ou serviço, a diferença está na capacidade de criar conexão emocional.

**O que é storytelling aplicado à comunicação e marketing**

Storytelling não é inventar uma história. É revelar o enredo humano que existe por trás do que você faz. É falar das motivações, dos desafios, dos bastidores. É fazer com que o público se reconheça, sinta e crie laços.

**Exemplos práticos:**

Uma empresa de tecnologia que, em vez de listar apenas funcionalidades, compartilha a trajetória de quem criou a solução, mostrando o porquê e para quem aquilo importa.

Um pequeno produtor rural que mostra o dia a dia no campo, a dedicação por trás de cada produto, o cuidado com o processo — e não apenas o preço ou a embalagem.

Uma ONG que narra as transformações reais na vida das pessoas atendidas, ao invés de apenas divulgar números frios de impacto.

**Como começar:**

Resgate a origem da sua marca ou projeto. Qual a motivação inicial?

Mostre as pessoas por trás do negócio. Gente gera identificação.

Compartilhe erros, aprendizados e conquistas reais. Isso gera autenticidade.

Lembre-se: não precisa ser grandioso, precisa ser verdadeiro.

Negócios que se limitam a vender produtos esquecem que, no fim do dia, o que move as escolhas do consumidor é o sentimento. E sentimento se constrói com boas histórias.`,
      category: "blog",
      featured: false,
    },
    {
      id: "2",
      title:
        "Comunicação Não É Só Aparência: Como a Estratégia de Comunicação Influencia o Futuro da Sua Empresa",
      description:
        "Entenda por que comunicação estratégica vai muito além do visual e como ela define o futuro do seu negócio.",
      author: "Tricomunica",
      date: "18 de Janeiro, 2025",
      readTime: "7 min",
      imageUrl: postImages[2],
      backgroundImage: postImages[2],
      content: `Quando se fala em comunicação empresarial, muita gente ainda pensa apenas no visual: um logo bonito, um Instagram organizado, um site bem-feito. Mas comunicação estratégica vai muito além da aparência. É o que define como as pessoas percebem, confiam e se relacionam com o que você faz.

**Por que isso é estratégico?**

Porque percepção é realidade. Não adianta ser bom se o público não entende isso. Não adianta ter o melhor serviço se a sua imagem transmite amadorismo ou contradição. Comunicação não é maquiagem — é estrutura.

**Três camadas fundamentais da comunicação estratégica:**

**Identidade:** Quem você é — propósito, valores, diferenciais.
**Coerência:** O que você fala e como fala — redes sociais, site, atendimento, imprensa.
**Reputação:** Como o público percebe você — algo que se constrói ao longo do tempo.

Quando esses três elementos estão alinhados, a comunicação deixa de ser estética e passa a ser estratégica. Ela cria confiança. E confiança abre portas: de clientes, de parcerias, de oportunidades.

**O que falta quando isso não acontece:**

- Mensagens desencontradas
- Dificuldade de criar vínculo com o público
- Falta de clareza sobre o que a marca representa
- Vulnerabilidade diante de crises e boatos

Cada ponto de contato — seja um post, um e-mail, uma conversa — reforça ou enfraquece sua marca. Comunicação não é improviso, é construção contínua. E negócios que entendem isso não apenas comunicam, mas criam reputação, autoridade e valor ao longo do tempo.`,
      category: "blog",
      featured: false,
    },
    {
      id: "3",
      title:
        "Estratégia Não É Palpite: Como Planejar Comunicação e Marketing com Consistência",
      description:
        "Aprenda a criar um planejamento estratégico sólido para sua comunicação e marketing, sem achismos e com resultados mensuráveis.",
      author: "Tricomunica",
      date: "15 de Janeiro, 2025",
      readTime: "9 min",
      imageUrl: postImages[3],
      backgroundImage: postImages[3],
      content: `"Vamos fazer um post? Vamos lançar uma campanha? Vamos tentar algo novo?"

Se essas decisões surgem no improviso, o resultado costuma ser o mesmo: aleatório. E, com o tempo, a comunicação da empresa vira um mosaico desconectado de ações, sem identidade, sem coerência, sem resultado.

**Planejamento estratégico: o que realmente significa?**

Planejamento não é burocracia. É o processo de colocar no papel:
- Onde queremos chegar?
- Quem queremos impactar?
- Qual mensagem queremos passar?
- Como vamos medir se deu certo?

**O que acontece sem planejamento:**

- As redes sociais viram um amontoado de conteúdos sem unidade
- A marca fala de tudo, mas o público não entende o que ela representa
- O investimento em marketing se torna disperso e pouco eficaz
- A comunicação parece improvisada — e o público percebe isso

**Etapas práticas para estruturar a comunicação e o marketing:**

**1. Diagnóstico:** Entenda o cenário atual da marca e do mercado.

**2. Definição de objetivos:** Tenha metas claras, específicas e mensuráveis.

**3. Conhecimento do público:** Quem são as pessoas que você quer alcançar? Quais dores e desejos elas têm?

**4. Escolha dos canais e das ferramentas:** Não precisa estar em todos os lugares, mas precisa estar onde importa.

**5. Mensuração:** Monitore, avalie, ajuste. Comunicação eficiente é comunicação em movimento.

Planejamento não engessa, organiza. Não limita, dá direção. Não é sobre controlar tudo, mas sobre reduzir o improviso e aumentar as chances de resultado real.`,
      category: "tutorial",
      featured: false,
    },
  ];

  // Dados fictícios para demonstração (mantendo para quando não há posts criados)
  const defaultFeaturedArticle = {
    title: "O Futuro da Comunicação Digital: Estratégias que Conectam",
    description:
      "Explore as tendências emergentes em comunicação digital e como elas estão redefinindo a forma como as marcas se conectam com seus públicos.",
    author: "Adriano França",
    date: "15 de Janeiro, 2025",
    readTime: "12 min",
    backgroundImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop",
    content: `A comunicação digital está passando por uma transformação radical. As marcas que conseguem se adaptar a essas mudanças não apenas sobrevivem, mas prosperam em um mercado cada vez mais competitivo.

No cenário atual, a autenticidade se tornou mais importante do que nunca. Os consumidores podem identificar facilmente conteúdo artificial ou forçado, e isso afeta diretamente a percepção da marca. Por isso, é fundamental desenvolver uma voz única e consistente em todos os pontos de contato.

A personalização também se tornou um diferencial competitivo essencial. Com o avanço das tecnologias de análise de dados, é possível criar experiências cada vez mais direcionadas e relevantes para cada segmento de público.

Outro aspecto crucial é a importância do storytelling. As marcas que conseguem contar histórias envolventes e emocionalmente relevantes criam conexões mais profundas com seus públicos. Isso vai além do produto ou serviço oferecido – trata-se de criar um universo de valores e experiências.

A integração entre canais também ganhou nova dimensão. Uma estratégia omnichannel eficaz não se limita a estar presente em múltiplas plataformas, mas sim em criar uma experiência coesa e complementar em todos os pontos de contato.

Por fim, a medição e análise de resultados se tornaram mais sofisticadas. Não basta apenas contar likes e compartilhamentos – é preciso entender o real impacto da comunicação nos objetivos de negócio da empresa.

O futuro da comunicação digital está nas mãos daqueles que conseguem equilibrar tecnologia com humanização, dados com criatividade, e estratégia com autenticidade.`,
  };

  // Função para obter imagem padrão quando não há imageUrl
  const getPostImage = (post: BlogPost, index: number): string => {
    if (post.imageUrl) return post.imageUrl;
    return defaultImages[index % defaultImages.length];
  };

  // Usar posts criados se existirem, senão usar os padrão
  const featuredPost = posts.find((post) => post.featured) || {
    ...defaultFeaturedArticle,
    imageUrl: defaultFeaturedArticle.backgroundImage,
    backgroundImage: defaultFeaturedArticle.backgroundImage,
  };

  const allPosts =
    posts.length > 0
      ? posts.filter((post) => !post.featured)
      : defaultBlogPosts;

  // Filtrar posts por categoria
  const filteredPosts =
    selectedCategory === "all"
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);

  const handleReadMore = (article: BlogPost) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const categories = [
    { id: "all", name: "Todos", icon: Filter },
    { id: "blog", name: "Blog", icon: FileText },
    { id: "noticia", name: "Notícias", icon: Newspaper },
    { id: "tutorial", name: "Tutoriais", icon: BookOpen },
    { id: "case-study", name: "Case Studies", icon: Briefcase },
  ];

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return allPosts.length;
    return allPosts.filter((post) => post.category === categoryId).length;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Featured Article */}
        <FeaturedArticle
          {...featuredPost}
          backgroundImage={
            featuredPost.backgroundImage ||
            featuredPost.imageUrl ||
            defaultImages[0]
          }
        />

        {/* Blog Posts Grid */}
        <section className="py-20 bg-muted/30">
          <div className="section-padding container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 animate-fade-in">
                Últimos <span className="text-primary">Artigos</span>
              </h2>
              <p
                className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Insights, estratégias e tendências em comunicação e marketing
                digital
              </p>
            </div>

            {/* Category Filters */}
            <div
              className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {categories.map((category) => {
                const CategoryIcon = category.icon;
                const count = getCategoryCount(category.id);

                return (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
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
                    imageUrl={getPostImage(post, index) || ""}
                    onReadMore={() =>
                      handleReadMore({
                        ...post,
                        backgroundImage: getPostImage(post, index), imageUrl: getPostImage(post, index) || "",
                      })
                    }
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
              <div
                className="text-center mt-16 animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
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
