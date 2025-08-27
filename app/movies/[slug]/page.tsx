// app/movies/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getMovieBySlug } from '@/lib/cosmic'
import Header from '@/components/Header'
import ContentDetail from '@/components/ContentDetail'
import Footer from '@/components/Footer'

interface MoviePageProps {
  params: Promise<{ slug: string }>
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { slug } = await params
  const movie = await getMovieBySlug(slug)

  if (!movie) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <ContentDetail content={movie} />
      <Footer />
    </div>
  )
}