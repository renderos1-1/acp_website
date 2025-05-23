"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import { getArticleBySlug, normalizeArticleData } from '@/lib/api';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaShare } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import '../articles.css';

const ArticleDetailPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<any | null>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const slug = typeof params.slug === 'string' ? params.slug : Array.isArray(params.slug) ? params.slug[0] : '';

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await getArticleBySlug(slug);
        if (response) {
          const normalizedArticle = normalizeArticleData(response.data);
          setArticle(normalizedArticle);
          setError(null);
        } else {
          setError('Artículo no encontrado');
        }
      } catch (err) {
        console.error('Error fetching article:', err);
        setError('No se pudo cargar el artículo solicitado. Por favor, intente de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-SV', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  const shareArticle = () => {
    if (navigator.share) {
      navigator
        .share({
          title: article?.title,
          text: article?.summary,
          url: window.location.href,
        })
        .catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center py-24">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </Layout>
    );
  }

  if (error || !article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {error || 'Artículo no encontrado'}
            </h2>
            <p className="text-gray-600 mb-6">
              Lo sentimos, el artículo que está buscando no está disponible.
            </p>
            <Link href="/noticias">
              <button className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded transition-colors duration-300">
                <FaArrowLeft className="mr-2" />
                Volver a noticias
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <button 
              onClick={() => router.back()} 
              className="inline-flex items-center text-gray-700 hover:text-gray-900"
            >
              <FaArrowLeft className="mr-2" /> Volver
            </button>
          </div>
          
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Featured Image */}
            {article.featuredImage ? (
              <div className="w-full h-72 md:h-96 overflow-hidden">
                <img 
                  src={article.featuredImage.url} 
                  alt={article.featuredImage.alternativeText || article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-72 md:h-96 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-xl">CAÑAS AUDITORES Y CONSULTORES</span>
              </div>
            )}
            
            {/* Content Container */}
            <div className="p-6 md:p-10">
              {/* Meta Information */}
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <FaCalendarAlt className="mr-2" size={14} />
                <span>{formatDate(article.publishedAt)}</span>
                
                {article.category && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{article.category}</span>
                  </>
                )}
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{article.title}</h1>
              
              {/* Summary */}
              <div className="text-lg text-gray-700 mb-8 font-medium italic border-l-4 border-gray-300 pl-4 py-2">
                {article.summary}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {/* Share Button */}
                <button 
                  onClick={shareArticle}
                  className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition-colors"
                >
                  <FaShare className="mr-2" /> Compartir
                </button>
              </div>
              
              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{article.content}</ReactMarkdown>
              </div>
              
              {/* Documents/PDFs Section */}
              {article.documents && (
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Documentos Adjuntos</h3>
                  {article.documents.length > 0 ? (
                    <div className="space-y-3">
                      {article.documents.map((doc: { id: number; name: string; url: string; size: number }) => (
                        <div key={doc.id} className="flex items-center p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <a 
                            href={doc.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:text-blue-800 hover:underline flex-grow"
                          >
                            {doc.name}
                            {doc.size > 0 && (
                              <span className="text-sm text-gray-500 ml-2">
                                ({(doc.size / 1024).toFixed(1)} KB)
                              </span>
                            )}
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No hay documentos disponibles.</p>
                  )}
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetailPage;