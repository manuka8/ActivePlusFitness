import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaQuoteLeft, FaClock } from 'react-icons/fa';

// Dummy Data (Same as Blog.jsx)
const blogsData = [
  {
    id: 1,
    title: "10 Essential Strength Training Tips for Beginners",
    category: "Strength Training",
    date: "March 15, 2026",
    author: "Marcus Wright",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    readTime: "8 min read",
    content: `
      <p>Starting a strength training journey is one of the best decisions you can make for your long-term health. However, without the right guidance, it can be easy to feel overwhelmed or risk injury. Here are ten essential tips to ensure you start on the right foot.</p>
      
      <h2>1. Leave Your Ego at the Door</h2>
      <p>The biggest mistake beginners make is trying to lift too heavy, too soon. Focus on form first. Muscle growth and strength gains will follow consistent, high-quality movements.</p>
      
      <blockquote>
        Focus on being 1% better every day. Consistency beats intensity every single time.
      </blockquote>

      <h2>2. Master the Compound Movements</h2>
      <p>Exercises like squats, deadlifts, bench presses, and rows provide the best "bang for your buck" by engaging multiple muscle groups and promoting functional strength.</p>
      
      <h2>3. Prioritize Recovery</h2>
      <p>The gym is where you stimulate muscle growth; the rest of the day is where you actually grow. Ensure you're getting 7-9 hours of sleep and allowing muscle groups 48 hours of rest before training them again.</p>
    `
  },
  {
    id: 2,
    title: "The Science of Cardiovascular Health",
    category: "Cardio",
    date: "March 12, 2026",
    author: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1374&auto=format&fit=crop",
    readTime: "6 min read",
    content: "<p>Cardiovascular health is the cornerstone of longevity...</p>"
  },
  // ... adding more for completeness in testing
  {
    id: 3,
    title: "Nutrition Myths Debunked: Fueling for Performance",
    category: "Nutrition",
    date: "March 10, 2026",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop",
    readTime: "10 min read",
    content: "<p>Stop falling for marketing traps...</p>"
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogsData.find(b => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-3xl font-black mb-6">Blog Post Not Found</h2>
        <Link to="/blog" className="text-primary font-bold">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-dark-bg transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Back */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="mb-8"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-500 hover:text-primary font-black uppercase tracking-widest text-xs transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Articles
          </Link>
        </motion.div>

        {/* Content Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
        >
          <span className="px-4 py-1.5 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg mb-6 inline-block">
            {blog.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-light-text dark:text-white leading-tight mb-8 tracking-tighter">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-12 font-bold border-y border-gray-100 dark:border-slate-800 py-6">
            <div className="flex items-center gap-2">
              <FaUser className="text-primary" />
              {blog.author}
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-primary" />
              {blog.date}
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-primary" />
              {blog.readTime || "5 min read"}
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-[40px] overflow-hidden mb-16 shadow-2xl"
        >
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full aspect-video object-cover" 
          />
        </motion.div>

        {/* Rich Content Area */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none 
            prose-headings:font-black prose-headings:tracking-tighter 
            prose-p:text-gray-600 dark:text-white 
            prose-blockquote:border-primary prose-blockquote:bg-primary/5 
            prose-blockquote:p-8 prose-blockquote:rounded-[32px] 
            prose-blockquote:not-italic prose-blockquote:font-bold
            prose-h2:text-3xl prose-h2:mt-12"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Share Section Placeholder */}
        <div className="mt-20 pt-12 border-t border-gray-100 dark:border-slate-800 text-center">
          <h4 className="text-xl font-black mb-6 dark:text-white">Enjoyed this article?</h4>
          <Link 
            to="/blog" 
          >
            Explore More Insights
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;
