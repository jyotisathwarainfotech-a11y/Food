"use client"
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChefHat, Heart, Leaf, Minus, Plus, ShoppingCart, Star, UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useCart } from "../context/CartContext";


const menuData = {
  "Event Creating": [
    { name: "Solo Snack Pack", desc: "Candied artichokes, truffle", price: "$30.99" },
    { name: "Salmon Bagel", desc: "Smoky pepperoni, cheese", price: "$39.85" },
    { name: "Bacon Italian Pizza", desc: "Spicy jalapeño, ranch", price: "$20.99" },
    { name: "Delicious Pizza", desc: "Creamy ranch, jalapeño", price: "$40.99" },
  ],
  "Meal Plans": [
    { name: "Healthy Bowl", desc: "Quinoa, avocado", price: "$25.50" },
    { name: "Protein Meal", desc: "Chicken breast, veggies", price: "$28.99" },
    { name: "Vegan Meal", desc: "Plant based protein", price: "$26.75" },
  ],
  "Food Delivery": [
    { name: "Bacon Italian Pizza", desc: "Spicy jalapeño, ranch", price: "$20.99" },
    { name: "Delicious Pizza", desc: "Creamy ranch, jalapeño", price: "$40.99" },
    { name: "Vegan Meal", desc: "Plant based protein", price: "$26.75" },
    { name: "Healthy Bowl", desc: "Quinoa, avocado", price: "$25.50" },
  ],
  "Diet Plans": [
    { name: "Keto Salad", desc: "Low carb, fresh greens", price: "$22.00" },
    { name: "Vegan Meal", desc: "Plant based protein", price: "$26.75" },
    { name: "Low Carb Meal", desc: "High protein, low carbs", price: "$27.50" },
    { name: "Paleo Meal", desc: "High protein, low carbs", price: "$29.00" },
    { name: "Gluten-Free Meal", desc: "No wheat, gluten free", price: "$28.00" },
  ],
};

const chefs = [
  {
    name: "Jimmie K. Cryer",
    role: "CEO & Founder",
    image: "/images/chef1.png",
  },
  {
    name: "Keneth Conroy",
    role: "Senior Chef",
    image: "/images/chef2.png",
  },
  {
    name: "Antony Taylor",
    role: "Assistant Chef",
    image: "/images/chef3.png",
  },
  {
    name: "Jame Radley",
    role: "Chef Cook",
    image: "/images/chef4.png",
  },
];

const products = [
    { name: "Burger Deluxe", image: "/images/sell1.png", price: "$110.46" },
    { name: "Fried Chicken", image: "/images/sell2.png", price: "$60.50" },
    { name: "Spicy Wings", image: "/images/sell3.png", price: "$50.00" },
    { name: "Italian Pizza", image: "/images/sell4.jpg", price: "$80.00" },
    { name: "Pasta Special", image: "/images/sell5.jpg", price: "$95.00" },
  ];


const faqData = [
  {
    question: "How is our handmade dough prepared?",
    answer: "Our dough is prepared daily using organic flour and filtered water, then cold-fermented for 48 hours to ensure maximum flavor and a light, airy crust."
  },
  {
    question: "Do you offer vegan or gluten-free options?",
    answer: "Absolutely! We offer cauliflower-based crusts and high-quality vegan cheese. Just let our server know about your dietary requirements."
  },
  {
    question: "What makes our 'Secret Sauce' so special?",
    answer: "We use San Marzano tomatoes imported directly from Italy, simmered with fresh basil and a blend of 12 secret herbs for 6 hours."
  },
  {
    question: "Can I customize my own pizza toppings?",
    answer: "Yes, you can be the chef! Choose from over 30 fresh ingredients to create your perfect masterpiece."
  },
  {
    question: "How long has the restaurant been serving food?",
    answer: "We have been serving delicious food for over 20 years, and our passion for cooking has only grown stronger over the years."
  }
];


export default function Home() {
   const [activeTab, setActiveTab] = useState("Event Creating");
   const { addToCart } = useCart();
   const [activeIndex, setActiveIndex] = useState(0);

   const handleAddToCart = (item) => {
    addToCart(item);
    console.log("Added to cart:", item);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/img2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30"></div>

        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
          <motion.div
            className="text-left"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 text-secondary mb-4">
              <img src="/images/img4.png" alt="Chili" className="w-8" />
              <span className="text-sm tracking-wide">
                Start price only $25
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              DELICIOUS FOOD <br />
              <span className="text-secondary">NEAR YOUR TOWN</span>
            </h1>

            <p className="text-gray-300 max-w-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
              arcu nunc. Cras sit amet tellus vel metus accumsan consequat.
            </p>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary hover:text-primary px-8 py-4 rounded-full font-semibold transition transform hover:scale-105"
            >
              View All Menu →
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative hidden lg:flex justify-center"
            initial={{ x: 80, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src="/images/img5.png"
              alt="Food Dish"
              className="w-[420px] drop-shadow-2xl animate-float"
            />

            {/* Price badge */}
            <motion.div
              className="absolute bottom-10 right-10 bg-secondary text-primary px-6 py-3 rounded-xl font-bold text-xl shadow-lg"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
            >
              ONLY NOW <br /> $7.00
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className=" mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="text-secondary uppercase tracking-widest text-sm">
              Chef’s Recommendation
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">
              Crafted With <span className="text-secondary">Passion</span> <br />
              Served With Love
            </h2>

            <p className="text-gray-300 max-w-md mb-8">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            {/* Category Pills */}
            <div className="flex gap-4 flex-wrap mb-10">
              {["Starters", "Main Course", "Desserts"].map((item) => (
                <button
                  key={item}
                  className="px-6 py-2 rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-black transition"
                >
                  {item}
                </button>
              ))}
            </div>

            <Link
              href="/menu"
              className="inline-flex items-center border border-secondary gap-2 bg-secondary hover:bg-primary/90 px-8 py-4 rounded-full font-semibold transition transform hover:scale-105"
            >
              Explore Full Menu →
            </Link>
          </div>

          {/* RIGHT DISH SHOWCASE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Dish Card */}
            {[
              {
                name: "Spicy Grilled Chicken",
                price: "$22.99",
                img: "/images/img1.jpg",
              },
              {
                name: "Creamy Truffle Pasta",
                price: "$18.50",
                img: "/images/img3.jpg",
              },
            ].map((dish, i) => (
              <div
                key={i}
                className="relative group rounded-2xl overflow-hidden bg-primary backdrop-blur-lg border border-white/10 hover:border-secondary transition"
              >
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                  <span className="text-secondary text-lg font-semibold">
                    {dish.price}
                  </span>
                </div>
              </div>
            ))}

            {/* Small Highlight Dish */}
            <div className="sm:col-span-2 bg-primary rounded-2xl p-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Today’s Special</h3>
                <p className="text-secondary">Chef’s secret spice mix</p>
              </div>
              <span className="text-3xl font-extrabold">$14.99</span>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      <div className=" mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE AREA */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          {/* Main Image */}
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="/images/img6.png"
              alt="Restaurant Story"
              className="w-full h-[480px] object-cover"
            />

            {/* Diagonal Year Tag */}
            <div className="absolute bottom-8 left-6 bg-black/70 px-6 py-3 rounded-xl transform -rotate-12">
              <motion.div
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-xl font-bold tracking-widest text-secondary"
              >
                Since 2020
              </motion.div>
            </div>
          </div>

          {/* Floating Rating */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            className="absolute -top-6 right-6 bg-secondary px-6 py-5 rounded-2xl shadow-xl text-center flex flex-col items-center gap-1"
          >
            <Star className="h-6 w-6 text-primary" />
            <p className="font-bold text-lg">5 Star</p>
            <p className="text-sm opacity-90">Rating</p>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <span className="text-primary uppercase tracking-widest text-sm">
            Our Restaurant
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Enjoy Your Eating Time <br />
            With <span className="text-primary">FoodDelight</span>
          </h2>

          <p className="text-gray-300 max-w-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie vulputate dapibus. Vivamus id laoreet leo. In enim orci, blandit vel interdum vel, dapibus eu leo.
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <ChefHat className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Experienced Chefs</h4>
                <p className="text-sm text-primary">
                  Passionate culinary experts
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Fresh Ingredients</h4>
                <p className="text-sm text-primary">
                  Organic & locally sourced
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-secondary bg-primary hover:bg-primary/80 px-8 py-4 rounded-full font-semibold transition transform hover:scale-105"
          >
            About Us →
          </Link>
        </motion.div>

      </div>
    </section>

      {/* Stats Section */}
      <section className="py-12 relative bg-primary text-white overflow-hidden">
      {/* Top Wave */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#FFF7ED"
          d="
            M0,30
            Q40,10 80,30
            T160,30 T240,30 T320,30 T400,30 T480,30
            T560,30 T640,30 T720,30 T800,30 T880,30
            T960,30 T1040,30 T1120,30 T1200,30
            T1280,30 T1360,30 T1440,30
            L1440,0 L0,0 Z"
        />
      </svg>

      {/* LEFT IMAGE – Plate Style */}
      <div className="hidden md:block absolute left-[-140px] top-1/2 -translate-y-1/2 z-0">
        <div className="w-[540px] h-[540px] bg-white rounded-full shadow-2xl flex items-center justify-center">
          <img
            src="/images/home6.png"
            alt="Burger"
            className="w-[420px] object-contain"
          />
        </div>
      </div>

      {/* RIGHT IMAGE – Floating */}
      <div className="hidden md:block absolute right-[-90px] top-1/2 -translate-y-1/2 z-0">
        <img
          src="/images/home1.png"
          alt="Food"
          className="w-[420px] lg:w-[480px] drop-shadow-2xl"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="container mx-auto px-4 py-28 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Heading */}
          <span className="uppercase tracking-widest text-secondary font-semibold">
            Save up to 50% off
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6">
            Flavors For
            <span className="block text-secondary">Royalty</span>
          </h2>

          <p className="text-lg text-secondary mb-14">
            Limited Time Offer – Don’t Miss Out 🍔
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {[
              { value: "15", label: "Days" },
              { value: "20", label: "Hours" },
              { value: "42", label: "Minutes" },
              { value: "45", label: "Seconds" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-secondary text-primary rounded-xl px-6 py-4 min-w-[90px] text-center shadow-lg"
              >
                <div className="text-3xl font-bold">{item.value}</div>
                <div className="text-sm font-medium text-primary">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5000+", label: "Happy Customers" },
              { value: "100+", label: "Menu Items" },
              { value: "24/7", label: "Online Support" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-secondary text-primary backdrop-blur-md rounded-2xl p-8 border border-orange-300"
              >
                <div className="text-4xl font-extrabold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

      {/* menu section */}
    <section className="relative py-20 bg-primary overflow-hidden">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-[350px] h-[520px] overflow-hidden rounded-t-full rounded-b-full">
              <img
                src="/images/home2.jpg"
                alt="Food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div>
          <p className="text-center text-sm text-secondary font-semibold">
            MENU CARD
          </p>

          <h2 className="text-center text-white text-4xl font-extrabold mt-2">
            OUR FAST FOODS <span className="text-secondary">MENU CARD</span>
          </h2>

          {/* CATEGORY TABS */}
          <div className="flex justify-center gap-3 mt-8 flex-wrap ">
            {Object.keys(menuData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm transition-all cursor-pointer
                  ${
                    activeTab === tab
                      ? "bg-secondary text-white"
                      : "border border-secondary text-secondary hover:bg-secondary hover:text-white"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* MENU LIST */}
          <div className="mt-10 space-y-6">
            {menuData[activeTab].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <img
                  src="/images/img2.jpg"
                  className="w-12 h-12 rounded-full object-cover"
                  alt=""
                />

                <div className="flex-1">
                  <h4 className="font-bold text-secondary">{item.name}</h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>

                <div className="hidden sm:block flex-1 border-b border-dotted border-secondary mx-4"></div>

                <p className="font-bold text-secondary">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[350px] h-[520px] overflow-hidden rounded-t-full rounded-b-full">
              <img
                src="/images/home3.jpg"
                alt="Burger"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
    
    {/* Chef Section */}
    <section className="relative py-24 bg-primary text-white overflow-hidden">
      <div className=" mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-secondary text-sm tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <UtensilsCrossed className="w-5 h-5" />
            Meet Our Exclusive
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Exclusive & Master Chefs
          </h2>
        </div>

        {/* Chef Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl 
              rounded-3xl overflow-hidden border border-white/10 
              hover:border-secondary transition duration-500"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  width={400}
                  height={500}
                  className="w-full h-[420px] object-cover 
                  group-hover:scale-110 transition duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t 
                from-black/80 via-black/30 to-transparent 
                opacity-70 group-hover:opacity-90 transition duration-500" />

                {/* Social Icons (Hover Effect) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 
                flex gap-3 opacity-0 group-hover:opacity-100 
                translate-y-5 group-hover:translate-y-0 
                transition duration-500">
                  
                  <div className="w-9 h-9 rounded-full bg-secondary 
                  flex items-center justify-center cursor-pointer hover:scale-110 transition">
                    <FaFacebook size={16} />
                  </div>

                  <div className="w-9 h-9 rounded-full bg-secondary 
                  flex items-center justify-center cursor-pointer hover:scale-110 transition">
                    <FaInstagram size={16} />
                  </div>

                  <div className="w-9 h-9 rounded-full bg-secondary 
                  flex items-center justify-center cursor-pointer hover:scale-110 transition">
                    <FaTwitter size={16} />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold group-hover:text-secondary transition">
                  {chef.name}
                </h3>
                <p className="text-secondary text-sm mt-1">
                  {chef.role}
                </p>
              </div>

              {/* Decorative Glow Effect */}
              <div className="absolute -inset-1 rounded-3xl 
              bg-gradient-to-r from-secondary/30 to-transparent 
              opacity-0 group-hover:opacity-100 blur-xl 
              transition duration-700 -z-10"></div>

            </div>
          ))}
        </div>
      </div>
    </section>
    
    {/* Products Section */}
    <section className="py-24 bg-primary overflow-hidden">
      <div className="mx-auto px-4">

        {/* Heading */}
        <div className="relative mb-16">
          <div className="absolute right-0 top-0">
            <Link
              href="/menu"
              className="px-8 py-3 bg-white text-black 
              hover:bg-secondary hover:text-white 
              rounded-xl shadow-md font-semibold 
              transition duration-300 ease-in-out"
            >
              SEE ALL →
            </Link>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              <span className="text-secondary">BEST SELLING</span>{" "}
              <span className="text-white italic">DISHES</span>
            </h2>

            <p className="text-white/80 mt-5 text-base md:text-lg leading-relaxed">
              Discover our most loved and top-rated dishes crafted with premium 
              ingredients and authentic flavors.
            </p>
          </div>
        </div>

        {/* Auto Scroll */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] m-4">

            {[...products, ...products].map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-[#f5efe6] rounded-3xl p-6 
                relative group transition duration-500
                hover:scale-105 hover:bg-white 
                hover:shadow-[8px_8px_0px_#d4a155]"
              >

                {/* Wishlist */}
                <div className="absolute top-4 right-4 text-secondary">
                  <Heart size={18} />
                </div>

                {/* Image */}
                <div className="flex justify-center mb-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="object-contain transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <h3 className="font-bold text-primary text-lg mb-2">
                  {item.name}
                </h3>

                <p className="text-secondary font-bold text-lg mb-6">
                  {item.price}
                </p>

                {/* Add To Cart Button (Hidden by default) */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className="absolute bottom-0 left-0 w-full 
                  bg-secondary text-white py-3 
                  rounded-b-3xl opacity-0 
                  group-hover:opacity-100 
                  transition duration-300"
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>

    {/* Testimonials */}
    <section className="relative py-24 bg-primary overflow-hidden">

      {/* Decorative Elements */}
      <img src="/images/cartoon4.png" className="absolute left-10 top-10 w-24 opacity-90" alt="" />
      <img src="/images/img4.png" className="absolute -left-10 bottom-10 w-40" alt="" />
      <img src="/images/takos1.png" className="absolute right-4 top-4 w-44" alt="" />

      <div className="container mx-auto px-6">

        {/* Heading Section */}
        <div className="text-center mb-20">
          <p className="text-secondary font-bold tracking-[0.2em] text-sm mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            OUR CUSTOMERS <span className="text-secondary uppercase">Feedback</span>
          </h2>
          {/* Decorative Divider */}
          <div className="flex justify-center items-center mt-4 gap-4">
             <div className="h-[2px] w-12 bg-secondary rounded-full"></div>
             <div className="w-3 h-3 border-2 border-secondary rounded-full"></div>
             <div className="h-[2px] w-12 bg-secondary rounded-full"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-y-20 gap-x-10 max-w-7xl mx-auto">

          {/* LEFT TESTIMONIAL (Victoria) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-start"
          >
            {/* The Quote Card */}
            <div className="bg-[#fdf6e9] rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100px] p-10 md:p-14 pb-20 w-full relative min-h-[300px]">
              <div className="text-secondary mb-4">
                 <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.7909 17.2261 10 15.017 10H14.017V8H15.017C18.3307 8 21.017 10.6863 21.017 14V21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697V14C8.01697 11.7909 6.22611 10 4.01697 10H3.01697V8H4.01697C7.33068 8 10.017 10.6863 10.017 14V21H3.01697Z" /></svg>
              </div>
              <p className="text-primary text-lg italic leading-relaxed max-w-[65%]">
                "Every pizza starts with our hand-tossed dough, made fresh daily and topped with our signature sauce crafted from ripe tomatoes and secret herbs."
              </p>
            </div>

            {/* Person Image - Positioned Absolute to overlap */}
            <div className="absolute -right-4 bottom-12 w-1/2 z-10">
              <img src="/images/1.png" alt="Victoria" className="w-full h-auto object-contain" />
            </div>

            {/* Name Label - Positioned to match image */}
            <div className="bg-secondary text-white rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] px-10 py-5 -mt-10 relative z-20 shadow-lg min-w-[280px]">
              <h4 className="font-bold text-xl">Victoria Wotton</h4>
              <p className="text-sm opacity-90">Fementum Odio Co.</p>
              <div className="flex mt-2 text-primary text-sm">★★★★★</div>
            </div>
          </motion.div>

          {/* RIGHT TESTIMONIAL (Emma) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-start"
          >
            {/* The Quote Card */}
            <div className="bg-[#fdf6e9] rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] p-10 md:p-14 pb-20 w-full relative min-h-[300px]">
              <div className="text-secondary mb-4">
                 <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.7909 17.2261 10 15.017 10H14.017V8H15.017C18.3307 8 21.017 10.6863 21.017 14V21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697V14C8.01697 11.7909 6.22611 10 4.01697 10H3.01697V8H4.01697C7.33068 8 10.017 10.6863 10.017 14V21H3.01697Z" /></svg>
              </div>
              <p className="text-primary text-lg italic leading-relaxed max-w-[65%]">
                "Freshly tossed dough forms the base of every pizza, of the name topped with a homemade sauce made from juicy tomatoes and our special herb recipe."
              </p>
            </div>

            {/* Person Image */}
            <div className="absolute -right-4 bottom-12 w-1/2 z-10">
              <img src="/images/2.png" alt="Emma" className="w-full h-auto object-contain" />
            </div>

            {/* Name Label */}
            <div className="bg-secondary text-white rounded-tl-[50px] rounded-br-[50px] rounded-bl-[50px] px-10 py-5 -mt-10 relative z-20 shadow-lg min-w-[280px]">
              <h4 className="font-bold text-xl">Emma Mia</h4>
              <p className="text-sm opacity-90">Fementum Odio Co.</p>
              <div className="flex mt-2 text-primary text-sm">★★★★★</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="relative py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/images/home2.jpg"   
          alt="FAQ Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Decorative Background Elements */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Static Info */}
          <div className="lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary font-bold tracking-widest text-sm mb-4 uppercase">
                Common Inquiries
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                HAVE ANY <span className="text-secondary">QUESTIONS?</span>
              </h2>
              <p className="text-white mb-8 leading-relaxed">
                We're here to help! If you don't find what you're looking for, feel free to reach out to our support team.
              </p>
              
              {/* Unique Support Card */}
              <div className="bg-primary/60 p-8 rounded-[40px] text-white flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <div className="text-4xl flex items-center justify-center">
                    <Image src="/images/home6.png"
                    className="w-32 h-18"
                     alt="Support" width={60} height={60} />
                  </div>
                </div>
                <h4 className="font-bold text-xl text-secondary mb-2">Still Curious?</h4>
                <p className="text-green-100 text-sm mb-6">Ask us anything about our ingredients or sourcing.</p>
                <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Animated Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                 whileHover={{ scale: 1.03 }} 
                viewport={{ once: true }}
                className={`overflow-hidden rounded-3xl border-2 transition-all duration-300 ${
                  activeIndex === index 
                  ? "border-secondary bg-secondary/10 shadow-xl scale-[1.02]" 
                  : "border-secondary bg-primary"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className={`text-lg md:text-xl font-bold ${activeIndex === index ? "text-secondary" : "text-white"}`}>
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${activeIndex === index ? "bg-primary text-white rotate-180" : "bg-gray-100 text-gray-500"}`}>
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-white leading-relaxed border-t border-secondary pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
    </div>
  );
}
