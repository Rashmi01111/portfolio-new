import { motion } from 'framer-motion'
import { Briefcase, FolderGit2, GitPullRequest } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experienceItems } from '@/constants/experience'
import { fadeInUp } from '@/animations/motionVariants'

const typeIcons = {
  work: Briefcase,
  project: FolderGit2,
  opensource: GitPullRequest,
}

const typeColors = {
  work: 'from-indigo-500 to-violet-500',
  project: 'from-emerald-500 to-teal-500',
  opensource: 'from-orange-500 to-amber-500',
}

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-surface/30">
      <div className="container-custom">
        <SectionHeading
          label="Experience"
          title="My Journey"
          subtitle="Building experience through freelance work, personal projects, and open source contributions."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-indigo-500/50 via-violet-500/30 to-transparent md:-translate-x-px" />

          {experienceItems.map((item, index) => {
            const Icon = typeIcons[item.type]
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-start gap-6 mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-10 h-10 rounded-full bg-linear-to-br ${typeColors[item.type]} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-4 h-4 text-white" size={16} />
                  </div>
                </div>

                <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass rounded-2xl p-6 hover:bg-white/8 transition-colors">
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold mt-1 mb-1">{item.title}</h3>
                    <p className="text-sm text-muted mb-3">{item.organization}</p>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
