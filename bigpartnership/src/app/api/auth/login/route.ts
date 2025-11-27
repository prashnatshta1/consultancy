import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory storage (same as register)
const users: Array<{ id: string; name: string; email: string; password: string }> = []

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Find user
    const user = users.find(u => u.email === email)
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Check password (in production: await bcrypt.compare(password, user.password))
    if (user.password !== password) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    return NextResponse.json({
      message: 'Login successful',
      user: { id: user.id, name: user.name, email: user.email }
    })

  } catch (error) {
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}