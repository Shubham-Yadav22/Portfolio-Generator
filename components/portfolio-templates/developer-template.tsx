import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Github, Linkedin, Twitter, Code, Terminal, ExternalLink } from "lucide-react"

interface PortfolioData {
  fullName: string
  bio: string
  skills: string[]
  projects: {
    title: string
    description: string
    githubUrl: string
    liveUrl: string
  }[]
  linkedin: string
  github: string
  twitter: string
}

interface DeveloperTemplateProps {
  data: PortfolioData
}

export default function DeveloperTemplate({ data }: DeveloperTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <div className="container mx-auto px-4 py-12">
        {/* Terminal-like Header */}
        <div className="bg-gray-800 rounded-t-lg p-4 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        <Card className="border-gray-700 bg-gray-800 shadow-xl">
          <CardContent className="p-8">
            {/* Header Section */}
            <div className="mb-12">
              <div className="flex items-center space-x-4 mb-4">
                <Terminal className="h-8 w-8 text-green-400" />
                <h1 className="text-3xl font-bold text-green-400">{data.fullName}</h1>
              </div>
              <p className="text-gray-300 ml-12">{data.bio}</p>
            </div>

            {/* Contact Information */}
            <div className="flex space-x-6 mb-12 ml-12">
              {data.linkedin && (
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400">
                  <Linkedin className="h-6 w-6" />
                </a>
              )}
              {data.github && (
                <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400">
                  <Github className="h-6 w-6" />
                </a>
              )}
              {data.twitter && (
                <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400">
                  <Twitter className="h-6 w-6" />
                </a>
              )}
            </div>

            {/* Skills Section */}
            {data.skills.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center space-x-2 mb-6">
                  <Code className="h-6 w-6 text-green-400" />
                  <h2 className="text-xl font-bold text-green-400">Tech Stack</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ml-8">
                  {data.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 p-3 rounded border border-gray-600"
                    >
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects Section */}
            {data.projects.length > 0 && (
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Code className="h-6 w-6 text-green-400" />
                  <h2 className="text-xl font-bold text-green-400">Projects</h2>
                </div>
                <div className="space-y-6 ml-8">
                  {data.projects.map((project, index) => (
                    <Card key={index} className="bg-gray-700 border-gray-600">
                      <CardHeader>
                        <CardTitle className="text-xl text-green-400">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex space-x-4">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-300 hover:text-green-400 flex items-center gap-1"
                            >
                              <Github className="h-5 w-5" />
                              <span className="text-sm">GitHub</span>
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-300 hover:text-green-400 flex items-center gap-1"
                            >
                              <span className="text-sm">View Live</span>
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 