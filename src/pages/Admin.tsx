
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Plus, 
  LogOut, 
  FileText, 
  Newspaper, 
  BookOpen, 
  Briefcase,
  Trash2
} from 'lucide-react';

const Admin = () => {
  const { isAuthenticated, logout, addPost, posts, deletePost } = useAdmin();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    author: 'Adriano França',
    readTime: '5 min',
    imageUrl: '',
    category: 'blog' as 'blog' | 'noticia' | 'tutorial' | 'case-study',
    featured: false
  });

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPost(formData);
    setFormData({
      title: '',
      description: '',
      content: '',
      author: 'Adriano França',
      readTime: '5 min',
      imageUrl: '',
      category: 'blog',
      featured: false
    });
    alert('Post criado com sucesso!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const categoryIcons = {
    blog: FileText,
    noticia: Newspaper,
    tutorial: BookOpen,
    'case-study': Briefcase
  };

  const categoryNames = {
    blog: 'Blog',
    noticia: 'Notícia',
    tutorial: 'Tutorial',
    'case-study': 'Case Study'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-secondary-foreground">Painel Administrativo</h1>
            <Button onClick={logout} variant="outline" className="flex items-center space-x-2">
              <LogOut size={16} />
              <span>Sair</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário de Criação */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Plus className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">Criar Novo Post</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Título *</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Digite o título do post"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Categoria *</Label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    >
                      <option value="blog">Blog</option>
                      <option value="noticia">Notícia</option>
                      <option value="tutorial">Tutorial</option>
                      <option value="case-study">Case Study</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Descrição *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Descrição resumida do post"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="content">Conteúdo Completo *</Label>
                  <Textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Escreva o conteúdo completo do post aqui..."
                    className="min-h-[200px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="author">Autor</Label>
                    <Input
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="readTime">Tempo de Leitura</Label>
                    <Input
                      id="readTime"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleInputChange}
                      placeholder="5 min"
                    />
                  </div>
                  <div className="flex items-end">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={handleInputChange}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm">Post em destaque</span>
                    </label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="imageUrl">URL da Imagem</Label>
                  <Input
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    placeholder="https://exemplo.com/imagem.jpg"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Criar Post
                </Button>
              </form>
            </div>
          </div>

          {/* Lista de Posts */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Posts Criados ({posts.length})</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {posts.map((post) => {
                  const CategoryIcon = categoryIcons[post.category];
                  return (
                    <div key={post.id} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <CategoryIcon size={14} className="text-primary" />
                          <span className="text-xs text-secondary-foreground/60">
                            {categoryNames[post.category]}
                          </span>
                          {post.featured && (
                            <span className="text-xs bg-primary text-white px-2 py-0.5 rounded">
                              Destaque
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-medium line-clamp-2">{post.title}</h4>
                        <p className="text-xs text-secondary-foreground/60 mt-1">{post.date}</p>
                      </div>
                      <Button
                        onClick={() => deletePost(post.id)}
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  );
                })}
                {posts.length === 0 && (
                  <p className="text-secondary-foreground/60 text-center py-8">
                    Nenhum post criado ainda
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
