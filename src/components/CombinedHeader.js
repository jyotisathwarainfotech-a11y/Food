// 'use client';

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLocationArrow, FaUser } from "react-icons/fa";
// import { useCart } from "../context/CartContext";


// export default function CombinedHeader() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { getTotalItems } = useCart();
  

//   // Track scroll position to determine which header to show
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleAboutDropdown = () => {
//     setIsAboutDropdownOpen(!isAboutDropdownOpen);
//   };

//   const closeAboutDropdown = () => {
//     setIsAboutDropdownOpen(false);
//   };

//   // Static header section (shown when not scrolled)
//   const renderStaticHeader = () => (
//     <div className="bg-primary text-secondary text-sm">
//       <div className="container mx-auto px-4 h-10 flex items-center justify-between">
        
//         {/* Left */}
//         <div className="flex items-center gap-4">
        
//         {/* Social Icons Box */}
//         <div className="bg-primary h-10 flex items-center px-4 gap-4">
//             <Link href="#" className="text-secondary hover:opacity-80">
//             <FaFacebookF />
//             </Link>
//             <Link href="#" className="text-secondary hover:opacity-80">
//             <FaTwitter />
//             </Link>
//             <Link href="#" className="text-secondary hover:opacity-80">
//             <FaInstagram />
//             </Link>
//             <Link href="#" className="text-secondary hover:opacity-80">
//             <FaYoutube />
//             </Link>
//         </div>

//         {/* Currency & Language */}
//         <span className="flex items-center gap-1">USD ▾</span>
//         <span className="flex items-center gap-1">🇺🇸 English ▾</span>
//         </div>


//         {/* Right */}
//         <div className="flex items-center gap-6 text-sm text-secondary">
//         {/* Location */}
//         <span className="flex items-center gap-2">
//             <FaLocationArrow className="h-4 w-4 text-secondary" />
//             <span>734 H, Bryan Burlington, NC 27215</span>
//         </span>

//         {/* Login */}
//         <Link
//             href="/login"
//             className="flex items-center gap-2 hover:text-secondary transition"
//         >
//             <FaUser className="h-4 w-4" />
//             <span>Login or Register</span>
//         </Link>
//         </div>

//       </div>
//     </div>
//   );

//   // Main header section (always present)
//   const renderMainHeader = () => (
//     <header className={`sticky top-0 z-50 ${scrolled ? 'bg-primary shadow-md' : 'bg-secondary'}`}>
//       <div className="container mx-auto px-4 h-18 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex-shrink-0">
//           {scrolled ? (
//             <Link href="/" className="text-2xl font-bold text-secondary">
//               FoodDelight
//             </Link>
//           ) : (
//             <Link href="/" className="text-2xl font-bold text-primary">
//               <span className="text-primary">R</span>estfast
//             </Link>
//           )}
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-8">
//           <Link 
//             href="/" 
//             className={`${scrolled ? 'text-secondary hover:text-secondary/90' : 'text-primary hover:text-primary/80'}`}
//           >
//             Home
//           </Link>
//           <Link 
//             href="/menu" 
//             className={`${scrolled ? 'text-secondary hover:text-secondary/90' : 'text-primary hover:text-primary/80'}`}
//           >
//             Menu
//           </Link>

//           <div className="relative group">
//             <button 
//               onClick={toggleAboutDropdown}
//               onMouseEnter={() => setIsAboutDropdownOpen(true)  }
//               onMouseLeave={() => setIsAboutDropdownOpen(false)}
//               className={`hover:text-primary flex items-center gap-1 ${scrolled ? 'hover:text-secondary text-secondary' : 'text-primary'}`}
//             >
//               Pages ▾
//             </button>
//             {isAboutDropdownOpen && (
//               <div 
//                 className={`absolute left-0 w-48 shadow-lg rounded-md z-50 py-1 ${
//                   scrolled ? 'bg-primary' : 'bg-secondary'
//                 }`}
//                 onMouseEnter={() => setIsAboutDropdownOpen(true)}
//                 onMouseLeave={() => setIsAboutDropdownOpen(false)}
//               >
//                 <Link 
//                   href="/about" 
//                   className={`block px-4 py-2 text-sm ${
//                     scrolled 
//                       ? 'text-secondary hover:bg-secondary/80 hover:text-primary' 
//                       : 'text-primary hover:bg-primary/80 hover:text-secondary'
//                   }`}
//                 >
//                   About Us
//                 </Link>
//                 <Link 
//                   href="/chefs" 
//                   className={`block px-4 py-2 text-sm ${
//                     scrolled 
//                       ? 'text-secondary hover:bg-secondary/80 hover:text-primary' 
//                       : 'text-primary hover:bg-primary/80 hover:text-secondary'
//                   }`}
//                 >
//                   Chefs
//                 </Link>
//                 <Link 
//                   href="/cart" 
//                   className={`block px-4 py-2 text-sm ${
//                     scrolled 
//                       ? 'text-secondary hover:bg-secondary/80 hover:text-primary' 
//                       : 'text-primary hover:bg-primary/80 hover:text-secondary'
//                   }`}
//                 >
//                   Cart
//                 </Link>
//                 <Link 
//                   href="/blog" 
//                   className={`block px-4 py-2 text-sm ${
//                     scrolled 
//                       ? 'text-secondary hover:bg-secondary/80 hover:text-primary' 
//                       : 'text-primary hover:bg-primary/80 hover:text-secondary'
//                   }`}
//                 >
//                   Blog
//                 </Link>
//                 <Link 
//                   href="/faq" 
//                   className={`block px-4 py-2 text-sm ${
//                     scrolled 
//                      ? 'text-secondary hover:bg-secondary/80 hover:text-primary' 
//                       : 'text-primary hover:bg-primary/80 hover:text-secondary'
//                   }`}
//                 >
//                   FAQ
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link 
//             href="/shop" 
//             className={`${scrolled ? 'text-secondary hover:text-secondary/90' : 'text-primary hover:text-primary/80'}`}
//           >
//             Shop
//           </Link>
//           <Link 
//             href="/contact" 
//             className={`${scrolled ? 'text-secondary hover:text-secondary/90' : 'text-primary hover:text-primary/80'}`}
//           >
//             Contact
//           </Link>
//         </nav>

//         {/* Right Buttons */}
//         <div className="flex items-center gap-4">
//             <Link
//               href="/booking"
//               className={`hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-md font-semibold ${
//                 scrolled 
//                   ? 'bg-secondary text-primary hover:bg-secondary/90' 
//                   : 'bg-primary text-secondary hover:bg-primary/90'
//               }`}
//             >
//               Book Now →
//             </Link>

//           <Link 
//             href="/cart" 
//             className={`p-2 relative ${
//               scrolled 
//                 ? 'text-secondary hover:text-secondary/90' 
//                 : 'text-primary hover:text-primary/80'
//             }`}
//           >
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//             <span className={`absolute -top-1 -right-1 text-xs rounded-full h-5 w-5 flex items-center justify-center ${
//               scrolled 
//                 ? 'bg-secondary text-primary' 
//                 : 'bg-primary text-secondary'
//             }`}>
//               {getTotalItems()}
//             </span>
//           </Link>

//           {/* Mobile Menu */}
//           <button
//             onClick={toggleMenu}
//             className={`md:hidden ${
//               scrolled 
//                 ? 'text-gray-700 hover:text-orange-600' 
//                 : 'text-white'
//             } text-2xl`}
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className={`md:hidden ${scrolled ? 'bg-primary' : 'bg-secondary'} ${scrolled ? 'text-secondary' : 'text-primary'} px-6 py-4 space-y-3`}>
//           <Link href="/">Home</Link>
//           <Link href="/menu">Menu</Link>
//           <div className="w-full">
//             <button
//               onClick={toggleAboutDropdown}
//               className={`block w-full text-left ${scrolled ? 'text-secondary' : 'text-primary'}`}
//             >
//               About
//             </button>
//             {isAboutDropdownOpen && (
//               <div className="pl-6 space-y-1">
//                 <Link href="/chefs" className={`block ${scrolled ? 'text-secondary' : 'text-primary'}`}>
//                   Chefs
//                 </Link>
//                 <Link href="/cart" className={`block ${scrolled ? 'text-secondary' : 'text-primary'}`}>
//                   Cart
//                 </Link>
//                 <Link href="/blog" className={`block ${scrolled ? 'text-secondary' : 'text-primary'}`}>
//                   Blog
//                 </Link>
//                 <Link href="/faq" className={`block ${scrolled ? 'text-secondary' : 'text-primary'}`}>
//                   FAQ
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link href="/shop">Shop</Link>
//           <Link href="/contact">Contact</Link>
//           <Link
//             href="/booking"
//             className={`block mt-3 text-center py-2 rounded font-semibold ${
//               scrolled 
//                 ? 'bg-secondary text-primary hover:bg-secondary/90' 
//                 : 'bg-primary text-white hover:bg-primary/90'
//             }`}
//           >
//             Book Now
//           </Link>
//         </div>
//       )}
//     </header>
//   );

//   return (
//     <>
//       {!scrolled && renderStaticHeader()}
//       {renderMainHeader()}
//     </>
//   );
// }
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLocationArrow,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import BookingModal from "../components/BookingModal";
import Image from "next/image";

export default function CombinedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);

  const { getTotalItems } = useCart();

  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDropdown = () => setIsDropdownOpen(false);

  const bgColor = scrolled ? "bg-primary" : "bg-secondary";
  const textColor = scrolled ? "text-secondary" : "text-primary";

  return (
    <>
      {/* ================= TOP BAR ================= */}
      {!scrolled && (
        <div className="hidden lg:block bg-black text-white text-sm">
          <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
              <span>USD ▾</span>
              <span>English ▾</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationArrow />
              <span>734 H, Bryan Burlington</span>
            </div>
          </div>
        </div>
      )}

      {/* ================= HEADER ================= */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${bgColor}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">

        <Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo1.png"
    alt="Restfast Logo"
    width={60}
    height={60}
    priority
  />

  <span className={`text-xl sm:text-2xl font-bold ${textColor}`}>
    FoodZentro
  </span>
</Link>


          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">

            <Link
              href="/"
              className={`${textColor} ${isActive("/") && "font-bold border-b-2 border-secondary"}`}
            >
              Home
            </Link>

            <Link
              href="/menu"
              className={`${textColor} ${isActive("/menu") && "font-bold border-b-2 border-secondary"}`}
            >
              Menu
            </Link>

            {/* DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={textColor}>Pages ▾</button>

              {isDropdownOpen && (
                <div
                  className={`absolute left-0 top-full w-44 rounded-md shadow-lg py-2 z-50
                  ${scrolled ? "bg-primary text-secondary" : "bg-secondary text-primary"}`}
                >
                  {["About", "Chefs", "Cart", "Blog", "FAQ"].map((item) => {
                    const link = `/${item.toLowerCase()}`;
                    return (
                      <Link
                        key={item}
                        href={link}
                        onClick={closeDropdown}
                        className={`block px-4 py-2 transition
                          ${
                            isActive(link)
                              ? "font-semibold bg-white/20"
                              : scrolled
                              ? "hover:bg-white/10"
                              : "hover:bg-gray-100"
                          }`}
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/shop"
              className={`${textColor} ${isActive("/shop") && "font-bold border-b-2 border-secondary"}`}
            >
              Shop
            </Link>

            <Link
              href="/contact"
              className={`${textColor} ${isActive("/contact") && "font-bold border-b-2 border-secondary"}`}
            >
              Contact
            </Link>
          </nav>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-4">

            <button
              onClick={() => setOpenBooking(true)}
              className={`hidden sm:inline-block px-4 py-2 rounded-md text-sm font-semibold
              ${
                scrolled
                  ? "bg-secondary text-primary"
                  : "bg-primary text-secondary"
              }`}
            >
              Book Now
            </button>

            {/* CART */}
            <Link href="/cart" className={`relative ${textColor}`}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              </svg>
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            </Link>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden text-2xl ${textColor}`}
            >
              ☰
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#d4a24c] text-black px-6 py-6 space-y-4">

            {["/", "/menu", "/shop", "/contact"].map((path, i) => {
              const labels = ["Home", "Menu", "Shop", "Contact"];
              return (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-lg ${
                    isActive(path) ? "font-bold underline" : ""
                  }`}
                >
                  {labels[i]}
                </Link>
              );
            })}

            {/* MOBILE DROPDOWN */}
            <div>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-lg">
                Pages
              </button>

              {isDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {["About", "Chefs", "Cart", "Blog", "FAQ"].map((item) => {
                    const link = `/${item.toLowerCase()}`;
                    return (
                      <Link
                        key={item}
                        href={link}
                        onClick={() => {
                          setIsMenuOpen(false);
                          closeDropdown();
                        }}
                        className={`${isActive(link) ? "font-bold underline" : ""}`}
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setOpenBooking(true);
                setIsMenuOpen(false);
              }}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold"
            >
              Book Now
            </button>
          </div>
        )}
      </header>

      <BookingModal isOpen={openBooking} onClose={() => setOpenBooking(false)} />
    </>
  );
}
