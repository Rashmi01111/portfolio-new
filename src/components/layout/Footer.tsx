import { motion } from 'framer-motion'
import { ArrowUp, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { navLinks } from '@/constants/navigation'
import { siteConfig } from '@/constants/config'
import { scrollToSection } from '@/utils/cn'
import { fadeInUp } from '@/animations/motionVariants'

const socialLinks = [
  { icon: FaGithub, href: siteConfig.social.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: siteConfig.social.email, label: 'Email' },
  { icon: SiLeetcode, href: siteConfig.social.leetcode, label: 'LeetCode' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-surface/50">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-lg font-bold mb-3">
              <span className="gradient-text">{siteConfig.name}</span>
            </h3>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              {siteConfig.title}. Building the future with code and AI.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted text-sm hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass text-muted hover:text-foreground hover:bg-white/10 transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-muted text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            Back to Top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
