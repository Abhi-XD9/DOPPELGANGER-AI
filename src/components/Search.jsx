// @ts-nocheck
import React, { useState } from 'react';
import { Upload, Search as SearchIcon, Image as ImageIcon } from 'lucide-react';

export default function Search() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Check file type and size
      const validTypes = ['image/jpeg', 'image/png', 'video/mp4'];
      if (!validTypes.includes(selectedFile.type) || selectedFile.size > 10 * 1024 * 1024) {
        alert('Please upload a valid image (PNG, JPG) or video (MP4) file under 10MB.');
        return;
      }
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    // Simulated API call
    setTimeout(() => {
      setLoading(false);
      // Handle success message or results here
      alert('File processed successfully!'); // Example success message
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Face Search</h1>
          <p className="mt-4 text-lg text-gray-500">
            Upload an image or video to find similar faces
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div className="w-full">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer text-center"
                >
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                />
                <div className="space-y-1 ">
                  <div className="flex justify-center">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="h-32 w-32 object-cover rounded-lg"
                      />
                    ) : (
                      <Upload className="h-12 w-12 text-gray-400" />
                    )}
                  </div>
                  <div className="text-gray-600">
                    <span>Upload a file</span>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, MP4 up to 10MB</p>
                </div>
              </label>
            </div>

            <button
              type="submit"
              disabled={!file || loading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                (!file || loading) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity -25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                <div className="flex items-center">
                  <SearchIcon className="mr-2 h-5 w-5" />
                  Search Faces
                </div>
              )}
            </button>
          </div>
        </form>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">How it works</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">1. Upload</h3>
              <p className="mt-2 text-gray-500">Upload your image or video file</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                <SearchIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">2. Process</h3>
              <p className="mt-2 text-gray-500">Our AI analyzes the faces</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                <ImageIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">3. Results</h3>
              <p className="mt-2 text-gray-500">Get similar face matches</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}