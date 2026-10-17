import { useScrollProgress } from '@/hooks/useScrollSpy'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed top-0 left-0 right-0 z-100 h-0.5 bg-transparent"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress"
    >
      <div
        className="h-full bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
