import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TrainerCard = ({ image, name, specialty }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="h-80 w-full overflow-hidden bg-gray-200 dark:bg-slate-800">
        <motion.img 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src={image || "https://placehold.co/400x500/1e293b/d5a310?text=Trainer"} 
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Social Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center space-x-4">
           <a href="#" className="text-white hover:text-primary transition-colors"><FaInstagram size={20} /></a>
           <a href="#" className="text-white hover:text-primary transition-colors"><FaTwitter size={20} /></a>
           <a href="#" className="text-white hover:text-primary transition-colors"><FaFacebookF size={20} /></a>
        </div>
      </div>
      
      {/* Details */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-light-text dark:text-white mb-1">{name}</h3>
        <p className="text-sm font-medium text-primary uppercase tracking-wider">{specialty}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
