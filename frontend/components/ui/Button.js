'use client'
import { useState } from 'react'

/**
 * Reusable Button component.
 * Variants: 'primary' | 'outline' | 'ghost'
 * Sizes:    'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  const [hovered, setHovered] = useState(false)

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: 600,
    borderRadius: '14px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    textDecoration: 'none',
    fontFamily: 'inherit',
    lineHeight: 1,
    transform: hovered && !disabled ? 'translateY(-2px)' : 'translateY(0)',
  }

  const sizes = {
    sm: { fontSize: '13px', padding: '7px 14px' },
    md: { fontSize: '14px', padding: '9px 20px' },
    lg: { fontSize: '15px', padding: '0 28px', height: '46px' },
  }

  const variants = {
    primary: {
      backgroundColor: hovered ? 'var(--accent-h)' : 'var(--accent)',
      color: '#ffffff',
      border: '1px solid transparent',
      boxShadow: hovered ? '0 8px 20px -6px rgba(37, 99, 235, 0.5)' : '0 2px 6px -1px rgba(37, 99, 235, 0.2)',
    },
    outline: {
      backgroundColor: hovered ? 'var(--bg-card)' : 'transparent',
      color: hovered ? 'var(--text-1)' : 'var(--text-2)',
      border: '1px solid var(--border)',
      boxShadow: hovered ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none',
    },
    ghost: {
      backgroundColor: hovered ? 'var(--bg-subtle)' : 'transparent',
      color: hovered ? 'var(--text-1)' : 'var(--text-2)',
      border: '1px solid transparent',
    },
  }

  const style = { ...base, ...sizes[size], ...variants[variant] }
  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }

  if (href) {
    return (
      <a href={href} style={style} className={'btn-cta-group ' + className} {...handlers} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button
      style={style}
      className={'btn-cta-group ' + className}
      onClick={onClick}
      disabled={disabled}
      {...handlers}
      {...props}
    >
      {children}
    </button>
  )
}