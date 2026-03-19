import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('Name is required.');
      return;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      toast.error('A valid email address is required.');
      return;
    }
    if (!formData.message.trim()) {
      toast.error('Message cannot be empty.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (!supabase) {
        throw new Error("Supabase is not configured. Backend unavailable.");
      }
      
      const { error } = await supabase
        .from('contacts')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: formData.message 
          }
        ]);
      
      if (error) throw error;
      
      toast.success('Your message has been sent successfully!', {
        duration: 4000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        iconTheme: {
          primary: '#d5a310',
          secondary: '#fff',
        },
      });
      
      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(error.message || 'An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-200 dark:bg-dark-card p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-light-text dark:text-white mb-6">Send us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary text-light-text dark:text-gray-100 transition-all"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary text-light-text dark:text-gray-100 transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary text-light-text dark:text-gray-100 transition-all resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setFormData({ name: '', email: '', message: '' })}
            disabled={isSubmitting}
            className="w-1/3 py-4 bg-gray-300 dark:bg-slate-700 text-gray-700 dark:text-gray-200 font-bold rounded-md transition-all hover:bg-gray-400 dark:hover:bg-slate-600 disabled:opacity-50"
          >
            Reset
          </button>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-2/3 py-4 bg-primary text-white font-bold rounded-md transition-all hover:bg-yellow-500 shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
