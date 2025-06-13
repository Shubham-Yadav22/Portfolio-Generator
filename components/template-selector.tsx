"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Eye } from "lucide-react"

interface Template {
  id: string
  name: string
  description: string
  style: string
  preview: string
  features: string[]
  color: string
}

const templates: Template[] = [
  {
    id: "minimal",
    name: "Minimal Pro",
    description: "Clean and simple design focused on content",
    style: "Minimalist",
    preview: "/placeholder.svg?height=128&width=300&text=Minimal+Layout",
    features: ["Clean Typography", "Subtle Animations", "Mobile First"],
    color: "bg-gray-100",
  },
  {
    id: "creative",
    name: "Creative Studio",
    description: "Bold and artistic with vibrant colors",
    style: "Creative",
    preview: "/placeholder.svg?height=128&width=300&text=Creative+Layout",
    features: ["Bold Colors", "Creative Layouts", "Interactive Elements"],
    color: "bg-gradient-to-br from-purple-100 to-pink-100",
  },
  {
    id: "professional",
    name: "Corporate Elite",
    description: "Professional and trustworthy business look",
    style: "Professional",
    preview: "/placeholder.svg?height=128&width=300&text=Professional+Layout",
    features: ["Business Ready", "Clean Structure", "Professional Colors"],
    color: "bg-blue-50",
  },
  {
    id: "modern",
    name: "Modern Tech",
    description: "Contemporary design with tech-focused elements",
    style: "Modern",
    preview: "/placeholder.svg?height=128&width=300&text=Modern+Layout",
    features: ["Dark Mode", "Tech Aesthetic", "Glassmorphism"],
    color: "bg-gradient-to-br from-gray-900 to-gray-700",
  },
  {
    id: "classic",
    name: "Classic Elegance",
    description: "Timeless design with serif typography",
    style: "Classic",
    preview: "/placeholder.svg?height=128&width=300&text=Classic+Layout",
    features: ["Serif Typography", "Elegant Spacing", "Timeless Design"],
    color: "bg-amber-50",
  },
  {
    id: "developer",
    name: "Code Master",
    description: "Perfect for developers and programmers",
    style: "Developer",
    preview: "/placeholder.svg?height=128&width=300&text=Developer+Layout",
    features: ["Code Syntax", "Terminal Style", "GitHub Integration"],
    color: "bg-green-50",
  },
]

interface TemplateSelectorProps {
  selectedTemplate: string
  onTemplateSelect: (templateId: string) => void
  onPreviewTemplate: (templateId: string) => void
}

export default function TemplateSelector({
  selectedTemplate,
  onTemplateSelect,
  onPreviewTemplate,
}: TemplateSelectorProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Choose Your Template</h3>
        <p className="text-gray-600 dark:text-gray-300">Select a template that matches your style and profession</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedTemplate === template.id ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-md"
            }`}
            onClick={() => onTemplateSelect(template.id)}
          >
            <CardContent className="p-0">
              {/* Preview Image */}
              <div className="h-32 rounded-t-lg overflow-hidden relative">
                <img
                  src={template.preview || "/placeholder.svg"}
                  alt={`${template.name} template preview`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {selectedTemplate === template.id && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                    <Check className="h-3 w-3" />
                  </div>
                )}
              </div>

              {/* Template Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{template.name}</h4>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{template.description}</p>

                <div className="mb-3">
                  <Badge
                    variant="outline"
                    className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 font-medium"
                  >
                    {template.style}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {template.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={(e: { stopPropagation: () => void }) => {
                    e.stopPropagation()
                    onPreviewTemplate(template.id)
                  }}
                >
                  <Eye className="h-3 w-3 mr-1" />
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
