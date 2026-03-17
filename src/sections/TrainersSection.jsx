import React from 'react';
import { motion } from 'framer-motion';
import TrainerCard from '../components/TrainerCard';
import trainer1 from '../assets/trainer1.png'
import trainer2 from '../assets/trainer2.png'
import trainer3 from '../assets/trainer3.png'
import trainer4 from '../assets/trainer4.png'
const trainersData = [
  {
    name: "Marcus Wright",
    specialty: "CrossFit Coach",
    image: trainer1
  },
  {
    name: "Elena Rodriguez",
    specialty: "Yoga & Pilates",
    image: trainer2
  },
  {
    name: "David Chen",
    specialty: "Strength & Conditioning",
    image: trainer3
  },
  {
    name: "Sarah Jenkins",
    specialty: "Nutrition & Weight Loss",
    image: trainer4
  }
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-24 bg-white dark:bg-dark-card transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-light-text dark:text-white tracking-tighter mb-4"
          >
            Meet Our <span className="text-primary">Trainers</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Our elite team of certified professionals brings years of experience, dedication, and passion to every single session.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainersData.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TrainerCard 
                name={trainer.name} 
                specialty={trainer.specialty} 
                image={trainer.image} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
