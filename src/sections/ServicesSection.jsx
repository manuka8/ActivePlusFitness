import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  IoFitnessOutline, 
  IoBicycleOutline, 
  IoScaleOutline, 
  IoNutritionOutline 
} from "react-icons/io5";
import { GiMuscleUp, GiJumpingRope } from "react-icons/gi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import background images
import strengthImg from '../assets/strength.png';
import personalImg from '../assets/personal.png';
import cardioImg from '../assets/cardio.png';
import weightlossImg from '../assets/weight_loss.png';
import crossfitImg from '../assets/crossfit.png';
import nutritionImg from '../assets/nutrition.png';

const services = [
  {
    icon: <IoBicycleOutline size={32} />,
    title: "Cardio Programs",
    description: "Improve your endurance and stamina with top-tier treadmills, ellipticals, and cycling classes.",
    bgImage: cardioImg,
    tag: "Endurance"
  },
  {
    icon: <IoScaleOutline size={32} />,
    title: "Weight Loss",
    description: "Effective fat-burning routines combining high-intensity intervals with nutrition advice.",
    bgImage: weightlossImg,
    tag: "Burn"
  },
  {
    icon: <GiJumpingRope size={32} />,
    title: "CrossFit Training",
    description: "Intense functional movements performed at high intensity to build athletic conditioning.",
    bgImage: crossfitImg,
    tag: "Functional"
  },
  {
    icon: <GiMuscleUp size={32} />,
    title: "Strength Training",
    description: "Build muscle and increase your power with our comprehensive free weights and resistance machines.",
    bgImage: strengthImg,
    tag: "Power"
  },
  {
    icon: <IoFitnessOutline size={32} />,
    title: "Personal Training",
    description: "1-on-1 coaching sessions designed to push your limits and maximize your results in minimal time.",
    bgImage: personalImg,
    tag: "Elite"
  },
  {
    icon: <IoNutritionOutline size={32} />,
    title: "Nutrition Guide",
    description: "Expert dietary counselling to fuel your workouts and optimize your recovery and growth.",
    bgImage: nutritionImg,
    tag: "Fuel"
  }
];

const ServicesSection = () => {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="relative min-h-[100dvh]  lg:h-screen flex items-center py-12 lg:py-0 bg-light-bg dark:bg-dark-bg transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Expertise</h4>
            <h2 className="text-4xl md:text-5xl font-black text-light-text dark:text-white tracking-tighter leading-tight">
              Elite Training <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">Tailored for You.</span>
            </h2>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border-2 border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-lg active:scale-95"
            >
              <FaChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 shadow-lg shadow-primary/20 active:scale-95"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <motion.div 
          ref={carouselRef}
          className="flex overflow-x-hidden gap-6 pb-10 cursor-grab active:cursor-grabbing select-none"
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] sm:min-w-[380px] h-[500px] relative rounded-[40px] overflow-hidden group shadow-xl"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.bgImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                  {/* Tag */}
                  <div className="absolute top-8 right-8">
                    <span className="px-4 py-1.5 bg-primary rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="w-12 h-1 bg-primary rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mobile Swipe Hint */}
        <div className="text-center mt-4 md:hidden">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="animate-pulse">←</span> Swipe to Explore <span className="animate-pulse">→</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
