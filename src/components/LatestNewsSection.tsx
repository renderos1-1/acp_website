"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { getArticles, normalizeArticlesData } from '@/lib/api';

const LatestNewsSection: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await getArticles();
        
        // Get articles and limit to 3
        const { articles } = normalizeArticlesData(response);
        setArticles(articles.slice(0, 3));
        setError(null);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('No se pudieron cargar las noticias. Por favor, intente de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-SV', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Noticias y Publicaciones</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Manténgase informado sobre las últimas actualizaciones en normativas contables, tributarias y empresariales
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-600">{error}</div>
        ) : articles.length === 0 ? (
          <div className="text-center py-8 text-gray-600">No hay noticias disponibles en este momento.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div key={article.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg">
                    {article.featuredImage ? (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.featuredImage.url} 
                        alt={article.featuredImage.alternativeText || article.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105" 
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-lg">ACP</span>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <FaCalendarAlt className="mr-2" size={14} />
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.summary}</p>
                    
                    <div className="flex flex-col space-y-3">
                      <Link href={`/noticias/${article.slug}`} className="inline-flex items-center text-gray-800 font-medium hover:text-gray-600">
                        Leer más <FaArrowRight className="ml-2" size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link 
                href="/noticias"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded transition-colors duration-300"
              >
                Ver todas las noticias
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LatestNewsSection;