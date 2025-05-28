export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}