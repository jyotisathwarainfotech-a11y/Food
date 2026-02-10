import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary pt-20 relative">
      {/* Newsletter Section */}
      {/* <div className="container mx-auto px-4 absolute -top-24 left-0 right-0 z-10">
        <div className="bg-white border-[12px] border-orange-500 rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <div className="relative w-full md:w-1/3">
            <img 
              src="/path-to-your-image.jpg" 
              alt="Food" 
              className="rounded-lg object-cover h-48 w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-orange-500 text-white p-3 rounded-full cursor-pointer hover:scale-110 transition">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="flex items-center gap-2 text-orange-500 font-bold mb-2">
              <span>🍃</span> Newsletters <span>🍃</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Our Every Single Menu Notifications</h2>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-orange-500" defaultChecked /> Regular Updates
              </label>
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-orange-500" defaultChecked /> Weekly Updates
              </label>
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-orange-500" defaultChecked /> Monthly Updates
              </label>
            </div>

            <div className="relative flex items-center">
              <div className="absolute left-4 text-gray-400">
                <FaEnvelope />
              </div>
              <input 
                type="email" 
                placeholder="Enter you email" 
                className="w-full py-4 pl-12 pr-32 bg-gray-50 border border-gray-200 rounded-md focus:outline-none text-gray-800"
              />
              <button className="absolute right-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded flex items-center gap-2 transition">
                Subscribe <span className="text-xl">›</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}

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
                <div key={index} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 cursor-pointer hover:bg-orange-500 hover:text-white transition">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Our Menus */}
          <div>
            <h4 className="text-xl font-bold text-secondary mb-2">Our Menus</h4>
            <div className="w-12 h-1 bg-white mb-6 opacity-30"></div>
            <ul className="space-y-3 text-gray-400">
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
            <div className="w-12 h-1 bg-secondary mb-6 opacity-30"></div>
            <ul className="space-y-3 text-gray-400">
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
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <div className="p-2 bg-orange-500 rounded-full text-white"><FaPhoneAlt size={14}/></div>
                <div>+44 (0) 9865 124 765 <br/> +44 (0) 0941 432 543</div>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-orange-500 rounded-full text-white"><FaEnvelope size={14}/></div>
                <div>www.yourdomain.com <br/> info@yourdomain.com</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-orange-500 rounded-full text-white mt-1"><FaMapMarkerAlt size={14}/></div>
                <div>11 Beaufort Court, Cana <br/> Wharf, Uk E108AL</div>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Download App</h4>
            <div className="w-12 h-1 bg-white mb-6 opacity-30"></div>
            <p className="text-gray-400 mb-6">Save $3 With app & new user only</p>
            <div className="space-y-3">
              <img src="/google-play.png" alt="Google Play" className="w-40 cursor-pointer hover:opacity-80 transition" />
              <img src="/app-store.png" alt="App Store" className="w-40 cursor-pointer hover:opacity-80 transition" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1a1a1a] py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 gap-4">
          <p>©2023. All rights reserved by <span className="text-white font-bold">food Zone</span></p>
          <div className="flex items-center gap-4">
            <span>Accept For</span>
            <div className="flex gap-2">
              <img src="/payment-methods.png" alt="Payment Methods" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}