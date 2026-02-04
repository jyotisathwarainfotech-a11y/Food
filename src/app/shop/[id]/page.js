'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const products = [
  {
    id: '1',
    name: 'Gourmet Gift Box',
    category: 'food',
    price: 89.99,
    originalPrice: 99.99,
    description: 'Curated selection of our signature dishes perfect for gifting. This premium gift box includes our most popular items carefully packaged to maintain freshness and quality.',
    longDescription: 'Our Gourmet Gift Box is the perfect way to share the FoodDelight experience with friends and family. Each box is carefully curated by our chefs and includes a selection of our most beloved dishes. The items are specially packaged to maintain their quality during transport, ensuring your recipients enjoy the same exceptional taste they would experience in our restaurant.',
    image: '/placeholder.jpg',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    discount: 10,
    features: [
      '6 signature dishes',
      'Fresh ingredients only',
      'Professional packaging',
      'Includes heating instructions',
      'Perfect for gifting'
    ],
    specifications: {
      'Box Size': '12" x 10" x 6"',
      'Weight': '4.5 lbs',
      'Serves': '4-6 people',
      'Shelf Life': '3 days when refrigerated'
    }
  },
  {
    id: '2',
    name: 'Signature Sauce Collection',
    category: 'food',
    price: 24.99,
    description: 'Set of 3 artisanal sauces made by our chefs using traditional recipes and premium ingredients.',
    longDescription: 'Experience the magic of our kitchen with this exclusive sauce collection. Each sauce is crafted using time-honored techniques and the finest ingredients sourced from local producers. These versatile sauces can transform any meal into a restaurant-quality experience.',
    image: '/placeholder.jpg',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    features: [
      '3 unique sauce varieties',
      'All-natural ingredients',
      'No preservatives',
      'Versatile for multiple dishes',
      'Chef-approved recipes'
    ],
    specifications: {
      'Set Includes': '3 bottles (8oz each)',
      'Ingredients': 'All natural, no preservatives',
      'Storage': 'Refrigerate after opening',
      'Shelf Life': '6 months unopened'
    }
  }
  // Add more products as needed
];

export default function ProductDetailPage({ params }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  const addToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', { product, quantity, selectedSize });
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/shop" className="hover:text-orange-600">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="sticky top-24">
                <div className="h-96 bg-gray-300 rounded-xl mb-4 relative">
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                      {product.discount}% OFF
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-4 gap-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-20 bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'}`} 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-orange-600">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.discount && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-bold">
                    Save ${product.originalPrice - product.price}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-8">{product.description}</p>

              {/* Size Selection (if applicable) */}
              {product.category === 'merchandise' && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Size</h3>
                  <div className="flex gap-3">
                    {['S', 'M', 'L', 'XL'].map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-lg font-medium transition ${
                          selectedSize === size
                            ? 'border-orange-600 bg-orange-600 text-white'
                            : 'border-gray-300 hover:border-orange-500'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Quantity</h3>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={addToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-4 px-6 rounded-lg font-bold text-lg transition duration-300 flex items-center justify-center gap-2 ${
                    product.inStock
                      ? 'bg-orange-600 hover:bg-orange-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                
                <button className="py-4 px-6 border-2 border-orange-600 text-orange-600 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition duration-300">
                  Buy Now
                </button>
              </div>

              {/* Features */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16 border-t border-gray-200 pt-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Product Details</h2>
              
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">{product.longDescription}</p>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}