'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare, Phone, Mail } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "What are your operating hours?",
    answer: "We are open Monday through Sunday from 10:00 AM to 10:00 PM. Kitchen service is available until 9:30 PM."
  },
  {
    id: 2,
    question: "Do you offer vegetarian and vegan options?",
    answer: "Yes, we have an extensive vegetarian menu and several vegan options. Our chefs are happy to accommodate dietary restrictions and preferences."
  },
  {
    id: 3,
    question: "Can I make a reservation online?",
    answer: "Absolutely! You can make reservations through our website or by calling us directly at (123) 456-7890. We recommend booking in advance, especially for weekends and holidays."
  },
  {
    id: 4,
    question: "Do you offer delivery services?",
    answer: "Yes, we partner with major delivery platforms and also offer our own delivery service within a 5-mile radius. Delivery is available from 11:00 AM to 9:00 PM."
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, cash, and mobile payments (Apple Pay, Google Pay)."
  },
  {
    id: 6,
    question: "Do you have private dining options?",
    answer: "Yes, we have two private dining rooms that can accommodate groups of 12-30 people. Perfect for corporate events, birthdays, and special celebrations."
  }
];

const images = [
    "/images/roll1.webp",
    "/images/roll2.jpg",
    "/images/home2.jpg",
    "/images/home3.jpg",
    "/images/img2.jpg",
    "/images/home2.jpg",
  ];

export default function FAQPage() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
    {/* --- HERO SECTION --- */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">

      {/* Animated Gradient Glow Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-[120px] animate-pulse"></div>
      </motion.div>

      {/* Floating Icon Animation */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: [0, -15, 0], opacity: 1 }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-20 hidden md:block text-orange-400"
      >
        <HelpCircle size={60} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block px-6 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold tracking-widest uppercase backdrop-blur-md"
        >
          FAQ • Support Center
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-5xl md:text-7xl font-black tracking-tight leading-tight"
        >
          Got Questions? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500">
            We’ve Got Answers.
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Explore everything you need to know about reservations, menu details,
          private dining, and our culinary experience — all in one place.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
            Browse FAQs
          </button>
        </motion.div>

      </div>
    </section>

      {/* --- FAQ QUESTIONS --- */}
      <section className="py-20 relative bg-primary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group border rounded-3xl transition-all duration-300 ${
                  openId === faq.id 
                  ? 'bg-white/10 border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.1)]' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full p-6 md:p-8 text-left flex justify-between items-center gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xl font-bold ${openId === faq.id ? 'text-secondary' : 'text-secondary'}`}>
                      0{index + 1}
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-200 group-hover:text-white transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${openId === faq.id ? 'bg-primary text-white rotate-180' : 'bg-primary text-white'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button> 

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 md:px-16 text-white/60 leading-relaxed text-lg border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-primary overflow-hidden">
            <div className="relative w-full">
      
              <div className="flex w-max animate-scroll gap-2">
                {[...images, ...images].map((img, index) => (
                  <div
                    key={index}
                    className="w-[300px] h-[200px] flex-shrink-0 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt="food"
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
      
            </div>
          </section>
      </>
  );
}