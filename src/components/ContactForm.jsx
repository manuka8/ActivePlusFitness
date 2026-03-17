import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Name is required.' });
      return;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Valid email is required.' });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Message is required.' });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-light-text dark:text-white mb-6">Send us a Message</h3>
      
      {status.message && (
        <div className={`p-4 rounded-md mb-6 ${status.type === 'error' ? 'bg-red-50 text-red-600 dark:bg-red-900/30' : 'bg-green-50 text-green-600 dark:bg-green-900/30'}`}>
          {status.message}
        </div>
      )}

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

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 bg-primary text-white font-bold rounded-md transition-all hover:bg-yellow-500 shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
