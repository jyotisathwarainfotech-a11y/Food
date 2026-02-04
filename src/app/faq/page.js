'use client';

import { useState } from 'react';

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
  },
  {
    id: 7,
    question: "Are children welcome?",
    answer: "Absolutely! We have a kids' menu with smaller portions and family-friendly options. High chairs and booster seats are available upon request."
  },
  {
    id: 8,
    question: "Do you offer takeout?",
    answer: "Yes, takeout is available during all operating hours. You can order online, by phone, or in person. Orders typically ready within 20-30 minutes."
  },
  {
    id: 9,
    question: "What is your cancellation policy?",
    answer: "For reservations, we request 24 hours' notice for cancellations. For private events, a 48-hour notice is required. Cancellations with less notice may be subject to a fee."
  },
  {
    id: 10,
    question: "Do you accommodate food allergies?",
    answer: "Yes, we take food allergies very seriously. Please inform us of any allergies when making your reservation, and our staff will work with you to ensure a safe dining experience."
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our restaurant, services, and policies
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <svg
                    className={`h-6 w-6 text-orange-600 transition-transform duration-300 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openId === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-orange-100 mb-6">
              Our friendly team is here to help you with any additional questions or concerns
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl mb-2">📞</div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-sm">(123) 456-7890</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl mb-2">✉️</div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-sm">info@fooddelight.com</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl mb-2">💬</div>
                <h3 className="font-bold mb-2">Live Chat</h3>
                <p className="text-sm">Available 24/7</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Restaurant Policies</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">•</span>
                  <span>Gratuity automatically added to parties of 6 or more</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">•</span>
                  <span>Valid ID required for alcohol service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">•</span>
                  <span>Pets welcome in outdoor seating area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">•</span>
                  <span>20% deposit required for private events</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">•</span>
                  <span>Established in 2010</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">•</span>
                  <span>Seating capacity: 120 guests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">•</span>
                  <span>Parking available on-site</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">•</span>
                  <span>Wheelchair accessible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}