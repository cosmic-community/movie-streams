import { Content, isMovie, isTVShow } from '@/types'

interface HeroProps {
  content: Content
}

export default function Hero({ content }: HeroProps) {
  const poster = content.metadata?.poster
  const title = content.metadata?.title || content.title
  const description = content.metadata?.description || ''
  const genre = content.metadata?.genre
  const releaseYear = content.metadata?.release_year
  const rating = content.metadata?.rating?.value

  // Get additional info based on content type
  const additionalInfo = isMovie(content) 
    ? content.metadata?.duration ? `${content.metadata.duration} min` : ''
    : isTVShow(content) && content.metadata?.seasons
      ? `${content.metadata.seasons} Season${content.metadata.seasons === 1 ? '' : 's'}`
      : ''

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      {poster && (
        <div className="absolute inset-0">
          <img
            src={`${poster.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl space-y-6">
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white text-shadow">
              {title}
            </h1>

            {/* Metadata */}
            <div className="flex items-center space-x-4 text-white text-shadow">
              {releaseYear && (
                <span className="text-lg">{releaseYear}</span>
              )}
              {rating && (
                <span className="px-2 py-1 bg-white bg-opacity-20 rounded text-sm font-medium">
                  {rating}
                </span>
              )}
              {additionalInfo && (
                <span className="text-lg">{additionalInfo}</span>
              )}
              {genre && (
                <span className="text-lg">{genre.metadata?.name || genre.title}</span>
              )}
            </div>

            {/* Description */}
            {description && (
              <p className="text-lg md:text-xl text-white text-shadow max-w-xl leading-relaxed">
                {description}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-white text-black font-semibold px-8 py-3 rounded hover:bg-gray-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>Play</span>
              </button>

              <button className="flex items-center space-x-2 bg-gray-600 bg-opacity-60 text-white font-semibold px-8 py-3 rounded hover:bg-opacity-80 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  )
}