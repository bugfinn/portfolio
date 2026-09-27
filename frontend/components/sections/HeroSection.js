'use client'

import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaXTwitter, FaRegEnvelope } from 'react-icons/fa6'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { FloatingDock } from '@/components/ui/FloatingDock'
import Link from 'next/link'
import { MovingBorderButton } from '@/components/ui/MovingBorder'

const socialLinks = [
  { title: 'GitHub',    href: 'https://github.com/bugfinn',                          icon: <FiGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" /> },
  { title: 'LinkedIn',  href: 'https://www.linkedin.com/in/affan-naveed-b2696237a/', icon: <FiLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" /> },
  { title: 'Twitter',   href: 'https://x.com/AffanNaveed004',                        icon: <FaXTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" /> },
  { title: 'Instagram', href: 'https://www.instagram.com/affvnish',              icon: <FiInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" /> },
  { title: 'Email',     href: 'mailto:affannaveed43@gmail.com',                      icon: <FaRegEnvelope className="h-full w-full text-neutral-500 dark:text-neutral-300" /> },
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
          <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>
            <FloatingDock items={socialLinks} />
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
           <MovingBorderButton as={Link} href="/#contact" duration={3000}>
  Contact Me
</MovingBorderButton>
          </div>
        </div>
      </div>
    </section>
  )

}