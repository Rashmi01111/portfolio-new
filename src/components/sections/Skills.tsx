import { motion } from 'framer-motion'
import { Layout, Server, Database, Brain, Wrench } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { skillCategories } from '@/constants/skills'
import { fadeInUp, staggerContainer } from '@/animations/motionVariants'

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="container-custom">
        <SectionHeading
          label="Skills"
          title="Technologies I Work With"
          subtitle="A comprehensive toolkit for building modern, AI-powered web applications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] ?? Layout
            return (
              <motion.div key={category.category} variants={fadeInUp}>
                <GlassCard className="h-full group">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`p-2.5 rounded-xl bg-linear-to-br ${category.color} bg-opacity-20`}
                    >
                      <Icon className="w-5 h-5 text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 text-muted hover:text-foreground hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
