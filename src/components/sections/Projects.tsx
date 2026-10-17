import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="A selection of projects showcasing full-stack development and AI integration expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
