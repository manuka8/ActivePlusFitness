import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';
import BlogCard from '../components/BlogCard';

// Dummy Data
const blogsData = [
  {
    id: 1,
    title: "10 Essential Strength Training Tips for Beginners",
    category: "Strength Training",
    date: "March 15, 2026",
    author: "Marcus Wright",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    excerpt: "Starting your strength journey can be daunting. Here's a breakdown of the most important principles to follow...",
    content: "Full content here..."
  },
  {
    id: 2,
    title: "The Science of Cardiovascular Health",
    category: "Cardio",
    date: "March 12, 2026",
    author: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1374&auto=format&fit=crop",
    excerpt: "How cardio affects your heart and longevity. Explore the best routines for long-term health.",
    content: "Full content here..."
  },
  {
    id: 3,
    title: "Nutrition Myths Debunked: Fueling for Performance",
    category: "Nutrition",
    date: "March 10, 2026",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop",
    excerpt: "Stop falling for marketing traps. Learn the real science behind macronutrients and pre-workout fueling.",
    content: "Full content here..."
  },
  {
    id: 4,
    title: "The Future of Fitness: Wearable Tech in 2026",
    category: "Technology",
    date: "March 08, 2026",
    author: "David Chen",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1470&auto=format&fit=crop",
    excerpt: "From AI-powered coaches to advanced biometric sensors, see how technology is reshaping how we train.",
    content: "Full content here..."
  },
  {
    id: 5,
    title: "Mind-Body Connection: The Role of Flexibility",
    category: "Flexibility",
    date: "March 05, 2026",
    author: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1326&auto=format&fit=crop",
    excerpt: "Why mobility is just as important as muscle. A guide to improving your range of motion.",
    content: "Full content here..."
  },
  {
    id: 6,
    title: "Understanding Holistic Healthcare in Fitness",
    category: "Healthcare",
    date: "March 02, 2026",
    author: "Dr. James Wilson",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1470&auto=format&fit=crop",
    excerpt: "Integrating medical wellness with physical training for a truly balanced lifestyle.",
    content: "Full content here..."
  },
  {
    id: 7,
    title: "Mastering HIIT: Maximum Results in Minimum Time",
    category: "Cardio",
    date: "Feb 28, 2026",
    author: "Marcus Wright",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
    excerpt: "High Intensity Interval Training is a game changer. Learn how to structure your sessions effectively.",
    content: "Full content here..."
  },
  {
    id: 8,
    title: "Superfoods for Muscle Recovery",
    category: "Nutrition",
    date: "Feb 25, 2026",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop",
    excerpt: "Recover faster and come back stronger with these nutrient-dense recovery powerhouses.",
    content: "Full content here..."
  }
];

const categories = ["All", "Fitness", "Healthcare", "Strength Training", "Cardio", "Flexibility", "Nutrition", "Technology"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    return blogsData.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="pt-32 pb-24 bg-light-bg dark:bg-dark-bg min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">The Active Journal</h4>
            <h1 className="text-5xl md:text-7xl font-black text-light-text dark:text-white tracking-tighter leading-tight mb-6">
              Insights for your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">Fitness Journey.</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Expert advice, latest trends, and deep dives into everything health and fitness.
            </p>
          </motion.div>
        </div>

        {/* Filtering & Search Section */}
        <div className="mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between sticky top-24 z-30 py-4 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md">
          {/* Search Bar */}
          <div className="relative w-full lg:max-w-md group">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white dark:bg-dark-card border border-gray-100 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-light-text dark:text-white shadow-sm"
            />
          </div>

          {/* Categories Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 w-full lg:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-xl text-sm font-black whitespace-nowrap transition-all duration-300 border ${
                  selectedCategory === cat
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white dark:bg-dark-card border-gray-100 dark:border-slate-800 text-gray-600 dark:text-gray-400 hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <AnimatePresence mode="popLayout">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-20 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full mb-6">
                  <FiFilter size={32} />
                </div>
                <h3 className="text-2xl font-black text-light-text dark:text-white mb-2">No results found</h3>
                <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
              </motion.div>
            )}
           </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Blog;
