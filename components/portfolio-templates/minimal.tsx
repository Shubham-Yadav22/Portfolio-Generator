import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"

interface MinimalTemplateProps {
  data: any
}

export default function MinimalTemplate({ data }: MinimalTemplateProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-12">
              <Avatar className="w-32 h-32 mx-auto mb-6">
                <AvatarImage src={data.profilePhoto || undefined} />
                <AvatarFallback>{data.fullName.charAt(0)}</AvatarFallback>
              </Avatar>
              <h1 className="text-4xl font-bold mb-4">{data.fullName}</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{data.bio}</p>
              
              <div className="flex justify-center gap-4 mb-8">
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

              <div className="flex justify-center gap-4">
                {data.github && (
                  <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    <Github className="h-6 w-6" />
                  </a>
                )}
                {data.linkedin && (
                  <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
                {data.twitter && (
                  <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    <Twitter className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                <div className="space-y-6">
                  {data.projects.map((project: any, index: number) => (
                    <Card key={index} className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            GitHub
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 