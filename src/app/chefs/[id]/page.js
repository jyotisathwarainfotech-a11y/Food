'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const chefsData = [
  {
    id: '1',
    name: 'Chef Maria Rodriguez',
    position: 'Founder & Head Chef',
    experience: '20+ years',
    specialty: 'Mediterranean Cuisine',
    bio: 'Maria brings her family\'s culinary traditions from Spain, combining traditional techniques with modern innovation. Growing up in a small village in Andalusia, she learned the art of cooking from her grandmother, who passed down generations of culinary wisdom.',
    longBio: 'Maria Rodriguez\'s journey in culinary arts began at her grandmother\'s kitchen in Andalusia, Spain. After formal training at the prestigious Le Cordon Bleu in Paris, she worked in renowned restaurants across Europe before founding FoodDelight. Her expertise spans traditional Mediterranean cooking with a modern twist, creating dishes that tell stories of her heritage while embracing contemporary flavors. Maria\'s philosophy centers on using the finest seasonal ingredients and letting their natural flavors shine.',
    specialties: ['Spanish Tapas', 'Seafood Paella', 'Mediterranean Grilled Dishes', 'Traditional Stews'],
    awards: ['James Beard Award 2018', 'Top Chef 2019', 'Culinary Excellence 2020'],
    image: '/placeholder.jpg'
  },
  {
    id: '2',
    name: 'Chef James Wilson',
    position: 'Sous Chef',
    experience: '15 years',
    specialty: 'Modern Fusion',
    bio: 'James specializes in creating innovative dishes that blend international flavors with local ingredients. His background in molecular gastronomy and Asian cuisines creates unique culinary experiences.',
    longBio: 'Chef James Wilson brings a fresh perspective to culinary arts with his innovative fusion approach. His diverse background includes apprenticeships in Tokyo\'s Michelin-starred restaurants, cooking in Peru\'s acclaimed gastonomy scene, and experimenting with modern techniques at elBulli alum establishments. James holds degrees in both classical French cuisine and Food Science, which enables him to create unexpected combinations while maintaining balance and technique perfection.',
    specialties: ['Fusion Small Plates', 'Creative Sauces', 'Global Seasoning Techniques', 'Modern Plating'],
    awards: ['Rising Star Chef 2021', 'Innovation Award 2022'],
    image: '/placeholder.jpg'
  },
  {
    id: '3',
    name: 'Chef Sophia Chen',
    position: 'Pastry Chef',
    experience: '12 years',
    specialty: 'Artisan Desserts',
    bio: 'Sophia creates stunning desserts that are as beautiful as they are delicious, with expertise in French pastry techniques. Her artistic approach transforms traditional desserts into edible masterpieces.',
    longBio: 'Sophia Chen\'s passion for pastry arts was ignited during her studies at the French Pastry School in Chicago. Her meticulous attention to detail and artistic flair have made her one of the most sought-after pastry chefs in the region. Sophia combines classical French techniques with Asian influences, creating desserts that are both visually stunning and incredibly delicious. Her signature style focuses on seasonal ingredients and innovative flavor combinations.',
    specialties: ['French Classical Pastries', 'Modern Dessert Plating', 'Chocolate Art', 'Seasonal Fruit Preparations'],
    awards: ['Best Pastry Chef 2020', 'Dessert Innovation 2021'],
    image: '/placeholder.jpg'
  },
  {
    id: '4',
    name: 'Chef Marcus Johnson',
    position: 'Grill Master',
    experience: '18 years',
    specialty: 'Grilled Specialties',
    bio: 'Marcus perfects the art of grilling, bringing out incredible flavors in meats and vegetables with his signature techniques. His expertise spans various grilling methods and wood selections.',
    longBio: 'Marcus Johnson\'s grilling expertise comes from years of mastering different techniques across cultures. From Argentine asado to Japanese yakitori, from American barbecue to Mediterranean grilling, Marcus has studied under masters worldwide. His approach emphasizes understanding each ingredient\'s unique characteristics and matching them with appropriate heat, timing, and seasoning. Marcus believes that great grilling is about patience, precision, and respect for the ingredients.',
    specialties: ['Dry-Aged Steaks', 'Whole Animal Preparation', 'Wood-Fired Vegetables', 'Sauce Development'],
    awards: ['Best Grill Chef 2019', 'BBQ Master 2020'],
    image: '/placeholder.jpg'
  }
];

export default function ChefDetailPage({ params }) {
  const [activeTab, setActiveTab] = useState('bio');
  
  const chef = chefsData.find(c => c.id === params.id);
  
  if (!chef) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="container mx-auto px-4">
          <Link 
            href="/chefs" 
            className="inline-flex items-center text-white hover:text-orange-200 mb-6"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Chefs
          </Link>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-96 bg-gray-300"></div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{chef.name}</h1>
                  <p className="text-orange-600 font-medium text-lg mb-4">{chef.position}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
                      {chef.experience}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">
                      {chef.specialty}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{chef.bio}</p>
                  
                  <div className="flex gap-4">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition">
                      Book Chef Experience
                    </button>
                    <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-full font-medium transition">
                      View Signature Dishes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab('bio')}
                className={`py-4 px-6 font-medium text-lg ${
                  activeTab === 'bio'
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Biography
              </button>
              <button
                onClick={() => setActiveTab('specialties')}
                className={`py-4 px-6 font-medium text-lg ${
                  activeTab === 'specialties'
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Specialties
              </button>
              <button
                onClick={() => setActiveTab('awards')}
                className={`py-4 px-6 font-medium text-lg ${
                  activeTab === 'awards'
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Awards
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'bio' && (
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Full Biography</h2>
                <p className="text-gray-600 leading-relaxed">{chef.longBio}</p>
              </div>
            )}

            {activeTab === 'specialties' && (
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Culinary Specialties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {chef.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl mr-4">👨‍🍳</div>
                      <span className="font-medium text-gray-800">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'awards' && (
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Awards & Recognition</h2>
                <div className="space-y-4">
                  {chef.awards.map((award, index) => (
                    <div key={index} className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                      <div className="text-3xl mr-4">🏆</div>
                      <div>
                        <h3 className="font-bold text-gray-800">{award}</h3>
                        <p className="text-gray-600 text-sm">Industry Recognition</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Signature Dishes */}
            <div className="mt-12 bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Signature Dishes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="h-32 bg-gray-300 rounded-lg mb-4"></div>
                  <h3 className="font-bold text-gray-800 mb-2">Featured Dish 1</h3>
                  <p className="text-gray-600 text-sm">Chef's signature creation</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="h-32 bg-gray-300 rounded-lg mb-4"></div>
                  <h3 className="font-bold text-gray-800 mb-2">Featured Dish 2</h3>
                  <p className="text-gray-600 text-sm">Seasonal specialty</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="h-32 bg-gray-300 rounded-lg mb-4"></div>
                  <h3 className="font-bold text-gray-800 mb-2">Featured Dish 3</h3>
                  <p className="text-gray-600 text-sm">Award-winning recipe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}