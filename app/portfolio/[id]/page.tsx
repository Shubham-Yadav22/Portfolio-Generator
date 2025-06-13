"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import MinimalTemplate from "@/components/portfolio-templates/minimal"
import ModernTemplate from "@/components/portfolio-templates/modern"
import CreativeTemplate from "@/components/portfolio-templates/creative"
import ProfessionalTemplate from "@/components/portfolio-templates/professional"
import DarkTemplate from "@/components/portfolio-templates/dark"
import GradientTemplate from "@/components/portfolio-templates/gradient"

const templates = {
  minimal: MinimalTemplate,
  modern: ModernTemplate,
  creative: CreativeTemplate,
  professional: ProfessionalTemplate,
  dark: DarkTemplate,
  gradient: GradientTemplate,
}

export default function PortfolioPreview({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [portfolioData, setPortfolioData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const data = localStorage.getItem("portfolioData")
    if (data) {
      setPortfolioData(JSON.parse(data))
    }
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!portfolioData) {
    return <div>No portfolio data found</div>
  }

  const Template = templates[portfolioData.template as keyof typeof templates] || MinimalTemplate

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.back()}
          className="bg-white/80 backdrop-blur-sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </div>
      <Template data={portfolioData} />
    </div>
  )
} 