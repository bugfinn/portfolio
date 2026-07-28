export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto py-8"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div
        className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row
                   items-center justify-between gap-3 text-sm"
        style={{ color: 'var(--text-3)' }}
      >
        <p>
          Built by{' '}
          <span className="font-semibold" style={{ color: 'var(--accent)' }}>
            Affan
          </span>{' '}
          · Next.js + AWS · {year}
        </p>

        <nav className="flex items-center gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            style={{ color: 'var(--text-3)' }}
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            style={{ color: 'var(--text-3)' }}
          >
            LinkedIn
          </a>

          <a
            href="mailto:you@email.com"
            className="hover:opacity-75 transition-opacity"
            style={{ color: 'var(--text-3)' }}
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
