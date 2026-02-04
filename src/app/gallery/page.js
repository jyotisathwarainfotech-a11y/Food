'use client';

import { useState } from 'react';

const galleryCategories = [
  { id: 'all', name: 'All Photos' },
  { id: 'dishes', name: 'Signature Dishes' },
  { id: 'restaurant', name: 'Restaurant' },
  { id: 'events', name: 'Events' },
  { id: 'behind-scenes', name: 'Behind the Scenes' }
];

const galleryImages = [
  {
    id: 1,
    category: 'dishes',
    title: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with herbs',
    image: '/placeholder.jpg'
  },
  {
    id: 2,
    category: 'dishes',
    title: 'Chocolate Cake',
    description: 'Decadent chocolate dessert',
    image: '/placeholder.jpg'
  },
  {
    id: 3,
    category: 'restaurant',
    title: 'Dining Area',
    description: 'Elegant dining atmosphere',
    image: '/placeholder.jpg'
  },
  {
    id: 4,
    category: 'dishes',
    title: 'Truffle Pasta',
    description: 'Homemade pasta with truffle',
    image: '/placeholder.jpg'
  },
  {
    id: 5,
    category: 'behind-scenes',
    title: 'Kitchen Prep',
    description: 'Our chefs at work',
    image: '/placeholder.jpg'
  },
  {
    id: 6,
    category: 'events',
    title: 'Private Event',
    description: 'Corporate dinner setup',
    image: '/placeholder.jpg'
  },
  {
    id: 7,
    category: 'dishes',
    title: 'Beef Steak',
    description: 'Premium ribeye steak',
    image: '/placeholder.jpg'
  },
  {
    id: 8,
    category: 'restaurant',
    title: 'Bar Area',
    description: 'Craft cocktails and beverages',
    image: '/placeholder.jpg'
  },
  {
    id: 9,
    category: 'dishes',
    title: 'Seafood Platter',
    description: 'Fresh seafood selection',
    image: '/placeholder.jpg'
  },
  {
    id: 10,
    category: 'events',
    title: 'Wedding Reception',
    description: 'Beautiful wedding setup',
    image: '/placeholder.jpg'
  },
  {
    id: 11,
    category: 'behind-scenes',
    title: 'Pastry Prep',
    description: 'Dessert creation process',
    image: '/placeholder.jpg'
  },
  {
    id: 12,
    category: 'restaurant',
    title: 'Outdoor Seating',
    description: 'Patio dining experience',
    image: '/placeholder.jpg'
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A visual journey through our culinary creations and beautiful spaces
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg gallery-item cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="h-80 bg-gray-300"></div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-6">
                  <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold mb-1">{image.title}</h3>
                    <p className="text-orange-200">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No images found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-gray-600">Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Dish Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Event Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-600">Behind Scenes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="h-96 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="flex gap-2">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition">
                      Download
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition">
                      Share
                    </button>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      className="p-2 hover:bg-gray-100 rounded-full transition"
                      onClick={() => {
                        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                        const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
                        setSelectedImage(filteredImages[prevIndex]);
                      }}
                    >
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      className="p-2 hover:bg-gray-100 rounded-full transition"
                      onClick={() => {
                        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                        const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
                        setSelectedImage(filteredImages[nextIndex]);
                      }}
                    >
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}