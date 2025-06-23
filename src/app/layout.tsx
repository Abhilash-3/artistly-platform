import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artistly - Performing Artist Booking Platform',
  description: 'Connect event planners with talented performing artists. Browse, discover and book amazing performers for your events.',
  keywords: 'artists, booking, events, performers, entertainment, musicians, dancers, speakers',
  authors: [{ name: 'Artistly Team' }],
  openGraph: {
    title: 'Artistly - Performing Artist Booking Platform',
    description: 'Connect event planners with talented performing artists',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}
