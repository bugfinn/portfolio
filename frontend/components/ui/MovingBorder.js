'use client'

import { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'motion/react'

export function MovingBorderButton({
  borderRadius = '1.75rem',
  children,
  as: Component = 'button',
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={'relative h-15 w-48 overflow-hidden bg-transparent p-[1px] text-base ' + (containerClassName || '')}
      style={{ borderRadius }}
      {...otherProps}
    >
      <div className="absolute inset-0" style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={'h-20 w-20 opacity-80 ' + (borderClassName || '')}
            style={{ background: 'radial-gradient(var(--accent) 40%, transparent 60%)' }}
          />
        </MovingBorder>
      </div>

      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border)',
          color: 'var(--text-1)',
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
        className={'relative flex h-full w-full items-center justify-center border font-semibold antialiased backdrop-blur-xl ' + (className || '')}
      >
        {children}
      </div>
    </Component>
  )
}

export const MovingBorder = ({ children, duration = 3000, rx, ry, ...otherProps }) => {
  const pathRef = useRef()
  const progress = useMotionValue(0)

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength()
    if (length) {
      const pxPerMillisecond = length / duration
      progress.set((time * pxPerMillisecond) % length)
    }
  })

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x)
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y)

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute h-full w-full" width="100%" height="100%" {...otherProps}>
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div style={{ position: 'absolute', top: 0, left: 0, display: 'inline-block', transform }}>
        {children}
      </motion.div>
    </>
  )
}