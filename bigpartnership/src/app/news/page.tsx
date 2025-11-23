"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import HeaderSection from "../../components/sections/header"
import Footer from "../../components/sections/footer"

interface NewsArticle {
  _id: string
  title: string
  content: string
  author: string
  date: string
  category: string
  image?: string
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/news')
      if (!response.ok) {
        throw new Error('Failed to fetch news')
      }
      const data = await response.json()
      setNews(data)
    } catch (error) {
      setError('Failed to load news articles')
      console.error('Error fetching news:', error)
    } finally {
      setLoading(false)
    }
  }

  const getNewsByCategory = (category: string) => {
    return news.filter(article => article.category?.toLowerCase() === category.toLowerCase()).slice(0, 3)
  }

  const NewsSection = ({ title, category }: { title: string; category: string }) => {
    const categoryNews = getNewsByCategory(category)
    
    if (categoryNews.length === 0) return null

    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">{title}</h2>
            <div className="text-teal-600 hover:text-teal-700 transition-colors">
              <Link href={`/news/category/${category.toLowerCase()}`} className="text-lg font-medium underline decoration-2 underline-offset-4">
                More News →
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryNews.map((article) => (
              <article key={article._id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                <Link href={`/news/${article._id}`} className="block">
                  <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100">
                      <svg className="w-16 h-16 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      {article.category && (
                        <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-3">
                          {article.category}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-teal-700 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <time className="font-medium">
                          {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </time>
                        {article.author && (
                          <span className="font-medium">
                            By {article.author}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-teal-600 font-semibold group-hover:text-teal-700 transition-colors">
                        Read Article
                      </span>
                      <ChevronRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <HeaderSection />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 border-b border-gray-200">
          <div className="container mx-auto px-6 py-24">
            <div className="text-center">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">Latest News</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Stay informed with our latest updates, insights, and stories from the world of education partnerships
              </p>
            </div>
          </div>
        </section>

        {loading && (
          <div className="flex justify-center items-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-700"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-24">
            <p className="text-red-600 text-lg">{error}</p>
          </div>
        )}

        {!loading && !error && news.length > 0 && (
          <>
            <NewsSection title="Announcements" category="Announcements" />
            <NewsSection title="Insights" category="Insights" />
            <NewsSection title="Stories" category="Stories" />
            
            {/* Show all news if no categorized news exists */}
            {getNewsByCategory('Announcements').length === 0 && 
             getNewsByCategory('Insights').length === 0 && 
             getNewsByCategory('Stories').length === 0 && (
              <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">

                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.slice(0, 6).map((article) => (
                      <article key={article._id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                        <Link href={`/news/${article._id}`} className="block">
                          <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                            {article.image ? (
                              <Image 
                                src={`http://localhost:5000/${article.image}`} 
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100">
                                <svg className="w-16 h-16 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="p-6">
                            <div className="mb-4">
                              {article.category && (
                                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-3">
                                  {article.category}
                                </span>
                              )}
                              <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-teal-700 transition-colors duration-300">
                                <div dangerouslySetInnerHTML={{ __html: article.title }} />
                              </h3>
                              <div className="flex items-center justify-between text-sm text-gray-500">
                                <time className="font-medium">
                                  {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                </time>
                                {article.author && (
                                  <span className="font-medium">
                                    By {article.author}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <span className="text-teal-600 font-semibold group-hover:text-teal-700 transition-colors">
                                Read Article
                              </span>
                              <ChevronRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}

        {!loading && !error && news.length === 0 && (
          <div className="text-center py-24">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles yet</h3>
              <p className="text-gray-600">Check back soon for the latest updates and announcements.</p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}