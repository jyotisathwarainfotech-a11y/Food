'use client';

import React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Facebook, Globe, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Twitter } from 'lucide-react';



const infoItems = [
    { icon: <MapPin />, label: "Location", val: "123 Food Street, NY",  },
    { icon: <Phone />, label: "Phone", val: "(123) 456-7890" },
    { icon: <Mail />, label: "Email", val: "hello@food.com" },
    { icon: <Clock />, label: "Hours", val: "10AM - 10PM" },
  ];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 md:py-44 text-white">
        {/* 1. Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/home2.jpg" // Add your image path here
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-primary/30 via-primary/80 to-transparent"></div>
        </div>

        {/* 2. Animated Background Blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl z-10"
        />

        <div className="relative container mx-auto px-4 text-center z-20">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            Let's <span className="text-secondary">Connect</span> With Us
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl max-w-2xl mx-auto text-orange-50 font-medium"
          >
            We’d love to hear from you! Whether it's reservations, feedback, or
            special requests — our team is here to help.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
          >
            <button className="flex items-center justify-center gap-2 bg-secondary text-white font-bold px-10 py-4 rounded-full shadow-xl hover:bg-white hover:text-secondary hover:scale-105 transition-all duration-300">
              <Mail size={20} /> Send Message
            </button>

            <button className="flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-secondary hover:text-white transition-all duration-300">
              <Phone size={20} /> Call Us Now
            </button>
          </motion.div>
        </div>

        {/* 3. FIXED BOTTOM WAVE DESIGN */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-30">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-[80px] md:h-[120px]"
          >
            <defs>
              {/* Gradient for the Wave Fill */}
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="stop-primary" style={{ stopColor: 'var(--color-primary, #1d2527)' }} />
                <stop offset="100%" className="stop-secondary" style={{ stopColor: 'var(--color-secondary, #d4a155)' }} />
              </linearGradient>
            </defs>
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C41.27,24.64,136.25,50.32,230.16,60.16,270,64.33,310.23,60.11,321.39,56.44Z" 
              fill="url(#wave-gradient)"
            ></path>
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-secondary overflow-hidden text-white">
        
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* LEFT SIDE: Interactive Info Hub */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                LET'S START A <br />
                <span className="text-transparent bg-clip-text bg-secondary to-orange-600">
                  CONVERSATION
                </span>
              </h2>
              <p className="text-white-100 text-lg mb-12 max-w-md">
                Whether you have a question about our menu, catering, or just want to say hi, our team is ready to help.
              </p>
            </motion.div>

            {/* Floating Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {infoItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[32px] flex items-center gap-4 group"
                >
                  <div className={"bg-secondary p-3 rounded-2xl shadow-lg group-hover:rotate-12 transition-transform"}>
                    {React.cloneElement(item.icon, { size: 24, className: "text-white" })}
                  </div>
                  <div>
                    <p className="text-sm text-primary uppercase tracking-widest font-bold">{item.label}</p>
                    <p className="font-semibold text-gray-200">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: The Neon Glass Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden border border-white/20">
              
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="/images/img6.png"  
                  alt="Form Background"
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-xs"></div>
              </div>

              {/* Internal Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/20 blur-3xl rounded-full z-10" />

              {/* Form Content */}
              <form className="space-y-6 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white ml-2">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-gray-300 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-gray-300 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white ml-2">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us everything..." 
                    className="w-full bg-white/10 border border-white/20 rounded-3xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-gray-300 text-white resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_5px_30px_#1d2527] hover:shadow-secondary/50 transition-all"
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </div>
          </motion.div>


        </div>
      </div>
    </section>


    {/* FAQ CTA */}
    <section className="flex flex-col lg:flex-row w-full min-h-[600px] bg-white overflow-hidden">
      
      {/* LEFT SIDE: Content Card */}
      <div className="w-full lg:w-1/2 bg-secondary/20 p-8 md:p-16 flex items-center justify-center relative">
        
        {/* Decorative Floating Elements */}
        <motion.img 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          src="/images/pizza1.png" 
          className="absolute bottom-10 right-10 w-32 h-32 md:w-48 md:h-48 object-contain z-10"
          alt="Pizza"
        />
        <img 
          src="/images/pizza2.png" 
          className="absolute top-20 left-10 w-40 opacity-20 pointer-events-none" 
          alt="Decoration"
        />

        {/* The Inner Bordered Card */}
        <div className="relative border-2 border-white rounded-[40px] w-full h-full p-10 flex flex-col items-center justify-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-[1px] w-8 bg-orange-600"></span>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">
                Restaurant Location
              </span>
              <span className="h-[1px] w-8 bg-orange-600"></span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 uppercase tracking-tighter">
              Visit Our Restaurant
            </h2>

            <div className="space-y-6 text-primary font-medium">
              <p className="text-lg">
                213 W Tomichi Ave, Gunnison, CO <br />
                81220, United States
              </p>
              
              <div className="w-12 h-[2px] bg-secondary mx-auto"></div>

              <div className="space-y-1">
                <p>Monday - Saturday: 8:00pm - 10:00pm</p>
                <p className="text-secondary italic">Sunday: is the holyday</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center mt-10">
              {[
                { icon: <Facebook size={20} />, link: "#" },
                { icon: <Twitter size={20} />, link: "#" },
                { icon: <Linkedin size={20} />, link: "#" },
                { icon: <MessageCircle size={20} />, link: "#" }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE: Map */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto grayscale contrast-125">
        <iframe 
          title="Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2151327184225!2d-73.9878442240248!3d40.75798997138598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480293%3A0x5119f00646673c39!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>

    </div>
  );
}