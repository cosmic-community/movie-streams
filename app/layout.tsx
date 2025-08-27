import type { Metadata } from 'next'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Netflix Clone - Unlimited Movies & TV Shows',
  description: 'Stream unlimited movies, TV shows and more with our Netflix-inspired platform. Discover new content across Action, Comedy, Sci-Fi, and Drama genres.',
  keywords: 'movies, tv shows, streaming, netflix, entertainment, action, comedy, sci-fi, drama',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className="bg-black text-white">
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}