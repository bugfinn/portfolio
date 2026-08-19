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

{/* ── MODERN MINIMALIST DARK TOGGLE ── */}
function DarkToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle dark mode"
     
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        borderRadius: '99px',
        fontSize: '13px',
        fontWeight: '500',
        backgroundColor: 'var(--bg-card, rgba(0,0,0,0.03))',
        border: '1px solid var(--border, rgba(0,0,0,0.08))',
        color: 'var(--text-2, #4b5563)',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--text-2, #4b5563)'
        e.currentTarget.style.color = 'var(--text-1, #111827)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border, rgba(0,0,0,0.08))'
        e.currentTarget.style.color = 'var(--text-2, #4b5563)'
      }}
    >
      <span style={{ fontSize: '14px', lineHeight: 1 }}>{isDark ? '☀' : '☾'}</span>
      <span style={{ letterSpacing: '0.01em' }}>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default function Navbar() {
  const { isDark, toggle } = useDarkMode()
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    const base = href.split('#')[0]
    if (!base || base === '/') return false
    return pathname.startsWith(base)
  }

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg, rgba(255, 255, 255, 0.8))',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border, rgba(0,0,0,0.06))',
      }}
    >
      {/* Container to restrict maximum width & center content */}
      <div
        style={{
          maxWidth: '1024px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            fontWeight: '700',
            fontSize: '24px',
            letterSpacing: '-0.02em',
            wordSpacing : '0.15em',
            color: 'var(--text-1, #111827)',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Affan Naveed
        </Link>

        {/* Desktop Links & Controls */}
        <div 
          className="hidden md:flex" 
          style={{ 
            alignItems: 'center', 
            gap: '32px' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {navLinks.map(({ href, label }) => {
              const active = isActive(href)
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: '18px',
                    fontWeight: '500',
                    color: active ? 'var(--accent, #000)' : 'var(--text-2, #6b7280)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = 'var(--text-1, #111827)'
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = 'var(--text-2, #6b7280)'
                  }}
                >
                  {label}
                </Link>
              )
            })}
          </div>
          
          <div style={{ borderLeft: '1px solid var(--border, rgba(0,0,0,0.08))', paddingLeft: '16px', height: '24px', display: 'flex', alignItems: 'center' }}>
            <DarkToggle isDark={isDark} onToggle={toggle} />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden" style={{ alignItems: 'center', gap: '16px' }}>
          <DarkToggle isDark={isDark} onToggle={toggle} />

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            style={{
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '4px',
              width: '20px',
              height: '20px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  height: '2px',
                  width: '100%',
                  borderRadius: '2px',
                  backgroundColor: 'var(--text-1, #111827)',
                  transition: 'all 0.2s ease',
                  opacity: i === 1 && menuOpen ? 0 : 1,
                  transform:
                    i === 0 && menuOpen ? 'translateY(6px) rotate(45deg)'
                    : i === 2 && menuOpen ? 'translateY(-6px) rotate(-45deg)'
                    : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile drop-down view */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg, #fff)',
            borderTop: '1px solid var(--border, rgba(0,0,0,0.06))',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '15px',
                fontWeight: '500',
                color: isActive(href) ? 'var(--accent, #000)' : 'var(--text-2, #6b7280)',
                textDecoration: 'none',
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