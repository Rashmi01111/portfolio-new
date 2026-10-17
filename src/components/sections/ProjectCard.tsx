import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import type { Project } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const hasLiveDemo = project.liveDemoUrl.trim().length > 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group"
    >
      <div className="glass rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10">
        <div className={`relative h-52 overflow-hidden bg-linear-to-br ${project.gradient}`}>
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
          {!hasLiveDemo && (
            <div className="absolute top-4 right-4">
              <Badge variant="warning">Coming Soon</Badge>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-muted text-sm mb-4 leading-relaxed flex-1">{project.description}</p>

          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Key Features</p>
            <div className="flex flex-wrap gap-1.5">
              {project.features.slice(0, 4).map((feature) => (
                <span
                  key={feature}
                  className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-muted"
                >
                  {feature}
                </span>
              ))}
              {project.features.length > 4 && (
                <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-muted">
                  +{project.features.length - 4} more
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="accent">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm">
                <FaGithub size={16} />
                GitHub
              </Button>
            </a>
            {hasLiveDemo ? (
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="sm">
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
              </a>
            ) : null}
            <Link to={`/projects/${project.slug}`}>
              <Button variant="outline" size="sm">
                View Details
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
