import { createBucketClient } from '@cosmicjs/sdk'
import { Movie, TVShow, Genre, CosmicResponse, Content } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get all movies with genre information
export async function getMovies(): Promise<Movie[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'movies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const movies = (response.objects as Movie[]).sort((a, b) => {
      const yearA = a.metadata?.release_year || 0;
      const yearB = b.metadata?.release_year || 0;
      return yearB - yearA; // Newest first
    });
    
    return movies;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch movies');
  }
}

// Get featured movies
export async function getFeaturedMovies(): Promise<Movie[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'movies',
        'metadata.featured': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Movie[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured movies');
  }
}

// Get all TV shows with genre information
export async function getTVShows(): Promise<TVShow[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'tv-shows' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const tvShows = (response.objects as TVShow[]).sort((a, b) => {
      const yearA = a.metadata?.release_year || 0;
      const yearB = b.metadata?.release_year || 0;
      return yearB - yearA; // Newest first
    });
    
    return tvShows;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch TV shows');
  }
}

// Get featured TV shows
export async function getFeaturedTVShows(): Promise<TVShow[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'tv-shows',
        'metadata.featured': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as TVShow[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured TV shows');
  }
}

// Get all genres
export async function getGenres(): Promise<Genre[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'genres' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Genre[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch genres');
  }
}

// Get movies by genre ID
export async function getMoviesByGenre(genreId: string): Promise<Movie[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'movies',
        'metadata.genre': genreId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Movie[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch movies by genre');
  }
}

// Get TV shows by genre ID
export async function getTVShowsByGenre(genreId: string): Promise<TVShow[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'tv-shows',
        'metadata.genre': genreId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as TVShow[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch TV shows by genre');
  }
}

// Get single movie by slug
export async function getMovieBySlug(slug: string): Promise<Movie | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'movies', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as Movie;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch movie');
  }
}

// Get single TV show by slug
export async function getTVShowBySlug(slug: string): Promise<TVShow | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'tv-shows', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as TVShow;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch TV show');
  }
}

// Get mixed featured content (movies and TV shows)
export async function getFeaturedContent(): Promise<Content[]> {
  try {
    const [featuredMovies, featuredTVShows] = await Promise.all([
      getFeaturedMovies(),
      getFeaturedTVShows()
    ]);
    
    // Combine and sort by release year
    const allFeatured: Content[] = [...featuredMovies, ...featuredTVShows];
    return allFeatured.sort((a, b) => {
      const yearA = a.metadata?.release_year || 0;
      const yearB = b.metadata?.release_year || 0;
      return yearB - yearA;
    });
  } catch (error) {
    console.error('Error fetching featured content:', error);
    return [];
  }
}