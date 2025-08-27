# Netflix Clone

![Netflix Clone](https://imgix.cosmicjs.com/5dff98d0-82ec-11f0-8ece-89921cbea84a-photo-1440404653325-ab127d49abc1-1756261213433.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern Netflix-inspired streaming platform built with Next.js 15, featuring movies, TV shows, and genre-based content discovery with a cinematic user interface.

## Features

- 🎬 **Movies & TV Shows** - Browse comprehensive entertainment library
- 🏷️ **Genre Categories** - Filter content by Action, Comedy, Sci-Fi, Drama
- ⭐ **Featured Content** - Highlighted movies and shows in hero sections  
- 📱 **Responsive Design** - Optimized for all device sizes
- 🎨 **Netflix-Inspired UI** - Dark theme with signature red accents
- ⚡ **Fast Performance** - Built with Next.js 15 and optimized images
- 🔍 **Content Discovery** - Easy browsing with rich metadata display

<!-- CLONE_PROJECT_BUTTON -->

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a Netflix Clone"

### Code Generation Prompt

> Build a Netfilx Clone using Next.js

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS
- **Content Management:** Cosmic CMS
- **Language:** TypeScript
- **Runtime:** Bun
- **Deployment:** Vercel/Netlify ready

## Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account and bucket with content

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Movies
```typescript
// Get all movies with genre information
const movies = await cosmic.objects
  .find({ type: 'movies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);

// Get featured movies
const featuredMovies = await cosmic.objects
  .find({ 
    type: 'movies',
    'metadata.featured': true 
  })
  .depth(1);
```

### Fetching TV Shows
```typescript
// Get all TV shows
const tvShows = await cosmic.objects
  .find({ type: 'tv-shows' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);

// Get shows by status
const ongoingShows = await cosmic.objects
  .find({ 
    type: 'tv-shows',
    'metadata.status.key': 'ongoing'
  })
  .depth(1);
```

### Fetching by Genre
```typescript
// Get movies by genre ID
const actionMovies = await cosmic.objects
  .find({ 
    type: 'movies',
    'metadata.genre': 'genre-id-here'
  })
  .depth(1);
```

## Cosmic CMS Integration

This Netflix clone integrates with three main Cosmic object types:

### Movies
- Title, description, genre (connected to Genres)
- Release year, duration, rating
- Poster image, featured status

### TV Shows  
- Title, description, genre (connected to Genres)
- Release year, seasons, status (Ongoing/Completed/Cancelled)
- Rating, poster image, featured status

### Genres
- Name and description
- Used to categorize movies and TV shows

The app uses the Cosmic SDK to fetch content with proper relationships using the `depth` parameter to include connected genre information.

## Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on every push to main

### Netlify
1. Connect your repository to Netlify  
2. Add environment variables in site settings
3. Build command: `bun run build`
4. Publish directory: `.next`

Remember to add your Cosmic credentials as environment variables in your deployment platform.
