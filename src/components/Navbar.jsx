import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav id='navbar' className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Search className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl">DOPPELGANGER AI</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="text-gray-700 hover:text-blue-600 transition">
              Try Now
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition">
              Pricing
            </Link>
            <a 
                  href="https://play.google.com/store/apps/details?id=com.facesearch.app"
                  target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition">
              Download App
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/search"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Try Now
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Pricing
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=ai.facesearch"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Download App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;