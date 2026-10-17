import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { getProjectBySlug } from '@/data/projects'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { fadeInUp } from '@/animations/motionVariants'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/">
            <Button>
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const hasLiveDemo = project.liveDemoUrl.trim().length > 0

  return (
    <article className="section-padding pt-32">
      <div className="container-custom max-w-4xl">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          <div className={`relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-linear-to-br ${project.gradient}`}>
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
            {!hasLiveDemo && (
              <div className="absolute top-4 right-4">
                <Badge variant="warning">Coming Soon</Badge>
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.name}</h1>
          <p className="text-lg text-muted leading-relaxed mb-8">{project.longDescription}</p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">
                <FaGithub size={18} />
                GitHub
              </Button>
            </a>
            {hasLiveDemo && (
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                <Button>
                  <ExternalLink size={18} />
                  Live Demo
                </Button>
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="accent">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
