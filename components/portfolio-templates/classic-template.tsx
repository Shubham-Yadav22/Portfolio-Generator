import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Github, Linkedin, Twitter, ExternalLink } from "lucide-react"

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

interface ClassicTemplateProps {
  data: PortfolioData
}

export default function ClassicTemplate({ data }: ClassicTemplateProps) {
  return (
    <div className="min-h-screen bg-amber-50 font-serif">
      <div className="container mx-auto px-4 py-12">
        <Card className="border-2 border-amber-200 shadow-xl">
          <CardContent className="p-8">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-amber-900 mb-4">{data.fullName}</h1>
              <p className="text-lg text-amber-800 italic max-w-2xl mx-auto">{data.bio}</p>
            </div>

            {/* Contact Information */}
            <div className="flex justify-center space-x-6 mb-12">
              {data.linkedin && (
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-amber-800 hover:text-amber-600">
                  <Linkedin className="h-6 w-6" />
                </a>
              )}
              {data.github && (
                <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-amber-800 hover:text-amber-600">
                  <Github className="h-6 w-6" />
                </a>
              )}
              {data.twitter && (
                <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="text-amber-800 hover:text-amber-600">
                  <Twitter className="h-6 w-6" />
                </a>
              )}
            </div>

            {/* Skills Section */}
            {data.skills.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">Expertise</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {data.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Projects Section */}
            {data.projects.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">Featured Works</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {data.projects.map((project, index) => (
                    <Card key={index} className="border-amber-200 bg-amber-50">
                      <CardHeader>
                        <CardTitle className="text-xl text-amber-900">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-amber-800 mb-4">{project.description}</p>
                        <div className="flex space-x-4">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-amber-800 hover:text-amber-600 flex items-center gap-1"
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
                              className="text-amber-800 hover:text-amber-600 flex items-center gap-1"
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