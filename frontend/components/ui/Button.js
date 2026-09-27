'use client'

import { useState } from 'react'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const [hovered, setHovered] = useState(false)
  const active = hovered && !disabled

  const base = {
    display:        'inline-flex',
    alignItems:     'center',
    justifyContent: 'center',
    gap:            '8px',
    fontWeight:     '600',
    borderRadius:   '14px',
    cursor:         disabled ? 'not-allowed' : 'pointer',
    opacity:        disabled ? 0.6 : 1,
    transition:     'all 0.2s ease',
    textDecoration: 'none',
    border:         'none',
    fontFamily:     'inherit',
    transform:      active ? 'translateY(-2px)' : 'translateY(0)',
  }

  const sizes = {
    sm: { fontSize: '13px', padding: '6px 14px' },
    md: { fontSize: '14px', padding: '10px 20px' },
    lg: { fontSize: '15px', padding: '12px 28px' },
  }

  const variants = {
    primary: {
      backgroundColor: 'var(--accent)',
      color:           '#ffffff',
      boxShadow:       active ? '0 8px 20px -6px color-mix(in srgb, var(--accent) 55%, transparent)' : 'none',
    },
    outline: {
      backgroundColor: 'var(--bg-card)',
      color:           'var(--text-1)',
      border:          active ? '1px solid var(--accent)' : '1px solid var(--border)',
    },
  }

  const style = { ...base, ...sizes[size], ...variants[variant] }

  const hoverHandlers = {
    onMouseEnter: () => !disabled && setHovered(true),
    onMouseLeave: () => setHovered(false),
  }

  if (href) {
    return (
      <a href={href} style={style} {...hoverHandlers} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={style} {...hoverHandlers} {...props}>
      {children}
    </button>
  )
}