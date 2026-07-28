import { getBlogPost } from '@/lib/api'
import { notFound }    from 'next/navigation'
import Link            from 'next/link'

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params
  const id   = resolvedParams.id
  const post = await getBlogPost(id)

  if (!post) {
    notFound()
  }

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 80px' }}>

      {/* Back link */}
      <Link
        href="/blog"
        style={{
          display:        'inline-flex',
          alignItems:     'center',
          gap:            '6px',
          fontSize:       '14px',
          fontWeight:     '500',
          color:          'var(--text-3)',
          textDecoration: 'none',
          marginBottom:   '40px',
        }}
      >
        Back to Blog
      </Link>

      {/* Post header */}
      <header
        style={{
          marginBottom: '40px',
          borderBottom: '1px solid var(--border)',
          paddingBottom: '32px',
        }}
      >
        <p
          style={{
            fontSize:     '13px',
            color:        'var(--text-3)',
            marginBottom: '12px',
            fontWeight:   '500',
          }}
        >
          {post.Date}
        </p>
        <h1
          style={{
            fontSize:      'clamp(24px, 4vw, 36px)',
            fontWeight:    '800',
            letterSpacing: '-0.025em',
            lineHeight:    '1.2',
            color:         'var(--text-1)',
          }}
        >
          {post.Title}
        </h1>
        {post.Summary && (
          <p
            style={{
              fontSize:   '16px',
              color:      'var(--text-2)',
              lineHeight: '1.7',
              marginTop:  '16px',
            }}
          >
            {post.Summary}
          </p>
        )}
      </header>

      {/* Post content */}
      <div
        style={{
          fontSize:   '15px',
          color:      'var(--text-2)',
          lineHeight: '1.85',
          whiteSpace: 'pre-wrap',
        }}
      >
        {post.Content}
      </div>
    </div>
  )
}