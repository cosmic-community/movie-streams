'use client'

import { useState } from 'react'
import { Content, isMovie, isTVShow } from '@/types'

interface ContentCardProps {
  content: Content
}

export default function ContentCard({ content }: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const poster = content.metadata?.poster
  const title = content.metadata?.title || content.title
  const genre = content.metadata?.genre
  const releaseYear = content.metadata?.release_year
  const rating = content.metadata?.rating?.value

  // Get type-specific info
  const typeInfo = isMovie(content) 
    ? content.metadata?.duration ? `${content.metadata.duration}m` : 'Movie'
    : isTVShow(content) && content.metadata?.seasons
      ? `${content.metadata.seasons} Season${content.metadata.seasons === 1 ? '' : 's'}`
      : 'TV Show'

  const typeLabel = isMovie(content) ? 'Movie' : 'TV Show'

  // Generate properly formatted imgix URL
  const getPosterUrl = () => {
    if (!poster?.imgix_url) return null
    
    // Ensure the URL has proper optimization parameters
    const baseUrl = poster.imgix_url
    const params = new URLSearchParams({
      w: '400',
      h: '600',
      fit: 'crop',
      auto: 'format,compress',
      q: '85'
    })
    
    // Check if URL already has parameters
    const separator = baseUrl.includes('?') ? '&' : '?'
    return `${baseUrl}${separator}${params.toString()}`
  }

  const posterUrl = getPosterUrl()

  const handleImageLoad = () => {
    setImageLoaded(true)
    setImageError(false)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(false)
  }

  return (
    <div 
      className="relative w-48 md:w-56 card-hover cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Poster Image */}
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-netflix-dark-gray">
        {posterUrl && !imageError ? (
          <>
            <img
              src={posterUrl}
              alt={title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              width="400"
              height="600"
              loading="lazy"
            />
            
            {/* Loading State */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-netflix-dark-gray">
                <div className="w-8 h-8 border-2 border-netflix-red border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </>
        ) : (
          /* Fallback when no poster or image error */
          <div className="w-full h-full flex items-center justify-center bg-netflix-medium-gray">
            <div className="text-center text-netflix-light-gray p-4">
              <div className="text-4xl mb-2">
                {isMovie(content) ? '🎬' : '📺'}
              </div>
              <p className="text-sm font-medium">{typeLabel}</p>
              <p className="text-xs mt-1 opacity-75">{title}</p>
            </div>
          </div>
        )}

        {/* Overlay on Hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end p-4 transition-opacity duration-300">
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-sm leading-tight">
                {title}
              </h3>
              
              <div className="flex items-center space-x-2 text-xs text-netflix-light-gray">
                {releaseYear && <span>{releaseYear}</span>}
                {rating && (
                  <span className="px-1 py-0.5 bg-white bg-opacity-20 rounded text-white">
                    {rating}
                  </span>
                )}
              </div>
              
              {genre && (
                <p className="text-xs text-netflix-light-gray">
                  {genre.metadata?.name || genre.title}
                </p>
              )}
              
              <p className="text-xs text-netflix-light-gray">
                {typeInfo}
              </p>
            </div>
          </div>
        )}

        {/* Featured Badge */}
        {content.metadata?.featured && (
          <div className="absolute top-2 left-2">
            <span className="bg-netflix-red text-white text-xs font-bold px-2 py-1 rounded">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Quick Actions on Hover */}
      {isHovered && (
        <div className="absolute -bottom-2 left-2 right-2 flex justify-between items-center bg-netflix-dark-gray rounded-b-lg p-2 shadow-lg">
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
              <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
          
          <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
            <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}