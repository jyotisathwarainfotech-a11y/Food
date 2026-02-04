'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'food', name: 'Food Items' },
  { id: 'beverages', name: 'Beverages' },
  { id: 'merchandise', name: 'Merchandise' },
  { id: 'gift-cards', name: 'Gift Cards' }
];

const products = [
  {
    id: 1,
    name: 'Gourmet Gift Box',
    category: 'food',
    price: 89.99,
    originalPrice: 99.99,
    description: 'Curated selection of our signature dishes perfect for gifting',
    image: '/placeholder.jpg',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    discount: 10
  },
  {
    id: 2,
    name: 'Signature Sauce Collection',
    category: 'food',
    price: 24.99,
    description: 'Set of 3 artisanal sauces made by our chefs',
    image: '/placeholder.jpg',
    rating: 4.6,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: 'House Blend Coffee',
    category: 'beverages',
    price: 18.99,
    description: 'Premium coffee beans roasted specifically for our restaurant',
    image: '/placeholder.jpg',
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: 4,
    name: 'FoodDelight T-Shirt',
    category: 'merchandise',
    price: 29.99,
    description: 'Premium cotton t-shirt with our restaurant logo',
    image: '/placeholder.jpg',
    rating: 4.5,
    reviews: 67,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 5,
    name: 'Chef\'s Cookbook',
    category: 'merchandise',
    price: 34.99,
    description: 'Recipes and stories from our kitchen',
    image: '/placeholder.jpg',
    rating: 4.9,
    reviews: 203,
    inStock: true
  },
  {
    id: 6,
    name: 'Wine Selection Pack',
    category: 'beverages',
    price: 129.99,
    description: 'Curated selection of premium wines from local vineyards',
    image: '/placeholder.jpg',
    rating: 4.8,
    reviews: 78,
    inStock: false
  },
  {
    id: 7,
    name: '$50 Gift Card',
    category: 'gift-cards',
    price: 50.00,
    description: 'Perfect for any occasion',
    image: '/placeholder.jpg',
    rating: 5.0,
    reviews: 0,
    inStock: true
  },
  {
    id: 8,
    name: 'Cooking Class Voucher',
    category: 'merchandise',
    price: 75.00,
    description: 'Learn cooking techniques from our chefs',
    image: '/placeholder.jpg',
    rating: 4.9,
    reviews: 45,
    inStock: true
  }
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">FoodDelight Shop</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take a piece of our restaurant home with you
          </p>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="py-6 bg-white sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-3">
              <span className="text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden product-card">
                <div className="relative">
                  <div className="h-64 bg-gray-300"></div>
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.discount}% OFF
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="bg-white text-gray-800 px-4 py-2 rounded-full font-bold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'}`} 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-orange-600">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className={`w-full py-3 rounded-lg font-bold transition duration-300 ${
                      product.inStock
                        ? 'bg-orange-600 hover:bg-orange-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  
                  <Link 
                    href={`/shop/${product.id}`}
                    className="block text-center mt-3 text-orange-600 hover:text-orange-700 font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}

          {/* View Cart Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <Link 
              href="/cart"
              className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}