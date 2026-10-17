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
  borderRadius = '14px',
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
      className={
        'btn-cta-group relative inline-flex overflow-hidden bg-transparent text-[15px] transition-transform duration-200 hover:-translate-y-0.5 ' +
        (containerClassName || '')
      }
      style={{
        borderRadius: borderRadius,
        height: '46px',
        padding: '1.5px',
        textDecoration: 'none',
      }}
      {...otherProps}
    >
      {/* Subtle static border track so the button outline stays crisp */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--border)', opacity: 0.65, borderRadius }}
      />

      {/* Animated rotating blue beam */}
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.92)` }}
      >
        <MovingBorder duration={duration} rx="28%" ry="28%">
          <div
            style={{
              background: 'radial-gradient(var(--accent) 45%, transparent 65%)',
            }}
            className={
              'h-24 w-24 opacity-90 ' + (borderClassName || '')
            }
          />
        </MovingBorder>
      </div>

      {/* Inner button face */}
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          color: 'var(--text-1)',
          borderRadius: '12.5px',
          padding: '0 26.5px',
          gap: '8px',
        }}
        className={
          'relative z-10 inline-flex h-full w-full items-center justify-center font-semibold whitespace-nowrap antialiased ' +
          (className || '')
        }
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