"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, ExternalLink, Code, Zap, Terminal } from "lucide-react"

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

interface ModernTemplateProps {
  data: PortfolioData
}

export default function ModernTemplate({ data }: ModernTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="h-6 w-6 text-cyan-400" />
              <span className="font-mono text-lg">{data.fullName?.split(" ")[0]?.toLowerCase() || "dev"}</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                about
              </a>
              <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                skills
              </a>
              <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-cyan-400 font-mono text-sm">{">"}</span>
                <span className="text-gray-400 font-mono text-sm">Hello World</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-100">{data.fullName || "Modern"}</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Developer
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {data.bio ||
                  "I craft digital experiences with modern technologies and clean code. Passionate about creating innovative solutions that make a difference."}
              </p>
              <div className="flex items-center space-x-4">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold">
                  <Code className="h-4 w-4 mr-2" />
                  View Projects
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Download CV
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-6 font-mono text-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="text-gray-400">{"// Welcome to my portfolio"}</div>
                  <div className="text-cyan-400">
                    const <span className="text-white">developer</span> = {"{"}
                  </div>
                  <div className="ml-4 text-gray-300">
                    name: <span className="text-green-400">'{data.fullName || "Your Name"}'</span>,
                  </div>
                  <div className="ml-4 text-gray-300">
                    skills:{" "}
                    <span className="text-yellow-400">
                      [
                      {data.skills
                        .slice(0, 3)
                        .map((s) => `'${s}'`)
                        .join(", ")}
                      ]
                    </span>
                    ,
                  </div>
                  <div className="ml-4 text-gray-300">
                    passion: <span className="text-green-400">'coding'</span>
                  </div>
                  <div className="text-cyan-400">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {data.skills.length > 0 && (
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-cyan-400 font-mono">{"<"}</span>
                Skills
                <span className="text-cyan-400 font-mono">{" />"}</span>
              </h2>
              <p className="text-gray-400">Technologies I work with</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-400">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Zap className="h-6 w-6 text-gray-900" />
                    </div>
                    <h3 className="font-semibold text-gray-100">{skill}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-cyan-400 font-mono">{"<"}</span>
              Projects
              <span className="text-cyan-400 font-mono">{" />"}</span>
            </h2>
            <p className="text-gray-400">Some of my recent work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects
              .filter((p) => p.title)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" asChild className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-gray-900">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-cyan-400 font-mono">{"<"}</span>
            Get In Touch
            <span className="text-cyan-400 font-mono">{" />"}</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm always interested in new opportunities and challenges.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {data.github && (
              <a href={data.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="h-8 w-8" />
              </a>
            )}
            {data.linkedin && (
              <a href={data.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-8 w-8" />
              </a>
            )}
            {data.twitter && (
              <a href={data.twitter} className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-8 w-8" />
              </a>
            )}
          </div>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold text-lg px-8 py-3">
            Start a Conversation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 font-mono text-sm">
            © 2024 {data.fullName || "Modern Developer"}. Built with passion and code.
          </p>
        </div>
      </footer>
    </div>
  )
}
