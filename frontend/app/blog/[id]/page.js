import Image from 'next/image'
import { getBlogPost } from '@/lib/api'
import { notFound }    from 'next/navigation'
import Link            from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeSlug       from 'rehype-slug'                    // add
import { extractHeadings } from '@/lib/extractHeadings'       // add
import TableOfContents  from '@/components/ui/TableOfContents' // add// <-- 1. Imported the parser

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params
  const id   = resolvedParams.id
  const post = await getBlogPost(id)

  if (!post) {
    notFound()
    
  }

  // 2. Format the date to match your blog list page
  const formattedDate = new Date(post.Date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
const headings = extractHeadings(post.Content)
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 80px' }}>

      {/* Back link */}
      <Link
        href="/blog"
        style={{
          display:        'inline-flex',
          alignItems:     'center',
          gap:            '6px',
          fontSize:       '16px',
          fontWeight:     '500',
          color:          'var(--text-2)',
          textDecoration: 'none',
          marginBottom:   '40px',
        }}
      >
        ← Back to Blog  
      </Link>
            {post.CoverImage && (
        <div
          style={{
            position:     'relative',
            width:        '100%',
            aspectRatio:  '16 / 9',
            borderRadius: '12px',
            overflow:     'hidden',
            marginBottom: '40px',
          }}
        >
          <Image
            src={post.CoverImage}
            alt={post.Title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}

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
          {/* Added the formatted date, read time, and author */}
          {formattedDate}{post.ReadTime ? ' · ' + post.ReadTime : ''} · Affan
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
          <TableOfContents headings={headings} />

      {/* Post content */}
      <div
        className="markdown-content"
        style={{
          fontSize:   '15px',
          color:      'var(--text-2)',
          lineHeight: '1.85',
        }}
      >
        <ReactMarkdown rehypePlugins={[rehypeSlug]}>{post.Content}</ReactMarkdown>
      </div>
    </div>
  )
}