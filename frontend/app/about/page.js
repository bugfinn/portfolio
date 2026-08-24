import Image from 'next/image'
import Button from '@/components/ui/Button'

const timeline = [
  {
    year: '2024 — Present',
    title: 'Cloud Infrastructure Engineer',
    desc: 'Expanded focus beyond the browser to engineer scalable, zero-cost cloud architectures. I design serverless APIs with AWS Lambda and DynamoDB, configure custom VPC networks, and automate CI/CD workflows using GitHub Actions.',
  },
    {
    year:  '2022 — 2024',
    title: 'Frontend Engineer',
    desc:  'Focused heavily on the React ecosystem. Translated pixel-perfect Figma designs into live code and built complex data dashboards using Next.js, Vite, Tailwind CSS, and component libraries like shadcn/ui.',
  },
  {
    year:  '2021 — 2022',
    title: 'Started Web Development',
    desc:  'Wrote my first lines of HTML and CSS and immediately got hooked. Spent this year mastering core JavaScript fundamentals before making the jump to React to start building interactive side projects.',
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
        <p style={{ fontSize: '16px', color: 'var(--text-1)', lineHeight: '1.8' }}>
  I am a Cloud Infrastructure Engineer with a deep foundation in frontend development.
  I started with React and Next.js, and over time became more interested
  in the systems running underneath — how requests route, how data persists,
  how deployments happen without downtime.
</p>
<p style={{ fontSize: '16px', color: 'var(--text-1)', lineHeight: '1.8' }}>
  Right now I am focused on AWS — Lambda, DynamoDB, IAM, VPC, and EC2.
  I understand how to build the frontend that consumes an API and the
  serverless backend that powers it. That full-stack awareness is what
  I bring to infrastructure work.
</p>
<p style={{ fontSize: '16px', color: 'var(--text-1)', lineHeight: '1.8' }}>
  What genuinely excites me is understanding how things work at a systems
  level — not just making them run, but knowing why they run that way.
  That curiosity is what pushed me from frontend into cloud, and it is
  what keeps me learning every day.
</p>
      </div>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}>
        <Button
          href="/Affan_Naveed_Resume.pdf"
          variant="primary"
          size="lg"
          download="Affan_Naveed_Resume.pdf"
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