// app/tv-shows/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getTVShowBySlug } from '@/lib/cosmic'
import Header from '@/components/Header'
import ContentDetail from '@/components/ContentDetail'
import Footer from '@/components/Footer'

interface TVShowPageProps {
  params: Promise<{ slug: string }>
}

export default async function TVShowPage({ params }: TVShowPageProps) {
  const { slug } = await params
  const tvShow = await getTVShowBySlug(slug)

  if (!tvShow) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <ContentDetail content={tvShow} />
      <Footer />
    </div>
  )
}