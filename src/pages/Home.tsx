import { lazy, Suspense } from 'react'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { ProjectCardSkeleton } from '@/components/ui/Skeleton'

const Skills = lazy(() =>
  import('@/components/sections/Skills').then((m) => ({ default: m.Skills })),
)
const Projects = lazy(() =>
  import('@/components/sections/Projects').then((m) => ({ default: m.Projects })),
)
const Experience = lazy(() =>
  import('@/components/sections/Experience').then((m) => ({ default: m.Experience })),
)
const Education = lazy(() =>
  import('@/components/sections/Education').then((m) => ({ default: m.Education })),
)
const GitHubSection = lazy(() =>
  import('@/components/sections/GitHubSection').then((m) => ({ default: m.GitHubSection })),
)
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((m) => ({ default: m.Contact })),
)

function SectionFallback() {
  return (
    <div className="section-padding">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Education />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <GitHubSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </>
  )
}
