'use client'

import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from 'lucide-react';


const chefData = [
  {
    id: 1,
    name: 'Chef Maria Rodriguez',
    position: 'Founder & Head Chef',
    experience: '20+ years',
    specialty: 'Mediterranean Cuisine',
    bio: 'Maria brings her family\'s culinary traditions from Spain, combining traditional techniques with modern innovation.',
    image: '/images/chef1.png',
    awards: ['James Beard Award 2018', 'Top Chef 2019', 'Culinary Excellence 2020']
  },
  {
    id: 2,
    name: 'Chef James Wilson',
    position: 'Sous Chef',
    experience: '15 years',
    specialty: 'Modern Fusion',
    bio: 'James specializes in creating innovative dishes that blend international flavors with local ingredients.',
    image: '/images/chef2.png',
    awards: ['Rising Star Chef 2021', 'Innovation Award 2022']
  },
  {
    id: 3,
    name: 'Chef Sophia Chen',
    position: 'Pastry Chef',
    experience: '12 years',
    specialty: 'Artisan Desserts',
    bio: 'Sophia creates stunning desserts that are as beautiful as they are delicious, with expertise in French pastry techniques.',
    image: '/images/chef3.png',
    awards: ['Best Pastry Chef 2020', 'Dessert Innovation 2021']
  },
  {
    id: 4,
    name: 'Chef Marcus Johnson',
    position: 'Grill Master',
    experience: '18 years',
    specialty: 'Grilled Specialties',
    bio: 'Marcus perfects the art of grilling, bringing out incredible flavors in meats and vegetables with his signature techniques.',
    image: '/images/chef4.png',
    awards: ['Best Grill Chef 2019', 'BBQ Master 2020']
  }
];

const images = [
    "/images/roll1.webp",
    "/images/roll2.jpg",
    "/images/home2.jpg",
    "/images/home3.jpg",
    "/images/img2.jpg",
    "/images/home2.jpg",
  ];

export default function ChefsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center relative z-20">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Experience Culinary Art <br />
            With Our <span className="text-secondary">Master Chef</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-lg">
            Discover unforgettable flavors crafted with passion, precision,
            and premium ingredients. Every dish tells a story.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              href="/menu" 
              className="bg-secondary hover:bg-secondary/80 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Explore Menu
            </Link>
            <button className="px-8 py-3 border border-secondary text-secondary rounded-full hover:bg-secondary hover:text-black transition duration-300">
              Book a Table
            </button>
          </div>
        </motion.div>

        {/* Right Chef Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative mt-12 lg:mt-0 flex justify-center"
        >
          <div className="relative w-[300px] sm:w-[400px] lg:w-[500px] h-[400px] lg:h-[600px]">
            <Image
              src="/images/makefood.jpg"
              alt="Master Chef"
              fill
              className="object-contain drop-shadow-[0_20px_40px_#d4a155] rounded-t-full"
              priority
            />
          </div>
        </motion.div>
      </div>
      </section>

      {/* Chefs Grid */}
      <section className="py-24 bg-primary overflow-hidden">
        <div className="container mx-auto px-4">
          
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase">
              Our <span className="text-secondary">Master</span> Chefs
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {chefData.map((chef, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* The "Unique" Arch Card */}
                <div className="relative">
                  {/* Arch Background Shape */}
                  <div className="absolute inset-0 bg-[#e6c38e] rounded-t-full transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative z-10 overflow-hidden rounded-t-full border-[8px] border-white shadow-2xl">
                    <Image
                      src={chef.image}
                      alt={chef.name}
                      width={400}
                      height={500}
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                    
                    {/* Social Overlays */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors cursor-pointer"><Instagram size={20} /></div>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors cursor-pointer"><Twitter size={20} /></div>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors cursor-pointer"><Facebook size={20}/></div>
                    </div>
                  </div>
                </div>

                {/* Name Plate */}
                <div className="mt-8 text-center px-4">
                  {/* Chef Name */}
                  <h4 className="text-xl font-black text-white group-hover:text-secondary transition-colors uppercase tracking-tight">
                    {chef.name}
                  </h4>

                  {/* Position */}
                  <p className="text-sm font-semibold text-secondary uppercase tracking-widest mt-1">
                    {chef.position}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-[2px] bg-orange-500 mx-auto my-3 rounded-full"></div>  
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <section className="bg-primary overflow-hidden">
        <div className="relative w-full">

          <div className="flex w-max animate-scroll gap-2">
            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="w-[300px] h-[200px] flex-shrink-0 rounded-xl overflow-hidden"
              >
                <Image
                  src={img}
                  alt="food"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-28 bg-primary overflow-hidden">

      <div className="relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
          
          {/* LEFT IMAGE - Walking Animation */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ 
              opacity: 1, 
              x: [-150, 0], 
            }}
            animate={{
              y: [0, -15, 0], 
              rotate: [-2, 2, -2], 
            }}
            transition={{ 
              x: { duration: 1, ease: "easeOut" },
              y: { repeat: Infinity, duration: 0.6, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 0.6, ease: "easeInOut" }
            }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-72 h-72">
              <Image
                src="/images/cartoon1.png"
                alt="Walking Taco Character"
                fill
                className="object-contain" 
                priority
              />
            </div>
          </motion.div>

          {/* CENTER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-[600px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 text-center shadow-2xl z-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Experience Culinary Excellence
            </h2>

            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Taste the artistry and passion of our chefs in every dish. 
              A perfect blend of tradition, creativity, and flavor.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/menu"
                className="px-10 py-4 rounded-full bg-secondary text-white font-bold text-lg hover:bg-secondary/80 hover:scale-105 transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              >
                View Our Menu
              </Link>

              <Link
                href="/reservation"
                className="px-10 py-4 rounded-full border-2 border-white/30 text-white font-bold text-lg hover:bg-secondary hover:text-primary hover:scale-105 transition-all"
              >
                Make Reservation
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE - Walking Animation */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ 
              opacity: 1, 
              x: [150, 0], 
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [2, -2, 2],
            }}
            transition={{ 
              x: { duration: 1, ease: "easeOut" },
              y: { repeat: Infinity, duration: 0.5, ease: "easeInOut", delay: 0.1 }, // Offset delay for natural feel
              rotate: { repeat: Infinity, duration: 0.5, ease: "easeInOut", delay: 0.1 }
            }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-72 h-72">
              <Image
                src="/images/cartoon6.png"
                alt="Walking Fries Character"
                fill
                className="object-contain" // Prevents cutting
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    </div>
  );
}