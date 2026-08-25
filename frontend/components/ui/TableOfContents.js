'use client'

import { useState } from 'react'
import { FiChevronDown, FiList } from 'react-icons/fi'

export default function TableOfContents({ headings }) {
  const [isOpen, setIsOpen] = useState(true)

  if (!headings || headings.length === 0) return null

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '16px 20px',
        marginBottom: '40px',
      }}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          padding: 0, font: 'inherit',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text-1)' }}>
          <FiList size={16} color="var(--accent)" />
          Contents
        </span>
        <FiChevronDown
          size={16}
          color="var(--text-2)"
          style={{ transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}
        />
      </button>

      {isOpen && (
        <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--border)', position: 'relative', paddingLeft: '26px' }}>
          <div style={{ position: 'absolute', left: '9px', top: '6px', bottom: '6px', width: '1px', backgroundColor: 'var(--border)' }} />
          {headings.map((heading, index) => (
            <div
              key={heading.slug}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: '10px',
                marginBottom: index === headings.length - 1 ? 0 : '14px',
                marginLeft: heading.level === 3 ? '16px' : 0,
                position: 'relative',
              }}
            >
              <div style={{
                width: '20px', height: '20px', borderRadius: '50%',
                backgroundColor: 'var(--accent-lt)', color: 'var(--accent-h)',
                fontSize: '11px', fontWeight: '600', display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                marginLeft: '-11px', zIndex: 1,
              }}>
                {index + 1}
              </div>
              <a href={'#' + heading.slug} style={{ fontSize: '13.5px', color: 'var(--text-2)', textDecoration: 'none', paddingTop: '2px' }}>
                {heading.text}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}