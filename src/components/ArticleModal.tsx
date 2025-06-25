import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, Check, Copy, Facebook, Share2, User, X } from "lucide-react";
import React, { useState } from "react";

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: {
    id?: string;
    title: string;
    description: string;
    author: string;
    date: string;
    readTime: string;
    backgroundImage: string;
    content: string;
  };
}

const ArticleModal: React.FC<ArticleModalProps> = ({
  isOpen,
  onClose,
  article,
}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  // URL do artigo (simulada - você pode ajustar conforme sua estrutura)
  const articleUrl = `${window.location.origin}/blog/${
    article.id || "article"
  }`;

  // Função para compartilhar no Facebook
  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      articleUrl
    )}&quote=${encodeURIComponent(article.title)}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  // Função para compartilhar no Twitter/X
  // const shareOnTwitter = () => {
  //   const twitterText = `${article.title} - ${article.description}`;
  //   const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  //     twitterText
  //   )}&url=${encodeURIComponent(articleUrl)}&via=tricomunica`;
  //   window.open(twitterUrl, "_blank", "width=600,height=400");
  // };

  // // Função para compartilhar no LinkedIn
  // const shareOnLinkedIn = () => {
  //   const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
  //     articleUrl
  //   )}`;
  //   window.open(linkedinUrl, "_blank", "width=600,height=400");
  // };

  // Função para copiar link
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar:", err);
      // Fallback para navegadores mais antigos
      const textArea = document.createElement("textarea");
      textArea.value = articleUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  // Função para compartilhamento nativo (mobile)
  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: articleUrl,
        });
      } catch (err) {
        console.log("Erro ao compartilhar:", err);
        copyToClipboard(); // Fallback para copiar link
      }
    } else {
      copyToClipboard(); // Fallback para desktop
    }
  };

  // Função para formatar conteúdo com markdown básico
  const formatContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => {
      // Substituir **texto** por <strong>texto</strong>
      const formattedParagraph = paragraph
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>");

      return (
        <div
          key={index}
          className="mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        />
      );
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header Image */}
        <div
          className="h-64 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${article.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-3xl font-bold text-secondary-foreground mb-4">
              {article.title}
            </DialogTitle>

            {/* Meta info */}
            <div className="flex items-center space-x-6 text-sm text-secondary-foreground/60 mb-4">
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>Por {article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary">
                {article.readTime} de leitura
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex items-center space-x-3 mb-6 pb-6 border-b">
              <span className="text-secondary-foreground/70 text-sm">
                Compartilhar:
              </span>

              <button
                onClick={shareOnFacebook}
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-110"
                title="Compartilhar no Facebook"
              >
                <Facebook size={16} />
              </button>

              {/* <button
                onClick={shareOnTwitter}
                className="p-2 bg-gray-900 hover:bg-black text-white rounded-full transition-all duration-300 hover:scale-110"
                title="Compartilhar no Twitter/X"
              >
                <Twitter size={16} />
              </button>

              <button
                onClick={shareOnLinkedIn}
                className="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-all duration-300 hover:scale-110"
                title="Compartilhar no LinkedIn"
              >
                <Linkedin size={16} />
              </button> */}

              <button
                onClick={copyToClipboard}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  copySuccess
                    ? "bg-green-600 text-white"
                    : "bg-secondary hover:bg-secondary/80 text-primary"
                }`}
                title={copySuccess ? "Link copiado!" : "Copiar link"}
              >
                {copySuccess ? <Check size={16} /> : <Copy size={16} />}
              </button>

              <button
                onClick={shareNative}
                className="p-2 bg-secondary hover:bg-secondary/80 rounded-full transition-all duration-300 hover:scale-110 text-primary"
                title="Compartilhar"
              >
                <Share2 size={16} />
              </button>
            </div>
          </DialogHeader>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed font-medium">
              {article.description}
            </p>

            <div className="text-secondary-foreground leading-relaxed space-y-4">
              {formatContent(article.content)}
            </div>
          </div>

          {/* Footer com call-to-action */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-secondary-foreground mb-2">
                Gostou do conteúdo?
              </h3>
              <p className="text-secondary-foreground/70 mb-4">
                Siga a Tricomunica para mais insights sobre comunicação e
                marketing digital.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://instagram.com/tri.comunica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Seguir no Instagram
                </a>
                <a
                  href="https://linkedin.com/company/tricomunica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700 text-white rounded-full text-sm font-medium hover:bg-blue-800 transition-colors"
                >
                  Conectar no LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;
