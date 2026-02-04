import Link from 'next/link';

const chefs = [
  {
    id: 1,
    name: 'Chef Maria Rodriguez',
    position: 'Founder & Head Chef',
    experience: '20+ years',
    specialty: 'Mediterranean Cuisine',
    bio: 'Maria brings her family\'s culinary traditions from Spain, combining traditional techniques with modern innovation.',
    image: '/placeholder.jpg',
    awards: ['James Beard Award 2018', 'Top Chef 2019', 'Culinary Excellence 2020']
  },
  {
    id: 2,
    name: 'Chef James Wilson',
    position: 'Sous Chef',
    experience: '15 years',
    specialty: 'Modern Fusion',
    bio: 'James specializes in creating innovative dishes that blend international flavors with local ingredients.',
    image: '/placeholder.jpg',
    awards: ['Rising Star Chef 2021', 'Innovation Award 2022']
  },
  {
    id: 3,
    name: 'Chef Sophia Chen',
    position: 'Pastry Chef',
    experience: '12 years',
    specialty: 'Artisan Desserts',
    bio: 'Sophia creates stunning desserts that are as beautiful as they are delicious, with expertise in French pastry techniques.',
    image: '/placeholder.jpg',
    awards: ['Best Pastry Chef 2020', 'Dessert Innovation 2021']
  },
  {
    id: 4,
    name: 'Chef Marcus Johnson',
    position: 'Grill Master',
    experience: '18 years',
    specialty: 'Grilled Specialties',
    bio: 'Marcus perfects the art of grilling, bringing out incredible flavors in meats and vegetables with his signature techniques.',
    image: '/placeholder.jpg',
    awards: ['Best Grill Chef 2019', 'BBQ Master 2020']
  }
];

export default function ChefsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Chefs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Talented culinary artists who bring passion and expertise to every dish
          </p>
        </div>
      </section>

      {/* Chefs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {chefs.map((chef) => (
              <div key={chef.id} className="bg-white rounded-2xl shadow-xl overflow-hidden chef-card">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <div className="h-80 bg-gray-300"></div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{chef.name}</h2>
                        <p className="text-orange-600 font-medium">{chef.position}</p>
                      </div>
                      <Link 
                        href={`/chefs/${chef.id}`}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
                      >
                        View Profile
                      </Link>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                        {chef.experience}
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {chef.specialty}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{chef.bio}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Awards & Recognition</h4>
                      <ul className="space-y-1">
                        {chef.awards.map((award, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <span className="text-orange-500 mr-2">🏆</span>
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Kitchen Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Behind every great meal is a dedicated team of culinary professionals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-32 w-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-gray-800">Kitchen Staff</h3>
              <p className="text-gray-600 text-sm">15+ professionals</p>
            </div>
            <div className="text-center">
              <div className="h-32 w-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-gray-800">Training Programs</h3>
              <p className="text-gray-600 text-sm">Monthly workshops</p>
            </div>
            <div className="text-center">
              <div className="h-32 w-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-gray-800">Sourcing</h3>
              <p className="text-gray-600 text-sm">Local partnerships</p>
            </div>
            <div className="text-center">
              <div className="h-32 w-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-gray-800">Innovation</h3>
              <p className="text-gray-600 text-sm">Seasonal menus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Culinary Excellence</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Taste the artistry and passion of our talented chefs in every dish
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              View Our Menu
            </Link>
            <Link 
              href="/reservation" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Make Reservation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}