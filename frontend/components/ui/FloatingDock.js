'use client'

import { useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'

export function FloatingDock({ items, desktopClassName,}) {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </>
  )
}

function FloatingDockDesktop({ items, className }) {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={'mx-auto flex h-16 items-end gap-3 rounded-2xl bg-neutral-120/80 px-4 pb-3 dark:bg-neutral-900/40 ' + (className || '')}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}

function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  
  const distance = useTransform(mouseX, (val) => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return 9999;
    }
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [28, 44, 28])
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [28, 44, 28])

  const springConfig = { mass: 0.1, stiffness: 150, damping: 12 }
  const width = useSpring(widthTransform, springConfig)
  const height = useSpring(heightTransform, springConfig)
  const widthIcon = useSpring(widthTransformIcon, springConfig)
  const heightIcon = useSpring(heightTransformIcon, springConfig)

  // Safe check function to completely prevent text tooltips on mobile taps
  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;
    setHovered(true);
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={title}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-250 dark:bg-neutral-800 transition-colors shadow-sm"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray px-2 py-0.5 text-xs font-medium whitespace-pre text-neutral-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div 
          style={{ width: widthIcon, height: heightIcon }} 
          className="flex items-center justify-center text-neutral-600 dark:text-neutral-300"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  )
}
