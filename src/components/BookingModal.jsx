"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function BookingModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative overflow-hidden">

              {/* Header */}
              <div className="bg-primary text-white p-6">
                <h2 className="text-2xl font-bold">
                  Book Your Table
                </h2>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white hover:text-secondary transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                />

                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                />

                <input
                  type="time"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                />

                <input
                  type="number"
                  placeholder="Number of Guests"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                />

                <button
                  className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-primary transition"
                >
                  Confirm Booking
                </button>

              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
