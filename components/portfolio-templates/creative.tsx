import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { colorThemes, fontStyles } from "@/components/theme-config"

interface CreativeTemplateProps {
  data: any
}

export default function CreativeTemplate({ data }: CreativeTemplateProps) {
  const theme = colorThemes[data.colorTheme as keyof typeof colorThemes] || colorThemes.creative
  const font = fontStyles[data.fontStyle as keyof typeof fontStyles] || fontStyles.creative

  return (
    <div className={`min-h-screen ${theme.background} ${theme.text}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section with Animated Background */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <div className={`absolute inset-0 bg-gradient-to-r ${theme.primary} opacity-20 animate-gradient`}></div>
            <div className="relative p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.secondary} rounded-full blur-xl opacity-50`}></div>
                  <Avatar className="w-48 h-48 relative z-10 border-4 border-white">
                    <AvatarImage src={data.profilePhoto || undefined} />
                    <AvatarFallback className={`text-4xl ${font.heading}`}>{data.fullName.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-center md:text-left">
                  <h1 className={`text-6xl ${font.heading} mb-4 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}>
                    {data.fullName}
                  </h1>
                  <p className={`${font.body} text-gray-300 text-xl mb-6`}>{data.bio}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    {data.email && (
                      <a href={`mailto:${data.email}`} className={`flex items-center ${font.accent} text-gray-300 hover:text-white transition-colors`}>
                        <Mail className="h-5 w-5 mr-2" />
                        {data.email}
                      </a>
                    )}
                    {data.phone && (
                      <a href={`tel:${data.phone}`} className={`flex items-center ${font.accent} text-gray-300 hover:text-white transition-colors`}>
                        <Phone className="h-5 w-5 mr-2" />
                        {data.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section with 3D Cards */}
          <div className="mb-12">
            <h2 className={`text-4xl ${font.heading} mb-8 text-center bg-gradient-to-r ${theme.secondary} bg-clip-text text-transparent`}>
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.skills.map((skill: string, index: number) => (
                <div
                  key={index}
                  className={`group relative ${theme.card} rounded-xl p-4 transform transition-all duration-300 hover:scale-105 hover:rotate-1`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.accent} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                  <span className={`relative z-10 text-center block ${font.accent} text-gray-300 group-hover:text-white`}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section with Hover Effects */}
          <div className="space-y-8">
            <h2 className={`text-4xl ${font.heading} mb-8 text-center bg-gradient-to-r ${theme.secondary} bg-clip-text text-transparent`}>
              Projects
            </h2>
            {data.projects.map((project: any, index: number) => (
              <Card key={index} className={`${theme.card} border-0 overflow-hidden group`}>
                <CardContent className="p-0">
                  <div className="p-8 relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${theme.accent} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                    <div className="relative z-10">
                      <h3 className={`text-2xl ${font.heading} mb-4 text-white`}>{project.title}</h3>
                      <p className={`${font.body} text-gray-300 mb-6`}>{project.description}</p>
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center px-4 py-2 ${theme.card} text-white rounded-lg ${theme.hover} transition-colors`}
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
                            className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${theme.primary} text-white rounded-lg hover:opacity-90 transition-opacity`}
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links with Hover Animation */}
          <div className="mt-16 flex justify-center gap-8">
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 hover:text-white transition-colors transform hover:scale-110`}
              >
                <Github className="h-8 w-8" />
              </a>
            )}
            {data.linkedin && (
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 hover:text-white transition-colors transform hover:scale-110`}
              >
                <Linkedin className="h-8 w-8" />
              </a>
            )}
            {data.twitter && (
              <a
                href={data.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 hover:text-white transition-colors transform hover:scale-110`}
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