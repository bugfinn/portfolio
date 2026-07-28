import Image from 'next/image'
import Button from '@/components/ui/Button'

const timeline = [
  {
    year:  '2024 — Present',
    title: 'Cloud Infrastructure Engineer',
    desc:  'Transitioning from frontend engineering into cloud infrastructure. Building on AWS with Lambda, DynamoDB, VPC design, and automated CI/CD pipelines via GitHub Actions and Vercel.',
  },
  {
    year:  '2022 — 2024',
    title: 'Frontend Engineer',
    desc:  'Built production web applications with React, Next.js, and Tailwind CSS. Developed strong foundations in component architecture, performance optimization, and responsive design.',
  },
  {
    year:  '2021 — 2022',
    title: 'Started Web Development',
    desc:  'Began with HTML, CSS, and JavaScript. Quickly progressed into React and modern frontend tooling. Built several personal and freelance projects.',
  },
]

export const metadata = {
  title: 'About — Affan',
  description: 'Cloud Infrastructure Engineer transitioning from frontend. AWS, Lambda, DynamoDB, CI/CD.',
}

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '896px', margin: '0 auto', padding: '64px 24px 80px' }}>

      {/* Header Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '32px' }}>
        <div
          style={{
            width:        '80px',
            height:       '80px',
            borderRadius: '50%',
            overflow:     'hidden',
            position:     'relative',
            flexShrink:   0,
            border:       '2px solid var(--border)',
          }}
        >
          <Image
            src="/images/portfolio.jpeg"
            alt="Affan"
            fill={true}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <h1
            style={{
              fontSize:      '32px',
              fontWeight:    '800',
              letterSpacing: '-0.02em',
              color:         'var(--text-1)',
              marginBottom:  '4px',
            }}
          >
            About Me
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--accent)', fontWeight: '500' }}>
            Cloud Infrastructure Engineer
          </p>
        </div>
      </div>

      {/* Bio */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
        <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: '1.8' }}>
          I am a developer actively transitioning from frontend engineering into cloud
          infrastructure. My background in React and Next.js gives me a unique perspective
          when building cloud-native applications — I understand both the infrastructure
          layer and the user-facing product it powers.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: '1.8' }}>
          I am currently focused on AWS — working with Lambda, DynamoDB, VPC design,
          IAM, EC2, and S3. I believe the best cloud engineers understand the full stack,
          and I am building toward that deliberately and systematically.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: '1.8' }}>
          This portfolio itself is a cloud-native project. The blog and contact form are
          powered by AWS Lambda with native Function URLs and DynamoDB — no API Gateway,
          no server, just clean serverless architecture at zero cost.
        </p>
      </div>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}>
        <Button
          href="/Affan_Resume.pdf"
          variant="primary"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </Button>
        <Button href="/#contact" variant="outline" size="lg">
          Contact Me
        </Button>
      </div>

      {/* Timeline */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '48px' }}>
        <p
          style={{
            fontSize:      '12px',
            fontWeight:    '700',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color:         'var(--accent)',
            marginBottom:  '8px',
          }}
        >
          Journey
        </p>
        <h2
          style={{
            fontSize:      '24px',
            fontWeight:    '700',
            letterSpacing: '-0.02em',
            color:         'var(--text-1)',
            marginBottom:  '36px',
          }}
        >
          Engineering Timeline
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {timeline.map(function(item, i) {
            return (
              <div
                key={i}
                style={{ display: 'flex', gap: '20px', paddingBottom: '32px' }}
              >
                {/* Dot + Line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div
                    style={{
                      width:           '10px',
                      height:          '10px',
                      borderRadius:    '50%',
                      backgroundColor: 'var(--accent)',
                      marginTop:       '6px',
                      flexShrink:      0,
                    }}
                  />
                  {i < timeline.length - 1 && (
                    <div
                      style={{
                        width:           '1px',
                        flex:            1,
                        backgroundColor: 'var(--border)',
                        marginTop:       '6px',
                        minHeight:       '32px',
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div>
                  <p
                    style={{
                      fontSize:      '12px',
                      fontWeight:    '600',
                      color:         'var(--accent)',
                      marginBottom:  '4px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.year}
                  </p>
                  <h3
                    style={{
                      fontSize:     '16px',
                      fontWeight:   '700',
                      color:        'var(--text-1)',
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: '1.7' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}