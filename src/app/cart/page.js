"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function CartPage() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08;
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-[#111] to-primary text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
        >
          Your Cart{" "}
          <span className="text-secondary">
            ({getTotalItems()} items)
          </span>
        </motion.h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-xl text-gray-300">
             Your cart is empty
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* LEFT – CART ITEMS */}
            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 
                  rounded-2xl p-6 flex justify-between items-center 
                  hover:border-secondary transition-all duration-300"
                >
                  <div>
                    <h3 className="text-lg font-bold text-secondary">
                      {item.name}
                    </h3>

                    <p className="text-gray-400 mt-1">
                      {item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4 mt-4">

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="bg-secondary/20 hover:bg-secondary 
                        text-secondary hover:text-primary 
                        p-2 rounded-lg transition"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="bg-secondary/20 hover:bg-secondary 
                        text-secondary hover:text-primary 
                        p-2 rounded-lg transition"
                      >
                        <Plus size={16} />
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 transition ml-4"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="text-xl font-bold text-secondary">
                    $
                    {(
                      parseFloat(item.price.replace("$", "")) *
                      item.quantity
                    ).toFixed(2)}
                  </div>
                </motion.div>
              ))}

            </div>

            {/* RIGHT – SUMMARY CARD */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-xl border border-secondary/20 
              rounded-3xl p-8 shadow-2xl h-fit"
            >
              <h2 className="text-2xl font-bold mb-6 text-secondary">
                Order Summary
              </h2>

              <div className="space-y-4 text-gray-300">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? "Free" : `$${shipping}`}
                  </span>
                </div>

                <div className="border-t border-white/20 pt-4 flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-secondary">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="mt-8 w-full bg-secondary text-primary 
              py-3 rounded-xl font-semibold hover:scale-105 
              transition-all duration-300 shadow-lg">
                Proceed to Checkout
              </button>
            </motion.div>

          </div>
        )}
      </div>
    </div>
  );
}
