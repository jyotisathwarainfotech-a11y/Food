
"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { ChefHat, UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Perfect Grilling: Tips from Our Master Chef',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat.',
    date: '2024-01-15',
    author: 'Chef Marcus Johnson',
    category: 'Cooking Tips',
    image: '/images/blog1.jpg',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Seasonal Ingredients: Why They Matter for Your Health',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat.',
    date: '2024-01-12',
    author: 'Chef Maria Rodriguez',
    category: 'Health & Nutrition',
    image: '/images/blog2.webp',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Behind the Scenes: A Day in Our Kitchen',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat.',
    date: '2024-01-10',
    author: 'Sarah Johnson',
    category: 'Behind the Scenes',
    image: '/images/blog3.jpg',
    readTime: '4 min read'
  },
  {
    id: 4,
    title: 'Wine Pairing Guide: Matching the Perfect Wine with Your Meal',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat.',
    date: '2024-01-08',
    author: 'Chef James Wilson',
    category: 'Food & Wine',
    image: '/images/blog4.webp',
    readTime: '6 min read'
  },
  {
    id: 5,
    title: 'Holiday Menu Planning: Creating Memorable Family Dinners',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat.',
    date: '2024-01-05',
    author: 'Chef Sophia Chen',
    category: 'Holiday Specials',
    image: '/images/blog1.jpg',
    readTime: '8 min read'
  },
  {
    id: 6,
    title: 'Sustainable Dining: Our Commitment to Environmental Responsibility',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat.',
    date: '2024-01-03',
    author: 'FoodDelight Team',
    category: 'Sustainability',
    image: '/images/blog3.jpg',
    readTime: '5 min read'
  }
];

const categories = [
  'All Posts',
  'Cooking Tips',
  'Health & Nutrition',
  'Behind the Scenes',
  'Food & Wine',
  'Holiday Specials',
  'Sustainability'
];

export default function BlogPage() {
  const [active, setActive] = useState(categories[0]);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-secondary/20 blur-[160px] rounded-full top-[-150px] left-[-150px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-secondary/10 blur-[140px] rounded-full bottom-[-150px] right-[-150px] animate-pulse" />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -40, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-24 left-16 text-secondary opacity-20"
      >
        <ChefHat size={90} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-24 right-16 text-secondary opacity-20"
      >
        <UtensilsCrossed size={90} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-6 py-2 rounded-full font-semibold mb-6 border border-secondary text-secondary bg-secondary/10 backdrop-blur-lg"
        >
          FOOD BLOG
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight text-white"
        >
          Discover The
          <span className="block text-secondary">
            Taste Stories
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat.
        </motion.p>

      

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-primary to-transparent" />

    </section>

      {/* Category Filter */}
    {/* <section className="py-8 bg-primary sticky top-16 z-40 border-b border-secondary/20 backdrop-blur-lg">

    
      <div className="absolute top-0 left-0 w-full h-[2px] bg-secondary/60" />

      <div className="container mx-auto px-4">

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`
                relative px-7 py-3 rounded-full font-semibold
                transition-all duration-300
                border backdrop-blur-md

                ${
                  active === category
                    ? "bg-secondary text-primary border-secondary shadow-[0_0_20px_rgba(212,161,85,0.4)] scale-105"
                    : "bg-white/5 text-gray-300 border-white/10 hover:border-secondary hover:text-secondary hover:bg-white/10 hover:scale-105"
                }
              `}
            >
              {category}

            
              {active === category && (
                <span className="absolute inset-0 rounded-full border border-secondary animate-pulse opacity-60" />
              )}
            </button>
          ))}

        </div>
      </div>
    </section> */}

      {/* Blog Posts Grid */}
   <section className="py-12 bg-[var(--primary)]">
      <div className="container mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-4 py-1 text-xs rounded-full bg-[var(--secondary)] text-white font-semibold shadow-lg">
                  {post.category}
                </span>

                {/* Read Time */}
                <span className="absolute top-4 right-4 text-xs bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[var(--primary)] font-medium">
                  {post.readTime}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-7">

                {/* Date + Author */}
                <div className="text-sm text-gray-500 mb-3 flex items-center gap-2">
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  •
                  <span className="font-medium text-[var(--secondary)]">
                    {post.author}
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="text-xl font-bold text-[var(--primary)] mb-3 group-hover:text-[var(--secondary)] transition">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>

                {/* EXCERPT */}
                <p className="text-gray-600 mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

              
              </div>

              {/* Hover Glow Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[var(--secondary)] transition" />
            </motion.article>
          ))}

        </div>

      

      </div>
    </section>
      {/* Newsletter Section */}
   <section className="py-16 md:py-20 bg-[var(--primary)] relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 flex justify-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl"
        >

          {/* GLASS CARD */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 text-center shadow-2xl">

            {/* Icon */}
            <div className="flex justify-center mb-5 md:mb-6">
              <div className="p-3 md:p-4 rounded-full bg-[var(--secondary)] text-white shadow-lg">
                <Mail size={24} className="md:w-7 md:h-7" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Stay Updated With Delicious News
            </h2>

            <p className="text-gray-300 mb-6 md:mb-8 text-sm sm:text-base">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>

            {/* Input Area */}
          {/* Input Area */}
<div className="bg-white/10 border border-white/20 rounded-full p-2 backdrop-blur-xl flex items-center gap-2">

  <input
    type="email"
    placeholder="Enter your email"
    className="flex-1 bg-transparent px-5 py-3 text-white placeholder-gray-300 outline-none text-sm"
  />

  <motion.button
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--secondary)] text-white font-semibold shadow-lg whitespace-nowrap"
  >
    Subscribe
    <Send size={16} />
  </motion.button>

</div>


          </div>

        </motion.div>

      </div>
    </section>
    </div>
  );
}