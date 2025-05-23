"use client";

import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { getArticles, normalizeArticlesData } from '@/lib/api';
import Link from 'next/link';
import { FaArrowRight, FaCalendarAlt, FaSearch } from 'react-icons/fa';

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const pageSize = 9;

  const fetchArticles = async (pageNum: number, search: string = '') => {
    try {
      setLoading(true);
      
      // Fetch all articles
      const response = await getArticles();
      let { articles } = normalizeArticlesData(response);
      
      // Filter articles by search term if provided
      if (search) {
        const searchLower = search.toLowerCase();
        articles = articles.filter(article => 
          article.title.toLowerCase().includes(searchLower) || 
          (article.summary && article.summary.toLowerCase().includes(searchLower)) || 
          article.content.toLowerCase().includes(searchLower)
        );
      }
      
      // Simple client-side pagination
      const totalItems = articles.length;
      const totalPages = Math.ceil(totalItems / pageSize);
      const startIndex = (pageNum - 1) * pageSize;
      const paginatedArticles = articles.slice(startIndex, startIndex + pageSize);
      
      setArticles(paginatedArticles);
      setTotalPages(totalPages);
      setError(null);
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError('No se pudieron cargar las noticias. Por favor, intente de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(page);
  }, [page]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1); // Reset to first page when searching
    fetchArticles(1, searchTerm);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-SV', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center mt-8">
        <ul className="flex space-x-1">
          {page > 1 && (
            <li>
              <button
                onClick={() => setPage(page - 1)}
                className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700"
              >
                Anterior
              </button>
            </li>
          )}
          
          {pageNumbers.map(num => (
            <li key={num}>
              <button
                onClick={() => setPage(num)}
                className={`px-3 py-2 rounded ${
                  page === num 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {num}
              </button>
            </li>
          ))}
          
          {page < totalPages && (
            <li>
              <button
                onClick={() => setPage(page + 1)}
                className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700"
              >
                Siguiente
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  };

  return (
    <Layout>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Noticias y Publicaciones</h1>
          
          {/* Search Bar */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="flex items-center w-full md:w-1/2 lg:w-1/3">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar noticias..."
                  className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="absolute right-0 top-0 h-full px-4">
                  <FaSearch className="text-gray-500" />
                </button>
              </div>
            </form>
          </div>

          {loading && page === 1 ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-600">{error}</div>
          ) : articles.length === 0 ? (
            <div className="text-center py-20 text-gray-600">
              {searchTerm ? 'No se encontraron noticias que coincidan con su búsqueda.' : 'No hay noticias disponibles en este momento.'}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg">
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

              {/* Loading indicator for subsequent pages */}
              {loading && page > 1 && (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              )}

              {/* Pagination */}
              {renderPagination()}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;