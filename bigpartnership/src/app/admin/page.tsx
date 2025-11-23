"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Mail, Users, BookOpen, ArrowRight, BarChart3 } from 'lucide-react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    contacts: 0,
    partners: 0,
    news: 0
  })

  const fetchStats = async () => {
    try {
      const [contactsRes, partnersRes, newsRes] = await Promise.all([
        fetch('http://localhost:5000/api/contact'),
        fetch('http://localhost:5000/api/partners'),
        fetch('http://localhost:5000/api/news')
      ])

      const [contacts, partners, news] = await Promise.all([
        contactsRes.json(),
        partnersRes.json(),
        newsRes.json()
      ])

      setStats({
        contacts: contacts.length || 0,
        partners: partners.length || 0,
        news: news.length || 0
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  useEffect(() => {
    let mounted = true
    const loadStats = async () => {
      if (mounted) {
        await fetchStats()
      }
    }
    loadStats()
    return () => { mounted = false }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/95">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground text-lg">Manage your content and submissions</p>
          </div>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
          >
            Back to Website
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Contacts Card */}
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

          {/* Partners Card */}
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

          {/* News Card */}
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
              {/* View Contacts */}
              <Link 
                href="/admin/contacts"
                className="group flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">View Contacts</p>
                  <p className="text-sm text-muted-foreground">Manage contact submissions</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </Link>

              {/* Manage Partners */}
              <Link 
                href="/admin/partners"
                className="group flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-accent/5 hover:border-accent/50 transition-all duration-300"
              >
                <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent/20 transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Manage Partners</p>
                  <p className="text-sm text-muted-foreground">Create and edit partners</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </Link>

              {/* Manage News */}
              <Link 
                href="/admin/news"
                className="group flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-secondary/5 hover:border-secondary/50 transition-all duration-300"
              >
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary/20 transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">Manage News</p>
                  <p className="text-sm text-muted-foreground">Create and edit articles</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
