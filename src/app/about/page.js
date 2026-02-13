'use client'

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BadgeDollarSign, StarIcon, Truck, UtensilsCrossed } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: "Chef Maria Rodriguez",
    role: "Founder & Head Chef",
    img: "/images/chef5.jpg",
    desc: "With over 20 years of experience, Maria brings her family's culinary traditions to every dish."
  },
  {
    id: 2,
    name: "Chef James Wilson",
    role: "Sous Chef",
    img: "/images/chef6.jpg",
    desc: "James specializes in modern fusion cuisine and manages our innovative seasonal menu."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Restaurant Manager",
    img: "/images/chef7.jpg",
    desc: "Sarah ensures every guest has an exceptional experience from reservation to farewell."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/img3.jpg"   
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* LEFT - Burger Image */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ 
            x: 0,
            opacity: 1,
            rotate: [0, -5, 5, -5, 0] 
          }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut"
          }}
          className="mb-10 md:mb-0"
        >
          <Image
            src="/images/cartoon2.png"
            alt="Burger"
            width={320}
            height={320}
            className="drop-shadow-2xl"
          />
        </motion.div>



        {/* RIGHT - Text */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-center md:text-left max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Our <span className="text-secondary italic">Story</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 mb-8">
          Discover the passion, tradition, and dedication behind our delicious journey. 
          We bring authentic taste crafted with love and fresh ingredients.
        </p>

          <div className="flex justify-start gap-4 flex-wrap">
          <button className="px-6 py-3 bg-secondary hover:bg-secondary/90 rounded-full font-semibold transition duration-300 shadow-lg">
            Explore Menu
          </button>

          <button className="px-6 py-3 border border-white hover:bg-primary hover:text-white rounded-full font-semibold transition duration-300">
            Contact Us
          </button>
        </div>
        </motion.div>

      </div>
    </section>

      {/* About Content */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary font-semibold tracking-widest uppercase mb-4">
              Our Story
            </p>

            <h2 className="text-5xl font-extrabold text-white leading-tight mb-6">
              We Provide Best Quality <br />
              Food For Your Health
            </h2>

            <p className="text-secondary leading-relaxed mb-8">
              Welcome to our restaurant, where culinary excellence meets warm
              hospitality in every dish we serve. Our passion for food and
              dedication to quality ingredients ensures every bite is
              unforgettable.
            </p>

            <button className="bg-secondary hover:bg-secondary/90 rounded-md text-white px-8 py-3 font-semibold transition-all duration-300">
              Learn More Us →
            </button>

            {/* STATS */}
            <div className="flex gap-16 mt-14">
              <div>
                <h3 className="text-4xl font-bold text-secondary">34K+</h3>
                <p className="text-white mt-2">Organic Planting</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-secondary">356+</h3>
                <p className="text-white mt-2">Passionate Chef’s</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-secondary">8534+</h3>
                <p className="text-white mt-2">Favourite Dishes</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE DESIGN */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-orange-200 rounded-full blur-3xl opacity-30"></div>

            {/* Main Layout Wrapper */}
            <div className="relative w-[520px] h-[520px]">

              {/* LEFT LARGE IMAGE */}
              <div className="absolute left-0 top-10 w-[220px] h-[320px] rounded-3xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="/images/img3.jpg"
                  alt="Chef"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TOP RIGHT SMALL IMAGE */}
              <div className="absolute right-0 top-0 w-[220px] h-[260px] rounded-3xl overflow-hidden shadow-xl z-20 border-4 border-white">
                <Image
                  src="/images/img2.jpg"
                  alt="Chef"
                  fill
                  className="object-cover"
                />
              </div>

              {/* BOTTOM RIGHT SMALL IMAGE (3rd Image) */}
              <div className="absolute right-0 bottom-0 w-[240px] h-[260px] rounded-3xl overflow-hidden shadow-xl z-20 border-4 border-white">
                <Image
                  src="/images/img1.jpg"
                  alt="Restaurant"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-40 bg-yellow-500 w-32 h-32 rounded-full 
                              flex items-center justify-center shadow-2xl border-8 border-white z-30">
                <div className="text-center">
                  <p className="text-black font-bold text-sm">Quality Food</p>
                  <p className="text-black text-xs">Since 2010</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Values Section */}
     <section
      className="relative py-28 bg-fixed bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/images/sell1.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/10 z-0"></div>

      <div className="relative container mx-auto px-6 z-20">
        {/* Top Small Heading */}
        <div className="text-center mb-6">
          <p className="text-primary font-semibold tracking-widest uppercase">
            Popular Food Category
          </p>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            WE PROVIDE AMAZING & QUALITY <br />
            FOOD FOR YOUR GOOD HEALTH
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Best Quality Food",
              desc: "Sed ut perspiciatis unde omnis este natus sit voluptatem",
              icon: <UtensilsCrossed size={40} />,
            },
            {
              title: "Fast Food Delivery",
              desc: "Sed ut perspiciatis unde omnis este natus sit voluptatem",
              icon: <Truck size={40} />,
            },
            {
              title: "Money Back Guarantee",
              desc: "Sed ut perspiciatis unde omnis este natus sit voluptatem",
              icon: <BadgeDollarSign size={40} />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center group"
            >

              {/* 🔥 Hotdog Image Only On Last Card */}
              {i === 2 && (
                <motion.div
                  initial={{ rotate: 25 }}
                  whileHover={{ rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute -top-24 -right-24 z-40 scale-110"
                >
                  <Image
                    src="/images/cartoon5.png"
                    alt="Cartoon"
                    width={220}
                    height={220}
                    className="drop-shadow-2xl pointer-events-none"
                  />
                </motion.div>
              )}


              {/* Icon */}
              <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-primary">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Team Section */}
       <section className="py-20 bg-gradient-to-r from-primary to-secondary ">
      <div className=" mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Meet Our <span className="text-primary italic">Team</span>
          </h2>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-6 text-center hover:shadow-2xl transition duration-500"
            >

              {/* Image */}
              <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-4 border-secondary">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Social Icons Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-500">
                  <FaFacebook className="text-white cursor-pointer hover:text-orange-400" />
                  <FaInstagram className="text-white cursor-pointer hover:text-orange-400" />
                  <FaTwitter className="text-white cursor-pointer hover:text-orange-400" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-secondary font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-primary text-sm leading-relaxed">
                {member.desc}
              </p>

              {/* Decorative Gradient Border */}
              <div className="absolute inset-0 rounded-3xl border-6 border-transparent group-hover:border-secondary transition duration-500 pointer-events-none"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>

      {/* Call to Action */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/bg1.jpg" 
          alt="Restaurant Background"
          className="w-full h-full object-cover scale-110 animate-slowZoom"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Big Background Scrolling Text */}
      <div className="absolute whitespace-nowrap text-[120px] md:text-[180px] font-extrabold text-white/10 animate-scrollText">
        TASTE • EXPERIENCE • FLAVOR • TASTE • EXPERIENCE • FLAVOR •
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready To Experience Something Special?
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join us for dinner and taste the passion that has been our foundation
          for over a decade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/reservation"
            className="bg-secondary hover:bg-secondary/80 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Make Reservation
          </Link>

          <Link
            href="/menu"
            className="border-2 border-white hover:bg-secondary hover:text-white text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            View Our Menu
          </Link>
        </div>
      </motion.div>
    </section>
    </div>
  );
}