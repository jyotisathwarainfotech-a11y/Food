'use client';

import { useState } from 'react';
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from 'next/link';
import { useCart } from "../../context/CartContext";
import Image from "next/image";

import {  Heart } from "lucide-react";


const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'food', name: 'Food Items' },
  { id: 'beverages', name: 'Beverages' },
  { id: 'merchandise', name: 'Merchandise' },
  { id: 'gift-cards', name: 'Gift Cards' }
];

// const products = [

//   {
//     id: 6,
//     name: 'Gourmet Gift Box',
//     category: 'food',
//     price: 89.99,
//     originalPrice: 99.99,
//     description: 'Curated selection of our signature dishes perfect for gifting',
//     image: '/images/bg1.webp',
//     rating: 4.8,
//     reviews: 124,
//     inStock: true,
//     discount: 10
//   },
//   {
//     id: 7,
//     name: 'Signature Sauce Collection',
//     category: 'food',
//     price: 24.99,
//     description: 'Set of 3 artisanal sauces made by our chefs',
//     image: '/images/blog2.webp',
//     rating: 4.6,
//     reviews: 89,
//     inStock: true
//   },
//   {
//     id: 8,
//     name: 'House Blend Coffee',
//     category: 'beverages',
//     price: 18.99,
//     description: 'Premium coffee beans roasted specifically for our restaurant',
//     image: '/images/blog3.webp',
//     rating: 4.7,
//     reviews: 156,
//     inStock: true
//   },
//   {
//     id: 9,
//     name: 'FoodDelight T-Shirt',
//     category: 'merchandise',
//     price: 29.99,
//     description: 'Premium cotton t-shirt with our restaurant logo',
//     image: '/images/blog4.webp',
//     rating: 4.5,
//     reviews: 67,
//     inStock: true,
//     sizes: ['S', 'M', 'L', 'XL']
//   },
//   {
//     id: 10,
//     name: 'Chef\'s Cookbook',
//     category: 'merchandise',
//     price: 34.99,
//     description: 'Recipes and stories from our kitchen',
//     image: '/images/home2.webp',
//     rating: 4.9,
//     reviews: 203,
//     inStock: true
//   },
//   {
//     id: 11,
//     name: 'Wine Selection Pack',
//     category: 'beverages',
//     price: 129.99,
//     description: 'Curated selection of premium wines from local vineyards',
//     image: '/images/home3.webp',
//     rating: 4.8,
//     reviews: 78,
//     inStock: true

//   },
//   {
//     id: 12,
//     name: '$50 Gift Card',
//     category: 'gift-cards',
//     price: 50.00,
//     description: 'Perfect for any occasion',
//     image: '/images/img2.webp',
//     rating: 5.0,
//     reviews: 0,
//     inStock: true
//   },
//   {
//     id: 13,
//     name: 'Cooking Class Voucher',
//     category: 'merchandise',
//     price: 75.00,
//     description: 'Learn cooking techniques from our chefs',
//     image: '/images/img3.webp',
//     rating: 4.9,
//     reviews: 45,
//     inStock: true
//   }
// ];
const products = [
  { id: 1, name: "Burger Deluxe", image: "/images/sell1.webp", price: "$110.46" },
  { id: 2, name: "Fried Chicken", image: "/images/sell2.webp", price: "$60.50" },
  { id: 3, name: "Spicy Wings", image: "/images/sell3.webp", price: "$50.00" },
  { id: 4, name: "Italian Pizza", image: "/images/sell4.webp", price: "$80.00" },
  { id: 5, name: "Pasta Special", image: "/images/sell5.webp", price: "$95.00" },
   { id: 6, name: "Burger Deluxe", image: "/images/sell1.webp", price: "$110.46" },
  { id: 7, name: "Fried Chicken", image: "/images/sell2.webp", price: "$60.50" },
  { id: 8, name: "Spicy Wings", image: "/images/sell3.webp", price: "$50.00" },
 
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [cartItems, setCartItems] = useState([]);
  const { addToCart } = useCart();


  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);


   const handleAddToCart = (item) => {
    addToCart(item);
    console.log("Added to cart:", item);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[var(--primary)]">

      

      {/* Floating Icon */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 1 }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-16 left-16 hidden md:block text-[var(--secondary)]"
      >
        <ShoppingBag size={70} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-6 py-2 rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/40 text-[var(--secondary)] text-sm font-semibold tracking-widest uppercase backdrop-blur-md"
        >
          Our Online Store
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl text-background leading-tight"
        >
          FoodDelight <br />
          <span className="text-transparent bg-clip-text bg-[var(--secondary)]">
            Shop Experience
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat.
        </motion.p>


      </div>
    </section>


      {/* Products Grid */}
      <section className="py-16 md:py-12 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Heading */}
              <div className="relative mb-12 md:mb-16">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                    <span className="text-secondary">BEST SELLING</span>{" "}
                    <span className="text-white italic block sm:inline">
                      DISHES
                    </span>
                  </h2>

                  <p className="text-white/80 mt-4 md:mt-5 text-sm sm:text-base md:text-lg leading-relaxed px-2">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat.
                  </p>
                </div>
              </div>

              {/* GRID START */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">

                {products.map((item) => (
                  <div
                    key={item.id}
                    className="
                      bg-[#f5efe6] rounded-3xl p-5 md:p-6
                      relative group transition duration-500
                      hover:scale-105 hover:bg-white
                      hover:shadow-[8px_8px_0px_#d4a155]"
                  >

                    {/* Wishlist */}
                    <div className="absolute top-4 right-4 text-secondary">
                      <Heart size={18} />
                    </div>

                    {/* Image */}
                    <div className="flex justify-center mb-5 md:mb-6">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={180}
                        height={180}
                        className="object-contain transition duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Info */}
                    <h3 className="font-bold text-primary text-base md:text-lg mb-2">
                      {item.name}
                    </h3>

                    <p className="text-secondary font-bold text-base md:text-lg mb-6">
                      {item.price}
                    </p>

                    {/* Add To Cart */}
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full 
                      bg-secondary text-white py-2.5 md:py-3
                      rounded-xl
                      transition duration-300 
                      hover:bg-primary"
                    >
                      Add To Cart
                    </button>

                  </div>
                ))}

              </div>
              {/* GRID END */}

            </div>
      </section>


    </div>
  );
}