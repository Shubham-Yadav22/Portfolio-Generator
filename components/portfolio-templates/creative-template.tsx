"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, ExternalLink, Sparkles, Palette } from "lucide-react"

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

interface CreativeTemplateProps {
  data: PortfolioData
}

export default function CreativeTemplate({ data }: CreativeTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              {data.fullName || "Creative Professional"}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              {data.bio ||
                "I'm a creative professional who loves to bring ideas to life through innovative design and cutting-edge technology."}
            </p>

            {/* Floating Social Links */}
            <div className="flex justify-center space-x-6">
              {data.github && (
                <a href={data.github} className="group">
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Github className="h-6 w-6 text-gray-700" />
                  </div>
                </a>
              )}
              {data.linkedin && (
                <a href={data.linkedin} className="group">
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Linkedin className="h-6 w-6 text-blue-600" />
                  </div>
                </a>
              )}
              {data.twitter && (
                <a href={data.twitter} className="group">
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Twitter className="h-6 w-6 text-blue-400" />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {data.skills.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Superpowers</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Palette className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{skill}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects
              .filter((p) => p.title)
              .map((project, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          asChild
                          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-lg font-medium">Let's create something amazing together!</p>
          <p className="text-purple-100 mt-2">
            © 2024 {data.fullName || "Your Name"}. Made with creativity and passion.
          </p>
        </div>
      </footer>
    </div>
  )
}
