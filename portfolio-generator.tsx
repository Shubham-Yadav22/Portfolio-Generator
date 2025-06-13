"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Moon,
  Sun,
  Plus,
  X,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Palette,
  Type,
  Heart,
  Sparkles,
  Mail,
  Phone,
  Upload,
} from "lucide-react"
import { useRouter } from "next/navigation"

import TemplateSelector from "./components/template-selector"
import TemplatePreviewModal from "./components/template-preview-modal"
import { Key } from "react"

export default function PortfolioGenerator() {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  const [currentSkill, setCurrentSkill] = useState("")
  const [projects, setProjects] = useState([{ title: "", description: "", githubUrl: "", liveUrl: "" }])
  const [formData, setFormData] = useState({
    fullName: "",
    bio: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    twitter: "",
    colorTheme: "blue",
    fontStyle: "modern",
    profilePhoto: null as File | null,
  })

  const [selectedTemplate, setSelectedTemplate] = useState("minimal")
  const [previewTemplate, setPreviewTemplate] = useState("")
  const [showPreview, setShowPreview] = useState(false)

  const addSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      setSkills([...skills, currentSkill.trim()])
      setCurrentSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill: string) => skill !== skillToRemove))
  }

  const addProject = () => {
    if (projects.length < 3) {
      setProjects([...projects, { title: "", description: "", githubUrl: "", liveUrl: "" }])
    }
  }

  const removeProject = (index: number) => {
    setProjects(projects.filter((_: any, i: number) => i !== index))
  }

  const updateProject = (index: number, field: string, value: string) => {
    const updatedProjects = projects.map((project: any, i: number) => (i === index ? { ...project, [field]: value } : project))
    setProjects(updatedProjects)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }))
  }

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
  }

  const handlePreviewTemplate = (templateId: string) => {
    setPreviewTemplate(templateId)
    setShowPreview(true)
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, profilePhoto: file }))
    }
  }

  const handleGeneratePortfolio = () => {
    // Convert profile photo to base64 if exists
    const portfolioData = {
      ...formData,
      skills,
      projects,
      template: selectedTemplate,
      profilePhoto: formData.profilePhoto ? URL.createObjectURL(formData.profilePhoto) : null
    }
    localStorage.setItem("portfolioData", JSON.stringify(portfolioData))
    router.push("/portfolio/preview")
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Header */}
      <header className="border-b bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Portfolio Builder</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Templates
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch checked={darkMode} onCheckedChange={setDarkMode} aria-label="Toggle dark mode" />
              <Moon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Build Your Portfolio
            <span className="text-blue-600"> Instantly</span> with AI
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Enter your details and get a stunning portfolio website generated just for you. No coding required, just
            pure creativity powered by AI.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            Get Started
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Form Section */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Tell Us About Yourself</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Template Selection */}
                <TemplateSelector
                  selectedTemplate={selectedTemplate}
                  onTemplateSelect={handleTemplateSelect}
                  onPreviewTemplate={handlePreviewTemplate}
                />

                <div className="border-t pt-6">
                  {/* Profile Photo Upload */}
                  <div className="flex flex-col items-center mb-6">
                    <Avatar className="w-32 h-32 mb-4">
                      <AvatarImage src={formData.profilePhoto ? URL.createObjectURL(formData.profilePhoto) : undefined} />
                      <AvatarFallback>{formData.fullName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="photo" className="cursor-pointer">
                        <Button variant="outline" type="button">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Photo
                        </Button>
                      </Label>
                      <Input
                        id="photo"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handlePhotoUpload}
                      />
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 234 567 890"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="bio" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Short Bio
                      </Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us about yourself in a few sentences..."
                        value={formData.bio}
                        onChange={(e) => handleInputChange("bio", e.target.value)}
                        className="mt-1 min-h-[100px]"
                      />
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Skills</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        placeholder="Add a skill..."
                        value={currentSkill}
                        onChange={(e: { target: { value: any } }) => setCurrentSkill(e.target.value)}
                        onKeyPress={(e: { key: string }) => e.key === "Enter" && addSkill()}
                      />
                      <Button onClick={addSkill} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {skills.map((skill: string, index: Key | null | undefined) => (
                        <Badge key={index} variant="secondary" className="px-3 py-1">
                          {skill}
                          <button onClick={() => removeSkill(skill)} className="ml-2 hover:text-red-500">
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Projects (Max 3)</Label>
                      {projects.length < 3 && (
                        <Button onClick={addProject} size="sm" variant="outline">
                          <Plus className="h-4 w-4 mr-1" />
                          Add Project
                        </Button>
                      )}
                    </div>

                    {projects.map((project: { title: any; description: any; githubUrl: any; liveUrl: any }, index: number) => (
                      <Card key={index} className="mb-4 bg-gray-50 dark:bg-gray-700">
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium text-gray-900 dark:text-white">Project {index + 1}</h4>
                            {projects.length > 1 && (
                              <Button
                                onClick={() => removeProject(index)}
                                size="sm"
                                variant="ghost"
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          <div className="space-y-3">
                            <Input
                              placeholder="Project title"
                              value={project.title}
                              onChange={(e: { target: { value: string } }) => updateProject(index, "title", e.target.value)}
                            />
                            <Textarea
                              placeholder="Project description"
                              value={project.description}
                              onChange={(e: { target: { value: string } }) => updateProject(index, "description", e.target.value)}
                              className="min-h-[80px]"
                            />
                            <div className="grid grid-cols-2 gap-3">
                              <Input
                                placeholder="GitHub URL"
                                value={project.githubUrl}
                                onChange={(e: { target: { value: string } }) => updateProject(index, "githubUrl", e.target.value)}
                              />
                              <Input
                                placeholder="Live URL"
                                value={project.liveUrl}
                                onChange={(e: { target: { value: string } }) => updateProject(index, "liveUrl", e.target.value)}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                      Social Links
                    </Label>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-blue-600" />
                        <Input
                          placeholder="LinkedIn profile URL"
                          value={formData.linkedin}
                          onChange={(e: { target: { value: string } }) => handleInputChange("linkedin", e.target.value)}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        <Input
                          placeholder="GitHub profile URL"
                          value={formData.github}
                          onChange={(e: { target: { value: string } }) => handleInputChange("github", e.target.value)}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <Twitter className="h-5 w-5 text-blue-400" />
                        <Input
                          placeholder="Twitter profile URL"
                          value={formData.twitter}
                          onChange={(e: { target: { value: string } }) => handleInputChange("twitter", e.target.value)}
                          className="mb-4"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Customization */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                        <Palette className="h-4 w-4 mr-1" />
                        Color Theme
                      </Label>
                      <Select
                        value={formData.colorTheme}
                        onValueChange={(value) => handleInputChange("colorTheme", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blue">Ocean Blue</SelectItem>
                          <SelectItem value="purple">Royal Purple</SelectItem>
                          <SelectItem value="green">Forest Green</SelectItem>
                          <SelectItem value="orange">Sunset Orange</SelectItem>
                          <SelectItem value="pink">Rose Pink</SelectItem>
                          <SelectItem value="dark">Dark Mode</SelectItem>
                          <SelectItem value="light">Light Mode</SelectItem>
                          <SelectItem value="gradient">Gradient</SelectItem>
                          <SelectItem value="creative">Creative</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                        <Type className="h-4 w-4 mr-1" />
                        Font Style
                      </Label>
                      <Select
                        value={formData.fontStyle}
                        onValueChange={(value) => handleInputChange("fontStyle", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose font" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="modern">Modern Sans</SelectItem>
                          <SelectItem value="classic">Classic Serif</SelectItem>
                          <SelectItem value="minimal">Minimal</SelectItem>
                          <SelectItem value="creative">Creative</SelectItem>
                          <SelectItem value="elegant">Elegant</SelectItem>
                          <SelectItem value="bold">Bold</SelectItem>
                          <SelectItem value="playful">Playful</SelectItem>
                          <SelectItem value="tech">Tech</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    className="w-full text-lg py-6 mt-6" 
                    size="lg"
                    onClick={handleGeneratePortfolio}
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8">
            <Card className="shadow-lg border-0 bg-white dark:bg-gray-800 h-fit">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                  <ExternalLink className="mr-2 h-6 w-6" />
                  Live Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-12 text-center min-h-[400px] flex items-center justify-center">
                  <div className="text-gray-500 dark:text-gray-400">
                    <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Sparkles className="h-8 w-8" />
                    </div>
                    <p className="text-lg font-medium mb-2">Your portfolio will appear here</p>
                    <p className="text-sm">Fill out the form and click "Generate Portfolio" to see the magic happen!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by AI Portfolio Builder
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>

      {/* Template Preview Modal */}
      <TemplatePreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        templateId={previewTemplate}
        onSelectTemplate={handleTemplateSelect}
      />
    </div>
  )
}
