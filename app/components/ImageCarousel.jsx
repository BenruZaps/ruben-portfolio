import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ImageCarousel({ images = [], title = "Project" }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [direction, setDirection] = useState(0)
  const [imageAspectRatio, setImageAspectRatio] = useState(null)

  const nextImage = () => {
    setDirection(1)
    setCurrentImage((prev) => (prev + 1) % images.length)
    setImageAspectRatio(null) // Reset aspect ratio for new image
  }

  const prevImage = () => {
    setDirection(-1)
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    setImageAspectRatio(null) // Reset aspect ratio for new image
  }

  const handleImageLoad = (e) => {
    const img = e.target
    const aspectRatio = img.naturalWidth / img.naturalHeight
    setImageAspectRatio(aspectRatio)
  }

  const getImageClasses = () => {
    if (imageAspectRatio === null) {
      // Default while loading
      return "w-full h-full object-contain transition-opacity duration-300"
    }
    
    // If image is very wide (landscape)
    if (imageAspectRatio > 1.5) {
      return "w-full h-auto max-h-full object-contain transition-opacity duration-300"
    }
    // If image is very tall (portrait)
    else if (imageAspectRatio < 0.8) {
      return "w-auto h-full max-w-full object-contain transition-opacity duration-300"
    }
    // If image is roughly square or moderate aspect ratio
    else {
      return "w-full h-full object-contain transition-opacity duration-300"
    }
  }

  // If no images, show placeholder
  if (!images || images.length === 0) {
    return (
      <div className="relative">
        <div className="relative overflow-hidden rounded-lg mb-4 h-64 md:h-96 bg-gray-800 flex items-center justify-center">
          <p className="text-gray-400">No images available</p>
        </div>
      </div>
    )
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-xl mb-6 h-64 md:h-96 bg-gray-900 shadow-2xl flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={images[currentImage] || "/placeholder.svg"}
            alt={`${title} screenshot ${currentImage + 1}`}
            className={getImageClasses()}
            onLoad={handleImageLoad}
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23065f46'/%3E%3Ctext x='400' y='250' text-anchor='middle' dy='.3em' fill='%2310b981' font-family='Arial, sans-serif' font-size='20'%3EImage not found%3C/text%3E%3C/svg%3E"
            }}
          />
          {/* Optional: Add a subtle vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 pointer-events-none"></div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-emerald-500/70 hover:bg-emerald-400/90 rounded-full transition-all duration-300 z-10 group shadow-lg hover:shadow-emerald-500/25"
              style={{ minWidth: '48px', minHeight: '48px' }}
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-emerald-500/70 hover:bg-emerald-400/90 rounded-full transition-all duration-300 z-10 group shadow-lg hover:shadow-emerald-500/25"
              style={{ minWidth: '48px', minHeight: '48px' }}
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 px-4 py-2 bg-emerald-500/80 backdrop-blur-sm rounded-full text-white text-sm font-medium z-10 shadow-lg">
            {currentImage + 1} / {images.length}
          </div>
        )}

        {/* Navigation Dots */}
        {images.length > 1 && images.length <= 10 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? "bg-emerald-400 scale-125 shadow-lg shadow-emerald-400/50" 
                    : "bg-emerald-200/60 hover:bg-emerald-300/80 hover:scale-110"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentImage 
                  ? "border-green-500 ring-2 ring-green-500/50" 
                  : "border-gray-600 hover:border-gray-400"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23374151'/%3E%3Ctext x='32' y='32' text-anchor='middle' dy='.3em' fill='%23ffffff' font-family='Arial, sans-serif' font-size='10'%3ENo Image%3C/text%3E%3C/svg%3E"
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Keyboard Navigation */}
      <div
        className="sr-only"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') prevImage()
          if (e.key === 'ArrowRight') nextImage()
        }}
      >
        Use arrow keys to navigate
      </div>
    </div>
  )
}