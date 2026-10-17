import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/constants/config'

export function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-background"
          aria-label="Loading"
          role="status"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="relative w-16 h-16"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-white/10" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-500 border-r-violet-500" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted text-sm font-medium tracking-wide"
            >
              Loading {siteConfig.name.split(' ')[0]}&apos;s Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
