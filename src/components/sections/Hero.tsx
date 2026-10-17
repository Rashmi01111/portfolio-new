import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { siteConfig } from '@/constants/config'
import { Button } from '@/components/ui/Button'
import { scrollToSection, downloadResume } from '@/utils/cn'
import { FloatingShapes } from '@/components/effects/FloatingShapes'
import { fadeInUp, staggerContainer } from '@/animations/motionVariants'

const typingTexts = [
  'Full Stack MERN Developer',
  'AI Application Developer',
  'Problem Solver',
  'LLM Integration Expert',
]

const socialLinks = [
  { icon: FaGithub, href: siteConfig.social.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: siteConfig.social.email, label: 'Email' },
  { icon: SiLeetcode, href: siteConfig.social.leetcode, label: 'LeetCode' },
]

function TypingEffect() {
  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = typingTexts[textIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
          if (displayText.length === currentText.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setDisplayText(currentText.slice(0, displayText.length - 1))
          if (displayText.length === 0) {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % typingTexts.length)
          }
        }
      },
      isDeleting ? 40 : 80,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex])

  return (
    <span className="gradient-text font-semibold">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      <FloatingShapes />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container-custom relative z-10 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">{siteConfig.name}</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-muted mb-2"
        >
          {siteConfig.title}
        </motion.p>

        <motion.div variants={fadeInUp} className="text-lg md:text-xl text-muted mb-6 h-8">
          <TypingEffect />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {siteConfig.subtitle}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Button onClick={() => scrollToSection('#projects')}>View Projects</Button>
          <Button
            variant="secondary"
            onClick={() => downloadResume(siteConfig.resumeUrl)}
          >
            Download Resume
          </Button>
          <Button variant="outline" onClick={() => scrollToSection('#contact')}>
            Contact Me
          </Button>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-xl glass text-muted hover:text-foreground hover:bg-white/10 transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={18} />
        </motion.button>
      </motion.div>
    </section>
  )
}
