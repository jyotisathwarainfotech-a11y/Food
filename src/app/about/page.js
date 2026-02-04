import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the passion, tradition, and dedication behind FoodDelight
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="h-80 bg-gray-300 rounded-lg"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Beginning</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010 by Chef Maria Rodriguez, FoodDelight began as a small family restaurant 
                  with a big dream - to serve exceptional food made with love and the finest ingredients.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a humble 30-seat establishment has grown into a beloved dining destination, 
                  serving thousands of customers who have become like family to us.
                </p>
                <p className="text-gray-600">
                  Our commitment to quality, authenticity, and exceptional service has remained unchanged 
                  throughout our journey.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="h-80 bg-gray-300 rounded-lg"></div>
              </div>
              <div className="md:order-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Philosophy</h2>
                <p className="text-gray-600 mb-4">
                  We believe that great food brings people together. Every dish we create is crafted with:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">•</span>
                    <span className="text-gray-600">Fresh, locally-sourced ingredients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">•</span>
                    <span className="text-gray-600">Traditional cooking techniques with modern innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">•</span>
                    <span className="text-gray-600">Attention to detail in every preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">•</span>
                    <span className="text-gray-600">Passion for creating memorable dining experiences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every ingredient is carefully selected, 
                and every dish is prepared with meticulous attention to detail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Passion</h3>
              <p className="text-gray-600">
                Our chefs pour their heart and soul into every creation. 
                The passion for culinary excellence drives everything we do.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community</h3>
              <p className="text-gray-600">
                We're more than a restaurant - we're part of the community. 
                Building relationships and creating lasting memories is our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The talented individuals who make FoodDelight special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-64 bg-gray-300 rounded-full mx-auto mb-6 w-64"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Chef Maria Rodriguez</h3>
              <p className="text-orange-600 font-medium mb-3">Founder & Head Chef</p>
              <p className="text-gray-600">
                With over 20 years of experience, Maria brings her family's 
                culinary traditions to every dish.
              </p>
            </div>

            <div className="text-center">
              <div className="h-64 bg-gray-300 rounded-full mx-auto mb-6 w-64"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Chef James Wilson</h3>
              <p className="text-orange-600 font-medium mb-3">Sous Chef</p>
              <p className="text-gray-600">
                James specializes in modern fusion cuisine and manages 
                our innovative seasonal menu.
              </p>
            </div>

            <div className="text-center">
              <div className="h-64 bg-gray-300 rounded-full mx-auto mb-6 w-64"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sarah Johnson</h3>
              <p className="text-orange-600 font-medium mb-3">Restaurant Manager</p>
              <p className="text-gray-600">
                Sarah ensures every guest has an exceptional experience 
                from reservation to farewell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Story?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us for dinner and taste the passion that has been our foundation for over a decade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/reservation" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Make Reservation
            </Link>
            <Link 
              href="/menu" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}