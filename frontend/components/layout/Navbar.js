'use client'

import { useState, useCallback, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',           label: 'Home'     },
  { href: '/about',     label: 'About'    },
  { href: '/blog',      label: 'Blog'     },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact',  label: 'Contact'  },
]

function getDocumentDarkMode() {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('dark')
}

function subscribeToDarkModeChange(onStoreChange) {
  if (typeof document === 'undefined') return () => {}
  const observer = new MutationObserver(onStoreChange)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
  return () => observer.disconnect()
}

function useDarkMode() {
  const isDark = useSyncExternalStore(
    subscribeToDarkModeChange,
    getDocumentDarkMode,
    () => false
  )

  const toggle = useCallback(() => {
    const html = document.documentElement
    const newDark = !html.classList.contains('dark')
    html.classList.toggle('dark', newDark)
    localStorage.setItem('theme', newDark ? 'dark' : 'light')
  }, [])

  return { isDark, toggle }
}

function DarkToggle({ isDark, onToggle, className = '' }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className={className}
      style={{
        cursor:          'pointer',
        background:      'var(--bg-card)',
        border:          '1px solid var(--border)',
        borderRadius:    '8px',
        width:           '32px',
        height:          '32px',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        fontSize:        '14px',
        color:           'var(--text-2)',
      }}
    >
      {isDark ? '☀' : '☾'}
    </button>
  )
}

export default function Navbar() {
  const { isDark, toggle } = useDarkMode()
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href) => {
    const base = href.split('#')[0]
    if (href === '/') return pathname === '/'
    if (!base || base === '/') return false
    return pathname.startsWith(base)
  }

  return (
    <nav
      style={{
        position:        'sticky',
        top:             0,
        zIndex:          50,
        backgroundColor: 'var(--bg)',
        borderBottom:    '1px solid var(--border)',
      }}
    >
      {/* ── Main bar ── */}
      <div
        style={{
          maxWidth:       '896px',
          margin:         '0 auto',
          padding:        '0 24px',
          height:         '56px',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontWeight:    '700',
            fontSize:      '15px',
            letterSpacing: '-0.01em',
            color:         'var(--text-1)',
            textDecoration: 'none',
          }}
        >
          Affan
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '24px' }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize:       '14px',
                fontWeight:     '500',
                color:          isActive(href) ? 'var(--accent)' : 'var(--text-2)',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
          <DarkToggle isDark={isDark} onToggle={toggle} />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden" style={{ alignItems: 'center', gap: '12px' }}>
          <DarkToggle isDark={isDark} onToggle={toggle} />

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            style={{
              cursor:         'pointer',
              background:     'none',
              border:         'none',
              padding:        0,
              display:        'flex',
              flexDirection:  'column',
              justifyContent: 'center',
              gap:            '5px',
              width:          '24px',
              height:         '24px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display:         'block',
                  height:          '2px',
                  width:           '20px',
                  borderRadius:    '9999px',
                  backgroundColor: 'var(--text-1)',
                  transition:      'all 0.2s',
                  opacity:         i === 1 && menuOpen ? 0 : 1,
                  transform:
                    i === 0 && menuOpen ? 'translateY(7px) rotate(45deg)'
                    : i === 2 && menuOpen ? 'translateY(-7px) rotate(-45deg)'
                    : 'none',
                  transformOrigin: 'center',
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div
          style={{
            borderTop:  '1px solid var(--border)',
            padding:    '12px 24px 20px',
            display:    'flex',
            flexDirection: 'column',
            gap:        '16px',
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize:       '14px',
                fontWeight:     '500',
                color:          isActive(href) ? 'var(--accent)' : 'var(--text-2)',
                textDecoration: 'none',
                padding:        '4px 0',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}