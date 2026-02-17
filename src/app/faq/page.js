'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare, Phone, Mail } from 'lucide-react';


const faqData = [
  {
    id: 1,
    question: "What are your operating hours?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat."
  },
  {
    id: 2,
    question: "Do you offer vegetarian and vegan options?",
     answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat."
  },
  {
    id: 3,
    question: "Can I make a reservation online?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat."
  },
  {
    id: 4,
    question: "Do you offer delivery services?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat."
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
     answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat."
  },
  {
    id: 6,
    question: "Do you have private dining options?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat."
  }
];

const images = [
    "/images/roll1.webp",
    "/images/roll2.webp",
    "/images/home2.webp",
    "/images/home3.webp",
    "/images/img2.webp",
    "/images/home2.webp",
  ];

export default function FAQPage() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
    {/* --- HERO SECTION --- */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[var(--primary)]">

      

      {/* Floating Icon */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 1 }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-20 hidden md:block text-[var(--secondary)]"
      >
        <HelpCircle size={70} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-6 py-2 rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/40 text-[var(--secondary)] text-sm font-semibold tracking-widest uppercase backdrop-blur-md"
        >
          FAQ • Support Center
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-4xl sm:text-5xl md:text-7xl text-white leading-tight"
        >
          Got Questions? <br />
          <span className="text-transparent bg-clip-text bg-[var(--secondary)]">
            We’ve Got Answers.
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis arcu nunc. Cras sit amet tellus vel metus accumsan consequat.
        </motion.p>

    

      </div>
      </section>

      {/* --- FAQ QUESTIONS --- */}
      <section className="py-12 relative bg-primary">
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
                  ? 'bg-white/10 border-secondary shadow-[0_0_30px_rgba(249,115,22,0.1)]' 
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

    <section className="bg-primary overflow-hidden py-12">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative w-full overflow-hidden">
      <div className="flex animate-scroll gap-4">

        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="w-[280px] md:w-[320px] 
            h-[180px] md:h-[220px] 
            flex-shrink-0 rounded-xl overflow-hidden"
          >
            <Image
              src={img}
              alt="food"
              width={320}
              height={220}
              className="object-cover w-full h-full"
            />
          </div>
        ))}

      </div>
    </div>

  </div>

  {/* Scroll Animation */}
  <style jsx>{`
    .animate-scroll {
      animation: scroll 30s linear infinite;
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

      </>
  );
}