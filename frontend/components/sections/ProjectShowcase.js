import Button from '@/components/ui/Button'

const projects = [
  {
    title:       'Serverless Blog Engine',
    description: 'A fully serverless blog backend built on AWS Lambda + DynamoDB with native Function URLs. No API Gateway, zero cold-start cost, and permanently free at personal traffic scale.',
    tags:        ['AWS Lambda', 'DynamoDB', 'Node.js', 'Serverless'],
    github:      'https://github.com/YOUR_USERNAME/portfolio',
    live:        null,
  },
  {
    title:       'Cloud Portfolio Platform',
    description: 'This portfolio — a Next.js 15 application deployed on Vercel with a fully automated GitOps CI/CD pipeline. Dark mode, responsive design, and AWS-powered dynamic features.',
    tags:        ['Next.js 15', 'Tailwind v4', 'Vercel', 'AWS'],
    github:      'https://github.com/YOUR_USERNAME/portfolio',
    live:        '#',
  },
  {
    title:       'More Coming Soon',
    description: 'Currently building out cloud infrastructure projects focusing on VPC design, EC2 auto-scaling groups, and multi-region deployments. Stay tuned.',
    tags:        ['AWS', 'Terraform', 'CI/CD'],
    github:      null,
    live:        null,
    placeholder: true,
  },
]

export default function ProjectShowcase() {
  return (
    <section
      id="projects"
      style={{
        padding:   '64px 24px',
        maxWidth:  '896px',
        margin:    '0 auto',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '8px' }}>
          What I&apos;ve Built
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--text-1)' }}>
          Projects
        </h2>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {projects.map(({ title, description, tags, github, live, placeholder }) => (
          <div
            key={title}
            style={{
              backgroundColor: 'var(--bg-card)',
              border:          '1px solid var(--border)',
              borderRadius:    '12px',
              padding:         '28px',
              opacity:         placeholder ? 0.6 : 1,
            }}
          >
            {/* Title row */}
            <div
              style={{
                display:        'flex',
                alignItems:     'flex-start',
                justifyContent: 'space-between',
                gap:            '16px',
                marginBottom:   '10px',
                flexWrap:       'wrap',
              }}
            >
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-1)' }}>
                {title}
              </h3>

              {/* Links */}
              {!placeholder && (
                <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
                  {github && (
                    <Button href={github} variant="outline" size="sm" target="_blank" rel="noopener noreferrer">
                      GitHub ↗
                    </Button>
                  )}
                  {live && (
                    <Button href={live} variant="primary" size="sm" target="_blank" rel="noopener noreferrer">
                      Live ↗
                    </Button>
                  )}
                </div>
              )}
            </div>

            {/* Description */}
            <p
              style={{
                fontSize:     '14px',
                color:        'var(--text-2)',
                lineHeight:   '1.7',
                marginBottom: '16px',
              }}
            >
              {description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize:        '11px',
                    fontWeight:      '600',
                    color:           'var(--text-3)',
                    backgroundColor: 'var(--bg-subtle)',
                    border:          '1px solid var(--border)',
                    padding:         '3px 9px',
                    borderRadius:    '99px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}