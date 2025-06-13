import { NextResponse } from "next/server"

// In-memory storage for portfolios (replace with database in production)
const portfolios = new Map()

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const portfolio = portfolios.get(params.id)
    
    if (!portfolio) {
      return NextResponse.json(
        {
          success: false,
          message: "Portfolio not found"
        },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      data: portfolio
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch portfolio"
      },
      { status: 500 }
    )
  }
} 