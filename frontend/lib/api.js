const POSTS_URL    = process.env.NEXT_PUBLIC_LAMBDA_BLOG_POSTS_URL
const POST_URL     = process.env.NEXT_PUBLIC_LAMBDA_BLOG_POST_URL
const CONTACT_URL  = process.env.NEXT_PUBLIC_LAMBDA_CONTACT_URL

export async function getBlogPosts() {
  if (!POSTS_URL) return []
  try {
    const res  = await fetch(POSTS_URL, { next: { revalidate: 60 } })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch (e) {
    console.error('getBlogPosts error:', e)
    return []
  }
}

export async function getBlogPost(id) {
  if (!POST_URL) return null
  try {
    const res = await fetch(POST_URL + '?id=' + id, { next: { revalidate: 60 } })
    if (!res.ok) return null
    return res.json()
  } catch (e) {
    console.error('getBlogPost error:', e)
    return null
  }
}

export async function postContact(name, email, message) {
  if (!CONTACT_URL) return { success: false }
  try {
    const res = await fetch(CONTACT_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ name, email, message }),
    })
    return res.json()
  } catch (e) {
    console.error('postContact error:', e)
    return { success: false }
  }
}