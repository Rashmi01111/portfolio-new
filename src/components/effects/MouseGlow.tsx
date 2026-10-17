import { useMousePosition, useMediaQuery } from '@/hooks/useMousePosition'

export function MouseGlow() {
  const { x, y } = useMousePosition()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (!isDesktop) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.06), transparent 40%)`,
      }}
    />
  )
}
