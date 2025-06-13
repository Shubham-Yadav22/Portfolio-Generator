import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"

interface ModernTemplateProps {
  data: any
}

export default function ModernTemplate({ data }: ModernTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Avatar className="w-40 h-40">
                <AvatarImage src={data.profilePhoto || undefined} />
                <AvatarFallback>{data.fullName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {data.fullName}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">{data.bio}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {data.email && (
                    <a href={`mailto:${data.email}`} className="flex items-center text-gray-600 hover:text-blue-600">
                      <Mail className="h-4 w-4 mr-1" />
                      {data.email}
                    </a>
                  )}
                  {data.phone && (
                    <a href={`tel:${data.phone}`} className="flex items-center text-gray-600 hover:text-blue-600">
                      <Phone className="h-4 w-4 mr-1" />
                      {data.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {data.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </h2>
            {data.projects.map((project: any, index: number) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="h-8 w-8" />
              </a>
            )}
            {data.linkedin && (
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </a>
            )}
            {data.twitter && (
              <a
                href={data.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Twitter className="h-8 w-8" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 