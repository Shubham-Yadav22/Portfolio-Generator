export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Portfolio {
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