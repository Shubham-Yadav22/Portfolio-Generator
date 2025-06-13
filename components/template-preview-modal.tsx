"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import MinimalTemplate from "./portfolio-templates/minimal-template"
import CreativeTemplate from "./portfolio-templates/creative-template"
import ProfessionalTemplate from "./portfolio-templates/professional-template"
import ModernTemplate from "./portfolio-templates/modern-template"
import ClassicTemplate from "./portfolio-templates/classic-template"
import DeveloperTemplate from "./portfolio-templates/developer-template"

interface TemplatePreviewModalProps {
  isOpen: boolean
  onClose: () => void
  templateId: string
  onSelectTemplate: (templateId: string) => void
}

const sampleData = {
  fullName: "Alex Johnson",
  bio: "Passionate full-stack developer with 5+ years of experience creating innovative web applications. I love turning complex problems into simple, beautiful solutions.",
  skills: ["React", "Node.js", "TypeScript", "Python", "AWS", "Docker"],
  projects: [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with React and Node.js, featuring real-time inventory management and secure payment processing.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ],
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  twitter: "https://twitter.com",
}

const templateComponents = {
  minimal: MinimalTemplate,
  creative: CreativeTemplate,
  professional: ProfessionalTemplate,
  modern: ModernTemplate,
  classic: ClassicTemplate,
  developer: DeveloperTemplate,
}

const templateNames = {
  minimal: "Minimal Pro",
  creative: "Creative Studio",
  professional: "Corporate Elite",
  modern: "Modern Tech",
  classic: "Classic Elegance",
  developer: "Code Master",
}

export default function TemplatePreviewModal({
  isOpen,
  onClose,
  templateId,
  onSelectTemplate,
}: TemplatePreviewModalProps) {
  const TemplateComponent = templateComponents[templateId as keyof typeof templateComponents]
  const templateName = templateNames[templateId as keyof typeof templateNames]

  if (!TemplateComponent) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <DialogTitle className="text-2xl">{templateName}</DialogTitle>
              <Badge variant="secondary">Preview</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => {
                  onSelectTemplate(templateId)
                  onClose()
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Use This Template
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="overflow-auto max-h-[calc(90vh-100px)]">
          <div className="scale-75 origin-top-left w-[133.33%] h-fit">
            <TemplateComponent data={sampleData} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
