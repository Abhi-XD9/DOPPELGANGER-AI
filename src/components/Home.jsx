import React from 'react';
import { Search, Star, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import doppleImage from '../Images/AIDOPPLE.png'

function Home() {
  return (
    <div className="relative">
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-24 lg:mt-28 lg:px-8 xl:mt-32">
  <div className="sm:text-center lg:text-left">
    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      <span className="block">Find Faces in</span>
      <span className="block text-blue-600">Images & Videos</span>
    </h1>
    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
      Advanced AI-powered face search technology. Upload an image or video and find similar faces instantly.
    </p>
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
      <div className="rounded-md shadow">
        <Link
          to="/search"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
        >
          Try Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  </div>
</main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={doppleImage}
            alt="Face recognition"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Face Search AI?
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Search className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Advanced Search</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Powerful AI algorithms to find similar faces with high accuracy.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Star className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">5-Star Rated</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Trusted by users with excellent reviews on Play Store.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Download className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">1000+ Downloads</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Growing user base with successful face searches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;