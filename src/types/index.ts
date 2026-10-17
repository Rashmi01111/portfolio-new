export interface Project {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  features: string[]
  techStack: string[]
  image: string
  githubUrl: string
  liveDemoUrl: string
  gradient: string
}

export interface SkillCategory {
  category: string
  skills: string[]
  icon: string
  color: string
}

export interface ExperienceItem {
  title: string
  organization: string
  period: string
  description: string
  type: 'work' | 'project' | 'opensource'
}

export interface EducationItem {
  degree: string
  field: string
  institution: string
  cgpa: string
  period: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
