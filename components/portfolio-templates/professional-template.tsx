"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter, ExternalLink, Mail, Phone, MapPin, Briefcase } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

interface SocialLink {
  platform: string;
  url: string;
}

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

interface ProfessionalTemplateProps {
  data: PortfolioData
}

interface PortfolioFormData {
  fullName: string;
  bio: string;
  skills: string[];
  projects: Project[];
  socialLinks: SocialLink[];
  template: string;
  customization: {
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
  };
}

const TemplateComponent = ({ data }: ProfessionalTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{data.fullName || "Professional Name"}</h1>
              <p className="text-gray-600">Senior Professional</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                contact@example.com
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Professional Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {data.bio ||
                    "Experienced professional with a proven track record of delivering exceptional results in dynamic environments."}
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-3" />
                  <span className="text-sm">contact@example.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-3" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span className="text-sm">New York, NY</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Networks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {data.linkedin && (
                  <a
                    href={data.linkedin}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-3" />
                    <span className="text-sm">LinkedIn Profile</span>
                  </a>
                )}
                {data.github && (
                  <a
                    href={data.github}
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-3" />
                    <span className="text-sm">GitHub Portfolio</span>
                  </a>
                )}
                {data.twitter && (
                  <a
                    href={data.twitter}
                    className="flex items-center text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    <Twitter className="h-4 w-4 mr-3" />
                    <span className="text-sm">Twitter Profile</span>
                  </a>
                )}
              </CardContent>
            </Card>

            {/* Skills */}
            {data.skills.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Core Competencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {data.skills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{skill}</span>
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-4/5 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {data.bio ||
                    "Results-driven professional with extensive experience in delivering high-quality solutions and leading cross-functional teams. Proven ability to drive innovation and achieve business objectives in fast-paced environments."}
                </p>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Senior Professional</h3>
                  <p className="text-blue-600 text-sm">Company Name • 2020 - Present</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Leading strategic initiatives and managing high-impact projects that drive business growth and
                    operational excellence.
                  </p>
                </div>
                <div className="border-l-2 border-gray-300 pl-4">
                  <h3 className="font-semibold text-gray-900">Professional</h3>
                  <p className="text-gray-600 text-sm">Previous Company • 2018 - 2020</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Contributed to key business objectives through innovative problem-solving and collaborative
                    teamwork.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Projects Section */}
            <Card>
              <CardHeader>
                <CardTitle>Key Projects & Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {data.projects
                  .filter((p) => p.title)
                  .map((project, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{project.title}</h3>
                        <div className="flex space-x-2">
                          {project.githubUrl && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3 mr-1" />
                                Code
                              </a>
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button size="sm" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                View
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">© 2024 {data.fullName || "Professional Name"}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default TemplateComponent
