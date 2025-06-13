import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"

interface ProfessionalTemplateProps {
  data: any
}

export default function ProfessionalTemplate({ data }: ProfessionalTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Avatar className="w-32 h-32 border-2 border-gray-200">
                <AvatarImage src={data.profilePhoto || undefined} />
                <AvatarFallback className="text-2xl">{data.fullName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.fullName}</h1>
                <p className="text-gray-600 mb-4">{data.bio}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {data.email && (
                    <a href={`mailto:${data.email}`} className="flex items-center text-gray-600 hover:text-blue-600">
                      <Mail className="h-4 w-4 mr-2" />
                      {data.email}
                    </a>
                  )}
                  {data.phone && (
                    <a href={`tel:${data.phone}`} className="flex items-center text-gray-600 hover:text-blue-600">
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
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
                  <div className="space-y-2">
                    {data.skills.map((skill: string, index: number) => (
                      <div
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-2 rounded-md text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Connect</h2>
                  <div className="space-y-3">
                    {data.github && (
                      <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-blue-600"
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
                        className="flex items-center text-gray-600 hover:text-blue-600"
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
                        className="flex items-center text-gray-600 hover:text-blue-600"
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Projects</h2>
              <div className="space-y-6">
                {data.projects.map((project: any, index: number) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
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
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
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