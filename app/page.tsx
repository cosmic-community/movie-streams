import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ContentSection from '@/components/ContentSection'
import Footer from '@/components/Footer'
import { 
  getFeaturedContent,
  getMovies, 
  getTVShows, 
  getGenres,
  getMoviesByGenre,
  getTVShowsByGenre
} from '@/lib/cosmic'

export default async function HomePage() {
  // Fetch all content in parallel for better performance
  const [
    featuredContent,
    allMovies,
    allTVShows,
    genres
  ] = await Promise.all([
    getFeaturedContent(),
    getMovies(),
    getTVShows(),
    getGenres()
  ]);

  // Get content by genre for organized sections
  const contentByGenre = await Promise.all(
    genres.map(async (genre) => {
      const [movies, tvShows] = await Promise.all([
        getMoviesByGenre(genre.id),
        getTVShowsByGenre(genre.id)
      ]);
      
      return {
        genre,
        content: [...movies, ...tvShows].sort((a, b) => {
          const yearA = a.metadata?.release_year || 0;
          const yearB = b.metadata?.release_year || 0;
          return yearB - yearA;
        })
      };
    })
  );

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {featuredContent.length > 0 && (
        <Hero content={featuredContent[0]} />
      )}
      
      <main className="relative z-10 bg-black">
        {/* Featured Content Section */}
        {featuredContent.length > 1 && (
          <ContentSection
            title="Featured"
            content={featuredContent.slice(1)}
          />
        )}
        
        {/* Movies Section */}
        {allMovies.length > 0 && (
          <ContentSection
            title="Movies"
            content={allMovies}
          />
        )}
        
        {/* TV Shows Section */}
        {allTVShows.length > 0 && (
          <ContentSection
            title="TV Shows"
            content={allTVShows}
          />
        )}
        
        {/* Genre Sections */}
        {contentByGenre.map(({ genre, content }) => {
          if (content.length === 0) return null;
          
          return (
            <ContentSection
              key={genre.id}
              title={genre.metadata?.name || genre.title}
              content={content}
            />
          );
        })}
      </main>
      
      <Footer />
    </div>
  )
}