import type { ExperienceItem, EducationItem, Certification } from '@/types'

export const experienceItems: ExperienceItem[] = [
  {
    title: 'Freelance Full Stack Developer',
    organization: 'Self-Employed',
    period: '2024 — Present',
    description:
      'Delivering end-to-end web applications for clients using the MERN stack. Building AI-integrated solutions including chatbots, automation tools, and intelligent dashboards with OpenAI and Gemini APIs.',
    type: 'work',
  },
  {
    title: 'Personal Projects',
    organization: 'Independent Development',
    period: '2023 — Present',
    description:
      'Designed and developed 6+ full-stack applications including AI chat platforms, e-commerce systems, code review tools, and productivity assistants. Focus on scalable architecture and modern UX.',
    type: 'project',
  },
  {
    title: 'Open Source Contributions',
    organization: 'GitHub Community',
    period: '2023 — Present',
    description:
      'Contributing to open-source projects, fixing bugs, improving documentation, and building developer tools. Active in the MERN and AI developer communities.',
    type: 'opensource',
  },
]

export const educationItems: EducationItem[] = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science',
    institution: 'University',
    cgpa: '8.1',
    period: '2020 — 2024',
  },
]

export const certifications: Certification[] = [
  {
    name: 'Generative AI',
    issuer: 'Certification Provider',
    year: '2024',
  },
  {
    name: 'Cyber Security Essentials',
    issuer: 'Certification Provider',
    year: '2023',
  },
]
