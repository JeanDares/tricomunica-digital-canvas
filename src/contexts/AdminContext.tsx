
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl?: string; // tornado opcional
  backgroundImage?: string; // novo campo opcional
  category: 'blog' | 'noticia' | 'tutorial' | 'case-study';
  featured?: boolean;
}

interface AdminContextType {
  isAuthenticated: boolean;
  posts: Post[];
  login: (username: string, password: string) => boolean;
  logout: () => void;
  addPost: (post: Omit<Post, 'id' | 'date'>) => void;
  deletePost: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Carregar autenticação do localStorage
    const auth = localStorage.getItem('admin-auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }

    // Carregar posts do localStorage
    const savedPosts = localStorage.getItem('blog-posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === 'adriano franca' && password === '123456789') {
      setIsAuthenticated(true);
      localStorage.setItem('admin-auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin-auth');
  };

  const addPost = (postData: Omit<Post, 'id' | 'date'>) => {
    const newPost: Post = {
      ...postData,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('blog-posts', JSON.stringify(updatedPosts));
  };

  const deletePost = (id: string) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('blog-posts', JSON.stringify(updatedPosts));
  };

  return (
    <AdminContext.Provider value={{
      isAuthenticated,
      posts,
      login,
      logout,
      addPost,
      deletePost
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};
