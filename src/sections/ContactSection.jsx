import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-light-text dark:text-white tracking-tighter mb-4"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Ready to transform your life? Reach out to us for membership inquiries, personal training sessions, or general questions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-primary/20 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-light-text dark:text-white mb-2">Our Location</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  2nd Floor, Colts Cricket Club,<br/> Colombo 00500, Sri Lanka
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-primary/20 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <FaPhoneAlt size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-light-text dark:text-white mb-2">Phone Number</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  +94 77 182 3014<br/>
                  Mon-Fri, 6am-10pm
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-primary/20 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-light-text dark:text-white mb-2">Email Address</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  info@activeplusfitness.com<br/>
                  support@activeplusfitness.com
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-gray-200 dark:bg-slate-800 rounded-2xl overflow-hidden mt-4 relative">
              <img 
                src="https://placehold.co/800x400/1e293b/d5a310?text=Map+Location" 
                alt="Map Location"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </motion.div>

          {/* Contact Form Wrapper */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
