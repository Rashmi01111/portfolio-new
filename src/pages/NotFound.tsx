import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center">
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
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
