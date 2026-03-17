import React from 'react';
import { motion } from 'framer-motion';
import { 
  IoFitnessOutline, 
  IoBicycleOutline, 
  IoScaleOutline, 
  IoNutritionOutline 
} from "react-icons/io5";
import { GiMuscleUp, GiJumpingRope } from "react-icons/gi";

const services = [
  {
    icon: <GiMuscleUp size={40} />,
    title: "Strength Training",
    description: "Build muscle and increase your power with our comprehensive free weights and resistance machines."
  },
  {
    icon: <IoFitnessOutline size={40} />,
    title: "Personal Training",
    description: "1-on-1 coaching sessions designed to push your limits and maximize your results in minimal time."
  },
  {
    icon: <IoBicycleOutline size={40} />,
    title: "Cardio Programs",
    description: "Improve your endurance and stamina with top-tier treadmills, ellipticals, and cycling classes."
  },
  {
    icon: <IoScaleOutline size={40} />,
    title: "Weight Loss Programs",
    description: "Effective fat-burning routines combining high-intensity intervals with sustainable nutrition advice."
  },
  {
    icon: <GiJumpingRope size={40} />,
    title: "CrossFit Training",
    description: "Intense functional movements performed at high intensity to build overall athletic conditioning."
  },
  {
    icon: <IoNutritionOutline size={40} />,
    title: "Nutrition Guidance",
    description: "Expert dietary counselling to fuel your workouts and optimize your recovery and growth."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-light-text dark:text-white tracking-tighter mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              From intense lifting sessions to holistic nutritional planning, we provide everything you need to hit your targets.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="text-slate-300 dark:text-slate-600 mb-6 group-hover:text-primary transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
