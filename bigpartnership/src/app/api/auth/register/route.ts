import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory storage (replace with database)
const users: Array<{ id: string; name: string; email: string; password: string }> = []

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    // Check if user exists
    const existingUser = users.find(user => user.email === email)
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists with this email' },
        { status: 400 }
      )
    }

    // Create user (in production, hash password)
    const user = {
      id: Date.now().toString(),
      name,
      email,
      password // In production: await bcrypt.hash(password, 12)
    }
    users.push(user)

    return NextResponse.json({
      message: 'User registered successfully',
      user: { id: user.id, name: user.name, email: user.email }
    })

  } catch (error) {
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    )
  }
}