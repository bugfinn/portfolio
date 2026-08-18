import Image from 'next/image'
import Button from '@/components/ui/Button'

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/bugfinn',     external: true  },
  { label: 'LinkedIn', href: 'https://linkedin.com//Affan Naveed', external: true  },
  { label: 'X', href: 'https://x.com//AffanNaveed004', external: true  },
  { label: 'Email',    href: 'mailto:your@email.com',external: false },
]

export default function HeroSection() {
  return (
    <section
      style={{
        padding:  '80px 24px 72px',
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
            width:        '160px',
            height:       '160px',
            borderRadius: '50%',
            overflow:     'hidden',
            border:       '3px solid var(--border)',
            position:     'relative',
            flexShrink:   0,
          }}
        >
          <Image
            src="/images/portfolio.jpeg"
            alt="Affan"
            fill={true}
            style={{ objectFit: 'cover' }}
            priority={true}
          />
        </div>

        {/* Text */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize:     '15px',
              fontWeight:   '500',
              color:        'var(--accent)',
              marginBottom: '8px',
            }}
          >
            Hi, I am
          </p>

          <h1
            style={{
              fontSize:      'clamp(32px, 5vw, 48px)',
              fontWeight:    '800',
              letterSpacing: '-0.03em',
              lineHeight:    '1.1',
              color:         'var(--text-1)',
              marginBottom:  '10px',
            }}
          >
            Affan
          </h1>

          <p
            style={{
              fontSize:     '18px',
              fontWeight:   '500',
              color:        'var(--text-2)',
              marginBottom: '16px',
            }}
          >
            Cloud Infrastructure Engineer
          </p>

          <p
            style={{
              fontSize:     '15px',
              color:        'var(--text-2)',
              lineHeight:   '1.75',
              maxWidth:     '480px',
              margin:       '0 auto 28px auto',
            }}
          >
            Building serverless architectures on AWS and shipping cloud-native
            applications. Frontend background with a deep focus on Lambda,
            DynamoDB, and automated CI/CD pipelines.
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
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={tgt}
                  rel="noopener noreferrer"
                  style={{
                    fontSize:       '13px',
                    fontWeight:     '500',
                    color:          'var(--text-3)',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
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
            <Button href="/#projects" variant="primary" size="lg">
              View Projects
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
