const API_BASE_URL = 'http://localhost:5000/api'

export const contactAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/contact`)
    if (!response.ok) throw new Error('Failed to fetch contacts')
    return response.json()
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/contact/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) throw new Error('Failed to delete contact')
    return response.json()
  }
}