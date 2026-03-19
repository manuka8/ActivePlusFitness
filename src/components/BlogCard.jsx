import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-dark-card rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 border border-gray-100 dark:border-slate-800 group h-full flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 bg-primary rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 mb-4 font-bold uppercase tracking-wider">
          <div className="flex items-center gap-1.5">
            <FaCalendarAlt className="text-primary" />
            {blog.date}
          </div>
          <div className="flex items-center gap-1.5">
            <FaUser className="text-primary" />
            {blog.author}
          </div>
        </div>

        <h3 className="text-xl font-black text-light-text dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
          {blog.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {blog.excerpt}
        </p>

        <Link 
          to={`/blog/${blog.id}`}
          className="inline-flex items-center text-primary font-black text-xs uppercase tracking-widest group/btn"
        >
          Read Content
          <FaArrowRight className="ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
