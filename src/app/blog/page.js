import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Perfect Grilling: Tips from Our Master Chef',
    excerpt: 'Discover the secrets behind our perfectly grilled dishes and learn techniques that will elevate your home cooking.',
    date: '2024-01-15',
    author: 'Chef Marcus Johnson',
    category: 'Cooking Tips',
    image: '/placeholder.jpg',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Seasonal Ingredients: Why They Matter for Your Health',
    excerpt: 'Explore how using seasonal, locally-sourced ingredients benefits both your health and the environment.',
    date: '2024-01-12',
    author: 'Chef Maria Rodriguez',
    category: 'Health & Nutrition',
    image: '/placeholder.jpg',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Behind the Scenes: A Day in Our Kitchen',
    excerpt: 'Take a peek into the daily operations of our kitchen and meet the team that makes it all happen.',
    date: '2024-01-10',
    author: 'Sarah Johnson',
    category: 'Behind the Scenes',
    image: '/placeholder.jpg',
    readTime: '4 min read'
  },
  {
    id: 4,
    title: 'Wine Pairing Guide: Matching the Perfect Wine with Your Meal',
    excerpt: 'Learn the art of wine pairing and discover which wines complement our signature dishes perfectly.',
    date: '2024-01-08',
    author: 'Chef James Wilson',
    category: 'Food & Wine',
    image: '/placeholder.jpg',
    readTime: '6 min read'
  },
  {
    id: 5,
    title: 'Holiday Menu Planning: Creating Memorable Family Dinners',
    excerpt: 'Tips and tricks for planning stress-free holiday meals that will impress your family and friends.',
    date: '2024-01-05',
    author: 'Chef Sophia Chen',
    category: 'Holiday Specials',
    image: '/placeholder.jpg',
    readTime: '8 min read'
  },
  {
    id: 6,
    title: 'Sustainable Dining: Our Commitment to Environmental Responsibility',
    excerpt: 'Learn about our sustainability initiatives and how we\'re working to reduce our environmental impact.',
    date: '2024-01-03',
    author: 'FoodDelight Team',
    category: 'Sustainability',
    image: '/placeholder.jpg',
    readTime: '5 min read'
  }
];

const categories = [
  'All Posts',
  'Cooking Tips',
  'Health & Nutrition',
  'Behind the Scenes',
  'Food & Wine',
  'Holiday Specials',
  'Sustainability'
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">FoodDelight Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Culinary insights, cooking tips, and stories from our kitchen
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                className="px-6 py-3 rounded-full font-medium bg-gray-100 text-gray-700 hover:bg-orange-100 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden blog-card">
                <div className="h-48 bg-gray-300 relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {post.readTime}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-orange-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
                  >
                    Read More
                    <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest blog posts, recipes, and restaurant updates
          </p>
          
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-r-lg font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}