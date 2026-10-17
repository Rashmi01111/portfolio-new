import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: 'Layout',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'React.js',
      'Next.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'JavaScript',
      'TypeScript',
      'Redux Toolkit',
    ],
  },
  {
    category: 'Backend',
    icon: 'Server',
    color: 'from-emerald-500 to-teal-500',
    skills: ['Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    icon: 'Database',
    color: 'from-amber-500 to-orange-500',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Artificial Intelligence',
    icon: 'Brain',
    color: 'from-violet-500 to-purple-500',
    skills: [
      'OpenAI API',
      'Google Gemini API',
      'Groq API',
      'Prompt Engineering',
      'Large Language Models (LLMs)',
      'JSON Structured Output',
      'AI Chatbots',
      'REST APIs',
    ],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    color: 'from-rose-500 to-pink-500',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Postman',
      'VS Code',
      'Vercel',
      'Render',
      'Firebase',
    ],
  },
]
