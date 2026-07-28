const skills = [
  {
    icon:  '☁️',
    title: 'Cloud & AWS',
    tags:  ['Lambda', 'DynamoDB', 'EC2', 'S3', 'IAM', 'CloudWatch', 'VPC'],
  },
  {
    icon:  '🌐',
    title: 'Networking',
    tags:  ['VPC Design', 'Subnets', 'Route Tables', 'Security Groups', 'NAT Gateway'],
  },
  {
    icon:  '⚙️',
    title: 'CI/CD & GitOps',
    tags:  ['GitHub Actions', 'Vercel', 'Git', 'Docker', 'Infrastructure as Code'],
  },
  {
    icon:  '🖥️',
    title: 'Frontend',
    tags:  ['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'REST APIs'],
  },
]

export default function SkillsGrid() {
  return (
    <section
      id="skills"
      style={{
        padding:         '64px 24px',
        maxWidth:        '896px',
        margin:          '0 auto',
        borderTop:       '1px solid var(--border)',
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '8px' }}>
          What I Work With
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--text-1)' }}>
          Skills & Technologies
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap:                 '16px',
        }}
      >
        {skills.map(({ icon, title, tags }) => (
          <div
            key={title}
            style={{
              backgroundColor: 'var(--bg-card)',
              border:          '1px solid var(--border)',
              borderRadius:    '12px',
              padding:         '24px',
            }}
          >
            <span style={{ fontSize: '28px', display: 'block', marginBottom: '12px' }}>
              {icon}
            </span>
            <h3
              style={{
                fontSize:     '15px',
                fontWeight:   '700',
                color:        'var(--text-1)',
                marginBottom: '14px',
              }}
            >
              {title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize:        '11px',
                    fontWeight:      '500',
                    color:           'var(--accent)',
                    backgroundColor: 'var(--accent-lt)',
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