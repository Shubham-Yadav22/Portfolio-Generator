"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, ExternalLink, Mail } from "lucide-react"

interface PortfolioData {
  fullName: string
  bio: string
  skills: string[]
  projects: Array<{
    title: string
    description: string
    githubUrl: string
    liveUrl: string
  }>
  linkedin: string
  github: string
  twitter: string
}

interface MinimalTemplateProps {
  data: PortfolioData
}

export default function MinimalTemplate({ data }: MinimalTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-2">{data.fullName || "Your Name"}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {data.bio || "Your professional bio will appear here. Tell the world about your passion and expertise."}
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-6">
              {data.github && (
                <a href={data.github} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              )}
              {data.linkedin && (
                <a href={data.linkedin} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {data.twitter && (
                <a href={data.twitter} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      {data.skills.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {data.skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm font-normal">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-light text-gray-900 mb-12 text-center">Selected Work</h2>
          <div className="space-y-12">
            {data.projects
              .filter((p) => p.title)
              .map((project, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-500 text-sm">© 2024 {data.fullName || "Your Name"}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
