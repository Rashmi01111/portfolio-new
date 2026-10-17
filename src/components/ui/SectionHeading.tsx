import { motion } from 'framer-motion'
import { fadeInUp } from '@/animations/motionVariants'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ label, title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <span className="inline-block text-sm font-semibold tracking-widest uppercase text-indigo-400 mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
