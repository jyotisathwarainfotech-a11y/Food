'use client';

import { useState } from 'react';
import Link from 'next/link';

const menuCategories = [
  { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
  { id: 'main-course', name: 'Main Course', icon: '🍽️' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'specials', name: 'Chef Specials', icon: '👨‍🍳' }
];

const menuItems = [
  {
    id: 1,
    name: 'Caesar Salad',
    category: 'appetizers',
    price: 12.99,
    description: 'Fresh romaine lettuce with parmesan cheese, croutons, and caesar dressing',
    image: '/placeholder.jpg'
  },
  {
    id: 2,
    name: 'Garlic Bread',
    category: 'appetizers',
    price: 8.99,
    description: 'Toasted bread with garlic butter and herbs',
    image: '/placeholder.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    category: 'main-course',
    price: 24.99,
    description: 'Fresh Atlantic salmon grilled with herbs and lemon',
    image: '/placeholder.jpg'
  },
  {
    id: 4,
    name: 'Beef Steak',
    category: 'main-course',
    price: 32.99,
    description: 'Premium ribeye steak cooked to your preference',
    image: '/placeholder.jpg'
  },
  {
    id: 5,
    name: 'Truffle Pasta',
    category: 'main-course',
    price: 18.99,
    description: 'Homemade pasta with black truffle sauce',
    image: '/placeholder.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Cake',
    category: 'desserts',
    price: 9.99,
    description: 'Rich chocolate cake with ganache frosting',
    image: '/placeholder.jpg'
  },
  {
    id: 7,
    name: 'Tiramisu',
    category: 'desserts',
    price: 11.99,
    description: 'Classic Italian dessert with coffee and mascarpone',
    image: '/placeholder.jpg'
  },
  {
    id: 8,
    name: 'Fresh Lemonade',
    category: 'beverages',
    price: 5.99,
    description: 'Freshly squeezed lemonade with mint',
    image: '/placeholder.jpg'
  },
  {
    id: 9,
    name: 'House Wine',
    category: 'beverages',
    price: 14.99,
    description: 'Selection of premium red and white wines',
    image: '/placeholder.jpg'
  },
  {
    id: 10,
    name: 'Lobster Thermidor',
    category: 'specials',
    price: 45.99,
    description: 'Fresh lobster in creamy cognac sauce',
    image: '/placeholder.jpg'
  }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [cartItems, setCartItems] = useState([]);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden menu-item">
              <div className="h-48 bg-gray-300 relative">
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ${item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Today's Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Happy Hour</h3>
              <p>50% off beverages 3-6 PM</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Family Deal</h3>
              <p>4 courses for 4 people - $89</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Weekend Brunch</h3>
              <p>Bottomless mimosas - $15</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            href="/reservation" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 mr-4"
          >
            Make Reservation
          </Link>
          <Link 
            href="/cart" 
            className="inline-block bg-white hover:bg-gray-100 text-orange-600 border-2 border-orange-600 font-bold py-4 px-8 rounded-full text-lg transition duration-300"
          >
            View Cart ({cartItems.length})
          </Link>
        </div>
      </div>
    </div>
  );
}