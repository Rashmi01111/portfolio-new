import { motion } from 'framer-motion'

const shapes = [
  { size: 300, x: '10%', y: '20%', delay: 0, duration: 20 },
  { size: 200, x: '80%', y: '10%', delay: 2, duration: 25 },
  { size: 250, x: '70%', y: '60%', delay: 4, duration: 22 },
  { size: 180, x: '20%', y: '70%', delay: 1, duration: 18 },
  { size: 150, x: '50%', y: '40%', delay: 3, duration: 24 },
]

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-[0.03]"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
