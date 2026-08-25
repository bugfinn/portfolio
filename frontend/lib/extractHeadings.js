import GithubSlugger from 'github-slugger'

export function extractHeadings(markdown) {
  const slugger = new GithubSlugger()
  const headingRegex = /^(#{2,3})\s+(.*)$/gm
  const headings = []
  let match

  while ((match = headingRegex.exec(markdown)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2].trim(),
      slug: slugger.slug(match[2].trim()),
    })
  }

  return headings
}