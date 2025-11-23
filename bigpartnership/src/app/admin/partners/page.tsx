"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Plus, Trash2, Edit2, ImageIcon, Loader2, Users, AlertCircle } from 'lucide-react'

interface Partner {
  _id: string
  title: string
  description: string
  image?: string
}

export default function AdminPartners() {
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null as File | null
  })

  useEffect(() => {
    fetchPartners()
  }, [])

  const fetchPartners = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/partners')
      const data = await response.json()
      setPartners(data)
    } catch (error) {
      console.error('Error fetching partners:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('title', formData.title)
      formDataToSend.append('description', formData.description)
      if (formData.image) {
        formDataToSend.append('image', formData.image)
      }

      const url = editingId 
        ? `http://localhost:5000/api/partners/${editingId}`
        : 'http://localhost:5000/api/partners'
      
      const response = await fetch(url, {
        method: editingId ? 'PUT' : 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        fetchPartners()
        resetForm()
      }
    } catch (error) {
      console.error('Error saving partner:', error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this partner?')) {
      try {
        await fetch(`http://localhost:5000/api/partners/${id}`, { method: 'DELETE' })
        fetchPartners()
      } catch (error) {
        console.error('Error deleting partner:', error)
      }
    }
  }

  const handleEdit = (partner: Partner) => {
    setFormData({
      title: partner.title,
      description: partner.description,
      image: null
    })
    setEditingId(partner._id)
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetForm = () => {
    setFormData({ title: '', description: '', image: null })
    setEditingId(null)
    setShowForm(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-background/95 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto mb-3" />
          <p className="text-muted-foreground">Loading partners...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/95">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <Link 
              href="/admin"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              title="Back to dashboard"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Partners Management</h1>
              <p className="text-muted-foreground text-sm mt-1">{partners.length} partners registered</p>
            </div>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            {showForm ? 'Cancel' : 'Add Partner'}
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-card border border-border rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">{editingId ? 'Edit' : 'Create'} Partner</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-2.5 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground transition-all"
                  placeholder="Enter partner name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-2.5 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground transition-all resize-none h-32"
                  placeholder="Enter partner description"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({...formData, image: e.target.files?.[0] || null})}
                  className="w-full px-4 py-2.5 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground file:mr-3 file:px-3 file:py-1.5 file:bg-primary/10 file:text-primary file:border-0 file:rounded file:cursor-pointer file:font-medium hover:file:bg-primary/20 transition-all"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {editingId ? 'Update' : 'Create'} Partner
                </button>
                <button 
                  type="button" 
                  onClick={resetForm}
                  className="px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 font-medium transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Partners List */}
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-border bg-card/50 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Partners ({partners.length})</h2>
          </div>

          {partners.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No partners yet.</p>
              <p className="text-muted-foreground text-sm mt-2">Add your first partner to get started.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-card/50">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Image</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Title</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Description</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {partners.map((partner) => (
                    <tr key={partner._id} className="hover:bg-muted/50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {partner.image ? (
                          <Image
                            src={`http://localhost:5000/${partner.image}` || "/placeholder.svg"}
                            alt={partner.title}
                            width={48}
                            height={48}
                            className="h-12 w-12 rounded-lg object-cover border border-border"
                          />
                        ) : (
                          <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center border border-border">
                            <ImageIcon className="w-5 h-5 text-muted-foreground" />
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-medium text-foreground truncate max-w-xs">{partner.title}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-muted-foreground truncate max-w-md">{partner.description}</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEdit(partner)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-primary hover:bg-primary/10 rounded-lg transition-colors duration-200"
                          >
                            <Edit2 className="w-4 h-4" />
                            <span className="text-sm font-medium">Edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(partner._id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-destructive hover:bg-destructive/10 rounded-lg transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span className="text-sm font-medium">Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}