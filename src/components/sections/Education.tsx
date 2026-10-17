import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { educationItems, certifications } from '@/constants/experience'
import { fadeInUp, staggerContainer } from '@/animations/motionVariants'

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Education & Certifications"
          title="Academic Background"
          subtitle="Formal education and professional certifications that shaped my expertise."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              Education
            </h3>
            <div className="space-y-4">
              {educationItems.map((item) => (
                <GlassCard key={item.degree} hover={false}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold">{item.degree}</h4>
                      <p className="text-indigo-400 font-medium">{item.field}</p>
                      <p className="text-muted text-sm mt-1">{item.institution}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm text-muted">{item.period}</p>
                      <p className="text-2xl font-bold gradient-text mt-1">CGPA {item.cgpa}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-violet-400" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <GlassCard key={cert.name} hover={false}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-muted">
                        {cert.issuer} &middot; {cert.year}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
