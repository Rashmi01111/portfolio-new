import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { navLinks } from '@/constants/navigation'
import { siteConfig } from '@/constants/config'
import { useScrollSpy, useScrolled } from '@/hooks/useScrollSpy'
import { scrollToSection } from '@/utils/cn'
import { cn } from '@/utils/cn'

interface NavbarProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrolled(50)
  const activeSection = useScrollSpy(sectionIds)

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setMobileOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled ? 'glass-strong shadow-lg shadow-black/10' : 'bg-transparent',
      )}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="text-lg font-bold tracking-tight"
          whileHover={{ scale: 1.02 }}
        >
          <span className="gradient-text">{siteConfig.name.split(' ')[0]}</span>
          <span className="text-muted font-normal">.dev</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                  isActive ? 'text-foreground' : 'text-muted hover:text-foreground',
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/10 overflow-hidden"
          >
            <div className="container-custom px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      'px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors',
                      isActive
                        ? 'text-foreground bg-white/5'
                        : 'text-muted hover:text-foreground hover:bg-white/5',
                    )}
                  >
                    {link.name}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
