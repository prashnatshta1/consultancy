"use client"

import { useState, useEffect } from "react"
import { useParams } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, ChevronDown } from 'lucide-react'
import HeaderSection from "../../../components/sections/header"
import Footer from "../../../components/sections/footer"
import { stripHtmlTags } from "../../../utils/text-cleaner"

interface NewsArticle {
  _id: string
  title: string
  content: string
  author: string
  date: string
  category: string
  image?: string
}

export default function NewsDetailPage() {
  const params = useParams()
  const [article, setArticle] = useState<NewsArticle | null>(null)
  const [allNews, setAllNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    if (params.id) {
      fetchArticles(params.id as string)
    }
  }, [params.id])

  const fetchArticles = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/news`)
      if (!response.ok) throw new Error('Failed to fetch news')
      const data = await response.json()
      setAllNews(data)
      const foundArticle = data.find((article: NewsArticle) => article._id === id)
      if (!foundArticle) throw new Error('Article not found')
      setArticle(foundArticle)
      setSelectedCategory(foundArticle.category)
    } catch (error) {
      setError('Failed to load article')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return 'No date'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Get unique categories
  const categories = Array.from(new Set(allNews.map(a => a.category)))

  if (loading) {
    return (
      <>
        <HeaderSection />
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-teal-700 border-t-transparent"></div>
        </div>
        <Footer />
      </>
    )
  }

  if (error || !article) {
    return (
      <>
        <HeaderSection />
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
            <Link href="/news" className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <HeaderSection />
      <main className="bg-white">
        {/* Breadcrumb */}
        <div className="border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <Link href="/news" className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 transition-colors font-medium group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm sm:text-base">Back to News</span>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12">
            {/* Article Content */}
            <div className="lg:col-span-3">
              {/* Category & Meta */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {article.category && (
                    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-900 text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {stripHtmlTags(article.title)}
                </h1>

                {/* Article Meta Info */}
                <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <time className="text-sm font-medium">
                      {formatDate(article.date)}
                    </time>
                  </div>
                  {article.author && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="w-4 h-4" />
                      <span className="text-sm font-medium">By {article.author}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Featured Image */}
              {article.image && (
                <div className="h-48 sm:h-64 md:h-96 lg:h-[500px] relative rounded-lg overflow-hidden mb-8 sm:mb-12 bg-gray-100">
                  <Image 
                    src={`http://localhost:5000/${article.image}`}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                <article className="space-y-4 sm:space-y-6 text-black leading-relaxed">
                  <div 
                    className="text-sm sm:text-base lg:text-lg text-black leading-relaxed [&>*]:text-black [&>*]:bg-transparent"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </article>
              </div>

              {/* Back Link */}
              <div className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
                <Link href="/news" className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 transition-colors font-medium group">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm sm:text-base">View all articles</span>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              {/* Category Filter */}
              <div className="sticky top-24 bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between text-lg font-semibold text-gray-900 hover:text-teal-700 transition-colors"
                >
                  <span>Category</span>
                  <ChevronDown size={20} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="mt-4 space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category)
                          setIsDropdownOpen(false)
                        }}
                        className={`w-full text-left px-3 py-2 rounded transition-colors ${
                          selectedCategory === category
                            ? 'bg-teal-700 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}

                {selectedCategory && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs uppercase text-gray-600 font-semibold mb-3">
                      Related {selectedCategory}
                    </p>
                    <ul className="space-y-3">
                      {allNews
                        .filter(
                          (item) => item.category === selectedCategory && item._id !== article._id
                        )
                        .slice(0, 4)
                        .map((item) => (
                          <li key={item._id}>
                            <Link
                              href={`/news/${item._id}`}
                              className="text-xs sm:text-sm text-gray-700 hover:text-teal-700 transition-colors font-medium line-clamp-2"
                            >
                              {stripHtmlTags(item.title)}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
