"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search, X, FileText, Users } from "lucide-react"

interface SearchItem {
  title: string
  description: string
  url: string
  type: 'page' | 'news' | 'partner'
}

const staticContent: SearchItem[] = [
  {
    title: "Apply to study",
    description: "How to apply to study at bigPartnership colleges or campus",
    url: "/apply-to-study",
    type: 'page'
  },
  {
    title: "Contact us",
    description: "Contact bigPartnership for inquiries and support",
    url: "/contact-us",
    type: 'page'
  },
  {
    title: "About us",
    description: "Learn about bigPartnership's mission and services",
    url: "/aboutus",
    type: 'page'
  },
  {
    title: "Partners",
    description: "Discover our partnerships with universities and organizations",
    url: "/partners",
    type: 'page'
  },
  {
    title: "News",
    description: "Latest news and updates from bigPartnership",
    url: "/news",
    type: 'page'
  },
  {
    title: "Impact",
    description: "Our impact on education and communities worldwide",
    url: "/impact",
    type: 'page'
  }
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchItem[]>([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [allContent, setAllContent] = useState<SearchItem[]>(staticContent)

  const fetchDynamicContent = async () => {
    try {
      const [newsRes, partnersRes] = await Promise.all([
        fetch('http://localhost:5000/api/news'),
        fetch('http://localhost:5000/api/partners')
      ])

      const [news, partners] = await Promise.all([
        newsRes.json(),
        partnersRes.json()
      ])

      const dynamicContent: SearchItem[] = [
        ...staticContent,
        ...news.map((item: { _id: string; title: string; content?: string }) => ({
          title: item.title,
          description: item.content?.substring(0, 100) + '...' || 'News article',
          url: `/news/${item._id}`,
          type: 'news' as const
        })),
        ...partners.map((item: { title: string; description?: string }) => ({
          title: item.title,
          description: item.description || 'Partner organization',
          url: '/partners',
          type: 'partner' as const
        }))
      ]

      setAllContent(dynamicContent)
    } catch (error) {
      console.error('Error fetching dynamic content:', error)
    }
  }

  useEffect(() => {
    let mounted = true
    if (isOpen) {
      const loadContent = async () => {
        if (mounted) {
          await fetchDynamicContent()
        }
      }
      loadContent()
    } else {
      setSearchQuery("")
      setSearchResults([])
      setError("")
    }
    return () => { mounted = false }
  }, [isOpen])

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setError("Please enter a keyword.")
      setSearchResults([])
      return
    }

    setError("")
    setLoading(true)
    
    const query = searchQuery.toLowerCase()
    const results = allContent.filter(
      (item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
    )
    
    setSearchResults(results)
    setLoading(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={onClose} />

      {/* Modal */}
      <div className="fixed top-32 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-auto px-4 z-50">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Search Input Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setError("")
                }}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent text-base"
                autoFocus
              />
              <button
                onClick={handleSearch}
                className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <Search size={18} />
                Search
              </button>
              <button onClick={onClose} className="p-3 text-gray-500 hover:text-gray-700 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
          </div>

          {/* Loading */}
          {loading && (
            <div className="p-6 text-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-teal-700 mx-auto"></div>
              <p className="text-gray-500 text-sm mt-2">Searching...</p>
            </div>
          )}

          {/* Results Section */}
          {!loading && searchResults.length > 0 && (
            <div className="max-h-96 overflow-y-auto">
              <div className="p-4 bg-gray-50 border-b">
                <p className="text-sm text-gray-600">{searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found</p>
              </div>
              <ul className="divide-y divide-gray-200">
                {searchResults.map((result, index) => (
                  <li key={index}>
                    <a href={result.url} onClick={onClose} className="block p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {result.type === 'news' && <FileText size={16} className="text-blue-500" />}
                          {result.type === 'partner' && <Users size={16} className="text-green-500" />}
                          {result.type === 'page' && <div className="w-4 h-4 bg-teal-500 rounded-sm" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm">{result.title}</h3>
                          <p className="text-gray-600 text-xs mt-1 line-clamp-2">{result.description}</p>
                          <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded capitalize">
                            {result.type}
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* No Results */}
          {!loading && searchQuery && searchResults.length === 0 && !error && (
            <div className="p-6 text-center">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">No results found for &quot;{searchQuery}&quot;</p>
              <p className="text-gray-400 text-xs mt-1">Try different keywords or check spelling</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
