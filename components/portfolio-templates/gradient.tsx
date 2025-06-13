import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"

interface GradientTemplateProps {
  data: any
}

export default function GradientTemplate({ data }: GradientTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8 border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Avatar className="w-32 h-32 border-2 border-white/30">
                <AvatarImage src={data.profilePhoto || undefined} />
                <AvatarFallback className="text-2xl bg-white/20">{data.fullName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {data.fullName}
                </h1>
                <p className="text-gray-200 mb-4">{data.bio}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {data.email && (
                    <a href={`mailto:${data.email}`} className="flex items-center text-gray-200 hover:text-white">
                      <Mail className="h-4 w-4 mr-2" />
                      {data.email}
                    </a>
                  )}
                  {data.phone && (
                    <a href={`tel:${data.phone}`} className="flex items-center text-gray-200 hover:text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      {data.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="md:col-span-1 space-y-6">
              {/* Skills Section */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Skills
                  </h2>
                  <div className="space-y-2">
                    {data.skills.map((skill: string, index: number) => (
                      <div
                        key={index}
                        className="bg-white/10 text-white px-3 py-2 rounded-md text-sm border border-white/20"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Connect
                  </h2>
                  <div className="space-y-3">
                    {data.github && (
                      <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-200 hover:text-white"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        GitHub
                      </a>
                    )}
                    {data.linkedin && (
                      <a
                        href={data.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-200 hover:text-white"
                      >
                        <Linkedin className="h-5 w-5 mr-2" />
                        LinkedIn
                      </a>
                    )}
                    {data.twitter && (
                      <a
                        href={data.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-200 hover:text-white"
                      >
                        <Twitter className="h-5 w-5 mr-2" />
                        Twitter
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Projects */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Projects
              </h2>
              <div className="space-y-6">
                {data.projects.map((project: any, index: number) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 mb-4">{project.description}</p>
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 border border-white/20"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md hover:from-blue-600 hover:to-purple-600"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 