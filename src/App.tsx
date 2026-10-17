import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { BackToTop } from '@/components/layout/BackToTop'
import { PageLoader } from '@/components/effects/PageLoader'
import { AnimatedBackground } from '@/components/effects/AnimatedBackground'
import { MouseGlow } from '@/components/effects/MouseGlow'
import { StructuredData } from '@/components/seo/StructuredData'
import { useTheme } from '@/hooks/useTheme'
import { useGsapScrollReveal } from '@/animations/gsapAnimations'

const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })))
const ProjectDetail = lazy(() =>
  import('@/pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })),
)
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })))

function AppContent() {
  const { theme, toggleTheme } = useTheme()
  useGsapScrollReveal()

  return (
    <>
      <StructuredData />
      <PageLoader />
      <AnimatedBackground />
      <MouseGlow />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1a1a24',
            color: '#fafafa',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
          },
        }}
      />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
