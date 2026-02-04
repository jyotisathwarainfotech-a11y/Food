import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-orange-500">FoodDelight</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the finest cuisine crafted with passion and fresh ingredients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              View Our Menu
            </Link>
            <Link 
              href="/reservation" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Make Reservation
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Dishes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and delicious dishes that our customers love
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dish 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden menu-item">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Grilled Salmon</h3>
                <p className="text-gray-600 mb-4">Fresh Atlantic salmon grilled to perfection with herbs and lemon</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">$24.99</span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full transition">Add to Cart</button>
                </div>
              </div>
            </div>
            
            {/* Dish 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden menu-item">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Truffle Pasta</h3>
                <p className="text-gray-600 mb-4">Homemade pasta with black truffle sauce and parmesan</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">$18.99</span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full transition">Add to Cart</button>
                </div>
              </div>
            </div>
            
            {/* Dish 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden menu-item">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Beef Steak</h3>
                <p className="text-gray-600 mb-4">Premium ribeye steak cooked to your preference with seasonal vegetables</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">$32.99</span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full transition">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/menu" 
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="h-96 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, FoodDelight has been serving the community with exceptional cuisine
                made from the freshest ingredients. Our passion for food and dedication to quality
                has made us a beloved destination for food lovers.
              </p>
              <p className="text-gray-600 mb-6">
                With our expert chefs and warm atmosphere, we create memorable dining experiences
                that bring families and friends together.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-orange-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-orange-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-orange-200">Menu Items</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-orange-200">Online Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Delicious Food?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience. Reserve your table today or order online for delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/reservation" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Make Reservation
            </Link>
            <Link 
              href="/shop" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
