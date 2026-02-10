"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { ChefHat, Leaf, Star } from "lucide-react";
import { useState } from "react";

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


export default function Home() {
   const [activeTab, setActiveTab] = useState("Event Creating");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center text-white overflow-hidden"
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
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

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
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

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
    
    </div>
  );
}
