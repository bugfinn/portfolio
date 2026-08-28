'use client' 

import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaXTwitter, FaRegEnvelope } from 'react-icons/fa6'
import Image from 'next/image'
import Button from '@/components/ui/Button'

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/bugfinn',         external: true,  Icon: FiGithub   },
  { label: 'LinkedIn', href: 'https://linkedin.com', external: true,  Icon: FiLinkedin },
  { label: 'X',        href: 'https://x.com/AffanNaveed004',        external: true,  Icon: FaXTwitter },
  { label: 'Email',    href: 'mailto:affannaveed43@gmail.com',  external: false, Icon: FaRegEnvelope },
]

export default function HeroSection() {
  return (
    <section
      style={{
        padding:  '100px 24px 72px',
        maxWidth: '896px',
        margin:   '0 auto',
      }}
    >
      <div
        style={{
          display:       'flex',
          flexDirection: 'column',
          alignItems:    'center',
          gap:           '40px',
        }}
      >
        {/* Profile Picture */}
        <div
          style={{
            width:        '200px',
            height:       '200px',
            borderRadius: '50%',
            overflow:     'hidden',
            border:       '1px solid var(--border)',
            position:     'relative',
            flexShrink: 0,
             marginTop:    '50px',
            
          }}
        >
          <Image
            src="/images/portfolio.jpeg"
            alt="Affan"
            fill={true}
            sizes="200px"
            style={{ objectFit: 'cover' }}
            priority={true}
          />
        </div>

        {/* Text */}
        <div style={{ textAlign: 'center' }}>
       

          <h1
            style={{
              fontSize:      'clamp(32px, 5vw, 48px)',
              fontWeight:    'bold',
              letterSpacing: '-0.03em',
              lineHeight:    '1.1',
              color:         'var(--text-1)',
              marginBottom: '10px',
              wordSpacing:   '0.15em',
            }}
          >
            Affan Naveed
          </h1>

          <p
            style={{
              fontSize:     '18px',
              fontWeight:   '500',
              color:        'var(--text-1)',
              marginBottom: '16px',
            }}
          >
            Cloud Infrastructure Engineer
          </p>


          {/* Social Links */}
          <div
            style={{
              display:        'flex',
              gap:            '16px',
              marginBottom:   '28px',
              justifyContent: 'center',
              flexWrap:       'wrap',
            }}
          >
            {socialLinks.map(function(link) {
              var tgt = link.external ? '_blank' : '_self'
              var Icon = link.Icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={tgt}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label} 
                  style={{
                    color: 'var(--text-2)',
                    display: 'flex',
                    transition: 'color 0.2s ease, transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                   
                    e.currentTarget.style.color = '#3b82f6';
                    if (e.currentTarget.firstChild) {
                      e.currentTarget.firstChild.style.color = '#3b82f6';
                    }
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-2)';
                    if (e.currentTarget.firstChild) {
                      e.currentTarget.firstChild.style.color = 'inherit';
                    }
                    e.currentTarget.style.transform = 'translateY(0px)';
                  }}
                >
                  <Icon size={30} style={{ transition: 'color 0.2s ease', color: 'inherit' }} />
                </a>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div
            style={{
              display:        'flex',
              gap:            '12px',
              flexWrap:       'wrap',
              justifyContent: 'center',
            }}
          >
            <Button href="/blog" variant="primary" size="lg">
              Read My Blog
            </Button>
            <Button href="/#contact" variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
  
}
