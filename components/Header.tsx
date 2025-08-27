'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black bg-opacity-90 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Netflix Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-netflix-red text-2xl font-bold tracking-wider">
            NETFLIX
          </h1>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-netflix-light-gray transition-colors">
              Home
            </a>
            <a href="#" className="text-white hover:text-netflix-light-gray transition-colors">
              TV Shows
            </a>
            <a href="#" className="text-white hover:text-netflix-light-gray transition-colors">
              Movies
            </a>
            <a href="#" className="text-white hover:text-netflix-light-gray transition-colors">
              New & Popular
            </a>
            <a href="#" className="text-white hover:text-netflix-light-gray transition-colors">
              My List
            </a>
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-white hover:text-netflix-light-gray transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Notifications */}
          <button className="text-white hover:text-netflix-light-gray transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button className="flex items-center space-x-2 text-white hover:text-netflix-light-gray transition-colors">
              <div className="w-8 h-8 bg-netflix-red rounded flex items-center justify-center">
                <span className="text-white text-sm font-semibold">U</span>
              </div>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}