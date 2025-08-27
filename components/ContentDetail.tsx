import { Content, isMovie, isTVShow } from '@/types'

interface ContentDetailProps {
  content: Content
}

export default function ContentDetail({ content }: ContentDetailProps) {
  const poster = content.metadata?.poster
  const title = content.metadata?.title || content.title
  const description = content.metadata?.description || ''
  const genre = content.metadata?.genre
  const releaseYear = content.metadata?.release_year
  const rating = content.metadata?.rating?.value

  // Get type-specific information
  const typeInfo = isMovie(content) 
    ? {
        duration: content.metadata?.duration,
        type: 'Movie'
      }
    : isTVShow(content)
      ? {
          seasons: content.metadata?.seasons,
          status: content.metadata?.status?.value,
          type: 'TV Show'
        }
      : { type: 'Content' }

  // Generate properly formatted imgix URL for hero image
  const getHeroImageUrl = () => {
    if (!poster?.imgix_url) return null
    
    const baseUrl = poster.imgix_url
    const params = new URLSearchParams({
      w: '1920',
      h: '1080',
      fit: 'crop',
      auto: 'format,compress',
      q: '85'
    })
    
    const separator = baseUrl.includes('?') ? '&' : '?'
    return `${baseUrl}${separator}${params.toString()}`
  }

  const heroImageUrl = getHeroImageUrl()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {heroImageUrl ? (
          <div className="absolute inset-0">
            <img
              src={heroImageUrl}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Hide image on error and show gradient background
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute inset-0 hero-gradient" />
          </div>
        ) : (
          /* Fallback gradient background when no poster */
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-red to-black opacity-80" />
        )}

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="mb-4">
                <span className="text-netflix-light-gray text-sm">
                  {typeInfo.type}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow">
                {title}
              </h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-white">
                {releaseYear && (
                  <span className="text-lg font-medium">{releaseYear}</span>
                )}
                
                {rating && (
                  <span className="px-3 py-1 bg-white bg-opacity-20 rounded font-medium">
                    {rating}
                  </span>
                )}

                {isMovie(content) && typeInfo.duration && (
                  <span className="text-lg">{typeInfo.duration} minutes</span>
                )}

                {isTVShow(content) && typeInfo.seasons && (
                  <span className="text-lg">
                    {typeInfo.seasons} Season{typeInfo.seasons === 1 ? '' : 's'}
                  </span>
                )}

                {isTVShow(content) && typeInfo.status && (
                  <span className="px-3 py-1 bg-netflix-red rounded font-medium">
                    {typeInfo.status}
                  </span>
                )}

                {genre && (
                  <span className="text-lg text-netflix-light-gray">
                    {genre.metadata?.name || genre.title}
                  </span>
                )}
              </div>

              {/* Description */}
              {description && (
                <p className="text-lg md:text-xl text-white leading-relaxed mb-8 max-w-3xl text-shadow">
                  {description}
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center space-x-2 bg-white text-black font-semibold px-8 py-3 rounded hover:bg-gray-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span>Play</span>
                </button>

                <button className="flex items-center space-x-2 bg-gray-600 bg-opacity-60 text-white font-semibold px-8 py-3 rounded hover:bg-opacity-80 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>My List</span>
                </button>

                <button className="flex items-center space-x-2 bg-gray-600 bg-opacity-60 text-white font-semibold px-8 py-3 rounded hover:bg-opacity-80 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  )
}