// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Genre interface
export interface Genre extends CosmicObject {
  type: 'genres';
  metadata: {
    name?: string;
    description?: string;
  };
}

// Movie interface
export interface Movie extends CosmicObject {
  type: 'movies';
  metadata: {
    title?: string;
    description?: string;
    genre?: Genre;
    release_year?: number;
    duration?: number;
    rating?: {
      key: string;
      value: string;
    };
    poster?: {
      url: string;
      imgix_url: string;
    };
    featured?: boolean;
  };
}

// TV Show interface
export interface TVShow extends CosmicObject {
  type: 'tv-shows';
  metadata: {
    title?: string;
    description?: string;
    genre?: Genre;
    release_year?: number;
    seasons?: number;
    status?: {
      key: string;
      value: string;
    };
    rating?: {
      key: string;
      value: string;
    };
    poster?: {
      url: string;
      imgix_url: string;
    };
    featured?: boolean;
  };
}

// Content type union for mixed content handling
export type Content = Movie | TVShow;

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip?: number;
}

// Type guards for runtime validation
export function isMovie(content: Content): content is Movie {
  return content.type === 'movies';
}

export function isTVShow(content: Content): content is TVShow {
  return content.type === 'tv-shows';
}

export function isGenre(obj: CosmicObject): obj is Genre {
  return obj.type === 'genres';
}

// Utility types
export type ContentStatus = 'ongoing' | 'completed' | 'cancelled';
export type ContentRating = 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';