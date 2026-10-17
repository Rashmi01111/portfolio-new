import { motion } from 'framer-motion'
import { GraduationCap, Code2, Brain, Heart, Sparkles, Layers } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { fadeInUp, staggerContainer } from '@/animations/motionVariants'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Computer Science Graduate',
    description: 'Strong foundation in algorithms, data structures, and software engineering principles.',
  },
  {
    icon: Code2,
    title: 'Full Stack MERN Developer',
    description: 'Building end-to-end web applications with React, Node.js, Express, and MongoDB.',
  },
  {
    icon: Brain,
    title: 'AI Application Developer',
    description: 'Integrating Large Language Models to create intelligent, user-centric products.',
  },
  {
    icon: Heart,
    title: 'Problem Solver',
    description: 'Passionate about solving real-world problems with elegant, scalable solutions.',
  },
  {
    icon: Sparkles,
    title: 'LLM Integration Expert',
    description: 'Experience with OpenAI, Gemini, and Groq APIs for AI-powered features.',
  },
  {
    icon: Layers,
    title: 'Scalable Applications',
    description: 'Love building scalable, performant, and user-friendly applications.',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="About Me"
          title="Crafting Digital Experiences"
          subtitle="Turning ideas into impactful software with modern technologies and AI innovation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl gradient-border overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-indigo-500/20 via-violet-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-5xl font-bold text-white shadow-2xl shadow-indigo-500/30">
                      RS
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Rashmi Sharma</h3>
                    <p className="text-muted">Full Stack MERN & AI Developer</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-linear-to-br from-cyan-500/30 to-indigo-500/30 rounded-2xl blur-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <p className="text-lg text-muted leading-relaxed">
              I&apos;m a passionate <strong className="text-foreground">Computer Science graduate</strong> and{' '}
              <strong className="text-foreground">Full Stack MERN Developer</strong> who loves building
              products that make a difference. My journey in tech has led me to specialize in{' '}
              <strong className="text-foreground">AI application development</strong>, where I integrate
              cutting-edge Large Language Models into real-world applications.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              From real-time chat applications with AI features to e-commerce platforms and productivity
              assistants, I focus on creating{' '}
              <strong className="text-foreground">scalable, user-friendly applications</strong> that solve
              genuine problems. I&apos;m experienced in working with OpenAI, Google Gemini, and Groq APIs
              to build intelligent features like chatbots, code reviewers, and automated workflows.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring new AI technologies, contributing to open source,
              or sharpening my problem-solving skills on LeetCode.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((item) => (
            <motion.div key={item.title} variants={fadeInUp}>
              <GlassCard className="h-full">
                <item.icon className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
