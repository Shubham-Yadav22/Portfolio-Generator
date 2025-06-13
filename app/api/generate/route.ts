import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

// In-memory storage for portfolios (replace with database in production)
const portfolios = new Map()

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const id = uuidv4()
    
    // Store the portfolio data
    portfolios.set(id, data)
    
    return NextResponse.json({
      success: true,
      data: {
        id,
        ...data
      }
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to generate portfolio"
      },
      { status: 500 }
    )
  }
} 