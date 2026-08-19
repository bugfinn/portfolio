const strengths = [
  {
    text: 'Cloud Architecture & Serverless: AWS Lambda, DynamoDB, and building zero-cost, high-performance edge APIs.',
  },
  {
    text: 'Network Engineering & Security: VPC design, IPsec VPN tunnels, subnet routing, and secure environments.',
  },
  {
    text: 'Automated GitOps & CI/CD: GitHub Actions, Vercel edge deployments, and automated infrastructure pipelines.',
  },
  {
    text: 'High-Performance Frontend UI: Next.js App Router, Tailwind CSS, and mobile-first, responsive interface design.',
  },
]

export default function SkillsGrid() {
  return (
    <section
      id="skills"
      style={{
        padding:   '80px 24px',
        maxWidth:  '896px',
        margin:    '0 auto',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ marginBottom: '44px' }}>
        <p
          style={{
            fontSize:      '13px',
            fontWeight:    '700',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color:         'var(--accent)',
            marginBottom:  '8px',
          }}
        >
          Core Strengths
        </p>
        <h2
          style={{
            fontSize:      '32px',
            fontWeight:    '700',
            letterSpacing: '-0.03em',
            color:         'var(--text-1)',
          }}
        >
          What I am good at building and shipping
        </h2>
      </div>

      <div
        id="strengthsGrid"
        style={{
          display:             'grid',
         gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap:                 '16px',
        }}
      >
        {strengths.map(({ text }, i) => (
          <div
            key={i}
            style={{
              backgroundColor: 'var(--bg-card)',
              border:          '1px solid var(--border)',
              borderLeft:      '4px solid var(--accent)',
              borderRadius:    '12px',
              boxShadow:       '0 1px 2px rgba(0, 0, 0, 0.05)',
              padding:         '24px',
            }}
          >
            <p
              style={{
                fontSize:   '15px',
                fontWeight: '600',
                lineHeight: '1.6',
                color:      'var(--text-1)',
                margin:     0,
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}