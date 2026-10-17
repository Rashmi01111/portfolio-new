import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub as GithubIcon } from 'react-icons/fa'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/constants/config'
import { fadeInUp, staggerContainer } from '@/animations/motionVariants'

export function GitHubSection() {
  const username = siteConfig.githubUsername

  return (
    <section id="github" className="section-padding bg-surface/30">
      <div className="container-custom">
        <SectionHeading
          label="GitHub"
          title="Open Source Activity"
          subtitle="Contributing to the developer community and building in public."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div variants={fadeInUp}>
            <GlassCard className="h-full">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                GitHub Stats
              </h3>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=6366f1&icon_color=8b5cf6&text_color=c9d1d9`}
                alt={`${username} GitHub stats`}
                className="w-full rounded-lg"
                loading="lazy"
              />
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassCard className="h-full">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                GitHub Streak
              </h3>
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0D1117&ring=6366f1&fire=8b5cf6&currStreakLabel=6366f1`}
                alt={`${username} GitHub streak`}
                className="w-full rounded-lg"
                loading="lazy"
              />
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassCard className="h-full">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                Contribution Graph
              </h3>
              <img
                src={`https://ghchart.rshah.org/${username}`}
                alt={`${username} contribution graph`}
                className="w-full rounded-lg"
                loading="lazy"
              />
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassCard className="h-full">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                Most Used Languages
              </h3>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=6366f1&text_color=c9d1d9`}
                alt={`${username} top languages`}
                className="w-full rounded-lg"
                loading="lazy"
              />
            </GlassCard>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              <GithubIcon size={20} />
              View GitHub Profile
              <ExternalLink size={16} />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
