"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Mail, Users, BookOpen, ArrowRight, BarChart3, LogOut } from 'lucide-react'

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const stats = { contacts: 0, partners: 0, news: 0 }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin/login')
  }

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    } else {
      router.push('/admin/login')
    }
    setLoading(false)
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-teal-700 border-t-transparent"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground text-lg">Manage your content and submissions</p>
          </div>
          <div className="flex gap-3">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Back to Website
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* Contacts */}
          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium mb-1">Contact Submissions</p>
                <p className="text-4xl font-bold text-primary">{stats.contacts}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Total incoming messages</p>
          </div>

          {/* Partners */}
          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium mb-1">Partners</p>
                <p className="text-4xl font-bold text-accent">{stats.partners}</p>
              </div>
              <div className="p-3 bg-accent/10 rounded-lg text-accent">
                <Users className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Active partnerships</p>
          </div>

          {/* News */}
          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium mb-1">News Articles</p>
                <p className="text-4xl font-bold text-secondary">{stats.news}</p>
              </div>
              <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Published articles</p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-border bg-card/50 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Quick Actions</h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <Link 
                href="/admin/contacts"
                className="group flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">View Contacts</p>
                  <p className="text-sm text-muted-foreground">Manage contact submissions</p>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
              </Link>

              <Link 
                href="/admin/partners"
                className="group flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-accent/5 hover:border-accent/50 transition-all duration-300"
              >
                <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent/20 transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Manage Partners</p>
                  <p className="text-sm text-muted-foreground">Create and edit partners</p>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:text-accent group-hover:translate-x-1 transition-all mt-1" />
              </Link>

              <Link 
                href="/admin/news"
                className="group flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-secondary/5 hover:border-secondary/50 transition-all duration-300"
              >
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary/20 transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">Manage News</p>
                  <p className="text-sm text-muted-foreground">Create and edit articles</p>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:text-secondary group-hover:translate-x-1 transition-all mt-1" />
              </Link>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
