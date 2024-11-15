import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Search className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl">DOPPELGANGER AI</span>
            </div>
            <p className="mt-4 text-gray-500">
              Advanced AI-powered face search technology for images and videos.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/search" className="text-base text-gray-500 hover:text-gray-900">
                  Try Now
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-base text-gray-500 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Download
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.facesearch.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Google Play
                </a>
              </li>
              <li>
                <a 
                  href="https://apps.apple.com/us/app/face-search-ai-pimeyes/id6504996249"
                   target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  App Store
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-200 pt-6">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} DOPPELGANGER AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;