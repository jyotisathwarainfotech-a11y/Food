'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLocationArrow, FaUser } from "react-icons/fa";
import { useCart } from "../context/CartContext";


export default function CombinedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { getTotalItems } = useCart();
  

  // Track scroll position to determine which header to show
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const closeAboutDropdown = () => {
    setIsAboutDropdownOpen(false);
  };

  // Static header section (shown when not scrolled)
  const renderStaticHeader = () => (
    <div className="bg-primary text-secondary text-sm">
      <div className="container mx-auto px-4 h-10 flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-4">
        
        {/* Social Icons Box */}
        <div className="bg-primary h-10 flex items-center px-4 gap-4">
            <Link href="#" className="text-secondary hover:opacity-80">
            <FaFacebookF />
            </Link>
            <Link href="#" className="text-secondary hover:opacity-80">
            <FaTwitter />
            </Link>
            <Link href="#" className="text-secondary hover:opacity-80">
            <FaInstagram />
            </Link>
            <Link href="#" className="text-secondary hover:opacity-80">
            <FaYoutube />
            </Link>
        </div>

        {/* Currency & Language */}
        <span className="flex items-center gap-1">USD ▾</span>
        <span className="flex items-center gap-1">🇺🇸 English ▾</span>
        </div>


        {/* Right */}
        <div className="flex items-center gap-6 text-sm text-secondary">
        {/* Location */}
        <span className="flex items-center gap-2">
            <FaLocationArrow className="h-4 w-4 text-secondary" />
            <span>734 H, Bryan Burlington, NC 27215</span>
        </span>

        {/* Login */}
        <Link
            href="/login"
            className="flex items-center gap-2 hover:text-secondary transition"
        >
            <FaUser className="h-4 w-4" />
            <span>Login or Register</span>
        </Link>
        </div>

      </div>
    </div>
  );

  // Main header section (always present)
  const renderMainHeader = () => (
    <header className={`sticky top-0 z-50 ${scrolled ? 'bg-primary shadow-md' : 'bg-secondary'}`}>
      <div className="container mx-auto px-4 h-18 flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0">
          {scrolled ? (
            <Link href="/" className="text-2xl font-bold text-secondary">
              FoodDelight
            </Link>
          ) : (
            <Link href="/" className="text-2xl font-bold text-primary">
              <span className="text-primary">R</span>estfast
            </Link>
          )}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={`${scrolled ? 'text-secondary hover:text-secondary/90' : 'text-primary hover:text-primary/80'}`}
          >
            Home
          </Link>
          <Link 
            href="/menu" 
            className={`${scrolled ? 'text-secondary hover:text-secondary/90' : 'text-primary hover:text-primary/80'}`}
          >
            Menu
          </Link>

          <div className="relative group">
            <button 
              onClick={toggleAboutDropdown}
              onMouseEnter={() => setIsAboutDropdownOpen(true)  }
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
              className={`hover:text-primary flex items-center gap-1 ${scrolled ? 'hover:text-secondary text-secondary' : 'text-primary'}`}
            >
              Pages ▾
            </button>
            {isAboutDropdownOpen && (
              <div 
                className={`absolute left-0 w-48 shadow-lg rounded-md z-50 py-1 ${
                  scrolled ? 'bg-primary' : 'bg-secondary'
                }`}
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <Link 
                  href="/about" 
                  className={`block px-4 py-2 text-sm ${
                    scrolled 
                      ? 'text-secondary hover:bg-secondary/80 hover:text-primary' 
                      : 'text-primary hover:bg-primary/80 hover:text-secondary'
                  }`}
                >
                  About Us
                </Link>
                <Link 
                  href="/chefs" 
                  className={`block px-4 py-2 text-sm ${
                    scrolled 
                      ? 'text-secondary hover:bg-secondary/80 hover:text-primary' 
                      : 'text-primary hover:bg-primary/80 hover:text-secondary'
                  }`}
                >
                  Chefs
                </Link>
                <Link 
                  href="/cart" 
                  className={`block px-4 py-2 text-sm ${
                    scrolled 
                      ? 'text-secondary hover:bg-secondary/80 hover:text-primary' 
                      : 'text-primary hover:bg-primary/80 hover:text-secondary'
                  }`}
                >
                  Cart
                </Link>
                <Link 
                  href="/blog" 
                  className={`block px-4 py-2 text-sm ${
                    scrolled 
                      ? 'text-secondary hover:bg-secondary/80 hover:text-primary' 
                      : 'text-primary hover:bg-primary/80 hover:text-secondary'
                  }`}
                >
                  Blog
                </Link>
                <Link 
                  href="/faq" 
                  className={`block px-4 py-2 text-sm ${
                    scrolled 
                     ? 'text-secondary hover:bg-secondary/80 hover:text-primary' 
                      : 'text-primary hover:bg-primary/80 hover:text-secondary'
                  }`}
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>

          <Link 
            href="/shop" 
            className={`${scrolled ? 'text-secondary hover:text-secondary/90' : 'text-primary hover:text-primary/80'}`}
          >
            Shop
          </Link>
          <Link 
            href="/contact" 
            className={`${scrolled ? 'text-secondary hover:text-secondary/90' : 'text-primary hover:text-primary/80'}`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
            <Link
              href="/booking"
              className={`hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-md font-semibold ${
                scrolled 
                  ? 'bg-secondary text-primary hover:bg-secondary/90' 
                  : 'bg-primary text-secondary hover:bg-primary/90'
              }`}
            >
              Book Now →
            </Link>

          <Link 
            href="/cart" 
            className={`p-2 relative ${
              scrolled 
                ? 'text-secondary hover:text-secondary/90' 
                : 'text-primary hover:text-primary/80'
            }`}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className={`absolute -top-1 -right-1 text-xs rounded-full h-5 w-5 flex items-center justify-center ${
              scrolled 
                ? 'bg-secondary text-primary' 
                : 'bg-primary text-secondary'
            }`}>
              {getTotalItems()}
            </span>
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={toggleMenu}
            className={`md:hidden ${
              scrolled 
                ? 'text-gray-700 hover:text-orange-600' 
                : 'text-white'
            } text-2xl`}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden ${scrolled ? 'bg-primary' : 'bg-secondary'} ${scrolled ? 'text-secondary' : 'text-primary'} px-6 py-4 space-y-3`}>
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <div className="w-full">
            <button
              onClick={toggleAboutDropdown}
              className={`block w-full text-left ${scrolled ? 'text-secondary' : 'text-primary'}`}
            >
              About
            </button>
            {isAboutDropdownOpen && (
              <div className="pl-6 space-y-1">
                <Link href="/chefs" className={`block ${scrolled ? 'text-secondary' : 'text-primary'}`}>
                  Chefs
                </Link>
                <Link href="/cart" className={`block ${scrolled ? 'text-secondary' : 'text-primary'}`}>
                  Cart
                </Link>
                <Link href="/blog" className={`block ${scrolled ? 'text-secondary' : 'text-primary'}`}>
                  Blog
                </Link>
                <Link href="/faq" className={`block ${scrolled ? 'text-secondary' : 'text-primary'}`}>
                  FAQ
                </Link>
              </div>
            )}
          </div>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
          <Link
            href="/booking"
            className={`block mt-3 text-center py-2 rounded font-semibold ${
              scrolled 
                ? 'bg-secondary text-primary hover:bg-secondary/90' 
                : 'bg-primary text-white hover:bg-primary/90'
            }`}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );

  return (
    <>
      {!scrolled && renderStaticHeader()}
      {renderMainHeader()}
    </>
  );
}





// 'use client';

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLocationArrow, FaUser } from "react-icons/fa";
// import { useCart } from "../context/CartContext";

// export default function CombinedHeader() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isPagesOpen, setIsPagesOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { getTotalItems } = useCart();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* 🔹 Static Header (Hide on Mobile) */}
//       {!scrolled && (
//         <div className="hidden md:block bg-primary text-secondary text-sm">
//           <div className="container mx-auto px-4 h-10 flex items-center justify-between">

//             <div className="flex items-center gap-6">
//               <div className="flex gap-4">
//                 <FaFacebookF />
//                 <FaTwitter />
//                 <FaInstagram />
//                 <FaYoutube />
//               </div>
//               <span>USD ▾</span>
//               <span>🇺🇸 English ▾</span>
//             </div>

//             <div className="flex items-center gap-6">
//               <span className="flex items-center gap-2">
//                 <FaLocationArrow className="text-sm" />
//                 734 H, Bryan Burlington, NC
//               </span>

//               <Link href="/login" className="flex items-center gap-2">
//                 <FaUser />
//                 Login / Register
//               </Link>
//             </div>

//           </div>
//         </div>
//       )}

//       {/* 🔹 Main Header */}
//       <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary shadow-md' : 'bg-secondary'}`}>
//         <div className="container mx-auto px-4 h-16 flex items-center justify-between">

//           {/* Logo */}
//           <Link
//             href="/"
//             className={`text-2xl font-bold ${scrolled ? 'text-secondary' : 'text-primary'}`}
//           >
//             Restfast
//           </Link>

//           {/* Desktop Menu */}
//           <nav className="hidden lg:flex items-center gap-8 font-medium">
//             <Link href="/" className={`${scrolled ? 'text-secondary' : 'text-primary'}`}>Home</Link>
//             <Link href="/menu" className={`${scrolled ? 'text-secondary' : 'text-primary'}`}>Menu</Link>

//             {/* Pages Dropdown */}
//             <div className="relative group">
//               <button className={`${scrolled ? 'text-secondary' : 'text-primary'}`}>
//                 Pages ▾
//               </button>
//               <div className="absolute hidden group-hover:block bg-white text-black w-44 shadow-lg rounded-md mt-2">
//                 <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
//                 <Link href="/chefs" className="block px-4 py-2 hover:bg-gray-100">Chefs</Link>
//                 <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
//                 <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
//               </div>
//             </div>

//             <Link href="/shop" className={`${scrolled ? 'text-secondary' : 'text-primary'}`}>Shop</Link>
//             <Link href="/contact" className={`${scrolled ? 'text-secondary' : 'text-primary'}`}>Contact</Link>
//           </nav>

//           {/* Right Side */}
//           <div className="flex items-center gap-4">

//             {/* Book Button */}
//             <Link
//               href="/booking"
//               className="hidden md:inline-block bg-primary text-white px-5 py-2 rounded-md font-semibold hover:bg-primary/90 transition"
//             >
//               Book Now
//             </Link>

//             {/* Cart */}
//             <Link href="/cart" className="relative">
//               <svg className={`h-6 w-6 ${scrolled ? 'text-secondary' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17" />
//               </svg>

//               <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                 {getTotalItems()}
//               </span>
//             </Link>

//             {/* Mobile Toggle */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden text-2xl text-white"
//             >
//               ☰
//             </button>

//           </div>
//         </div>

//         {/* 🔹 Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-secondary text-black px-6 py-4 shadow-md">
            
//             <nav className="flex flex-col space-y-4 text-lg font-medium">
              
//               <Link href="/" onClick={() => setIsMenuOpen(false)}>
//                 Home
//               </Link>

//               <Link href="/menu" onClick={() => setIsMenuOpen(false)}>
//                 Menu
//               </Link>

//               {/* Pages Section */}
//               <button
//                 onClick={() => setIsPagesOpen(!isPagesOpen)}
//                 className="text-left"
//               >
//                 Pages ▾
//               </button>

//               {isPagesOpen && (
//                 <div className="flex bg-primary flex-col pl-4 space-y-3 text-base font-normal">
//                   <Link href="/about">About</Link>
//                   <Link href="/chefs">Chefs</Link>
//                   <Link href="/blog">Blog</Link>
//                   <Link href="/faq">FAQ</Link>
//                 </div>
//               )}

//               <Link href="/shop">Shop</Link>

//               <Link href="/contact">Contact</Link>

//             </nav>

//           </div>
//         )}

//       </header>
//     </>
//   );
// }
