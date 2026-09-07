import { Analytics } from "@vercel/analytics/next"
import { Space_Grotesk, Public_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

// 1. Initialize Space Grotesk for Headings
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

// 2. Initialize Public Sans for Body Text
const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public',
  display: 'swap',
})

export const metadata = {
  title: 'Affan Naveed',
  description:
    'Personal portfolio of Affan — Cloud Infrastructure Engineer, AWS enthusiast, and frontend developer.',
}

// Runs before React hydrates — prevents flash of wrong theme on reload
const themeScript = `
  (function() {
    try {
      var t = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (t === 'dark' || (!t && prefersDark)) {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })()
`

// Handles modern UI toggle-on-tap behavior for interactive blog cards on mobile
const mobileCardScript = `
  (function() {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', function(event) {
        var clickedCard = event.target.closest('.blog-card-interactive');
        var cards = document.querySelectorAll('.blog-card-interactive');
        
        if (clickedCard) {
          cards.forEach(function(card) {
            if (card !== clickedCard) card.classList.remove('is-active');
          });
          clickedCard.classList.toggle('is-active');
        } else {
          cards.forEach(function(card) {
            card.classList.remove('is-active');
          });
        }
      });
    }
  })()
`

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${publicSans.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
         <script dangerouslySetInnerHTML={{ __html: mobileCardScript }} />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}