"use client"

import { useEffect, useState } from "react"
import MinimalTemplate from "@/components/portfolio-templates/minimal-template"
import CreativeTemplate from "@/components/portfolio-templates/creative-template"
import ProfessionalTemplate from "@/components/portfolio-templates/professional-template"
import ModernTemplate from "@/components/portfolio-templates/modern-template"
import ClassicTemplate from "@/components/portfolio-templates/classic-template"
import DeveloperTemplate from "@/components/portfolio-templates/developer-template"

const templateComponents = {
  minimal: MinimalTemplate,
  creative: CreativeTemplate,
  professional: ProfessionalTemplate,
  modern: ModernTemplate,
  classic: ClassicTemplate,
  developer: DeveloperTemplate,
}

export default function PortfolioPreview() {
  const [portfolioData, setPortfolioData] = useState<any>(null)

  useEffect(() => {
    const data = localStorage.getItem("portfolioData")
    if (data) {
      setPortfolioData(JSON.parse(data))
    }
  }, [])

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading portfolio...</p>
      </div>
    )
  }

  const TemplateComponent = templateComponents[portfolioData.template as keyof typeof templateComponents]

  if (!TemplateComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">Template not found</p>
      </div>
    )
  }

  return <TemplateComponent data={portfolioData} />
} 