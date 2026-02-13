'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';

const blogPosts = [
  {
    id: '1',
    title: 'The Art of Perfect Grilling: Tips from Our Master Chef',
    content: `
      <p>Grilling is more than just cooking over an open flame – it's an art form that requires patience, technique, and understanding of your ingredients. As our Grill Master Chef Marcus Johnson shares, the key to perfect grilling lies in mastering the fundamentals.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Temperature Control is Everything</h2>
      <p>The most common mistake home grillers make is not paying attention to temperature zones. "You need both direct and indirect heat areas on your grill," explains Chef Marcus. "Direct heat for searing and indirect heat for slower cooking."</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">The Importance of Resting Time</h2>
      <p>One crucial step that many people skip is letting meat rest after grilling. "When you cut into meat immediately, you lose all those beautiful juices," says Chef Marcus. "Let it rest for 5-10 minutes, and you'll be amazed at the difference in flavor and texture."</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4>Wood Selection Matters</h2>
      <p>Different woods impart different flavors to your food. "Hickory gives a strong, bacon-like flavor perfect for ribs, while apple wood adds a subtle sweetness that works beautifully with poultry," Chef Marcus recommends.</p>
      
      <p>Master these fundamentals, and you'll be well on your way to grilling perfection!</p>
    `,
    date: '2024-01-15',
    author: 'Chef Marcus Johnson',
    category: 'Cooking Tips',
    image: '/placeholder.jpg',
    readTime: '5 min read',
    tags: ['grilling', 'cooking tips', 'meat', 'techniques']
  },
  {
    id: '2',
    title: 'Seasonal Ingredients: Why They Matter for Your Health',
    content: `
      <p>Eating seasonally isn't just a trend – it's a fundamental approach to better health and more sustainable living. Our Head Chef Maria Rodriguez explains why seasonal eating should be part of everyone's lifestyle.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Nutritional Benefits</h2>
      <p>Seasonal produce is harvested at peak ripeness, meaning it contains maximum nutrients. "When fruits and vegetables are allowed to ripen naturally on the plant, they develop higher levels of vitamins, minerals, and antioxidants," Chef Maria explains.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Environmental Impact</h2>
      <p>Choosing seasonal, local ingredients significantly reduces your carbon footprint. "Transporting out-of-season produce across long distances requires enormous amounts of fuel and packaging," she notes.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Flavor Advantages</h2>
      <p>There's simply no comparison between a tomato that ripened naturally in summer sun versus one picked green and ripened during transport. "The flavor difference is remarkable – sweet, complex, and authentic," Chef Maria emphasizes.</p>
      
      <p>Make seasonal eating a priority, and your body, taste buds, and planet will thank you.</p>
    `,
    date: '2024-01-12',
    author: 'Chef Maria Rodriguez',
    category: 'Health & Nutrition',
    image: '/placeholder.jpg',
    readTime: '7 min read',
    tags: ['health', 'nutrition', 'seasonal', 'sustainability']
  }
  // Add more blog posts as needed
];

export default function BlogPostPage({ params }) {
  const post = blogPosts.find(p => p.id === params.id);
  
  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="container mx-auto px-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-white hover:text-orange-200 mb-6"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>
              <div className="flex flex-wrap justify-center items-center gap-4 text-orange-100">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-96 bg-gray-300 rounded-xl mb-12"></div>
            
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-8 bg-gray-50 rounded-xl">
              <div className="flex items-start">
                <div className="h-16 w-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">About {post.author}</h3>
                  <p className="text-gray-600">
                    Expert chef with years of experience in culinary arts and a passion for sharing knowledge with food enthusiasts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map(post => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-48 bg-gray-300"></div>
                    <div className="p-6">
                      <span className="text-orange-600 text-sm font-medium">{post.category}</span>
                      <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-orange-600 font-medium hover:text-orange-700"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}