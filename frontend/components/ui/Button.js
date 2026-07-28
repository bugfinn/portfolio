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
  const base = {
    display:        'inline-flex',
    alignItems:     'center',
    justifyContent: 'center',
    gap:            '8px',
    fontWeight:     '600',
    borderRadius:   '8px',
    cursor:         disabled ? 'not-allowed' : 'pointer',
    opacity:        disabled ? 0.6 : 1,
    transition:     'all 0.15s ease',
    textDecoration: 'none',
    border:         'none',
    fontFamily:     'inherit',
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
    },
    outline: {
      backgroundColor: 'transparent',
      color:           'var(--text-1)',
      border:          '1px solid var(--border)',
    },
  }

  const style = { ...base, ...sizes[size], ...variants[variant] }

  if (href) {
    return (
      <a href={href} style={style} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={style} {...props}>
      {children}
    </button>
  )
}