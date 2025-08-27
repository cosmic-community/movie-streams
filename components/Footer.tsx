export default function Footer() {
  return (
    <footer className="bg-black py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-netflix-light-gray hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-netflix-light-gray hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" className="text-netflix-light-gray hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.89 2.745.09.109.105.209.402.849-.402.402-.899.768-.899 1.729 0 1.729 1.729 1.729 1.729 0 0-.899-.899-1.638-.899-2.745 0-2.745 2.058-4.869 5.409-4.869 2.945 0 5.008 2.008 5.008 4.869 0 3.242-1.64 5.487-3.768 5.487-1.175 0-2.06-.972-1.775-2.165.332-1.425.992-3.963.992-3.992 0-.919-.494-1.688-1.518-1.688-1.201 0-2.168 1.248-2.168 2.911 0 1.061.359 1.781.359 1.781s-1.187 5.02-1.406 5.957c-.24 1.036-.146 2.49-.041 3.439C8.859 21.404 12.017 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
            <a href="#" className="text-netflix-light-gray hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="space-y-3">
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Investor Relations
              </a>
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Speed Test
              </a>
            </div>
            
            <div className="space-y-3">
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Jobs
              </a>
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Cookie Preferences
              </a>
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Legal Notices
              </a>
            </div>
            
            <div className="space-y-3">
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Account
              </a>
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Ways to Watch
              </a>
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Corporate Information
              </a>
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Only on Netflix
              </a>
            </div>
            
            <div className="space-y-3">
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Media Center
              </a>
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="block text-sm text-netflix-light-gray hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Service Code */}
          <button className="border border-netflix-light-gray text-netflix-light-gray px-4 py-2 mb-6 hover:border-white hover:text-white transition-colors">
            Service Code
          </button>

          {/* Copyright */}
          <p className="text-sm text-netflix-light-gray">
            © 2024 Netflix Clone. Built with Cosmic CMS.
          </p>
        </div>
      </div>
    </footer>
  )
}