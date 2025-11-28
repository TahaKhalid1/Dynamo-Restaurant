import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Steak
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Bar
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Food
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Cocktail
    "https://images.unsplash.com/photo-1424847651672-bf202175b6d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Interior
    "https://images.unsplash.com/photo-1560611588-1fb3f4f4c971?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Seafood
    "https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Oysters
    "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Wine
    "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Plating
  ];

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Gallery</h1>
           <p className="text-gray-400 font-light tracking-wide">A glimpse into The Dynamo Room</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className="relative aspect-square group overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white tracking-[0.3em] uppercase text-xs border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-colors">View Full</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-brand-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;