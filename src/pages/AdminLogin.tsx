
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, User } from 'lucide-react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isAuthenticated, login } = useAdmin();

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-secondary-foreground">Admin Login</h1>
          <p className="text-secondary-foreground/60 mt-2">Acesso restrito à área administrativa</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="username" className="flex items-center space-x-2 mb-2">
              <User size={16} />
              <span>Usuário</span>
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              required
            />
          </div>

          <div>
            <Label htmlFor="password" className="flex items-center space-x-2 mb-2">
              <Lock size={16} />
              <span>Senha</span>
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>

        <div className="mt-6 text-center text-xs text-secondary-foreground/40">
          <p>Credenciais de teste:</p>
          <p>Usuário: adriano franca | Senha: 123456789</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
