import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGooglePlay, FaAppStore } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary pt-12 relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pb-12 mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-extrabold text-secondary mb-6">food Zone</h2>
            <p className="text-white leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit involk up tate velit esse cillum dolore euint fugiat null pariatusrint occaecat sunt.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, index) => (
                <div key={index} className="w-10 h-8 bg-white rounded-full flex items-center justify-center text-primary cursor-pointer hover:bg-secondary hover:text-white transition">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Our Menus */}
          <div>
            <h4 className="text-xl font-bold text-secondary mb-2">Our Menus</h4>
            <div className="w-12 h-1 bg-white mb-6 opacity-30"></div>
            <ul className="space-y-3 text-white">
              {['Chicken Burger', 'Brief Pizza', 'Fresh Vegetable', 'Sea Foods', 'Desserts', 'Cold Drinks', 'Discount'].map((item) => (
                <li key={item} className="hover:text-primary cursor-pointer flex items-center gap-2 group">
                  <span className="text-primary opacity-0 group-hover:opacity-100">→</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-bold text-secondary mb-2">Useful Links</h4>
            <div className="w-12 h-1 bg-white mb-6 opacity-30"></div>
            <ul className="space-y-3 text-white">
              {['About Us', 'Restaurant', 'Our Chefs', 'Testimonials', 'Blogs', "FAQ's", 'Privacy Policy'].map((item) => (
                <li key={item} className="hover:text-primary cursor-pointer flex items-center gap-2 group">
                  <span className="text-primary opacity-0 group-hover:opacity-100">→</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-bold text-secondary mb-2">Contact Us</h4>
            <div className="w-12 h-1 bg-white mb-6 opacity-30"></div>
            <ul className="space-y-4 text-white">
              <li className="flex items-center gap-3">
                <div className="p-2 bg-secondary rounded-full text-white"><FaPhoneAlt size={14}/></div>
                <div>+44 (0) 9865 124 765 <br/> +44 (0) 0941 432 543</div>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-secondary rounded-full text-white"><FaEnvelope size={14}/></div>
                <div>www.yourdomain.com <br/> info@yourdomain.com</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-secondary rounded-full text-white mt-1"><FaMapMarkerAlt size={14}/></div>
                <div>11 Beaufort Court, Cana <br/> Wharf, Uk E108AL</div>
              </li>
            </ul>
          </div>

          {/* Newsletter / Subscribe Section */}
          <div>
            <h4 className="text-xl font-bold text-white mb-2">
              Subscribe Newsletter
            </h4>
            <div className="w-12 h-1 bg-white mb-6 opacity-30"></div>

            <p className="text-white/80 mb-6">
              Get latest offers, discounts & food updates directly in your inbox.
            </p>

            <form className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-12 px-4 rounded-lg bg-white/10 border border-white/20 
                  text-white placeholder-white focus:outline-none 
                  focus:ring-2 focus:ring-secondary transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 bg-secondary hover:bg-secondary/80 
                text-white font-semibold rounded-lg 
                transition duration-300 shadow-lg"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary py-6 mt-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-white gap-4">
          <p>©2023. All rights reserved by <span className="text-secondary font-bold">food Zone</span></p>
        </div>
      </div>
    </footer>
  );
}