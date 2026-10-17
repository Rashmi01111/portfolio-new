import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Download, Send, Phone } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import toast from 'react-hot-toast'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/constants/config'
import { downloadResume } from '@/utils/cn'
import { fadeInUp, staggerContainer } from '@/animations/motionVariants'
import type { ContactFormData } from '@/types'

const contactInfo = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: siteConfig.social.email },
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: FaLinkedinIn, label: 'LinkedIn', value: 'Connect on LinkedIn', href: siteConfig.social.linkedin },
  { icon: FaGithub, label: 'GitHub', value: `@${siteConfig.githubUsername}`, href: siteConfig.social.github },
  { icon: SiLeetcode, label: 'LeetCode', value: 'View LeetCode profile', href: siteConfig.social.leetcode },
  { icon: MapPin, label: 'Location', value: siteConfig.location, href: undefined },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: 'Hi',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio message from ${formData.name}`,
        }),
      })
      const result: { success?: string | boolean; message?: string } = await response.json()

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        toast.error(result.message || 'Your message could not be sent. Please try again.')
        return
      }

      toast.success('Message sent! Thanks for reaching out.')
      setFormData({ name: '', email: '', message: 'Hi' })
    } catch {
      toast.error('Could not connect to the email service. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
            <GlassCard hover={false}>
              <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('mailto') ? undefined : '_blank'}
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:text-indigo-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <Button
              className="w-full"
              onClick={() => downloadResume(siteConfig.resumeUrl)}
            >
              <Download size={18} />
              Download Resume
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <GlassCard hover={false} className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    placeholder="Hi"
                  />
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  <Send size={18} />
                  {isSubmitting ? 'Sending...' : 'Say Hi'}
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
