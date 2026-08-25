import Image from 'next/image'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/api'

export const metadata = {
  title: 'Blog — Affan',
  description: 'Articles on cloud infrastructure, AWS, serverless architecture, and frontend engineering.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()
  

  return (
    <div style={{ maxWidth: '896px', margin: '0 auto', padding: '64px 24px 80px' }}>

      {/* Heading */}
      <div style={{ marginBottom: '48px' }}>
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
          Writing
        </p>
        <h1
          style={{
            fontSize:      '32px',
            fontWeight:    '800',
            letterSpacing: '-0.02em',
            color:         'var(--text-1)',
            marginBottom:  '10px',
          }}
        >
          Blog
        </h1>
        <p style={{ fontSize: '15px', fontWeight: '500', color: 'var(--text-1)', lineHeight: '1.7' }}>
          Articles on cloud infrastructure, AWS, serverless architecture, and engineering.
        </p>
      </div>

      {/* Empty state or posts */}
      {posts.length === 0 ? (
        <div
          style={{
            textAlign:       'center',
            padding:         '80px 24px',
            backgroundColor: 'var(--bg-card)',
            border:          '1px solid var(--border)',
            borderRadius:    '12px',
          }}
        >
          <p style={{ fontSize: '32px', marginBottom: '16px' }}>✍️</p>
          <h2
            style={{
              fontSize:     '18px',
              fontWeight:   '700',
              color:        'var(--text-1)',
              marginBottom: '8px',
            }}
          >
            Posts coming soon
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-2)' }}>
            The blog backend is being set up. Check back shortly.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {posts.map(function(post) {
            var slug = post.PK.replace('BLOG#', '')
            const formattedDate = new Date(post.Date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
            return (
              <Link
                key={post.PK}
                href={'/blog/' + slug}
                style={{ textDecoration: 'none' }}
              >
                <article
                  className="blog-card-interactive"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border:          '1px solid var(--border)',
                    borderRadius:    '12px',
                    overflow:        'hidden',
                  }}
                >
                  {post.CoverImage && (
                    <div
                      style={{
                        position: 'relative',
                        width:    '100%',
                        aspectRatio: '16 / 9',
                      }}
                    >
                      <Image
                        src={post.CoverImage}
                        alt={post.Title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        priority
                        
                      />
                    </div>
                  )}

                  <div style={{ padding: '24px' }}>
                    <p
                      style={{
                        fontSize:     '12px',
                        fontWeight:   '600',
                        color:        'var(--text-2)',
                        marginBottom: '8px',
                      }}
                    >
                      {formattedDate}{post.ReadTime ? ' · ' + post.ReadTime : ''} · Affan
                    </p>
                    <h2
                      style={{
                        fontSize:      '18px',
                        fontWeight:    '700',
                        color:         'var(--text-1)',
                        marginBottom:  '8px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {post.Title}
                    </h2>
                    <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: '1.7' }}>
                      {post.Summary}
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--accent)', marginTop: '14px', fontWeight: '500' }}>
                      Read more →
                    </p>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}